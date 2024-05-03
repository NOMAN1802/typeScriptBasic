 {
    // Type alias


    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }

    const student1 : Student ={
        name: 'Abul',
        age: 30,
        contactNo: '01980931802',
        gender: 'male',
        address: 'dhaka'
    }
    const student2 : Student ={
        name: 'kalam',
        age: 33,
        gender: 'male',
        address: 'Jashore'
    }
    const student3 : Student ={
        name: 'Azad',
        age: 31,
        contactNo: '01980931802',
        gender: 'male',
        address: 'Nopara'
    }

    type UserName = string;

    type IsAdmin = boolean;

    const userName : UserName = 'Noman';
    const isAdmin : IsAdmin = true;
   type Add = (num1: number, num2: number) => number;
    const add : Add=(num1 , num2) => num1+ num2;
     
}