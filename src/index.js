require('dotenv').config()

const app = require('./app')

const SERVER_PORT = process.env.SERVER_PORT

app.listen( SERVER_PORT, () => {
    console.log(`API rodando na porta ${SERVER_PORT}...`);
} )