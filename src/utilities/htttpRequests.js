import axios  from 'axios'
const baseUrl = import.meta.env.VITE_BASEURL_DEVELOPMENT
const getAllClientes = async (url=baseUrl) => {
    try{
        const { data } = await axios.get(url)
        return data
    }catch(err){
        return err
    }
}
const createCliente = async (body,url=baseUrl) => {
    try{
        const response = await axios.post(url,body)
        console.log(response)
        return response
    }catch(err){
        return err
    }
}
const getClienteById = async(id,url=baseUrl) => {
    try{
        const response = await axios.get(`${url}/${id}`)
        return response
    }catch(err){
        return err
    }
}
const updateCliente = async(id,body,url=baseUrl) => {
    try{
        const response = await axios.put(`${url}/${id}`,body)
        return response
    }catch(err){
        return err
    }
}
const deleteCliente = async(id,url=baseUrl) => {
    try{
        const response = await axios.delete(`${url}/${id}`)
        return response
    }catch(err){
        return err
    }
}
export {
    getAllClientes,
    createCliente,
    getClienteById,
    updateCliente,
    deleteCliente
}