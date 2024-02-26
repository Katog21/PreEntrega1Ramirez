import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <header className='header'>
        <h5>KATOS GROSERIES</h5>

        <nav className='link'>
        <Button text="Title" textColor = "white" className=' m-2 btn btn-primary'/>
        <Button text="Title" textColor = "yellow" className=' m-2 btn btn-primary'/>
        <Button text="Title"textColor = "white" className=' m-2 btn btn-primary'/>
        </nav>
        
        <CartWidget/>
        </header>
    )
}

export default Navbar