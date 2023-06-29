
//Interfaces de producto y TaxCalculation
export interface Product {
    description:string;
    price:number;
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[]
};


//Creamos 2 objetos productos con datos.
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
};

const tablet: Product = {
    description: 'Airpad Air',
    price: 250.0
};

//Funcion taxCalculation donde le pasamos options TaxCalculationOptions como argumento
export function taxCalculation( options:TaxCalculationOptions ):[number, number] {

    //Destructarmos las opciones en tax y productos
    const {tax, products} = options;

    let total = 0;

    //Recorremos cada precio de cada producto y lo sumamos al total.
    products.forEach(({ price }) => {
        total += price;
    });

    //Retornamos una tupla.
    return [total, total * tax]
};


//Creamos 2 variables que almancenarán los productos y el tax.
const shoppingCart = [phone, tablet];
export const tax = 0.15;

//Le pasamos a la funcion el total de productos y el tax.
const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

//Imprimimos los valores total y totalTax.
// console.log("Total: ", total);
// console.log("Tax: ", totalTax);

export {};