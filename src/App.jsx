import {useState} from 'react'
import Resultado from './components/Resultado';
import Alerta from './components/Alerta';

function App() {

const [producto, setProducto] = useState('')
const [lista, setLista] = useState([])
const [isEditando, setIsEditando] = useState(false)
const [editarID, setEditarID] = useState(null)
const [alerta, setAlerta] = useState({show:false, msg:'', type:''})



const handleSubmit = (e) => {
  e.preventDefault();
  if(!producto ){
    //Desplegar Alerta
    mostrarAlerta(true, 'error', 'Ingresa algo primero')
  }else if(producto && isEditando){
    //Hacer el Editando
    setLista(lista.map((item)=> {
      if(item.id === editarID){
        return {...item, title:producto}
      }
        return item
    }))
    setProducto('')
    setEditarID(null)
    setIsEditando(false)
  }
  else{
    //Mostrar alerta
    mostrarAlerta(true,'exito','Agregado Correctamente')
    const nuevoProducto = {
      id: new Date().getTime().toString(),
      title: producto};
    setLista([...lista, nuevoProducto])
    setProducto('')
  }
 
}
const mostrarAlerta = (show=false, type="", msg="") => {
  setAlerta({show: show, type, msg})
}
const limpiarLista = () => {
  mostrarAlerta(true, 'error', 'Lista Vacia')
  setLista([])
}
const eliminarProducto = (id) => {
  mostrarAlerta(true, 'error', 'Producto Eliminado')
  setLista(lista.filter((item) => item.id !== id))
}
const editarProducto = (id) => {
  const productoEspecifico = lista.find((item) => item.id === id )
  setIsEditando(true)
  setEditarID(id)
  setProducto(productoEspecifico.title)
}

  return (
    <main className="contenedor shadow-md bg-white p-5">
        <h1 className="text-center text-4xl font-bold m-10 text-blue-900">Lista de Compras</h1>
        {alerta.show && <Alerta {...alerta} eliminarAlerta = {mostrarAlerta} lista={lista} />}
        <form onSubmit={handleSubmit} className="flex justify-center text-center mt-10 mb-10 mini-contenedor ">
        
          <input onChange={e => setProducto(e.target.value)} value={producto} type="text" placeholder="Ejemplo: Leche" className="bg-gray-100 p-2 text-gray-900 rounded-l-lg shadow-md " />
          <button type="submit" className="bg-blue-300 p-2 tracking-wider duration-300 hover:bg-blue-500 hover:text-white  rounded-r-lg shadow-md ">
            {isEditando ? 'Editar' : 'Agregar'}
          </button>
        </form>
        {lista.length > 0 && 
          <div className='mt-10 mb-10'>
              <Resultado items={lista} eliminarProducto={eliminarProducto} editarProducto={editarProducto}/>
          </div> 
         }
         <div className='flex'>
           <button onClick={limpiarLista} className='text-orange-500 text-center mx-auto hover:text-orange-700'>Limpiar Lista</button>
         </div>
        
        
    </main>
  )
}

export default App
