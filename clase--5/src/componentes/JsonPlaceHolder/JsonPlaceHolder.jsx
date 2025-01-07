import { useState, useEffect } from "react"

//https://jsonplaceholder.typicode.com/users 

const JsonPlaceHolder = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(data => {
                setUsuarios(data); 
                console.log(data); 
            })        
            .catch(error => console.log(error))
    }, [])

    //Recuerden: si el array de dependencias esta vacio, la funcion callback se ejecuta solo cuando se monta el componente. 
  return (
    <div>JsonPlaceHolder</div>
  )
}

export default JsonPlaceHolder