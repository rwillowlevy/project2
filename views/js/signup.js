$(document).ready(function() {
    //getting HTML elements from signup.html
    let signUpForm = $("#signup-form");
    let emailInput = $("#email");
    let usernameInput = $("#username");
    let passwordInput = $("#password");

        //validates fields are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        let userData = {
        email: emailInput.val().trim(),
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
        };

        console.log(userData)

        if (!userData.email || !userData.username || !userData.password) {
        return;
        }

        //signs up user and clears form
        signUpUser(userData.email, userData.username, userData.password);
        emailInput.val("");
        usernameInput.val("");
        passwordInput.val("");
    });

    //post to user/signup route and redirect to member page
    function signUpUser(email, username, password) {
        $.post("/user/signup", {
        email: email,
        username: username,
        password: password
        })
        .then(function() {
            window.location.replace("/members");
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
