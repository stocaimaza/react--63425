//1) Return Temprano: 
//Esta tecncia la usamos en JS y evitamos colocar el ELSE. 

//Funcion booleana que me dice si es fin de semana.

function esFinde(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    } else {
        return false;
    }
}

//Peeeeeeeero si ahora aplico el retorno temprano: 

function esFindeSemana(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    }
    return false;
}

const TecnicaUno = ({ nombre }) => {
    if (nombre === "Samuel") {
        return <h1> Hola Administrador </h1>
    }

    return <h2> Hola {nombre} </h2>
}

export default TecnicaUno