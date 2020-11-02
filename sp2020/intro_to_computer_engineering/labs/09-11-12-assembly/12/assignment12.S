#include <avr/io.h>
#include "asmMacros.s"  // Include macros to print log messages or a single register
.data
global: .byte 0

.text

.global updateGlobal
updateGlobal:
  // TODO: void updateGlobal(byte a)
  ldi r27, hi8(global)
  ldi r26, lo8(global)
  ld r22, x
  add r24, r22
  st x, r24
  
  ret

.global getGlobal
getGlobal:
  // TODO: uint8_t getGlobal()
  ldi r27, hi8(global)
  ldi r26, lo8(global)
  ld r24, x
  ldi r25, 0
  ret

.global cStringLength
cStringLength:
  // TODO: uint8_t cStringLength(const char aString[])
  movw r26, r24 //move into x

  ldi r23, 0 //length
  ldi r22, 1 //incrementer
  ld r21, x+ //load first x value into r21

  loopStart:
    cp r21, r1 //r21 will be 0 at the end of the string
    breq loopEnd
    add r23, r22
    ld r21, x+
    jmp loopStart
  loopEnd:
    mov r24, r23 //move length into r24
  ret

.global sumArrays
sumArrays:
  // TODO: void sumArrays(uint8_t *a, uint8_t *b, uint8_t *c, byte length)
  push r30
  push r31
  push r28
  push r29
  
  movw r30, r24    //lo a
  movw r28, r22    //lo b
  movw r26, r20    //c
  
  ldi r21, 0      //counter for length
  
  sumLoop:
    cp r21, r18 //check if counter is equal to length
    breq endLoop
    ld r22, z+
    ld r20, y+
    add r22, r20
    st x+, r22
    inc r21 //increment length counter
    jmp sumLoop
  endLoop:
    movw r24, r26
    pop r29
    pop r28
    pop r31
    pop r30
  ret

.global dot
dot:
  // TODO uint16_t dot(uint8_t *a, uint8_t *b, byte length)
  push r30 //push all the callee saved stuff
  push r31
  push r28
  push r29
  push r0

  movw r30, r24 //a
  movw r28, r22 //b

  ldi r26, 0 //counter
  ldi r24, 0 //running sum
  ldi r25, 0

  looop:
    cp r26, r20 //if counter is the length, end
    breq enddd
    ld r22, z+
    ld r21, y+
    mul r22, r21 //multiply two values, output in r0, r1
    add r24, r0
    adc r25, r1
    clr r1
    inc r26
    jmp looop
  enddd:
    pop r0
    pop r29 //pop em all off
    pop r28
    pop r31
    pop r30
  ret
