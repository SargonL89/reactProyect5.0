import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {

    const saludo = '';
    const saludo2 = () => {
        console.log('Saludo2')
    };

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <ItemListContainer saludo={saludo} saludo2={saludo2}/>
                <Footer /> 
            </BrowserRouter>
        </CartProvider>
    )
};

export default App;
