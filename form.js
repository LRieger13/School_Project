// LOGO
// make contact logo bounce in for animation
$(document).ready(function() {
    window.onload = function() {$('#logo').delay(500).fadeIn(2000);};
});


// VALIDATE FORM
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // validation for name field
    if (name == "" || name == null) {
        resultsMsg("We need your name."); // validation for empty field
    } else {
        if (email == "" || email == null) {
            resultsMsg("Please enter a email");
        } else {
            if (!getContact()) {
                resultsMsg("Select a type of communication.");
            } else {
                resultsMsg("Success " + name + "! Your " + getContact() + " was submitted!");
            }
        }

    }  // end if
}  // end function

// button group function
function getContact() {
    let isChecked = false; // assuming no button is checked
    let theSelection;
    let skills = document.getElementsByName("radio"); // returns array
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {  // checks if attribute is true
            isChecked = true;
            theSelection = skills[i].value;
            break; // leave loop; only 1 can be checked.
        } // end if
    } // end loop
    if (isChecked) {
        return theSelection;
    } else {
        return false;
    } // end else
} // end function

// message box
function resultsMsg(s) {
    let resultsBox = document.getElementById("results"); // selects div
    //reset to blank
    resultsBox.innerHTML = s;

} // end function




