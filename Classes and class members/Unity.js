/**
 * Created by r3v3nan7 on 28.10.16.
 */


function solve() {

    class Rat{
        constructor(name){
            this.name = name;
            this.united = [];
        }



        unite(otherRat){
             if(otherRat.constructor.name == 'Rat'){
                 this.united.push(otherRat);
             }
        };


        getRats(){
            return this.united;

        };







    }


}