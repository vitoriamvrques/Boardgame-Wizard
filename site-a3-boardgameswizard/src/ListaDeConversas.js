import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaDeConversas = () => {
    const conversas = [
        { nome: 'O MAGO', ultimaMensagem: 'Última mensagem...' },
        // Adicione mais conversas aqui
    ];

    return (
        <div className="col-12 col-md-4 col-lg-3 bg-light border-end">
            <div className="p-3">
                <h5>Conversas</h5>
                <ul className="list-unstyled">
                    {conversas.map((conversa, index) => (
                        <li key={index} className="d-flex align-items-center mb-3">
                            <img 
                                src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F014%2F751%2F386%2Foriginal%2Fcartoon-character-a-cute-old-grey-haired-mage-holding-a-stick-icon-flat-cartoon-style-free-vector.jpg&f=1&nofb=1&ipt=550c261bdd73fa052765d35a7ac2021bdc7da9de1609d39f495e191a6918585c&ipo=images?text=${conversa.nome[0]}`} 
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
