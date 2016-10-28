/**
 * Created by r3v3nan7 on 28.10.16.
 */


(function() {

    let id = 0;

    class Extend{


       constructor(){
           this.id = id++;
       }



        extend(template){
            for(let prop in template){

                if(typeof (template[prop]) == "function"){
                    Object.getPrototypeOf(this)[prop] = template[prop];
                }else {
                    this[prop] = template[prop];
                }
            }
        }

    }


    return Extend;
})()
