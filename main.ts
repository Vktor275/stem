basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 180)
})
