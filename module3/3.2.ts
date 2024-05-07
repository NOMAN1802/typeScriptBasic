{
    // OOP- Inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name  = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours){
            console.log(`${this.name} will sleep for ${numOfHour}`);
        }

    }


    class Student extends Person {
       
        constructor(name: string, age: number, address: string) {
            
            super(name, age, address)
        }
    
       
    }


class Teacher extends Person {
    
    designation: string;

    constructor(name: string, age: number, address: string , designation: string) {
        super(name, age, address)
        this.designation = designation;

    }


    tackClass(numOfClass){
        console.log(`${this.name} will sleep for ${numOfClass}`);
    }
}


const student1 = new Student('Noman', 29, 'Dhaka')
const teacher = new Teacher('Mr.Teacher', 45, 'Dhaka', 'Professor')



}