---
V: true
S: true
M: true
conc: true
mat_comp_desc: A hot pepper
base_level: 2
cast_time: Bonus Action
dur: Up to 1 Minute
range: Touch
aoe: 15 ft Cone
save_attk: DEX
scaling: Spell Slot
summary: Dragon Breath Attack
prepared: true
damage:
  - 
  - 3d6
  - 4d6
  - 5d6
  - 6d6
---
# [[Dragon's Breath]]
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

You touch one willing creature, and choose Acid, Cold, Fire, Lightning, or Poison. Until the spell ends, the target can take a Magic action to exhale a 15-foot Cone. Each creture in that area makes a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save or half as much damage on a successful one.

**Using a Higher-Level Spell Slot**. The damage increases by 1d6 for each spell slot level above 2.
### Effects