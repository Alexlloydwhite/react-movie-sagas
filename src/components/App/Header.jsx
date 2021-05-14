import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <nav>
            <h1>The Movies Saga!</h1>
            <button onClick={() => history.push('/')}>home</button>
            <button onClick={() => history.push('/addmovie')}>Add New Movie</button>
        </nav>
    );
}

export default Header;