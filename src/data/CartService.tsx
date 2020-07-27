import Product from "../domain/Product";
import axios from 'axios';


const API = 'http://localhost:4000'
let products: Product[] = []


export function addProductInUserCart(product: Product){
    products.push(product)
}

export function getProductsFromUserCart(){
    return products
}

export function isProductsInUserCart(){
    return products.length > 0;
}

export function clearUserCart(){
    products = []
}

export function sendUserOrder(){
    const productToSend = products.map(product => { return {'productId': product.id, 'quantity': 1}})
    const data = {
        'customer': 'doej', 
        'products': productToSend
    }
    console.log(data)

    return axios.post(`${API}/orders`, data)
}
