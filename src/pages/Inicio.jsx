import React, { useState, useEffect } from "react";
import { getAllClientes } from "../utilities/htttpRequests";
import Cliente from "../components/Cliente";
const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const clients = await getAllClientes();
        setClientes(clients);
        setError(null);
      } catch (err) {
        setClientes([]);
        setError(err);
      }
    })();
  },[]);
  const handleEliminarCliente = (id) => {
	  setClientes(clientes.filter(cliente=>cliente.id!==id))
  }
  return <div>
		<h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
    <p className='mt-3'>Administra tus clientes</p>
		<table className="w-full mt-5 table-auto shadow bg-white">
			<thead className="bg-blue-800 text-white">
				<tr>
					<th className="p-2">Nombre</th>
					<th className="p-2">Contacto</th>
					<th className="p-2">Empresa</th>
					<th className="p-2">Acciones</th>
				</tr>
			</thead>
			<tbody>
				{!error && !!clientes.length && 
					clientes.map(cliente=>(
						<Cliente 
							key={cliente.id} 
							cliente={cliente}
							handleEliminarCliente={handleEliminarCliente}
							/>
					))
				}

			</tbody>
		</table>
	</div>;
};

export default Inicio;
