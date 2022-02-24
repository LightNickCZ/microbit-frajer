input.onButtonPressed(Button.A, function () {
    basic.showNumber(7)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.SouthWest)
})
basic.showNumber(69)
basic.showString("hh")
