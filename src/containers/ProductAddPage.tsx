import React  from 'react';
import Product from '../domain/Product';
import { localUpdateProduct, addProduct } from '../redux/productEditPage/productEditActions';
import { connect } from 'react-redux';
import AddEditFrom from '../components/AddEditFrom';


function ProductAddPage(props: any) {

    return (
        <AddEditFrom 
            productInfo = {props.productInfo}
            title = "Add product"
            onChangeInput={props.localEditProduct}
            onSubmit={props.addProduct}
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
        localEditProduct: (product: Product) => dispatch(localUpdateProduct(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddPage)
