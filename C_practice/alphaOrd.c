#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int i,j,k;
char checkArray[25] = "1234567890123456789012345";
int counter = 0;
int flag = 0;

main(){
   char letters[26] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   char row1[5];
   char row2[5];
   char row3[5];
   char row4[5];
   char row5[5];
  
   int number;

   int outer = 5;
   int inner = 5;

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
            printf("%c ",letters[number]);         
        }   
       printf("\n");
    }
 /*   for(k=0; k<counter; k++){
          printf("%c ",checkArray[k]);
    } */
   return 0;
} 

int checkForDuplicates(pick){
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

