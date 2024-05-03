// Reference types --> Object

const user : {
    // company: 'Programming Hero'; //literal type
     readonly company : string;
    firstName : string;
    middleName ? : string;  //Optional type
    lastName: string;
    isMarried: boolean; 

} = {
    company: 'Programming Hero Bangladesh',
    firstName : 'Mustakim',
    // middleName : 'Al',
    lastName : 'Noman',
    isMarried : true,

}

// user.company = 'PH' 