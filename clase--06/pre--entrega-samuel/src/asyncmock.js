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