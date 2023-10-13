import React from 'react'
import Button from '../Button/Button';

const ItemListContainer = ({saludo, saludo2}) => {
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
          <Button value='Logout' variant='secundary'/>
          <p>{saludo}</p>
          <button onClick={saludo2}>Saludar</button>
          <button onClick={saludo3}>Saludar3</button>
        </div>
    );
}

export default ItemListContainer