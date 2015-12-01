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
 char jsonKey1[] = "10";
 
 if(argc == 2){
         FILE *fp, *fopen();
	 fp = fopen(argv[1],"r");
         fgets(line, 200, fp);
         printf("%s\n",line);
     
      /*   printf("%c\n",singleChar); */
         
       while(i<140 /*&& found != 1*/){
              singleChar = line[i];
              
              printf("%d ",i);
              printf("%c\n",singleChar);
              
              if(line[i] == jsonKey1[0]){
                   printf("in if\n");
                   j = i;
                   while(line[j] == jsonKey1[k]){
                          printf("j=%d k=%d letter=%c\n",j,k,line[j]);
                          j++;
                          k++;                       
                   }
                   if(k > 1){
                        found++;
                   }                 
                   j=0;
                   k=0;                 
              }
              i++;
         }
         
         printf("Number of Times String Occurs:%d\n",found);
 }
 else if(argc == 3){
      
 }
 else{
  
 }

  
}



