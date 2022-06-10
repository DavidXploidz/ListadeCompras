import React from 'react'

const Resultado = ({items, eliminarProducto, editarProducto}) => {
  return (
    <div className='my-10' >
        {items.map(item => {
            const {id, title} = item
            return (
                <article className='grid-3 text-left p-x-10 p-y-2 hover:bg-gray-200 rounded-md mini-contenedor my-10' key={id}>
                     <p className='text-xl font-medium text-black ml-2'>{title}</p>
                     <button 
                     onClick={() => editarProducto(id)} className=' bg-green-600 text-white hover:bg-green-800 duration-300'
                     >
                         Editar
                    </button>
                    <button 
                    onClick={() => eliminarProducto(id)} className=' bg-red-600 text-white hover:bg-red-800 duration-300'
                    >
                        Eliminar
                    </button>
                </article>
            )
        })}
       
        
    </div>
  )
}

export default Resultado