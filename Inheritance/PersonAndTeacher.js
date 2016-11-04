/**
 * Created by r3v3nan7 on 01.11.16.
 */

function personAndTeacher() {

    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }


    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }


    }


    return{
        Teacher,
        Person
    }



}