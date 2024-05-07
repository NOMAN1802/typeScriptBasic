{

    // Function with generic
 const createArray = (params: string) : string[] =>{
    return [params]
 }

 const createArrayWithGeneric = <T>(params: T) : T[] =>{
    return [params]
 }


 const result1 = createArray('BANGLADESH')

 const resGeneric = createArrayWithGeneric<string>('Bangladesg')
 type User = {
    id: number;
    name: string;
 }
 const resGenericObject = createArrayWithGeneric<User>({
    id: 123,
    name: ' Noman'
 })
// Tuple generic function

 const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T,Q] =>{
    return [param1,param2]
 }


 const result = createArrayWithTuple<String, number>('BANGLADESH',123)
 const res10 = createArrayWithTuple<String, string>('BANGLADESH','123')
 const res11 = createArrayWithTuple<String, {name: string}>('BANGLADESH',{name: 'asis'})

 const addCourseToStudent =<T> (student : T) =>{
    const course ='Next Level Development web course'

    return{
        ...student,
        course
    }

    const student1 = addCourseToStudent({name: ' Mr.x', email: 'x@gmail.com', devType: 'NLWD'})
    const student2 = addCourseToStudent({name: ' Mr.Y', email: 'y@gmail.com', hasWatch: 'AppleWatch'})
 }


    // 
}