import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/Pathroutes.helper';
import styles from './Nav.module.css';

const Nav = (props) => {
    const { onSearch } = props;
    return (
      <div className={styles.nav}>
        <h2>Rick and Morty</h2>
        <div className={styles.wrapperButton}>
          <Link to={PATHROUTES.HOME} className={styles.navLink}>
            Home
          </Link>
          <Link to={PATHROUTES.FAVORITES} className={styles.navLink}>
            Favorites
          </Link>
          <Link to={PATHROUTES.ABOUT} className={styles.navLink}>
            About me
          </Link>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    );
};

export default Nav;
