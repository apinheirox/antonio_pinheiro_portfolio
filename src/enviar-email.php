<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Defina o e-mail para onde você quer enviar o formulário
    $destinatario = "matoscezar17@gmail.com";

    // Obtenha os dados do formulário
    $data = json_decode(file_get_contents("php://input"), true);

    // Verifique se os dados foram recebidos corretamente
    if (!$data || empty($data['nome']) || empty($data['telefone']) || empty($data['email']) || empty($data['mensagem'])) {
        http_response_code(400); // Bad Request
        echo "Erro: Por favor, preencha todos os campos.";
        exit();
    }

    // Dados do formulário
    $nome = $data['nome'];
    $telefone = $data['telefone'];
    $email = $data['email'];
    $mensagem = $data['mensagem'];

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

    // Debug: Exibir dados do formulário e cabeçalhos
    echo "<pre>";
    echo "Dados do Formulário:\n";
    print_r($data);
    echo "\nCabeçalhos do E-mail:\n";
    print_r($headers);
    echo "</pre>";

    // Use a função mail() do PHP para enviar o e-mail
    $enviado = mail($destinatario, $assunto, $corpo_email, $headers);
    if ($enviado) {
        // E-mail enviado com sucesso
        echo "E-mail enviado com sucesso!";
    } else {
        // Erro ao enviar o e-mail
        http_response_code(500); // Internal Server Error
        echo "Erro ao enviar o e-mail. Por favor, tente novamente.";
    }
} else {
    // Se alguém tentar acessar este script diretamente, redirecione de volta para o formulário
    header("Location: ../index.html");
    exit();
}





