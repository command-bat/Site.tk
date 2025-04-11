

function redirectToID(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    changeLanguage('en');

        // Get all buttons with class 'SNicon'
        var buttons = document.querySelectorAll('.SNicon');

        // Iterate through each button
        buttons.forEach(function (button) {
            // Get the corresponding image and original source
            var image = button.querySelector('img');
            var originalSrc = image.src;

            // Extract the logo color from the original source
            var logoColor = originalSrc.match(/-([A-Fa-f0-9]{6})/);
            logoColor = logoColor ? logoColor[1] : '000000'; // Default to black if not found

            // Update the image source on mouseover
            button.addEventListener('mouseover', function () {
                image.src = `https://img.shields.io/badge/${button.classList[1]}-${logoColor}?style=for-the-badge&logo=${button.classList[1]}&logoColor=white`;
            });

            // Restore the original image source on mouseout
            button.addEventListener('mouseout', function () {
                image.src = originalSrc;
            });
        });

                // Get all buttons with class 'SNicon'
                var buttons = document.querySelectorAll('.SNicon2');

                // Iterate through each button
                buttons.forEach(function (button) {
                    // Get the corresponding image and original source
                    var image = button.querySelector('img');
                    var originalSrc = image.src;
        
                    // Extract the logo color from the original source
                    var logoColor = originalSrc.match(/-([A-Fa-f0-9]{6})/);
                    logoColor = logoColor ? logoColor[1] : '000000'; // Default to black if not found
        
                    // Update the image source on mouseover
                    button.addEventListener('mouseover', function () {
                        image.src = `https://img.shields.io/badge/${button.classList[1]}-${logoColor}?style=for-the-badge&logo=x&logoColor=white`;
                    });
        
                    // Restore the original image source on mouseout
                    button.addEventListener('mouseout', function () {
                        image.src = originalSrc;
                    });
                });

        // Get all buttons with class 'SNicon'
        var buttons = document.querySelectorAll('.SNicon3');

        // Iterate through each button
        buttons.forEach(function (button) {
            // Get the corresponding image and original source
            var image = button.querySelector('img');
            var originalSrc = image.src;

            // Extract the logo color from the original source
            var logoColor = originalSrc.match(/-([A-Fa-f0-9]{6})/);
            logoColor = logoColor ? logoColor[1] : '000000'; // Default to black if not found

            // Update the image source on mouseover
            button.addEventListener('mouseover', function () {
                image.src = `https://custom-icon-badges.demolab.com/badge/${button.classList[1]}-${logoColor}?style=for-the-badge&logo=linkedin-white&logoColor=white`;
            });

            // Restore the original image source on mouseout
            button.addEventListener('mouseout', function () {
                image.src = originalSrc;
            });
        });

        class TxtType {
            constructor(el, toRotate, period, pause) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 3000;
                this.pause = parseInt(pause, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            }
    
            tick() {
                const i = this.loopNum % this.toRotate.length;
                const fullTxt = this.toRotate[i];
    
                if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }
    
                this.el.innerText = this.txt;
    
                const delta = this.isDeleting ? 150 / 2 : 50;
    
                if (!this.isDeleting && this.txt === fullTxt) {
                    this.isDeleting = true;
                    setTimeout(() => this.tick(), this.pause); // Adding pause interval after the text is complete
                } else if (this.isDeleting && this.txt === 'command') {
                    this.isDeleting = false;
                    this.toRotate = getRandomElement([["commandbat"], ["commandbatata"]]); // Change text options
                    this.loopNum++;
                    setTimeout(() => this.tick(), this.pause); // Adding pause interval after changing the text
                } else {
                    setTimeout(() => this.tick(), this.isDeleting ? delta : this.period);
                }
            }
        }
    
        function getRandomElement(options) {
            const randomNumber = Math.random();
            if (randomNumber < 0.9) {
                return options[0];
            } else {
                return options[1];
            }
        }
    
        document.querySelectorAll('#typingtext').forEach((el) => {
            const toRotate = getRandomElement([["commandbat"], ["commandbatata"]]);
            const period = 100;
            const pause = 2000;
    
            if (toRotate) {
                new TxtType(el, toRotate, period, pause);
            }
        });
    });




