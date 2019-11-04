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

void generate(int low[10], int high[10], int range[10], double average[10], int *limit, int *timeCode){
	int i;
    int j;
	int k;
	int numbers[10][10];
	int section[10];
	int shelf;
	int done = 0;
	int highest;
	int lowest;

	cout << "Enter Limit:";
	cin >> *limit;
	cout << endl;

	cout << "Enter Time Code:";
	cin >> *timeCode;
	cout << endl; 

    srand(time(0));
	
	for (i=0; i<10; i++){	
			for (j=0; j<10; j++){
				numbers[i][j] = (rand()%*limit) + 1;
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
void createReport(int low[10], int high[10], int range[10], double average[10], int *limit, int *timeCode){
	int i;

	ofstream outReportFile("RNRD_Report.dat",ios::app);

	if (!outReportFile){
		cerr << "File could not be opened." << endl;
		exit(1);
	}

	outReportFile << "Time Code: " << *timeCode << endl;
	outReportFile << "Limit: " << *limit << endl << endl;


	for (i=0; i<10; i++){
				outReportFile << "low=" << low[i] << "  high=" << high[i] << "  range=" << range[i] << "  average=" << average[i] << endl;
			}
	
	cout << "Report Created" << endl;
}
void saveData(double average[10], int *limit, int *timeCode){
	int items = 0;

	ofstream outDataFile("data_collected.dat",ios::app);

	if (!outDataFile){
		cerr << "File could not be opened." << endl;
		exit(1);
	}

	cout << endl;

    outDataFile << *timeCode << ' ' << *limit << ' ' << average[0] << ' ' << average[1] << ' ' << average[2] << ' ' << average[3] << ' ' << average[4] << ' ' << average[5] << ' ' << average[6] << ' ' << average[7] << ' ' << average[8] << ' ' << average[9] << endl;
	cout << "Data Entered" << endl;
	
}

int main(int argc,int argv[])
{
	int control = 0;
	int limit;
	int low[10];
	int high[10];
	int range[10];
    double average[10];	
	char blank;
	int timeCode;
	
    do{
		cout << endl << endl;
		cout << "--- MENU FOR RANDOM NUMBER RANGE DETERMINING ---" << endl;
		cout << "1. Generate Random Numbers, Calculate Ranges and Averages" << endl;
		cout << "2. Create Report of Current Ranges and Averages" << endl;
		cout << "3. Enter Current Averages Data into Data File" << endl;
		cout << "4. Exit" << endl << endl;
		cout << "Enter Menu Choice: ";
		cin >> control;
		if (control == 1){
			generate(low, high, range, average, &limit, &timeCode);
		}
		else if (control == 2){
			createReport(low, high, range, average, &limit, &timeCode);
		}
		else if (control == 3){
			saveData(average, &limit, &timeCode);
		}
	} while ( control != 4);

	cout << "You have now exited the Random Number Range Determining Menu. ";

	cin >> blank ;

	return 0;
}
