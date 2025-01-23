import { useEffect } from "react"

const Escuchadores = () => {

    window.addEventListener("resize", () => {
        console.log("Cambiaste el tamaño de la pantalla!"); 
    })

    //Lo ideal seria hacer algo asi: 

    
    useEffect( () => {
        function click() {
            console.log("Click!"); 
        }

        window.addEventListener("click", click); 

        return () => {
            window.removeEventListener("click", click); 
        }
        //Recordemos: Si dejamos event listeners sin des-registrar corremos riesgos de crear leaks de memoria o registrar un evento más de una vez ( se ejecutara una vez por cada register ).
        
    }, [])

  return (
    <div>Escuchadores</div>
  )
}

export default Escuchadores