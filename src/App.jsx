import Navbar from "./components/navbar/Navbar/"
import Button from "./components/Button/Button"
import Saludo from "./components/ItemListContainer/ItemListContainer"

function App() {
  return(
    <>
        <h2>Probando la página</h2>

    <Navbar/>
    <Button/>
    <Saludo Saludo= {"Welcome"}/>
    </>
  
  )
}

export default App
