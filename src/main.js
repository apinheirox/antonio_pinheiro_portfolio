
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
window.addEventListener("load", function() {
    setTimeout(function() {
        var loader = document.getElementById("loader");
        loader.style.opacity = 0;
        loader.style.pointerEvents = "none";

        var content = document.getElementById("content");
        content.style.opacity = 1;
        content.style.pointerEvents = "auto";
    }, 5000);
});
function enviarParaWhatsApp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    
    if (nome === "" || telefone === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário antes de enviar sua mensagem.");
        return; 
    }

    
    var mensagemWhatsApp =
        "Mensagem do Cliente:\n\n" +
        "Nome: " + nome + "\n" +
        "Telefone: " + telefone + "\n" +
        "E-mail: " + email + "\n\n" +
        "Mensagem:\n" + mensagem;

    
    var numeroWhatsApp = "5571984652983";

    
    var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemWhatsApp);

    
    window.open(url);
}




AOS.init();

