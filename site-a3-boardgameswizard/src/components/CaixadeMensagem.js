
import React, { useState } from 'react';

const CaixaDeMensagem = ({ onEnviarMensagem }) => {
  const [texto, setTexto] = useState('');

  const handleEnviar = () => {
    if (texto.trim()) {
      onEnviarMensagem(texto);
      setTexto(''); // Limpa o campo de texto após o envio
    }
  };

  return (
    <div className="message-input">
      <textarea
        className="form-control border border-warning ms-10"
        placeholder="Digite seu texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>
      <div className="me-10">
        <button type="button" className="btn btn-outline-warning" onClick={handleEnviar}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default CaixaDeMensagem;
