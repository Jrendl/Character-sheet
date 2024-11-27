---
V: false
S: true
M: false
conc: true
mat_comp_desc: ""
base_level: 2
cast_time: Action
dur: Up to 1 hour
range: 120 ft
aoe: ""
save_attk: WIS
scaling: Spell Slot
summary: Get Mind Fucced
damage:
  - 
  - 3d8
  - 4d8
  - 5d8
  - 6d8
prepared: false
---
# [[Mind Spike]]
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

You drive a spike of psionic energy into the mind of one [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) you can see within range. The target makes a [Wisdom saving throw](https://roll20.net/compendium/dnd5e/Rules:D20%20Tests?expansion=32231#Saving%20Throws), taking 3d8 [Psychic damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types) on a failed [save](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Save) or half as much [damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage) on a successful one. On a failed [save](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Save), you also always know the target’s location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) can’t become hidden from you, and if it has the [Invisible](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Invisible%20%5BCondition%5D) condition, it gains no benefit from that condition against you.
### Effects