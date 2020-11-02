#include <avr/io.h>

.global hasAOne
hasAOne:
  cpse r24, r1 //compare and if equal (no ones, all zero), skip the next line and return (would be 0)
  ldi r24, 1 //if not skipped, will return 1 in r24
  ret

.global byteToAscii
byteToAscii:
  ldi r23, 48 //load 48 into r23
  add r24, r23 //add r23 to r24, ascii values are 48 more than 0-9 ascii values
  ret

.global int8ToInt
int8ToInt:
  ldi r25, 1 //load 1 into r25, r25 is not needed for the initial 8 bit in r24
  push r0
  push r1 //push r1 (r0) so we can reset r1 (and r0) back to default values of 0
  MULS r25, r24 //multiply signed ints, 1 times r24 => returns a 16 bit value in r1, r0
  mov r25, r1 //copy r1 to r25
  pop r1 //done with r1, reset back to 0 when popped off
  mov r24, r0 //copy r0 to r24
  pop r0 //done w r0
  ret

.global addInt8ToInt
addInt8ToInt:
  call int8ToInt //calls int8ToInt to convert r24 to 16bit; spanning 
  add r24, r22 //add r23, r22 value into r25, r24
  adc r25, r23// takes into account of the potential carry over flag from previous line
  ret //return added value in r25, r24

.global add4Int8 
add4Int8:
  call int8ToInt //converts r25,r24 value to 16 bit
  push r22 //push r22 to stack
  movw r22, r24 //copies r25, r24 to r23, r22
  pop r24//pop r22 value to r24
  call addInt8ToInt //first value needs to be 8 bit for addInt8ToInt, previous lines swapped places for r25,r24 value
  movw r22, r24 //copies r25, r24 to r23, r22
  mov r24, r20 //move r20, the next int, to r24 so can add it to the 16bit value in r23, r22
  call addInt8ToInt
  movw r22, r24 //copies r25, r24 to r23, r22
  mov r24, r18 //same idea
  call addInt8ToInt //adds final two ints
  ret //returns aggregated value in r25, r24
  
.global average
average:
  add r24, r22 //add values together
  ror r24 //shifting right by one bit divides by two with carry (so overflow doesn't set to 0)
  ret //return average value in r24
