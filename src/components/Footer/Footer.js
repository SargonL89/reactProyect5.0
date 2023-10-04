import Navbar from '../Nav/Navbar';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <Navbar ifHeader={false}/>
            <p className={styles.contenedor}>Leandro Magnotti</p>
        </footer>
    )
}

export default Footer