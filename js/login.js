let modal = document.getElementById("login");
let btnLogin = document.getElementById("btnLogin");
let closeBtn = document.getElementsByClassName("close")[0];

// Show/hide modal login
btnLogin.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
}

// Hover facebook/google button
let signinFacebook = document.getElementById("signin-facebook");
let signinGoogle = document.getElementById("signin-google");
signinFacebook.onpointerenter = () => {
    if (signinFacebook.style.width !== "395px") {
        signinGoogle.style.width = "36px";
        signinGoogle.innerHTML = '<i class="fab fa-google"></i>';
        signinFacebook.style.width = "395px";
        setTimeout(() => signinFacebook.innerHTML += ' Sign in with Facebook', 500);
    }
}
signinGoogle.onpointerenter = () => {
    if (signinGoogle.style.width !== "395px") {
        signinFacebook.style.width = "36px";
        signinFacebook.innerHTML = '<i class="fab fa-facebook-f"></i>';
        signinGoogle.style.width = "395px";
        setTimeout(() => signinGoogle.innerHTML = 'Sign in with Google ' + signinGoogle.innerHTML, 500);
    }

}

// Show/hide password
let show = document.getElementById("show");
let inputPassword = document.getElementById("password");
show.onclick = () => {
    if (show.classList.contains("fa-eye")) {
        show.classList.remove("fa-eye");
        show.classList.add("fa-eye-slash");
        inputPassword.attributes.getNamedItem("type").value = "password";
    } else {
        show.classList.add("fa-eye");
        show.classList.remove("fa-eye-slash");
        inputPassword.attributes.getNamedItem("type").value = "text";
    }
}