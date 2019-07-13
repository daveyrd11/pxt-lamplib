namespace SmartLamp {
    //% block
    export function testlamp() {

        let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)


        basic.showString("lamptest")
    }
} 