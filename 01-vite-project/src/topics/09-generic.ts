export function whatsMyType<T>(argument: T): T{
    return argument;
}

const amIstring = whatsMyType<string>('Maracas');
const amINumber = whatsMyType<number>(123);
const amIarray = whatsMyType<(string | number)[]>([1,2,3,4,'asd']);

console.log(amIstring);
console.log(amINumber);
console.log(amIarray);