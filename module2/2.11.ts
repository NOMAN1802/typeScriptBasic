{
    // utility types

    // pick

    type Person = {

        name: string; 
        age: number;
        email?: string;
        contractNo: string
    }

    type NameAge = Pick<Person, 'name' | 'age'>
   

    // Omit

    type ContactInfo = Omit <Person, 'name' | 'age'>

    // Required
    type PersonRequired = Required <Person>


    // Partial
    type PersonPartial = Partial <Person>

    //Readonly
    type PersonReadonly = Readonly <Person>
    const person1: PersonReadonly ={
        name: 'Noman',
        age: 29,
        contractNo: '01980931802'

    }

    // RECORD

    const EmptyObj : Record<string, unknown> = {}
     type MyObj = Record<string, string>
    const obj1 : MyObj ={

        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 11
    }
  
    // 
} 