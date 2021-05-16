// IMPORTS FOR REACT FRAMEWORKS!
import { useState } from 'react';
// -------------------- MUI -----------------------
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

// theme for inputs
const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    cancelBtn: {
        marginRight: 5
    }
})

const Admin = () => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [toggleForm, setToggleForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked submit login');
        setToggleForm(true);
    }

    return (
        <Container align="center">
            {toggleForm ?
                <div>
                    <img src="/images/website-is-under-construction.jpeg" />
                    <Typography variant="h2" color="error">This Page is UNDER CONSTRUCTION ... Check Back Soon !</Typography>
                </div>
                :
                <form onSubmit={handleSubmit}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                    >
                        Admin Login
                    </Typography>
                    <TextField
                        value={userName}
                        label="User Name"
                        className={classes.field}
                        variant="outlined"
                        required
                        fullWidth
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        value={password}
                        label="Password"
                        type="password"
                        className={classes.field}
                        variant="outlined"
                        required
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Login
                </Button>
                </form>
            }
        </Container>
    );
}

export default Admin;