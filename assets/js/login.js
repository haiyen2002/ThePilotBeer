const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

// open register
function openRegister() {
    $('.login').removeClass('active')
    $('.register').addClass('active')
}

// open login
function openLogin() {
    $('.login').addClass('active')
    $('.register').removeClass('active')
}

// login
$('#loginForm').on('submit',(e) => {
    e.preventDefault();
    const {email, password } = JSON.parse(localStorage.getItem('account'))
    $('#email').val() === email && $('#password').val() === password ? loginSuccess() : fail();

    function loginSuccess() {
        localStorage.setItem('logged',JSON.stringify({email, password}))
        window.location.href='../../index.html'
    }
})

// sign up
$('#signupForm').on('submit',(e) => {
    e.preventDefault();
    let email = $('#email-input').val();
    let password = $('#password-input').val();
    let name = $('#name').val();
    let avatar = $('#avatar').val();
    let account = {
        email,
        password,
        avatar,
        name
    }

    localStorage.setItem('account',JSON.stringify(account))
    success();
    $('#email-input').val('');
    $('#password-input').val('');
    $('#name').val('');
    $('#avatar').val('');
})

function success() {  
    // Add the "show" class to DIV
    $('#success').addClass('show');
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ $('#success').removeClass('show'); }, 3000);
}

function fail(){
     // Add the "show" class to DIV
     $('#fail').addClass('show');
  
     // After 3 seconds, remove the show class from DIV
     setTimeout(function(){ $('#fail').removeClass('show'); }, 3000);
}

// preview avatar
$('#avatar').on('change', (e) => {
    $('.preview-avatar img').attr('src', e.target.value)
})