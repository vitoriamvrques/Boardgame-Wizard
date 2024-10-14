import React from 'react'

// Componente MessageInput
const CaixaDeMensagem = () => {
    return (
      <div className="row">
        <div class="col-md-9 offset-md-3">
          <div className="message-input">
            <textarea class="form-control" placeholder="Digite seu texto" id="caixademensagem"></textarea>
              <div className="button">
                  <button type="submit" class="btn btn-warning">Enviar</button>
              </div>
          </div>
        </div>
      </div>
     
    );
  };
  

  export default CaixaDeMensagem;