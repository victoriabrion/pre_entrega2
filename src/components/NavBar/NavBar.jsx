import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
            <h1>Vinyl Store</h1>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/Home`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
                <NavLink to={`/category/Shop by artist`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shop by artist</NavLink>
                <NavLink to={`/category/Shop by category`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shop by category</NavLink>
                <NavLink to={`/category/Help`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Help</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar