/**
 * Created by r3v3nan7 on 25.10.16.
 */


function sum(arr) {
    let sum = 0;
    for(let digit of arr){
        sum += Number(digit);
    }

    return sum;
}


module.exports = {sum};


//console.log(sum([2,5]));