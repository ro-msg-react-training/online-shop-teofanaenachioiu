import Product from "../domain/Product";

const errors =
{
    isFormValid: true,
    name: '',
    description: '',
    category: '',
    price: ''
}

export const validateRequired = (value: string | number) => {
    return value === "" ? 'Required' : ""
}

export const validate = (property: string, product: Product) => {
    switch (property) {
        case 'name':
            errors.name = validateRequired(product.name)
            errors.isFormValid = errors.name === ''
            break;
        case 'description':
            errors.description = validateRequired(product.description)
            errors.isFormValid = errors.description === ''
            break;
        case 'category':
            errors.category = validateRequired(product.category)
            errors.isFormValid = errors.category === ''
            break;
        case 'price':
            errors.price = validateRequired(product.price)
            errors.isFormValid = errors.price === ''
            break;
        default:
            break;
    }
    console.log('errors form validate function ', errors)
    return errors
}