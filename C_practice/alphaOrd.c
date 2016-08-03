#include <stdio.h>
#include <stdlib.h>

int i,j,k;
char checkArray[25] = "1234567890123456789012345";
int counter = 0;
int flag = 0;
char letterSquare[5][5];
int outer = 5;
int inner = 5;
char guess;
void searchLetterSquareArray(char);

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
   printf("Enter a letter\n");
   scanf("%c", &guess);
   
   searchLetterSquareArray(guess); 
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
void searchLetterSquareArray(char guess){
    
    for(i=0; i<outer; i++)
     {
      for(j=0; j<inner; j++)
        {
          if(guess == letterSquare[i][j]){
               printf("The letter %c is in position %d %d",guess,i,j);            
          }
        }
     }

} 

