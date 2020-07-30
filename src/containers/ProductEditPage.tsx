import React, { useEffect } from 'react';
import Product from '../domain/Product';
import { fetchProduct, updateProduct, localUpdateProduct, clearData } from '../redux/productEditPage/productEditActions';
import { connect } from 'react-redux';
import ProductForm from '../components/ProductFrom';

interface Props {
    clearData: () => void,
    localEditProduct: (property: string, product: Product) => void,
    editProduct: (product: Product) => void,
    fetchProduct: (id: number) => void,
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

function ProductEditPage({clearData, editProduct, fetchProduct, localEditProduct, productInfo, match}: Props) {
    const productId = match.params.id

    useEffect(() => {
        fetchProduct(productId)

        return () => {
            clearData()
        }
    }, [productId])

    return (
        <ProductForm
            productInfo={productInfo}
            title="Edit product details"
            onChangeInput={localEditProduct}
            onSubmit={editProduct}
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        productInfo: state.editProduct,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProduct: (id: number) => dispatch(fetchProduct(id)),
        editProduct: (product: Product) => dispatch(updateProduct(product)),
        localEditProduct: (property: string, product: Product) => dispatch(localUpdateProduct(property, product)),
        clearData: () => dispatch(clearData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditPage)
