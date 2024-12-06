---
V: true
S: false
M: true
conc: true
mat_comp_desc: Bat fur and a piece of coal
base_level: 2
cast_time: Action
dur: Up to 10 Minutes
range: 60 ft
aoe: 15 ft radius Sphere
save_attk: NA
scaling: NA
summary: Fill a Sphere with Magical Darkness
prepared: true
---
# [[Darkness]]
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
For the duration, magical [Darkness](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Darkness) spreads from a point within range and fills a [15-foot-radius Sphere](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Sphere%20%5BArea%20of%20Effect%5D). [Darkvision](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Darkvision) can’t see through it, and nonmagical light can’t illuminate it.  
  
Alternatively, you cast the spell on an [object](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Object) that isn’t being worn or carried, causing the [Darkness](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Darkness) to fill a [15-foot Emanation](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Emanation%20%5BArea%20of%20Effect%5D) originating from that [object](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Object). Covering that [object](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Object) with something opaque, such as a bowl or helm, blocks the [Darkness](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Darkness).  
  
If any of this spell’s area overlaps with an area of [Bright Light](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Bright%20Light) or [Dim Light](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Dim%20Light) created by a spell of level 2 or lower, that other spell is dispelled.
### Effects