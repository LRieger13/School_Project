/// MODAL
document.getElementById("button").addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector(".close").addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});


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
} // end function

// message box
function resultMsg(s) {
    let result = document.querySelector('.result'); // selects div
    //reset to blank
    result.innerHTML = s;

} // end function


/// NAV
