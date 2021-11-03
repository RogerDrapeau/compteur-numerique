input.onButtonPressed(Button.A, function () {
    Compteur += 1
    basic.showNumber(Compteur)
})
input.onButtonPressed(Button.AB, function () {
    Compteur = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    Compteur += -1
    basic.showNumber(Compteur)
})
let Compteur = 0
Compteur = 0
basic.showNumber(0)
basic.forever(function () {
    if (Compteur >= 5) {
        basic.showIcon(IconNames.No)
    }
})
