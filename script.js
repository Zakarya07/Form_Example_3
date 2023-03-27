let inputEmail = document.querySelector("input#email");
let inputPw = document.querySelector("input#password");
let passwordBtn = document.querySelector(".btn_show_Password_Toggle");
let eyeIcon = document.querySelector(".btn_show_Password_Toggle i");
let messageError = document.querySelector('p.message');
let buttonSubmit = document.querySelector("input[type='submit']");

passwordBtn.addEventListener("click", () => {
    if (inputPw.type === 'password') {
        inputPw.type = 'text';
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else if (inputPw.type === 'text') {
        inputPw.type = 'password';
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
})

function emailChanged() {
    if (inputEmail.value.length > 5) {
        messageError.innerHTML = "It's seems like you typed an e-mail, <strong>now tap a password </strong>, if you already not 👏";
        messageError.style = "opacity:1;color:red;";
    } else if (inputEmail.value.length > 3) {
        messageError.innerHTML = "It's seems like you typed an e-mail, but  it's <strong>probably too short </strong>.";
        messageError.style = "opacity:1;color:red;";
    } else if (inputEmail.value.length < 3) {
        messageError.innerHTML = "";
    }
}

setInterval(() => {
    if (inputEmail.value !== "") {
        emailChanged();
    } 
}, 1000);

buttonSubmit.addEventListener('click', function (e) {
    if (inputEmail.value == "") {
        e.preventDefault();
        messageError.innerHTML = "You have to <strong>type a e-mail</strong> to connect";
        messageError.style = "opacity:1;color:red;";
    } else if (inputPw.value == "") {
        e.preventDefault();
        messageError.innerHTML = "Sorry you have to <strong>type a password</strong> to connect";
        messageError.style = "opacity:1;color:red;";
    }

})


setInterval(() => {
    console.log("-Email:" + inputEmail.value);
    console.log("emailLength:" + inputEmail.value.length);
    console.log("-Password:" + inputPw.value);
    console.log("passwordLenght:" + inputPw.value.length);

    if (inputEmail.value.length > 10 || inputPw.value.length > 8) {
        buttonSubmit.style = "background-color:orange;";
    } else if (inputEmail.value.length < 10 || inputPw.value.length < 8) {
        buttonSubmit.style = "";
    }
    if (inputEmail.value.length > 10 && inputPw.value.length > 8) {
        buttonSubmit.style = "background-color:#11cc99;";
    }

}, 2000);