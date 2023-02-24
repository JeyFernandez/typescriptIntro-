export class Pokemo {
    constructor(public readonly id: number,public name: string ) {}
    speack(){
        console.log(`this.name.toUpperCase()`)}
}
export class Human {
    constructor( public id:string, public name: string, public age?:number) {}
}
export const blastoise = new Pokemo (4, "Blastoise")

export const charmander = new Pokemo (2, 'CHarmander')

export const ash = new Human ('C233S', 'Ash')