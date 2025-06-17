const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const forgotForm = document.querySelector('.forgot-form');

document.querySelectorAll('.show-register').forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault();
    loginForm.classList.remove('active');
    forgotForm.classList.remove('active');
    registerForm.classList.add('active');
  })
);

document.querySelectorAll('.show-login').forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault();
    registerForm.classList.remove('active');
    forgotForm.classList.remove('active');
    loginForm.classList.add('active');
  })
);

document.querySelectorAll('.show-forgot').forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    forgotForm.classList.add('active');
  })
);
