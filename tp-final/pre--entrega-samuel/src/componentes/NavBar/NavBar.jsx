import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"; 
//Segunda Pre Entrega: importamos Link y NavLink de react-router-dom
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1> Tienda Marolio Online </h1>
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/2"> Yerbas </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3"> Pastas </NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar