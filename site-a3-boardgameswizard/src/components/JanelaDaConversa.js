// import React,{ useState } from 'react';
// import ListaDeConversas from './ListaDeConversas';
// import CaixaDeMensagem from './CaixadeMensagem';
// import axios from 'axios'; 

// const JanelaDaConversa = () => {
//     return (
//         <div className="chat-container">
//                 <ListaDeConversas />
//             <div className="col d-flex flex-column">
//                 <div className="chat-window flex-grow-1"> 
//                 </div>
//                 <CaixaDeMensagem />
//             </div>
//         </div>
//     );
// };

// export default JanelaDaConversa;

// import React, { useState } from 'react';
// import ListaDeConversas from './ListaDeConversas';
// import CaixaDeMensagem from './CaixaDeMensagem';
// import BalaoDeMensagem from './BalaoDeMensagem';
// import axios from 'axios';


// const JanelaDaConversa = () => {
//   const [mensagens, setMensagens] = useState([]); // Estado para armazenar as mensagens

//   // Função para adicionar mensagem do usuário e enviar para a API
//   const enviarMensagem = async (texto) => {
//     const novaMensagemUsuario = { texto, autor: 'usuario' };
//     setMensagens((prevMensagens) => [...prevMensagens, novaMensagemUsuario]);

//     try {
//       // Envia a mensagem para o backend
//       const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt: texto });
//       const respostaGPT = response.data.completion;
//       const novaMensagemBot = { texto: respostaGPT, autor: 'bot' };

//       // Adiciona a resposta do bot ao estado de mensagens
//       setMensagens((prevMensagens) => [...prevMensagens, novaMensagemBot]);
//     } catch (error) {
//       console.error('Erro ao enviar mensagem:', error);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <ListaDeConversas />
//         <div className="col d-flex flex-column">
//             <div className="chat-window flex-grow-1">
//                     {mensagens.map((msg, index) => (
//                         <BalaoDeMensagem key={index} mensagem={msg.mensagem} isUsuario={msg.isUsuario} />
//                     ))}
//             </div>
//             <CaixaDeMensagem onEnviarMensagem={enviarMensagem} />
//         </div>
//     </div>
//   );
// };

// export default JanelaDaConversa;

import React, { useState } from 'react';
import ListaDeConversas from './ListaDeConversas';
import CaixaDeMensagem from './CaixaDeMensagem';
import BalaoDeMensagem from './BalaoDeMensagem';
import axios from 'axios';

const JanelaDaConversa = () => {
  const [mensagens, setMensagens] = useState([]); // Estado para armazenar as mensagens

  // Função para adicionar mensagem do usuário e enviar para a API
  const enviarMensagem = async (texto) => {
    const novaMensagemUsuario = { texto, autor: 'usuario' };
    setMensagens((prevMensagens) => [...prevMensagens, novaMensagemUsuario]);

    try {
      // Envia a mensagem para o backend
      const response = await axios.post('http://localhost:4000/pergunte-ao-chatgpt', { prompt: texto });
      const respostaGPT = response.data.completion;
      const novaMensagemBot = { texto: respostaGPT, autor: 'bot' };

      // Adiciona a resposta do bot ao estado de mensagens
      setMensagens((prevMensagens) => [...prevMensagens, novaMensagemBot]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="chat-container">
      <ListaDeConversas />
      <div className="col d-flex flex-column">
        <div className="chat-window flex-grow-1">
            <div className='d-flex flex-column p-3'>
                {mensagens.map((msg, index) => (
                    <BalaoDeMensagem
                        key={index}
                        mensagem={msg.texto} 
                        isUsuario={msg.autor === 'usuario'} 
                    />
                ))}
            </div>
        </div>
        <CaixaDeMensagem onEnviarMensagem={enviarMensagem} />
      </div>
    </div>
  );
};

export default JanelaDaConversa;
