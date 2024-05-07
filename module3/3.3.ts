{
    // Type guards

    // typeof --> type guards

 type AlphaNumeric= string | number
    const add = ( params1: AlphaNumeric ,params2 : string | number ) : AlphaNumeric => {

        if(typeof params1 === 'number' && typeof params2 === "number"){
            return params1 + params2;
        }else{
            return params1.toString() + params2.toString();
        }

        
    }

    const result1 = add("2", 3)

    console.log(result1);

    // in guards


    type NormalUser ={
        name: string;
    }

    type AdminUser ={

        name: string;

        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) =>{
    

     
       if('role' in user){
        
        console.log(`My name is ${user.name} and my role is ${user.role}`);
       }
       else{
        console.log(`My name is ${user.name}`);
       }
    }

    const normalUser : NormalUser = {

        name: 'Mr.Normal vi'
    }

    const adminUser : AdminUser = {

        name: 'Mr.Admin vi',
        role: 'admin'
    }

    // 
}