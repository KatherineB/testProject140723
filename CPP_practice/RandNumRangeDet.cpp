#include <iostream>
using std::cout;
using std::cin;
using std::endl;

#include <cstdlib>
using std::rand;



int main(int argc,int argv[])
{
	int i;
    int j;
	int loop;
	int done = 0;
	int shelf;
	int numbers[10][10];
	char blank;

   // srand(384);
	srand(1000);
	for (i=0; i<10; i++){	
			for (j=0; j<10; j++){
				numbers[i][j] = rand()%100;
				//cout << numbers[0][j] << endl;
			}			
	}
	cout << endl;
	for (i=0; i<3; i++){
		    
			do{
				done = 1;
				for (j=0; j<9; j++){
					if (numbers[i][j+1] < numbers[i][j]){
						shelf = numbers[i][j];
						numbers[i][j] = numbers[i][j+1];
						numbers[i][j+1] = shelf;
						done = 0;
					}
				//	cout << "done=" << done << "  ";
				}
				cout << endl;

			}while(done == 0);
		    
	}
	
	for (i=0; i<3; i++){
		for (j=0; j<10; j++){
			cout << numbers[0][j] << endl;
		} 
		cout << "----" << endl;			
	}
	
	cin >> blank ;

	return 0;
}
