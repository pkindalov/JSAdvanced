/**
 * Created by r3v3nan7 on 01.11.16.
 */


let result =(function () {

    let id = 0;
    class stormWatcher{


        constructor(temperature, humidity,pressure, windSpeed){
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        toString(){
            let status = 'Not stormy';

            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                status =  'Stormy';
            }


            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${status}`;

        }



    }


    return stormWatcher;


}());



let myObj = new result(32, 66, 760, 12);
//console.log(myObj.toString());
console.log('' + myObj);