class Instrument{
    playSound(){
        return "Playing...."
    }
}

class Guitar extends Instrument{
    playSound(){
        return "Strumming the guitar strings"
    }
}

class Piano extends Instrument{
    playSound(){
        return "Pressing the piano keys"
    }
}

let Piano1 = new Piano
console.log(Piano1.playSound())