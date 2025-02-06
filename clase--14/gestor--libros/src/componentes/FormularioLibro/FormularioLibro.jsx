import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const FormularioLibro = ({libroAEditar, libroActualizado}) => {
    //Creamos los estados
    const [titulo, setTitulo] = useState(""); 
    const [autor, setAutor] = useState(""); 

    useEffect( () => {
        if(libroAEditar) {
            setTitulo(libroAEditar.titulo);
            setAutor(libroAEditar.autor);
        } else {
            setTitulo("");
            setAutor(""); 
        }
    }, [libroAEditar])

    const manejadorFormulario = async (e) => {
        e.preventDefault(); 

        if(!titulo || !autor) return; 

        if(libroAEditar) {
            const libroRef = doc(db, "libros", libroAEditar.id); 
            await updateDoc(libroRef, {titulo, autor}); 
            libroActualizado();
        } else {
            await addDoc(collection(db, "libros"), {titulo, autor}); 
        }

        setTitulo(""); 
        setAutor(""); 
    }


  return (
    <form onSubmit={ manejadorFormulario } className="libro-form">
        <input 
            type="text" 
            value={ titulo }
            placeholder="Título"
            onChange={(e) => setTitulo(e.target.value)}
        />
        <input 
            type="text" 
            value={ autor }
            placeholder="Autor"
            onChange={(e) => setAutor(e.target.value)}
        />
        <button type="submit"> 
            {libroAEditar ? "Actualizar libro" : "Agregar Libro"} 
        </button>
    </form>
  )
}

export default FormularioLibro