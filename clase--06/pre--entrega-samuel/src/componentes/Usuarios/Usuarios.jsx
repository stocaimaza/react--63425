import { useState, useEffect } from "react"

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]); 

    useEffect(() => {
        //EJEMPLO CON FETCH: 

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(respuesta => respuesta.json())
        //     .then(data => setUsuarios(data))
        //     .catch(error => console.log(error))

        //EJEMPLO CON ASYNC AWAIT: 

        const pedirUsuarios = async () => {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await respuesta.json(); 
            setUsuarios(data); 
        }

        pedirUsuarios(); 

    }, [])
  return (
    <div>
        <h2> Usuarios generados por JSONPlaceHolder</h2>

        <ul>
            {
                usuarios.map(usuario => (
                    <li key={usuario.id}> {usuario.name} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Usuarios