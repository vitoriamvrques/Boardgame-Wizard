import React from 'react'
import Cabecalho from './Cabecalho';
import JanelaDaConversa from './JanelaDaConversa';
import 'bootstrap/dist/css/bootstrap.min.css';

//app
const App = () => {
    return (
      <div className="app">
        <Cabecalho />
        <JanelaDaConversa />
      </div>
    );
  };
  
export default App
