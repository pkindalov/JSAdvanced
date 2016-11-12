/**
 * Created by r3v3nan7 on 28.10.16.
 */

function solve(arr, sorter) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }


    let result = [];
    for(let x of arr){
        let [destination, price, status]  = x.split('|');
        price = Number(price);
        let obj = new Ticket(destination, price, status);

        result.push(obj);
    }



    return result.sort((a, b) => {
        if(typeof(a[sorter]) == 'string'){
            if(a[sorter] != b[sorter]){

                return a[sorter].localeCompare(b[sorter]);
            }

        }
        else{
            return a[sorter] - b[sorter];
        }
    });


}

//Second way
// function solve(arr, sorter) {
//     class Ticket{
//         constructor(destination, price, status){
//             this.destination = destination;
//             this.price = Number(price);
//             this.status = status;
//         }
//
//     }
//
//     let result = [];
//
//     for(let info of arr){
//         let infoArr = info.split("|");
//         let destination = infoArr[0];
//         let price = Number(infoArr[1]);
//         let status = infoArr[2];
//         let ticket = new Ticket(destination, price, status);
//         result.push(ticket);
//     }
//
//
//     return result.sort((a, b) => {
//         if(typeof(a[sorter]) == 'string'){
//             if(a[sorter] != b[sorter]){
//                 return a[sorter].localeCompare(b[sorter]);
//             }
//         }else {
//             return a[sorter] - b[sorter];
//         }
//     });
//
//
// }





