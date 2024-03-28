import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
            <h1>Vinyl Store</h1>
            </Link>
            <div className="Categories">
                <NavLink to={`/Home`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
                <NavLink to={`/category/Merch`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Merch</NavLink>
                <NavLink to={`/category/Vinyl`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Vinyl</NavLink>
                <NavLink to={`/category/Help`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Help</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar