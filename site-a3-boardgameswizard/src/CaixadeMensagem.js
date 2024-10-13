import React from 'react'

// Componente MessageInput
const CaixaDeMensagem = () => {
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
  

  export default CaixaDeMensagem;