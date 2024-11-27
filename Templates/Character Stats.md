---
curHP: 0
maxHP: 0
ac: 0
regAC: 5
tempHP: 0
prof: 1
hitDieMax: 1
curHitDice: 1
---

HP | AC | Base AC | Speed | Initiative |
:---:|:---:|:---:|:---:|:---:|:---:|
`INPUT[number(class(meta-bind-small-width)):curHP]`/`VIEW[{hitDieMax}+(ceil(mean(range(1, {hitDieMax}, 1)))*({level}-1))+({mods.con}*{level})][math:maxHP]`| `VIEW[{ac}]`|`VIEW[floor(10+({DEX}-10)/2)][math:regAC]` |30|`VIEW[({DEX} - 10)/2]`

 
Hit Dice | Proficiency Bonus | Temp HP | 
:---:|:---:|:---:|
`INPUT[number(class(meta-bind-small-width)):curHitDice]`d`VIEW[{hitDieMax}]`|+ `VIEW[{prof}]`|`INPUT[number(class(meta-bind-small-width)):tempHP]`

Senses | \# |
---|---|
**Passive Perception** |`VIEW[{WIS}]`|
**Passive Insight** |`VIEW[{WIS} + {prof}]`|
**Passive Investigation** |`VIEW[{INT}]`|


