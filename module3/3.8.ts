{
    // polymorphism


    class Person{
      getSleep(){
  console.log(' i am sleeping 8 hours per day');
        
      }   
    }

    class Student extends Person {

        getSleep(){
            console.log(' i am sleeping 7 hours per day');
                  
                } 
    }


    class Developer {

        getSleep(){
            console.log(' i am sleeping 6 hours per day');
                  
                } 
    }

    const getSleepingHours = (params : Person) =>{
        getSleep
    }

const person1 = new Person()
const student1 = new Student()
const developer1 = new Developer()


    // 
}