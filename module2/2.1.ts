{

    // Type assertion

    let anything : any ;

    // anything = 'Next level development';
    anything = 222;

    (anything as number)

    const kgToGm = (value: string | number) : string | number | undefined =>{
        
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) *1000;
         
        }
        if(typeof value === "number"){
            return value * 1000 

        }
    }
  const result1 =   kgToGm('1000') as string
  const result2 =   kgToGm(.1) as number

  console.log(result1, result2);

  type CustomError = {
    message: string
};

  try{

  }catch(error){
   console.log((error as CustomError).message);
  }
}