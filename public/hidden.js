
const loginForm = document.querySelector("#logForm")
const regForm = document.querySelector("#regForm")
// const registerForm = document.querySelector('#registerForm')

const registerLink = document.querySelector('#registration')
registerLink.addEventListener('click', function () {
    loginForm.className = "hideThings"
    regForm.className = "randomClass"
})

