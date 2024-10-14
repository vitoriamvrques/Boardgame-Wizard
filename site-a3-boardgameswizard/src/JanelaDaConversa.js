import React from 'react';
import ListaDeConversas from './ListaDeConversas';
import CaixaDeMensagem from './CaixadeMensagem';

const JanelaDaConversa = () => {
    return (
        <div className="chat-container">
            {/* Sidebar à esquerda ocupando 3 colunas em tela grande */}
                <ListaDeConversas />
          
            {/* Janela de conversas */}
            <div className="col d-flex flex-column">
                <div className="chat-window flex-grow-1"> 
                    {/* Aqui aparecem as mensagens do chat */}
                </div>

                {/* Caixa de mensagens */}
                <CaixaDeMensagem />
            </div>
        </div>
    );
};

export default JanelaDaConversa;
