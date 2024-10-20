import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import Cabecalho from './Cabecalho';
import JanelaDaConversa from './JanelaDaConversa';

const App = () => {
  return (
    <div className="app">
      <Cabecalho />
      <JanelaDaConversa />
    </div>
  );
};

export default App;

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
