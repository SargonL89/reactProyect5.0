import React, { useState } from 'react'

const Form = () => {
  // const [datosForm, setDatosForm] = ({nombre: '', apellido: '', edad: 0})
  const [nombre, setNombre] = useState('');
  // const [apellido, setApellido] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.nombre.value);
    // console.log(event.target.apellido.value)
    // console.dir(event.target)
  };

  const handleChangeName = (event) => {
    setNombre(event.target.value)
  }

  // const handleChangeLastName = () => {

  // }

  // const handleMouseMove = (e) => {
  //   console.log({x: e.clientX, y: e.clientY})
  // }
  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove)
  //   console.log('creo evento')
  //   return () => {
  //     window.removeEventListener('mousmove', handleMouseMove)
  //     console.log('borro evento')
  //   }
  // }, [])
  

  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Nombre' 
            name='nombre' 
            value={nombre} 
            onChange={handleChangeName}/>
            
            {/* <input 
            type='text' 
            placeholder='Apellido' 
            name='apellido' 
            value={apellido} 
            onChange={handleChangeLastName}/> */}

            <input type="text" id='edad' placeholder='23' />
            
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form