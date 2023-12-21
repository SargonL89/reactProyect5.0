import React, { useEffect, useState } from 'react'
import Texto from './Texto';
import {products} from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import EjemploApi from '../EjemploAPI/EjemploApi';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes, useParams } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx';
import { PuffLoader } from 'react-spinners';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    const getProducts = () => 
    new Promise((res) => {
      const prodFiltrados = products.filter((prod) => prod.category === category);
      setTimeout(() => {
        setIsloading(false);
        res(category ? prodFiltrados : products);
      }, 2000);
    });

    getProducts()
        .then((data)=> {
          setItems(data)
        })
        .catch((error)=> {
          console.log('catch: ', error)
        })
  }, [category])

    return isloading ? 
    (<div style={{display:'flex', justifyContent: 'center'}}><PuffLoader color="rgba(0, 7, 218, 1)" speedMultiplier={0.5}/></div>)
    :
    (<Routes>
      <Route path='/' element={<ItemList items={items}/>}/>
      <Route path='/detail/:title/*' element={<ItemDetailContainer/>}/>
      <Route path='/category/:category/*' element={<ItemListContainer />}/>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/texto' element={<Texto />}/>
      <Route path='/ejemplo' element={<EjemploApi/>}/>
    </Routes>);
}

export default ItemListContainer


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

    
    // const numero = Math.random();
    // if (numero <= 0.25) {
    //     saludo = "Bienvenido! Nos alegra verte!";
    //   } else if (numero > 0.25 && numero <= 0.50) {
    //     saludo = "Bienvenido! Qué bueno encontrarte por acá!";
    //   } else if (numero > 0.50 && numero <= 0.75) {
    //     saludo = "Buenos días! Esperamos que encuentres lo que estás buscando";
    //   } else if (numero > 0.75) {
    //     saludo = "Bienvenido a Prototype 5.0! Estamos para ayudarte!";
    //   } else {
    //     saludo = "Ha ocurrido un error inesperado";
    //   };


