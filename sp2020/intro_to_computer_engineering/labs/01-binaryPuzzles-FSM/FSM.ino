/*
   FSM assignment
*/

#include <Arduino.h>
#include <Wire.h>

enum State {
  up0,
  up1,
  up2,
  up3,
  up4,
  up5,
  up6,
  up7,
  down0,
  down1,
  down2,
  down3,
  down4,
  down5,
  down6,
  down7,
};

State counterState = up0;

bool bit1;
bool bit2;
bool bit3;

 
void setup() {
  Serial.begin(9600);
}

void loop() {
  counterState = nextState(counterState);
  delay(500);
}


State nextState(State state){
  switch (state) {
    case up0:

      bit1 = 0;
      bit2 = 0;
      bit3 = 0;

      pprint(0);

      if (checkReverse() == false){
        state = up1; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down0;
      }
      
      break;

     case up1:
      bit1 = 0;
      bit2 = 0;
      bit3 = 1;
      pprint(1);
      
      if (checkReverse() == false){
        state = up2; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down7;
      }

      break;

     case up2:
      bit1 = 0;
      bit2 = 1;
      bit3 = 0;
      pprint(2);

      if (checkReverse() == false){
        state = up3; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down6;
      }
      
      break;

     case up3:
      bit1 = 0;
      bit2 = 1;
      bit3 = 1;
      pprint(3);
      
      if (checkReverse() == false){
        state = up4; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down5;
      }
      
      break;

     case up4:
      bit1 = 1;
      bit2 = 0;
      bit3 = 0;
      pprint(4);
      
      if (checkReverse() == false){
        state = up5; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down4;
      }
      
      break;

     case up5:
      bit1 = 1;
      bit2 = 0;
      bit3 = 1;
      pprint(5);

      if (checkReverse() == false){
        state = up6; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down3;
      }
      
      break;

     case up6:
      bit1 = 1;
      bit2 = 1;
      bit3 = 0;
      pprint(6);
      
      if (checkReverse() == false){
        state = up7; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down2;
      }
      
      break;

     case up7:
      bit1 = 1;
      bit2 = 1;
      bit3 = 1;
      pprint(7);
      
      if (checkReverse() == false){
        state = up0; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = down1;
      }
      break;

     case down0:

      bit1 = 1;
      bit2 = 1;
      bit3 = 1;

      pprint(7);

      if (checkReverse() == false){
        state = down1; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up0;
      }
      
      break;

     case down1:
      bit1 = 1;
      bit2 = 1;
      bit3 = 0;
      pprint(6);

      if (checkReverse() == false){
        state = down2; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up7;
      }
      
      break;

     case down2:
      bit1 = 1;
      bit2 = 0;
      bit3 = 1;
      pprint(5);

      if (checkReverse() == false){
        state = down3; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up6;
      }
      
      break;

     case down3:
      bit1 = 1;
      bit2 = 0;
      bit3 = 0;
      pprint(4);

      if (checkReverse() == false){
        state = down4; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up5;
      }
      
      break;

     case down4:
      bit1 = 0;
      bit2 = 1;
      bit3 = 1;
      pprint(3);

      if (checkReverse() == false){
        state = down5; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up4;
      }
      
      break;

     case down5:
      bit1 = 0;
      bit2 = 1;
      bit3 = 0;
      pprint(2);

      if (checkReverse() == false){
        state = down6; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up3;
      }
      
      break;

     case down6:
      bit1 = 0;
      bit2 = 0;
      bit3 = 1;
      pprint(1);
      
      if (checkReverse() == false){
        state = down7; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up2;
      }
      
      break;

     case down7:
      bit1 = 0;
      bit2 = 0;
      bit3 = 0;
      pprint(0);

      if (checkReverse() == false){
        state = down0; //next state
      }
      else {
        Serial.println("--Reverse--");
        state = up1;
      }
      
      break;
           
  }
  return state;
}

void pprint(int state) {
  Serial.print(state);
  Serial.print("  :  ");
  Serial.print(bit3);
  Serial.print(bit2);
  Serial.println(bit1);
}

bool checkReverse(){
  int input = Serial.read(); //checks for keyboard input
  if (input != -1) {
    return true;
  }
  else {
    return false;
  }
}
