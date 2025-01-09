import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <header>
        <h1> Tienda Marolio Online </h1>

        <nav>
            <ul>
                <li>Lacteos</li>
                <li>Bebidas</li>
                <li>Almacen</li>
                <li>Limpieza</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar