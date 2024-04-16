
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

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header nav ul a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const windowHeight = window.innerHeight;
                const targetOffsetTop = target.offsetTop;
                const targetHeight = target.offsetHeight;
                const scrollToPosition = targetOffsetTop - (windowHeight - targetHeight) / 2;
                
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.getElementById('emailButton').addEventListener('click', sendMail);


function sendMail (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const messagem = document.getElementById('mensagem').value;
    const nome = document.getElementById('nome').value;

    // Verifica se todos os campos (e-mail, mensagem e nome) foram preenchidos pelo usuário.
    if (email && messagem && nome) {
        // Se todos os campos estiverem preenchidos, usa a biblioteca 'Email.js'
        // para enviar o e-mail com os detalhes fornecidos pelo usuário.
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "techwoodev@gmail.com",
            Password: "92DE31F0FF89F50F69B0AAE013721AF69809",
            To: "matoscezar17@gmail.com",
            From: "techwoodev@gmail.com",
            Subject: `${nome} Enviando E-mail Com Javascript`,
            Body: `Email: ${email} \n \n ${messagem} \n \n ${telefone}`,
          }).then(() => {
            // Após o envio bem-sucedido, exibe um alerta informando que a mensagem foi enviada
            alert('Mensagem enviada!');
            // E recarrega a página, para limpar os campos e permitir que o usuário envie mais e-mails.
            location.reload();
          });
    } else {
        // Se algum dos campos estiver em branco, exibe um alerta informando que todos os campos devem ser preenchidos.
        alert('Preencha todos os campos!');
    }  
}
AOS.init();

