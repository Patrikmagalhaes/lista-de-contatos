const form = document.getElementById("formulario-de-contato")
const nome = []
const numero = []
let linhas = ""

form.addEventListener("submit", function (e) {
    e.preventDefault()

    //seleciona os inputs do formulario
    const inputNome = document.querySelector("#nome-contato")
    const inputNumero = document.querySelector("#numero-contato")

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
       /* linha += `<td> <label>
        <span  class="picture" for="picture-input"></span>
        <input class="picture-input" type="file">
        </label></td>`*/
        linha += `<td>${nome[nome.length - 1]}</td>`
        linha += `<td>${numero[nome.length - 1]}</td>`
        linha += '</tr>'

        linhas += linha

        //seleciona a tag tbody e atualiza ela com os dados 
        const corpotabela = document.querySelector('tbody')
        corpotabela.innerHTML = linhas
        //limpa os inputs
        inputNome.value = ""
        inputNumero.value = ""

    }

    const inputFile = document.querySelector(".picture-input")
    inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        // A variável 'inputTarget' armazena a referência do elemento que disparou o evento.
        // files é uma propiedade do input type="file"
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();
            // Cria um novo objeto FileReader, que permite a leitura de conteúdo de arquivos.

            reader.readAsDataURL(file);
            // Inicia a leitura do conteúdo do arquivo como uma URL de dados.

            reader.addEventListener("load", function (e) {
                const inputTarget = e.target;
                const img = document.createElement("img");
                // Cria um novo elemento HTML 'img'.

                img.src = inputTarget.result;
                // Define o atributo 'src' da imagem como o resultado da leitura do arquivo. 
                img.classList.add("imagem");

                let spanImagem = document.querySelector(".picture")
                spanImagem.innerHTML = "";
                spanImagem.appendChild(img);
                // Adiciona o elemento 'img' como filho do elemento com o ID 'spanPicture'.
            });
        }

    });
})