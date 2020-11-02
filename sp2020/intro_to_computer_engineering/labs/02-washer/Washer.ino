//Fill in the values below with the pins that you chose to use
const int POT_PIN = A0;
const int BUTTON_PIN = 3;

const int HOT_PIN = 10;
const int COLD_PIN = 11;
const int DRY_PIN = 12;
const int LOCK_PIN = 13;

//int val = 0;

enum State {
  idle,
  cold,
  hot,
  medium,
  dry1,
  dry2,
};

State washerState = idle;

void setup() {
  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  //pinMode(POT_PIN, OUTPUT);
  pinMode(HOT_PIN, OUTPUT);
  pinMode(COLD_PIN, OUTPUT);
  pinMode(DRY_PIN, OUTPUT);
  pinMode(LOCK_PIN, OUTPUT);
}

void loop() { 
  washerState = nextState(washerState);
}

State nextState(State state) {
  int knob = analogRead(POT_PIN); //0: econ, 500ish: deluxe, 1000ish: super deluxe
  int btn = digitalRead(BUTTON_PIN); //1 is high (not pressed), 0 is low (pressed)

  if (knob < 50) {
    Serial.println("SELECTED MODE: ECON");
  } else if (knob > 450 && knob < 550) {
    Serial.println("SELECTED MODE: DELUXE");
  } else if (knob > 950) {
    Serial.println("SELECTED MODE: SUPER DELUXE");
  }
  
  switch (state) {
    case idle:
      if (btn == 0) {
        Serial.println("WASHER: ON");
        if (knob < 50) {
          state = cold; //economy
          Serial.println("ECONOMY");
        }
        else if (knob > 450 && knob < 550) {
          state = hot; //deluxe
          Serial.println("DELUXE");
        }
        else if (knob > 970) {
          state = hot; //super deluxe
          Serial.println("SUPER DELUXE");
        }
        digitalWrite(LOCK_PIN, HIGH);
      } else {
        state = idle;
        //Serial.println("WASHER: OFF");
      }
      break;

      case cold:
        Serial.println("COLD: 5 SEC");
        digitalWrite(COLD_PIN, HIGH);
        delay(5000);
        if (knob > 450 && knob < 550) {
          state = dry2;
        } else if (knob > 950) {
          state = dry2;
        } else {
          state = dry1;
        }
        digitalWrite(COLD_PIN, LOW);
        break;

      case hot:
        Serial.println("HOT: 7 SEC"); 
        digitalWrite(HOT_PIN, HIGH);
        delay(7000);
        if (knob < 50) {
          state = dry1;
        } else if (knob > 450 && knob < 550) {
          state = dry2;
        } else if (knob > 950) {
          state = medium;
        }
        digitalWrite(HOT_PIN, LOW);
        break;

      case medium:
        if (knob < 50) {
          state = dry1;
        } else {
          Serial.println("MEDIUM: 7 SEC");
          digitalWrite(HOT_PIN, HIGH);
          digitalWrite(COLD_PIN, HIGH);
          delay(7000);
          state = dry2;
          digitalWrite(HOT_PIN, LOW);
          digitalWrite(COLD_PIN, LOW);
        }
        break;

      case dry1:
        if (knob > 450 && knob < 550) {
          state = dry2;
        }
        else if (knob > 950) {
          state = dry2;
        } else {
          Serial.println("DRY: 2 SEC");
          digitalWrite(DRY_PIN, HIGH);
          delay(2000);
          state = idle;
          digitalWrite(DRY_PIN, LOW);
          digitalWrite(LOCK_PIN, LOW);
          Serial.println("WASH: DONE");
          }
        break;

      case dry2:
        if (knob < 50) {
          state = dry1;
        } else {
          Serial.println("DRY: 7 SEC");
          digitalWrite(DRY_PIN, HIGH);
          delay(7000);
          state = idle;
          digitalWrite(DRY_PIN, LOW);
          digitalWrite(LOCK_PIN, LOW);
          Serial.println("WASH: DONE");
        }
        break;
  }
  return state;
}
