// IMPORTS FOR REACT FRAMEWORKS!
import { useHistory } from 'react-router-dom';
// -------------------- MUI -----------------------
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => {
    return {
        toolbarButton: {
            marginLeft: 'auto'
        }
    }
})

const Header = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography>The Movies Saga!</Typography>
                <div className={classes.toolbarButton}>
                    <Button onClick={() => history.push('/')}>home</Button>
                    <Button onClick={() => history.push('/addmovie')}>Add New Movie</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;