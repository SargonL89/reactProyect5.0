import React, { useEffect, useState } from 'react'
import Texto from './Texto';
import {products} from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import EjemploApi from '../EjemploAPI/EjemploApi';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes, useParams } from 'react-router-dom';

const ItemListContainer = ({saludo, saludo2}) => {
    const [items, setItems] = useState([]);

    // const parametroURL = useParams();
    // console.log('parametroURL: ', parametroURL.categoryId); 
  const {categoryId} = useParams()

  useEffect(() => {
    const getProducts = () => 
    new Promise((res, rej) => {
      const prodFiltrados = products.filter((prod) => prod.category === categoryId);
      setTimeout(() => {
        res(categoryId ? prodFiltrados : products);
      }, 500);
    });

    getProducts()
        .then((data)=> {
          setItems(data)
        })
        .catch((error)=> {
          console.log('catch: ', error)
        })
        .finally(()=> {
          console.log('Proceso finalizado')
        })
  }, [categoryId])
    // HECHO EN CLASE
    // useEffect(() => {
    //   const getProducts = new Promise((res, rej) => {
    //     setTimeout(()=> {
    //       res(products);
    //     }, 1500);
    //     setTimeout(()=> {
    //       rej('Ocurrió un error');
    //     }, 1500); 
    //   });
    //   getProducts
    //     .then((data)=> {
    //       setItems(data)
    //     })
    //     .catch((error)=> {
    //       console.log('catch: ', error)
    //     })
    //     .finally(()=> {
    //       console.log('finally')
    //     })
    // }, []);

    // useEffect(() => {
    //   if (categoryId) {
    //     const getProducts = new Promise((res, rej) => {
    //       const prodFiltrados = products.filter((prod)=> prod.category === categoryId)
    //       setTimeout(()=>{
    //         res(prodFiltrados)
    //       }, 1500);
    //       setTimeout(()=> {
    //         rej('Ocurrió un error inesperado')
    //       }, 1500);
    //     });
        
    //     getProducts.then((data) => {
    //       setItems(data)
    //     })
    //     .catch((error)=> {
    //       console.log(error)
    //     })
    //     .finally(()=> {
    //       console.log('Proceso finalizado')
    //     })
    //   } else {
    //     const getProducts = new Promise((res, rej) => {
    //       setTimeout(()=>{
    //         res(products)
    //       }, 1500);
    //       setTimeout(()=> {
    //         rej('Ocurrió un error inesperado')
    //       }, 1500);
    //     });
        
    //     getProducts.then((data) => {
    //       setItems(data)
    //     })
    //     .catch((error)=> {
    //       console.log(error)
    //     })
    //     .finally(()=> {
    //       console.log('Proceso finalizado')
    //     })
    //   }
    // }, [categoryId])

    
    const numero = Math.random();
    if (numero <= 0.25) {
        saludo = "Bienvenido! Nos alegra verte!";
      } else if (numero > 0.25 && numero <= 0.50) {
        saludo = "Bienvenido! Qué bueno encontrarte por acá!";
      } else if (numero > 0.50 && numero <= 0.75) {
        saludo = "Buenos días! Esperamos que encuentres lo que estás buscando";
      } else if (numero > 0.75) {
        saludo = "Bienvenido a Prototype 5.0! Estamos para ayudarte!";
      } else {
        saludo = "Ha ocurrido un error inesperado";
      };
    const saludo3 = () => {
      console.log('saludo3')
    } 


    return (
      <Routes>
        <Route path='/' element={<ItemList items={items}/>}/>
        <Route path='/detail/:title' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId/*' element={<ItemListContainer />}/>

        {/* <Route path='/saludo' element={
          <div>
            <p>{saludo}</p>
            <button onClick={saludo2}>Saludar2</button>
            <button onClick={saludo3}>Saludar3</button>
          <div/>
        }/> */}
        <Route path='/texto' element={<Texto />}/>
        <Route path='/ejemplo' element={<EjemploApi/>}/>
      </Routes>
    ); 
}

export default ItemListContainer

