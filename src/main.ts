import './style.css'
import { pikachu } from './Intro/injection';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h2>hola, ${pikachu.name} tu id es ${pikachu.readonly}</h2> 
`;



