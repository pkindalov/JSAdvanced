/**
 * Created by r3v3nan7 on 09.11.16.
 */


function* reverseArrayGenerator(arr) {
    for(let i = arr.length - 1; i >= 0; i--){
        yield  arr[i];
    }
}


let arr = [10, 20, 30];
for(let x of reverseArrayGenerator(arr)){
    console.log(x);
}