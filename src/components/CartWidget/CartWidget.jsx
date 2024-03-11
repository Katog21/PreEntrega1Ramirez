import carrito from "./assets/carrito.svg"

const CartWidget = () => {
    return (
    <button>
        <img src={carrito} alt="carrito"/>
        0
    </button>
    )
}

export default CartWidget