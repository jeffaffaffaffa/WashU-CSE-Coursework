#include"MorseCodes.h"

const int led = 13;
const unsigned long delta = 500;
long nextLedOff = 0; 
long nextRead = 0; 
bool ledOn = false; 
int globalCounter;
String globalCode;
enum State {
  dot,
  dash,
  space,
  pause
};

State state = pause;

// Argument: Any character
// Return Value: Either:
//                  1) If the character is a letter, the upper case equivalent.  
//                  2) If the character is not a letter, the original value.
char toUpper(char c) {
  // TODO
  if (c > 96 && c < 123) {
    c = c | 256;
    c = c - 32;
  }
  return c;
}


void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  //digitalWrite(led, LOW);
}


void convertIncomingCharsToMorseCode() {
  // TODO
  unsigned long currentTime = millis();
  byte incomingByte;
  String code;
  if(Serial.available() > 0) {
      incomingByte = Serial.read();
      code = morseEncode(toUpper(incomingByte));
      globalCode = code;
      Serial.println(toUpper(incomingByte));
      Serial.println(code);
      int counter = 0;
      while (counter < code.length()) {
        bool prevLedOn = ledOn;
        state = nextState(state, code.charAt(counter));
        if (state == pause && prevLedOn != ledOn) {
          counter++;
          globalCounter = counter;
      }
    }
  }
}

State nextState(State state, char symbol) {
  unsigned long currentTime = millis();
  
  switch (state) {

    case pause:
      ledOn = false;
      Serial.println("pause case");
      if (currentTime >= nextRead && symbol == '.'){
        state = dot;
        nextLedOff = currentTime + delta;
      } else if (currentTime >= nextRead && symbol == '-'){
        state = dash;
        nextLedOff = currentTime + 3*delta;
      } else if (currentTime >= nextRead && symbol == ' '){ 
        state = space;
        nextLedOff = currentTime + 7*delta;
      }
      break;
    
    case dot:
      ledOn = true;
      Serial.println("dot case");
      if (currentTime >= nextLedOff) {
        digitalWrite(led, LOW);
        if (globalCounter == globalCode.length() - 1){
          nextRead = currentTime + 3*delta;
        } else {
          nextRead = currentTime + delta;
        }
        //nextRead = currentTime + 3*delta;
        state = pause;
      } else {
        digitalWrite(led, HIGH);
      }
      
      break;

    case dash:
      ledOn = true;
      Serial.println("dash case");
      if (currentTime >= nextLedOff) {
        digitalWrite(led, LOW);
        if (globalCounter == globalCode.length() - 1){
          nextRead = currentTime + 3*delta;
        } else {
          nextRead = currentTime + delta;
        }
        //nextRead = currentTime + 3*delta;
        state = pause;
      } else {
        digitalWrite(led, HIGH);
      }

      break;

    case space:
      ledOn = true;
      Serial.println("space case");
      Serial.println(currentTime);
      Serial.println(nextLedOff);

      if (currentTime >= nextLedOff){
        nextRead = currentTime + 3*delta;
        state = pause;
      }
//      if (currentTime >= nextLedOff && symbol == '.') {
//        nextRead = currentTime + 7*delta;
//        state = dot;
//      } else if (currentTime >= nextLedOff && symbol == '-'){
//        nextRead = currentTime + 7*delta;
//        state = dash;
//      } else if (currentTime >= nextLedOff && symbol == ' '){
//        nextRead = currentTime + 7*delta;
//        state = space;
//      }

      break;
  }
  return state;
}

void loop() {
  // No Need to Modify this.  Put most of your code in "convertIncomingCharsToMorseCode()"
  convertIncomingCharsToMorseCode();
}
