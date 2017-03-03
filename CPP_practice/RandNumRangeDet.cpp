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
	int loop;
	int done = 0;
	int shelf;
	int numbers[10][10];
	char blank;
	int low;
	int high;
	int section[10];
	//int low[10] = {2,8,16,24,39,42,58,61,78,81};
	//int high[10] = {7,14,21,34,47,58,71,73,85,97};
	int range[10];
	

   // srand(384);
	srand(time(0));
	
	for (i=0; i<10; i++){	
			for (j=0; j<10; j++){
				numbers[i][j] = rand()%100;
			}			
	}
	cout << endl;
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
				cout << endl;

			}while(done == 0);
		    
	}
	
/*	for (i=0; i<10; i++){
		for (j=0; j<10; j++){
			cout << numbers[i][j] << endl;
		} 
		cout << "----" << endl;			
	} */

	for (i=0;i<10; i++){
		
		cout << numbers[i][0] << endl;
		section[i] = numbers[i][0];
        low = section[i];
		high = section[i];

		for (k=0; k<10; k++){
			if (section[k] < low){
				low = section[k];
			}
			if (section[k] > high){
				high = section[k];
			}
		}

	}

	cout << "low=" << low << endl;
	cout << "high=" << high << endl;

/*	for (k=0; k<10; k++){
		range[k] = high[k] - low[k];	
		cout << range[k] << endl;
	}*/
	
	cin >> blank ;

	return 0;
}
