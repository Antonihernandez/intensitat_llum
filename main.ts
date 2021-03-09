basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let lluminositat = 22
led.setBrightness(lluminositat)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (lluminositat < 255) {
            lluminositat += 1
            led.setBrightness(lluminositat)
        } else {
            soundExpression.giggle.play()
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (lluminositat > 0) {
            lluminositat += -1
            led.setBrightness(lluminositat)
        } else {
            soundExpression.spring.play()
        }
    }
})
