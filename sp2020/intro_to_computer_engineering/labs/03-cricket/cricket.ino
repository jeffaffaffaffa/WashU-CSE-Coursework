/* cricket
 *  
 *  CSE 132 - Assignment 3
 *  
 *  Fill this out so we know whose assignment this is.
 *  
 *  Name: Jeff Che
 *  WUSTL Key: jche
 *  
 *  and if two are partnered together
 *  
 *  Name:
 *  WUSTL Key:
 */
 const int sensor = A0;
 const int led = 12;
 
 const unsigned long delta = 250;
 long endTime = delta;
 
 const unsigned long blink_duration = 200;
 
 unsigned long chirp_delta;
 long end_chirp = 0;
 
 float temp;
 float mean;
 bool on = false;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  analogReference(INTERNAL);
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
}

 #define FILTER_COUNTS 7 //chose N=7.
 float temperatures[FILTER_COUNTS];
 unsigned int count = 0;

void loop() {
  // put your main code here, to run repeatedly:

  findTemp_Delta(); //function to calculate temps (filtered) and time interval for chirps.
  
//  if (millis() >= endTime) { //delta time loop to print out temps at 4 Hz.
//    endTime += delta;
//    printTemps(); //print temps function.
//  }
      
  if (millis() >= end_chirp) { //delta time loop to blink led, with two intervals.
    if (on == true){
      digitalWrite(led, LOW);
      end_chirp += (chirp_delta - blink_duration); //add difference, chirp delta less wait time is next blink since light takes 200ms.
      on = false;
      //Serial.println(end_chirp);
    } else {
      digitalWrite(led, HIGH);
      end_chirp += blink_duration; //when turn on, wait blink duration.
      on = true;
      //Serial.println(end_chirp);
    }
  }
  if (millis() >= endTime) { //delta time loop to print out temps at 4 Hz.
    endTime += delta;
    printTemps(); //print temps function.
  }
}

void findTemp_Delta() { //computes mean and chirp timing.
  float reading = analogRead(sensor);
  float volt = (reading / 1023.0) * 1.1;
  temp = 100*volt - 50;
  temperatures[count%FILTER_COUNTS] = temp;
  count += 1;

  float sum = 0;
  for (int i = 0; i < 7; i++){
    sum += temperatures[i];
  }
  
  mean = sum/7;
  chirp_delta = 60000/((7*mean) - 30);
}

void printTemps() { //prints out temp and running avg.
  Serial.print(temp);
  Serial.print(" , ");
  Serial.println(mean);
}
