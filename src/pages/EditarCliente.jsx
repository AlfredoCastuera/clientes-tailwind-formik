import React,{useState,useEffect} from "react";
import Formulario from "../components/Formulario";
import { getClienteById } from "../utilities/htttpRequests";
import { useParams } from "react-router-dom";
const EditarCliente = () => {
  const {id} = useParams()
  const [cliente,setCliente] = useState({})
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  console.log(id)

  useEffect(()=>{
    setLoading(true)
    const getCliente = async () =>{
      try{
        const {data} = await getClienteById(id)
        setCliente(data)
        setError(null)
      }catch(err){
        setCliente({})
        setError(err)
      }
      setLoading(false)
    }
    getCliente()
  },[])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Llena los siguientes campos para editar un cliente
      </p>
      <Formulario cliente={cliente} />
    </>
  );
};

export default EditarCliente;
