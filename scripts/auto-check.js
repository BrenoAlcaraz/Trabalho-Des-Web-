document.addEventListener('DOMContentLoaded', function () {
    const autenticado = localStorage.getItem('autenticado');

    if (autenticado !== 'true') {
        console.log('Usuário não autenticado. Redirecionando para index.html');
        window.location.href = 'index.html';
    }
});