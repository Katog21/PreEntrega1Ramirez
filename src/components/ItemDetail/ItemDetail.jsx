import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, category, price, description, stock, img }) => {
    return (
        <article>
            <h4>Categoria: {category}</h4>
            <h3>{name}</h3>
            <img src={img} />
            <h4>${price}</h4>
            <h4>descripcion: {description}</h4>
            <ItemCount stock={stock}/>
        </article>
    )
    
}
export default ItemDetail