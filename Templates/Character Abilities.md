---
STR: 10
DEX: 10
CON: 10
INT: 10
WIS: 10
CHA: 10
mods:
  str: 0
  dex: 0
  con: 0
  int: 0
  wis: 0
  cha: 0
saves:
  str: 0
  dex: 0
  con: 0
  int: 0
  wis: 0
  cha: 0
profs:
  skills:
    acro: false
    arc: false
    ani: false
    ins: false
    inti: false
    ste: false
    pers: false
    athl: false
    dec: false
    hist: false
    inv: false
    med: false
    nat: false
    perc: false
    perf: false
    rel: false
    soh: false
    sur: false
---

### Abilities
STR | DEX | CON | INT | WIS | CHA ||
:---:|:----:|:----:|:---:|:---:|:---:|---|
 `VIEW[{STR}]`|`VIEW[{DEX}]`  |`VIEW[{CON}]`  |`VIEW[{INT}]`  |`VIEW[{WIS}]`  |`VIEW[{CHA}]`  | **Stats** |
`VIEW[floor(({STR} - 10) / 2)][math:mods.str]` |`VIEW[floor(({DEX} - 10) / 2)][math:mods.dex]`  |`VIEW[floor(({CON} - 10) / 2)][math:mods.con]`  |`VIEW[floor(({INT} - 10) / 2)][math:mods.int]`|`VIEW[floor(({WIS} - 10) / 2)][math:mods.wis]` |`VIEW[floor(({CHA} - 10) / 2)][math:mods.cha]` | **Modifier** |
`VIEW[floor(({STR} - 10) / 2) + ({prof}*{profs.saves.str})][math:saves.str]`|`VIEW[floor(({DEX} - 10) / 2) + ({prof}*{profs.saves.dex})][math:saves.dex]`  |`VIEW[floor((({CON} - 10) / 2) + ({prof}*{profs.saves.con}))][math:saves.con]` |`VIEW[floor(({INT} - 10) / 2) + ({prof}*{profs.saves.int})][math:saves.int]` |`VIEW[floor(({WIS} - 10) / 2) + ({prof} * {profs.saves.wis})][math:saves.wis]` |`VIEW[floor((({CHA} - 10) / 2) + ({prof}*{profs.saves.cha}))][math:saves.cha]`  | **Saving Throw** |

### Skills
\# | Skill | Ability | Prof |
:--:|-----|:------:|:----:|
`VIEW[{mods.dex} + ({profs.skills.acro}*{prof})]`| Acrobatics | DEX |`INPUT[toggle:profs.skills.acro]`|
`VIEW[{mods.wis} + ({profs.skills.ani}*{prof})]`| Animal Handling | WIS |`INPUT[toggle:profs.skills.ani]`|
`VIEW[{mods.int} + ({profs.skills.arc}*{prof})]`| Arcana | INT |`INPUT[toggle:profs.skills.arc]`|
`VIEW[{mods.str} + ({profs.skills.athl}*{prof})]`| Athletics | STR |`INPUT[toggle:profs.skills.athl]`|
`VIEW[{mods.cha} + ({profs.skills.dec}*{prof})]`| Deception | CHA |`INPUT[toggle:profs.skills.dec]`|
`VIEW[{mods.int} + ({profs.skills.hist}*{prof})]`| History | INT |`INPUT[toggle:profs.skills.hist]`|
`VIEW[{mods.wis} + ({profs.skills.ins}*{prof})]`| Insight | WIS |`INPUT[toggle:profs.skills.ins]`|
`VIEW[{mods.cha} + ({profs.skills.inti}*{prof})]`| Intimidation | CHA |`INPUT[toggle:profs.skills.inti]`|
`VIEW[{mods.int} + ({profs.skills.inv}*{prof})]`| Investigation | INT |`INPUT[toggle:profs.skills.inv]`|
`VIEW[{mods.wis} + ({profs.skills.med}*{prof})]`| Medicine | WIS |`INPUT[toggle:profs.skills.med]`|
`VIEW[{mods.wis} + ({profs.skills.nat}*{prof})]`| Nature | WIS |`INPUT[toggle:profs.skills.nat]`|
`VIEW[{mods.wis} + ({profs.skills.perc}*{prof})]`| Perception | WIS |`INPUT[toggle:profs.skills.perc]`|
`VIEW[{mods.cha} + ({profs.skills.perf}*{prof})]`| Performance | CHA |`INPUT[toggle:profs.skills.perf]`|
`VIEW[{mods.cha} + ({profs.skills.pers}*{prof})]`| Persuasion | CHA |`INPUT[toggle:profs.skills.pers]`|
`VIEW[{mods.int} + ({profs.skills.rel}*{prof})]`| Religion | INT |`INPUT[toggle:profs.skills.rel]`|
`VIEW[{mods.dex} + ({profs.skills.soh}*{prof})]`| Sleight of Hand | DEX |`INPUT[toggle:profs.skills.soh]`|
`VIEW[{mods.dex} + ({profs.skills.ste}*{prof})]`| Stealth | DEX |`INPUT[toggle:profs.skills.ste]`|
`VIEW[{mods.wis} + ({profs.skills.sur}*{prof})]`| Survival | WIS |`INPUT[toggle:profs.skills.sur]`|
