/* ----------------------- Criar Conta ----------------------- */

/* --------------- Username --------------- */

let usernameInput = document.getElementById("username-input");
let usernameError = document.getElementById("username-error");
let emptyUsernameError = document.getElementById("empty-username");
let nameRegex = /^[a-zA-Zà-úÀ-Ú0-9\-\ \_\.]{4,24}$/;

function checkerUser() {
    let icon1 = document.getElementById("icon1");
    icon1.style.display="inline-block";
    if(usernameInput.value.match(nameRegex)){
        icon1.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon1.style.color = '#2ecc71';
        usernameError.style.display = 'none';
        emptyUsernameError.style.display = 'none';
        return true;  // Adicionando retorno booleano
    }
    else if(usernameInput.value.length == 0){
        icon1.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon1.style.color = '#ff2851';
        usernameError.style.display = 'none';
        emptyUsernameError.style.display = 'block';
        return false; // Adicionando retorno booleano
    }
    else{
        icon1.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon1.style.color = '#ff2851';
        usernameError.style.display = 'block';
        emptyUsernameError.style.display = 'none';
        return false; // Adicionando retorno booleano
    }
}

/* --------------- CPF --------------- */
let cpfInput = document.getElementById("cpf-input");
let cpfError = document.getElementById("cpf-error");
let emptyCpfError = document.getElementById("empty-cpf");

function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let firstCheck = (sum * 10) % 11;
    if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;

    if (firstCheck !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    let secondCheck = (sum * 10) % 11;
    if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;

    return secondCheck === parseInt(cpf.charAt(10));
}

function checkerCPF() {
    let iconCpf = document.getElementById("icon-cpf");
    iconCpf.style.display = "inline-block";
    if (cpfInput.value.length === 0) {
        iconCpf.innerHTML = '<i class="ri-error-warning-line"></i>';
        iconCpf.style.color = '#ff2851';
        cpfError.style.display = 'none';
        emptyCpfError.style.display = 'block';
        return false;
    } else if (isValidCPF(cpfInput.value)) {
        iconCpf.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        iconCpf.style.color = '#2ecc71';
        cpfError.style.display = 'none';
        emptyCpfError.style.display = 'none';
        return true;
    } else {
        iconCpf.innerHTML = '<i class="ri-error-warning-line"></i>';
        iconCpf.style.color = '#ff2851';
        cpfError.style.display = 'block';
        emptyCpfError.style.display = 'none';
        return false;
    }
}

// Função de formatação de CPF
function formatCPF(value) {
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length <= 3) {
        return value;
    } else if (value.length <= 6) {
        return value.replace(/(\d{3})(\d+)/, "$1.$2");
    } else if (value.length <= 9) {
        return value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    } else {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
    }
}

// Evento para aplicar formatação ao CPF enquanto digita
cpfInput.addEventListener("input", function () {
    this.value = formatCPF(this.value);
});

/* --------------- Email --------------- */

let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checkerEmail() {
    let icon2 = document.getElementById("icon2");
    icon2.style.display="inline-block";
    if(emailInput.value.match(mailRegex)){
        icon2.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon2.style.color = '#2ecc71';
        emailError.style.display = 'none';
        emptyEmailError.style.display = 'none';
        return true; // Adicionando retorno booleano
    }
    else if(emailInput.value.length == 0){
        icon2.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon2.style.color = '#ff2851';
        emailError.style.display = 'none';
        emptyEmailError.style.display = 'block';
        return false; // Adicionando retorno booleano
    }
    else{
        icon2.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon2.style.color = '#ff2851';
        emailError.style.display = 'block';
        emptyEmailError.style.display = 'none';
        return false; // Adicionando retorno booleano
    }
}

/* --------------- Senha --------------- */

