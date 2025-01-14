import { useState, useEffect } from "react";
import './Nesflics.css'

const Nesflics = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState(""); 

    const MI_KEY = "c9f04fa4";

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setPeliculas(data.Search);
            })
            .catch(error => console.log(error))
    }, [busqueda])

    //Manejador del formulario: 

    const manejadorFormulario = (event) => {
        event.preventDefault(); 
        setBusqueda(event.target.busqueda.value); 
        event.target.busqueda.value = ""; 
    }

  return (
    <div>
        <h1> Nesflic </h1>

        <form onSubmit={manejadorFormulario}>
            <input type="text" name="busqueda" />
            <button> Buscar </button>
        </form>

        <ul>
            {
                peliculas === undefined ? <h2> La pelicula no esta disponible en nuestra base de datos</h2> : peliculas.map(peli => (<li key={peli.imdbID}> <img src={peli.Poster} alt={peli.Title} /> {peli.Title} </li>))
            }
        </ul>
    </div>
  )
}

export default Nesflics