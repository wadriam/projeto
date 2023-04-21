function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //    if(html.classList.contains('light')){
    //       html.classList.remove('light')
    //   } else {
    //       html.classList.add('light')
    //   }

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', 'midia/avatar-light.png')
    } else {
    // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', 'midia/Avatar.png')
    }

    const alt = document.querySelector("#profile img alt")

    if(html.classList.contains('light')) {
        alt.setAttribute('alt', 'Wadriam de Oliveira com celular na mão')
    } else {
        alt.setAttribute('alt', 'Wadriam de Oliveira, meio de lado e camisa preta com a cara seria')
    }
}