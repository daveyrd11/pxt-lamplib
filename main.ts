
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

namespace SmartLamp {

    //% block
    export function update(){
        if (currenteffect==LampEffect.RotateCW){
            strip.rotate(1)
        }
        strip.show()
    }
    //% block
    export function setEffect(effect: LampEffect) {
        currenteffect = effect
    }
    //% block 
    export function initialise() {

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