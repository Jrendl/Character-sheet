---
mods:
    inn: 0
    curSP: 0
    maxSP: 0
---

%% This stat block is for Sorcerers using Spell Points to track spells.
    mods.inn represents the innate sorcery modifier from the innate sorcery feat in the 2024 PHB
%%

|                Spell-save DC                 | Spell-attack mod            | SP                                                                    | AC           | HP                                                                  |
| :------------------------------------------: | :-------------------------- | --------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------- |
| `VIEW[8 + {prof} + {mods.cha} + {mods.inn}]` | `VIEW[{prof} + {mods.cha}]` | `INPUT[number(class(meta-bind-small-width)):curSP]` / `VIEW[{maxSP}]` | `VIEW[{ac}]` | `INPUT[number(class(meta-bind-small-width)):curHP]`/`VIEW[{maxHP}]` |
