{
    // spread operator
    // rest operator

    // Learn spread operator

    const bros1 : string[] = [

        'Mir',
        'Firoz',
        'Mizan'
    ];
    const bros2: string[] = ['Nahid','Tonmoy','Rahat'];

    bros1.push(...bros2)

    const mentor1   = {
        typeScript: 'Mizaba',
        redux: 'Mir',
        dbsm: 'Mizan'
    }
    const mentor2   = {
        prizma: 'Firoz',
        next: 'Tonmoy',
       cloud: 'Nahid'
    }

    const mentorList = {
        ...mentor1,
        ...mentor2

    }

    // Learn rest operator

    const greetFriend = (...friend : string[]) => {
     
        friend.forEach((friend : string) =>console.log(`Hi ${friend}`)) 
    };

    greetFriend('Abul', 'Kabul', 'Babul', 'Habul');
}