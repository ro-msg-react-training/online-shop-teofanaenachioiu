import React, { useRef, FormEvent } from 'react';
import { StyledPaper } from './StyledPaper';
import { Container, Grid, LinearProgress, TextField } from '@material-ui/core';
import { StyledButton } from './StyledButton';
import { useHistory } from 'react-router-dom';

function AddEditFrom(props: any) {
    const history = useHistory()

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onSubmit(props.productInfo.product)
        history.goBack()
    }

    const goBack = () => {
        history.goBack()
    }

    const changeProperty = (propetry: string, value: string) => {
        const newProduct = Object.assign({}, props.productInfo.product);
        newProduct[propetry] = value
        props.onChangeInput(newProduct)
    }

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1>{props.title}</h1>
                </Grid>

                <Grid item >
                    <StyledButton type="submit" form="form"> Save </StyledButton>
                    <StyledButton onClick={goBack}> Cancel </StyledButton>
                </Grid>
            </Grid>
            {
                props.productInfo.loading ?
                    <LinearProgress /> :

                    props.productInfo.error ?
                        <p> Product not found </p> :

                        <StyledPaper>
                            <form id="form" onSubmit={(e) => submitForm(e)}>
                                <TextField
                                    label="Name"
                                    variant="filled"
                                    defaultValue={props.productInfo.product?.name}
                                    error={props.productInfo.errors.name.length === 0}
                                    helperText={props.productInfo.errors.name}
                                    onChange={(e) => { changeProperty('name', e.target.value) }} />
                                <TextField
                                    label="Description"
                                    variant="filled"
                                    multiline
                                    rows={4}
                                    rowsMax={10}
                                    defaultValue={props.productInfo.product?.description}
                                    error={props.productInfo.errors.description.length === 0}
                                    helperText={props.productInfo.errors.description}
                                    onChange={(e) => { changeProperty('description', e.target.value) }} />
                                <TextField
                                    label="Category"
                                    variant="filled"
                                    defaultValue={props.productInfo.product?.category}
                                    error={props.productInfo.errors.category.length === 0}
                                    helperText={props.productInfo.errors.category}
                                    onChange={(e) => { changeProperty('category', e.target.value) }} />
                                <TextField
                                    label="Price"
                                    variant="filled"
                                    type="number"
                                    defaultValue={props.productInfo.product?.price}
                                    error={props.productInfo.errors.price.length === 0}
                                    helperText={props.productInfo.errors.price}
                                    onChange={(e) => { changeProperty('price', e.target.value) }} />
                            </form>
                        </StyledPaper>
            }
        </Container>
    )
}

export default AddEditFrom;
