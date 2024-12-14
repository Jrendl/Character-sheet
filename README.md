This Project is meant to provide examples of how PC's can set up their notes and character sheet in obsidian for DND! I set this up because I felt that there weren't many free examples of automation for DND in obsidian and it can be a super useful tool for making charcters. It includes templates, example character sheets, automation examples, and more! This repo will constantly be "in-progress" because we'll always be coming up with new ideas. If you have such an idea, please feel free to submit a PR and we can look into it and merge. The goal here is to provide as many resources for people to use without a paywall and to do that we need community support! The maintainers of this project work full time jobs and this is not their source of income. We are doing this cause it's fun and we feel like we have something useful to share with others so please be respectful of that. Below is a few guidelines and important setup and stuff that should be read. 

## Usage

Before you just pull this repo and start using it on your own, there may be a few things you want to be cautious of. 

Since this project is not complete, there may be some bugs in the settings and we aren't always around to support so if you're not ready to do some debugging this project might not be for you! 

This project uses a few community plugins to make it work. Namely: meta bind, quickAdd, Templater, Dataview, and calendrium. 

There's a few settings that should definitely be enabled for everything to work. One of the most important things is to include the common buttons that are defined in the meta-bind data.json file. This can be found in the `.obsidian/plugins/obsidian-meta-bind-plugin` directory. The buttons that have been defined so far are as follows:

```json
"buttonTemplates": [
    {
      "label": "Drop",
      "id": "drop-shield",
      "style": "destructive",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "ac",
          "evaluate": true,
          "value": "x - 5"
        }
      ]
    },
    {
      "label": "Shield",
      "id": "shield",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "ac",
          "evaluate": true,
          "value": "x + 5"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 2"
        }
      ]
    },
    {
      "label": "Mage Armor",
      "id": "mage-arm",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "ac",
          "evaluate": true,
          "value": "13 + getMetadata('mods.dex')"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 2"
        }
      ]
    },
    {
      "label": "Drop",
      "id": "drop-mage-arm",
      "style": "destructive",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "ac",
          "evaluate": true,
          "value": "getMetadata('regAC')"
        }
      ]
    },
    {
      "label": "Sorcery Incarnate",
      "id": "sorc-inc",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 2"
        }
      ]
    },
    {
      "label": "Quickened Spell",
      "id": "quick-spell",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 2"
        }
      ]
    },
    {
      "label": "Careful Spell",
      "id": "care-spell",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 1"
        }
      ]
    },
    {
      "label": "Drop",
      "id": "inn-sorc-drop",
      "style": "destructive",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "mods.inn",
          "evaluate": true,
          "value": 0
        }
      ]
    },
    {
      "label": "Innate Sorcery",
      "id": "inn-sorc",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "mods.inn",
          "evaluate": false,
          "value": 1
        },
        {
          "type": "updateMetadata",
          "bindTarget": "inn_sorc_uses",
          "evaluate": true,
          "value": "x - 1"
        }
      ]
    },
    {
      "label": "5th Level",
      "id": "fifth-level",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 7"
        }
      ]
    },
    {
      "label": "4th Level",
      "id": "fourth-level",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 6"
        }
      ]
    },
    {
      "label": "3rd Level",
      "id": "third-level",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 5"
        }
      ]
    },
    {
      "label": "2nd Level",
      "id": "second-level",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 3"
        }
      ]
    },
    {
      "label": "1st Level",
      "id": "first-level",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "x - 2"
        }
      ]
    },
    {
      "label": "Long Rest",
      "icon": "",
      "hidden": false,
      "class": "",
      "tooltip": "Take a long rest",
      "id": "l-r",
      "style": "primary",
      "actions": [
        {
          "type": "updateMetadata",
          "bindTarget": "curHP",
          "evaluate": true,
          "value": "getMetadata('maxHP')"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "tempHP",
          "evaluate": true,
          "value": "0"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "curSP",
          "evaluate": true,
          "value": "getMetadata('maxSP')"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "curHitDice",
          "evaluate": true,
          "value": "Math.min(x+Math.floor(getMetadata('maxHitDice')/2), getMetadata('maxHitDice'))"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "ac",
          "evaluate": true,
          "value": "getMetadata('regAC')"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "inn_sorc_uses",
          "evaluate": true,
          "value": "2"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "TOC",
          "evaluate": true,
          "value": "false"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "HellReb",
          "evaluate": true,
          "value": "false"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "darkness",
          "evaluate": true,
          "value": "false"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "lucky_1",
          "evaluate": true,
          "value": "false"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "lucky_2",
          "evaluate": true,
          "value": "false"
        },
        {
          "type": "updateMetadata",
          "bindTarget": "lucky_3",
          "evaluate": true,
          "value": "false"
        }
      ]
    }
  ]
```

Buttons can also be added and updated in the meta-bind settings `Settings>Community Plugins>Meta bind>Button Templates> Edit Templates`. And I would definitely recommend using the button editor to create your buttons. 


## Contributing

To make this project useful, it's important that we get community input and help! If you want to contribute, there's a few things to keep in mind.

- You probably don't want to commit all your session notes or custom settings that you've added. For this reason, we recommend pulling this repo into a separate directory than the one you're actively using for session notes. If you're going to use the same directory, please be very cautious and double and triple check your commits before pushing. If you need to, add things to the .gitignore file.
- The Git community plugin can be very helpful for contributing!!
- The main branch is protected, so you will have to open a PR and get approved by a maintainer in order to merge in.
- Keep things modular!! If you can make a sub-template that can be included in another template that's always the best way to go. That way others can use your templates in their contributions!!
- Useful commit titles are very appreciated!

If you want to contribute but don't know where to start, here's a few ideas:

- Character sheets are often somewhat unique to the class and race of a character. If you have a character sheet for a class that hasn't been added yet, that's a great way to contribute!!!
- If you find a bug and fix it, please open a PR with your bugfix!! This is a super useful way to contribute. 
- If you think of an easier way to do things that's also appreciated!

There's plenty of other ways to contribute too so keep your eyes out for things to do!

