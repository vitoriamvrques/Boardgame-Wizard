import React from "react";


const MensagemChat = ({ mensagem, isUser, dataHora }) => {
    return (
        <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>
            <p>{mensagem}</p>
            <small>{new Date(dataHora).toLocaleString()}</small>
        </div>
    );
};

export default MensagemChat;
