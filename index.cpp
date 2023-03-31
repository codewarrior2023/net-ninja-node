#include <iostream>
using namespace std;

//function prototype
void swap(int, int);

int main() {
  int firstNum = 10;
  int secondNum = 20;

  cout << "Before swap: " << "\n";
  cout << firstNum << " " << secondNum << "\n";

  // Call the function, we want to swap the values of firstNum and secondNum
  swap(firstNum, secondNum);

  cout << "After swap: " << "\n";
  cout << firstNum << " " << secondNum << "\n"; //the values were not swapped

  return 0;
}

//swaps two values
void swap(int num1, int num2) {
  int temp = num1;
  num1 = num2;
  num2 = temp;
}