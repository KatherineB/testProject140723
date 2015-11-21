#include <stdio.h>

main()
{

 char c;
 int numCharReq = 0;
 int leftSquareBracketCount = 0;
 int leftCurlyBracketCount = 0;
 int indentCount = 0;

 FILE *fp, *fopen();
 fp = fopen("products.json","r");

 while(c != EOF && numCharReq < 1000 ){   
	c = getc(fp);
	if(c != EOF){   
               switch(c){
               case '[':
                    leftSquareBracketCount++;
                    doIndent(leftSquareBracketCount);
                    printf("%c",c);
                    break;
               case ']':
                    leftSquareBracketCount--;
                    printf("%c",c);
                    break;
               case '{':
                    doIndent(leftSquareBracketCount);
                    printf("%c",c);
                    break;
               case ',':
                    printf("%c",c);
                    doIndent(leftSquareBracketCount);
                    break;
               default:
                    printf("%c",c);
               }
	 }
	 numCharReq++;    
 }
  printf("\n\n");
  printf("The number of characters was %d\n",numCharReq);
  printf("The number of left brackets was %d\n",leftSquareBracketCount);
}

doIndent(int count){
   int i;
   printf("\n");
   for(i=0; i<count; i++){
      printf("\t");
   } 
} 

