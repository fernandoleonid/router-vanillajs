export function page () {

    const container = document.createElement('div')
    container.classList.add ('azul-container')

    const titulo = document.createElement('h1')
    titulo.textContent = 'azul'

    container.append(titulo)

    return container

}