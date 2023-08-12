// Menu Hamburguer

// Declara uma função que é chamada no HTML para mostrar o menu
function menuShow() { 
          
    const menuMobile = document.querySelector(".nav__container__list__menu-mobile");    // Obtém a lista de links do menu mobile
    const menuIcon = document.querySelector(".icon")                                    // Obtém o ícone do menu hamburguer
    if (menuMobile.classList.contains("open")) {                                        // Se contém a classe 'open'...
        menuMobile.classList.remove("open");                                            // Remove a classe
        menuIcon.src = "assets/icones/menu.png"                                         // Atribui um ícone padrão para o menu
    } else {                                                                            // Senão...
        menuMobile.classList.add("open");                                               // Adiciona a classe
        menuIcon.src = "assets/icones/menu-close.png"                                   // Atribui um ícone para fechamento do menu   
    }

}