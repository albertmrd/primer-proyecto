//import logo from "./logo.svg";
import "./App.css";
import Componente from './components/Componente'
import Estado from './components/Estado'
import TarjetaFruta from "./components/TarjetaFruta";
import ImagenesAleatorias from './components/ImagenesAleatorias';

const nombre = 'DWEC';
const id = 23;

function App() {
  return (
    <>
      <div className="App App-header">
        {/* <Componente
        nombre={nombre}
        id={id}
        pintado= {false} 
        lista = {["enero", "febrero", "marzo", "abril"]}
        obj = {
          {
          nombre: "Alberto",
          correo: "albertmrd99@gmail.com"
        }
        }
        /> */}
        {/* <Estado 
        /> */}
        {/* <TarjetaFruta
        nombreFruta = "Fresa"
        precio = {2.45}
        />
        <TarjetaFruta
        nombreFruta = "Manzana"
        precio = {2.85}
        /> */}
        <ImagenesAleatorias
        nombre = "Sofia"
        size = "small"
        img = {24}
        />
        <ImagenesAleatorias
        nombre = "Sofia"
        size = "large"
        />
      </div>
    </>
  );
}

export default App;
