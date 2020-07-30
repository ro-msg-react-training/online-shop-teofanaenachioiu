import { Button, withStyles } from '@material-ui/core';


export const StyledButton = withStyles((theme) => ({
    root: {
        textTransform: 'capitalize',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover':{
            color: theme.palette.primary.main,
        }
    }
}))(Button);
