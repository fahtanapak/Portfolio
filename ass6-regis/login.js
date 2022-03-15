window.onload = loginLoad;
function loginLoad(){
	let success = document.getElementById('myLogin');
    success.onsubmit = checkLogin;
}
function checkLogin(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

	let name = document.getElementById('usernamelog').value;
    let pass = document.getElementById('passlog').value;
	if(password==pass &&  name==username)
    {
        alert('Success')
        return false;
    }
    else{
        alert('Invalid Password')
        return false;
    }
}

			