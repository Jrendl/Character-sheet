---
V: true
S: true
M: true
conc: false
mat_comp_desc: A bit of fur and a crystal rod
base_level: 3
cast_time: Action
dur: Instantaneous
range: Emanating from self
aoe: 100ft * 5ft bolt
save_attk: DEX
scaling: Spell Slot
summary: Lightning Damage
damage:
  - 
  - 
  - 8d6
  - 9d6
  - 10d6
prepared: true
---
# [[Lightning Bolt]]
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

A stroke of lightning forming a 100-foot-long, 5-foot-wide [Line](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Line%20%5BArea%20of%20Effect%5D) blasts out from you in a direction you choose. Each [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) in the Line makes a [Dexterity saving throw](https://roll20.net/compendium/dnd5e/Rules:D20%20Tests?expansion=32231#Saving%20Throws), taking 8d6 [Lightning damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types) on a failed [save](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Save) or half as much [damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage) on a successful one.
### Effects