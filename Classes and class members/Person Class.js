/**
 * Created by r3v3nan7 on 27.10.16.
 */


    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }


        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;

        }

    }







