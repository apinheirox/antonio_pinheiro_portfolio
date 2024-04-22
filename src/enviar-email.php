<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Defina o e-mail para onde você quer enviar o formulário
    $destinatario = "matoscezar17@gmail.com";

    // Obtenha os dados do formulário
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Construa a mensagem de e-mail
    $assunto = "Novo contato do formulário";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Telefone: $telefone\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Adicione informações adicionais, como "From" e "Reply-To"
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: $nome <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Use a função mail() do PHP para enviar o e-mail
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        // E-mail enviado com sucesso
        echo "E-mail enviado com sucesso!";
    } else {
        // Erro ao enviar o e-mail
        echo "Erro ao enviar o e-mail. Por favor, tente novamente.";
    }
} else {
    // Se alguém tentar acessar este script diretamente, redirecione de volta para o formulário
    header("Location: ../index.html");
    exit();
}


