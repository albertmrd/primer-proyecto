import React, { useState } from "react";

/*export default class TarjetaFruta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 0,
        };
        //bindeo o binding sobre los métodos que el this pierde el contexto de clase.
        this.agregar = this.agregar.bind(this);
        this.quitar = this.quitar.bind(this);
    }
    agregar(){
        this.setState({cantidad: this.state.cantidad + 1})
    };
    quitar(){
        if(this.state.cantidad > 0){
            this.setState({cantidad: this.state.cantidad - 1})
        }
    };
    limpiar = () => this.setState({cantidad: 0});
    render() {
        return (
            <div>
                <h3>{this.props.nombreFruta}</h3>
                <div>🛒 Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}>✅</button>
                <button onClick={this.quitar}>❌</button>
                <button onClick={this.limpiar}>🗑</button>
                <p>💲Precio: {this.props.precio} </p>
            </div>
        );
    }
}*/

//Versión moderna
//Property Initalizers != HOOK
//gracias a importar con create-react-app BABEL y lo configura con unas características aceptadas por la comunidad, pero no son un estándar de programación.

/*class TarjetaFruta extends Component {
  //no hay constructor
  state = {
    cantidad: 0,
  };
  agregar = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  quitar = () => {
    if (this.state.cantidad > 0) {
      this.setState({ cantidad: this.state.cantidad - 1 });
    }
  }
  limpiar = () => this.setState({ cantidad: 0 });
  render() {
    return (
      <div>
        <h3>{this.props.nombreFruta}</h3>
        <div>🛒 Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}>✅</button>
        <button onClick={this.quitar}>❌</button>
        <button onClick={this.limpiar}>🗑</button>
        <p>💲Precio: {this.props.precio} </p>
      </div>
    );
  }
}*/

//USO DE HOOKS (componente FUNCIONAL)

const TarjetaFruta = ({nombreFruta, precio = 3.5}) => {
    //como asignamos estado en un componente FUNCIONAL

    const [cantidad, setCantidad] = useState(0);

    function agregar(){
        setCantidad(cantidad + 1);
    }

    function quitar(){
        return cantidad > 0 ? setCantidad(cantidad - 1) : cantidad;
    }

    const limpiar = () => {setCantidad(0);}
    
    return (
        <div>
          <h3>{nombreFruta}</h3>
          <div>🛒 Cantidad: {cantidad}</div>
          <button onClick={agregar}>✅</button>
          <button onClick={quitar}>❌</button>
          <button onClick={limpiar}>🗑</button>
          <p>💲Precio: {precio} </p>
        </div>
      );
}

export default TarjetaFruta;