let passwordInput = document.getElementById("password-input");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");
let passRegex = /^(?=.*[A-Z])(?=.*['"~^!?@#$%&£¢§=*()+\|/_,;:<>\-\.])(?=.*[0-9])(?=.*[a-z]).{8,30}$/;


function checkerPass() {
    let icon3 = document.getElementById("icon3");
    icon3.style.display="inline-block";
    if(passwordInput.value.match(passRegex)){
        icon3.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon3.style.color = '#2ecc71';
        passwordError.style.display = 'none';
        emptyPasswordError.style.display = 'none';
        return true; // Adicionando retorno booleano
    }
    else if(passwordInput.value.length == 0){
        icon3.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon3.style.color = '#ff2851';
        passwordError.style.display = 'none';
        emptyPasswordError.style.display = 'block';
        return false; // Adicionando retorno booleano
    }
    else{
        icon3.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon3.style.color = '#ff2851';
        passwordError.style.display = 'block';
        emptyPasswordError.style.display = 'none';
        return false; // Adicionando retorno booleano
    }
}

/* --------------- Confirme a Senha --------------- */

let verifyInput = document.getElementById("verify-password");
let verifyError = document.getElementById("verify-password-error");
let emptyVerifyError = document.getElementById("empty-verify-password");

function checkerVerify() {
    let icon4 = document.getElementById("icon4");
    icon4.style.display="inline-block";
    if(verifyInput.value.match(passwordInput.value) && (verifyInput.value.length !== 0)){
        icon4.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon4.style.color = '#2ecc71';
        verifyError.style.display = 'none';
        emptyVerifyError.style.display = 'none';
        return true; // Adicionando retorno booleano
    }
    else if(verifyInput.value.length == 0){
        icon4.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon4.style.color = '#ff2851';
        verifyError.style.display = 'none';
        emptyVerifyError.style.display = 'block';
        return false; // Adicionando retorno booleano
    }
    else{
        icon4.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon4.style.color = '#ff2851';
        verifyError.style.display = 'block';
        emptyVerifyError.style.display = 'none';
        return false; // Adicionando retorno booleano
    }

}

/* --------------- Capslock Ligado --------------- */

const warningCapslock = document.querySelector("#warning-capslock");

usernameInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

cpfInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

emailInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

passwordInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

verifyInput.addEventListener("keyup", function(e){
    if(e.getModifierState("CapsLock")){
        warningCapslock.style.display = "block";
    }
    else{
        warningCapslock.style.display = "none";
    }
});

/* --------------- Botão --------------- */

const warningSubmit = document.querySelector("#warning-submit");

function checkerForm() {
    if (!checkerUser() || !checkerEmail() || !checkerPass() || !checkerVerify()) {
        warningSubmit.style.display = 'block';
        setTimeout(function () { warningSubmit.style.display = 'none'; }, 3000);
    }
    else{
        warningSubmit.style.display = "none";
    }
    
}

/* ----------------------- Login ----------------------- */

/* --------------- Username --------------- */

let loginInput = document.getElementById("login-input");
let loginError = document.getElementById("login-error");
let emptyLoginError = document.getElementById("empty-login");
let loginRegex = /^[a-zA-Zà-úÀ-Ú0-9\-\ \_\.]{4,24}$/;

function checkerLogin() {
    let icon5 = document.getElementById("icon5");
    icon5.style.display="inline-block";
    if(loginInput.value.match(loginRegex)){
        icon5.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon5.style.color = '#2ecc71';
        loginError.style.display = 'none';
        emptyLoginError.style.display = 'none';
        return true; // Adicionando retorno booleano
    }
    else if(loginInput.value.length == 0){
        icon5.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon5.style.color = '#ff2851';
        loginError.style.display = 'none';
        emptyLoginError.style.display = 'block';
        return false; // Adicionando retorno booleano
    }
    else{
        icon5.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon5.style.color = '#ff2851';
        loginError.style.display = 'block';
        emptyLoginError.style.display = 'none';
        return false; // Adicionando retorno booleano
    }
}

/* --------------- Senha --------------- */

let passLoginInput = document.getElementById("pass-login-input");
let passLoginError = document.getElementById("pass-login-error");
let emptyPassError = document.getElementById("empty-pass-login");
let passLoginRegex = /^(?=.*[A-Z])(?=.*['"~^!?@#$%&£¢§=*()+\|/_,;:<>\-\.])(?=.*[0-9])(?=.*[a-z]).{8,30}$/;


function checkerPassLogin() {
    let icon6 = document.getElementById("icon6");
    icon6.style.display="inline-block";
    if(passLoginInput.value.match(passLoginRegex)){
        icon6.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        icon6.style.color = '#2ecc71';
        passLoginError.style.display = 'none';
        emptyPassError.style.display = 'none';
        return true; // Adicionando retorno booleano
    }
    else if(passLoginInput.value.length == 0){
        icon6.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon6.style.color = '#ff2851';
        passLoginError.style.display = 'none';
        emptyPassError.style.display = 'block';
        return false; // Adicionando retorno booleano
    }
    else{
        icon6.innerHTML = '<i class="ri-error-warning-line"></i>';
        icon6.style.color = '#ff2851';
        passLoginError.style.display = 'block';
        emptyPassError.style.display = 'none';
        return false; // Adicionando retorno booleano
    }
}

/* --------------- Botão --------------- */

const warningSubmitLogin = document.querySelector("#warning-submit-login");

function checkerFormLogin() {
    if (!checkerLogin() || !checkerPassLogin()) {
        warningSubmitLogin.style.display = 'block';
        setTimeout(function () { warningSubmitLogin.style.display = 'none'; }, 3000);
    }
    else{
        warningSubmitLogin.style.display = "none";
    }
    
}

/* ----------------------- LocalStorage ----------------------- */
function getUsers() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function saveUser(user) {
    let users = getUsers();
    
    // Verifica se o username, CPF ou email já existem
    const existingUser = users.find(
        (u) => u.username === user.username || u.cpf === user.cpf || u.email === user.email
    );

    if (existingUser) {
        if (existingUser.username === user.username) {
            alert("Este username já está cadastrado!");
        } else if (existingUser.cpf === user.cpf) {
            alert("Este CPF já está cadastrado!");
        } else if (existingUser.email === user.email) {
            alert("Este email já está cadastrado!");
        }
        return false;
    }

    users.push(user);
    localStorage.setItem("usuarios", JSON.stringify(users));
    return true;
}

function checkerForm() {
    if (!checkerUser() || !checkerCPF() || !checkerEmail() || !checkerPass() || !checkerVerify()) {
        warningSubmit.style.display = "block";
        setTimeout(() => (warningSubmit.style.display = "none"), 3000);
        return;
    }

    const newUser = {
        username: usernameInput.value.trim(),
        cpf: cpfInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        dataCadastro: new Date().toLocaleDateString("pt-BR")
    };

    if (saveUser(newUser)) {
        alert("Cadastro realizado com sucesso!");
        document.querySelector(".sign__up").reset();
    }
}

/* ----------------------- Logar ----------------------- */
function loginUser(username, password) {
    let users = getUsers();

    // Verifica se o username existe e a senha corresponde
    const user = users.find((u) => u.username === username);

    if (!user) {
        alert("Usuário não encontrado!");
        return false;
    }

    if (user.password !== password) {
        alert("Senha incorreta!");
        return false;
    }

    // Armazena a sessão do usuário logado
    localStorage.setItem("usuarioLogado", JSON.stringify(user));
    return true;
}

function checkerFormLogin() {
    let username = loginInput.value.trim();
    let password = passLoginInput.value.trim();

    if (!checkerLogin() || !checkerPassLogin()) {
        warningSubmitLogin.style.display = "block";
        setTimeout(() => (warningSubmitLogin.style.display = "none"), 3000);
        return;
    }

    if (loginUser(username, password)) {
        alert("Login realizado com sucesso!");
        window.location.href = "admin.html"; // Redireciona para o painel admin
    }
}

