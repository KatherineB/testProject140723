#include <stdio.h>
#include <stdlib.h>
#include <string.h>  

int checkForDuplicates(int);
int checkAndScore(char[]);

int i,j,k,m;
char checkArray[25] = "1234567890123456789012345";
int lettersUsed[26] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
int counter = 0;
int flag = 0;
char letterSquare[5][5];
int outer = 5;
int inner = 5;
char sequence[];
int length;
int sequenceScore;
int finalScore;
int gameOver = 0;

main(){
   char letters[26] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   int number;

   unsigned int seed;
   srand(time(NULL));

   /*  These two loops set up a five character by five character display where there are
       no duplicate letters.
    */
   for(i=0; i<outer; i++)
    {
      for(j=0; j<inner; j++)
        {
	    number = rand() % 26;
            flag = checkForDuplicates(letters[number]);
            
            if(flag == 1){                
                  while(flag == 1){
                  number = rand() % 26;
                  flag = checkForDuplicates(letters[number]);
                  }
            }          
            checkArray[counter] = letters[number];
            counter++;
            letterSquare[i][j] = letters[number];
        }   
    } 
   printf("Enter Q to make game end\n\n");

   while(gameOver != 1){ 
       for(i=0; i<outer; i++){
           for(j=0; j<inner; j++)
              {   
                printf("%c ",letterSquare[i][j]);         
              }   
           printf("\n");
       } 

       printf("Enter a letter sequence\n");
       scanf("%s", sequence);

       printf("sequence=%s \n", sequence);
       printf("first letter=%c \n", sequence[0]);
       printf("length of sequence=%d \n", strlen(sequence));

       length = strlen(sequence);
  
       if ( (sequence[0] == 'Q' || sequence[0] == 'q') && length == 1)
         {
          gameOver = 1;
         }

       sequenceScore = checkAndScore(sequence); 
       finalScore += sequenceScore;
   }
   
   printf("Final Score: %d \n", finalScore);

   for (i=0; i<26; i++)
     {
      printf("%c %d   ",letters[i],lettersUsed[i]);
     }
   printf("\n");

   return 0;
} 

int checkForDuplicates(int pick){
      for(k=0; k<counter; k++){
           if(pick == checkArray[k]){
               flag = 1;
               return 1;
           }
           else{
               flag = 0;          
           }
      }
     return 0;
}
int checkAndScore(char sequence[]){
     int x1, x2, y1, y2;
     int xDiff, yDiff;
     int multiplier=2;
     int score;

     score = 0;

     /* convert any lower case letters to upper case */
     for(m=0; m<length; m++){
           if (sequence[m] >= 97 && sequence[m] <= 122){
               sequence[m] = sequence[m] - 32;
           }
     }

     for(k=0; k<length-1; k++){
	    char letter1 = sequence[0+k];
	    char letter2 = sequence[1+k];  
	    for(i=0; i<outer; i++)
	     {
	      for(j=0; j<inner; j++)
		{
		  if(letter1 == letterSquare[i][j]){
		       printf("Letter %d is in position %d %d ASCII: %d\n",k+1,i,j,letterSquare[i][j]);  
		       x1 = i;
		       y1 = j;          
		  }
		}
	     }

	     for(i=0; i<outer; i++)
	     {
	      for(j=0; j<inner; j++)
		{
		  if(letter2 == letterSquare[i][j]){
		       printf("Letter %d is in position %d %d ASCII: %d\n",k+2,i,j,letterSquare[i][j]);   
		       x2 = i;
		       y2 = j;          
		  }
		}
	     }
	     
             xDiff = abs(x1 - x2);
	     yDiff = abs(y1 - y2);

             if(length > 0)   /* for testing */
               {
                printf("xDiff = %d   yDiff = %d \n", xDiff,yDiff);
               }

             /* check that one letter is adjacent to another letter and that they are not both in the same position */
	     if( xDiff < 2  && yDiff < 2 && (xDiff + yDiff) != 0){
                  /* check that the letters are in proper alphabetical order and one is right after the other */
                  if(letterSquare[x1][y1] + 1 == letterSquare[x2][y2])
                    {
                        /* check if letter has already been used */
                        if(lettersUsed[letterSquare[x1][y1]-65] == 0 && lettersUsed[letterSquare[x2][y2]-65] == 0)
                          {
                           printf("ASCII 1: %d ASCII 2: %d\n", letterSquare[x1][y1],letterSquare[x2][y2]); 
		           score = score + multiplier;

                           lettersUsed[letterSquare[x1][y1]-65] = 1;
                           lettersUsed[letterSquare[x2][y2]-65] = 1; 

                           if(k <  length - 2)
                              {
                               lettersUsed[letterSquare[x2][y2]-65] = 0;
                              }

                           printf("score=%d  k=%d\n",score,k);
                          }
                        else{
                           printf("Each letter can only be used once when entering sequences\n");
                          }
                    }
                  else{
                    printf("Letters of alphabet must be consecutive and in proper alphabetical order\n");
                   }
	     }
	     else{
		printf("Next letter must be adjacent horizontally, vertically or diagonally\n");
	     }
             multiplier = multiplier * 2;
             
      }
      return score;
} 


