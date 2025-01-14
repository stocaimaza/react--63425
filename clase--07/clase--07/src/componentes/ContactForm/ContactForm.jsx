import { useState } from "react";
import emailjs from "emailjs-com";

//Pueden instalar el servicio con el siguiente comando: npm i emailjs-com

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState(""); 

    const enviarMensaje = (e) => {
        e.preventDefault(); 

        const templateParams = {
            from_name: nombre, 
            from_email: email,
            message: mensaje
        }

        //3OViZcTtdMohFUmzPeVmA

        emailjs.send("service_70gpejm", "template_gbubrt5", templateParams, "oSh9V0HTyuPX3dyJG")
            .then( respuesta => {
                console.log("Mensaje enviado", respuesta.status)
            })
            .catch(error => {
                console.log("Error al enviar", error)
            })
        
        setNombre(""); 
        setEmail(""); 
        setMensaje(""); 
    }


  return (
    <form onSubmit={ enviarMensaje }>
        <label> Nombre: </label>
        <input type="text" onChange={(e) => setNombre(e.target.value) } value={nombre} />
        <br /><br />

        <label> Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <br /><br />

        <label> Mensaje: </label>
        <input type="text" onChange={(e) => setMensaje(e.target.value)} value={mensaje} />
        <br /><br />

        <button type='submit'> Enviar Mensaje </button>
    </form>
  )
}

export default ContactForm