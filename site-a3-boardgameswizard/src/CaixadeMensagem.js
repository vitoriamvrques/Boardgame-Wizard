import React from 'react';

const CaixaDeMensagem = () => {
    return (
        
          <div className="message-input">
            <textarea class="form-control border border-warning ms-10 " placeholder="Digite seu texto" ></textarea>
                <div className='me-10'>
                    <button type="submit" class="btn btn-outline-warning">Enviar</button>
                </div>   
          </div>
    );
};

export default CaixaDeMensagem;
