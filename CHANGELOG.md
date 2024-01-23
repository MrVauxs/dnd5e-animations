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
