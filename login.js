document.addEventListener('DOMContentLoaded', function () {
    const senhaInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    
    if (loginButton) {
        loginButton.addEventListener('click',function(){
            const senha = senhaInput.value;

            if (senha === 'SENHA') {
                // Redireciona para a página index2.html após o login bem-sucedido
                window.location.href = 'index2.html';
            } else {
                alert('Senha incorreta. Tente novamente.');
            }
        });
    }
})
    
/*document.addEventListener('DOMContentLoaded', function () {
    const senhaInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const senha = senhaInput.value;

        // Verifica se a senha é a pré-estabelecida
        if (senha === 'SENHA') {
            // Armazena um indicador de login bem-sucedido na sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');

            // Redireciona para a página index2.html após o login bem-sucedido
            window.location.href = 'index2.html';
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });*/

    