---
V: false
S: true
M: false
conc: false
mat_comp_desc: ""
base_level: 3
cast_time: Reaction
dur: Instantaneous
range: 60 ft
aoe: ""
save_attk: CON
scaling: NA
summary: NO
prepared: true
---
# [[Counterspell]]
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


## **Description**

**Summary**: `INPUT[text:summary]`
### Details

You attempt to interrupt a [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) in the process of casting a [spell](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Spell). The [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) makes a [Constitution saving throw](https://roll20.net/compendium/dnd5e/Rules:D20%20Tests?expansion=32231#Saving%20Throws). On a failed [save](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Save), the spell dissipates with no effect, and the [action](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Action), [Bonus Action](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Bonus%20Action), or [Reaction](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Reaction) used to cast it is wasted. If that spell was cast with a spell slot, the slot isn’t expended.
### Effects