{

// Interface -generic
interface Developer <T, X = null>   {

    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike ? : X

}

type EmiLabWatch = {
    brand: string;
    model: string;
    display: string;
}
const poorDeveloper : Developer<EmiLabWatch, null> = {
    name: 'Noman',
    computer: {
        brand : 'Asus',
        model: 'x-554u',
        releaseYear: 2016

    },
    smartWatch: {
        brand:'Emilab',
        model: 'kw66',
        display: 'OLED'
    }
}

interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}

const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: 'Bat man',
    computer: {
        brand : 'apple',
        model: 'mac book',
        releaseYear: 2019

    },
    smartWatch: {
        brand:'apple watch',
        model: 'something',
    heartTrack: true,
    sleepTrack : true,
    },
    bike: {
        model: 'Yamaha',
        engineCapacity: '220cc'
    }
}

// 
}