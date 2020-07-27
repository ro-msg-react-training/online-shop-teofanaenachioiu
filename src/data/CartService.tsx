import Product from "../domain/Product";

let products: Product[] = []

export function addProduct(product: Product){
    products.push(product)
}

export function getProducts(){
    return products
}