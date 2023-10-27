const form = document.getElementById("formulario-de-contato")
const tdnome = document.getElementById("nome-digitado")
const tdnumero = document.getElementById("numero-digitado")
const nome = []
const numero = []
form.addEventListener("submit", function (e) {
    e.preventDefault()



    const inputNome = document.querySelector("#nome-contato").value
    const inputNumero = document.querySelector("#numero-contato").value

    nome.push(inputNome)
    numero.push(inputNumero)

    tdnome.innerHTML = inputNome
    tdnumero.innerHTML = inputNumero

    console.log(nome)
})
