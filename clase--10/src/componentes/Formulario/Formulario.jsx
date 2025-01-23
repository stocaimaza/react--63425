import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [email, setEmail] = useState("");

    //Creamos una función manejadora del formulario: 

    const manejadorFormulario = (e) => {
        e.preventDefault(); 
        //Evita la recarga de la página. 

        //Voy a crear un nuevo cliente: 
        const nuevoCliente = {
            nombre, 
            apellido, 
            email
        }

        console.log(nuevoCliente); 

        //Limpiamos los input: 
        setNombre(""); 
        setApellido(""); 
        setEmail(""); 
        
    }


  return (


    <form onSubmit={ manejadorFormulario }>
        <h2> Datos de Contacto </h2>

        <label htmlFor="nombre"> Nombre </label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} id="nombre" value={nombre}/>
        <br /><br />

        <label htmlFor="apellido"> Apellido </label>
        <input type="text" onChange={(e) => setApellido(e.target.value)} id="apellido" value={apellido} />
        <br /><br /> 

        <label htmlFor="email"> Correo Electrónico </label>
        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <br /><br />

        <button type="submit"> Enviar </button>
    </form>
  )
}

export default Formulario