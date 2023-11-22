import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const {title} = useParams()

  useEffect(()=> {
    const detail = new Promise((res, rej) => {
      const filtered = products.filter((prod)=> {
        return prod.title === title;
      });
        res(title ? filtered : products)
        rej('Ocurrió un error en la solicitud')
    })

    detail
    .then(data => {
      setProduct(data)
    })
    .catch(error => {
      console.log('Se produjo un error: ', error)
    })
  }, [title])

  return (
    <>
      <ItemDetail product={product}/>
    </>
  )
}


export default ItemDetailContainer