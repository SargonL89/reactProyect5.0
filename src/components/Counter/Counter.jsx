import React, {useState} from 'react'

const Counter = () => {
    // const estado = useState()
    // console.log(estado)
    
    // const miVariableDeEstado = estado[0]
    // const miFuncionDeEstado = estado[1];

    const [count, setCount] = useState(0)

    let tope = 1000

    const sumar = (num) => {
        if (count < tope) {
            setCount(count + num);
        } else {
            alert ('Maximo stock')
        }
    };
    const restar = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={() => sumar(1)}>+1</button>
            <button onClick={restar}>-1</button>
            <p>Count: {count}</p>
            <button disabled={count === 0}>Agregar al carrito</button>
        </div>
    )
}

export default Counter