import Navbar from '../Nav/Navbar';
import styles from './header.module.css'; 
import  { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className={styles.link}>
                <p className={styles.logo}>Prototype EC5.0</p>
            </Link>
            <Navbar ifHeader={true}/>
        </header>
    )
}

export default Header