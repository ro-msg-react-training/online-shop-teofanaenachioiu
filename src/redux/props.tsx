import Product from "../domain/Product";
import CartProduct from "../domain/CartProduct";

export interface StoreProps {
    products: {
        loading: boolean,
        products: Product[],
        error: boolean
    }
    product: {
        loading: boolean,
        product: Product,
        error: boolean,
        deleted: boolean,
        bought: boolean
    }
    userCart: {
        loading: boolean,
        cartProducts: CartProduct[],
        error: boolean,
        sent: boolean
    }
    editProduct: {
        loading: boolean,
        product: Product,
        error: boolean,
        updated: boolean,
        added: boolean,
        errors:
        {
            isFormValid: boolean,
            name: string,
            description: string,
            category: string,
            price: string
        },
    }
}

export interface FetchProductDetailsProps {
    type: string, 
    payload: number
}

export interface DeleteProductProps {
    type: string, 
    payload: number
}

export interface BuyProductProps {
    type: string, 
    payload: Product
}

export interface FetchProductFormProps {
    type: string, 
    payload: number
}

export interface EditProductProps {
    type: string, 
    payload: Product
}

export interface UpdateProductQuantityProps {
    type: string, 
    payload: CartProduct
}

export interface UpdateFormErrorsProps {
    type: string,
    property: string,
    product: Product
}