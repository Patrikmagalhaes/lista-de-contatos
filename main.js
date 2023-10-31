const form = document.getElementById("formulario-de-contato")
const nome = []
const numero = []
let linhas = ""
const inputFile = document.querySelector(".picture-input")
const spanPicture = document.querySelector(".picture-image")
const pictureImageTxt = "Escolher"
spanPicture.innerHTML = pictureImageTxt
const label = document.querySelector(".picture")
label.classList.add("label-off")

//executa quando o formulario é enviado
form.addEventListener("submit", function (e) {
    e.preventDefault()

    //seleciona os inputs do formulario
    const inputNome = document.querySelector("#nome-contato")
    const inputNumero = document.querySelector("#numero-contato")

    const label = document.createElement("label")
    label.className = "picture"

        //testa se ja existe o numero registrado
    if (numero.includes(parseFloat(inputNumero.value))) {
        alert("Esse numero ja esta registrado")
        inputNome.value = ""
        inputNumero.value = ""
    }
    //se nao tiver adiciona no array
    else {
        nome.push(inputNome.value)
        numero.push(parseFloat(inputNumero.value))
        //adiciona uma linha com os dados das variaveis
        let linha = '<tr>'
        linha = + label
        linha += `<td>${nome[nome.length - 1]}</td>`
        linha += `<td>${numero[nome.length - 1]}</td>`
        linha += '</tr>'

        linhas += linha

        //seleciona o corpotabela e atualiza ela com os dados 
        const corpotabela = document.querySelector('tbody')
        corpotabela.innerHTML = linhas
        //limpa os inputs
        inputNome.value = ""
        inputNumero.value = ""
    }


    inputFile.addEventListener("change", function (e) {
        // Quando ocorrer uma mudança no elemento "inputFile" (geralmente um input do tipo 'file'),
        // essa função será acionada.
    
        const inputTarget = e.target;
        // A variável 'inputTarget' armazena a referência do elemento que disparou o evento.
    
        const file = inputTarget.files[0];
        // A variável 'file' guarda o primeiro arquivo selecionado através do elemento que disparou o evento.
    
        if (file) {
            // Verifica se um arquivo foi selecionado.
    
            const reader = new FileReader();
            // Cria um novo objeto FileReader, que permite a leitura de conteúdo de arquivos.
    
            reader.addEventListener("load", function (e) {
                // Quando a leitura do arquivo estiver completa, esta função será acionada.
    
                const inputTarget = e.target;
                // Esta linha não é necessária, pois a variável 'inputTarget' já foi definida acima. 
                // Ela está capturando o mesmo elemento que acionou o evento 'load'.
    
                const img = document.createElement("img");
                // Cria um novo elemento HTML 'img'.
    
                img.src = inputTarget.result;
                // Define o atributo 'src' da imagem como o resultado da leitura do arquivo. 
                // Isso carrega o conteúdo do arquivo na imagem.
    
                img.classList.add("imagem");
                // Adiciona a classe 'imagem' ao elemento 'img'.
    
                spanPicture.innerHTML = "";
                // Limpa todo o conteúdo que estava dentro do elemento com o ID 'spanPicture'.
    
                spanPicture.appendChild(img);
                // Adiciona o elemento 'img' como filho do elemento com o ID 'spanPicture'.
            });
    
            reader.readAsDataURL(file);
            // Inicia a leitura do conteúdo do arquivo como uma URL de dados.
            // Quando a leitura estiver concluída, o evento 'load' será acionado.
        }
    });
    
    

})




