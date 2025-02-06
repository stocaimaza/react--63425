import { useState, useEffect } from "react"; 
import { db } from "../../services/config";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const LibroLista = ({libroAEditar}) => {
    const [libros, setLibros] = useState([]); 

    useEffect( () => {
        const librosAct = onSnapshot(collection(db, "libros"), (snapshot) => {
            setLibros(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
        })

        return () => librosAct(); 
    }, [])

    const eliminarLibro = async (id) => {
        try {
         await deleteDoc(doc(db, "libros", id))   ; 
        } catch (error) {
            console.log("Error eliminando libro", error); 
        }
    }

  return (
    <ul className="listado-libros">
        {
            libros.map(libro => (
                <li key={libro.id}>
                    <strong> {libro.titulo} - {libro.autor} </strong>
                    <button onClick={() => libroAEditar(libro)}> Editar </button>
                    <button onClick={() => eliminarLibro(libro.id)}> Eliminar </button>
                </li>
            ))
        }
    </ul>
  )
}

export default LibroLista