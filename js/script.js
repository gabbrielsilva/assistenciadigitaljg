AOS.init();


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        // Seleciona a seção correspondente ao link clicado
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Faz a rolagem suave para a seção com uma duração personalizada
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Ajuste para compensar o menu fixo
            behavior: 'smooth'
        });
    });
});

