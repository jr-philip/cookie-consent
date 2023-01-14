
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")
const modalBtn = document.getElementById("modal-btn")

setTimeout(function () {
    modal.style.display = "inline"
}, 1500)

modalCloseBtn.addEventListener("click", function () {
    modal.style.display = "none"
})

modalBtn.addEventListener("mouseover",function(){
    console.log("hover")
})

consentForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const logInFormData = new FormData(consentForm)
    const fullName = logInFormData.get("fullName")

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
    <h2>Thank <span class="modal-display-name">${fullName}</span>,you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`
    modalCloseBtn.disabled = false
  },3000)
})
