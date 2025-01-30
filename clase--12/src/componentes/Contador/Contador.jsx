import { useState } from "react";

const Contador = ({render}) => {
    const [contador, setContador] = useState(0); 

    //Funcion para incrementar el contador: 

    const incrementar = () => {
        setContador(contador + 1); 
    }

  return (
    <div>
        {/* Llamamos a la funcion render que recibimos por props */}

        { render(contador, incrementar) }
    </div>
  )
}

export default Contador