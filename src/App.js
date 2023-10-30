import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
// import Counter from './components/Counter/Counter';
import ItemCount from './components/Counter/ItemCount';
import React, {useState} from 'react';

const App = () => {

    const stock = 100;
    const initial = 0;
    // const [carrito, setCarrito] = useState('vacío');
    const [products, setProducts] = useState(0)

    const onAdd = (counter) => {
        // setCarrito('Producto en carrito')
        setProducts(products + counter)
    };

    const saludo = '';
    const saludo2 = () => {
        console.log('Saludo2')
    };

    return (
        <>
            <Header />
            <ItemListContainer saludo={saludo} saludo2={saludo2}/>
            {/* <Counter /> */}
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            <p>Carrito: {products}</p>
            <Footer />
        </>
    )
};

export default App;
