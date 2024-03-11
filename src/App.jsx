import Navbar from "./components/navbar/Navbar/"
import Button from "./components/Button/Button"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"



  function App() {
    return(
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemDetailContainer />
    </>
  )
}

export default App
