document.addEventListener('DOMContentLoaded', function () {
    const senhaInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            const senha = senhaInput.value;

            
            const hashedSenha = md5(senha);

            
            if (hashedSenha === '85ee0fe4f155a9af2657d85054ad63ca') {
                
                window.location.href = 'index2.html';
            } else {
                alert('Senha incorreta. Tente novamente.');
            }
        });
    }
});
