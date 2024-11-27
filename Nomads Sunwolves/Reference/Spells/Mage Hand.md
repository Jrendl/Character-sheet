---
V: true
S: true
M: false
conc: false
mat_comp_desc: ""
base_level: 0
cast_time: Action
dur: 1 min
range: 30 ft
aoe: ""
save_attk: NA
scaling: NA
summary: Make A Magical Floating Hand
str_mod: -5
dex_mod: -5
con_mod: -5
int_mod: -5
wis_mod: -5
cha_mod: -5
str_save: -5
dex_save: -5
con_save: -5
int_save: -5
wis_save: -5
cha_save: -5
prepared: true
---
# [[Mage Hand]]
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

A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. 
  
When you cast the spell, you can use the hand to manipulate an [object](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Object), open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.  
  
As a [Magic action](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Magic%20%5BAction%5D) on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.  
  
The hand can’t attack, activate magic items, or carry more than 10 pounds.

### Effects