#include <iostream>
#include <vector>
using namespace std;

void GetMovements() {
	string move;
	vector<string> movements;
	while (move != "play") {
		cout << "Moves: "; cin >> move;
	}
}

int main() {
	GetMovements();
	return 0;
}