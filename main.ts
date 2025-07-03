basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        for (let index = 0; index < 100; index++) {
            music.ringTone(1000)
        }
    }
})
