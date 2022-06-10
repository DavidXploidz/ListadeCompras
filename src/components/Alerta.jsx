import React, { useEffect } from 'react'

const Alerta = ({type, msg, eliminarAlerta, lista}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            eliminarAlerta()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [lista] )

  return (
    <p className={`${type} `}>
        {msg}
    </p>
  )
}

export default Alerta