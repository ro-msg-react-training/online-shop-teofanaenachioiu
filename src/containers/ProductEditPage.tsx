import React, { useEffect } from 'react';
import Product from '../domain/Product';
import { fetchProduct, updateProduct, localUpdateProduct } from '../redux/productEditPage/productEditActions';
import { connect } from 'react-redux';
import AddEditFrom from '../components/AddEditFrom';


function ProductEditPage(props: any) {
    const params = props.match.params

    useEffect(() => {
        props.fetchProduct(params.id)
    }, [params.id])

    return (
        <AddEditFrom
            productInfo={props.productInfo}
            title="Edit product details"
            onChangeInput={props.localEditProduct}
            onSubmit={props.editProduct}
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
        localEditProduct: (product: Product) => dispatch(localUpdateProduct(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditPage)
