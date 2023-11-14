import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  // const parametro = useParams();
  // console.log(parametro)
  const {title} = useParams()

  

  useEffect(()=> {
    const detail = new Promise((res, rej) => {
      const filtered = products.filter((product)=> {
        return product.title === 'Remera Iorio';
      });
      // setTimeout(()=> {
        res(filtered)
      // }, 2000);
      // setTimeout(()=> {
        rej('Ocurrió un error en la solicitud')
      // }, 2000)
    })

    detail
    .then(data => {
      setProduct(data)
    })
    .catch(error => {
      console.log('Se produjo un error: ', error)
    })
  }, [])

  return (
    <>
      <ItemDetail product={product}/>
    </>
  )
}


export default ItemDetailContainer