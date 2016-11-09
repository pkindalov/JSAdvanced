/**
 * Created by r3v3nan7 on 09.11.16.
 */

function reverseArrayIterable(arr) {
    let index = arr.length - 1;

    return {
        [Symbol.iterator]: function () {
            return this;
        },
        ['next']: function () {
            if(index >= 0){
                return {value: arr[index--], done: false}
            }else {
                return {done: true};
            }
        }
    }
    
}