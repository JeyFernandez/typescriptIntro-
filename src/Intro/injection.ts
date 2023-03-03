import { PokeApiAdapter } from './pokeApi.adapter';
import { Ability, PokeAPIResponse } from '../interfaces/pokeApiResponse.interface';

export class PokemonAdapter {
    constructor( 
        public name: string,
        public readonly: number,

        //inyeccion de dependencias
        private http: PokeApiAdapter
    ) {}

    async getHabilidades(): Promise<Ability[]>{
        const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/76');
        const ability = (data.abilities[1].ability.name);
        console.log(`Hola, ${pikachu.name}, tu id es ${pikachu.readonly} y tu habilidad es ${ability}` );
        return data.abilities;
    }
}

const PokeApi = new PokeApiAdapter();

export const pikachu = new PokemonAdapter('Pikachu', 25, PokeApi );
console.log(pikachu.getHabilidades());
