import { useState } from "react";
import "./Eventos.css";

const Eventos = () => {
    const [input, setInput] = useState(""); 

    const manejadorClick = () => {
        console.log("Click!");
    }

    const manejadorInput = (event) => {
        //Puedo trabajar con el objeto "event"
        setInput(event.target.value); 
        //La propiedad target es la referencia al objeto del DOM que dispara el evento. 
        //Value es el texto que ingresa el usuario. 
        console.log(input); 
    }

  return (
    <div>
        {/* OnClick */}
        <button onClick={ manejadorClick }> Haceme Click </button>

        {/* Eventos del movimiento del Micky Mouse */}
        <div className="caja"
            onMouseMove={ () => console.log("Pasaste el Micky Mouse por la caja")}    
            onMouseEnter={ () => console.log("Ingresaste!")}
            onMouseLeave={ () => console.log("Saliste!")}
        >
        </div>

        {/* Eventos para Input */}

        <form>
            <h2> {input} </h2>
            <label htmlFor="campo"> Ingrese Texto </label>
            <input type="text" id="campo"
                onChange={ manejadorInput }
                onKeyDown={() => console.log("Presionaste una tecla!")}
                onKeyUp={() => console.log("Soltaste una tecla! ")}
            
            />
        </form>


        {/* 
        htmlFor = es igual al for que usamos en HTML
        onChange = se dispara cuando el usuario cambia el valor del input
        onKeyDown = cuando presionamos una tecla
        onKeyUp = cuando soltamos una tecla
        
        
        */}

    </div>
  )
}

export default Eventos