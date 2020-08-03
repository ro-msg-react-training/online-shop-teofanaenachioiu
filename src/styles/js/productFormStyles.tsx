import { makeStyles } from "@material-ui/core";

export const useProductFormStyles = makeStyles({
    productForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    formItem: {
        margin: '1%',
        marginRight: '50%'
    },
    formItemLarge: {
        margin: '1%',
        marginRight: '20%'
    }
});