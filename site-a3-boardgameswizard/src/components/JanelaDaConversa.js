
// import React, { useState } from 'react';
// import ListaDeConversas from './ListaDeConversas';
// import CaixaDeMensagem from './CaixaDeMensagem';
// import BalaoDeMensagem from './BalaoDeMensagem';

// const JanelaDaConversa = () => {
//   const [mensagens, setMensagens] = useState([]); // Estado para armazenar as mensagens

//   // Função para adicionar mensagem do usuário e enviar para a API
//   const enviarMensagem = async (texto) => {
//     const novaMensagemUsuario = { texto, autor: 'usuario' };
//     setMensagens((prevMensagens) => [...prevMensagens, novaMensagemUsuario]);

//     try {
//       // Usar fetch para enviar a mensagem para o backend
//       const response = await fetch('http://localhost:3001/pergunte-ao-chatgpt', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ prompt: texto })
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const respostaGPT = data.completion;
//         const novaMensagemBot = { texto: respostaGPT, autor: 'bot' };

//         // Adicionar a resposta do bot ao estado de mensagens
//         setMensagens((prevMensagens) => [...prevMensagens, novaMensagemBot]);
//       } else {
//         console.error('Erro ao enviar mensagem:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Erro ao enviar mensagem:', error);
//     }
//   };



//   return (
//     <div className="chat-container">
//       <ListaDeConversas />
//       <div className="col d-flex flex-column">
//         <div className="chat-window flex-grow-1">
//           <div className='d-flex flex-column p-3'>
//             {mensagens.map((msg, index) => (
//               <BalaoDeMensagem
//                 key={index}
//                 mensagem={msg.texto}
//                 isUsuario={msg.autor === 'usuario'}
//               />
//             ))}
//           </div>
//         </div>
//         <CaixaDeMensagem onEnviarMensagem={enviarMensagem} />
//       </div>
//     </div>
//   );
// };

// export default JanelaDaConversa;

import React, { useState, useEffect } from 'react';
import ListaDeConversas from './ListaDeConversas';
import CaixaDeMensagem from './CaixaDeMensagem';
import BalaoDeMensagem from './BalaoDeMensagem';

const JanelaDaConversa = () => {
  const [mensagens, setMensagens] = useState([]); // Estado para armazenar as mensagens
  const [novaResposta, setNovaResposta] = useState(null); // Estado para monitorar a última interação

  // Função para adicionar mensagem do usuário e enviar para a API
  const enviarMensagem = async (texto) => {
    const novaMensagemUsuario = { texto, autor: 'usuario' };
    setMensagens((prevMensagens) => [...prevMensagens, novaMensagemUsuario]);

    try {
      // Usar fetch para enviar a mensagem para o backend (ChatGPT)
      const response = await fetch('http://localhost:3001/pergunte-ao-chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: texto }),
      });

      if (response.ok) {
        const data = await response.json();
        const respostaGPT = data.completion;
        const novaMensagemBot = { texto: respostaGPT, autor: 'bot' };

        // Adicionar a resposta do bot ao estado de mensagens
        setMensagens((prevMensagens) => [...prevMensagens, novaMensagemBot]);

        // Atualizar o estado para enviar ao banco de dados
        setNovaResposta({ prompt: texto, respostaGPT });
      } else {
        console.error('Erro ao enviar mensagem:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  // Hook para enviar logs ao backend quando novaResposta for atualizada
  useEffect(() => {
    if (novaResposta) {
      const enviarLog = async () => {
        try {
          const response = await fetch('http://localhost:3001/logs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(novaResposta),
          });

          if (response.ok) {
            console.log('Log salvo com sucesso no banco de dados');
          } else {
            console.error('Erro ao salvar log no banco:', response.statusText);
          }
        } catch (error) {
          console.error('Erro ao salvar log no banco:', error);
        }
      };

      enviarLog();
    }
  }, [novaResposta]); // Dispara apenas quando novaResposta é alterada

  return (
    <div className="chat-container">
      <ListaDeConversas />
      <div className="col d-flex flex-column">
        <div className="chat-window flex-grow-1">
          <div className="d-flex flex-column p-3">
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
