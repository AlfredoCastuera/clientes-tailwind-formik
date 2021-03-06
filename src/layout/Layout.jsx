import React from 'react'
import { Outlet , Link, useLocation } from 'react-router-dom'
const Layout = () => {
    const { pathname } = useLocation()
    console.log(pathname)
  return (
    <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4 bg-blue-900 px-5 py-10 '>
            <h2 className='text-3xl font-black text-center text-white'>CMR - Clientes</h2>
            <nav className='mt-10'>
                <Link 
                className={`transition-all ease-in-out hover:scale-110 text-2xl block mt-2 ${pathname==='/clientes'? 'text-blue-400': 'text-white'} hover:text-blue-400`}
                to="/">Clientes</Link>
                <Link 
                className={`transition-all ease-in-out hover:scale-110 text-2xl block mt-2  ${pathname==='/clientes/nuevo'? 'text-blue-400': 'text-white'} hover:text-blue-400`}
                to="/nuevo">Nuevo</Link>
            </nav>
        </div>
        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'><Outlet /></div>
        
    </div>

  )
}

export default Layout