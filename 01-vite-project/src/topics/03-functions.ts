
//Declaramos funciones en typeScript
function addNumbers(a:any, b:number):number{
    return a+b;
}

//Funcion tipo flecha que recibe numeros y devuelve un string 

//Recuerda poner backtick entre llaves `${a + b}`
const addNumbersArrow = (a:number, b:number):string  => {
    return `${ a + b }`;
}


//Primero poner los necesarios luego los opcionales y alfinal los declarados.
function multiply(firstNumber:number, _secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

 
const result:number = addNumbers(1,2)
const result2:string = addNumbersArrow(3,4)
const multipleResult:number = multiply(5);

console.log({result, result2, multipleResult});

//Creamos una interaz para un character.
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

//Creamos un Character con las propiedades de la interfaz.
const strider:Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida: ${ this.hp }`);
    }
}

//Creamos un metodo para helear al personaje.
const healCharacter = ( character:Character, amount:number ) => {
    character.hp += amount;

};

//Creamos un metodo para cambiarle el nombre al personaje.
const changeName = (character:Character, newName:string) => {
    character.name = newName;
}

//Llamamos al metodo y le mandamos el valor del amount que sería 30.
healCharacter(strider, 30);

//Llamamos al metodo y le mandamos el nuevo nombre.
changeName(strider, "Matyzock");

//Finalmente llamamos al metodo showHp que nos imprime la cantidad de vida.
strider.showHp();

console.log(strider.name);

export {};