import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/Pathroutes.helper';
import styles from './Nav.module.css'

const Nav = (props) => {
    const { onSearch } = props;
    return (
        <div className={styles.nav}>
            <h2>Rick and Morty</h2>
            <div className={styles.wrapperButton}>
                <Link to={PATHROUTES.HOME} className={styles.linkRouter}>Home
                </Link>
                <Link
                    style={{ texDecoration: "none", color: "inherit"}}
                    to={PATHROUTES.ABOUT}>About
                </Link>
                <Link to={PATHROUTES.FAVORITES}>Favorites
                </Link>
                

            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};


export default Nav;