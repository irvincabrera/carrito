import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Contenido from "./components/Contenido";
import Carrito from "./components/Carrito";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route exact path="/carrito/" component={Contenido}/>
                    <Route path="/carrito/cart" component={Carrito}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
