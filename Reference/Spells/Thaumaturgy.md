---
V: true
S: true
M: false
conc: false
mat_comp_desc: ""
base_level: 0
cast_time: Action
dur: Up to 1 Min
range: ""
aoe: 30 ft
save_attk: NA
scaling: NA
summary: Manifest a Minor Wonder
prepared: true
---
# [[Thaumaturgy]]
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

You manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time.  
  
_**Altered Eyes.**_ You alter the appearance of your eyes for 1 minute.  
  
_**Booming Voice.**_ Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have [Advantage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Advantage) on [Charisma (Intimidation) checks](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Ability%20Check).  
  
_**Fire Play.**_ You cause flames to flicker, brighten, dim, or change color for 1 minute.  
  
_**Invisible Hand.**_ You instantaneously cause an unlocked door or window to fly open or slam shut.  
  
_**Phantom Sound.**_ You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.  
  
_**Tremors.**_ You cause harmless tremors in the ground for 1 minute.
### Effects

**Booming Voice** - Advantage on Intimidation Checks.