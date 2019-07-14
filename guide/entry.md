---
layout: page
title: Intro to Gunbreaker
last_update: 2019-06-30 00:00:00
game_version: 5.0
toc: false
---

<img src="https://slander-man.github.io/gunbreaking/assets/img/guide/intro_banner.png" />

So you unlocked Gunbreaker -- now what? This page should serve as a helpful resource if you have never played the job before, if you're new to tanking, or even if you're new to FFXIV. If you want to read a guide with more in-depth information, please check out the other pages on this site.


## Terminology & game concepts

The following guide will contain some terminology that may be unfamiliar to those new to Gunbreaker or FFXIV in general. This section will bring you up to speed on certain concepts and terms that are ubiquitous in job guides.

1. <span class="highlight-red">GCD</span> - this acronym means Global Cooldown, and refers to the (default 2.50 seconds) cooldown that all weaponskills and spells share. While these are 'cooling down', you cannot use other skills affected by the GCD.
2. <span class="highlight-red">oGCD</span> - related to above, the off-GCD abilities are those that do not incur the global cooldown, and may be used at any time. However, there exists an 'animation lock' for each ability that limits you to at most 2 oGCD abilities during a single GCD time.
3. <span class="highlight-red">oGCD weaving</span> - the act of casting oGCD abilities between GCD weaponskills. 'Single weaving' refers to one oGCD action, and 'double weaving' refers to two oGCD actions.
4. <span class="highlight-red">Combo</span> - A series of 2+ weaponskills that must be used sequentially for additional potency or effects. The Gunbreaker weaponskill combos are listed below in the basic abilities section.
5. <span class="highlight-red">Enmity</span> - called 'threat' or 'aggro' in other MMOs, enmity decides who a target will attack with their basic attacks. Tanks have increased enmity generation, allowing them to keep a hold of targets over the DPS and healers.
6. <span class="highlight-red">Area of effect (AOE) damage</span> - damage that hits multiple targets or all targets in an area.
7. <span class="highlight-red">Single target (ST) damage</span> - damage that hits a primary target and no others.




## Abilities: the very basics

Gunbreaker has 29 total abilities and an additional 7 tank role actions. The central theme to the Gunbreaker's toolkit is the generation and spending of <span class="highlight-red">Cartridges</span>. Correctly executing {{site.data.spell.solid_barrel}} and {{site.data.spell.demon_slaughter}} in their respective combos generates a <span class="highlight-red">Cartridge</span>, which can be spent on {{site.data.spell.gnashing_fang}}, {{site.data.spell.burst_strike}}, or {{site.data.spell.fated_circle}}.

### Learning your combos

Basic single target combo:

1. {{site.data.spell.keen_edge}}
2. {{site.data.spell.brutal_shell}}
3. {{site.data.spell.solid_barrel}}

+1 <span class="highlight-red">Cartridge</span> generated!

Basic multiple target combo:

1. {{site.data.spell.demon_slice}}
2. {{site.data.spell.demon_slaughter}}

+1 <span class="highlight-red">Cartridge</span> generated!

Once you have generated a <span class="highlight-red">Cartridge</span>, it can be spent on one of the following:

- {{site.data.spell.gnashing_fang}} (ST) or
- {{site.data.spell.burst_strike}} (ST) or
- {{site.data.spell.fated_circle}} (AOE)

You'll note that {{site.data.spell.gnashing_fang}} has a cooldown and {{site.data.spell.burst_strike}} does not. This is because {{site.data.spell.gnashing_fang}} allows for the execution of your highest damaging combo:

1. {{site.data.spell.gnashing_fang}}
2. {{site.data.spell.savage_claw}}
3. {{site.data.spell.wicked_talon}}

Totalled together, this combo is (450 + 550 + 650) = 1,650 potency over 3 GCDs. It is critically important to use this {{site.data.spell.gnashing_fang}} combo as soon as it is available, and you should save  a <span class="highlight-red">Cartridge</span> for it coming off cooldown.

This combo gains some additional complexity once you reach level 70 and unlock {{site.data.spell.continuation}}. In simple terms, this adds an off-GCD after every step of the combo, turning the three steps above to:

1. {{site.data.spell.gnashing_fang}}
    - {{site.data.spell.jugular_rip}}
2. {{site.data.spell.savage_claw}}
    - {{site.data.spell.abdomen_tear}}
3. {{site.data.spell.wicked_talon}}
    - {{site.data.spell.eye_gouge}}

### Making use of your defensive arsenal

As a tank, it's important you are aware of the wide range of defensive abilities you have at your disposal. Tanks are mainly worried about two modes of damage in FFXIV: auto-attacks (when the boss punches you), and 'tank busters' (often associated with the boss casting an ability). Knowing when to use your defensive cooldowns is very important, and effective use of these will make you feel much bulkier.





## Advanced ability information


### Opener

An opener is a rigid order and timing of your abilities at the very start of a fight. These are designed to line up the highest damage parts of your rotation with your buffs and the buffs your party members provide. These may deviate slightly depending on group composition and fight, but it is generally a good idea to learn your job's opener so you can execute it from memory alone.


Double weave, standard opener

1. {{site.data.spell.lightning_shot}}
2. {{site.data.spell.keen_edge}}
3. {{site.data.spell.brutal_shell}}
    - Potion
4. {{site.data.spell.solid_barrel}}
5. {{site.data.spell.keen_edge}}
    - {{site.data.spell.no_mercy}} (cast NM in the last 1/3rd of your GCD)
7. {{site.data.spell.gnashing_fang}}
    - {{site.data.spell.bloodfest}}
    - {{site.data.spell.jugular_rip}}
8. {{site.data.spell.sonic_break}}
    - {{site.data.spell.bow_shock}}
    - {{site.data.spell.blasting_zone}}
9. {{site.data.spell.savage_claw}}
    - {{site.data.spell.rough_divide}}
    - {{site.data.spell.abdomen_tear}}
10. {{site.data.spell.wicked_talon}} 
    - {{site.data.spell.rough_divide}}
    - {{site.data.spell.eye_gouge}}
11. {{site.data.spell.brutal_shell}}
12. {{site.data.spell.burst_strike}}
13. {{site.data.spell.burst_strike}}
14. {{site.data.spell.solid_barrel}}
15. {{site.data.spell.burst_strike}}
16. Continue


Single weave opener

1. {{site.data.spell.lightning_shot}}
2. {{site.data.spell.keen_edge}}
3. {{site.data.spell.brutal_shell}}
    - Potion
4. {{site.data.spell.solid_barrel}}
    - {{site.data.spell.rough_divide}}
5. {{site.data.spell.keen_edge}}
    - {{site.data.spell.no_mercy}} (cast NM in the last 1/3rd of your GCD)
7. {{site.data.spell.gnashing_fang}}
    - {{site.data.spell.jugular_rip}}
8. {{site.data.spell.sonic_break}}
    - {{site.data.spell.blasting_zone}}
9. {{site.data.spell.savage_claw}}
    - {{site.data.spell.abdomen_tear}}
10. {{site.data.spell.wicked_talon}} 
    - {{site.data.spell.eye_gouge}}
11. {{site.data.spell.brutal_shell}}
    - {{site.data.spell.bloodfest}}
12. {{site.data.spell.burst_strike}}
    - {{site.data.spell.bow_shock}}
13. {{site.data.spell.burst_strike}}
    - {{site.data.spell.rough_divide}}
14. {{site.data.spell.solid_barrel}}
15. {{site.data.spell.burst_strike}}
16. Continue