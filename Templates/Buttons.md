```meta-bind-button
label: "Long Rest"
id: "l-r"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: getMetadata('max_sp')
    - type: updateMetadata
      bindTarget: 'curHP'
      evaluate: true
      value: getMetadata('maxHP')
    - type: updateMetadata
      bindTarget: 'tempHP'
      evaluate: false
      value: 0
    - type: updateMetadata
      bindTarget: 'ac'
      evaluate: true
      value: getMetadata('reg_ac')
    - type: updateMetadata
      bindTarget: 'curHitDice'
      evaluate: true
      value: Math.min(floor(x + getMetadata('maxHitDice')/2), getMetadata('maxHitDice'))
    - type: updateMetadata
      bindTarget: 'inn_sorc_uses'
      evaluate: false
      value: 2
    - type: updateMetadata
      bindTarget: 'TOC'
      evaluate: false
      value: false
    - type: updateMetadata
      bindTarget: 'Hell_reb'
      evaluate: false
      value: false
    - type: updateMetadata
      bindTarget: 'darkness'
      evaluate: false
      value: false
    - type: updateMetadata
      bindTarget: 'lucky_1'
      evaluate: false
      value: false
    - type: updateMetadata
      bindTarget: 'lucky_2'
      evaluate: false
      value: false
    - type: updateMetadata
      bindTarget: 'lucky_3'
      evaluate: false
      value: false
```
```meta-bind-button
label: "1st Level"
id: "first-level"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 2
```
```meta-bind-button
label: "2nd Level"
id: "second-level"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 3
```
```meta-bind-button
label: "3rd Level"
id: "third-level"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 5
```
```meta-bind-button
label: "4th Level"
id: "fourth-level"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 6
```
```meta-bind-button
label: "5th Level"
id: "fifth-level"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 7
```
```meta-bind-button
label: "Innate Sorcery"
id: "inn-sorc"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'mods.inn'
      evaluate: false
      value: 1
    - type: updateMetadata
      bindTarget: 'inn_sorc_uses'
      evaluate: true
      value: x - 1
```
```meta-bind-button
label: "Drop"
id: "inn-sorc-drop"
style: destructive

actions:
    - type: updateMetadata
      bindTarget: 'mods.inn'
      evaluate: true
      value: 0
```
```meta-bind-button
label: "Careful Spell"
id: "care-spell"
style: primary

actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 1
```

```meta-bind-button
label: "Quickened Spell"
id: "quick-spell"

style: primary
actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 2
```
```meta-bind-button
label: "Sorcery Incarnate"
id: "sorc-inc"

style: primary
actions:
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 2
```
```meta-bind-button
label: "Mage Armor"
id: "mage-arm"

style: primary
actions:
    - type: updateMetadata
      bindTarget: 'ac'
      evaluate: true
      value: 13 + getMetadata('mods.dex')
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 2
```

```meta-bind-button
label: "Drop"
id: "drop-mage-arm"

style: destructive
actions:
    - type: updateMetadata
      bindTarget: 'ac'
      evaluate: true
      value: getMetadata('reg_ac')
```
```meta-bind-button
label: "Shield"
id: "shield"

style: primary
actions:
    - type: updateMetadata
      bindTarget: 'ac'
      evaluate: true
      value: x + 5
    - type: updateMetadata
      bindTarget: 'cur_sp'
      evaluate: true
      value: x - 2
```
```meta-bind-button
label: "Drop"
id: "drop-shield"

style: destructive
actions:
    - type: updateMetadata
      bindTarget: 'ac'
      evaluate: true
      value: x - 5
```
