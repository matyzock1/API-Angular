import { Product, taxCalculation, tax as tax2 } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 200
    },
    {
        description: 'Notebook',
        price: 400
    }
];

const [ total, tax] = taxCalculation({
    products: shoppingCart,
    tax: tax2
});
    
console.log('Precio total: ', total);
console.log('Tax total: ', tax);


