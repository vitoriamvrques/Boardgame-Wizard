// import React from 'react';

// const BalaoDeMensagem = ({ mensagem, isUsuario }) => {
//     return (
//         <div className={`balao-de-mensagem ${isUsuario ? 'usuario' : 'bot'}`}>
//             <p>{mensagem}</p>
//         </div>
//     );
// };

// export default BalaoDeMensagem;


import React from 'react';
import '../styles/App.css';

const BalaoDeMensagem = ({ mensagem, isUsuario }) => {
    return (
        <div className={`balao-de-mensagem ${isUsuario ? 'usuario' : 'bot'}`}>
            <p>{mensagem}</p>
        </div>
    );
};

export default BalaoDeMensagem;

