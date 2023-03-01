let Distance = 0
basic.showIcon(IconNames.Butterfly)
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Program().clear()
basic.forever(function () {
    Distance = Tinybit.Ultrasonic_Car()
    if (Distance < 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else if (Distance >= 5 && Distance < 20) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
basic.forever(function () {
    Distance = Tinybit.Ultrasonic_Car()
    if (Distance < 5) {
        Tinybit.RGB_Car_Big2(0, 0, 255)
    } else if (Distance >= 5 && Distance < 20) {
        Tinybit.RGB_Car_Big2(0, 255, 0)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    }
})
basic.forever(function () {
    Distance = Tinybit.Ultrasonic_Car()
    if (Distance < 5) {
        basic.showArrow(ArrowNames.North)
    } else if (Distance >= 5 && Distance < 20) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.clearScreen()
    }
})
