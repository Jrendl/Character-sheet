---
V: true
S: false
M: false
conc: false
mat_comp_desc: ""
base_level: 0
cast_time: Action
dur: 1 Round
range: 60 ft
aoe: ""
save_attk: INT
scaling: Sorcerer Level
summary: Give Someone's Mind A Sliver
damage:
  - 
  - 1d6
  - 2d6
  - 3d6
  - 4d6
  - 2d6
  - 
  - 
  - 
  - 
  - 
  - 3d6
  - 
  - 
  - 
  - 
  - 
  - 4d6
prepared: true
---
# [[Mind Sliver]]
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

You try to temporarily sliver the mind of one creature you can see within range. The [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) must succeed on an [Intelligence saving throw](https://roll20.net/compendium/dnd5e/Rules:D20%20Tests?expansion=32231#Saving%20Throws) or take 1d6 [Psychic damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types) and subtract 1d4 from the next [saving throw](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Saving%20Throw) it makes before the end of your next turn.

### Effects

Target Subtracts **1d4** from next saving throw.