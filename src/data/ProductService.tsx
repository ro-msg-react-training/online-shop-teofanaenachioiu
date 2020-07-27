import products from './products.json'
import Product from '../domain/Product'

export function getAll(){
    return products;
}

export function findById(id: number) {

    return products.find(prod => prod.id == id);
}
