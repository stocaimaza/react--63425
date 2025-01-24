//Frase del dia: 
//"¿Por qué C consigue todas las chicas y Java no tiene ninguna?",
//"Porque C no las trata como objetos.",


import { useState, useEffect } from "react"

const App = () => {
  //Estados: 
  const [frase, setFrase] = useState("");
  const [gif, setGif] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  //Creamos una función para obtener la frase. 
  const obtenerFrase = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=single");
      const datos = await respuesta.json();

      if (datos.joke) {
        setFrase(datos.joke); //Si hay frase, la guardamos. 
        obtenerGif(datos.joke); //Llamamos a nuestra función y le pasamos la frase. 
      } else {
        setFrase("No se puede obtener una frase o chiste, intente con otra profesión.");
        setCargando(false);
      }
    } catch (error) {
      console.error("Error al obtener los datos, no llega la frase: ", error);
      setFrase("Hubo un problema con la API");
      setCargando(false);
    }
  }

  //Función para obtener el GIF basado en las primeras dos palabritas de la frase. 
  const obtenerGif = async (frase) => {
    //Recortamos la frase: 
    const palabras = frase.split(" ").slice(0, 2).join(" ");
    //Aca estamos usando las dos primeras palabras para mejorar la busqueda. 
    console.log("Palabras para buscar el GIF: ", palabras);

    try {
      const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?q=${palabras}&api_key=P5NvmLHSEWrXU262cDaVtxVz5c4qTdRu`);
      const datos = await respuesta.json();

      //Nos quedamos con el primer gif: 

      if (datos.data.length > 0) {
        //Si hay mas de 1, solo mostramos el primero. 
        setGif(datos.data[0]?.images?.downsized_medium?.url || "");
      } else {
        //Si no me llega ningun gif, mostramos el mensaje. 
        setGif(null);
        setError("No se encuentra un GIF relacionado, tenes la mejor suerte del mundo");
      }
    } catch (error) {
      console.error("Error al obtener los GIFS: ", error);
      setError("Hubo un problema al obtener los GIFS, moriras!");
    }
    setCargando(false); //Cuando todo termine, ya no estamos cargando. 
  }

  useEffect(() => {
    obtenerFrase();
  }, [])

  return (
    <div>
      {
        cargando ? (
          <p> Cargando... </p>
        ) : (
          <>
            <MostrarFrase frase={frase} />
            {
              gif ? (
                <MostrarGif gif={gif} />
              ) : (
                <>
                  <p> {error || "No se encontro un gif relacionado"} </p>

                </>
              )
            }
          </>
        )
      }
    </div>
  )
}

//Componente para mostrar la frase: 
const MostrarFrase = ({ frase }) => <p> {frase} </p>;

//Componente para mostrar el GIF: 
const MostrarGif = ({ gif }) => <img src={gif} alt="GIF Seleccionado" />

export default App