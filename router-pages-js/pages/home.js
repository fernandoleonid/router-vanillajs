export function page () {
    const container = document.createElement('div')
    container.classList.add ('home-container')

    const titulo = document.createElement('h1')
    titulo.textContent = 'home'

    container.append(titulo)

    return container
}