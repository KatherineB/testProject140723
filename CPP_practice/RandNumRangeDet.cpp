#include <iostream>
using std::cout;
using std::cin;
using std::endl;

#include <cstdlib>
using std::rand;

void swap(int x, int y);

int main(int argc,int argv[])
{
	int i;
    int j;
	int loop;
	int even = 1;
	int odd = 1;
	int done;
	int shelf;
	int numbers[10][10];
	char blank;

   // srand(384);
	srand(9833);
//	for (i=0; i<10; i++){
			for (j=0; j<10; j++){
				numbers[0][j] = rand()%100;
				cout << numbers[0][j] << endl;
			}
			
//	}
	cout << endl;

	for (loop=0;loop<5;loop++){
		even = 1;
		odd = 1;
		for (j=0; j<10; j+=2){
			if (numbers[0][j+1] < numbers[0][j]){
				shelf = numbers[0][j];
				numbers[0][j] = numbers[0][j+1];
				numbers[0][j+1] = shelf;
				even = 0;
			}
			
		 //  cout << numbers[0][j] << endl;
		  // cout << numbers[0][j+1] << endl;
		}
		cout << endl;
		for (j=1; j<8; j+=2){
			if (numbers[0][j+1] < numbers[0][j]){
				shelf = numbers[0][j];
				numbers[0][j] = numbers[0][j+1];
				numbers[0][j+1] = shelf;
				odd = 0;
			}
			
		   //cout << numbers[0][j] << endl;
		  // cout << numbers[0][j+1] << endl;
		}
		if (even + odd == 2){
			done = 1;
		}
		else{
			done = 0;
		}
		cout << even << odd << done << endl;
	}
    for (j=0; j<10; j++){
		cout << numbers[0][j] << endl;
	}
	cin >> blank ;

	return 0;
}
void swap(int x, int y){
	int shelf;
    shelf = x;
	x = y;
	y = shelf;
	cout << x << endl;
	cout << y << endl;
}