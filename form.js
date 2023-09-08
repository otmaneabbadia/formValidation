const nameInput = document.querySelector('#nameInput')
const emailInput = document.querySelector('#emailInput')
const phoneInput = document.querySelector('#phoneInput')
const buttonMove = document.querySelector('#button_position')
const nameError = document.querySelector('#nameError')
const emailError = document.querySelector('#emailError')
const phoneError = document.querySelector('#phoneError')

const validNumber =  /^(05|06|07)[0-9]{8}$/;
const validEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

const verifyName = () => {
    const name = nameInput.value
    if (name.length > 2) {
        nameError.style.display = 'none'
    } else {
        nameError.style.display = 'inline'
    }
}

const verifyEmail = () => {
    const email = emailInput.value
    const testing = validEmail.test(email)
    if (testing) {
        emailError.style.display = 'none'
    } else {
        emailError.style.display = 'inline'
    }
}

const verifyPhone = () => {
    const phone = phoneInput.value
    const tester = validNumber.test(phone)
    if(tester) {
        phoneError.style.display = 'none'
    }else {
        phoneError.style.display = 'inline'
    }
}



buttonMove.addEventListener("click", () => {
    verifyName()
    verifyEmail()
    verifyPhone()
})
