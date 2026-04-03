class Temperature{
    

    constructor(celsius_ = 0){

        this._celsius = celsius_;

    }

    set celsius(value){

        this._celsius = value;
    }

    get celsius(){

        return (this._celsius * 9 / 5) + 32;
    }
}


const t1 = new Temperature();
t1.celsius = 23.8;
console.log(t1.celsius);
 