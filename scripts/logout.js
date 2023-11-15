function sair() {
    localStorage.removeItem('autenticado');
    window.location.href = 'index.html';
}

function redirecionar(element) {
    const href = element.getAttribute('data-href');
    if (href) {
        window.location.href = href;
    }
}

function redirecionarSelect() {
    const selectOpcoes = document.getElementById('selectOpcoes');
    const selectedOption = selectOpcoes.options[selectOpcoes.selectedIndex];
    if (selectedOption.value) {
        window.location.href = selectedOption.value;
    }
}
