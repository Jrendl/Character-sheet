---
aliases:
  - Theo
cssclasses:
  - hcl
  - table
  - t-c
  - readable
  - m
level: 8
prof: "3"
maxHP: 50
curHP: 50
tempHP: 0
maxSP: "52"
curSP: 42
curHitDice: 8
maxHitDice: 8
ac: 15
regAC: 12
STR: "8"
DEX: "14"
CON: "14"
INT: "12"
WIS: "11"
CHA: "18"
profs:
  skills:
    acro: false
    arc: true
    ani: false
    ins: true
    inti: true
    ste: true
    pers: true
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
  saves:
    dex: false
    cha: true
    con: true
    str: false
    int: false
    wis: false
inn_sorc_uses: 1
mods:
  str: -1
  dex: 2
  con: 2
  int: 1
  wis: 0
  cha: 4
  inn: 0
saves:
  str: -1
  dex: 2
  con: 5
  int: 1
  wis: 0
  cha: 7
coin:
  CP: 0
  SP: 2
  GP: 115
  PP: 77
  CR: 40
TOC: false
Hell_reb: false
darkness: false
lucky_1: true
lucky_2: false
lucky_3: false
insp: 1
hitDieMax: "6"
med_of_thot:
  first: false
  second: false
  third: false
items_attunement:
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - true
  - true
  - false
  - false
  - false
  - false
  - true
  - true
items_attuned:
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - false
  - true
  - false
  - false
  - false
  - false
  - false
  - true
  - true
ens_staff:
  - false
  - false
  - false
  - false
  - false
  - false
---


# [[Theo]]
> (Description:: ) Young Tiefling WIld Magic Sorcerer

`BUTTON[l-r]`

General| Info|
:----:|:---:|
**Class** | Wild Magic Sorcerer|
**Level** | `VIEW[{level}]` |
**Race** | Tiefling  |
**Alignment** | Chaotic-Neutral  |
**Background** | Wayfarer  |
**Initiative** | `VIEW[{mods.dex}]`  |

**Inspiration**: `INPUT[number(class(meta-bind-small-width)):insp]`

---
# Stats
HP | SP | AC | Base AC | Speed | Initiative |
:---:|:---:|:---:|:---:|:---:|:---:|
`INPUT[number(class(meta-bind-small-width)):curHP]`/`VIEW[{hitDieMax}+(ceil(mean(range(1, {hitDieMax}, 1)))*({level}-1))+({mods.con}*{level})][math:maxHP]`| `INPUT[number(class(meta-bind-small-width)):curSP]`/`VIEW[{maxSP}]`  |`VIEW[{ac}]`|`VIEW[floor(10+({DEX}-10)/2)][math:regAC]` |30|+`VIEW[({DEX} - 10)/2]`

 
Hit Dice | Proficiency Bonus | Temp HP | 
:---:|:---:|:---:|
`INPUT[number(class(meta-bind-small-width)):curHitDice]`d`VIEW[{hitDieMax}]`|+ `VIEW[{prof}]`|`INPUT[number(class(meta-bind-small-width)):tempHP]`

Senses | \# |
---|---|
**Passive Perception** |`VIEW[{WIS}]`|
**Passive Insight** |`VIEW[{WIS} + {prof}]`|
**Passive Investigation** |`VIEW[{INT}]`|

---
## Abilities
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

# Class Features

