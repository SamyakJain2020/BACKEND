#include<iostream>
using namespace std;

class Complex{

    float real,img;
    public:

    Complex(){
        real=0.0;img=0.0;
    }

    Complex operator+(Complex c){

        Complex temp;
        temp.real=c.real+real;
        temp.img=c.img+img;
        return temp;
    }

    Complex operator-(Complex c){

        Complex temp;
        temp.real=c.real-real;
        temp.img=c.img-img;
        return temp;
    }
    Complex operator*(Complex c){
        Complex temp;
        temp.real=(real * c.real ) - (img*c.img);
        temp.img=(real*c.img) + (img*c.real);
        return temp;
    }

    friend istream &operator>>(istream &i,Complex &s){
        cout<<"Enter the real part"<<endl;
        i>>s.real;
        cout<<"Enter img part "<<endl;
        i>>s.img;
        return i;
    }

    friend ostream &operator<<(ostream &o,Complex &s){
        o<<s.real<<" + "<<s.img<<"i"<<endl;
        return o;
    }

};

int main(){

    Complex c1,c2,c3,c4,c5;
    cin>>c1;
    cin>>c2;
    int choice;
    cout<<"Enter choice:-"<<endl;
    cout<<"Enter 1 for addition\nEnter 2 for substraction\nEnter 3 for multiplication"<<endl;
    cin>>choice;
    switch (choice)
    {
    case 1:
    c3=c1+c2;
    cout<<"Addition of two numbers is  "<<c3<<endl;
    break;
    case 2:
    c4=c1=c2;
    cout<<"Subtraction of two numbers is  "<<c4<<endl;
    break;
    case 3:
     c5=c1*c2;
    cout<<"Multiplication n of two numbers id "<<c5<<endl;
    break;
    default:
    cout<<"Enter other choice"<<endl;
    break;
    }
    return 0;
}