
enum LampEffect {
    //% block="Static"
    Static,
    //% block="RotateClockwise"
    RotateCW,
    //% block="RotateAnitClockwise"
    RotateACW,
    //% block="Random"
    Random,
    //% block="Fade"
    Fade,
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
    export function setTimer(time: number,effect: LampEffect,mode: RepeatMode){

    }
    //% block
    export function update(){
        if (currenteffect==LampEffect.RotateCW){
            strip.rotate(1)
        }
        if (currenteffect == LampEffect.RotateACW) {
            strip.rotate(-1)
        }
        if (currenteffect == LampEffect.Fade) {
            strip.setBrightness(strip.brightness-10)
        }
        strip.show()
    }

    //% block 
    export function setPixel(pxNumber: number, pxCol: NeoPixelColors){
        strip.setPixelColor(pxNumber, pxCol)
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
    export function rainbow(){
        strip.showRainbow()
        strip.show()
    }
    //% block
    export function allOn(col: NeoPixelColors) {
        strip.showColor(col)
        strip.show()
    }
    let currenteffect: LampEffect = LampEffect.Static
    let strip: neopixel.Strip = null
    strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
} 