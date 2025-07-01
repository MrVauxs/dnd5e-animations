# 2.3.1
- Restored 66 3D Canvas animations that had been accidently deleted since version 1.3.0 when they were first committed by @CosmicAfro and @theripper93
- Animations added since 1.3.0 will most likely not have 3D Canvas animations as I do not use the module, but hundreds of configurations should still be available

# 2.3.0
- Verified Foundry VTT V13 compatibility
- Updated Rend animation

# 2.2.2
- Updated sound effects for Magic Missile, Scorching Ray, and a few other animations.
- Added animation configuration for the Vampire's Grave Strike attack.
- Fixed issue with Spirit Guardians animation not always playing properly.

# 2.2.1
- Fixed the module playing animations of certain spells when using an item they enchanted.
  - i.e. Magic Weapon casting animation will no longer play when attacking with a weapon enchanted by the spell.

# 2.2.0
- Added 186 animations related to creatures in the Monster Manual (2024).

# 2.1.1
- Added metadata to missing animations.
- Updated Paladin auras.
- Removed "Heal" animation.

# 2.1.0
- Revisited all the weapons, spells, and character features in the new 2025 Player's Handbook, as well as Tasha's Cauldron of Everything, and Xanathar's Guide to Everything. 
- Added some missing bits such as the spells of Acquisitions Incorporated.
- Revisited animations using older JB2A animations for possible updates to new assets.

# 1.7.1
Fixed incorrect file extension used in new Insect Plague configuration

# 1.7.0

This is for Foundry V12 but will also work for V11 and should even work with V10 (untested.)

D&D5e Animations is still set up based on the 2014 version of D&D 5e and its books, with a version meant for the new version to be released much later if necessary.

Most of these are either fixes, small improvements, or adding either an On Token or Template animation for some spells that I've run into that have changed creating a template or not in Foundry.

