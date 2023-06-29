

export class Person {
    //Public se puede ver en el mundo exterior
    // public name: string;
    //Private solo se usa dentro de la clase
    // private address: string;
    
    constructor(
        public firstname: string, 
        public lastname: string, 
        public address: string = 'No address'
        ) {
        // this.name = name;
        // this.address = address;
        }
}

export class Hero{

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName);
    }
};

const tony = new Person('Tony','Stark', 'New York');
const ironman = new Hero('Iron Man', 45, 'Tony Stark', tony);

console.log(ironman);