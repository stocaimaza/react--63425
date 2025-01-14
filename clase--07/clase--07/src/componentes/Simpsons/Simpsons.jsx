import { useState, useEffect } from "react";

const Simpsons = () => {
    const [personaje, setPersonaje] = useState([]); 

    useEffect(() => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=15")
            .then(respuesta => respuesta.json())
            .then(data => {
                setPersonaje(data); 
            })
            .catch(error => console.log(error))
    }, [])
  return (
      <div>
        <h2>Personajes de los Simpsons</h2>
        {
            personaje.map((personaje, index) => {
                return (
                    <div key={index}>
                        <p> {personaje.character} </p>
                        <img src={personaje.image} alt={personaje.character} />
                    </div>
                )
            })
        }

      </div>
  )
}

export default Simpsons