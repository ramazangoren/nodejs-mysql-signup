const nameAndlastname = document.getElementById('nameAndlastname');
const username = document.getElementById('username');
const errfornameLastname = document.getElementById('errfornameLastname');
const errforusername = document.getElementById('errforusername');

const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const errforemail = document.getElementById('errforemail');
const errforPass = document.getElementById('errforPass');
const errforPass1 = document.getElementById('errforPass1');

const signupForm =  document.getElementById('signup-form');




signupForm.addEventListener('submit', function (e) {

    e.preventDefault();
    
    // for name and last name
    if (nameAndlastname.value === "") {
        errfornameLastname.innerHTML = 'please enter your name and lastname';
        errfornameLastname.classList.add('login-error')
        nameAndlastname.classList.add('login-error-input')
    }

    else {
        errfornameLastname.classList.remove('login-error')
        nameAndlastname.classList.remove('login-error-input')
    }

    // for user name
    if (username.value === "") {
        errforusername.innerHTML = 'please provide a  username';
        errforusername.classList.add('login-error')
        username.classList.add('login-error-input')
    }

    else {
        errforusername.classList.remove('login-error')
        username.classList.remove('login-error-input')
    }






    // for email
    let emailList = !email.value.includes('@gmail.com') && !email.value.includes('@facebook.com');
    if (email.value === "") {
        errforemail.innerHTML = 'please enter your email';
        errforemail.classList.add('login-error')
        email.classList.add('login-error-input')
    }

    else if (emailList) {
        errforemail.innerHTML = 'please enter proper email';
        errforemail.classList.add('login-error')
        email.classList.add('login-error-input')
    }

    else {
        errforemail.classList.remove('login-error')
        email.classList.remove('login-error-input')
    }


    // for password
    if (password.value === "") {
        errforPass.innerHTML = 'please enter your password';
        errforPass.classList.add('login-error')
        password.classList.add('login-error-input')
    }
    else if(password.value.length < 8) {
        errforPass.innerHTML = ' password must be 8 characters';
    }
    else if(password.value !== password1.value) {
        errforPass1.innerHTML = 'passwords must be equal';
        errforPass1.classList.add('login-error')
        password1.classList.add('login-error-input')
    }
    else {
        errforPass.classList.remove('login-error')
        password.classList.remove('login-error-input')
        errforPass1.classList.remove('login-error')
        password1.classList.remove('login-error-input')
    }

})





