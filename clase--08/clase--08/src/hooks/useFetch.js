import { useState, useEffect } from "react"; 

//useFetch: desarrollamos nuestro propio hook para consumir Apis. 

export const useFetch = (url) => {
    const [data, setData] = useState(null); 

    useEffect( () => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [url])

    return data; 
}

