$(document).ready(function() {
    //getting HTML elements from contact.html
    let organizationForm = $("#contact-form");
    let emailInput = $("#email");
    let organizationNameInput = $("#organization-name");
    let websiteUrlInput = $("#website-url");
    let subjectInput = $("#subject");

    organizationForm.on("submit", function(event) {
        event.preventDefault();
        let organizationData = {
            email: emailInput.val().trim(),
            organizationName: organizationNameInput.val().trim(),
            websiteUrl: websiteUrlInput.val().trim(),
            subject: subjectInput.val().trim()
        };

        console.log(organizationData)

        //validates fields are not blank
        if (!organizationData.email || !organizationData.organizationName || !organizationData.websiteUrl || !organizationData.subject) {
        return;
        }

        //posts organization to database and clears form
        postOrganization(organizationData.email, organizationData.organizationName, organizationData.websiteUrl,organizationData.subject);
        alert("Organization data saved. Thank you for signing up!");
        emailInput.val("");
        organizationNameInput.val("");
        websiteUrlInput.val("");
        subjectInput.val("");
    });

    //post to user/signup route and redirect to member page
    function postOrganization(email, organizationName, websiteUrl, subject) {
        $.post("/organization/submit", {
            email: email,
            organizationName: organizationName,
            websiteUrl: websiteUrl,
            subject: subject
        })
        .then(function() {
            window.location.replace("/members");
        })
        .catch(handleSubmitErr);
    }
  
    function handleSubmitErr(err) {
      $("#alert.msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});
