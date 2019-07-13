const template = document.getElementById('tooltip_template')
const container = document.createElement('div')
container.appendChild(document.importNode(template.content, true))

tippy('.keen_edge_tt', {
    content: container.innerHTML,
    placement: 'top-start',
    arrow: true,
    arrowType: 'round',
    animation: 'fade',
    interactive: true,
})

tippy('.keen_edge_tt', {
    content(reference) {
        const id = reference.getAttribute('data-template')
        const container = document.createElement('div')
        const linkedTemplate = document.getElementById(id)
        const node = document.importNode(linkedTemplate.content, true)
        console.log(id, container, linkedTemplate, node)
        var spell_name = node.children[0].children[0]
        var spell_cast = node.children[0].children[2]
        var spell_cd = node.children[0].children[3]
        var spell_desc = node.children[0].children[5]
        console.log(spell_name, spell_cast, spell_cd, spell_desc)
        spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Keen_Edge" target="blank" class="spell_link keen_edge">Keen Edge</a>'
        spell_desc.innerHTML = `Delivers an attack with a potency of 100.
        <br><span style='color:greenyellow'>Combo Action:</span> <span style='color:orange'>Keen Edge</span>
        <br><span style='color:greenyellow'>Combo Potency:</span> 300
        <br><span style='color:greenyellow'>Combo Bonus:</span> Restores own HP
        <br><span style='color:greenyellow'>Cure Potency:</span> 150
        <br><span style='color:greenyellow'>Combo Bonus:</span> Creates a barrier which nullifies damage equaling HP restored
        <br><span style='color:greenyellow'>Duration:</span> 10s<br>`
        container.appendChild(node)
        return container
    }
})

tippy('.brutal_shell_tt', {
    content(reference) {
        const id = reference.getAttribute('data-template')
        const container = document.createElement('div')
        const linkedTemplate = document.getElementById(id)
        const node = document.importNode(linkedTemplate.content, true)
        console.log(id, container, linkedTemplate, node)
        var spell_name = node.children[0].children[0]
        var spell_cast = node.children[0].children[2]
        var spell_cd = node.children[0].children[3]
        var spell_desc = node.children[0].children[5]
        console.log(spell_name, spell_cast, spell_cd, spell_desc)
        spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Brutal_Shell" target="blank" class="spell_link brutal_shell">Brutal Shell</a>'
        spell_desc.innerHTML = `Delivers an attack with a potency of 100.
        <br><span style='color:greenyellow'>Combo Action:</span> <span style='color:orange'>Keen Edge</span>
        <br><span style='color:greenyellow'>Combo Potency:</span> 300
        <br><span style='color:greenyellow'>Combo Bonus:</span> Restores own HP
        <br><span style='color:greenyellow'>Cure Potency:</span> 150
        <br><span style='color:greenyellow'>Combo Bonus:</span> Creates a barrier which nullifies damage equaling HP restored
        <br><span style='color:greenyellow'>Duration:</span> 10s<br>`
        container.appendChild(node)
        return container
    }
})

tippy('.solid_barrel_tt', {
    content(reference) {
        const id = reference.getAttribute('data-template')
        const container = document.createElement('div')
        const linkedTemplate = document.getElementById(id)
        const node = document.importNode(linkedTemplate.content, true)
        console.log(id, container, linkedTemplate, node)
        var spell_name = node.children[0].children[0]
        var spell_cast = node.children[0].children[2]
        var spell_cd = node.children[0].children[3]
        var spell_desc = node.children[0].children[5]
        console.log(spell_name, spell_cast, spell_cd, spell_desc)
        spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Solid_Barrel" target="blank" class="spell_link solid_barrel">Solid Barrel</a>'
        spell_desc.innerHTML = `Delivers an attack with a potency of 100.
        <br><span style='color:greenyellow'>Combo Action:</span> <span style='color:orange'>Brutal Shell</span>
        <br><span style='color:greenyellow'>Combo Potency:</span> 400
        <br><span style='color:greenyellow'>Combo Bonus:</span> Adds a <span style='color:yellow'>Cartridge</span> to your <span style='color:orange'>Powder Gauge</span>`
        container.appendChild(node)
        return container
    }
})