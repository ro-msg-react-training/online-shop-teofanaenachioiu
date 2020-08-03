import React, { useEffect } from 'react';
import Product from '../domain/Product';
import { fetchProductForm, editProduct, clearData, updateErrors, localEditProduct } from '../redux/productEditPage/productEditActions';
import { connect } from 'react-redux';
import ProductForm from '../components/ProductFrom';
import { StoreProps } from '../redux/props';


interface Props {
    clearData: () => void,
    updateErrors: (property: string, product: Product) => void,
    localEditProduct: (product: Product) => void,
    editProduct: (product: Product) => void,
    fetchProductForm: (id: number) => void,
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
    },
    match: any
}

 
function ProductEditPage({clearData, editProduct, fetchProductForm, localEditProduct, updateErrors, productInfo, match}: Props) {
    const productId = match.params.id

    useEffect(() => {
        fetchProductForm(productId)

        return () => {
            clearData()
        }
    }, [productId])

    return (
        <ProductForm
            productInfo={productInfo}
            title="Edit product details"
            onChangeInput={localEditProduct}
            updateErrors={updateErrors}
            onSubmit={editProduct}
        />
    )
}

const mapStateToProps = ({editProduct}: StoreProps) => {
    return {
        productInfo: editProduct,
    }
}

export default connect(mapStateToProps, { fetchProductForm, editProduct, localEditProduct, updateErrors, clearData })(ProductEditPage)
