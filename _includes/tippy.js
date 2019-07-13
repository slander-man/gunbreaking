const template = document.getElementById('tippy_template')
const container = document.createElement('div')
container.appendChild(document.importNode(template.content, true))

tippy('#test_tippy', {
    content: container.innerHTML,
})