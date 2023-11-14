const url = "https://botafogo-atletas.mange.li/feminino";

document.addEventListener('DOMContentLoaded', function () {
    
    const autenticado = localStorage.getItem('autenticado');

    if (autenticado !== 'true') {
        
        window.location.href = 'index.html';
    }

    
});


const redirecionarParaDetalhes = (atleta) => {
    const queryString = Object.entries(atleta)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

    window.location.href = `detalhes.html?${queryString}`;
};

const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    const imgBtnContainer = document.createElement('div');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');
    const saibaMaisBtn = document.createElement('button');

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    descricao.innerHTML = atleta.descricao;
    saibaMaisBtn.innerText = 'Saiba mais';
    saibaMaisBtn.onclick = () => redirecionarParaDetalhes(atleta);

    imgBtnContainer.appendChild(imagem);
    imgBtnContainer.appendChild(saibaMaisBtn);

    container.appendChild(titulo);
    container.appendChild(imgBtnContainer);
    container.appendChild(descricao);

    container.onclick = handleClick;
    
    divExterna.appendChild(container);
    document.body.appendChild(divExterna);
};

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;
    document.cookie = `altura=${artigo.dataset.altura}`;

    console.log(acha_cookie('nome_completo'));
};

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find((e) => e.startsWith(chave));
    return procurado.split("=")[1];
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

pegar_coisas(`${url}`).then((entrada) => {
    for (atleta of entrada) {
        preenche(atleta);
    }
});

console.log('assíncrono');
