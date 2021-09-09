#include <iostream>
#include<stdlib.h>
#include <ctime>
#include <unistd.h>
//#include <conio.h>
using namespace std;

class game
{
  
  public:
  int board [4][4],array[8];
  game();
  void createCards();
  void fillBoard();
  void play();
  void print();
  void print(int,int,int,int);
};

game::game()
{
  for(int i=0;i<4;i++)
  {
    for(int j=0;j<4;j++)
    {
      board[i][j]=0;
    }
  }
  for(int i=0;i<8;i++)
  array[i]=0;
}


void game::createCards()
{
    int newitem,size=8;
    srand((unsigned) time(0));
    for(int i=0;i<size;i++)
    {
    bool unique;
    do
    {
      unique=true;
      newitem=1+(rand()%10);
      for(int i1=0;i1<i;i1++)
      {
         if(array[i1]==newitem)
         {
           unique=false;     
            break;
         }
      }
    }while(!unique);
    array[i]=newitem;
    }
}


void game::fillBoard()
{
    for(int i=0;i<4;i++)
  {
    for(int j=0;j<4;j++)
    {
       board[i][j]=array[rand()%7];
    }
  }
}

void game::print()
{
  for(int i=0;i<4;i++)
  {
    for(int j=0;j<4;j++)
    {
        if(board[i][j]==0){cout<<"0 ";}
      else cout<<board[i][j]<<" ";
    }
    cout<<endl;
  }
}
void game::print(int r,int c,int r1,int c1)
{
  for(int i=0;i<4;i++)
  {
    for(int j=0;j<4;j++)
    {
      if(i==r&&j==c||(i==r1&&j==c1))
      cout<<board[i][j]<<" ";
      else cout<<"? ";
      //cout<<board[i][j]<<" ";
    }
    cout<<endl;
  }
}
void game::play()
{
    int ch,ch1,row,column,row1,column1;
    	 do{
		  cout<<"\n1.play";
		  cout<<"\n2.Rules";
		  cout<<"\n3.Exit\n";
		  cout<<"\nChoice: ";
		  cin>>ch;
		  switch (ch)
		  {
		  case 1:
					 do{
       print();
		  cout<<"\n1.enter row and column(count from 0) enter 100 100 to exit";
		  cout<<"\nChoice: ";
		  cin>>row>>column;
          if(row<4 &&column<4)
          {
            print(row,column,-1,-1);
            cout<<"\nEnter the co-ordinates of theMatching part";
            cin>>row1>>column1;
            print(row,column,row1,column1);
            if(board[row][column]==board[row1][column1])
              {cout<<"\nNUmber Found";board[row][column]=0;board[row1][column1]=0;}
             else
          cout<<"Numbers do not match\n";
              // print();
          }
          else
          cout<<"\nWrong input";
		  } while(row!=100&&column!=100);
				break;
		  case 2:
			cout<<"RULES";
				break;
		  case 3:
				cout<<"Thank You"<<endl;
				break;
		  default:
				cout<<"Invalid"<<endl;
		  }
	  } while(ch!=3);

}
  //    cout<<"\n";
  // system("clear");
int main()
{
  game g;
    g.createCards();
    for(int i=0;i<8;i++)
    cout<<g.array[i]<<" ";
     g.fillBoard();
    cout<<endl;
    g.print();
    // g.print(1,0);
  // g.play();
   return 0;
}