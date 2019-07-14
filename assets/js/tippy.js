window.addEventListener('DOMContentLoaded', (event) => {
    tippy('.keen_edge_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Keen_Edge" target="blank" class="spell_link keen_edge">Keen Edge</a>'
            spell_desc.innerHTML = `Delivers an attack with a potency of 100.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.no_mercy_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/No_Mercy" target="blank" class="spell_link no_mercy">No Mercy</a>'
            spell_cd.innerHTML = 'Recast: 60.00s'
            spell_desc.innerHTML = `Increases damage dealt by 20%.
            <br><span style='color:greenyellow'>Duration:</span> 20s`
            container.appendChild(node)
            return container
        }
    })
    
    tippy('.brutal_shell_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
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

    tippy('.camouflage_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Camouflage" target="blank" class="spell_link camouflage">Camouflage</a>'
            spell_cd.innerHTML = 'Recast: 90.00s'
            spell_desc.innerHTML = `Increases parry rate by 50% while reducing damage taken by 10%.
            <br><span style='color:greenyellow'>Duration:</span> 20s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.demon_slice_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Demon_Slice" target="blank" class="spell_link demon_slice">Demon_Slice</a>'
            spell_desc.innerHTML = `Delivers an attack with a potency of 150 to all nearby enemies.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.royal_guard_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Royal_Guard" target="blank" class="spell_link royal_guard">Royal Guard</a>'
            spell_cd.innerHTML = 'Recast: 10.00s'
            spell_desc.innerHTML = `Significantly increases enmity generation.<br>
            Effect ends upon reuse.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.lightning_shot_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Lightning_Shot" target="blank" class="spell_link lightning_shot">Lightning Shot</a>'
            spell_cd.innerHTML = 'Recast: (GCD)'
            spell_desc.innerHTML = `Delivers a ranged attack with a potency of 150.
            <br><span style='color:greenyellow'>Additional effect:</span> Increased enmity`
            container.appendChild(node)
            return container
        }
    })

    tippy('.danger_zone_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Danger_Zone" target="blank" class="spell_link danger_zone">Danger Zone</a>'
            spell_cd.innerHTML = 'Recast: 30.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 350.`
            container.appendChild(node)
            return container
        }
    })
    
    tippy('.solid_barrel_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Solid_Barrel" target="blank" class="spell_link solid_barrel">Solid Barrel</a>'
            spell_desc.innerHTML = `Delivers an attack with a potency of 100.
            <br><span style='color:greenyellow'>Combo Action:</span> <span style='color:orange'>Brutal Shell</span>
            <br><span style='color:greenyellow'>Combo Potency:</span> 400
            <br><span style='color:greenyellow'>Combo Bonus:</span> Adds a <span style='color:yellow'>Cartridge</span> to your <span style='color:orange'>Powder Gauge</span>`
            container.appendChild(node)
            return container
        }
    })

    tippy('.burst_strike_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Burst_Strike" target="blank" class="spell_link burst_strike">Burst Strike</a>'
            spell_cd.innerHTML = 'Recast: (GCD)'
            spell_desc.innerHTML = `Delivers an attack with a potency of 500.
            <br><span style='color:greenyellow'>Cartridge Cost:</span> 1`
            container.appendChild(node)
            return container
        }
    })

    tippy('.nebula_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Nebula" target="blank" class="spell_link nebula">Nebula</a>'
            spell_cd.innerHTML = 'Recast: 120.00s'
            spell_desc.innerHTML = `Reduces damage taken by 30%.
            <br><span style='color:greenyellow'>Duration:</span> 10s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.demon_slaughter_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Demon_Slaughter" target="blank" class="spell_link demon_slaughter">Demon Slaughter</a>'
            spell_cd.innerHTML = 'Recast: (GCD)'
            spell_desc.innerHTML = `Delivers an attack with a potency of 100 to all nearby enemies.
            <br><span style='color:greenyellow'>Combo Action:</span> <span style='color:orange'>Demon Slice</span>
            <br><span style='color:greenyellow'>Combo Potency:</span> 250
            <br><span style='color:greenyellow'>Combo Bonus:</span> Adds a <span style='color:yellow'>Cartridge</span> to your <span style='color:orange'>Powder Gauge</span>`
            container.appendChild(node)
            return container
        }
    })

    tippy('.aurora_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Aurora" target="blank" class="spell_link aurora">Aurora</a>'
            spell_cd.innerHTML = 'Recast: 60.00s'
            spell_desc.innerHTML = `Grants healing over time effect to target.
            <br><span style='color:greenyellow'>Cure Potency:</span> 200
            <br><span style='color:greenyellow'>Duration:</span> 18s
            <br><em><span style='color:greenyellow'>Effective Total Potency:</span> 1200 (6 ticks in 18s).</em>`
            container.appendChild(node)
            return container
        }
    })


    tippy('.superbolide_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Superbolide" target="blank" class="spell_link superbolide">Superbolide</a>'
            spell_cd.innerHTML = 'Recast: 360.00s'
            spell_desc.innerHTML = `Reduces HP to 1 and renders you impervious to most attacks.
            <br><span style='color:greenyellow'>Duration:</span> 8s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.sonic_break_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Sonic_Break" target="blank" class="spell_link sonic_break">Sonic Break</a>'
            spell_cd.innerHTML = 'Recast: ~58.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 300.
            <br><span style='color:greenyellow'>Additional Effect:</span> Damage over time
            <br><span style='color:greenyellow'>Potency:</span> 90
            <br><span style='color:greenyellow'>Duration:</span> 30s
            <br><em><span style='color:greenyellow'>Effective Total Potency:</span> 900 (10 ticks in 30s).</em>
            <br>This weaponskill does not share a recast timer with any other actions.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.rough_divide_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Rough_Divide" target="blank" class="spell_link rough_divide">Rough Divide</a>'
            spell_cd.innerHTML = 'Charge: 30.00s'
            spell_desc.innerHTML = `Delivers a jumping attack with a potency of 200.
            <br><span style='color:greenyellow'>Maximum Charges:</span> 2
            <br>Cannot be executed while bound.`
            container.appendChild(node)
            return container
        }
    })
    
    tippy('.gnashing_fang_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Gnashing_Fang" target="blank" class="spell_link gnashing_fang">Gnashing Fang</a>'
            spell_cd.innerHTML = 'Recast: ~29.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 450.
            <br><span style='color:greenyellow'>Additional Effect:</span> Grants <span style="color:yellow">Ready to Rip</span>
            <br><span style='color:greenyellow'>Duration:</span> 10s
            <br><span style='color:greenyellow'>Cartridge Cost:</span> 1
            <br>This weaponskill does not share a recast timer with any other actions.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.savage_claw_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Savage_Claw" target="blank" class="spell_link savage_claw">Savage Claw</a>'
            spell_cd.innerHTML = 'Recast: (GCD)'
            spell_desc.innerHTML = `Delivers an attack with a potency of 550.
            <br><span style='color:greenyellow'>Combo Action:</span> <span style="color:orange">Gnashing Fang</span>
            <br><span style='color:greenyellow'>Combo Bonus:</span> Grants <span style="color:yellow">Ready to Tear</span>
            <br><span style='color:greenyellow'>Duration:</span> 10s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.wicked_talon_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Wicked_Talon" target="blank" class="spell_link wicked_talon">Wicked Talon</a>'
            spell_cd.innerHTML = 'Recast: (GCD)'
            spell_desc.innerHTML = `Delivers an attack with a potency of 650.
            <br><span style='color:greenyellow'>Combo Action:</span> <span style="color:orange">Savage Claw</span>
            <br><span style='color:greenyellow'>Combo Bonus:</span> Grants <span style="color:yellow">Ready to Gouge</span>
            <br><span style='color:greenyellow'>Duration:</span> 10s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.bow_shock_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Bow_Shock" target="blank" class="spell_link bow_shock">Bow Shock</a>'
            spell_cd.innerHTML = 'Recast: 60.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 200 to all nearby enemies.
            <br><span style='color:greenyellow'>Additional Effect:</span> Damage over time
            <br><span style='color:greenyellow'>Potency:</span> 90
            <br><span style='color:greenyellow'>Duration:</span> 15s
            <br><em><span style='color:greenyellow'>Effective Total Potency:</span> 450 (5 ticks in 15s).</em>`
            container.appendChild(node)
            return container
        }
    })

    tippy('.heart_of_light_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Heart_of_Light" target="blank" class="spell_link heart_of_light">Heart of Light</a>'
            spell_cd.innerHTML = 'Recast: 90.00s'
            spell_desc.innerHTML = `Reduces magic damage taken by self and nearby party members by 10%.
            <br><span style='color:greenyellow'>Duration:</span> 15s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.heart_of_stone_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Heart_of_Stone" target="blank" class="spell_link heart_of_stone">Heart of Stone</a>'
            spell_cd.innerHTML = 'Recast: 25.00s'
            spell_desc.innerHTML = `Reduces damage taken by a party member or self by 15%.
            <br><span style='color:greenyellow'>Duration:</span> 7s
            <br><span style='color:greenyellow'>Additional Effect:</span> When targeting a party member 
            while under the effect of <span style='color:yellow'>Brutal Shell</span>, that effect is also 
            granted to the target.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.continuation_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Continuation" target="blank" class="spell_link continuation">Continuation</a>'
            spell_cd.innerHTML = 'Recast: 1.00s'
            spell_desc.innerHTML = `Allows the firing of successive rounds with your gunblade.
            <br><span style='color:orange'>Gnashing Fang</span> may be followed by <span style='color:orange'>Jugular Rip</span>
            <br><span style='color:orange'>Savage Claw</span> may be followed by <span style='color:orange'>Abdomen Tear</span>
            <br><span style='color:orange'>Wicked Talon</span> may be followed by <span style='color:orange'>Eye Gouge</span>`
            container.appendChild(node)
            return container
        }
    })

    tippy('.fated_circle_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Fated_Circle" target="blank" class="spell_link fated_circle">Fated Circle</a>'
            spell_cd.innerHTML = 'Recast: (GCD)'
            spell_desc.innerHTML = `Delivers an attack with a potency of 320 to all nearby enemies.
            <br><span style='color:greenyellow'>Cartridge Cost:</span> 1`
            container.appendChild(node)
            return container
        }
    })

    tippy('.bloodfest_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Bloodfest" target="blank" class="spell_link bloodfest">Bloodfest</a>'
            spell_cd.innerHTML = 'Recast: 90.00s'
            spell_desc.innerHTML = `Draws aetheric energy from target, adding 2 <span style='color:yellow'>Cartridges</span> 
            to your <span style='color:orange'>Powder Gauge</span>.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.blasting_zone_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Blasting_Zone" target="blank" class="spell_link blasting_zone">Blasting Zone</a>'
            spell_cd.innerHTML = 'Recast: 30.00'
            spell_desc.innerHTML = `Delivers an attack with a potency of 800.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.jugular_rip_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Jugular_Rip" target="blank" class="spell_link jugular_rip">Jugular Rip</a>'
            spell_cd.innerHTML = 'Recast: 1.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 260.
            <br>Can only be executed when <span style='color:yellow'>Ready to Rip</span>.`
            container.appendChild(node)
            return container
        }
    })
    
    tippy('.abdomen_tear_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Abdomen_Tear" target="blank" class="spell_link abdomen_tear">Abdomen Tear</a>'
            spell_cd.innerHTML = 'Recast: 1.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 280.
            <br>Can only be executed when <span style='color:yellow'>Ready to Tear</span>.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.eye_gouge_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Eye_Gouge" target="blank" class="spell_link eye_gouge">Eye Gouge</a>'
            spell_cd.innerHTML = 'Recast: 1.00s'
            spell_desc.innerHTML = `Delivers an attack with a potency of 300.
            <br>Can only be executed when <span style='color:yellow'>Ready to Gouge</span>.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.rampart_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Rampart" target="blank" class="spell_link rampart">Rampart</a>'
            spell_cd.innerHTML = 'Recast: 90.00s'
            spell_desc.innerHTML = `Reduces damage taken by 20%.
            <br><span style='color:greenyellow'>Duration:</span> 20s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.low_blow_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Rampart" target="blank" class="spell_link rampart">Rampart</a>'
            spell_cd.innerHTML = 'Recast: 25.00s'
            spell_desc.innerHTML = `Stuns target.
            <br><span style='color:greenyellow'>Duration:</span> 5s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.provoke_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Provoke" target="blank" class="spell_link provoke">Provoke</a>'
            spell_cd.innerHTML = 'Recast: 30.00s'
            spell_desc.innerHTML = `Gesture threateningly, placing yourself at the top of a
            target's enmity list while gaining additional enmity.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.interject_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Interject" target="blank" class="spell_link interject">Interject</a>'
            spell_cd.innerHTML = 'Recast: 30.00s'
            spell_desc.innerHTML = `Interrupts the use of a target's action.`
            container.appendChild(node)
            return container
        }
    })

    tippy('.reprisal_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Reprisal" target="blank" class="spell_link reprisal">Reprisal</a>'
            spell_cd.innerHTML = 'Recast: 60.00s'
            spell_desc.innerHTML = `Lowers target's damage dealt by 10%.
            <br><span style='color:greenyellow'>Duration:</span> 5s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.arms_length_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Arms_Length" target="blank" class="spell_link arms_length">Arms Length</a>'
            spell_cd.innerHTML = 'Recast: 120.00s'
            spell_desc.innerHTML = `Creates a barrier nullifying most knockback and draw-in effects.
            <br><span style='color:greenyellow'>Duration:</span> 6s
            <br><span style='color:greenyellow'>Additional Effect:</span> <span style='color:yellow'>Slow</span> 20% when barrier is struck
            <br><span style='color:greenyellow'>Duration:</span> 15s`
            container.appendChild(node)
            return container
        }
    })

    tippy('.shirk_tt', {
        arrow: true,
        arrowType: 'round',
        animation: 'fade',
        interactive: true,
        duration: 150,
        
        content(reference) {
            const id = reference.getAttribute('data-template')
            const container = document.createElement('div')
            const linkedTemplate = document.getElementById(id)
            const node = document.importNode(linkedTemplate.content, true)
            var spell_name = node.children[0].children[0]
            var spell_cast = node.children[0].children[2]
            var spell_cd = node.children[0].children[3]
            var spell_desc = node.children[0].children[5]
            spell_name.innerHTML = '<a href="https://ffxiv.gamerescape.com/wiki/Shirk" target="blank" class="spell_link shirk">Shirk</a>'
            spell_cd.innerHTML = 'Recast: 120.00s'
            spell_desc.innerHTML = `Diverts 25% of enmity to target party member.aw-in effects.`
            container.appendChild(node)
            return container
        }
    })
    
})

