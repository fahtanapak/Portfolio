window.onload = pageLoad;

function pageLoad() {
    let clickButton = document.getElementById('myForm');
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    let pass1 = document.getElementById('newpass').value;
    let pass2 = document.getElementById('re-pass').value;
    // let error = document.getElementById('errormsg').value;

    if (pass1 != pass2 ) {
        alert('Register unsuccess')
        document.getElementById('errormsg').innerHTML = "error";
        return false;
    }
    else {
        alert('Register success')
        
    }
}

