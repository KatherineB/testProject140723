#include <stdio.h>

main(int argc, char *argv[])
{
 char c;
 int numCharReq = 0;
 int leftSquareBracketCount = 0;
 
 if(argc == 2){
         FILE *fp, *fopen();
	 fp = fopen(argv[1],"r");

         while(c != EOF){
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
 }
 else if(argc == 3){
         FILE *fp, *fopen();
	 fp = fopen(argv[1],"r");
         int inputNumChar = atoi(argv[2]);

	 while(c != EOF && numCharReq < inputNumChar){   
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
 }
 else{
     printf("Please enter the JSON file you wish to look at as a command line argument\n");
     printf("or the file and an integer for the number of characters if you just want\n");
     printf("to see a bit of the file without converting the whole thing.\n");
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

