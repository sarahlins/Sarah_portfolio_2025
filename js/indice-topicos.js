// Seleciona todos os links do menu
var quickLinks = document.querySelectorAll(".menu-list a");

// Variável para armazenar o último link clicado
var lastClickedLink = null;

// Flag para monitorar se a página está rolando
var isScrolling = false;

// Função para gerenciar o clique nos links
function handleLinkClick(event) {
    // Remove o ativo do link atualmente ativo
    var currentActive = document.getElementsByClassName('is-active')[0];
    if (currentActive) {
        currentActive.classList.remove('is-active');
    }

    // Adiciona a classe 'is-active' ao link clicado
    this.classList.add('is-active');

    // Salva o link clicado como o último clicado
    lastClickedLink = this;

    // Reseta o estado de rolagem
    isScrolling = false;
}

// Adiciona evento de clique a cada link
for (var i = 0; i < quickLinks.length; i++) {
    quickLinks[i].addEventListener('click', handleLinkClick);
}

// Adiciona evento de rolagem para remover o ativo
document.addEventListener('scroll', function () {
    if (!isScrolling) {
        isScrolling = true;

        // Remove a classe 'is-active' após a rolagem começar
        setTimeout(function () {
            if (isScrolling) {
                var currentActive = document.getElementsByClassName('is-active')[0];
                if (currentActive) {
                    currentActive.classList.remove('is-active');
                }
            }
        }, 200); // Delay para garantir que é uma rolagem
    }
});

// Quando a rolagem parar, restaurar o último link clicado como ativo
var scrollTimeout;
document.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
        // Só restaura se houver um último link clicado
        if (lastClickedLink) {
            lastClickedLink.classList.add('is-active');
        }
    }, 200); // Delay para garantir que a rolagem parou
});
