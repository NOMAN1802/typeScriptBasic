{
// union type 
    //  type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    //  type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    //  type developer = FrontendDeveloper | FullstackDeveloper 

    //  const newDeveloper: FrontendDeveloper = 'fakibazDeveloper' 

     type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'o+' | 'a+' | 'ab+'
     }

     const user: User ={
        name: 'Noman',
        gender: 'male',
        bloodGroup: "o+"
     }
     type FrontendDeveloper = {
        skills: string[];
        designation1: 'frontend Developer'
     }
     type BackendDeveloper = {
        skills: string[];
        designation2: 'backend Developer'
     }

     type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
     const fullstackDeveloper : FullstackDeveloper =   {
        skills: ['HTML', 'CSS','EXPRESS'],
        designation1: 'frontend Developer',
        designation2: 'backend Developer'
     }
}