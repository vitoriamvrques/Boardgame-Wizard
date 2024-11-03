require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env

app.get('/consultar', (req, res) => {
    const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD
     })
    connection.query('SELECT * FROM TB_A3_SAOJUDAS', (err, results, fields) => {
     res.json(results)
     })
    })
    

const porta = 5000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))