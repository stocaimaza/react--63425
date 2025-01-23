const productos = [
    {id: "1", nombre: "Yerba", stock: 10, precio: 500, img: "../img/yerba.jpg", idCat: "2"},
    {id: "2", nombre: "Fideos", stock: 100, precio: 400, img: "../img/fideos.jpg", idCat: "3"}
]

export const getProductos = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(productos); 
        }, 100) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productoBuscado = productos.find(item => item.id === id); 
            resolve(productoBuscado);
        }, 100)
    }) 
}

//Segunda Pre Entrega: 

//Tenemos que crear una nueva función que retorne toda la categoria de productos: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria); 
        }, 100)
    })
}