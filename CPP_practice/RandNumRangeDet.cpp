#include <iostream>
using std::cout;
using std::cin;
using std::endl;
using std::cerr;
using std::ios;

#include <cstdlib>
using namespace std;
using std::exit;

#include <ctime>

#include <fstream>
using std::ofstream;

void generate(int limit){
	int i;
    int j;
	int k;
	int numbers[10][10];
	int section[10];
	int low[10];
	int high[10];
	int range[10];
	double average[10];
	int shelf;
	int done = 0;
	int highest;
	int lowest;

	        srand(time(0));
			
			for (i=0; i<10; i++){	
					for (j=0; j<10; j++){
						numbers[i][j] = (rand()%limit) + 1;
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

}
void saveData(){
	int items = 0;
	double data [10];
	int dateCode;
	int limit;

	ofstream outDataFile("data_collected.dat",ios::app);

			if (!outDataFile){
				cerr << "File could not be opened." << endl;
				exit(1);
			}

			cout << "Enter date code:";
	cin >> dateCode;
	cout << endl;

	cout << "Enter Limit:";
	cin >> limit;
	cout << endl;

	cout << "Enter ten numbers, one at a time." << endl;

	while (items < 10) {
	   cout << items + 1;
	   cout << ">";
       cin >> data[items];
       items++;
    }

	cout << endl;

	outDataFile << dateCode << ' ' << limit << ' ' << data[0] << ' ' << data[1] << ' ' << data[2] << ' ' << data[3] << ' ' << data[4] << ' ' << data[5] << ' ' << data[6] << ' ' << data[7] << ' ' << data[8] << ' ' << data[9] << endl;

			cout << "Data Entered" << endl;
	
}

int main(int argc,int argv[])
{
	int control = 0;
	int limit = 70;
	char blank;
	int dateCode;
	
    do{
		cout << endl << endl;
		cout << "--- MENU FOR RANDOM NUMBER RANGE DETERMINING ---" << endl;
		cout << "1. Generate Random Numbers and Process" << endl;
		cout << "2. Enter Data into File" << endl;
		cout << "3. Exit" << endl << endl;
		cout << "Enter Menu Choice: ";
		cin >> control;
		if (control == 1){
			generate(limit);
		}
		else if (control == 2){
			saveData();
		}
	} while ( control != 3);

	cout << "You have now exited the Random Number Range Determining Menu. ";

	cin >> blank ;

	return 0;
}