- Abi-Dalzim's Horrid Wilting - Set to persistent
- Acid Arrow - Fixed Target animation
- Acid Splash - Turned off source animation (that played Cure Wounds animations by mistake) Antipathy/Sympathy - Added Template animation
- Blade Barrier - Added On Token animation
- Control - New On Token animation
- Control Flames - New Template animation
- Control Water - New Template animation
- Control Weather - New On Token animation
- Destructive Wave - Turned off Remove Template and Above Templates Earth Tremor - Tweaked animation
- Earthquake - New On Token animation
- Fabricate - New On Token animation
- Fear - Slight tweaks
- Fire Storm - Added On Token animation
- Forcecage - Added On Token animation
- Freezing Sphere - Fix so animation plays with full name (Otiluke's Freezing Sphere) Hold Person - Changed animations to be enchantment-themed Hypnotic Pattern - Slight tweaks
- Ice Knife - Created Range effect
- Infernal Calling - Set to Play On Source
- Insect Plague - Tweaked animation
- Investiture of Flame - New Template animation
- Investiture of Stone - New Template animation
- Meteor Swarm - Added On Token animation and small tweak to Preset animation Move Earth - New On Token animation
- Plant Growth - Slight updates
- Power Word Kill - Added dedicated animation
- Power Word Pain - Added dedicated animation
- Power Word Stun - Added dedicated animation
- Private Sanctum - Added On Token effect for versions of the spell without a template Produce Flame - Added Range animation
- Shape Water - New Template animation
- Spirit Shroud - New Aura animation
- Storm of Vengeance - Added On Token animation
- Summon - Set to Play On Source
- Summon Undead - New On Token animation
- Sword Burst - Added Template animation
- Symbol - Added Template for versions of the spell that use one Teleportation Circle - Added On Token animation
- Tidal Wave - Added Template animation
- Tsunami - Added Template animation
- Word of Radiance - New Template animation and tweaked On Token animation


# 1.6.2
- Moved Ice Knife from Ranged animation to Preset (Projectile to template) animation
- Moved Thunderclap from On Token animation to Template
- Moved Faerie Fire from On Token animation to Template

# 1.6.1
- Added Italian translations to settings (thanks @arkangel9056!).

# 1.6.0
- New Animations
  - Ranged
    - Burnt Othur Fumes
    - Catapult Munition
    - Essence of Ether
    - Holy Water
    - Malice
  - On Token
    - Assassin's Blood
    - Ball Bearings
    - Cunning Action
    - Divine Sense
    - Drow Poison
    - Eldritch Master
    - Empty Body
    - Hide in Plain Sight
    - Indomitable
    - Ink (for fun)
    - Magical Tinkering
    - Midnight Tears
    - Oil of Taggit
    - Pale Tincture
    - Patient Defense
    - Perfect Self
    - Poison (for both `Basic Poison` and `Poison, Basic (vial)`)
    - Potion of Poison
    - Purple Worm Poison
    - Primeval Awareness
    - Serpent Venom
    - Slow Fall
    - Sorcery Points
    - Soul of Artifice
    - Step of the Wind
    - Stroke of Luck
    - Torpor
    - Truth Serum
    - Uncanny Dodge
    - Vanish
  - Preset
    - Caltrops
- Changed Animations
  - On Token
    - Arcane Recovery (removed accidental source animation)

# 1.5.0
- Fixed typo in 3D Canvas integration not consistently referring to the Patreon version of JB2A assets and sometimes referring to the free version. (The Premium version is the default. You have the money.)
- Added the following Animations:
  - Ranged
    - Danse Macabre
    - Enemies Abound
    - Negative Energy Flood
    - Psychic Scream
    - Soul Cage

  - On Token
    - Air Bubble
    - Ashardalon's Stride
    - Beast Bond
    - Blade of Disaster
    - Borrowed Knowledge
    - Catnap
    - Ceremony
    - Create Homunculus
    - Create Spelljamming Helm
    - Crown of Stars
    - Draconic Transformation*
    - Druid Grove
    - Earthbind
    - Earth Tremor
    - Find Greater Steed
    - Fizban's Platinum Shield
    - Guardian of Nature
    - Holy Weapon
    - Illusory Dragon
    - Infernal Calling
    - Investiture of Flame
    - Investiture of Ice*
    - Investiture of Stone
    - Investiture of Wind*
    - Invulnerability
    - Kinetic Jaunt
    - Maelstrom
    - Melf's Minute Meteors
    - Mental Prison
    - Mighty Fortress
    - Primordial Ward
    - Raulothim's Psychic Lance
    - Scatter
    - Shadow Blade
    - Silvery Barbs
    - Skill Empowerment
    - Skywrite
    - Sword Burst
    - Telepathy
    - Temple of the Gods
    - Tenser's Transformation
    - Tidal Wave
    - Tiny Servant
    - Tsunami

  - Template
    - Abi-Dalzim's Horrid Wilting
    - Bones of the Earth
    - Conjure Volley
    - Control Winds
    - Create Bonfire
    - Dawn
    - Draconic Transformation (The D&D Beyond Importer version of these spells casts the them with a template, though I wanted to make non-template versions as well)
    - Dragon's Breath
    - Dust Devil
    - Erupting Earth
    - Investiture of Ice*
    - Investiture of Wind*
    - Maximilian's Earthen Grasp
    - Nathair's Mischief
    - Pyrotechnics
    - Transmute Rock
    - Wall of Light (removed On Token version)
    - Wall of Sand
    - Wall of Water
    - Watery Sphere
    - Warding Wind
    - Whirlwind
    - Wrath of Nature
  - Preset
    - Enervation
    - Snilloc's Snowball Swarm
    - Vitriolic Sphere
- Changed the following Animations:
  - Templates
    - Wall of Stone (changed to texture)
- Removed the following Animations:
  - On Token
    - Wall of Light (added Template version)

# 1.4.0
- Added the Advanced Melee Attack Macro by Jules to the D&D5e Animations Macros compendium so it can be used to add trails and other effects to weapons that use the new animations. Some example items have been added to a second compendium, look at the A-A settings of the items for the macro arguments.

- Added the following animations:
  - Melee
    - Baton
    - Bone
    - Butterfly
    - Cutlass
    - Dagger
    - Katana
    - Katar
    - Knife
    - Machete
    - Naginata
    - Ninjato
    - Odachi (Nodachi also triggers it)
    - Shield (excludes spells)
    - Strike
    - Tanto

  - Ranged
    - Antipathy/Sympathy
    - Boomerang
    - Kunai
    - Missile
    - Planar Binding
    - Shuriken
    - Snow Ball

  - On Token
    - Animate Objects
    - Arcane/Bigby's Hand
    - Arcane/Mordenkainen's Sword
    - Awaken
    - Clone
    - Demiplane
    - Faithful Hound
    - Forbiddance
    - Glibness
    - Guards and Wards
    - Magic Jar
    - Magnificent Mansion
    - Mass Heal
    - Secret Chest
    - Sequester
    - Shapechange
    - Simulacrum
    - Transport via Plants
    - Word of Recall

  - Template
    - Fabricate
    - Forcecage
    - Mass Cure Wounds
    - Private Sanctum
    - Reverse Gravity
    - Spiritual Weapon (for SRD version)
    - Storm of Vengeance
    - Weird

- Changed the following animations:
  - Melee
    - Scythe (animation)
    - Sickle (animation)

  - Ranged
    - Bow (sound)
    - Crossbow (sound)
    - Gun (sound)
    - Musket (sound)
    - Revolver (sound)
    - Rifle (sound)
    - Pistol (sound)

  - On Token
    - Flame Blade (set to exact match)
    - Green-Flame Blade (set to exact match)
    - Heal (set to exact match)
    - Spiritual Weapon (overhauled)

  - Active Effects
    - Shield (now excludes equipment)

- Removed the following animations:

  - On Token
    - Shield (reduntant with Active Effect)

  - Active Effects
    - Charmed
    - Deafended
    - Frightened
    - Grappled
    - Incapacitated
    - Paralyzed
    - Poisoned
    - Prone
    - Restrained
    - Stunned
    - Unconscious

Most of the removals were status conditions that were added earlier and caused problems.
You can add them yourself if you wish and they won't be overwritten, but they will no longer be in the module.

# 1.3.0
- Verified V11 Compatibility.
- All animations now have a 3D Canvas configuration (thanks to @CosmicAfro and @theripper93!)

# 1.2.1
- Enabled Force Exact Match in almost all Auras, Presets, and Active Effects to prevent accidentally triggering them
- Set the Token Alpha value to 0.01 for all Teleportation Preset spells (Dimension Door, Misty Step, etc) to prevent tokens turning invisible for some people
- New Animations for:
  - Deflect Missiles
  - Stunning Strike
  - Quickened Healing

# 1.2.0
- Added sounds, for real this time.

# 1.1.2
- Updated all animations due to a mismatch between the given autorec and sound files. As in, the autorec contained sounds that were not ready yet.

# 1.1.1
- Incremented the versions of all animations due to a mishap in 1.1.0 where the updated animations did not have an incremented version.

# 1.1.0
- Added sounds and Tiny Hut image.

# 1.0.0
- Create the module.
