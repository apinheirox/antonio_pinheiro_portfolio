<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Mensagem formatada para o WhatsApp
    $mensagemWhatsApp =
        "Mensagem do Cliente:\n\n" .
        "Nome: " . $nome . "\n" .
        "Telefone: " . $telefone . "\n" .
        "E-mail: " . $email . "\n\n" .
        "Mensagem:\n" . $mensagem;

    // Substitua o número de telefone abaixo pelo número desejado com o prefixo internacional (ex: 5511999999999)
    $numeroWhatsApp = "5571984652983";

    // URL para a API do WhatsApp
    $url = "https://wa.me/" . $numeroWhatsApp . "?text=" . urlencode($mensagemWhatsApp);

    // Redirecionamento para o WhatsApp
    header("Location: $url");
    exit;
} else {
    echo "Método não é POST!";
}