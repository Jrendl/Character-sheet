---
V: true
S: false
M: false
conc: false
mat_comp_desc: ""
base_level: 4
cast_time: Action
dur: Instantaneous
range: 500 ft
aoe: You and 1 willing creature
save_attk: NA
scaling: NA
summary: Teleport
prepared: true
---
# [[Dimension Door]]
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

You [teleport](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Teleportation) to a location within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as “200 feet straight downward” or “300 feet upward to the northwest at a 45-degree angle.”  
  
You can also [teleport](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Teleportation) one willing [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature). The [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) must be within 5 feet of you when you [teleport](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Teleportation), and it [teleports](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Teleportation) to a space within 5 feet of your destination space.  
  
If you, the other [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature), or both would arrive in a space occupied by a [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) or completely filled by one or more objects, you and any [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) traveling with you each take 4d6 [Force damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage%20Types), and the [teleportation](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Teleportation) fails.
### Effects