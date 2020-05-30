//% color=#1E90FF weight=100 icon="\uf150"
namespace consolePrint {
    //% block
    export function TestDriveAny(s: any): void {
        console.log(s)
    }
    //% block
    export function TestDriveString(s: string): void {


        consolePrint.TestDriveAny(s)
    }
    //% block
    export function TestDriveNumber(s: number): void {


        consolePrint.TestDriveAny(s)
    }
    //% block
    export function TestDriveBoolean(s: boolean): void {


        consolePrint.TestDriveAny(s)
    }
    //% block
    export function TestDriveImage(s: Image): void {
        consolePrint.TestDriveAny(s)
    }







    //% block
    export function TestDriveValueAny(s: any): any {
        return console.log(s)


    }
    //% block
    export function TestDriveValueString(s: string): any {


        consolePrint.TestDriveValueAny(s)
    }


    //% block
    export function TestDriveValueNumber(s: number): any {


        consolePrint.TestDriveValueAny(s)
    }
    //% block
    export function TestDriveValueBoolean(s: boolean): any {


        consolePrint.TestDriveValueAny(s)
    }

    //% block
    export function clearLog(): void {


        control.reset()
    }

    //% block
    export function autoLogRadio(): void {

        radio.onReceivedString(function (receivedString: string) {
            console.log(receivedString)
        })

        radio.onReceivedValue(function (name: string, value: number) {
            console.log(name + "" + value)
        })


        radio.onReceivedNumber(function (receivedNumber: number) {
            console.log("" + receivedNumber)
        })





    }











}
