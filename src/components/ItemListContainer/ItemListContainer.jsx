import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock' 
import itemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(result => {
            setProducts(result)
        })
    }, [])

    return (
        <main>
            <h2>{ greeting }</h2>
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer