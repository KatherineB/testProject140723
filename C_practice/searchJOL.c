#include <stdio.h>
#include <string.h>

main(int argc, char *argv[])
{
 int i=0;
 int j=0;
 int k=0;
 char line[200];
 char singleChar;
 int found = 0;
 char jsonKey1[] = "product_name";
 
 
 if(argc == 2){
         FILE *fp, *fopen();
	 fp = fopen(argv[1],"r");
         fgets(line, 200, fp);
         printf("%s\n",line);

     
      /*   printf("%c\n",singleChar); */
         
       while(i<25 && found != 1){
              singleChar = line[i];
              printf("%c\n",singleChar);
              printf("%d\n",i);
              i++;
              if(singleChar == jsonKey1[0]){
                   printf("in if\n");
                   while(line[i+j] == jsonKey1[k]){
                          j++;
                          k++;
                          printf("In If:%c\n",line[j]);
                   }
                   if(k == 12){
                        found = 1;
                   }
                   else{
                        j=0;
                        k=0;
                   }
              }

         }
         
         
 }
 else if(argc == 3){
      
 }
 else{
  
 }

  
}



