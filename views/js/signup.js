$(document).ready(function() {
    //getting HTML elements from signup.html
    let signUpForm = $("#signup-form");
    let usernameInput = $("#username");
    let passwordInput = $("#password");

        //validates fields are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        let userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
        return;
        }

        //signs up user and clears form
        signUpUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    //post to user/signup route and redirect to member page
    function signUpUser(username, password) {
        $.post("/user/signup", {
        username: username,
        password: password
        })
        .then(function() {
            window.location.replace("/members");
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});
