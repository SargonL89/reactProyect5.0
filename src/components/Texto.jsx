import React, {useState, useEffect} from 'react'

const Texto = () => {
    const [nombre, setNombre] = useState('David');
    const [valorBull, setValorBull] = useState(true);

    const cambiarNombre = () => {
        if (nombre === 'Erica') {
            setNombre('David')
        } else {
            setNombre('Erica')
        }
    };

    const cambiarValor = () => {
        setValorBull(!valorBull)
    }

    useEffect(() => {
        console.log('Me ejecuto siempre')
    });

    useEffect(()=>{
        //tareas pesadas como solicitudes a bases de datos, tareas que requieran gasto de dinero
        console.log('Me ejecuto una sola vez')
    }, [])

    useEffect(()=>{
        console.log(`una sola vez y cada vez que cambie ${valorBull}`)
    }, [valorBull])

    return (
    <div>
        <p>
            Mi nombre {nombre}
        </p>
        {valorBull ? <h1>El valor es true</h1> : <h1>otra cosa</h1>}
        <button onClick={cambiarNombre}>
            Cambiar texto
        </button>
        <button onClick={cambiarValor}>
            Cambiar valor
        </button>
    </div>
    )
}

export default Texto