function toggleResetPswd(e) {
    e.preventDefault();
    $("#logreg-forms .form-signin").toggle(); // display:block or none
    $("#logreg-forms .form-reset").toggle(); // display:block or none
}

function toggleSignUp(e) {
    e.preventDefault();
    $("#logreg-forms .form-signin").toggle(); // display:block or none
    $("#logreg-forms .form-signup").toggle(); // display:block or none
}

function toggleLogin(e) {
    e.preventDefault();
    $("#logreg-forms .form-signup").toggle(); // display:block or none
    $("#logreg-forms .form-signin").toggle(); // display:block or none
}

$(() => {
    // Login Register Form
    $("#logreg-forms #forgot_pswd").click(toggleResetPswd);
    $("#logreg-forms #cancel_reset").click(toggleResetPswd);
    $("#logreg-forms #btn-signup").click(toggleSignUp);
    $("#logreg-forms #cancel_signup").click(toggleSignUp);
    $("#logreg-forms #btn-login").click(toggleLogin);
    $("#logreg-forms #cancel_login").click(toggleLogin);
    // $("#logreg-forms #btn-signup").click(toggleSignUp);
    // $("#logreg-forms #cancel_signup").click(toggleSignUp);
});