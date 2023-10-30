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
        linha = + `<label for="img" class="picture">Escolher</label>`
        linha += `<td>${nome[nome.length - 1]}</td>`
        linha += `<td>${numero[nome.length - 1]}</td>`
        linha += '</tr>'

        linhas += linha

        const corpotabela = document.querySelector('tbody')
        corpotabela.innerHTML = linhas

        inputNome.value = ""
        inputNumero.value = ""
    }


    inputFile.addEventListener("change", function (e) {

        const inputTarget = e.target
        const file = inputTarget.files[0]

        if (file) {
            const reader = new FileReader()

            reader.addEventListener("load", function (e) {
                const inputTarget = e.target

                const img = document.createElement("img")
                img.src = inputTarget.result
                img.classList.add("imagem")
                spanPicture.innerHTML = ""

                spanPicture.appendChild(img)
            })

            reader.readAsDataURL(file)
        }

    })

})




