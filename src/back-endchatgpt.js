require('dotenv').config()
const { OpenAI } = require ('openai')
//importamos o express
const express = require('express')
//construímos o objeto que viabiliza a especificação de endpoints
const app = express()
//aplicamos o middleware de transformação JSON
app.use(express.json())
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI(OPENAI_API_KEY)
//especificamos o endpoint de interesse
//POST /pergunte-ao-chatgpt



// api envia Prompt para OPENAI 

app.post('/pergunte-ao-chatgpt', async (req, res) => {
    const { prompt } = req.body
    //escolha dos parâmetros
    const model = 'gpt-3.5-turbo'
    const role = 'system'
    const max_tokens = 50
    //comunicação com o ChatGPT
    const completion = await openai.chat.completions.create({
    messages: [{ role: role, content: prompt}],
    model: model,
    max_tokens: max_tokens
    });
    res.json({completion: completion.choices[0].message.content})
    })
    



// conecta com o Banco de Dados para guardar histórico 

const express = require ('express')
const app = express()
app.use(express.json())
const porta = 3000
app.listen(porta, () => {} )



// api envia a completion para o banco de dados MYSQL 

app.post()