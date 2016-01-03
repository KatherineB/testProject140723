#include <stdio.h>
#include <stdlib.h>
#include <time.h>

main(){
   char a[26] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   char row1[3];
   char row2[3];
   char row3[3];

   int i,j;
   int number;

   int outer = 3;
   int inner = 3;

   unsigned int seed;
   srand(time(NULL));

   for(i=0; i<outer; i++)
    {
      for(j=0; j<inner; j++)
        {
	    number = rand() % 26;
            printf("%c ",a[number]);
	   /* printf("Number:%d Letter:%c \n",x,a[x]); */
        }   
       printf("\n");
    }
   return 0;
} 

