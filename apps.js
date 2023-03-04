const myform = document.getElementById('form');
let first_password = document.getElementById('password');
let reenter_password = document.getElementById('confirmpw');
let missMatch = document.getElementById('missmatch');
let rules = document.getElementById('passRules');


function comparePasswords() {
    if(first_password.value != reenter_password.value) {
        reenter_password.setCustomValidity("Passwords do not match");
        missMatch.textContent = "Passwords must match. Please re-enter."
    }
    else {
        reenter_password.setCustomValidity("");
        missMatch.textContent = "";
    } 
}

function validPattern() {
    if(first_password.value.length < 5) {
        rules.textContent = "Password must be at least 5 characters in length."
    }
}

function filled() {
    this.classList.add('complete');
}
document.querySelectorAll('input').forEach((e) => {
        e.addEventListener('keydown', filled, false)
    })


first_password.onchange = validPattern;
reenter_password.onchange = comparePasswords;
