import React, {Component} from 'react';
import NavBar from "./NavBar";
import Contenido from "./Contenido";

export class Principal extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Contenido/>
            </div>
        )
    }
}

export default Principal;