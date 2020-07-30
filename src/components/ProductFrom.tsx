import React, { FormEvent } from 'react';
import { StyledPaper } from './StyledPaper';
import { Container, Grid, LinearProgress, TextField } from '@material-ui/core';
import { StyledButton } from './StyledButton';
import { useHistory } from 'react-router-dom';
import Product from '../domain/Product';


interface Props {
    onSubmit: (product: Product) => void
    onChangeInput: (propetry: string, newProduct: Product) => void
    title: string,
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


function ProductForm({ onSubmit, onChangeInput, title, productInfo }: Props) {
    const history = useHistory()

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (productInfo.errors.isFormValid) {
            onSubmit(productInfo.product)
            history.goBack()
        }
    }

    const goBack = () => {
        history.goBack()
    }

    const changeProperty = (propetry: string, value: string) => {
        const newProduct = Object.assign({}, productInfo.product);
        newProduct[propetry] = value
        onChangeInput(propetry, newProduct)
    }

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1>{title}</h1>
                </Grid>

                <Grid item >
                    <StyledButton type="submit" form="form"> Save </StyledButton>
                    <StyledButton onClick={goBack}> Cancel </StyledButton>
                </Grid>
            </Grid>
            {
                productInfo.loading ?
                    <LinearProgress /> :

                    productInfo.error ?
                        <p> Product not found </p> :

                        <StyledPaper>
                            <form id="form" onSubmit={(e) => submitForm(e)}>
                                <TextField
                                    label="Name"
                                    variant="filled"
                                    defaultValue={productInfo.product?.name}
                                    error={productInfo.errors.name.length > 0}
                                    helperText={productInfo.errors.name}
                                    onChange={(e) => { changeProperty('name', e.target.value) }} />

                                <TextField
                                    label="Description"
                                    variant="filled"
                                    multiline
                                    rows={4}
                                    rowsMax={10}
                                    defaultValue={productInfo.product?.description}
                                    error={productInfo.errors.description.length > 0}
                                    helperText={productInfo.errors.description}
                                    onChange={(e) => { changeProperty('description', e.target.value) }} />

                                <TextField
                                    label="Category"
                                    variant="filled"
                                    defaultValue={productInfo.product?.category}
                                    error={productInfo.errors.category.length > 0}
                                    helperText={productInfo.errors.category}
                                    onChange={(e) => { changeProperty('category', e.target.value) }} />
                                    
                                <TextField
                                    label="Price"
                                    variant="filled"
                                    type="number"
                                    defaultValue={productInfo.product?.price}
                                    error={productInfo.errors.price.length > 0}
                                    helperText={productInfo.errors.price}
                                    onChange={(e) => { changeProperty('price', e.target.value) }} />
                            </form>
                        </StyledPaper>
            }
        </Container>
    )
}

export default ProductForm;
