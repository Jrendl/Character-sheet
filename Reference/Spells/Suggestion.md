---
V: true
S: false
M: true
conc: true
mat_comp_desc: A drop of honey
base_level: 2
cast_time: Action
dur: Up to 8 hours
range: 30 ft
aoe: A creature you can see within range that can hear and understand you
save_attk: WIS
scaling: NA
summary: Tell a Creature to do Something
prepared: true
---
# [[Suggestion]]
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

You suggest a course of activity—described in no more than 25 words—to one [creature](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Creature) you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to the target or its allies. For example, you could say, “Fetch the key to the cult’s treasure vault, and give the key to me.” Or you could say, “Stop fighting, leave this library peacefully, and don’t return.”  
  
The [target](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Target) must succeed on a [Wisdom saving throw](https://roll20.net/compendium/dnd5e/Rules:D20%20Tests?expansion=32231#Saving%20Throws) or have the [Charmed](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Charmed%20%5BCondition%5D) condition for the duration or until you or your allies deal [damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage) to the target. The [Charmed](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Charmed%20%5BCondition%5D) target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for the target upon completing it.
### Effects