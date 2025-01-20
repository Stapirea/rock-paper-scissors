input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.InBackground)
    player1 = Rock_Paper_Scissors._pickRandom()
    if (player1 == "R") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (player1 == "P") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.InBackground)
    player2 = Rock_Paper_Scissors._pickRandom()
    if (player2 == "R") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (player2 == "P") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            # # . # #
            `)
    }
    basic.pause(100)
    if (player1 == player2) {
        basic.showString("DRAW!")
    } else if (player1 == "R" && player2 == "S" || player1 == "P" && player2 == "R" || player1 == "S" && player2 == "P") {
        basic.showArrow(ArrowNames.West)
        POINT += 1
    } else {
        basic.showArrow(ArrowNames.East)
        POINT += 2
    }
})
let POINT = 0
let Rock_Paper_Scissors: string[] = []
let player2 = 0
let player1 = 0
player1 = 0
player2 = 0
let flag = 0
Rock_Paper_Scissors = ["R", "P", "S"]
