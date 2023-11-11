import React from 'react'

const EjemploApiList = ({items}) => {

  return (
    <div>
        {items.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.image} alt='product'/>
                <h3>{item.title}</h3>
            </div>
        )
        })}
    </div>
  )
}

export default EjemploApiList