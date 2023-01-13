
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")

setTimeout(function () {
    modal.style.display = "inline"
}, 1500)

modalCloseBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

consentForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const logInFormData = new FormData(consentForm)
    console.log(logInFormData)

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="loading.png" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
 setTimeout(function(){
    document.getElementById("uploadText").innerText="Making the sale..."
 },1500)
 setTimeout(function(){
    modalInner.innerHTML = `
    <h2>Thank you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`
 },3000)
})
