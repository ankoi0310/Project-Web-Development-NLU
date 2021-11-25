let modal$ = $("#signup");

// Show/hide modal login
$("#btnRegistration").on('click', () => modal$.addClass('show'));
$(".close").first().on('click', () => modal$.removeClass('show'));
$(window).on('click', (e) => {
    if ($(e.target).is(modal$)) modal$.removeClass('show');
})

// Hover facebook/google button
let signupFacebook$ = $("#signup-facebook");
let signupGoogle$ = $("#signup-google");
signupFacebook$.hover(function () {
    if (signupFacebook$.outerWidth() !== 395) {
        signupGoogle$.outerWidth(35);
        signupGoogle$.html('<i class="fab fa-google"></i>');
        signupFacebook$.outerWidth(395);
        let html = signupFacebook$.html() + ' Sign up with Facebook';
        setTimeout(() => signupFacebook$.html(html), 700);
    }
});
signupGoogle$.hover(function () {
    if (signupGoogle$.outerWidth() !== 395) {
        signupFacebook$.outerWidth(35);
        signupFacebook$.html('<i class="fab fa-facebook-f"></i>');
        signupGoogle$.outerWidth(395);
        let html = 'Sign up with Google ' + signupGoogle$.html();
        setTimeout(() => signupGoogle$.html(html), 700);
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