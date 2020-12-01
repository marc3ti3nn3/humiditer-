let reading = 0
led.setBrightness(64)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    basic.pause(5000)
})
