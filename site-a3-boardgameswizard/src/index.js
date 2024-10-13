import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; // Arquivo CSS onde iremos estilizar
import CaixaDeMensagem from './CaixadeMensagem.js'; 
import Cabecalho from'./Cabecalho.js';
import  JanelaDaConversa from './JanelaDaConversa.js';



// Componente App (raiz)
const App = () => {
  return (
    <div className="app">
      <Cabecalho />
      <JanelaDaConversa />
      <CaixaDeMensagem />
    </div>
  );
};

export default App;


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)