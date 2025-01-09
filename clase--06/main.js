/** BIENVENIDOS A LA CLASE 6 **/

//Repasamos: 

//1) Enfoque sincronico vs asincronico. 
//2) Callback 
//3) Promesas
//4) Async Await

/////////////////////////////////////////////////////////////

//1)  Sincronismo vs Asincronismo

//Programacion sincronica: es un enfoque o estilo de programación en el que las tareas se ejecutan secuencialmente en el orden en que se escriben. 

console.log("primero");
console.log("segundo");
console.log("tercero");

//Cada tarea es ejecutada en orden, y bloquea la ejecucion de la siguiente tarea hasta que se complete. 

//Ejemplo con funciones: 

function a() {
    console.log("1"); 
    b(); 
}

function b() {
    console.log("2"); 
    c(); 
}

function c() {
    console.log("3");
}

a(); 

//Programacion Asincronica: es un enfoque o estilo de programación en donde las tareas se van a ejecutar en segundo plano y no bloquean la ejecucion de la siguiente tarea. 

//Ejemplos: 

//Para poder simular una petición a una API, vamos a usar u método de JS llamado setTimeout. 

setTimeout(() => {
    console.log("Primer tarea");
}, 2000)

console.log("¿Esto se bloquea?");

//2) ¿Que es un función CALLBACK?
//Una función callback, es aquella funcion que pasamos como argumento a otra función. 

//Ejemplito de una función callback:

function suma(numA, numB, callback) {
    let resultado = numA + numB;
    callback(resultado); 
}

function mostrarResultado(dato) {
    console.log("El resultado de la operacion es " + dato); 
}

suma(10, 5, mostrarResultado);

//Ejemplito con un método map: 

let numeritos = [1, 2, 3, 4, 5]; 

//Consigna: aplicar método map para duplicar los numeritos

const numerosDuplicados = numeritos.map(numero => numero * 2);

console.log(numerosDuplicados); 

//¿Como podemos usar el método map sin usar el método map? 

function mapear(array, callback) {
    let arrayNuevo = []; 

    for ( let i = 0; i < array.length; i++ ) {
        arrayNuevo.push(callback(array[i])); 
    }

    return arrayNuevo;
}

function duplicar(numerito) {
    return numerito * 2; 
}

console.log("Nueva función map: " + mapear(numeritos, duplicar)); 

//Ejercicios de practica. 

 //Hacer una funcion que encuentre un elemento determinado en un array. (find)
 //Hacer una función que retorne un nuevo array filtrando datos (filter)

//PROMESAS: 
//Son objetos que representan un hecho eventual a futuro. Las vamos a utilizar en operaciones asincronicas que pueden resultar exitosas o fallidas. 

//Las promesas tienen tres estados: 

//Pendiente: (pending) Estado inicial de la promesa. La operacion no se completo ni se rechazo. 
//Exitosa: (fullfilled) La operacion se completo correctamente y se resuelve la promesa. 
//Fallida: (rejected) La operacion fallo y se rechazo la promesa. Esto puede suceder si se produjo un error durante la operacion. 

//Creacion de una promesa: debemos instanciar la clase Promise y pasarle como argumento una función callback, esta función tiene dos parametros: resolve y reject. 

const promesa = new Promise((resolve, reject) => {
    //Acá va el código que queremos ejecutar. 

    //Resolve y Reject so funciones que nos provee la promesa para indicarle el estado de la misma. 

    //Si quiero que la promesa sea exitosa: 
    //resolve("Exito en la promesa, me llega la camiseta de Messi!"); 

    //Si quiero que la promesa sea fallida: 
    reject("Me llego un par de medias, todo es bronca y dolor"); 
})

console.log(promesa);

//MÉTODOS THEN Y CATCH: 
//Estos métodos nos permiten manejar el resultado de la promesa. 
//Se usan concatenados a la promesa. 

//THEN: se ejecuta cuando la promesa se resuelve exitosamente. 
//CATCH: se ejecuta cuando la promesa se rechaza. 
//FINALLY: es opcional, se agrego en ES8 y se ejecuta siempre. 

promesa
    .then(() => console.log("Efectivamente, la promesa se cumple"))
    .catch(() => console.log("Error terrible, fallo la promesa, siempre me mienten"))
    .finally(() => console.log("Este se ejecuta siempre, se cumpla o no"))

//4) ASYNC AWAIT 

//Async await son dos palabritas reservadas que nos permiten trabajar con promesas de una manera mas sencilla. 

//Con la palabrita await genero una pausa en la ejecucion del codigo hasta que la promesa se resuelva o se rechace. 

