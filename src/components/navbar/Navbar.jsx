import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className='header'>
        <h5>Tienda Ecommercer</h5>
        <nav>
            <a>Cafeteria</a>
            <a>Pasteleria</a>
            <a>Empanadas</a>
        </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar