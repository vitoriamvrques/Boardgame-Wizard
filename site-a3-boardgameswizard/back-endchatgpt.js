require('dotenv').config()
const { OpenAI } = require('openai')
const express = require('express')
const app = express()
app.use(express.json())

// Carregar chave de API da OpenAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // A chave da API deve ser fornecida aqui
})

// Endpoint para interagir com o ChatGPT
app.post('/pergunte-ao-chatgpt', async (req, res) => {
  const { prompt } = req.body // O prompt enviado pela requisição

  // Definir o modelo e a função do "system"
  const model = 'gpt-3.5-turbo'
  const systemMessage = "Você é um gerador de ideias para jogos de tabuleiro. Apenas sugira ideias para novos jogos de tabuleiro inovadores, e nada mais."

  try {
    // Chama API para a OpenAI para gerar a resposta
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: 'system', content: systemMessage },  // Define o papel de "system"
        { role: 'user', content: prompt },          // O prompt do usuário
      ],
      max_tokens: 150, 
    })

    const respostaGPT = completion.choices[0].message.content

    
    res.json({ completion: respostaGPT })
  } catch (error) {
    console.error('Erro ao chamar a API da OpenAI:', error)
    res.status(500).json({ error: 'Erro interno ao processar a solicitação' })
  }
})

const porta = 4000
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})

