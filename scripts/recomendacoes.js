// Obtém elementos da página
const frm = document.querySelector("form");
const recomendacaoContainer = document.querySelector(".recomendacoes__container");

// Continentes
const america = document.querySelector("#rbAmerica");                       // América
const europa = document.querySelector("#rbEuropa");                         // Europa
const africa = document.querySelector("#rbAfrica");                         // África
const asia = document.querySelector("#rbAsia");                             // Ásia
const oceania = document.querySelector("#rbOceania");                       // Oceania

// Recomenda um destino específico para cada continente
const recomendaDestino = () => {

    if (america.checked) {

        // Cria elementos HTML via JS 
        const titulo = document.createElement("h3");
        const descricao = document.createElement("p");
        const img = document.createElement("img");

        // Atribui textos e informações aos elementos de texto
        titulo.innerText = "Brasil";
        const texto = document.createTextNode("País de dimensões continentais, o Brasil também é conhecido por sua enorme diversidade cultural, geográfica e natural. Regado a samba, forró, axé, funk ou sertanejo, o Brasil proporciona a experiência da verdadeira diversidade cultural, tanto nos grandes centros metropolitanos como nas pequenas cidades litorâneas. Se a vontade é de sossego, o país também contempla o desejo com as belíssimas cidades do interior, de pessoas simples e acolhedoras, como nas históricas cidades de Minas Gerais ou do Sul do Brasil. Além de pequenas praias paradisíacas e isoladas ou ilhas de pescadores em que o tempo parece estar parado. A enorme selva amazônica também proporciona uma gama enorme de experiências ricas e de contato com culturas indígenas e com uma natureza exuberante. Para os que preferem a vida agitada das cidades, São Paulo proporciona uma vida noturna incessante e repleta de atividades culturais, assim como o Rio de Janeiro, principal destino turístico do Brasil. Fonte: Site Instaviagem.");

        // Atribui uma imagem e um texto alternativo à tag 'img' criada
        img.src = "assets/recomendacoes/brasil.jpg";
        img.alt = "Brasil";

        // Define os elementos pais e os elementos filhos
        descricao.appendChild(texto);
        recomendacaoContainer.appendChild(titulo);
        recomendacaoContainer.appendChild(img);
        recomendacaoContainer.appendChild(descricao);

        // Estiliza elementos atribuindo uma classe já existente nas CSS
        titulo.classList.add("recomendacoes__titulo");
        img.classList.add("recomendacoes__img");
        descricao.classList.add("recomendacoes__descricao");

    } else if (europa.checked) {

        // Cria elementos HTML via JS 
        const titulo = document.createElement("h3");
        const descricao = document.createElement("p");
        const img = document.createElement("img");

        // Atribui textos e informações aos elementos de texto
        titulo.innerText = "Portugal";
        const texto = document.createTextNode("Os laços entre brasileiros e portugueses são históricos e se mantém firmes atualmente. É impossível visitar Portugal sem reconhecer um pouco da nossa própria história. Os azulejos e as vielas das colinas de Lisboa irão encantar, assim como a gastronomia local tão famosa no Brasil. A paisagem rural do litoral de Portugal fascina os visitantes, permeados de castelos, palácios e mosteiros que compõem o cenário de um país antigo que se orgulha do passado preservado - prova viva disso é a cidade de Braga com suas mais de 30 igrejas. Em Sintra encontramos três Patrimônios da Humanidade que são de tirar o fôlego: o Palácio Nacional, o Palácio da Pena e o Castelo Mouro. Nos arquipélagos de Madeira e Açores é possível o contato com a vida tranquila dos moradores, além de ter a oportunidade de mergulhar e de observar baleias. A herança cultural literária de grandes nomes de Portugal, como Camões, Eça de Queirós, José Saramago e Fernando Pessoa também está constantemente presente em cada canto do país. Fonte: Site Instaviagem.");

        // Atribui uma imagem e um texto alternativo à tag 'img' criada
        img.src = "assets/recomendacoes/portugal.jpg";
        img.alt = "Portugal";

        // Define os elementos pais e os elementos filhos
        descricao.appendChild(texto);
        recomendacaoContainer.appendChild(titulo);
        recomendacaoContainer.appendChild(img);
        recomendacaoContainer.appendChild(descricao);

        // Estiliza elementos atribuindo uma classe já existente nas CSS
        titulo.classList.add("recomendacoes__titulo");
        img.classList.add("recomendacoes__img");
        descricao.classList.add("recomendacoes__descricao");
        
    } else if (africa.checked) {

        // Cria elementos HTML via JS 
        const titulo = document.createElement("h3");
        const descricao = document.createElement("p");
        const img = document.createElement("img");

        // Atribui textos e informações aos elementos de texto
        titulo.innerText = "Egito";
        const texto = document.createTextNode("O Egito é um país fascinante, de histórias muito antigas, lendas e monumentos inesquecíveis. Cairo é a capital do país, encantadora pela vida caótica, intensa e acelerada. Os museus e a preservação da cultura atraem os visitantes, assim como o Platô de Gizé, onde estão as pirâmides famosas de Quéops, Quéfren e Miquerinos, além da famosa Esfinge. O rio Nilo é outro ponto importante, desafiando o tempo e a história. Agências de viagens oferecem cruzeiros no Nilo, e essa certamente será uma das experiências mais incríveis de sua vida. No sul do país é possível entrar cada vez mais profundamente na história egípcia, encontrando cidades preservadas e o inesquecível Vale dos Reis - onde estão as tumbas dos faraós Ramsés II e Tutancâmon. O Egito possui também belas mesquitas e mercados onde encontramos de tudo e a pechincha é um esporte indispensável. Além disso, uma visita ao Mar Vermelho, um dos melhores pontos de mergulho do planeta é dica essencial para conhecer melhor o Egito. Fonte: Site Instaviagem.");

        // Atribui uma imagem e um texto alternativo à tag 'img' criada
        img.src = "assets/recomendacoes/egito.jpg";
        img.alt = "Egito";

        // Define os elementos pais e os elementos filhos
        descricao.appendChild(texto);
        recomendacaoContainer.appendChild(titulo);
        recomendacaoContainer.appendChild(img);
        recomendacaoContainer.appendChild(descricao);

        // Estiliza elementos atribuindo uma classe já existente nas CSS
        titulo.classList.add("recomendacoes__titulo");
        img.classList.add("recomendacoes__img");
        descricao.classList.add("recomendacoes__descricao"); 
        
    } else if (asia.checked) {

        // Cria elementos HTML via JS 
        const titulo = document.createElement("h3");
        const descricao = document.createElement("p");
        const img = document.createElement("img");

        // Atribui textos e informações aos elementos de texto
        titulo.innerText = "Japão";
        const texto = document.createTextNode("Vinte e quatro horas de voo levam brasileiros ao Japão, país que une avanços tecnológicos e tradição histórica. Mas o território é bem mais do que isso. Apenas Tóquio, a capital japonesa e uma das maiores metrópoles do mundo, já renderia uma viagem, mas não deixe de conhecer os arredores, Nikko e Kamakura, além de imergir na tradicional e tranquila cultura japonesa em Kyoto. Também valem a visita Hiroshima e o castelo de Himeji. Tóquio talvez seja a cidade mais organizada e limpa do planeta. Vale conhecer pelos seus edifícios, sua concentração de restaurantes de alto nível com pratos do mundo inteiro, seus trens e metrôs que funcionam sem falhas, além de seu povo educado e suas cerejeiras. Fora da capital, a vista do Monte Fuji também atrai turistas. Períodos entre março e maio e setembro e novembro são os melhores para caminhar no Japão, com clima ameno. É preciso de visto para entrar no país. Fonte: Site Instaviagem.");

        // Atribui uma imagem e um texto alternativo à tag 'img' criada
        img.src = "assets/recomendacoes/japao.jpg";
        img.alt = "Japão";

        // Define os elementos pais e os elementos filhos
        descricao.appendChild(texto);
        recomendacaoContainer.appendChild(titulo);
        recomendacaoContainer.appendChild(img);
        recomendacaoContainer.appendChild(descricao);

        // Estiliza elementos atribuindo uma classe já existente nas CSS
        titulo.classList.add("recomendacoes__titulo");
        img.classList.add("recomendacoes__img");
        descricao.classList.add("recomendacoes__descricao");

    } else if (oceania.checked) {

        // Cria elementos HTML via JS 
        const titulo = document.createElement("h3");
        const descricao = document.createElement("p");
        const img = document.createElement("img");

        // Atribui textos e informações aos elementos de texto
        titulo.innerText = "Nova Zelândia";
        const texto = document.createTextNode("É difícil decidir por onde começar na Nova Zelândia. Explorar as paisagens e o litoral é o principal passeio para muitos turistas, mas suas áreas urbanas estão entre as mais habitáveis do mundo. Entre os destinos naturais mais procurados estão Milford Sound, uma grande entrada no mar cavada pelo degelo nas montanhas e pela ação do vento, e o Monte Cook, a montanha mais alta da Nova Zelândia. As cavernas de Waitomo, com mais de 2 milhões de anos, e o Parque Nacional Abel Tasman também atraem pessoas do mundo todo. Atividades como bungee jumping e observação de baleias estão entre as principais atividades turísticas da Nova Zelândia. Algumas das locações para as trilogias do cinema O Senhor dos Anéis e O Hobbit também recebem até hoje os fãs da saga. As praias da Península de Coromandel, as vinícolas e as cidades vibrantes de Auckland e Christchurch também recebem turistas com infraestrutura de tirar o chapéu. Não é necessário visto para entrar na Nova Zelândia e não há época ideal para visitar o país, já que as temperaturas variam pouco. Fonte: Site Instaviagem.");

        // Atribui uma imagem e um texto alternativo à tag 'img' criada
        img.src = "assets/recomendacoes/nova-zelandia.jpg";
        img.alt = "Nova Zelândia";

        // Define os elementos pais e os elementos filhos
        descricao.appendChild(texto);
        recomendacaoContainer.appendChild(titulo);
        recomendacaoContainer.appendChild(img);
        recomendacaoContainer.appendChild(descricao);

        // Estiliza elementos atribuindo uma classe já existente nas CSS
        titulo.classList.add("recomendacoes__titulo");
        img.classList.add("recomendacoes__img");
        descricao.classList.add("recomendacoes__descricao");

    }

};

// Escuta o click no botão 'submit'
frm.addEventListener("submit", (e) => {

    e.preventDefault();       // Evita o envio automático do 'form'

    // Chama a função de recomendação
    recomendaDestino();

    frm.btEscolher.disabled = true;
    
});

// Recarrega a página para novas recomendações
frm.btNova.addEventListener("click", () => window.location.reload());