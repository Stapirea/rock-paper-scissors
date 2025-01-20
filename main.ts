input.onButtonPressed(Button.A, function () {
    flag = 1
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
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + point1 + "-" + point2)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.InBackground)
    if (flag == 1) {
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
            basic.showIcon(IconNames.Scissors)
        }
        basic.pause(500)
        if (player1 == player2) {
            basic.showString("DRAW!")
        } else if (player1 == "R" && player2 == "S" || player1 == "P" && player2 == "R" || player1 == "S" && player2 == "P") {
            basic.showArrow(ArrowNames.West)
            point1 += 1
        } else {
            basic.showArrow(ArrowNames.East)
            point2 += 1
        }
        flag = 0
    } else {
        basic.showIcon(IconNames.No)
    }
})
let player2 = ""
let point2 = 0
let point1 = 0
let player1 = ""
let Rock_Paper_Scissors: string[] = []
let flag = 0
flag = 0
Rock_Paper_Scissors = ["R", "P", "S"]
