import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaDeConversas = () => {
    const conversas = [
        { nome: 'O MAGO', ultimaMensagem: 'Última mensagem...' },
        // informações que vem do banco de dados 
    ];

    return (
            <div className="col-12 col-md-4 col-lg-3 vh-100 overflow-auto lista-de-conversas">
                <div className="p-3">
                    <h5>Ideias anteriores</h5>
                        <ul className="list-unstyled">
                             {conversas.map((conversa, index) => (
                                <li key={index} className="d-flex align-items-center mb-3 p-2 rounded">
                            <img 
                                src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1183%2F1183773.png&f=1&nofb=1&ipt=20a525f547489698a635260698a2bc875883858344bfb3998b06c076244f431e&ipo=images`} 
                                alt={conversa.nome} 
                                className="rounded-circle me-3"
                                width="50"
                                height="50"
                            />
                            <div>
                                <h6 className="mb-0">{conversa.nome}</h6>
                                <p className="text-muted mb-0">{conversa.ultimaMensagem}</p>
                            </div>
                        </li>
                          ))}
                        </ul>
                    </div>
            </div>
    );
};

export default ListaDeConversas;
