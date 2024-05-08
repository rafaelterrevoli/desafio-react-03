import { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import { DatosColaboradores } from './DatosColaboradores';
import Formulario from './Formulario';
import Listado from './Listado';



export default function Registro() {
  const [alert, setAlert] = useState({mensaje: "", color: ""});
  const [colaboradores, setColaboradores] = useState(DatosColaboradores);

  //agrega colaborador
  const addColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  //elimina colaborador
  const deleteColaborador = (id) => {
    console.log(id)
    const eliminar = window.confirm(`Estas seguro que deseas eliminar el registro id: ${id}`)
    if(eliminar){
      const nuevoColaboradores = colaboradores.filter(borrar => borrar.id !== id)
      console.log(nuevoColaboradores)
      setColaboradores(nuevoColaboradores)
    }
  }

  return (
    <>
      <Formulario addColaborador={addColaborador} setAlert={setAlert} />
      {alert.mensaje && <Badge bg={alert.color}>{alert.mensaje}</Badge>}
      <Listado colaboradores={colaboradores} deleteColaborador={deleteColaborador}/>
    </>
  )
}
