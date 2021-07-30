#include <bits/stdc++.h>
 
#define max 20
using namespace std;
 
struct employee {
    string name;
    string department;
    };
 
int num;
void showMenu();
 

employee emp[max], tempemp[max],
    sortemp[max], sortemp1[max];
 

void build()
{
    cout << "Build The Table\n";
    cout << "Maximum Entries can be "
         << max << "\n";
 
    cout << "Enter the number of "
         << "Entries required";
    cin >> num;
 
    if (num > 20) {
        cout << "Maximum number of "
             << "Entries are 20\n";
        num = 20;
    }
    cout << "Enter the following data:\n";
 
    for (int i = 0; i < num; i++) {
        cout << "Name ";
        cin >> emp[i].name;
 
        
 
        cout << "Department ";
        cin >> emp[i].department;

    }
 
    showMenu();
}
 

void insert()
{
    if (num < max) {
        int i = num;
        num++;
 
        cout << "Enter the information "
             << "of the Employee\n";
        cout << "Name ";
        cin >> emp[i].name;
 
        cout << "Department ";
        cin >> emp[i].department;
 
    }
    else {
        cout << "Employee Table Full\n";
    }
 
    showMenu();
}
 
// Function to delete record at index i
void deleteIndex(int i)
{
    for (int j = i; j < num - 1; j++) {
        emp[j].name = emp[j + 1].name;
        emp[j].department
            = emp[j + 1].department;
       
    }
    return;
}
 
// Function to delete record
void deleteRecord()
{
    cout << "Enter the Employee name "
         << "to Delete Record";
 
    int code;
 
    cin >> code;
    for (int i = 0; i < num; i++) {
        if (emp[i].code == code) {
            deleteIndex(i);
            num--;
            break;
        }
    }
    showMenu();
}
 
void searchRecord()
{
    cout << "Enter the Employee"
         << " ID to Search Record";
 
    int code;
    cin >> code;
 
    for (int i = 0; i < num; i++) {
 
        // If the data is found
        if (emp[i].code == code) {
            cout << "Name "
                 << emp[i].name << "\n";
 
           
 
            cout << "Department"
                 << emp[i].department << "\n";
 
        }
    }
 
    showMenu();
}
 
// Function to show menu
void showMenu()
{
 
    cout << "-------------------------"
         << "Employee"
         << " Management "
         << "-------------------------\n\n";
 
    cout << "Availiable Options:\n\n";
    cout << "Build Table         (1)\n";
    cout << "Insert New Entry    (2)\n";
    cout << "Delete Entry        (3)\n";
    cout << "Search a Record     (4)\n";
    cout << "Exit                (5)\n";
 
    int option;
 
   
    cin >> option;

    if (option == 1) {
        build();
    }
    else if (option == 2) {
        insert();
    }
    else if (option == 3) {
        deleteRecord();
    }
    else if (option == 4) {
        searchRecord();
    }
    else if (option == 5) {
        return;
    }
    else {
        cout << "Expected Options"
             << " are 1/2/3/4/5";
        showMenu();
    }
}
 

int main()
{
 
    showMenu();
    return 0;
}