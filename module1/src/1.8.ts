{
    const user = {
    id: 123,
    name : {
        firstName: 'Mustakim',
        middleName: 'Al',
        lastName: 'Noman'
    },
    contactNo: '01980931802',
    address: "Uganda",
};

const {
    contactNo,

    name: {middleName}

}  = user ;

const myFriends = ['Abul', 'Kabul', 'Babul', 'Habul', 'Dadul'];

const [, , bestFriend, ...rest] = myFriends;
}