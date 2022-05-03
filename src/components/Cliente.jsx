import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCliente } from '../utilities/htttpRequests'
const Cliente = ({cliente,handleEliminarCliente}) => {
    const navigate = useNavigate()
const {nombre,email,telefono,empresa,notas,id} = cliente
  return (
    <tr className="border-b hover:bg-gray-50">
    <td className="p-3">{nombre}</td>
    <td className="p-3">
        <p><span className="text-gray-700 font-bold text-lg">Email: </span>{email}</p>
        <p><span className="text-gray-700 font-bold text-lg">Teléfono: </span>{telefono}</p>
    </td>
    <td className="p-3">{empresa}</td>
    <td className="p-3 ">
        <button 
            className='transition ease-in-out duration-300 w-full  p-2  mb-3 text-sm uppercase text-white font-bold bg-green-600 hover:bg-green-700 hover:scale-110  rounded'
            onClick={()=>{navigate(`/clientes/${id}`)}}
            >Ver</button>
        <button 
            className='transition ease-in-out duration-300 w-full p-2 mb-3 text-sm uppercase text-white font-bold bg-blue-600 hover:bg-blue-700 hover:scale-110  rounded'
            onClick={()=>{navigate(`/clientes/editar/${id}`)}}
            >Editar</button>
        <button  
            className='transition ease-in-out duration-300 w-full p-2 text-sm uppercase text-white font-bold bg-red-600 hover:bg-red-700 hover:scale-110  rounded'
            onClick={async ()=>{
                await deleteCliente(id)
                handleEliminarCliente(id)
            }}
            >Eliminar</button>
    </td>
    </tr>
    )
}

export default Cliente