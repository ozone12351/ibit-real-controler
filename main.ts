function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256 && buttonVal >= 1) {
        item = 1
    } else if (buttonVal < 597 && buttonVal >= 256) {
        item = 2
    } else if (buttonVal < 725 && buttonVal >= 597) {
        item = 3
    } else if (buttonVal < 793 && buttonVal >= 725) {
        item = 4
    } else if (buttonVal < 836 && buttonVal >= 793) {
        item = 5
    } else if (buttonVal < 938 && buttonVal >= 836) {
        item = 6
    } else {
        item = 0
    }
}
let item = 0
let buttonVal = 0
radio.setGroup(1)
basic.forever(function () {
    button()
    if (item == 1) {
        radio.sendNumber(1)
        basic.showString("A")
    } else if (item == 2) {
        radio.sendNumber(2)
        basic.showString("B")
    } else if (item == 3) {
        radio.sendNumber(3)
        basic.showString("C")
    } else if (item == 4) {
        radio.sendNumber(4)
        basic.showString("D")
    } else if (item == 5) {
        radio.sendNumber(5)
        basic.showString("E")
    } else if (item == 6) {
        radio.sendNumber(6)
        basic.showString("F")
    } else if (pins.analogReadPin(AnalogPin.P1) <= 399 && pins.analogReadPin(AnalogPin.P1) >= 300) {
        radio.sendNumber(7)
    } else if (pins.analogReadPin(AnalogPin.P1) <= 299 && pins.analogReadPin(AnalogPin.P1) >= 200) {
        radio.sendNumber(8)
    } else if (pins.analogReadPin(AnalogPin.P1) <= 199 && pins.analogReadPin(AnalogPin.P1) >= 100) {
        radio.sendNumber(9)
    } else if (pins.analogReadPin(AnalogPin.P1) <= 99 && pins.analogReadPin(AnalogPin.P1) >= 1) {
        radio.sendNumber(10)
    } else if (pins.analogReadPin(AnalogPin.P1) >= 601 && pins.analogReadPin(AnalogPin.P1) <= 700) {
        radio.sendNumber(11)
    } else if (pins.analogReadPin(AnalogPin.P1) >= 701 && pins.analogReadPin(AnalogPin.P1) <= 800) {
        radio.sendNumber(12)
    } else if (pins.analogReadPin(AnalogPin.P1) >= 801 && pins.analogReadPin(AnalogPin.P1) <= 900) {
        radio.sendNumber(13)
    } else if (pins.analogReadPin(AnalogPin.P1) >= 901) {
        radio.sendNumber(14)
    } else if (pins.analogReadPin(AnalogPin.P0) <= 399 && pins.analogReadPin(AnalogPin.P0) >= 300) {
        radio.sendNumber(15)
    } else if (pins.analogReadPin(AnalogPin.P0) <= 299 && pins.analogReadPin(AnalogPin.P0) >= 200) {
        radio.sendNumber(16)
    } else if (pins.analogReadPin(AnalogPin.P0) <= 199 && pins.analogReadPin(AnalogPin.P0) >= 100) {
        radio.sendNumber(17)
    } else if (pins.analogReadPin(AnalogPin.P0) <= 99 && pins.analogReadPin(AnalogPin.P0) >= 1) {
        radio.sendNumber(18)
    } else if (pins.analogReadPin(AnalogPin.P0) >= 601 && pins.analogReadPin(AnalogPin.P0) <= 700) {
        radio.sendNumber(19)
    } else if (pins.analogReadPin(AnalogPin.P0) >= 701 && pins.analogReadPin(AnalogPin.P0) <= 800) {
        radio.sendNumber(20)
    } else if (pins.analogReadPin(AnalogPin.P0) >= 801 && pins.analogReadPin(AnalogPin.P0) <= 900) {
        radio.sendNumber(21)
    } else if (pins.analogReadPin(AnalogPin.P0) >= 901) {
        radio.sendNumber(22)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
        radio.sendNumber(0)
        basic.clearScreen()
    }
    basic.clearScreen()
})
