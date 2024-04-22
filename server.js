const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/enviar-email', (req, res) => {
    const { nome, telefone, email, mensagem } = req.body;

    // Aqui você pode adicionar a lógica para enviar o e-mail
    // Este é um exemplo simples que exibe os dados
    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);

    res.sendStatus(200); // Resposta de sucesso
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});