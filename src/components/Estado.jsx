import React, { Component } from 'react';

//Un componente se repinta si se cambia el estado, luego en el estado se debe de almacenar lo que quiero cambiar dinámicamente.
//El estado en una clasese hace con this.state y es un objeto inmutable. Solo se puede modificar con un método especial llamado setState()

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador:0,
        }
    }
    render() {
        return (
            <>
                <h1>Componente estado</h1>
                <h2>{this.state.contador}</h2>
            </>
            
        );
    }
}