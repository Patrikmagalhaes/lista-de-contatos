const inputFile = document.querySelector(".picture-input")
const spanPicture = document.querySelector(".picture-image")
const pictureImageTxt = "Escolher"
spanPicture.innerHTML = pictureImageTxt

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