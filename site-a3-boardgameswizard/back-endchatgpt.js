// require('dotenv').config()
// const { OpenAI } = require('openai')
// const express = require('express')
// const mysql = require('mysql2');
// const app = express()
// app.use(express.json())

// const cors = require('cors');

// // Configurações de CORS 
// const corsOptions = { origin: 'http://localhost:3000', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', credentials: true, };
//  app.use(cors(corsOptions)); 
//   app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); 
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT'); 
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); 
//     next(); 
// });

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY
// const openai = new OpenAI({
//   apiKey: OPENAI_API_KEY, 
// })

// // Endpoint para interagir com o ChatGPT
// app.post('/pergunte-ao-chatgpt', async (req, res) => {
//   const { prompt } = req.body // O prompt enviado pela requisição
//   const model = 'gpt-3.5-turbo'
//   const systemMessage = "Seu nome é 'Mago Bossini' e você é um gerador de ideias para jogos de tabuleiro, apenas cumprimente o usuário e sugira ideias para novos jogos de tabuleiro inovadores,regras do jogo e nada mais."

//   try {
//     // Chama API para a OpenAI para gerar a resposta
//     const completion = await openai.chat.completions.create({
//       model: model,
//       messages: [
//         { role: 'system', content: systemMessage }, 
//         { role: 'user', content: prompt },          
//       ],
//       max_tokens: 500, 
//     })
//     const respostaGPT = completion.choices[0].message.content
//     res.json({ completion: respostaGPT })

//     const {DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD} = process.env
//     const connection = mysql.createConnection({
//       host: DB_HOST,
//       user: DB_USER,
//       database: DB_DATABASE,
//       password: DB_PASSWORD, 
//      connectTimeout: 10000 
//      });

//     const dataHora = new Date();
//     const query = 'INSERT INTO logs (Data_hora, Prompt, Resposta) VALUES (?, ?, ?)';
//     connection.query(query, [dataHora, prompt, respostaGPT], (err, result) => {
//       if (err) {
//         console.error('Erro ao inserir no banco de dados:', err);
//         res.status(500).json({ error: 'Erro ao salvar no banco de dados' });
//         return;
//       }
//       console.log('Log salvo com sucesso no banco de dados!');
//     });

//   } catch (error) {
//     console.error('Erro ao chamar a API da OpenAI:', error)
//     // res.status(500).json({ error: 'Erro interno ao processar a solicitação' })
//     if (!res.headersSent) { 
//       res.status(500).json({ error: 'Erro interno ao processar a solicitação' }); 
//       }
//   }
// })

// const porta = 3001
// app.listen(porta, () => {
//   console.log(`Servidor rodando na porta ${porta}`)
// })


require('dotenv').config();
const { OpenAI } = require('openai');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

// Configurações de CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions));

// Carregar chave de API da OpenAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Configuração do MySQL com Pool (melhor desempenho e segurança)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Endpoint para interagir com o ChatGPT
app.post('/pergunte-ao-chatgpt', async (req, res) => {
  const { prompt } = req.body;
  const model = 'gpt-3.5-turbo';
  const systemMessage = "Seu nome é 'Mago Bossini' e você é um gerador de ideias para jogos de tabuleiro, apenas cumprimente o usuário e sugira ideias para novos jogos de tabuleiro inovadores, regras do jogo e nada mais.";

  try {
    // Chama API da OpenAI para gerar a resposta
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: prompt },
      ],
      max_tokens: 500,
    });

    const respostaGPT = completion.choices[0].message.content;
    res.json({ completion: respostaGPT });
  } catch (error) {
    console.error('Erro ao chamar a API da OpenAI:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Erro interno ao processar a solicitação' });
    }
  }
});

// Endpoint para salvar logs no banco de dados
app.post('/logs', async (req, res) => {
  console.log('Dados recebidos:', req.body); // Verificar o que está chegando
  const dataHora = new Date();
  const { prompt, respostaGPT } = req.body;
  
  console.log('DataHora:', dataHora);
  console.log('Prompt:', prompt);
  console.log('RespostaGPT:', respostaGPT);

  const sql = "INSERT INTO logs (Data_hora, Prompt, Resposta) VALUES (?, ?, ?)";

  try {
    // Usa o pool para criar uma conexão e executar a query
    const [results] = await pool.query(sql, [dataHora, prompt, respostaGPT]);
    console.log('Log salvo com sucesso:', results);
    res.status(200).send('Log salvo com sucesso');
  } catch (err) {
    console.error('Erro ao salvar log no banco de dados:', err);
    res.status(500).json({ error: 'Erro ao salvar log no banco de dados' });
  }
});

// Iniciar o servidor
const porta = 3001;
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
