import './style.css'
import { human, pokemon } from './Intro/Objects';
import { blastoise } from './Intro/classes';
blastoise
pokemon

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>hola ${blastoise.name} tu id es ${blastoise.id}</h1>
 <h2>Y ${human.name} su ide es ${human.id}</h2> 
`;


