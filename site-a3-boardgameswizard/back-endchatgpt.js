require('dotenv').config()
const { OpenAI } = require ('openai')
const express = require('express')
const app = express()
app.use(express.json())



// api envia Prompt para OPENAI 
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI(OPENAI_API_KEY)

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
    const respostaGPT = res.json({completion: completion.choices[0].message.content})
    })
    

const porta = 4000
app.listen(porta, () => {} )





