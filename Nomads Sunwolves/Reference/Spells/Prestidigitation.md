---
V: true
S: true
M: false
conc: false
mat_comp_desc: ""
base_level: 0
cast_time: Action
dur: Up to 1 Hour
range: 10 ft
aoe: ""
save_attk: NA
scaling: NA
summary: Create a Magical Effect
prepared: true
---
# [[Prestidigitation]]
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

You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time.  
  
_**Sensory Effect.**_ You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.  
  
_**Fire Play.**_ You instantaneously light or snuff out a candle, a torch, or a small campfire.  
  
_**Clean or Soil.**_ You instantaneously clean or soil an object no larger than 1 cubic foot.  
  
_**Minor Sensation.**_ You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.  
  
_**Magic Mark.**_ You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.  
  
_**Minor Creation.**_ You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no [damage](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Damage) and has no monetary worth.
### Effects