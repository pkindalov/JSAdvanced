/**
 * Created by r3v3nan7 on 24.10.16.
 */

function solve(car) {
    let model = car.model;
    let power = car.power;
    let color = car.color;
    let carriage = car.carriage;
    let wheelsize = car.wheelsize;

    if(wheelsize % 2 == 0){
        wheelsize--;
    }


    let result = {
        model: model,
        engine: {},
        carriage: {
            type: carriage,
            color: color
        },

        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]

    };


    if(power <= 90){
        result.engine = {
            power: 90,
            volume: 1800,
        }
    }else  if(power <= 120){
        result.engine = {
            power: 120,
            volume: 2400
        }
    }else{
        result.engine = {
            power: 200,
            volume: 3500
        }
    }


    return result;



}




let car = { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 };


console.log(solve(car));