## Spell Casting
You can cast spells.
	Drawing from your innate magic, you can cast spells. See chapter 7 for the rules on spellcasting. The information below details how you use those rules with Sorcerer spells, which appear in the Sorcerer spell list later in the class’s description.
	**Cantrips**. You know four Sorcerer cantrips of your choice. Light, Prestidigitation, Shocking Grasp, and Sorcerous Burst are recommended. Whenever you gain a Sorcerer level, you can replace one of your cantrips from this feature with another Sorcerer cantrip of your choice.
	When you reach Sorcerer levels 4 and 10, you learn another Sorcerer cantrip of your choice, as shown in the Cantrips column of the Sorcerer Features table.
	**Spell Slots.** The Sorcerer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.
	**Prepared Spells of Level 1+.** You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Sorcerer spells. Burning Hands and Detect Magic are recommended.
	The number of spells on your list increases as you gain Sorcerer levels, as shown in the Prepared Spells column of the Sorcerer Features table. Whenever that number increases, choose additional Sorcerer spells until the number of spells on your list matches the number in the Sorcerer Features table. The chosen spells must be of a level for which you have spell slots. For example, if you’re a level 3 Sorcerer, your list of prepared spells can include six Sorcerer spells of level 1 or 2 in any combination.
	If another Sorcerer feature gives you spells that you always have prepared, those spells don’t count against the number of spells you can prepare with this feature, but those spells otherwise count as Sorcerer spells for you.
	**Changing Your Prepared Spells.** Whenever you gain a Sorcerer level, you can replace one spell on your list with another Sorcerer spell for which you have spell slots.
	**Spellcasting Ability.** Charisma is your spellcasting ability for your Sorcerer spells.
	**Spellcasting Focus.** You can use an Arcane Focus as a Spellcasting Focus for your Sorcerer spells.
## Innate Sorcery 
`BUTTON[inn-sorc, inn-sorc-drop]` 
**Bonus Action**, get advantage on spell attacks, +1 to save DC. Uses: `VIEW[{inn_sorc_uses}]`
	An event in your past left an indelible mark on you, infusing you with simmering magic. As a Bonus Action, you can unleash that magic for 1 minute, during which you gain the following benefits:
		 - The spell save DC of your Sorcerer spells increases by 1.
		 - You have Advantage on the attack rolls of Sorcerer spells you cast.
	 You can use this feature twice, and you regain all expended uses of it when you finish a Long Rest."
## Font of Magic
You get Metamagic
	You can tap into the wellspring of magic within yourself. This wellspring is represented by Sorcery Points, which allow you to create a variety of magical effects.
### Careful Spell
**Cost**: 1 Sorcery Point `BUTTON[care-spell]`
	When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, spend 1 Sorcery Point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell, and it takes no damage if it would normally take half damage on a successful save.
### Quickened Spell
**Cost**: 2 Sorcery Points `BUTTON[quick-spell]`
	When you cast a spell that has a casting time of an action, you can spend 2 Sorcery Points to change the casting time to a Bonus Action for this casting. You can’t modify a spell in this way if you’ve already cast a level 1+ spell on the current turn, nor can you cast a level 1+ spell on this turn after modifying a spell in this way.
## Wild Magic Surge
Roll 1d20, on 1 or 20 roll on table (once per turn, after a spell)
	Your spellcasting can unleash surges of untamed magic. Once per turn, you can roll 1d20 immediately after you cast a Sorcerer spell with a spell slot. If you roll a 20, roll on the Wild Magic Surge table to create a magical effect.
	If the magical effect is a spell, it is too wild to be affected by your Metamagic.
## Tides of Chaos
**Gain advantage**. Must roll on table next spell `INPUT[toggle:TOC]`
	You can manipulate chaos itself to give yourself Advantage on one D20 Test before you roll the d20. Once you do so, you must cast a Sorcerer spell with a spell slot or finish a Long Rest before you can use this feature again.
	If you do cast a Sorcerer spell with a spell slot before you finish a Long Rest, you automatically roll on the Wild Magic Surge table.
## Bend Luck
**Cost**: 1 SP
**Time**: 1 Reaction.
Add or Subtract 1d4 from someone else's d20 test
	You have the ability to twist fate using your wild magic. Immediately after another creature you can see rolls the d20 for a D20 Test, you can take a Reaction and spend 1 Sorcery Point to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the d20 roll.

