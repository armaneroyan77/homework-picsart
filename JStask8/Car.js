/*
    Create a class Car with _speed. 
    Setter should not allow speed > 200.
    If exceeded → "Too fast”.
*/

class Car{
    constructor(speed = 0){
        this._speed = speed;
    }

    set speed(value){
  
        if(value > 200){
            console.log("too fast!");
            return;
        }

        this._speed = value;

    }


}

const car1 = new Car();
car1.speed = 900;

