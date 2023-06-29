

export interface Passenger {
    name: string;
    children?:string[];
}

const passenger1: Passenger = {
    name: "Matías",
}
const passenger2: Passenger = {
    name: "Jean",
    children: ['Pico', 'Raja']
}

const returnChildrenNumber = (passenger: Passenger):number => {

    //Le digo a la funcion que si o si devolverá un children.
    const howManyChildren = passenger.children!.length;
    //Si childrens es undefined devolverá un 0.
    // const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1);