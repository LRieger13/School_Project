/// MODAL
document.getElementById("button").addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector(".close").addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

$(':text:first').focus();

/// VALIDATE LOGIN
function login() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // validate input field
    // validation for name field
    if (name == "") {
        resultMsg("We need your name."); // validation for empty field
    } else if (email == "") {
        resultMsg("Please enter a email");
    } else {
        resultMsg("Success " + name + "! Welcome back");
    } // end if

    /// VALIDATE
    $('#form1').validate({
        rules:
        {
            name: { required: true, name: true }, // end name
            email: { required: true, email: true }, // end email
            subject: { required: true, subject: true }, // end textarea
            spam: "required"
        }, // end rules

        messages:
        {
            name: { required: "Please provide your name.", name: "What do they call you  'ol Sport?" }, // end name
            email: { required: "Please provide your email address for a reply.", email: "This is not a valid email address." }, // end email
            subject: { required: "Please provide your comment / request." } // end subject
        },

        errorPlacement: function (error, element) {
            if (element.is(':radio')) {
                error.appendTo('.result');   // append error msg to parent elmnt
            }
        } // end error
    }); // end validate

} // end function

// message box
function resultMsg(s) {
    let result = document.querySelector('.result'); // selects div
    //reset to blank
    result.innerHTML = s;

} // end function

