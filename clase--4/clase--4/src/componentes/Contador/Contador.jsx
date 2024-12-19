//VAMOS A CREAR NUESTRO CONTADOR DE PRODUCTOS
//Creamos un estado llamado "contador", que cuando este se actualice su valor obligue al componente a renderizarse nuevamente. 

//Tenemos que usar un hook: Los hooks son funciones que se pueden usar dentro de los componentes funcionales para agregar funcionalidad adicional de React.

//Usaremos el Hook useState que me permite crear un "estado"

//1) Paso : lo voy a importar
import { useState } from "react";

const Contador = () => {
    //2) useState es una función que me retorna un array. Este array tiene 2 elementos, el primer elemento es el estado, y el segundo es una funcion que me actualiza el estado.  

    //Le puedo enviar el valor inicial al contador. 
    const [contador, setContador] = useState(1)
    //En el estado contador voy a guardar la cantidad de unidades seleccionadas por el cliente. 

    //Funciones auxiliares: 
    let stock = 10;

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>
    )
}
//Incrementar y decrementar van sin parentesis porque sino se ejecutarian al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default Contador

//Ejemplito de como seria el useState:

// function useState() {
//     let array = [primerElemento, segundoElemento];

//     return array;
// }