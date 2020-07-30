import { makeStyles } from "@material-ui/core";

export const useMenuStyles = makeStyles((theme) => ({
    topnav: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    topnavContent: {
        display: 'flex',
        height: '4em',
        alignItems: 'center'
    },
    spacer: {
        flex: 1
    },
    menuItem: {
        color: theme.palette.primary.contrastText,
        textTransform: 'capitalize'
    },
    link: {
        textDecoration: 'none',
    }
}));