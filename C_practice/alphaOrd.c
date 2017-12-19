#include <stdio.h>
#include <stdlib.h>

int checkForDuplicates(int);
void searchLetterSquareArray(char[]);
int i,j,k;
char checkArray[25] = "1234567890123456789012345";
int counter = 0;
int flag = 0;
char letterSquare[5][5];
int outer = 5;
int inner = 5;
char sequence[];
int length;
int score;
int temp;


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
            printf("%c ",letters[number]);         
        }   
       printf("\n");
    } 
   printf("Enter a letter sequence\n");
   scanf("%s", sequence);
   printf("sequence=%s \n", sequence);
   printf("first letter=%c \n", sequence[0]);


     printf("length of sequence=%d \n", strlen(sequence));
     length = strlen(sequence);
     /*printf("length of sequence=%d \n", length);*/

   
   searchLetterSquareArray(sequence); 
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
void searchLetterSquareArray(char sequence[]){
     int x1, x2, y1, y2;
     int xDiff, yDiff;
     int multiplier=2;

     score = 0;
     for(k=0; k<length-1; k++){
	    char letter1 = sequence[0+k];
	    char letter2 = sequence[1+k];  
	    for(i=0; i<outer; i++)
	     {
	      for(j=0; j<inner; j++)
		{
		  if(letter1 == letterSquare[i][j]){
		       printf("Letter %d is in position %d %d \n",k+1,i,j);  
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
		       printf("Letter %d is in position %d %d \n",k+2,i,j);   
		       x2 = i;
		       y2 = j;          
		  }
		}
	     }
	     xDiff = abs(x1 - x2);
	     yDiff = abs(y1 - y2);

	     if( xDiff < 2  && yDiff < 2){
		 score = score + multiplier;
                 printf("score=%d\n",score);
	     }
	     else{
		printf("Not a correct sequence\n");
	     }
             multiplier = multiplier * 2;
      }
      
      
} 



