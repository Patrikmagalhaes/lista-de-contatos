const form = document.getElementById("formulario-de-contato")
const nome = []
const numero = []
let linhas = ""

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const inputNome = document.querySelector("#nome-contato")
    const inputNumero = document.querySelector("#numero-contato")
   

    if (numero.includes(parseFloat(inputNumero.value))) {
        alert("Esse numero ja esta registrado")
        inputNome.value = ""
        inputNumero.value = ""
    }
    else {
        nome.push(inputNome.value)
        numero.push(parseFloat(inputNumero.value))

        let linha = '<tr>'
        linha = + `<label for="img" class="picture"></label>`
        linha += `<td>${nome[nome.length - 1]}</td>`
        linha += `<td>${numero[nome.length - 1]}</td>`
        linha += '</tr>'

        linhas += linha

        const corpotabela = document.querySelector('tbody')
        corpotabela.innerHTML = linhas

        inputNome.value = ""
        inputNumero.value = ""
    }

})




