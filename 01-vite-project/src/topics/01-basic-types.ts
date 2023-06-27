


//Variables que no cambian (constantes).
const name = 'Matías';

//Variables que cambian y que pueden combinar tipos de datos.
let hpPoints:number | 'FULL' = 95;


const isAlive:boolean = true;

hpPoints = 'FULL';

console.log({
    name,
    hpPoints,
    isAlive
})


export {};