/**
 * Created by r3v3nan7 on 28.10.16.
 */


function solve(){

    class Stringer{
        constructor(str, length){
            this.innerString = str;
            this.innerLength = length;
        }


        increase(length){
            this.innerLength += length;
        }


        decrease(length){
            this.innerLength -= length;

            if(this.innerLength < 3){
                this.innerLength = 0;
            }

        }


        toString(){
            if(this.innerLength ===0){
                return '...';
            }
            let resultString ='';
            if(this.innerString.length > this.innerLength){
                for(let i=0;i<this.innerString.length-this.innerLength;i++){
                    resultString+=this.innerString[i];
                }
                return resultString + '...';
            }
        }



    }



}