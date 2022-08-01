input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G - F G A ", 400)
    basic.showNumber(randint(2, 12))
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
