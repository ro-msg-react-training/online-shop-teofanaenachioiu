import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'


export const StyledLink = withStyles((theme) => ({
    root: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        },
        '&:hover:visited': {
            color: theme.palette.primary.main,
        }
    }
}))(Link);