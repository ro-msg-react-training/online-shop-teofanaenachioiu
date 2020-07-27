import { Paper, withStyles } from '@material-ui/core';


export const StyledPaper = withStyles((theme) => ({
    root: {
        margin: '12px 0',
        padding: '10px',
        borderRadius: '5px'
    }
}))(Paper);