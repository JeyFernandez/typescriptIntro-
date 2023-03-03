
export const pokemon = {
    id: 1,
    name: "Charizard",
}

export const human ={
    id: "C0180591",
    name:"Ash Katchum"
}

//interfaces
interface Pokemon {
    id: number;
    name : string;
    age?: number
}
export const charmander: Pokemon = {
    id: 102312,
    name:'Charmander',

}

interface Human {
    id: string;
    name: string
    age: number
}

export const avimilex: Human = {
    id:'123-23521-2432k',
    name:'Avimilex',
    age: 20
}

// console.log(avimilex)
// console.log(charmander)
// console.log(pokemon);
// console.log(human)

