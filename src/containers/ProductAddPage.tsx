import React, { useEffect }  from 'react';
import Product from '../domain/Product';
import { localUpdateProduct, addProduct, clearData } from '../redux/productEditPage/productEditActions';
import { connect } from 'react-redux';
import ProductForm from '../components/ProductFrom';


interface Props {
    clearData: () => void,
    localEditProduct: (property: string, product: Product) => void,
    addProduct: (product: Product) => void,
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


function ProductAddPage({clearData, localEditProduct, addProduct, productInfo}: Props) {

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
            onSubmit={addProduct}
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
        addProduct: (product: Product) => dispatch(addProduct(product)),
        localEditProduct: (property: string, product: Product) => dispatch(localUpdateProduct(property, product)),
        clearData: () => dispatch(clearData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddPage)
