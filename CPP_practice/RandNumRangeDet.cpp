#include <iostream>
using std::cout;
using std::cin;
using std::endl;

#include <cstdlib>
using namespace std;

#include <ctime>

int main(int argc,int argv[])
{
	int i;
    int j;
	int k;
	int LIMIT = 70;
	int done = 0;
	int shelf;
	int numbers[10][10];
	char blank;
	int lowest;
	int highest;
	int section[10];
	int low[10];
	int high[10];
	int range[10];
	double average[10];
	//int low[10] = {2,8,16,24,39,42,58,61,78,81};
	//int high[10] = {7,14,21,34,47,58,71,73,85,97};
	
	srand(time(0));
	
	for (i=0; i<10; i++){	
			for (j=0; j<10; j++){
				numbers[i][j] = (rand()%LIMIT) + 1;
			}			
	}

	for (i=0; i<10; i++){	    
			do{
				done = 1;
				for (j=0; j<9; j++){
					if (numbers[i][j+1] < numbers[i][j]){
						shelf = numbers[i][j];
						numbers[i][j] = numbers[i][j+1];
						numbers[i][j+1] = shelf;
						done = 0;
					}
				}
			}while(done == 0);	    
	}
	
	for(j=0;j<10;j++){
			for (i=0;i<10; i++){				
				section[i] = numbers[i][j];
				lowest = section[i];
				highest = section[i];

				for (k=0; k<10; k++){
					if (section[k] < lowest){
						lowest = section[k];
					}
					if (section[k] > highest){
						highest = section[k];
					}
				}
			}
			low[j] = lowest;
			high[j] = highest;
			range[j] = highest - lowest;
			average[j] = (lowest + highest)/2.0;       
	}
    for (k=0; k<10; k++){
		cout << "low=" << low[k] << "  high=" << high[k] << "  range=" << range[k] << "  average=" << average[k] << endl;
	}
	/*for (k=0; k<10; k++){
		range[k] = high[k] - low[k];	
		cout << range[k] << endl;
	}*/
	
	cin >> blank ;

	return 0;
}
