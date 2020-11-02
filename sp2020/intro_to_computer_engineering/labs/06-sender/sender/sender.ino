/* 
 *  
 *  CSE 132 - Assignment 6
 *  
 *  Fill this out so we know whose assignment this is.
 *  
 *  Name: Albert Kao
 *  WUSTL Key: albert.kao
 *  
 *  and if two are partnered together
 *  
 *  Name: Jeff Che
 *  WUSTL Key: jche
 */

int frequency= 1000;
int deltaTime= 0;
unsigned long timeStamp;
void setup() {
  Serial.begin(9600);
  analogReference(DEFAULT);
  pinMode(A0, INPUT_PULLUP);
  
}

void loop() {
  if(millis()>=deltaTime){
    timeStamp = millis();
    sendInfo("Send info test string.");
    //sendInfo("Send info test string that is over 100 characters longgggggggggggggggggggggggggggggggggggggggggggg hopefully this is long enough.");
    sendTime(timeStamp);
    sendPot(analogRead(A0));
    sendRawTemp(analogRead(A1));
    deltaTime= millis() + frequency;
  }
}
void sendInfo(char* x){
  Serial.write('!');
  Serial.write(0x30);
  Serial.write(strlen(x) >> 8); //wrong
  Serial.write(strlen(x) & 0xff); //wrong

  for(int i=0; i<strlen(x); i++){
    Serial.write(x[i]);
  }
}
//Look for how to get the length of a char*
void sendError(char* x){
    Serial.write('!');
    Serial.write(0x31);
    Serial.write(strlen(x) >> 8); //wrong
    Serial.write(strlen(x) & 0xff); //wrong
    for(int i=0; i<strlen(x); i++){
      Serial.write(x[i]);
    }
}

//Read 12.4 in textbook
void sendTime(unsigned long x){
    unsigned long arr[6];
    int msgLength = 6;
     arr[0]='!';
     arr[1]= 0x32;
     arr[2] = ((x >> 24) & 0xff); // most significant byte
     arr[3] =  ((x >> 16) & 0xff);
     arr[4] = ((x >> 8) & 0xff);
     arr[5] = (x & 0xff);
    
     unsigned long test = 0;
//     test = test|arr[2]<<24;
//     test = test |arr[3]<<16;
//     test= test|arr[4]<<8;
//     test = test|arr[5];
     for (int i=0; i<msgLength; i++) {
        Serial.write(arr[i]);
     }
//     Serial.println();
//     Serial.print("reccombined");
//     Serial.println(test);
}

void sendPot(unsigned long rawPotReading){
   unsigned long arr[4];
    int msgLength= 4;
    arr[0]= '!';
    arr[1]= 0x33;
//    arr[2] = (rawPotReading >> 8) & 0xff;
//    arr[3] = rawPotReading & 0xff;
    arr[2] = 0x01;
    arr[3] = 0xC2;
    for (int i=0; i<msgLength; i++) {
        Serial.write(arr[i]);
    }
  if(rawPotReading>=900){
      sendError("Warning: High Potentiometer Reading");
  }
}

void sendRawTemp(int rawTemp){
    unsigned long arr[4];
    int msgLength= 4;
    arr[0]= '!';
    arr[1]= 0x34;
    arr[2] = (rawTemp >> 8) & 0xff;
    arr[3] = rawTemp & 0xff;
    for (int i=0; i<msgLength; i++) {
        Serial.write(arr[i]);
    }
}
