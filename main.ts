basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 1000)
    }
})
