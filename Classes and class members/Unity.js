class Rat{
    constructor(name){
        this.name = name;
        this.united = [];
    }


    unite(otherRat){
        if(otherRat.constructor.name == "Rat"){
            this.united.push(otherRat);
        }
    }


    getRats(){
        return this.united;
    }


    toString(){
        let result = this.name;
        for(let rat of this.united){
            //result += `\###${rat.name}`;
            result += "###" + rat.name;
        }

        return result;
    }

}