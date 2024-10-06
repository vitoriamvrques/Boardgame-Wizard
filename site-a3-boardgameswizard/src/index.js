import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'; // Arquivo CSS onde iremos estilizar

// Componente Header
const Header = () => {
  return (
    <div className="header">
      <img src="https://cdn-icons-png.flaticon.com/512/10437/10437838.png" alt="Ícone" className="icon" />
      <h1>Board Games Wizard</h1>
    </div>
  );
};

// Componente ChatWindow
const ChatWindow = () => {
  return (
    <div className="chat-window">
      {/* Aqui irão aparecer as mensagens do chat */}
    </div>
  );
};

// Componente MessageInput
const MessageInput = () => {
  return (
    <div className='row'>
      <div class="col-xs-6">
        <div className="message-input">
          <input type="text" placeholder="Digite sua mensagem..." />
        </div>
      </div>
      <button type="submit">Enviar</button>
    </div>
   
  );
};

// Componente App (raiz)
const App = () => {
  return (
    <div className="app">
      <Header />
      <ChatWindow />
      <MessageInput />
    </div>
  );
};

export default App;





ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)