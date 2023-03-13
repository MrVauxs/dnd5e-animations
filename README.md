# D&D5e Animations [![Test Autorec](https://github.com/MrVauxs/dnd5e-animations/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/MrVauxs/dnd5e-animations/actions/workflows/test.yml)
![](https://img.shields.io/endpoint?url=https%3A%2F%2Ffoundryshields.com%2Fversion%3Fstyle%3Dflat%26url%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FMrVauxs%2Fdnd5e-animations%2Fmaster%2Fmodule.json)
![](https://img.shields.io/endpoint?url=https%3A%2F%2Ffoundryshields.com%2Fsystem%3FnameType%3Dfull%26showVersion%3D1%26style%3Dflat%26url%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FMrVauxs%2Fdnd5e-animations%2Fmaster%2Fmodule.json)

![All Downloads](https://img.shields.io/github/downloads/MrVauxs/dnd5e-animations/total?color=purple&label=All%20Downloads)
![Latest Version Downloads](https://img.shields.io/github/downloads/MrVauxs/dnd5e-animations/latest/total?color=purple&label=Latest%20Version%20Downloads&sort=semver)
[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fdnd5e-animations&colorB=4aa94a)](https://forge-vtt.com/bazaar#package=dnd5e-animations)
[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fdnd5e-animations%2Fshield%2Fendorsements)](https://www.foundryvtt-hub.com/package/dnd5e-animations/)

Welcome to the D&D5e Animations! A fully automated preset of animations for the 5e system in FoundryVTT.

## Overview

This module uses the Patreon version of JB2A for most of the animations, but if you are using the free version of JB2A, animations should fall back to their free variants. As such, this module should be mostly compatible with the free version, but unintended variants of the effects may play.

The mechanics of the module are kept as simple as possible. Anything that added an additional level of complexity to managing the game, such as dismissing sequencer effects or macros, were avoided (though you might still need to do that sometimes with auras.) There are lasting effects that are embedded into templates since the placement and dismissal of templates are a normal part of playing in Foundry, but the rest was kept simple. 

## Features

This autorec includes:

- Most mundane weapons (including renaissance, modern, and futuristic weapons)
- Many of the most popular abilities and class features
- The most common monster attacks, as well as actions for iconic creatures
- Most spells from the Player's Handbook
- Many spells from other D&D books such as Tasha's Cauldron of Everything and Xanathar's Guide to Everything
- Generic animations that may cover a variety of circumstances (one configuration can add animations for multiple spells or actions, so 500+ configurations doesn't mean only 500+ things are covered!)

## Installation

Just install it from the Foundry VTT Add-on Modules page and enable it in your game. A message will pop up asking you to update and shows you what changes will be made. Your current animations will not be overwritten!

This module requires Automated Animations 4.2.32 and the DnD5e game system version 2.1.5. If you do not these versions or newer, you will not see it in the Manage Modules page.

Sound effects with wildcards that play random sound variants require players to have Use File Browser permissions under core settings. To enable this, open your world and go to Game Settings, Configure Settings, All or Core, Open Permission Configuration, make sure all roles have Use File Browser checked.

If you do not wish to have sound effects, you can turn them all off by going to Game Settings, Configure Settings, Sequencer, uncheck Enable Sounds (note, this is a per-player setting.)

## Credits

- MrVauxs - Module programmer [Patreon](https://www.patreon.com/mrvauxs) & [Ko-Fi](https://ko-fi.com/mrvauxs)
- Sisimshow - Animation configurations [Ko-Fi](https://ko-fi.com/sisimshow)
- MorePurpleMoreBetter - Sound configurations [Patreon](https://www.patreon.com/morepurplemorebetter) & [website](https://www.flapkan.com/)
- Prince Chicken Hair - Initial sound configuration

Originally, the configurations for the animations started as a merge of available autorec files on the JB2A Discord. While hundreds of animations were added since then, some of contributors to the early version of the autorec include:

- Tupsi
- Dawid Izydor
- leighpierce90
- ArlosMolten
- Aike
- Zamrod

The sound effects are from Dota 2 created by Valve and are under the Creative Commons Attribution NonCommercial license (“CC BY-NC-SA”) and are not to be used for commercial purposes. 

## Feedback

We hope this module makes you as a GM or DM or player happy. Please, if you find any issues or have ways this can be improved, leave your feedback at the [JB2A Discord server](https://jb2a.com/home/patreon-discord/).
