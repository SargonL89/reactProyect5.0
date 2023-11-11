import React, { useEffect, useState } from 'react'
import EjemploApiList from '../EjemploApiList/EjemploApiList';

const EjemploApi = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products'
        // {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user: 'name',
        //         email: 'ejemplo@gmail.com',
        //         edad: 27
        //     })
        // }
        )
        .then((res) => res.json())
        .then((res) => setItems(res))
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

  return (
    <div>
        {
            isLoading ? <h1>cargando productos...</h1> :  <EjemploApiList items={items}/>
        }

    </div>
  )
}

export default EjemploApi