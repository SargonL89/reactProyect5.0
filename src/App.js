import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <ItemListContainer/>
                <Footer /> 
            </BrowserRouter>
        </CartProvider>
    )
};

export default App;
