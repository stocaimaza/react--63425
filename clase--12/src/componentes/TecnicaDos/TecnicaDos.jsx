//2) En linea con Fragment
//La usamos cuando deseamos renderizar un elemento condicional en función de una expresión booleana. 

const TecnicaDos = ({booleano}) => {
  return (
    <>
        {booleano && <h2> Usuario Autorizado </h2>}
        {!booleano && <h2> Usuario NO AUTORIZADO </h2>}
    </>
  )
}

export default TecnicaDos