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
    char letter1 = sequence[0];
    char letter2 = sequence[1];
    int x1, x2, y1, y2;
    int xDiff, yDiff;
    
    for(i=0; i<outer; i++)
     {
      for(j=0; j<inner; j++)
        {
          if(letter1 == letterSquare[i][j]){
               printf("The first letter %c is in position %d %d \n",letter1,i,j);  
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
               printf("The second letter %c is in position %d %d \n",letter2,i,j);   
               x2 = i;
               y2 = j;          
          }
        }
     }
     xDiff = x1 - x2;
     yDiff = y1 - y2;

     if( xDiff < 2  && yDiff < 2 && xDiff > -2 && yDiff > -2){
         printf("Correct sequence!\n");
     }
     else{
        printf("Not a correct sequence\n");
     }

} 

