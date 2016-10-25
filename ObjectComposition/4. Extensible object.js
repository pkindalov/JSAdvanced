/**
 * Created by r3v3nan7 on 24.10.16.
 */


function solve() {
    let obj = Object.create([]);

    obj.extend = function (template) {

        for(let prop in template){
            obj[prop] = template[prop];
            if(typeof (template[prop]) == "function"){
                Object.getPrototypeOf(obj)[prop] = template[prop];
            }else {
                obj[prop] = template[prop];
            }
        }

    };

    return obj;
}


let myObj = solve();
myObj.extend();