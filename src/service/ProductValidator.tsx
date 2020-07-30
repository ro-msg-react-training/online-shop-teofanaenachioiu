import Product from "../domain/Product";

export const validateRequired = (value: string | number) => {
    return value === '' ? 'Required' : ''
}

const validateNumber = (value: string | number) => {
    // todo
    return ''
}

export const validate = (product: Product) =>{
    const errors = 
    {
        name: '',
        description: '',
        category: '',
        price: ''
    }
    errors.name = validateRequired (product.name)
    errors.description = validateRequired (product.description)
    errors.category = validateRequired (product.category)
    errors.price = validateRequired (product.price)
    return errors
}