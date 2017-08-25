var sub = document.getElementById('submit');

sub.onclick = function () {
    var textName = document.getElementById('username').value;
    var textPass = document.getElementById('pswrd').value;

    localStorage.setItem('Users name', textName);
    localStorage.setItem('Password', textPass);
}


