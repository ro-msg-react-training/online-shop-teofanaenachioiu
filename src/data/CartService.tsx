import CartProduct from "../domain/CartProduct";
import axios from 'axios';
import Product from "../domain/Product";


const API = 'http://localhost:4000'
let products: CartProduct[] = []


export function addProductInUserCart(product: Product){
    const cartProduct = {
        'productId': product.id, 
        'name': product.name, 
        'price': product.price, 
        'quantity': 1} as CartProduct
    products.push(cartProduct)
}

export function updateProductFromUserCart(newProduct: CartProduct){
    const oldProductIndex = products.findIndex(prod => prod.productId === newProduct.productId)
    products[oldProductIndex] = newProduct
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
    const productToSend = products.map(product => { return {'productId': product.productId, 'quantity': product.quantity}})
    const data = {
        'customer': 'doej', 
        'products': productToSend
    }

    return axios.post(`${API}/orders`, data)
}
