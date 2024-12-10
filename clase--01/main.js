/** CLASE 1 - REACT **/

//Es una libreria que nace en el año 2013 en las oficinas de Facebook. 

//Ventajas: 

//Puedo crear aplicaciones web mucho mas rapidas, utiliza el Virtual DOM, esta basado en componentes y tiene un enfoque declarativo. 

//DECLARATIVO: estilo de programación en donde nos enfocamos en lo que se quiere lograr y no tanto en el como. 

//IMPERATIVO: estilo de programacion en donde se detallan paso a paso las acciones a realizar para lograr el resultado especifio. 

//EJEMPLO EN CODIGO: 

//Queremos crear un array de numeros pares enter el 0 y el 10. 

//RESOLUCION CON UN ENFOQUE IMPERATIVO: 

const array = []; 

for(let i = 0; i <= 10; i++) {
    if( i % 2 == 0) {
        array.push(i); 
    }
}

console.log(array); 

//RESOLUCION CON UN ENFOQUE DECLARATIVO: 

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(numero => numero % 2 == 0); 
console.log(pares); 

//Expresión: Es una combinacion de valores, variables y operadores que pueden ser evaluados para producir un resultado. 

//Ejemplos: 

let numero = 5; 
let sumas = numero + 5; 
let booleanito = 10 < 100; 
//Expresión booleana. 
console.log(booleanito);

//Funciones: son bloques de código con una tarea especifica que puede ser reutilizado muchas veces. 

//Pueden ser funciones DECLARADAS o EXPRESADAS: 

//DECLARADA: 

function sumamos(numeroUno, numeroDos) {
    //Cuerpo de la funcion
    let resultado = numeroUno + numeroDos;
    return resultado; 
}

//Para que esto se ejecute, la tenemos que llamar o invocar: 
console.log(sumamos(35,5));
//Se puede invocar desde cualquier parte porque el Hoisting eleva la declaración. Pero solo en las funciones DECLARADAS. 

//FUNCIONES EXPRESADAS: 
//Son aquellas funciones que se asignan a una variable. 

//Función anónima: 


const sumaDos = function(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    return resultado;
}

console.log(sumaDos(100,50));

//Función Flecha: es una versión resumida de la función anonima. 

// const sumaTres = (numA, numB) => {
//     let resultado = numA + numB;
//     return resultado;
// }

const saludito = comision => console.log("Hola como estan, grupo de", comision)

saludito("React");
//Ejemplo version resumida con un solo parametro y sin retorno ni llaves. 

//REPASITO DE FOS.
//Una función de orden superior es aquella que puede recibir por parametro una funcion o retornar despues de su ejecucio una funcion. 

//Repasemos las fos nativas para trabajar con arrays y objetos. 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre; 
        this.precio = precio; 
    }
}

const fideos = new Producto("Fideos", 100); 
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Manaos", 180);
const pan = new Producto("Pan", 120); 
const gaseosa2 = new Producto("Manaos", 10000);

const arrayProductos = [fideos, harina, gaseosa, pan, gaseosa2]; 

//Find: lo vamos a usar cuando tengo que buscar un elemento. 

const buscado = arrayProductos.find(item => item.nombre === "Manaos"); 
console.log(buscado);
//Si hay dos objetos que cumplan con la condicion retorna el primero que encuentra. 
//Si no lo encuentra retorna: undefined.

//Filter: recibe una función comparadora y retorna una array con los elementos que cumplan con la condicion. 

const arrayProductosMenos200 = arrayProductos.filter(item => item.precio < 200); 

console.log(arrayProductosMenos200);

//Some: retorna un booleano (true o falsete) si encuentro o no el elemento. 

const hayFideos = arrayProductos.some(item => item.nombre === "Lentejas");

console.log("¿Hay fideos?: " + hayFideos);

//Reduce: nos permite obtener un unico valor despues de iterar sobre un array. 
//Ideal para saber el total de un carrito de compras: 
//Lo trabajamos con dos parametros: un acumulador, y el elemento a operar. 

let totalPrecio = arrayProductos.reduce((acumulador, item) => acumulador + item.precio, 1000)
//No se olviden de pasarle el valor inicial del acumulador. 

console.log("Reduce: ");
console.log(totalPrecio); 



