---
V: true
S: true
M: true
conc: false
mat_comp_desc: A piece of Cured Leather
base_level: 1
cast_time: Action
dur: 8 hours
range: Touch
aoe: ""
save_attk: NA
scaling: NA
summary: Magic Armor
prepared: true
spell_eff: "`BUTTON[mage-arm, drop-mage-arm]`"
---
# [[Mage Armor]]
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

You touch a willing [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) who isn’t wearing armor. Until the spell ends, the [target’s](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) base AC becomes 13 plus its [Dexterity modifier](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Ability%20Score%20and%20Modifier). The spell ends early if the target dons armor.
### Effects

Spell Effects: `INPUT[text:spell_eff]`

