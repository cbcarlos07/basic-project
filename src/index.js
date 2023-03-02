require('dotenv').config()

const app = require('./app')

const SERVER_PORT = process.env.SERVER_PORT

console.log('env',process.env);

app.listen( SERVER_PORT, () => {
    console.log(`API rodando na porta ${SERVER_PORT}...`);
} )