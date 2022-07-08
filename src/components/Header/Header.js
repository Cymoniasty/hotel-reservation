import styles from './Header.module.css';
import Searchbar from "./Searchbar/Searchbar";

function Header(props) {

    return (
        <header className={`container ${styles.header}`}>
            <Searchbar onSearch={props.onSearch}/>
        </header>
    )
}

export default Header;
