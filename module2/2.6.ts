{
    // Constraints

    const addCourseToStudent =<T extends {id: number, name:string, email: string}> (student : T) =>{
        const course ='Next Level Development web course'
    
        return{
            ...student,
            course
        }

     }

     const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
     }>
     ({id: 123,
        name: ' Mr.x', 
        email: 'x@gmail.com',
         devType: 'NLWD'
        })
     const student2 = addCourseToStudent({ id: 456, name: ' Mr.Y', email: 'y@gmail.com', hasWatch: 'AppleWatch'})

     const student3 = addCourseToStudent({id: 45, name: ' Mr.z', email: 'z@gmail.com',emin: 'emni'})
    

    // 
}