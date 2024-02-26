import Navbar from "./components/navbar/Navbar/"
import Button from "./components/Button/Button"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

  function App() {
    return(
        <>
        <h2>Probando la página</h2>
      <Navbar/>
      <Button/>
      <ItemListContainer greeting={"Welcome"}/>
      </>
  )
}

export default App
