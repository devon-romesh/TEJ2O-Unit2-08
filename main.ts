/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon 
 * Created on: Mar 2026
 * This program turns on different colored pins. 
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pause(500)
pins.digitalWritePin(DigitalPin.P13, 0) // the blue
pins.digitalWritePin(DigitalPin.P14, 0) // the green
pins.digitalWritePin(DigitalPin.P15, 0) // the red



// the program
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pause(1000)
    basic.clearScreen()

    // shows the red
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Red")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // shows the green
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Green")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // show blue
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Blue")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)

    //shows the magenta
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Magenta")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // shows the cyan
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("Cyan")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)

    // shows the yellow
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString("Yellow")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    //shows the white
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString("White")
    pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)



    //resets it
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
