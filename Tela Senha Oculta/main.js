const senha = document.querySelector('.senha');
const btnOlho = document.querySelector('.btnOlho');

btnOlho.onclick = () => {
    if(senha.type === 'password') {
        senha.type = 'text';
        btnOlho.src = './_img/olhoOculto.png';
    } else {
        senha.type = 'password';
        btnOlho.src = './_img/olhoMostra.png';
    }
}