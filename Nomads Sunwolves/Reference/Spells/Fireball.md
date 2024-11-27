---
V: true
S: true
M: true
conc: false
mat_comp_desc: A ball of bat guano and sulfur
base_level: 3
cast_time: Action
dur: Instantaneous
range: 150 ft
aoe: 20 ft sphere
save_attk: DEX
scaling: Spell Slot
summary: Big ol' explosion
damage:
  - 
  - 
  - 8d6
  - 9d6
  - 10d6
  - ""
prepared: true
---
# [[Fireball]]
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

A bright streak flashes from you to a point you choose within [range](https://app.roll20.net/compendium/dnd5e/Rules:Casting%20Spells?expansion=32231#Range) and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius [Sphere](https://app.roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Sphere%20%5BArea%20of%20Effect%5D) centered on that point makes a Dexterity [saving throw](https://app.roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Saving%20Throw), taking 8d6 Fire damage on a failed save or half as much damage on a successful one.  
  
Flammable [objects](https://app.roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Object) in the area that aren’t being worn or carried start burning.
### Effects