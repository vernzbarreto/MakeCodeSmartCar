EM_IR.OnPressEvent(function (message) {
    if (message == 70) {
        if (signB == 0) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            signB = 1
        } else {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
            signB = 0
        }
    } else if (message == 69) {
        if (signA == 0) {
            RGB.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            signA = 1
        } else {
            RGB.showColor(neopixel.rgb(0, 0, 0))
            signA = 0
        }
    } else if (message == 21) {
        magicbit.MotorStopAll()
    } else if (message == 28) {
        magicbit.MotorStopAll()
    } else if (message == 71) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (message == 67) {
        speed += 20
        if (speed <= 250) {
            speed = 250
        }
        basic.showNumber(speed)
    } else if (message == 13) {
        speed += -20
        if (speed <= 20) {
            speed = 20
        }
        basic.showNumber(speed)
    } else if (message == 64) {
        magicbit.MotorRun(magicbit.Motors.M1, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M2, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M3, speed)
        magicbit.MotorRun(magicbit.Motors.M4, speed)
    } else if (message == 25) {
        magicbit.MotorRun(magicbit.Motors.M1, speed)
        magicbit.MotorRun(magicbit.Motors.M2, speed)
        magicbit.MotorRun(magicbit.Motors.M3, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M4, 0 - speed)
    } else if (message == 7) {
        magicbit.MotorRun(magicbit.Motors.M1, speed)
        magicbit.MotorRun(magicbit.Motors.M2, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M3, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M4, speed)
    } else if (message == 9) {
        magicbit.MotorRun(magicbit.Motors.M1, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M2, speed)
        magicbit.MotorRun(magicbit.Motors.M3, speed)
        magicbit.MotorRun(magicbit.Motors.M4, 0 - speed)
    } else if (message == 68) {
        magicbit.MotorRun(magicbit.Motors.M1, speed)
        magicbit.MotorRun(magicbit.Motors.M2, speed)
        magicbit.MotorRun(magicbit.Motors.M3, speed)
        magicbit.MotorRun(magicbit.Motors.M4, speed)
    } else if (message == 22) {
        magicbit.MotorRun(magicbit.Motors.M1, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M2, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M3, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M4, 0 - speed)
    } else if (message == 12) {
        magicbit.MotorRun(magicbit.Motors.M1, 0)
        magicbit.MotorRun(magicbit.Motors.M2, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M3, 0)
        magicbit.MotorRun(magicbit.Motors.M4, speed)
    } else if (message == 94) {
        magicbit.MotorRun(magicbit.Motors.M1, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M2, 0)
        magicbit.MotorRun(magicbit.Motors.M3, speed)
        magicbit.MotorRun(magicbit.Motors.M4, 0)
    } else if (message == 66) {
        magicbit.MotorRun(magicbit.Motors.M1, speed)
        magicbit.MotorRun(magicbit.Motors.M2, 0)
        magicbit.MotorRun(magicbit.Motors.M3, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M4, 0)
    } else if (message == 74) {
        magicbit.MotorRun(magicbit.Motors.M1, 0)
        magicbit.MotorRun(magicbit.Motors.M2, speed)
        magicbit.MotorRun(magicbit.Motors.M3, 0)
        magicbit.MotorRun(magicbit.Motors.M4, 0 - speed)
    } else if (message == 8) {
        magicbit.MotorRun(magicbit.Motors.M1, speed)
        magicbit.MotorRun(magicbit.Motors.M2, -50)
        magicbit.MotorRun(magicbit.Motors.M3, -50)
        magicbit.MotorRun(magicbit.Motors.M4, speed)
    } else if (message == 90) {
        magicbit.MotorRun(magicbit.Motors.M1, 0 - speed)
        magicbit.MotorRun(magicbit.Motors.M2, 50)
        magicbit.MotorRun(magicbit.Motors.M3, 50)
        magicbit.MotorRun(magicbit.Motors.M4, 0 - speed)
    }
})
let signB = 0
let signA = 0
let speed = 0
let RGB: neopixel.Strip = null
EM_IR.IrRemote_init(IrPins.P1)
RGB = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
RGB = RGB.range(0, 4)
basic.showIcon(IconNames.Heart)
speed = 200
signA = 0
signB = 0
