---
layout: highcharts_page
title: Azerite Traits
last_update: 2019-01-30 09:00:00
game_version: 8.1.0 Battle for Azeroth
toc: true
---

The following charts show the value of specific Azerite traits in single target and AoE situations.
The "Item Level" charts show how a single point of a trait scales at different item levels, and
the "Stacked" charts show how traits scale with multiple points. Understand that simming your own gear
is the best option for determining what item to equip, and which traits to enable.

Data was generated by [bloodmallet.com](https://bloodmallet.com).

## Trait stacking
Note that these charts show the value of traits at 385 item level, the base for Mythic Uldir loot. This serves as a decent reference for the value of stacking traits.

<div id="bloodmallet_azerite_traits_stacking_patchwerk" class="bloodmallet_chart" data-wow-class="shaman" data-type="azerite_traits_stacking" data-wow-spec="elemental" data-background-color="#222" data-font-color="#eee">Loading...</div>

<div id="bloodmallet_azerite_traits_stacking_hecticaddcleave" class="bloodmallet_chart" data-wow-class="shaman" data-type="azerite_traits_stacking" data-wow-spec="elemental" data-fight-style="hecticaddcleave" data-background-color="#222" data-font-color="#eee">Loading...</div>

## Item-level scaling

<div id="bloodmallet_azerite_traits_itemlevel_patchwerk" class="bloodmallet_chart" data-wow-class="shaman"  data-type="azerite_traits_itemlevel" data-wow-spec="elemental" data-background-color="#222" data-font-color="#eee">Loading...</div>

<div id="bloodmallet_azerite_traits_itemlevel_hecticaddcleave" class="bloodmallet_chart" data-wow-class="shaman" data-type="azerite_traits_itemlevel" data-wow-spec="elemental" data-fight-style="hecticaddcleave" data-background-color="#222" data-font-color="#eee">Loading...</div>


## Special mentions

### Ancestral Resonance
This no longer requires you to personally cast {{ site.data.spell.bloodlust }} to
activate the trait. The duration of these effects is increased by 25% regardless.

## Dagger in the Back
You won't hit all targets from behind all the time. So simulation values are
usually overvalueing this trait. Dodge it.

### Echo of the Elementals
It's dead! Dodge it like the plague.

### Igneous Potential
Stacking this trait increases the damage component, but you only gain the increased
{{site.data.spell.lava_surge}} chance of the first trait.
This does not nullify the trait's value after the first point, but it does come at a
slight cost thanks to the {{site.data.spell.lava_surge}}'s non-scaling.
A great option for Maelstrom generation and movement.

### Lava Shock
With increased value in two-target cleave, this trait could see some use
if a fight calls for sustained two-target cleave or spread target damage.

### Natural Harmony
This trait is not utilized to the fullest by our standard spells, because we usually don't use {{ site.data.spell.frs }}.
If you somehow end up with this trait twice, you can actually use {{ site.data.spell.frs }} to keep that buff up and be dps neutral to not using the buff.
This has the advantage of additional movement globals / stutter stepping. Having the trait 2-3 times pushes {{ site.data.talent.eb }} a lot, but probably not enough to overtake the best talent combination. But sim to make sure for your character.

### Tectonic Thunder
Pure AoE trait, that enables occasional {{ site.data.spell.cl }} instant casts. Additionally stacking this trait can push {{ site.data.spell.eq }} damage to the level of or slightly higher than {{ site.data.spell.es }} on single target. While this is not a wise choice to do so (because other traits are actual gains on single target and thus preferrable), it could reincarnate the {{ site.data.spell.eq }} on single target meme from Tomb of Sargeras.


## Azerite Items
Read the [gear]({{ site.baseurl }}{% link guide/general/gear.md %}) page in this guide.