
## Cantrips

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
FROM "Reference/Spells"
WHERE base_level = 0 AND prepared
SORT file.name ASCENDING
```
## Spells

%% Sorcerer Buttons using SP %%
`BUTTON[first-level]` `BUTTON[second-level]` `BUTTON[third-level]` `BUTTON[fourth-level]` `BUTTON[fifth-level]` 

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
FROM "Reference/Spells"
WHERE base_level >= 1 AND prepared
SORT file.name ASCENDING
SORT base_level ASCENDING
```