import { useState, useEffect } from "react"

//useEffect: 

//El efecto primario de React es renderizar componentes manipulando el DOM. 

//Peeeero, una aplicación web tiene que hacer mucho más que solo mostrarse, tiene que realizar operaciones matematicas, consumir datos de servidores, apis, base de datos, usar eventos, etc. 

//Para poder manipular todos esos efectos secundarios de los cambios de estado es que usamos el nuevo Hook useEffect. 

const Contador = () => {
    const [contador, setContador] = useState(1);

    useEffect(() => {
        //Acá voy a colocar la lógica para cambiar el titulo de la pagina: 
        document.title = `Contador: ${contador}`; 

    }, [])

    //useEffect trabaja con dos parametros, el primero es una funcion callback y el segundo es un array de dependencias. 

    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1); 
    }

  return (
    <div>
        <button onClick={restarContador}> - </button>
        <p> {contador} </p>
        <button onClick={sumarContador}> + </button>

        <br /><br />
        <button> Terminar Compra </button>
    </div>
  )
}

export default Contador