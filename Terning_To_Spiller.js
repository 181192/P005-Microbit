/*
Title - Terningspill to player
Authors - Kristoffer-Andre Kalliainen og Peder Aalen Wiig
Version - v1.0.0
*/

let har_trillt = false
let terning = 0
input.onGesture(Gesture.Shake, () => {
    terning = Math.random(6) + 1
    if (terning == 6) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    } else if (terning == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (terning == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (terning == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (terning == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
    har_trillt = true
    radio.sendNumber(terning)
})
radio.onDataPacketReceived(({receivedNumber}) => {
    while (!(har_trillt)) {
        basic.pause(50)
    }
    if (terning > receivedNumber) {
        basic.showIcon(IconNames.Heart)
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else if (terning == receivedNumber) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
    har_trillt = false
    basic.clearScreen()
})
radio.setGroup(1)
har_trillt = false