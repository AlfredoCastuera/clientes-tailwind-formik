import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <p className='w-full p-2 my-4 rounded text-md font-bold text-white bg-red-700 text-center'>{children}</p>
  )
}

export default ErrorMessage