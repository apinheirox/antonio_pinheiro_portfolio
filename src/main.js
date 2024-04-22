
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

    var xhr = new XMLHttpRequest();
    var url = "./src/enviar-email.php";
    var params = "nome=" + nome + "&telefone=" + telefone + "&email=" + email + "&mensagem=" + mensagem;
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            document.getElementById("contactForm").reset();
        }
    }

    xhr.send(params);
});
AOS.init();

