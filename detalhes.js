document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o usuário está autenticado antes de executar a lógica da página
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Se não estiver autenticado, redireciona de volta para o index.html
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
    // Atualizei a forma de exibir a imagem, verificando se a propriedade imagem existe e não está vazia
    const imagemElement = document.getElementById('detalhes-imagem');
    if (detalhes && 'imagem' in detalhes && detalhes.imagem.trim() !== '') {
        imagemElement.src = detalhes.imagem;
        imagemElement.alt = 'Imagem do Atleta';
    } else {
        console.error('URL da imagem não fornecida ou está vazia nos detalhes');
        // Aqui você pode definir uma imagem padrão ou ocultar completamente o elemento da imagem
        imagemElement.style.display = 'none';
    }

    document.getElementById('detalhes-altura').innerText = `Altura: ${detalhes.altura || 'Não disponível'}`;
    document.getElementById('detalhes-nome').innerText = `Nome: ${detalhes.nome_completo || 'Não disponível'}`;
    document.getElementById('detalhes-nascimento').innerText = `Nascimento: ${detalhes.nascimento || 'Não disponível'}`;
    document.getElementById('detalhes-descricao').innerText = `Descrição: ${detalhes.descricao || 'Não disponível'}`;
}
