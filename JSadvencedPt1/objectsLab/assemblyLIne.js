
const createAssemblyLine = {

    hasClima: function (myCar) {
        
    },
    hasAudio: function (myCar) {

    },
    hasParktronic: function (myCar) {
        
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
    temp: 21,
    tempSettings: 21,
    adjustTemp: function () {
        if (temp < this.tempSettings) {
            ++this.temp;
        } else if (temp > this.tempSettings) {
            --this.temp;
        }
       
    },
    curentTrack: function (info) {
        name: info.name;
        artist: info.artist;
    },
    nowPlaying: function (currentTrack) {
        console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}` )
    },
    checkDistance: function (disstance) {
        if (disstance < 0.1) {
            console.log("Beep! Beep! Beep!")
        } else if (disstance < 0,25) {
            console.log("Beep! Beep!") 
        } else if (disstance < 0,5) {
            console.log("Beep!")
        } else {
            console.log("")
        }
    }
}