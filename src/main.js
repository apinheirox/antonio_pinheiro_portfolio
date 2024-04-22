
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

document.getElementById("emailButton").addEventListener("click", function() {
    var nome = document.getElementById("nome").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || telefone === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var url = "./src/enviar-email.php";
    var params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            telefone: telefone,
            email: email,
            mensagem: mensagem
        })
    };

    fetch(url, params)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Erro ao enviar o formulário. Por favor, tente novamente.');
            }
            return response.text();
        })
        .then(function(data) {
            alert(data);
            document.getElementById("contactForm").reset();
        })
        .catch(function(error) {
            alert(error.message);
        });
});

AOS.init();

