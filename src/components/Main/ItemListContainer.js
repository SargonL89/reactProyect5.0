import React, { useEffect, useState } from 'react'
import Texto from './Texto';
import {products} from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({saludo, saludo2}) => {
    const [items, setItems] = useState([]);

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

    useEffect(() => {
      const getProducts = new Promise((res, rej) => {
        setTimeout(()=>{
          res(products)
        }, 1500);
        setTimeout(()=> {
          rej('Ocurrió un error inesperado')
        }, 1500);
      });
      getProducts.then((data) => {
        setItems(data)
      })
      .catch((error)=> {
        console.log(error)
      })
      .finally(()=> {
        console.log('Proceso finalizado')
      })
    }, [])

    
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
        <div>
          <p>{saludo}</p>
          <button onClick={saludo2}>Saludar2</button>
          <button onClick={saludo3}>Saludar3</button>
          <Texto />
          <ItemList items={items}/>
        </div>
    ); 
}

export default ItemListContainer