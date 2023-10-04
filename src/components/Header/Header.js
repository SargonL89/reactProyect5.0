import Navbar from '../Nav/Navbar';
import styles from './header.module.css'; 

const Header = () => {
    return (
        <header>
            <h1 className={styles}>Prototype EC5.0</h1>
            <Navbar ifHeader={true}/>
        </header>
    )
}

export default Header