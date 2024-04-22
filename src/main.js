
const header = document.querySelector('header');


function handleScroll() {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}


window.addEventListener('scroll', handleScroll);

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});


function enviarParaWhatsApp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se todos os campos estão preenchidos
    if (nome === "" || telefone === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário antes de enviar sua mensagem.");
        return; // Impede o envio se algum campo estiver vazio
    }

    // Mensagem formatada para o WhatsApp
    var mensagemWhatsApp =
        "Mensagem do Cliente:\n\n" +
        "Nome: " + nome + "\n" +
        "Telefone: " + telefone + "\n" +
        "E-mail: " + email + "\n\n" +
        "Mensagem:\n" + mensagem;

    // Substitua o número de telefone abaixo pelo número desejado com o prefixo internacional (ex: 5511999999999)
    var numeroWhatsApp = "5571984652983";

    // URL para a API do WhatsApp
    var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemWhatsApp);

    // Abrir a URL no WhatsApp
    window.open(url);
}




AOS.init();

