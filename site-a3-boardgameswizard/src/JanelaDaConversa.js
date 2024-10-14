import React from 'react';
import ListaDeConversas from './ListaDeConversas';


// Componente ChatWindow
const JanelaDaConversa = () => {
    return (
        <div className='row chat-container'>
        <ListaDeConversas />   
        <div className="chat-window col-12 col-md-6 col-lg-9">
        {/* Aqui irão aparecer as mensagens do chat */}
        </div>
        </div>
    
    );
};

export default JanelaDaConversa;