let visibility_on = window.document.querySelector('#visibility_icons')
let type_password = window.document.querySelector('.password')
let theme = window.document.querySelector('#light_on')
let theme_container = window.document.querySelector('.light_container')
let body = window.document.querySelector('.body_light')

function foo_theme() {
    if (theme.innerHTML === 'light_mode') {
        theme.innerHTML = 'dark_mode'
        theme.setAttribute('id', 'dark_on')
        theme_container.setAttribute('class', 'dark_container')
        body.setAttribute('class', 'body_dark')
    } else {
        theme.innerHTML = 'light_mode'
        theme.setAttribute('id', 'light_on')
        theme_container.setAttribute('class', 'light_container')
        body.setAttribute('class', 'body_light')
    }

}

function show_password() {
    if (type_password.type === 'password') {
        type_password.type = 'text';
        visibility_on.innerHTML = 'visibility'
    } else {
        type_password.type = 'password'
        visibility_on.innerHTML = 'visibility_off'
    }
}

/* Função para armazenar os dados do usuário 
no armazenamento local do navegador: */

/* function save_user() {
    let email = document.querySelector('.name');
    let password = document.querySelector('.password');
    
    let dados = localStorage.getItem('user_data');
    
    if (dados === null) {
        localStorage.setItem('user_data', '[]');
        dados = [];
    }
    
    let auxRegistro = {
        nome: email.value,
        senha: password.value
    }
    
    dados.push(auxRegistro);
    
    localStorage.setItem('user_data', JSON.stringify(dados));
}
let dados = localStorage.getItem('user_data').value
*/

/* Função para buscar os dados do usuário 
no armazenamento local do navegador: */

/*let checkbox = window.document.querySelector('.check')
 let email = document.querySelector('.name');
let password = document.querySelector('.password');
function load_data() {
    if (checkbox.checked === true) {
        email.text = localStorage.getItem('user_data')
        password.text = localStorage.getItem('user_data')
    }
} */