// Objeto com textos para diferentes idiomas
var languageTexts = {
    'en': {
        'mnho': "Home",
        'mnin': "Information",
        'mnpro': "Projects",
        'greetingPeIn': "Hi, I'm the commandbat.",
        'aboutPeIn': "Hello, my name is Tiago and I am 18 years old.<br>I am from the state of Sao Paulo, Brazil.",
        'greetingPrIn': "Programming.",
        'aboutPrIn': "I know some programming languages like Javascript.<br>I created some websites and also some datapacks for Minecraft.",
        'greetingPjs': "Projects.",
        'aboutPjs': "I have a few projects you can check out! If you want, you can scroll down to the projects section.",
        'projectTitle': "My Projects",
        'projectBtnVM1': "View More",
        'projectBtnVM2': "View More", 
        'footer': "Developed by commandbat",
        'prti1': "Guesses",
        'prte1': "A site based on the GE prediction site, but made for me and my friends to vote for.",
        'prti2': "Portfolio",
        'prte2': "\nA site for my portfolio, just to test my html and css level.\n",
        'prti3': "Jegue Quiz",
        'prte3': "A game inspired by the \"Genius Quiz\" game, made for the youtuber Jazzghost.",
        
        'prtisoon': "Coming Soon",
        'prtesoon': "\nComing Soon \n",
        'greeting': "",
        'about': "",
        // Adicione mais textos conforme necessário
    },
    'pt': {
        'mnho': "Inicio",
        'mnin': "Informaçoes",
        'mnpro': "Projetos",
        'greetingPeIn': "Oi, eu sou o commandbat.",
        'aboutPeIn': "Olá, meu nome é Tiago e tenho 18 anos.<br>Eu sou do estado de São Paulo, Brasil.",
        'greetingPrIn': "Programação.",
        'aboutPrIn': "Conheço algumas linguagens de programação como Javascript.<br>Criei alguns sites e também alguns datapacks para o Minecraft.",
        'greetingPjs': "Projetos.",
        'aboutPjs': "Tenho alguns projetos que você pode conferir! Se desejar, você pode rolar até a seção de projetos.",
        'projectTitle': "Meus Projetos",
        'projectBtnVM1': "Ver Mais",
        'projectBtnVM2': "Ver Mais",
        'footer': "Desenvolvido por commandbat",
        'prti1': "Palpites",
        'prte1': "Um site baseado no site de palpites do GE, porem feito para eu e meus amigos votarmos.",
        'prti2': "Portifolio",
        'prte2': "\nUm site para meu portfólio, apenas para testar meu nivel de html e css.\n",
        'prti3': "Jegue Quiz",
        'prte3': "Um jogo inspirado no jogo \"Gênio Quiz\", feito para o youtuber Jazzghost.",
        
        'prtisoon': "Em Breve",
        'prtesoon': "\nEm Breve \n",
        'greeting': "",
        'about': "",
        // Adicione mais textos conforme necessário
    }
};

// Função para mudar o idioma
function changeLanguage(languageCode) {
    // Itera sobre os elementos e atualiza os textos com base no idioma escolhido
    for (var key in languageTexts[languageCode]) {
        if (languageTexts[languageCode].hasOwnProperty(key)) {
            var element = document.getElementById(key);
            if (element) {
                element.innerHTML = languageTexts[languageCode][key];
            }
        }
    }
}

let copy = (texto) => {
    //Cria um elemento input (pode ser um textarea)
    let inputTest = document.createElement("input");
    inputTest.value = texto;
    //Anexa o elemento ao body
    document.body.appendChild(inputTest);
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputTest);
    type="copia/javascript";
    alert("Copiado para a area de transferencia")
    
};

 ///////////
 ///BATS///
 /////////

function gerarImagem() {
    var valorSPW = Math.floor(Math.random() * (7 - 4 + 1)) + 1;
    var tempo = Math.floor(Math.random() * (2000 - 1000 + 1)) + 4000;

    // Criação da imagem
    for (let i = 0; i < valorSPW; i++) {
    setTimeout(function() {
        var img = document.createElement("img");
        img.src = "img/bat/bat3.png";
        img.classList.add("generated-image");

        // Define uma altura aleatória
        function alturaAleatoria(){
        const alturaAleatoria = Math.floor(Math.random() * (window.innerHeight));
        if (alturaAleatoria < (window.innerHeight-250)){
            return alturaAleatoria
        }else{
            const alturaAleatoria = ((window.innerHeight)/2.5)+(Math.random()*5);
            return alturaAleatoria
        }
        };

        function zIndexAleatorio(){
            var random = Math.random()
            if(random < 0.5){
                return 1;
            }else{
                return 3;
            }
        }

        img.style.top = alturaAleatoria() + "px";
        img.style.zIndex = zIndexAleatorio();

        // Adiciona imagem ao container
        document.getElementById("imageBats").appendChild(img);

        // Aplica animação
        setTimeout(function() {
          img.style.left = "115%"; // move a imagem para a direita
        }, 1500);
      }, i * ["1"+[valorSPW+2]+"0"]);
    }

    // Atualiza o container após o tempo especificado
    setTimeout(function() {
    document.getElementById("imageBats").innerHTML = "";
      gerarImagem(); // Chama a função novamente para gerar novas imagens
    }, tempo);
}

  // Inicia o gerador
gerarImagem();
