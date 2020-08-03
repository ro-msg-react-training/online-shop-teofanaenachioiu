import React, { useEffect, Dispatch }  from 'react';
import Product from '../domain/Product';
import { addProduct, clearData, updateErrors, localEditProduct } from '../redux/productEditPage/productEditActions';
import { connect } from 'react-redux';
import ProductForm from '../components/ProductFrom';
import { StoreProps } from '../redux/props';


interface Props {
    clearData: () => void,
    localEditProduct: (product: Product) => void,
    addProduct: (product: Product) => void,
    updateErrors: (property: string, product: Product) => void,
    productInfo: {
        loading: boolean,
        product: any,
        error: boolean,
        errors:
        {
            isFormValid: boolean,
            name: string,
            description: string,
            category: string,
            price: string
        }
    }
}


function ProductAddPage({clearData, localEditProduct, addProduct, updateErrors, productInfo}: Props) {

    useEffect(() => {
        clearData()
        
        return () => {
            clearData()
        }
    }, [])

    
    return (
        <ProductForm 
            productInfo = {productInfo}
            title = "Add product"
            onChangeInput={localEditProduct}
            updateErrors={updateErrors}
            onSubmit={addProduct}
        />
    )
}

const mapStateToProps = ({editProduct}: StoreProps) => {
    return {
        productInfo: editProduct,
    }
}

export default connect(mapStateToProps, { addProduct, updateErrors, localEditProduct, clearData })(ProductAddPage)