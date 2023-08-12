// Slider

let time = 3000,
    currentImageIndex = 0,                                  // Seleciona a imagem atual
    images = document.querySelectorAll("#slider img"),      // Obtém todas as imagens do slider
    max = images.length;                                    // Obtém o número de imagens


// Declara uma função para rodar as imagens do slider
function nextImage() {

    images[currentImageIndex].classList.remove("selected");     // Remove a classe 'selected' da imagem atual, assim o slider entra em loop

    currentImageIndex++;        // Incrementa o seletor das imagens
  
    if (currentImageIndex >= max) {     // Se o seletor de imagens for maior ou igual ao número de imagens, reseta
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("selected");        // Add a classe 'selected' à imagem atual

}

// Declara a função start para manipulação do slider
function start() {

    setInterval(() => {
        nextImage();        // Troca a imagem por meio da função chamada
    }, time);

}

// Escuta quando a página é carregada e chama a função 'start'
window.addEventListener("load", start)