import axios from 'axios';
import Product from '../domain/Product';

const API = 'http://localhost:4000'


export function getAll(){
    return axios.get(`${API}/products`)
}

export function findById(id: number) {
    return axios.get(`${API}/products/${id}`);
}

export function deleteById(id: number) {
    return axios.delete(`${API}/products/${id}`);
}

export function update(product: Product) {
    return axios.put(`${API}/products/${product.id}`, product)
}

export function add(product: Product) {
    return axios.post(`${API}/products`, product)
}