import { useContador } from "../../hooks/useContador";
import { useFetch } from "../../hooks/useFetch";

const UtilizamosHooks = () => {
    const {contador, incrementar, decrementar} = useContador(1, 10); 
    const dataJson = useFetch("https://jsonplaceholder.typicode.com/users"); //Le tengo que pasar la URL.

    //Probamos con los Simpsons: 
    const data = useFetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5");

  return (
    <div>
        <h2> Contador con nuestro Hook </h2>

        <button onClick={ decrementar }> restar </button>
        <strong> { contador } </strong>
        <button onClick={ incrementar }> sumar </button>

        <h2> Fetch de Datos con nuestro Hook </h2>

        {dataJson && dataJson.map(usuario => <p key={usuario.id}> {usuario.name} </p>)}

        <hr />

        {data && data.map(usuario => <p> {usuario.character} </p>)}

        
        
    </div>
  )
}

export default UtilizamosHooks