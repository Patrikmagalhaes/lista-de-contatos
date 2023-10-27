const form = document.getElementById("formulario-de-contato")
const nome = []
const numero = []
let linhas = ""
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const inputNome = document.querySelector("#nome-contato").value
    const inputNumero = document.querySelector("#numero-contato").value

    nome.push(inputNome)
    numero.push(parseFloat(inputNumero))

    let linha = '<tr>'
    linha += `<td>${nome[nome.length - 1]}</td>`
    linha += `<td>${numero[nome.length - 1]}</td>`
    linha += '</tr>'

    linhas += linha

    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas

})



