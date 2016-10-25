/**
 * Created by r3v3nan7 on 24.10.16.
 */

function solve(worker) {
    if(worker.handsShaking){
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
        return worker;
    }else {
        return worker;
    }


}






let worker = {
  weight: 80,
  experience: 1,
  bloodAlcoholLevel: 0,
  handsShaking: true
};


console.log(solve(worker));