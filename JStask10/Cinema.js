class CinemaFacade{
    #tv;
    #sound;
    #lights;
    constructor(tv, sound, lights){
        this.#lights = lights;
        this.#sound = sound;
        this.#tv = tv;
    }

    watchMovie(){
        return `${this.#tv.TVON()}\n${this.#lights.lightON()}\n${this.#sound.soundON()}\nMovie mode activated`
        
    }

    endMovie(){
        return `${this.#tv.TVOFF()}\n${this.#lights.lightOFF()}\n${this.#sound.soundOFF()}\nMovie mode activated`
    }
}

class TV{

   
    TVON(){
        return "TV turned on";
    }

    TVOFF(){
       return "TV turned off";
    }
}



class SoundSystem{

    soundON(){
        return "Sound system turned on";
    }

    soundOFF(){
       return "Sound system turned off";
    }
}

class Lights{

    lightON(){
        return "Lights restored";
    }

    lightOFF(){
       return "Lights restored";
    }
}

const tv = new TV();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

console.log(cinema.watchMovie());
// TV turned on
// Sound system turned on
// Lights dimmed
// "Movie mode activated"

console.log(cinema.endMovie());
// TV turned off
// Sound system turned off
// Lights restored
// "Movie mode deactivated"

