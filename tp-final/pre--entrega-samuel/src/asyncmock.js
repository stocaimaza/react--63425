const productos = [
    {id: 1, nombre: "Yerba", precio: 500, img: "./img/yerba.jpg"},
    {id: 2, nombre: "Fideos", precio: 400, img: "./img/fideos.jpg"}
]

export const getProductos = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(productos); 
        }, 2000) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productoBuscado = productos.find(item => item.id === id); 
            resolve(productoBuscado);
        }, 2000)
    }) 
}