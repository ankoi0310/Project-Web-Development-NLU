let modal$ = $("#login");

// Show/hide modal login
$("#btnLogin").on('click', () => modal$.show());
$(".close").first().on('click', () => modal$.hide());
$(window).on('click', (e) => {
    if ($(e.target).is(modal$)) modal$.hide();
})

// Hover facebook/google button
let signinFacebook$ = $("#signin-facebook");
let signinGoogle$ = $("#signin-google");
signinFacebook$.hover(function () {
    if (signinFacebook$.outerWidth() !== 395) {
        signinGoogle$.outerWidth(35);
        signinGoogle$.html('<i class="fab fa-google"></i>');
        signinFacebook$.outerWidth(395);
        let html = signinFacebook$.html() + ' Sign in with Facebook';
        setTimeout(() => signinFacebook$.html(html), 700);
    }
});
signinGoogle$.hover(function () {
    if (signinGoogle$.outerWidth() !== 395) {
        signinFacebook$.outerWidth(35);
        signinFacebook$.html('<i class="fab fa-facebook-f"></i>');
        signinGoogle$.outerWidth(395);
        let html = 'Sign in with Google ' + signinGoogle$.html();
        setTimeout(() => signinGoogle$.html(html), 700);
    }
});

// Show/hide password
let show$ = $("#show");
let inputPassword$ = $("#password");

show$.on('click', () => {
    if (show$.hasClass("fa-eye")) {
        show$.removeClass("fa-eye");
        show$.addClass("fa-eye-slash");
        inputPassword$.attr("type","password");
    } else {
        show$.addClass("fa-eye");
        show$.removeClass("fa-eye-slash");
        inputPassword$.attr("type","text");
    }
});