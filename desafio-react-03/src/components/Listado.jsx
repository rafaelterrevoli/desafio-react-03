import React from 'react'
import { Table } from 'react-bootstrap'


export default function Listado({colaboradores, deleteColaborador}) {
  
    return (
        <>
            <div className="tabla">
                <h2>Listado de colaboradores</h2>
                <Table striped>
                    <tbody>
                        <tr>
                            <td className="cabecera">Nombre</td>
                            <td className="cabecera">Correo</td>
                            <td className="cabecera">Edad</td>
                            <td className="cabecera">Cargo</td>
                            <td className="cabecera">Teléfono</td>
                            <td className="cabecera">Acción</td>
                        </tr>
                        {
                            colaboradores.legth === 0 ? <td><h2>No hay datos</h2></td>
                            :colaboradores.map((item, i) =>
                                    <tr key={i}>
                                        <td>{item.nombre}</td>
                                        <td>{item.correo}</td>
                                        <td>{item.edad}</td>
                                        <td>{item.cargo}</td>
                                        <td>{item.telefono}</td>
                                        <td>
                                        <button className='boton-eliminar' onClick={() => deleteColaborador(item.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
