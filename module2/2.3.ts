{
    // Generic type

    type GenericArray<T> = Array<T>
    
    // const rollNumber : number[] = [2,3,4];
    const rollNumber : GenericArray<number> = [2,3,4];

    // const mentors :string [] = ['Mr. x', 'Mr.y', 'Mr.z'];
    const mentors :GenericArray<string> = ['Mr. x', 'Mr.y', 'Mr.z'];

    // const booleanArray : boolean[] = [true, false, true]
    const booleanArray : GenericArray<boolean> = [true, false, true]


    interface User  {
        name: string;
        age: number;
    }

    const user: GenericArray<User>  = [
        {
            name: 'abul',
            age: 100,
        },
        {
            name: 'Babul',
            age: 101
            
        }
    ]
    

    const add = (x: number, y : number) => x+y;

    add(30,20)
     
    // Generic tuple

    type GenericTuple<X, Y> = [X,Y]

    const manush :GenericTuple<string, string> = ['Mr.x', 'Mr.y'];

    const userWithId : GenericTuple<number, {name: string, email: string}> = [
         123,
        {
            name: 'noman',
            email: 'n@gmail.com'
        }
    ]
     // 
}