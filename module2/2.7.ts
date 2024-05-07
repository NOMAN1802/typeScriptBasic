{
      // Generic constrains with keyof operator
      
      type Vehicle = {
      
            bike: string ;
            car: string;
            ship: string;

      }

      type Owner = 'bike' | 'car' | 'ship';

      type Owner1 = keyof Vehicle

      // const person : Owner = 'car'
      // const person2 : Owner1 ='bike'

     const getPropertyValue = <X, Y extends keyof X >(obj : X , key: Y) => {

      return obj[key]
     }


     const user ={
      name: 'Noman',
      age: 30,
      address: 'Dhaka'
     }
     const car ={
      model: 'Toyota',
      year: 2020
     }

//      user.name | user['name'] ---> to get property value

     const res = getPropertyValue(user, 'name')
     const res1 = getPropertyValue(car, 'model')

      //
}