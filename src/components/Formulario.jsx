import React from 'react'
import { Formik,Form,Field } from 'formik'
import * as Yup from 'yup'
import ErrorMessage from './ErrorMessage'
import { createCliente,updateCliente } from '../utilities/htttpRequests'
import { useNavigate } from 'react-router-dom'
const Formulario = ({cliente}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-white mt-10 px-6 py-10  rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className="text-gray-600 mb-5 font-bold text-xl uppercase text-center">{!cliente ? "Agregar Cliente" : "Actualizar Cliente" }</h1>
      <Formik
        initialValues={{
          nombre:cliente?.nombre ?? "",
          empresa:cliente?.empresa ?? "",
          email:cliente?.email ?? "",
          telefono:cliente?.telefono ?? "",
          notas:cliente?.notas ?? ""

        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          nombre:Yup.string().required("El nomre del cliente es requerido"),
          empresa:Yup.string().required("El nomre de la empresa es requerido"),
          email:Yup.string().required("El email es requerido").email("el email no es válido"),
          telefono:Yup.number()
            .typeError("El número no es válido")
            .integer("El número no es válido")
            .positive("El número no es válido")
            ,
          notas:""
        })}
        onSubmit={async (values,{resetForm})=>{
          if(!cliente){ 
            const response = await createCliente(values)
          }
          else{
            const response = await updateCliente(cliente.id,values)
          }
          //console.log(response)
          resetForm()
          navigate("/clientes")
        }}
      >
        {({errors,touched})=> (
          <Form>
          <div className='mb-4'>
            <label 
              className='text-gray-800'
              htmlFor="nombre">Nombre</label>
            <Field 
              type="text" 
              id="nombre" 
              className="mt-2 block w-full p-3 bg-gray-50" 
              placeholder="Nombre del cliente"
              name="nombre"
              />
            {errors.nombre && touched.nombre && <ErrorMessage >{errors.nombre}</ErrorMessage>}
          </div>
          <div className='mb-4'>
            <label 
              className='text-gray-800'
              htmlFor="empresa">Empresa</label>
            <Field 
              type="text" 
              id="empresa" 
              className="mt-2 block w-full p-3 bg-gray-50" 
              placeholder="Empresa del cliente"
              name="empresa"
              />
            {errors.empresa && touched.empresa && <ErrorMessage >{errors.empresa}</ErrorMessage>}
          </div>
          <div className='mb-4'>
            <label 
              className='text-gray-800'
              htmlFor="email">Email</label>
            <Field 
              type="email" 
              id="email" 
              className="mt-2 block w-full p-3 bg-gray-50" 
              placeholder="Email del cliente"
              name="email"
              />
            {errors.email && touched.email && <ErrorMessage >{errors.email}</ErrorMessage>}
          </div>
          <div className='mb-4'>
            <label 
              className='text-gray-800'
              htmlFor="telefono">Teléfono</label>
            <Field 
              type="phone" 
              id="telefono" 
              className="mt-2 block w-full p-3 bg-gray-50" 
              placeholder="Teléfono del cliente"
              name="telefono"
              />
            {errors.telefono && touched.telefono && <ErrorMessage >{errors.telefono}</ErrorMessage>}
          </div>
          <div className='mb-4'>
            <label 
              className='text-gray-800'
              htmlFor="notas">Notas del cliente</label>
            <Field as="textarea"
              id="notas" 
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50" 
              placeholder="Notas del cliente"
              name="notas"
              />
          </div>
          <input 
            type="submit"
            value={!cliente ? "Agregar Cliente" : "Actualizar Cliente"}
            className='transition-all ease-in-out duration-300  mt-5 w-full bg-blue-800 hover:bg-blue-900 hover:scale-110 cursor-pointer p-3 text-white uppercase font-bold text-lg rounded'
            />

        </Form>
        )}
        
      </Formik>
    </div>
  )
}

export default Formulario