namespace SmartLamp {
    enum LampEffect {
        //% block="Static"
        Static,
        //% block="Rotate"
        Rotate,
        //% block="Random"
        Random,
        //% block="Fade"
        Fade,
    }
    //% block
    export function setEffect(effect: LampEffect) {
        
    }
    //% block 
    export function initialise() {

    }
    //% block
    export function testlamp() {

        basic.showString("lamptest")
    }
    //% block
    export function AllOn() {
        for (let index = 0; index <= 11; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        }
    }
    let strip: neopixel.Strip = null
    strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
} 