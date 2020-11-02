/* display

    CSE 132 - Assignment 7

    Fill this out so we know whose assignment this is.

    Name: Albert Kao
    WUSTL Key: albert.kao

    Name: Jeff Che
    WUSTL Key: jche

*/

const int row1 = 2;
const int row2 = 3;
const int row3 = 4;
const int row4 = 5;
const int row5 = 6;
const int row6 = 7;
const int row7 = 8;
const int col1 = 9;
const int col2 = 10;
const int col3 = 11;
const int col4 = 12;
const int col5 = 13;

const int up = A5;
const int down = A4;
const int frame = 10; //frame of 10 ms
int nextCase = 0;

bool upState;
bool prevUpState = 0;

bool downState;
bool prevDownState = 0;

unsigned long prevDownDBTime = 0; //DB: debounce

unsigned long prevUpDBTime = 0;
unsigned long debounceDelay = 30;

long period = 10;
unsigned long time_now = 0;

char c = 0x21;

#include "font.h"
//unsigned long lastBounce =0;

void setup () {
  // insert code here as needed

  Serial.begin(9600);

  //buttons
  pinMode(A4, INPUT_PULLUP);
  pinMode(A5, INPUT_PULLUP);
  //led board rows and cols
  pinMode(row1, OUTPUT);
  pinMode(row2, OUTPUT);
  pinMode(row3, OUTPUT);
  pinMode(row4, OUTPUT);
  pinMode(row5, OUTPUT);
  pinMode(row6, OUTPUT);
  pinMode(row7, OUTPUT);
  pinMode(col1, OUTPUT);
  pinMode(col2, OUTPUT);
  pinMode(col3, OUTPUT);
  pinMode(col4, OUTPUT);
  pinMode(col5, OUTPUT);
}

void loop () {
  // insert code here as needed
  int r1 = analogRead(up); // will return either HIGH or LOW
//  Serial.println(r1);

  bool upBtnPressed = false; //false initially, unless analog upBtnPressed is not 1024 (printing out, it is about 14)
  if (r1 < 50) { //Check if it is HIGH or LOW
    upBtnPressed = true;
  } 

  if (upBtnPressed != prevUpState) { //if previous up state is not equal to upBtnPressed, start counting time (means a transition to next state has been made due to noise or pressing)
    prevUpDBTime = millis(); //reset timer
  }

  if ((millis() - prevUpDBTime) > debounceDelay) { //borrowed debounce idea from studio 7
    if (upBtnPressed != upState) { //if button state has changed in debounce time
      upState = upBtnPressed;
      if (upState) {
        c = c + 1;
        if (c > 0x5f) {
          c = 0;
        }
//        Serial.println((int)c);
      }
    }
  }

  prevUpState = upBtnPressed; //it was pressed

  //same idea as above, repeated for down btn
  int r2 = analogRead(down);
//  Serial.println(r2);

  bool downBtnPressed = false;
  if (r2 < 100) {
    downBtnPressed = true;
  }

  if (downBtnPressed != prevDownState) {
    prevDownDBTime = millis();
  }

  if ((millis() - prevDownDBTime) > debounceDelay) {
    if (downBtnPressed != downState) {
      downState = downBtnPressed;
      if (downState) {
        c = c - 1;
        if (c < 0) {
          c = 0x5f;
        }
//        Serial.println((int)c);
      }
    }
  }

//  Serial.println((int)c); //current character state we are in: 0 to 95, the list of fonts
  prevDownState = downBtnPressed;

//  time_now = millis();
//  while (millis() < time_now + 5) {
//    //wait 10 ms?
//  }

  displayChar(c); //display the current character c on the led board
  delay(5);
}



//////////////////////////////
//display character function//
//////////////////////////////
void displayChar(char c) {
  for (int i = 2; i < 9; ++i) { //rows to low initially
    digitalWrite(i, LOW);
  }
  for (int i = 9; i < 14; ++i) {
    digitalWrite(i, HIGH); //columns to high initially
  }

  int line = 0;
  switch (nextCase) {

    case 0:

      digitalWrite(col1, LOW); //column 1 to low
      line = font_5x7[c][0];
      for (int i = 0; i < 7; ++i) {
        if ((line >> (7 - i)) & 1) { //if that row is what we want from this character's encoding, set to high
          digitalWrite((i + 2), HIGH);
        }
      }
      nextCase = 1;

      break;

    case 1:

      digitalWrite(col2, LOW);
      line = font_5x7[c][1];
      for (int i = 0; i < 7; ++i) {
        if ((line >> (7 - i)) & 1) {
          digitalWrite((i + 2), HIGH);
        }
      }
      nextCase = 2;

      break;

    case 2:

      digitalWrite(col3, LOW);
      line = font_5x7[c][2];
      for (int i = 0; i < 7; ++i) {
        if ((line >> (7 - i)) & 1) {
          digitalWrite((i + 2), HIGH);
        }
      }
      nextCase = 3;

      break;

    case 3:

      digitalWrite(col4, LOW);
      line = font_5x7[c][3];
      for (int i = 0; i < 7; ++i) {
        if ((line >> (7 - i)) & 1) {
          digitalWrite((i + 2), HIGH);
        }
      }
      nextCase = 4;

      break;

    case 4:

      digitalWrite(col5, LOW);
      line = font_5x7[c][4];
      for (int i = 0; i < 8; ++i) {
        if ((line >> (7 - i)) & 1) {
          digitalWrite((i + 2), HIGH);
        }
      }
      nextCase = 0;

      break;
  }

}

//A delta time variable for switching between columns (keep this timer at around 5 to 10 ms)
