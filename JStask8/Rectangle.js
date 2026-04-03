/* Create a class Rectangle with _width and _height. Setters for both values.
Getter area returns width * height  */

class Rectangle{

    constructor(width = 0, height = 0){

        this._width = width;
        this._height = height;
    }

    set width(value){
        if(value < 0) return "width must be bigger than 0 or equal!";
        this._width = value;
    }

    set height(value){

        if(value < 0) return "height must be bigger than 0 or equal!";
        this._height = value;
    }

    get GetRectangleArea(){
        return this._width * this._height;
    }
}


const rec = new Rectangle();
rec._width = 45;
rec._height = 90;
console.log(rec.GetRectangleArea);
