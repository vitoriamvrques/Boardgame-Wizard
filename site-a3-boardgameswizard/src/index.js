import React, { useState } from 'react';
import axios from 'axios';

const ChatGptBoardGame = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              ...messages,
              userMessage,
            ],
          },
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const botMessage = response.data.choices[0].message;
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error('Erro ao se comunicar com a API do ChatGPT', error);
      }
      setInput('');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>ChatGPT - Ideias para Jogos de Tabuleiro</h1>
      <div style={{ border: '1px solid black', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '10px 0' }}>
            <strong>{msg.role === 'user' ? 'Você' : 'ChatGPT'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua ideia para o jogo de tabuleiro"
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={handleSendMessage} style={{ padding: '10px' }}>Enviar</button>
    </div>
  );
};

export default ChatGptBoardGame;
