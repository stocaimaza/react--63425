/** SUGAR SYNTAX **/

//La utilización de operadores avanzados con la idea de simplificar el código. 

//1) Plantillas literales: las que usamos con las backsticks `` alt + 96

//Las usamos para simplificar la cocatenación de datos. 

let nombre = "Pepe Argento";
let trabajo = "Zapateria"; 

let mensaje = `${nombre} trabaja en una ${trabajo}, y tiene esta edad ${59 + 1}`; 

console.log(mensaje); 

//2) Operador Ternario: es una simplificación de la estructura if/else. 

//Sintaxis: condicion ? codigoSiEsVerdad : codigoSiEsFalso
//Las 3 partes deben estar presentes

let llueve = false; 

console.log(llueve ? "Dormir la siesta" : "me voy a caminar a la plaza"); 

let respuesta = llueve ? "Tortas fritas y netflix" : "pileta del vecino"; 
console.log(respuesta);

//3) Operador de Propogación ( Spread ... )
//Se utiliza con elementos iterables (arrays, objetos) enviando cada uno de sus elementos como parametros individuales a otro contexto. 

//Ejemplo con un array: 

const nombres = ["Juan", "Pedro", "Maria", "Sebastian", "Victoria"]; 

console.log(...nombres);

//Lo que hace internamente el operador spread es esto: 

console.log(nombres[0], nombres[1], nombres[2], nombres[3], nombres[4]);


//Copiar objetos: 

const alumno = {
    nombre: "Coki",
    apellido: "Argento",
    edad: 16
}

const alumnoDos = alumno; 

//¿Que pasa si hago esto? Funciona?

alumno.edad = 50;



//No hagamos esto en JS! Si queremos copiar datos de un objeto mejor usemos el operador SPREAD:

const alumnoTres = {...alumno}; 
alumnoTres.nombre = "Paola"; 

console.log(alumno);
console.log(alumnoDos);
console.log(alumnoTres);

//Copiar Arrays: 

const a = [1,2,3];
const b = [4,5,6];

const nuevoArray = [...a, ...b]; 
console.log(nuevoArray);

//4) Desestructuración: 
//Es una expresión de JS que me permite desempaquetar valores de arays u objetos en distintas variables. 

//Objeto de ejemplo: 

const bart = {
    nombre: "Bart", 
    apellido: "Simpson", 
    edad: 10
}

// let nombreBart = bart.nombre; 
// console.log(nombreBart);

// let apellidoBart = bart.apellido; 
// console.log(apellidoBart);

// let edadBart = bart.edad;
// console.log(edadBart);

//Todo esto, lo puedo simplificar gracias a la desestructuración: 

let {apellido, edad, nombre: nombreBart} = bart;

console.log(nombreBart);
console.log(apellido);
console.log(edad);

//5) Desestructuración de Arrays: 

let frutas = ["Manzana", "Pera", "Naranja", "Vino"]; 

let [,,indiceDos, indiceTres] = frutas; 

console.log(indiceDos);
console.log(indiceTres); 

//6) Acceso Condicional a Objetos

const empleado = null; 

console.log(empleado?.nombre); 

//alert("Ayuudame locooo!");

//7) Operadores: && || 

//Operador &&
//Si se cumple la condicion, se ejecuta el codigo despues del operador.

let hambre = false; 

hambre && console.log("Nos vamos de break a comer"); 

//Un caso muy comun en react donde van a usar esto: 

let error = false; 

error && alert("tenemos un error");

//Operador || 
//Caso contrario, si es falso, se ejecuta el codigo despues del operador. 

let sueño = false; 

sueño || console.log("Puedo seguir estudiando");

