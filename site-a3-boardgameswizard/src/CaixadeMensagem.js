import React from 'react';

const CaixaDeMensagem = () => {
    return (
// <<<<<<< HEAD
//         <div className="message-input">
//             <input 
//                 type="text" 
//                 className="form-control" 
//                 placeholder="Digite sua mensagem..." 
//                 aria-label="Digite sua mensagem"
//             />
//             <button className="btn btn-primary" type="submit">Enviar</button>
//         </div>
// =======
          <div className="message-input">
            <textarea class="form-control" placeholder="Digite seu texto" id="caixademensagem"></textarea>
              <div className="button">
                  <button type="submit" class="btn btn-warning">Enviar</button>
              </div>
          </div>
       
    );
};

export default CaixaDeMensagem;
