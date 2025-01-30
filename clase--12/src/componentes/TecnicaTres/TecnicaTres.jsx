//3) Operador Ternario. 
//Mantenemos el mismo nodo como padre y modificamos sus children, que en este caso son los textos, lo cual optimiza ya que no hay dismounts:

const TecnicaTres = ({booleano}) => {
  return (
    <div>
        {
            booleano ? <h3>Acceso Permitido! </h3> : <h3> Acceso denegado! Vete ladron malvado de mi vida! </h3>
        }
    </div>
  )
}

export default TecnicaTres