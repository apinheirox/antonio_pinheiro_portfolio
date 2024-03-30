
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
AOS.init();

