//SHOW / HIDE PASSWORD VISIBILITY
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const toggleSetPassword = document.querySelector('#toggleSetPassword');
const setPassword = document.querySelector('#setPassword');

toggleSetPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = setPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    setPassword.setAttribute('type', type);

    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);

    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

//SHOW/HIDE PASSWORD END


//COMPARE AND VALIDATE PASSWORD
var password1 = document.getElementById("password")
  , password2 = document.getElementById("confirmPassword");

function validatePassword(){
  if(password1.value != password2.value) {
    password2.setCustomValidity("Passwords Don't Match");
  } else {
    password2.setCustomValidity('');
  }
}

password1.onchange = validatePassword;
password2.onkeyup = validatePassword;
//END OF COMPARE AND VALIDATE PASSWORD
