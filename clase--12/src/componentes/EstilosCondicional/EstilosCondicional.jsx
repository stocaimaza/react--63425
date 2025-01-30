import "./EstilosCondicional.css"; 

const EstilosCondicional = ({booleano, clase}) => {
  return (
    <div>
        <h2 style={{color:booleano ? "green" : "red"}}> Estilos Condicional </h2>

        <h2 className= {booleano ? "amarillo" : "azul"} > Trabajando con Clases </h2>

        <h2 className= {booleano && "azul" }> Ejemplo usando el operador && </h2>

        <h2 className= {clase} > Recibo una clase por props </h2>

    </div>
  )
}

export default EstilosCondicional