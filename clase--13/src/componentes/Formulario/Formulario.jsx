import { useState } from "react";
//Importamos el hook que necesitemos. 
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
//Funciones necesarias para crear un nuevo documento y subirlo a una colección. 

const Formulario = () => {
    //Creamos los estados para almacenar los datos del form. 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    //Creamos una función para manejar el formulario: 
    const manejadorFormulario = (e) => {
        e.preventDefault(); 

        addDoc(collection(db, "usuarios"), {
            nombre: nombre, 
            apellido: apellido, 
            telefono: telefono
        })

        setNombre(""); 
        setApellido(""); 
        setTelefono(""); 
    }

    return (
        <div className="formulario-container">
            <form className="formulario" onSubmit={ manejadorFormulario }>
                <h2 className="formulario-title">Formulario de Clientes</h2>

                <div className="form-group">
                    <label className="form-label">Nombre:</label>
                    <input
                        type="text"
                        className="form-input"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Apellido:</label>
                    <input
                        type="text"
                        className="form-input"
                        onChange={(e) => setApellido(e.target.value)}
                        value={apellido}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Celular:</label>
                    <input
                        type="text"
                        className="form-input"
                        onChange={(e) => setTelefono(e.target.value)}
                        value={telefono}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario