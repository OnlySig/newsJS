const contentPage = document.querySelector('#news')
let noticias = []

async function pegaNoticia() {
    try {
        const noticia = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ae7da9b241b4dc4a4e1e901ac5931a0');
        noticias = await noticia.json();
        exibirNoticias(noticias.articles)
    } catch (erro) {
        console.log(erro)
    }
}

function exibirNoticias(noticias) {
    noticias.forEach(element => {
        contentPage.innerHTML += `
        <div id="news" class="artigo">
        <a id="noticia" class="info__noticia" target="_blank" href="${element.url}">
            <h1 id="title" class="info__title">${element.title}</h1>
            <img id="image" class="info__ImagemTop" src="${element.urlToImage}" alt="test">
            <h2 id="author" class="info__author">${element.author}</h2>
            <h3 id="description" class="info__description">${element.description}</h3>
            <h4 id="publishedAt" class="info__publishedAt">${element.publishedAt}</h4>
            <p id="content" class="info__content">${element.content}</p>
        </a>
    </div>
        `
    });
}

pegaNoticia()