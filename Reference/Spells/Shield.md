---
V: true
S: true
M: false
conc: false
mat_comp_desc: ""
base_level: 1
cast_time: Action
dur: 1 round
range: Self
aoe: ""
save_attk: NA
scaling: NA
summary: ""
prepared: true
spell_eff: "`BUTTON[shield, drop-shield]`"
---
# [[Shield]]
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

An imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from _[Magic Missile](https://app.roll20.net/compendium/dnd5e/Spells:Magic%20Missile?expansion=32231)_.
### Effects

Spell Effects: `INPUT[text:spell_eff]`