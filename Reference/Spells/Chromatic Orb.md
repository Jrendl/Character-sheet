---
V: true
S: true
M: true
conc: false
mat_comp_desc: "**a diamond worth 50+ GP**"
base_level: 1
cast_time: Action
dur: Instantaneous
range: 90 ft
aoe: ""
save_attk: Ranged
scaling: Spell Slot
summary: Any Damage, Bounces
damage:
  - 3d8
  - 4d8
  - 5d8
  - 6d8
  - 7d8
prepared: true
---
# [[Chromatic Orb]]
Prepared: `INPUT[toggle: prepared]`

## **Components**:
 - *V*: `INPUT[toggle:V]`
 - *S*: `INPUT[toggle:S]`
 - *M*: `INPUT[toggle:M]` `INPUT[text:mat_comp_desc]`
- *Concentration*: `INPUT[toggle:conc]`

## **Stats**
**Base Level**: `INPUT[inlineSelect(defaultValue(0), option(0, Cantrip), option(1), option(2), option(3), option(4), option(5), option(6), option(7), option(8), option(9)):base_level]`
**Casting Time**: `INPUT[inlineSelect(defaultValue(Action), option(Action), option(Bonus Action), option(Reaction)):cast_time]`
**Duration**: `INPUT[text:dur]`
**Range**: `INPUT[text:range]`
**AOE**: `INPUT[text:aoe]`
**Save/Attk**:  `INPUT[inlineSelect(defaultValue(NA),option(Melee),option(Ranged),option(STR),	option(DEX),option(CON),option(INT),option(WIS),option(CHA),option(NA)):save_attk]`

## **Damage**:
**Scaling**: `INPUT[inlineSelect(option(Sorcerer Level),	option(Spell Slot), option(NA), defaultValue(NA)):scaling]`
```meta-bind
LIST[title(damage)]
```
**1st**: `INPUT[text:damage[0]]`
**2nd**: `INPUT[text:damage[1]]`
**3rd**: `INPUT[text:damage[2]]`
**4th**: `INPUT[text:damage[3]]`
**5th**: `INPUT[text:damage[4]]`
**6th**: `INPUT[text:damage[5]]`
**7th**: `INPUT[text:damage[6]]`
**8th**: `INPUT[text:damage[7]]`
**9th**: `INPUT[text:damage[8]]`

## **Description**

**Summary**: `INPUT[text:summary]`
### Details

You hurl an orb of energy at a [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) within range. Choose [Acid](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), [Cold](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), [Fire](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), [Lightning](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), [Poison](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), or [Thunder](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types) for the type of orb you create, and then make a ranged spell attack against the [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target). On a hit, the [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) takes 3d8 damage of the chosen type.  
  
If you roll the same number on two or more of the d8s, the orb leaps to a different [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) of your choice within 30 feet of the [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target). Make an [attack roll](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Attack%20Roll) against the new [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target), and make a new [damage roll](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Roll). The orb can’t leap again unless you cast the spell with a level 2+ spell slot.
### Effects