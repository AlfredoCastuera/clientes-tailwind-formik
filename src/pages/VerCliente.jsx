import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Cliente from '../components/Cliente'
import { getClienteById } from '../utilities/htttpRequests'
const VerCliente = () => {
  const {id} = useParams()
  const [client,setClient] = useState({})
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setClient({})
    setError(null)
    setLoading(true)
    const getClient = async () => {
        try{
            const { data } = await getClienteById(id)
            setClient(data)
            setError(null)
        }catch(err){
            setClient({})
            setError(err)
        }
        setLoading(true)
    }
    getClient()
  },[])
  console.log(id) 

    return (
    <div>
        <p className='text-2xl text-gray-600 mt-4'>
            <span className='uppercase font-bold'>Nombre: </span>
            {client.nombre}
        </p>
        <p className='text-2xl text-gray-600 mt-4'> 
            <span className='uppercase font-bold' >Empresa: </span>
            {client.empresa}
        </p>
        <p className='text-2xl text-gray-600 mt-4'>
            <span className='uppercase font-bold' >Email: </span>
            {client.email}
        </p>
        <p className='text-2xl text-gray-600 mt-4'>
            <span className='uppercase font-bold' >Teléfono: </span>
            {client.telefono}
        </p>
        <p className='text-2xl text-gray-700 mt-4'> 
            <span className='uppercase font-bold' >Notas: </span>
            {client.notas}
        </p>
    </div>
  )
}

export default VerCliente