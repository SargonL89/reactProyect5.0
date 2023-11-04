import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
import React from 'react';

const App = () => {

    const saludo = '';
    const saludo2 = () => {
        console.log('Saludo2')
    };

    return (
        <>
            <Header />
            <ItemListContainer saludo={saludo} saludo2={saludo2}/>
            <Footer /> 
        </>
    )
};

export default App;
