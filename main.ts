basic.showNumber(69)
basic.showString("hh")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(2000)
    basic.showIcon(IconNames.EigthNote)
})
