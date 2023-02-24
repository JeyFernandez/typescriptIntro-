import axios from 'axios';
import { Move,PokeAPIResponse } from '../interfaces/pokeApiResponse.interface';
export class Pokemo {
    constructor(public readonly id: number,public name: string ) {}

    speack(){
        console.log(`${this.name.toUpperCase()}`);
    }
    scream(){
        console.log(`${this.name.toLowerCase()}!!!!`);
    }

    async getMoves(): Promise<Move[]> {
        // return 10;
        const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/9');
        console.log(data.moves[0].move.name);
        console.log(`Hola Blastoise tu primer movimiento es es ${data.moves[0].move.name}`);        
        return data.moves;
    }
}

export const blastoise = new Pokemo (4, "Blastoise")
console.log(blastoise.getMoves());
export class Human {
    constructor( public id:string, public name: string, public age?:number) {}
}

export const charmander = new Pokemo (2, 'CHarmander')

export const ash = new Human ('C233S', 'Ash')

blastoise.speack()
blastoise.scream()
