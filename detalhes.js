document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o usuário está autenticado
    const autenticado = localStorage.getItem('autenticado');

    if (autenticado !== 'true') {
        // Se não estiver autenticado, redireciona para o index.html
        window.location.href = 'index.html';
    }

    
});


document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const detalhes = {
        id: urlParams.get('id'),
        altura: urlParams.get('altura'),
        nome_completo: urlParams.get('nome_completo'),
        nascimento: urlParams.get('nascimento'),
        descricao: urlParams.get('descricao'),
        imagem: urlParams.get('imagem')
    };

    if (detalhes.id) {
        console.log('Detalhes obtidos com sucesso:', detalhes);
        exibirDetalhes(detalhes);
    } else {
        console.error('ID não encontrado na URL');
    }
});

function exibirDetalhes(detalhes) {
    
    const imagemElement = document.getElementById('detalhes-imagem');
    if (detalhes && 'imagem' in detalhes && detalhes.imagem.trim() !== '') {
        imagemElement.src = detalhes.imagem;
        imagemElement.alt = 'Imagem do Atleta';
    } else {
        console.error('URL da imagem não fornecida ou está vazia nos detalhes');
        
        imagemElement.style.display = 'none';
    }

    document.getElementById('detalhes-altura').innerText = `Altura: ${detalhes.altura || 'Não disponível'}`;
    document.getElementById('detalhes-nome').innerText = `Nome: ${detalhes.nome_completo || 'Não disponível'}`;
    document.getElementById('detalhes-nascimento').innerText = `Nascimento: ${detalhes.nascimento || 'Não disponível'}`;
    document.getElementById('detalhes-descricao').innerText = `Descrição: ${detalhes.descricao || 'Não disponível'}`;
}
