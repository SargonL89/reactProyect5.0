import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Main/ItemListContainer';
import Counter from './components/Counter/Counter';
import Texto from './components/Texto';

const App = () => {
    const saludo = '';

    const saludo2 = () => {
        console.log('Saludo2')
    };

    return (
        <>
            <Header />
            <ItemListContainer saludo={saludo} saludo2={saludo2}/>
            <Counter />
            <Texto />
            <Footer />
        </>
    )
};

export default App;
