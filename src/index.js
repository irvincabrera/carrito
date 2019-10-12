import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import articulos from "./reducers/articulos";

// se agrega el store, para ocupar redux para el funcionamiento de agregar items o quitar.
const store = createStore(articulos);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
