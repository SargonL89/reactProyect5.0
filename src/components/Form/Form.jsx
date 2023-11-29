import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '', lastName: '', street: '', streetNum: '', city: '', postalAdd: '', phoneNum: '', email: '', cardNum: '', cardExp: '', cvv: '', comentary: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}/>
          <label>Apellido:</label>
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Calle:</label>
          <input
            type='text'
            name='street'
            value={formData.street}
            onChange={handleChange}/>
          <label>Numero:</label>
          <input
            type='number'
            name='streetNum'
            value={formData.streetNum}
            onChange={handleChange}/>
          <label>Ciudad:</label>
          <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange}/>
          <label>Codigo postal:</label>
          <input
            type='number'
            name='postalAdd'
            value={formData.postalAdd}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Num. telefono:</label>
          <input
            type='number'
            name='phoneNum'
            value={formData.phoneNum}
            onChange={handleChange}/>
          <label>Correo Electronico:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Numero de tarjeta de credito:</label>
          <input
            type='number'
            name='cardNum'
            value={formData.cardNum}
            onChange={handleChange}/>
          <label>Fecha venc. tarjeta:</label>
          <input
            type='date'
            name='cardExp'
            value={formData.cardExp}
            onChange={handleChange}/>
          <label>CVV:</label>
          <input
            type='number'
            name='cvv'
            value={formData.cvv}
            onChange={handleChange}/>
        </div>
        <div>
          <label>Comentarios:</label>
          <textarea 
            type='text'
            name='comentary'
            value={formData.comentary}
            onChange={handleChange}
            rows={4} 
            cols={50}></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Form





/* <input 
type='text' 
placeholder='Nombre' 
name='nombre' 
value={nombre} 
onChange={handleChangeName}/>

<input 
type='text' 
placeholder='Apellido' 
name='apellido' 
value={apellido} 
onChange={handleChangeLastName}/>

<input type="text" id='edad' placeholder='23' /> */

  // const [datosForm, setDatosForm] = ({nombre: '', apellido: '', edad: 0})
  // const [nombre, setNombre] = useState('');
  // const [apellido, setApellido] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.nombre.value);
  //   console.log(event.target.apellido.value)
  //   console.dir(event.target)
  // };

  // const handleChangeName = (event) => {
  //   setNombre(event.target.value)
  // }

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
  
