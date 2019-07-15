namespace SmartLamp {
    //% block 
    export function initialise() {
        strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
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
} 