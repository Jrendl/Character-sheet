---
V: true
S: true
M: false
conc: false
mat_comp_desc: ""
base_level: 0
cast_time: Action
dur: Instantaneous
range: Touch
aoe: ""
save_attk: Melee
scaling: Sorcerer Level
summary: Shock Someone
damage:
  - 
  - 1d8
  - 2d8
  - 3d8
  - 4d8
prepared: true
---
# [[Shocking Grasp]]
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
**1st**: `INPUT[text:damage[1]]`
**5th**: `INPUT[text:damage[2]]`
**11th**: `INPUT[text:damage[3]]`
**17th**: `INPUT[text:damage[4]]`
## **Description**

**Summary**: `INPUT[text:summary]`
### Details

Lightning springs from you to a creature that you try to touch. Make a melee [spell attack](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Spell%20Attack) against the [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target). On a hit, the [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) takes 1d8 [Lightning damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), and it can’t make [Opportunity Attacks](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Opportunity%20Attacks) until the start of its next turn.
### Effects

The target cannot make **Opportunity Attacks** until the start of it's next trun.