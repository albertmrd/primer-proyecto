import React, { Component } from 'react';

/*
Hay dos formas de crear un componente:

 - componente de Clase
 - componente de función

*/

//Componente de clases

class Componente extends Component {
    constructor(props) {
        super(props);
        this.nombre = props.nombre;
        this.lista = props.lista;
        this.obj = props.obj;
    }
    render() {
        return (
            <>
            <h1>Mi primer componente {this.nombre}</h1>
            <ol>
                {
                    this.lista.map((mes, index) => <li key={index}>{mes}</li>)
                }
            </ol>
                {this.obj.nombre}
                <br/>
                {this.obj.correo}
            </>
            
        );
    }
}


//Componente funcional

// function Componente () {
//     return (
    // <h1>Mi primer componente</h1>
    // );
// }

// const Componente = (props) => <h1>{props.pintado ? "Verdadero" : "Falso"}</h1>;
export default Componente;