## Sorcery Incarnate
**Cost:** 2 SP
**Time:** 1 Bonus Action
`BUTTON[sorc-inc]`
If you have no uses of **Innate Sorcery** left, you can use it if you spend **2 Sorcery Points** when you take the [Bonus Action](https://roll20.net/compendium/dnd5e/Rules:Rules%20Definitions?expansion=32231#Bonus%20Action) to activate it.

In addition, while your Innate Sorcery feature is active, you can use up to two of your [Metamagic options](https://roll20.net/compendium/dnd5e/Classes:Sorcerer?expansion=32231#Metamagic%20Options) on each spell you cast.

# Racial Traits
## Darkvision
60 ft
	Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
## Otherworldly Presence
You know the Thaumaturgy cantrip.
	When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy trait.
## Infernal Legacy
Hellish Rebuke `INPUT[toggle:Hell_reb]`
Darkness `INPUT[toggle:darkness]`
You have Resistance to Fire damage. You also know the Fire Bolt cantrip.
	- **At 3rd level** you can cast the *Hellish Rebuke* spell at will once per long rest
	- **At 5th level** you can cast *Darkness* at will once per long rest

# Feats

## Lucky
`INPUT[toggle:lucky_1]` `INPUT[toggle:lucky_2]` `INPUT[toggle:lucky_3]`
You gain the following benefits.
	**Luck Points.** You have a number of Luck Points equal to your Proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.
	**Advantage.** When you roll a d20 for a D20 Test, you can spend *1 Luck Point* to give yourself Advantage on the roll.
	**Disadvantage.** When a creature rolls a d20 for an attack roll against you, you can spend *1 Luck Point* to impose Disadvantage on that roll

## Elemental Adept
**Fire**
You gain the following benefits.
	**Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. (Applied to Charisma)
	**Energy Mastery.** Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore Resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. 
	**Repeatable.** You can take this feat more than once, but you must choose a different damage type each time for Energy Mastery.

## Spell Sniper
You gain the following benefits.
	**Ability Score Increase.** Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.
	**Bypass Cover.** Your attack rolls for spells ignore Half Cover and Three-Quarters Cover.
	**Casting in Melee.** Being within 5 ft of an enemy doesn't impose Disadvantage on your attack rolls with spells.
	**Increased Range.** When you cast a spell that has a range of at least 10 ft and requires you to make an attack roll, you can increase the spell's range by 60 ft.

# Proficiencies

## Saving Throws

- STR `INPUT[toggle:profs.saves.str]`
- DEX `INPUT[toggle:profs.saves.dex]`
- CON `INPUT[toggle:profs.saves.con]`
- INT `INPUT[toggle:profs.saves.int]`
- WIS `INPUT[toggle:profs.saves.wis]`
- CHA `INPUT[toggle:profs.saves.cha]`

## Languages
- Common
- Infernal

# Actions

|        Name        | Attack                            | Damage                                | Type              |
| :----------------: | :-------------------------------- | ------------------------------------- | ----------------- |
|       Dagger       | `VIEW[(({DEX} - 10)/2) + {prof}]` | 1d4+`VIEW[({DEX} - 10)/2]` (Piercing) | Melee             |
|  Dagger (Thrown)   | `VIEW[(({DEX} - 10)/2) + {prof}]` | 1d4+`VIEW[({DEX} - 10)/2]` (Piercing) | Ranged (20/60ft)  |
|   Light Crossbow   | `VIEW[(({DEX} - 10)/2) + {prof}]` | 1d8+`VIEW[({DEX} - 10)/2]` (Piercing) | Ranged (80/320ft) |
|      Unarmed       | `VIEW[(({STR} - 10)/2) + {prof}]` | 1 (Bludgeoning)                       | Melee             |
| First Level Spell  | `BUTTON[first-level]`             |                                       |                   |
| Second Level Spell | `BUTTON[second-level]`            |                                       |                   |
| Third Level Spell  | `BUTTON[third-level]`             |                                       |                   |
| Fourth Level Spell | `BUTTON[fourth-level]`            |                                       |                   |
| Fifth Level Spell  | `BUTTON[fifth-level]`             |                                       |                   |

# Spells

|                Spell-save DC                 | Spell-attack mod            | SP                                                                      | AC           | HP                                                                  |
| :------------------------------------------: | :-------------------------- | ----------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------- |
| `VIEW[8 + {prof} + {mods.cha} + {mods.inn}]` | `VIEW[{prof} + {mods.cha}]` | `INPUT[number(class(meta-bind-small-width)):curSP]` / `VIEW[{maxSP}]` | `VIEW[{ac}]` | `INPUT[number(class(meta-bind-small-width)):curHP]`/`VIEW[{maxHP}]` |
`BUTTON[care-spell]` `BUTTON[quick-spell]` `BUTTON[inn-sorc, inn-sorc-drop]`

## Cantrips
5 + Thaumaturgy
```dataview
TABLE WITHOUT ID
link(string(file.name)+"#Details", file.name) as Name,
summary AS Summary,
choice(V, "✅", "✘") AS V, 
choice(S, "✅", "✘") AS S, 
choice(M, mat_comp_desc, "✘") AS M, 
cast_time AS "Casting Time", 
dur AS Duration,
range AS Range,
aoe AS AOE,
save_attk AS "Save/Attk",
choice(scaling = "Sorcerer Level", damage[floor((this.level+1)/6)+1], flat(damage)) AS Damage
FROM "Nomads Sunwolves/Reference/Spells"
WHERE base_level = 0 AND prepared
SORT file.name ASCENDING
```
## Sorcerer Spells
12 + Hellish Rebuke + Darkness
`BUTTON[first-level]` `BUTTON[second-level]` `BUTTON[third-level]` `BUTTON[fourth-level]` `BUTTON[fifth-level]` 

Darkness `INPUT[toggle:darkness]`
Hellish Rebuke `INPUT[toggle:Hell_reb]`
Medalian of Thoughts `INPUT[toggle:med_of_thot.first]` `INPUT[toggle:med_of_thot.second]` `INPUT[toggle:med_of_thot.third]`
Enspelled Staff `INPUT[toggle:ens_staff[0]]` `INPUT[toggle:ens_staff[1]]` `INPUT[toggle:ens_staff[2]]` `INPUT[toggle:ens_staff[3]]` `INPUT[toggle:ens_staff[4]]` `INPUT[toggle:ens_staff[5]]` 

```dataview
TABLE WITHOUT ID
link(string(file.name)+"#Details", file.name) as Name,
base_level AS Level,
summary AS Summary,
choice(V, "✅", "✘") AS V, 
choice(S, "✅", "✘") AS S, 
choice(M, mat_comp_desc, "✘") AS M,
choice(conc, "✅", "✘") AS Concentration,
cast_time AS "Casting Time", 
dur AS Duration,
range AS Range,
aoe AS AOE,
save_attk AS "Save/Attk",
choice(scaling = "Sorcerer Level", damage[floor((this.level+1)/6)+1], flat(damage)) AS Damage,
spell_eff as "Spell Effects"
FROM "Nomads Sunwolves/Reference/Spells"
WHERE base_level >= 1 AND prepared
SORT file.name ASCENDING
SORT base_level ASCENDING
```

# Equipment
CP | SP | GP | PP | CR |
:---:|:---:|:---:|:---:|:---:|
`INPUT[number(class(meta-bind-small-width)):coin.CP]`|`INPUT[number(class(meta-bind-small-width)):coin.SP]`| `INPUT[number(class(meta-bind-small-width)):coin.GP]`|`INPUT[number(class(meta-bind-small-width)):coin.PP]`|`INPUT[number(class(meta-bind-small-width)):coin.CR]`|

|                Item                 | Number | Weight |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Attunement                           | Attuned                           |
| :---------------------------------: | :----: | :----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------ | --------------------------------- |
|            Arcane Focus             |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Replace any Material components without a monetary worth.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `INPUT[toggle:items_attunement[0]]`  | `INPUT[toggle:items_attuned[0]]`  |
|                Spear                |   3    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[1]]`  | `INPUT[toggle:items_attuned[1]]`  |
|               Dagger                |   2    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[2]]`  | `INPUT[toggle:items_attuned[2]]`  |
|          Dungeoneer's Pack          |   1    |   61   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <details><summary>Contents</summary><br>- a backpack<br>- a crowbar<br>- a hammer<br>- 10 pitons<br>- 10 Torches<br>- a tinderbox<br>- 10 days of rations<br>- a waterskin<br>- 50 feet of hempen rope</details>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `INPUT[toggle:items_attunement[3]]`  | `INPUT[toggle:items_attuned[3]]`  |
|         Traveler's Clothes          |   1    |   4    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[4]]`  | `INPUT[toggle:items_attuned[4]]`  |
|               Dagger                |   2    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[5]]`  | `INPUT[toggle:items_attuned[5]]`  |
|               Bedroll               |   1    |   7    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[6]]`  | `INPUT[toggle:items_attuned[6]]`  |
|             Gaming Set              |   1    |        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[7]]`  | `INPUT[toggle:items_attuned[7]]`  |
|                Pouch                |   2    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[8]]`  | `INPUT[toggle:items_attuned[8]]`  |
|            Thieves Tools            |   1    |   1    | <details><summary>Contents</summary>This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.<br><br>Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks.<br><br>**Components.** Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers.<br><br>**History.** Your knowledge of traps grants you insight when answering questions about locations that are renowned for their traps.<br><br>**Investigation and Perception.** You gain additional insight when looking for traps, because you have learned a variety of common signs that betray their presence.<br><br>**Set a Trap.** Just as you can disable traps, you can also set them. As part of a short rest, you can create a trap using items you have on hand. The total of your check becomes the DC for someone else's attempt to discover or disable the trap. The trap deals damage appropriate to the materials used in crafting it (such as poison or a weapon) or damage equal to half the total of your check, whichever the DM deems appropriate.</details> | `INPUT[toggle:items_attunement[9]]`  | `INPUT[toggle:items_attuned[9]]`  |
|     A Scale from Braga's Armor      |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[10]]` | `INPUT[toggle:items_attuned[10]]` |
|         Bone Crossbow Bolt          |   7    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Pierce Dragon Scales                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `INPUT[toggle:items_attunement[11]]` | `INPUT[toggle:items_attuned[11]]` |
|        Cloak of Irridescence        |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <details>This shimmering cloak is made from the scales of a scitalis. While in an area of bright or dim light, you can pull the cloak’s hood over your head to cause the scales to glimmer and shine. Each creature within 10 feet of you must succeed on a DC 15 Constitution saving throw or be blinded until the end of its next turn. Once this property has been used twice, it can’t be used again until the next dawn. Pulling the hood up or down requires an action.</details>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `INPUT[toggle:items_attunement[12]]` | `INPUT[toggle:items_attuned[12]]` |
|     Robes of Psychic Resistance     |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Grants Resistance to Psychic Damage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `INPUT[toggle:items_attunement[13]]` | `INPUT[toggle:items_attuned[13]]` |
|          Military Medalian          |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     From the Emperor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `INPUT[toggle:items_attunement[14]]` | `INPUT[toggle:items_attuned[14]]` |
|          Potion of Healing          |   2    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <details>you regain 2d4 + 2 hit points when you drink this potion. The potion's red liquid glimmers when agitated.</details>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `INPUT[toggle:items_attunement[15]]` | `INPUT[toggle:items_attuned[15]]` |
|      Potion of Greater Healing      |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <details>You regain 4d4+4 hit points when you drink this potion. Whatever its potency, the potion’s red liquid glimmers when agitated.</details>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `INPUT[toggle:items_attunement[16]]` | `INPUT[toggle:items_attuned[16]]` |
|          Diamond Necklace           |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `INPUT[toggle:items_attunement[17]]` | `INPUT[toggle:items_attuned[17]]` |
|        Medallion of Thoughts        |   1    |   1    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <details>The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the _detect thoughts_ spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.</details>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `INPUT[toggle:items_attunement[18]]` | `INPUT[toggle:items_attuned[18]]` |
| Enspelled Staff - Melf's Acid Arrow |   1    |   4    |                                                                                                                                                                                                                                                                                      <details>Bound into this staff is a level 2 spell. The spell is determined when the staff is created and can be of any school of magic. The staff has 6 charges and regains **1d6** expended charges daily at dawn. While holding the staff, you can expend 1 charage to cast its spell. If you expend the staff's last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.<br> The spell saving throw DC is 13 and its attack bonus is +5. **Versatile.** A versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack. **Mastery: Topple.** If you hit a create with this weapon, you can force the creature to make a CON save (DC 8+ the ability modifier used and your proficiency Bonus). On a failed save, the creature has the Prone Condition.</details>                                                                                                                                                                                                                                                                                       | `INPUT[toggle:items_attunement[19]]` | `INPUT[toggle:items_attuned[19]]` |




# Background
## Wayfarer
You grew up on the streets surrounded by similarly ill-fated castoffs, a few of them friends and a few of them rivals. You slept where you could and did odd jobs for food. At times, when the hunger became unbearable, you resorted to theft. Still, you never lost your pride and never abandoned hope. Fate is not yet finished with you.

