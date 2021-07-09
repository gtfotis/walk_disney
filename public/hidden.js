const loginForm = document.querySelector("#logForm")
const regForm = document.querySelector("#regForm")

const registerLink = document.querySelector('#registration')
registerLink.addEventListener('click', function () {
    loginForm.className = "hideThings"
    regForm.className = "randomClass"
})

const loginLink = document.querySelector('#loginNow')
loginLink.addEventListener('click', function () {
    regForm.className = "hideThings"
    loginForm.className = "randomClass"
})