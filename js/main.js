const contentPage = document.querySelectorAll('#news')

contentPage.forEach( element => {
    let titulo = element.children['noticia'].children['title'];
    let image = element.children['noticia'].children['image'];
    let author = element.children['noticia'].children['author'];
    let description = element.children['noticia'].children['description'];
    let content = element.children['noticia'].children['content'];
    let url = element.children['noticia']
    pegaNoticia(titulo, image, author, description, content, url)

})

async function pegaNoticia(titulo, image, author, description, content, url) {
    try {
        const noticia = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ae7da9b241b4dc4a4e1e901ac5931a0');
        const noticiaJson = await noticia.json();
            titulo.innerHTML = noticiaJson.articles[1].title
            image.src = noticiaJson.articles[1].urlToImage
            author.innerHTML = noticiaJson.articles[1].author
            description.innerHTML = noticiaJson.articles[1].description
            content.innerHTML = noticiaJson.articles[1].content
            url.href = noticiaJson.articles[1].url
    } catch (erro) {
        console.log(erro)
    }
}