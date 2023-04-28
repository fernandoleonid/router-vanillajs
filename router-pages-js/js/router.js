'use strict'

const routes = {
    '/'         : "/pages/home.js",
    '/vermelho' : "/pages/vermelho.js",
    '/azul'     : "/pages/azul.js",
}

const route = () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    handleLocation()
}

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routes[path]
    const {page} = await import (route)

    console.log (page())

    document.getElementById('root').replaceChildren( page() ) 
}

window.onpopstate = handleLocation
window.route = route

handleLocation()