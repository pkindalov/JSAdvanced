/**
 * Created by r3v3nan7 on 27.10.16.
 */

class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }


    calcArea(){
        return this.width * this.height;
    }
}


let redRect = new Rectangle(4, 5, 'red');
let blueRect = new Rectangle(8, 3, 'blue');

console.log(redRect, blueRect);
console.log(redRect.calcArea(), blueRect.calcArea());