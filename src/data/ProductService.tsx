import axios from 'axios';

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