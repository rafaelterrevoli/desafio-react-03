import { useState } from "react";

export default function Formulario({ addColaborador, setAlert }) {

  //expresiones regulares para validar los input
  const patronEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const patronEdad = /^[0-9]{2}$/
  const patronTele = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/

  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  //agrega los valore del los imput a formData
  const datosFormulario = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function sendForm(event) {
    event.preventDefault();
    //valida todos los input
    if (formData.nombre === '') {
      setAlert({ mensaje: 'Debes ingresar tu nombre', color: 'danger' })
      return
    } else if (formData.correo === '') {
      setAlert({ mensaje: 'Debes ingresar tu email', color: 'danger' })
      return
    } else if (!patronEmail.test(formData.correo)) {
      setAlert({ mensaje: 'Formato incorrecto del email', color: 'danger' })
    } else if (formData.edad === '') {
      setAlert({ mensaje: 'Debes ingresar edad', color: 'danger' })
      return
    } else if (!patronEdad.test(formData.edad)) {
      setAlert({ mensaje: 'Edad numerico y máximo 2 dígitos', color: 'danger' })
    } else if (formData.cargo === '') {
      setAlert({ mensaje: 'Debes ingresar el cargo ', color: 'danger' })
      return
    } else if (formData.telefono === '') {
      setAlert({ mensaje: 'Debes ingresar el teléfono', color: 'danger' })
      return
    } else if (!patronTele.test(formData.telefono)) {
      setAlert({ mensaje: 'Formato de teléfono incorrecto', color: 'danger' })
    } else {
      setAlert({ mensaje: 'Colabarador agregado !', color: 'info' })
      formData.id = Math.floor(Math.random() * 99999999).toString();
      console.log(formData)
      addColaborador(formData) // pasa los datos del colaborador al componente registro
      //limpiamos la varia de estado
      setFormData({
        id: '',
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
      })
      // value={formData.xxxxxx} en el input para limpiar los input 
      return
    }

  }

  return (
    <>
      <form onSubmit={sendForm}>
        <input placeholder="Nombre del colobarador" type="text" name="nombre" onChange={datosFormulario} value={formData.nombre} />
        <input placeholder="Email del colaborador" type="text" name="correo" onChange={datosFormulario} value={formData.correo} />
        <input placeholder="Edad del colaborador" type="text" name="edad" onChange={datosFormulario} value={formData.edad} />
        <input placeholder="Cargo del colaborador" type="text" name="cargo" onChange={datosFormulario} value={formData.cargo} />
        <input placeholder="Teléfono del colaborador Ejemplo +56987654321" type="text" name="telefono" onChange={datosFormulario} value={formData.telefono} />
        <button className="boton-agregar" type="sumit">Agregar Colaborador</button>
        <button className="boton-agregar" type="reset">Cancelar</button>
      </form>
    </>
  )
}
