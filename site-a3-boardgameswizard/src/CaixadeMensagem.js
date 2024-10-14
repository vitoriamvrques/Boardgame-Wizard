import React from 'react';

const CaixaDeMensagem = () => {
    return (
        <div className="message-input">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Digite sua mensagem..." 
                aria-label="Digite sua mensagem"
            />
            <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
    );
};

export default CaixaDeMensagem;
