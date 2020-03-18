enum LampEffect {
    //% block="Static"
    Static,
    //% block="RotateClockwise"
    RotateCW,
    //% block="RotateAnitClockwise"
    RotateACW,
    //% block="Random"
    Random,
    //% block="Off"
    Off
}
enum RepeatMode {
    //% block="Dont Repeat"
    dont,
    //% block="Repeat"
    repeatInLoop
}
//% color=190 weight=100 icon="\uf192" block="Smart Lamp"
namespace SmartLamp {
    //% block
    export function setTimer(time: number, effect: LampEffect, mode: RepeatMode) {
        timerTime = time
        timerExp = input.runningTime()
        timerExp = timerExp + (timerTime * 1000)
        timerEff = effect
        timerMode = mode
    }
    //% block
    export function update() {
        if (timerTime > 0) {
            if (input.runningTime() > timerExp) {
                let tmpEff: LampEffect = currenteffect
                currenteffect = timerEff
                timerEff = tmpEff
                if (timerMode == RepeatMode.repeatInLoop) {
                    timerExp = input.runningTime()
                    timerExp = timerExp + (timerTime * 1000)
                }
                else {
                    timerTime = 0
                }
            }
        }
        if (currenteffect == LampEffect.RotateCW) {
            strip.rotate(1)
        }
        if (currenteffect == LampEffect.RotateACW) {
            strip.rotate(-1)
        }
        if (currenteffect == LampEffect.Random) {
            strip.rotate(Math.randomRange(0, 12))
        }
        if (currenteffect == LampEffect.Off) {
            strip.clear()
        }
        strip.show()
    }
    //% block 
    export function setPixel(pxNumber: number, pxCol: NeoPixelColors) {
        strip.setPixelColor(pxNumber, pxCol)
        strip.show()
    }

    //% block="User Color Pixel Number = %pxNumber Red = $red green = $green blue = $blue"
    export function setPixelRGB(pxNumber: number, red: number, green: number, blue: number) {
        let colToSet = blue + (256 * green) + (65536 * red)
        strip.setPixelColor(pxNumber, colToSet)
        strip.show()
    }
    //% block
    export function setEffect(effect: LampEffect) {
        currenteffect = effect
    }
    //% block
    export function testlamp() {
        strip.clear()
        strip.setPixelColor(0, NeoPixelColors.Blue)
        strip.show()
        for (let index = 0; index <= 11; index++) {
            basic.pause(100)
            strip.rotate(1)
            strip.show()
        }
        strip.clear()
        strip.show()
        basic.showString("lamptest")
    }
    //% block
    export function rainbow() {
        strip.showRainbow()
        strip.show()
    }
    //% block
    export function allOn(col: NeoPixelColors) {
        strip.showColor(col)
        strip.show()
    }
    //% block
    export function allOff() {
        strip.clear()
        strip.show()
    }
    let currenteffect: LampEffect = LampEffect.Static
    let strip: neopixel.Strip = null
    strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
    let timerTime = 0
    let timerExp = 0
    let timerEff: LampEffect = LampEffect.Off
    let timerMode: RepeatMode = RepeatMode.dont
} 