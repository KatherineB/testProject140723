#include <stdio.h>

main()
{

 char c;
 int numCharReq = 0;

 FILE *fp, *fopen();
 fp = fopen("products.json","r");

   while(c != EOF && numCharReq < 500 ){   
     c = getc(fp);
     if(c != EOF){
        printf("%c",c);
        if(c == '{' || c == ',' || c == '['){
           printf("\n");
        }
      numCharReq++;
     }
     
  /*printf("the character is %c\n",c);*/
 /* putc(c, stdout);*/
   }
  printf("\n\n");
  printf("The number of characters was %d\n",numCharReq);
}
 
 
