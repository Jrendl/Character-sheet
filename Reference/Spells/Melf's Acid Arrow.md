---
V: true
S: true
M: true
conc: false
mat_comp_desc: powdered rhubarb leaf
base_level: 2
cast_time: Action
dur: Instantaneous
range: 90 ft
aoe: a person
save_attk: Ranged
scaling: Spell Slot
summary: Shoot an acid arrow at the target
prepared: true
spell_eff: Removes a slot from Enspelled Staff
damage:
  - ""
  - 4d4 + 2d4
  - 5d4 + 3d4
  - 6d4 + 4d4
  - 7d4 + 5d4
---
# [[Melf's Acid Arrow]]
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

A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged [spell attack](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Spell%20Attack) against the target. On a hit, the target takes 4d4 [Acid damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types) and 2d4 [Acid damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types) at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial [damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage) only.

_**Using a Higher-Level Spell Slot.**_ The [damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage) (both initial and later) increases by 1d4 for each spell slot level above 2.

### Effects

**Spell Effects**: `INPUT[text:spell_eff]`