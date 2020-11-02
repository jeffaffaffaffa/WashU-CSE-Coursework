#include <avr/io.h>
#include "asmMacros.s"  // Include macros to print log messages or a single register
.text


.global slowDivisionUint8
slowDivisionUint8:
  // TODO: uint8_t slowDivisionUint8(uint8_t a, uint8_t b)
  ldi r19, 0 //r19 is our counter
  ldi r20, 1 //r20 is increment
  loopBegin: //start of loop
    cp r24, r22 //compare two inputs in r24, r22
    brlo loopEnd //end loop if r24 is less than; end of subtraction before becomes negative
    sub r24, r22 //otherwise, subtract them
    add r19, r20 //increment counter by 1
    jmp loopBegin //jump back to start of loop to repeat
  loopEnd:
    mov r24, r19 //at the end of loop, move the counter value to r24 for ret
  ret

.global greaterThanOrEqualUInt16
greaterThanOrEqualUInt16:
  // TODO: bool greaterThanOrEqualUInt16(uint16_t a, uint16_t b)
  ldi r19, 0 //r19 represents false
  ldi r20, 1 //r20 represent true
  cp r25, r23 //compare high bytes first
  brsh ifGE //if r25 same or higher, branch to ifGE (caveat: if it is the same, still branches, need to check low bytes too)
  brlo isFalse //else, branch to isFalse
  ifGE:
    cp r24, r22 //check low bytes
    brsh isTrue //branch to true if r24 is same or higher
    brlo isFalse //else to false
  isTrue:
    mov r24, r20 //move 1 into r24 to ret "true"
    ret
  isFalse:
    mov r24, r19 //move 0 into r24 to ret "false"
    ret

.global slowDivisionUint16
slowDivisionUint16:
  // TODO: uint16_t slowDivisionUint16(uint16_t a, uint16_t b)
  ldi r18, 0 //two bytes, r18 and r19, for counter (if counter gets very big)
  ldi r19, 0
  ldi r20, 1 //incrementer
  loopStart:
    cp r25, r23 //compare high bytes first
    brlo loopStop //if r25 is less, immediately stop (no other check needed if high byte is lower)
    breq check //if it isn't lower, check if it's equal and branch to check lower bytes
    sbc r24, r22 //else, subtract with carry low and high bytes
    sbc r25, r23
    add r18, r20 //increase counter by 1
    adc r19, r1 //plus 0 to high byte but also plus the carried value from previous line if there is carry (when counter "too big")
    jmp loopStart //start loop again
  check:
    cp r24, r22 //check lower bytes
    brlo loopStop //if r24 is lower, we stop
    sbc r24, r22 //else we do same subtraction and counter increment steps as before
    sbc r25, r23
    add r18, r20
    adc r19, r1
    jmp loopStart //start loop (and subsequent checks) again
  loopStop:
    movw r24, r18 //at the end, move both bytes for counter to r24, r25 for ret
    ret

.global slowModulusUint8
slowModulusUint8:
  // TODO: uint16_t slowModulusUint8(uint8_t a, uint8_t b)
  push r30
  mov r0, r19
  ldi r20, 0 //answer
  ldi r21, 1 //incrementer
  ldi r30, 0 //for loop counter
  mov r23, r22
  mov r25, r24
  call slowDivisionUint8
  ldi r19, 0 //takeway
  beginLoop:
    cp r30, r24
    brsh endLoop
    add r19, r23
    add r30, r21
    jmp beginLoop
  endLoop:
    sub r25, r19
    mov r24, r25
    pop r30
    mov r19, r0
    ret

.global sumOddsUint8
sumOddsUint8:
  // TODO uint16_t sumOddsUint8(uint8_t a, uint8_t b)
  ldi r18, 0 //curr
  ldi r19, 0 //curr byte two
  ldi r20, 1 //constant
  mov r21, r22
  ldi r22, 2 //constant
  ldi r23, 0//sum lower byte
  ldi r25, 0 //sum higher byte
  push r18
  push r19
  push r20
  push r21
  push r22
  push r23
  push r24
  push r25
  call slowModulusUint8
  mov r30, r24 //divAns
  pop r25
  pop r24
  pop r23
  pop r22
  pop r21
  pop r20
  pop r19
  pop r18
  mov r18, r24
  cp r30, r20
  breq sameIf
  add r18, r20 
  zeroLoop:
    cp r21, r18
    brlo endFunc
    add r23, r18
    adc r25, r1
    add r18, r22
    jmp zeroLoop
  sameIf:
    cp r21, r18
    brlo endFunc
    add r23, r18
    adc r25, r1
    add r18, r22
    jmp sameIf
  endFunc:
    mov r24, r23
    ret
