const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// esto acitva la ventana
registerLink.onclick = () => {
    wrapper.classList.add('active');
};

// esto la desativa
loginLink.onclick = () => {
    wrapper.classList.remove('active');
};
