//import logo from "./logo.svg";
import "./App.css";
import Componente from './components/Componente'
import Estado from './components/Estado'

const nombre = 'DWEC';
const id = 23;

function App() {
  return (
    <>
      <div className="App App-header">
        <Componente
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
        />
        <Estado 
        />
      </div>
    </>
  );
}

export default App;
