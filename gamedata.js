// ============================================================================
// NIMBLE TTRPG - Complete Game Data
// Auto-generated companion/character sheet data file
// ============================================================================

window.GAME_DATA = {

  // ==========================================================================
  // STATS
  // ==========================================================================
  STATS: ["STR", "DEX", "INT", "WIL"],

  // ==========================================================================
  // STAT ARRAYS
  // ==========================================================================
  STAT_ARRAYS: {
    standard: { name: "Standard", values: [2, 2, 0, -1] },
    balanced: { name: "Balanced", values: [2, 1, 1, 0] },
    minMax:   { name: "Min-Max",  values: [3, 1, -1, -1] }
  },

  // ==========================================================================
  // SKILLS
  // ==========================================================================
  SKILLS: [
    { name: "Arcana",      stat: "INT", description: "Knowledge of magic, magical creatures, and the arcane arts. Used to identify spells, enchantments, and magical phenomena." },
    { name: "Examination", stat: "INT", description: "Ability to investigate, search for clues, and analyze objects or scenes. Used for detailed inspection and research." },
    { name: "Finesse",     stat: "DEX", description: "Sleight of hand, lockpicking, pickpocketing, and other tasks requiring manual dexterity and fine motor control." },
    { name: "Influence",   stat: "WIL", description: "Persuasion, deception, intimidation, and performance. Used when trying to sway others through social interaction." },
    { name: "Insight",     stat: "WIL", description: "Reading people, detecting lies, sensing motives, and understanding emotional undercurrents in conversation." },
    { name: "Lore",        stat: "INT", description: "Knowledge of history, religion, geography, politics, and general world knowledge." },
    { name: "Might",       stat: "STR", description: "Feats of raw physical power: lifting, breaking, pushing, climbing, swimming, and athletic endeavors." },
    { name: "Naturecraft", stat: "WIL", description: "Survival skills, animal handling, tracking, foraging, navigating the wilderness, and understanding nature." },
    { name: "Perception",  stat: "WIL", description: "Awareness of surroundings, spotting hidden creatures or objects, and noticing subtle environmental details." },
    { name: "Stealth",     stat: "DEX", description: "Moving silently, hiding, blending into shadows, and avoiding detection." }
  ],

  // ==========================================================================
  // LANGUAGES
  // ==========================================================================
  LANGUAGES: [
    "Common", "Dwarvish", "Elvish", "Goblin", "Infernal",
    "Thieves' Cant", "Celestial", "Draconic", "Primordial", "Deep Speak"
  ],

  // ==========================================================================
  // CONDITIONS
  // ==========================================================================
  CONDITIONS: [
    { name: "Blinded",             description: "Can't see. Attacks against you have advantage, and your attacks have disadvantage." },
    { name: "Bloodied",            description: "At half HP or less. Some abilities trigger or change when a creature is Bloodied." },
    { name: "Charmed",             description: "Sees the charmer as an ally. The charmer has advantage on social interactions with you." },
    { name: "Dazed",               description: "Heroes: lose 1 action. Monsters: can perform one less action on their next turn." },
    { name: "Dying",               description: "At 0 HP. Actions are limited to 1, Concentration is broken. Attacking or casting causes 1 Wound unless you make a DC 10 STR save. Taking damage while Dying causes 2 Wounds; a crit causes 3 instead." },
    { name: "Frightened",          description: "Disadvantage on rolls when the source of fear is nearby; Speed halved when moving closer to it." },
    { name: "Grappled/Restrained", description: "Cannot move. Attacks against you have advantage. Restrained functions the same way but is caused by objects (chains, rope, roots) and ignores size restrictions." },
    { name: "Hampered",            description: "Any creature with actions or movement reduced (e.g., Dazed, Grappled/Restrained, Prone, Slowed, Difficult Terrain). Some Ice spells have additional effects against Hampered targets." },
    { name: "Incapacitated",       description: "Can't do anything. Attacks against you have advantage, and melee attacks that hit, crit." },
    { name: "Invisible",           description: "Cannot be seen. Your attacks have advantage, and attacks against you have disadvantage." },
    { name: "Petrified",           description: "Incapacitated with all the benefits and drawbacks of being a rock. Immune to most damage except from large explosions, picks, or similar tools." },
    { name: "Poisoned",            description: "Disadvantage on rolls (typically, healing ends this condition)." },
    { name: "Prone",               description: "Movement costs twice as much, and disadvantage on attacks. Melee attacks against you have advantage; Ranged have disadvantage. Spend 3 spaces of your Speed to stand up." },
    { name: "Riding",              description: "You move with the creature you are riding. Any attacks that miss you, strike them." },
    { name: "Silenced",            description: "Cannot cast spells or use other abilities that require speaking (e.g., Commander's Orders)." },
    { name: "Slowed",              description: "Speed halved during your next turn." },
    { name: "Taunted",             description: "Disadvantage on attacks except against the most recent taunter." },
    { name: "Wounded",             description: "Has any Wounds. Wounds are serious injuries that gauge how close you are to death; you die at 6 Wounds (unless an ability changes this number). Wounds recover slowly, typically 1 per Safe Rest." },
    // Minor statuses — do nothing on their own; some spells and abilities have additional effects against these targets
    { name: "Smoldering",          description: "Minor status from Fire spells. Does nothing on its own, but some Fire spells and abilities have additional destructive effects against Smoldering creatures. Ends when combat ends." },
    { name: "Charged",             description: "Minor status from Lightning damage. Whenever you take lightning damage, you become Charged for 1 minute (or until combat ends). Some Lightning spells (e.g., Overload) can only be cast while Charged." },
    { name: "Distracted",          description: "Minor status. A distracted target is unaware of you or cannot see you." }
  ],

  // ==========================================================================
  // ANCESTRIES
  // ==========================================================================
  ANCESTRIES: {
    common: [
      {
        name: "Human",
        size: "Medium",
        abilityName: "Tenacious",
        description: "+1 to all skill checks and Initiative rolls. Humans are adaptable, driven, and refuse to give up.",
        languages: ["Common"],
        statMods: { skillBonus: 1, initiativeBonus: 1 }
      },
      {
        name: "Dwarf",
        size: "Medium",
        abilityName: "Stout",
        description: "+2 max Hit Dice. +1 max Wounds. -1 Speed. You know Dwarvish if your INT is not negative.",
        languages: ["Common", "Dwarvish"],
        statMods: { maxHitDiceBonus: 2, maxWoundsBonus: 1, speedMod: -1 }
      },
      {
        name: "Elf",
        size: "Medium",
        abilityName: "Lithe",
        description: "Advantage on Initiative. +1 Speed. You know Elvish if your INT is not negative.",
        languages: ["Common", "Elvish"],
        statMods: { initiativeAdvantage: true, speedMod: 1 }
      },
      {
        name: "Halfling",
        size: "Small",
        abilityName: "Elusive",
        description: "+1 to Stealth. If you fail a save, you can succeed instead, 1/Safe Rest.",
        languages: ["Common"],
        statMods: { stealthBonus: 1, luckyReroll: true }
      },
      {
        name: "Gnome",
        size: "Small",
        abilityName: "Optimistic",
        description: "Allow an ally within Reach 6 to reroll any single die, resets when healed to your max HP. -1 Speed. You know Dwarvish if your INT is not negative (but you call it Gnomish, of course).",
        languages: ["Common", "Dwarvish"],
        statMods: { allyReroll: true, speedMod: -1 }
      }
    ],
    uncommon: [
      {
        name: "Dragonborn",
        size: "Medium",
        abilityName: "Draconic Heritage",
        description: "+1 Armor. (1/Safe Rest) Deal an additional LVL+KEY damage on an attack (ignoring armor) divided as you choose among any of the attack's targets. Recharges whenever you gain a Wound. You know Draconic if your INT isn't negative.",
        languages: ["Common", "Draconic"],
        statMods: { naturalArmor: 1, draconicHeritage: true }
      },
      {
        name: "Goblin",
        size: "Small",
        abilityName: "Skedaddle",
        description: "Can move 2 spaces for free after you become the target of an attack or negative effect (after damage, ignoring difficult terrain). You know Goblin if your INT isn't negative.",
        languages: ["Common", "Goblin"],
        statMods: { skedaddle: true }
      },
      {
        name: "Orc",
        size: "Medium",
        abilityName: "Relentless",
        description: "(1/Safe Rest) When you would drop to 0 HP, you may set your HP to LVL instead. +1 Might. You know Goblin if your INT isn't negative (but you call it Orcish, of course).",
        languages: ["Common", "Goblin"],
        statMods: { mightBonus: 1, relentless: true }
      },
      {
        name: "Kobold",
        size: "Small",
        abilityName: "Wily",
        description: "Advantage on skill checks related to dragons and to Influence friendly creatures. (1/encounter) Force an enemy to reroll a non-critical attack against you. You know Draconic if your INT isn't negative.",
        languages: ["Common", "Draconic"],
        statMods: { attackReroll: true, dragonAdvantage: true }
      },
      {
        name: "Fiendkin",
        size: "Medium",
        abilityName: "Flameborn",
        description: "1 neutral save is advantaged instead. You know Infernal if your INT isn't negative.",
        languages: ["Common", "Infernal"],
        statMods: { neutralSaveAdvantaged: true }
      },
      {
        name: "Bunbun",
        size: "Small",
        abilityName: "Bunny Legs",
        description: "(1/encounter) Before Interposing or after Defending (after damage), hop up to your Speed in any direction for free.",
        languages: ["Common"],
        statMods: { freeHop: true }
      }
    ],
    exotic: [
      {
        name: "Birdfolk",
        size: "Small/Medium",
        abilityName: "Hollow Bones",
        description: "You can fly as long as you are wearing armor no heavier than Leather. Crits against you are Vicious (the attacker rolls 1 additional die). Forced movement moves you twice as far.",
        languages: ["Common"],
        statMods: { flySpeed: true, viciousCrits: true, doubleForcedMovement: true }
      },
      {
        name: "Celestial",
        size: "Medium",
        abilityName: "Highborn",
        description: "Your disadvantaged save is Neutral instead. You know Celestial if your INT isn't negative.",
        languages: ["Common", "Celestial"],
        statMods: { disadvantagedSaveNeutral: true }
      },
      {
        name: "Changeling",
        size: "Medium",
        abilityName: "New Place, New Face",
        description: "+2 Shifting Skill Points. You may take on the appearance of any ancestry (transformation time 10 min). When you do, you may move your 2 Shifting Skill Points into any 1 skill.",
        languages: ["Common"],
        statMods: { shiftingSkillPoints: 2 }
      },
      {
        name: "Crystalborn",
        size: "Medium",
        abilityName: "Reflective Aura",
        description: "(1/encounter) When you Defend, gain KEY armor and deal KEY damage back to the attacker (ignoring their armor).",
        languages: ["Common"],
        statMods: { reflectiveAura: true }
      },
      {
        name: "Dryad/Shroomling",
        size: "Small/Medium",
        abilityName: "Danger Pollen/Spores",
        description: "Whenever you gain one or more Wounds, you excrete soporific spores: all adjacent enemies are Dazed. You know Elvish if your INT isn't negative.",
        languages: ["Common", "Elvish"],
        statMods: { dangerSpores: true }
      },
      {
        name: "Half-Giant",
        size: "Large",
        abilityName: "Strength of Stone",
        description: "(1/encounter) Force an enemy to reroll a crit against you. +2 Might. You know Dwarvish if your INT isn't negative (but you call it Giant, of course).",
        languages: ["Common", "Dwarvish"],
        statMods: { mightBonus: 2, critReroll: true }
      },
      {
        name: "Minotaur/Beastfolk",
        size: "Medium",
        abilityName: "Charge",
        description: "When you move at least 4 spaces, you can push a creature in your path 1 space.",
        languages: ["Common"],
        statMods: { charge: true }
      },
      {
        name: "Oozeling/Construct",
        size: "Small/Medium",
        abilityName: "Odd Constitution",
        description: "Increment your Hit Die one step (d6 > d8 > d10 > d12 > d20); they always heal you for the maximum amount. Magical healing always heals you for the minimum amount.",
        languages: ["Common"],
        statMods: { hitDieIncrement: true, maxHitDieHeal: true, minMagicHeal: true }
      },
      {
        name: "Planarbeing",
        size: "Medium",
        abilityName: "Planeshift",
        description: "Whenever you Defend, you can gain 1 Wound to temporarily phase out of the material plane and ignore all effects of the attack. -2 max Wounds.",
        languages: ["Common"],
        statMods: { planeshift: true, maxWoundsMod: -2 }
      },
      {
        name: "Ratfolk",
        size: "Small",
        abilityName: "Scurry",
        description: "Gain +2 armor if you moved on your last turn. +1 Speed.",
        languages: ["Common"],
        statMods: { conditionalArmor: 2, speedMod: 1 }
      },
      {
        name: "Stoatling",
        size: "Small",
        abilityName: "Small But Ferocious",
        description: "Whenever you make a single-target attack against a creature larger than you, roll 1 additional d6 for each size category it is larger. They do the same.",
        languages: ["Common"],
        statMods: { sizeDamageScaling: true }
      },
      {
        name: "Turtlefolk",
        size: "Small/Medium",
        abilityName: "Slow & Steady",
        description: "+4 Armor, -2 Speed.",
        languages: ["Common"],
        statMods: { naturalArmor: 4, speedMod: -2 }
      },
      {
        name: "Wyrdling",
        size: "Small",
        abilityName: "Chaotic Surge",
        description: "(1/encounter) Whenever you or a willing ally within Reach 6 casts a tiered spell, you may allow them to roll on the Chaos Table.",
        languages: ["Common"],
        statMods: { chaoticSurge: true }
      }
    ]
  },

  // ==========================================================================
  // BACKGROUNDS
  // ==========================================================================
  BACKGROUNDS: [
    { name: "Back Out of Retirement", description: "You've forgotten more than most adventurers these days know!", mechanics: "You may gain 1 Wound to use an ability or cast a spell as if you were 1 level higher. -1 max Wounds." },
    { name: "Acrobat",              description: "Can be thrown by a larger ally, REALLY far.", mechanics: "Half damage from falling and forced movement. Can be thrown by a larger ally." },
    { name: "Wild One",             description: "Wild creatures are less frightened of you and more willing to aid you.", mechanics: "+1 Naturecraft. While Field Resting, roll your Hit Die with advantage while in the wild.", bonuses: { skillBonus: { Naturecraft: 1 } } },
    { name: "Devoted Protector",    description: "Choose 1 ally in your party.", mechanics: "You can survive +3 max Wounds as long as they are nearby. Whenever they take a Wound, you do too." },
    { name: "Fey Touched",          description: "You take half damage from all magical effects, double from weapons made of metal (before armor is applied).", mechanics: "Half damage from magical effects. Double damage from metal weapons (before armor)." },
    { name: "Academy Dropout",      description: "School just isn't for everyone! You learn by experience in the real world.", mechanics: "Learn 1 Utility Spell." },
    { name: "Survivalist",          description: "You never run out of your own personal rations. Anything can be food if you try hard enough!", mechanics: "Advantage against poison saves. +1 max Hit Die.", bonuses: { hitDiceMaxMod: 1 } },
    { name: "Made a BAD Choice",    description: "Start with 500 or 1000 extra gold, or an uncommon/rare magical item (that your GM allows).", mechanics: "Extra starting gold (500 or 1000) OR an uncommon/rare magic item. Gain a curse or powerful enemy. Your GM may allow you to choose another background." },
    { name: "Haunted Past",         description: "You are haunted by voices that occasionally give you cryptic advice. Sometimes VERY helpful. Other times they only want to see you suffer.", mechanics: "Advantage on fear-related checks. Cryptic advice from voices." },
    { name: "Ear to the Ground",    description: "Advantage on checks to know or obtain gossip for events that will soon happen or have happened less than 1 year ago.", mechanics: "Advantage on checks related to recent events and gossip." },
    { name: "What? I've Been Around", description: "1/per location: you happen to know JUST the person who has the info or could get you out of a jam.", mechanics: "Roll 1d20: 1-5 they want you DEAD; 6-12 you owe them money; 13-19 they can be convinced to help; 20 they are your biggest fan." },
    { name: "Home at Sea",          description: "Recover twice as many Wounds and HP while resting on a ship or near water.", mechanics: "2x Wound and HP recovery near water. You can fill in for a first mate or captain in a pinch." },
    { name: "At Home Underground",  description: "Safe resting locations underground always count as Lavish lodging for you.", mechanics: "Underground rest = Lavish lodging. You can dig twice as fast. Struggle to rest in rain (INT save)." },
    { name: "Raised by Goblins",    description: "You speak Goblin natively (much better than one who has learned it later in life).", mechanics: "Speak Goblin natively. Auto-detect crude traps. Advantage to notice/disarm sophisticated traps.", bonuses: { languages: ["Goblin"] } },
    { name: "History Buff",         description: "Advantage on all Lore checks related to knowledge about items, facts, or events that happened more than 100 years ago.", mechanics: "Advantage on Lore checks for historical knowledge (100+ years old)." },
    { name: "(Former) Con Artist",  description: "You can forge most documents or mimic voices flawlessly.", mechanics: "Forge documents, mimic voices. Criminal contact in most major cities. Your reputation often precedes you." },
    { name: "(Secretly) Undead",    description: "Unnatural Resilience: You are immune to disease and do not need to eat, drink, or breathe.", mechanics: "Immune to disease. No need to eat, drink, or breathe. Children, animals, and Celestials are uneasy in your presence." },
    { name: "Taste for the Finer Things", description: "You always have up-to-date knowledge of the customs and dress of the upper classes.", mechanics: "Advantage on Influence checks with the upper class." },
    { name: "Fearless",             description: "You are immune to the Frightened condition.", mechanics: "Immune to Frightened. +1 Initiative. -1 Armor.", bonuses: { initiative: 1, armor: -1 } },
    { name: "So Dumb I'm Smart Sometimes", description: "Requires 0 or negative INT at character creation.", mechanics: "Reroll an INT-related skill check, 1/day. Reroll a failed INT save with advantage, 1/Safe Rest.", statRequirements: { INT: { max: 0 } } },
    { name: "Wily Underdog",        description: "Requires 0 or negative STR at character creation.", mechanics: "Reroll a failed STR-related roll and use another stat instead, 1/day.", statRequirements: { STR: { max: 0 } } },
    { name: "Bumblewise",           description: "Requires 0 or negative WIL at character creation.", mechanics: "A result of 1 or less on any WIL-related roll counts as a natural 20 (WIL save, Naturecraft, Perception, Influence, or Insight check).", statRequirements: { WIL: { max: 0 } } },
    { name: "Accidental Acrobat",   description: "Requires 0 or negative DEX at character creation.", mechanics: "Whenever you fail a DEX-related roll, you may roll again. If you still fail, the consequences are BAD.", statRequirements: { DEX: { max: 0 } } },
    { name: "Tradesman/Artisan",    description: "Choose a profession (Baker/Cook, Smith, Stonemason, Weaver, Leatherworker, etc.).", mechanics: "Checks you make related to that profession are made with advantage. You retain special knowledge related to your profession." }
  ],

  // ==========================================================================
  // CLASSES
  // ==========================================================================
  CLASSES: [
    // ---- 1. BERSERKER ----
    {
      name: "Berserker",
      keyStats: ["STR", "DEX"],
      secondaryStats: ["INT", "WIL"],
      hitDie: "d12",
      startingHP: 20,
      saves: { advantaged: "STR", disadvantaged: "INT" },
      armorProficiency: "None",
      weaponProficiency: "All STR Weapons",
      startingGear: ["Battleaxe", "Rations (meat)", "Rope (50 ft.)"],
      retrainFeature: {
        name: "Wrath & Ruin",
        description: "Whenever you perform a notable act of destruction or feat of strength during a Safe Rest, you may choose different Berserker options available to you.",
        icon: "⚔"
      },
      retrainArrays: ["savageArsenal"],
      savageArsenal: [
        { name: "Death Blow", description: "Whenever you crit, double the damage from your Fury Dice." },
        { name: "Deathless Rage", description: "(1/turn) While Dying, you may suffer 1 Wound to gain 1 action and 1 Fury Die." },
        { name: "Eager for Battle", description: "Gain advantage on Initiative. Move 2×DEX spaces for free on your first turn each encounter." },
        { name: "Into the Fray", description: "1 Action. Leap up to 2×DEX spaces toward an enemy. If you land within your weapon's Reach of at least 2 enemies, make an attack against 1 of them for free." },
        { name: "Mighty Endurance", description: "You can now survive an additional 4 Wounds before death." },
        { name: "MORE BLOOD!", description: "Whenever an enemy crits you, gain 1 Fury Die. Whenever you drop to 0 HP, Rage for free." },
        { name: "Rampage", description: "(1/turn) After you land a hit, you may treat your next attack this turn as if you rolled that same amount instead of rolling again." },
        { name: "Swift Fury", description: "Whenever you gain a Fury Die, move up to DEX spaces for free, ignoring difficult terrain." },
        { name: "Thunderous Steps", description: "After moving at least 4 spaces while Raging, you may deal STR Bludgeoning damage to all adjacent creatures where you stop." },
        { name: "Unstoppable Force", description: "While Dying, taking damage causes 1 Wound (instead of 2) and crits inflict 2 Wounds (instead of 3)." },
        { name: "Whirlwind", description: "2 Actions. AoE. Attack ALL targets within your melee weapon's reach." },
        { name: "You're Next!", description: "1 Action. While Raging, you can make a Might skill check to demoralize an enemy within Reach 12 (DC: their current HP). On a success, they immediately flee the battle." }
      ],
      levels: {
        1: [
          { name: "Rage", description: "(1/turn) Action: Roll a Fury Die (1d4) and set it aside. Add it to every STR attack you make. You can have a max of KEY Fury Dice; they are lost when your Rage ends. Your Rage Ends when you leave combat, drop to 0 HP, or go 1 round without attacking or Raging." },
          { name: "That All You Got?!", description: "When you are attacked, you may expend 1 or more Fury Dice to reduce the damage taken by STR+DEX for each die spent." }
        ],
        2: [
          { name: "Intensifying Fury", description: "If you are Raging at the start of your turn, roll 1 Fury Die for free." },
          { name: "One with the Ancients", description: "(1/Safe Rest) When faced with a decision about which direction or course of action to take, you can call upon your ancestors to guide you toward the most dangerous or challenging path." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Berserker subclass: Path of the Mountainheart, Path of the Red Mist, Path of the Titan's Grip, or Path of the Burning Rage." },
          { name: "Bloodlust", description: "Expend 1 or more Fury Dice on your turn, move DEX spaces per die spent for free." }
        ],
        4: [
          { name: "Enduring Rage", description: "While Dying, you Rage automatically for free at the beginning of your turn, have a max of 2 actions instead of 1, and ignore the STR saves to make attacks." },
          { name: "Key Stat Increase", description: "+1 STR or DEX." },
          { name: "Savage Arsenal", description: "Choose 1 ability from the Savage Arsenal." }
        ],
        5: [
          { name: "Rage (2)", description: "You now gain 2 Fury Dice instead of 1 when you Rage." },
          { name: "Secondary Stat Increase", description: "+1 to INT or WIL." }
        ],
        6: [
          { name: "Savage Arsenal (2)", description: "Choose a 2nd Savage Arsenal ability." },
          { name: "Intensifying Fury (2)", description: "Your Fury Dice are now d6s." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." }
        ],
        8: [
          { name: "Savage Arsenal (3)", description: "Choose a 3rd Savage Arsenal ability." },
          { name: "Key Stat Increase", description: "+1 to STR or DEX." }
        ],
        9: [
          { name: "Intensifying Fury (3)", description: "Your Fury Dice are now d8s." },
          { name: "Secondary Stat Increase", description: "+1 to INT or WIL." }
        ],
        10: [
          { name: "Savage Arsenal (4)", description: "Choose a 4th Savage Arsenal ability." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." }
        ],
        12: [
          { name: "Savage Arsenal (5)", description: "Choose a 5th Savage Arsenal ability." },
          { name: "Key Stat Increase", description: "+1 to STR or DEX." }
        ],
        13: [
          { name: "Intensifying Fury (4)", description: "Your Fury Dice are now d10s." },
          { name: "Secondary Stat Increase", description: "+1 to INT or WIL." }
        ],
        14: [
          { name: "Savage Arsenal (6)", description: "Choose a 6th Savage Arsenal ability." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." }
        ],
        16: [
          { name: "Savage Arsenal (7)", description: "Choose a 7th Savage Arsenal ability." },
          { name: "Key Stat Increase", description: "+1 to STR or DEX." }
        ],
        17: [
          { name: "Intensifying Fury (5)", description: "Your Fury Dice are now d12s." },
          { name: "Secondary Stat Increase", description: "+1 to INT or WIL." }
        ],
        18: [
          { name: "DEEP RAGE", description: "Dropping to 0 HP no longer causes your Rage to end." }
        ],
        19: [
          { name: "Epic Boon", description: "Gain an Epic Boon of your choice." }
        ],
        20: [
          { name: "BOUNDLESS RAGE", description: "+1 to any 2 of your stats. Anytime you roll less than 5 on a Fury Die, change it to 5 instead." }
        ]
      }
    },

    // ---- 2. THE CHEAT ----
    {
      name: "The Cheat",
      keyStats: ["DEX", "INT"],
      secondaryStats: ["STR", "WIL"],
      hitDie: "d6",
      startingHP: 10,
      saves: { advantaged: "DEX", disadvantaged: "WIL" },
      armorProficiency: "Leather",
      weaponProficiency: "DEX Weapons",
      startingGear: ["2 Daggers", "Sling", "Cheap Hides", "Chalk"],
      retrainFeature: {
        name: "Trade Secrets",
        description: "Whenever you spend a night talking shop with other roguish types during a Safe Rest, you may choose different Cheat options available to you.",
        icon: "♠"
      },
      retrainArrays: ["underhandedAbilities"],
      underhandedAbilities: [
        { name: "\"Creative\" Accounting", description: "Passive. Steal up to INT actions from your next turn (gain up to INT actions now). The next time you would gain actions, subtract the number stolen. You cannot use this 2 turns in a row." },
        { name: "Exploit Weakness", description: "Passive. Whenever you successfully Assess: Create an Opening against a creature, you can use Vicious Opportunist against them, even if they are not Distracted. This lasts for 1 minute or until you use it against another target." },
        { name: "Feinting Attack", description: "Passive. If you miss for the 2nd time in a single round, you may change the Primary Die roll to any result instead." },
        { name: "How'd YOU Get Here?!", description: "2 Actions. (Reach 12) \"Teleport\" adjacent to a Distracted target, and make a melee attack against them. If you crit, you may \"teleport\" again." },
        { name: "I'm Outta Here!", description: "Passive. When an ally within Reach 4 is crit, you may turn invisible until the end of your next turn and then move up to half your speed for free." },
        { name: "Misdirection", description: "Passive. Gain INT armor. Whenever you Defend, you may halve the damage instead." },
        { name: "Steal Tempo", description: "Passive. When you crit for the second time in a round, your target loses 1 action and you give an ally 1 action." },
        { name: "Sunder Armor", description: "1 Action. After you crit an armored creature, sunder their armor: give the next non-crit Primary Die rolled against them +2." },
        { name: "Tangling Wire", description: "Passive. Whenever you Grapple, you may Restrain instead." },
        { name: "The Setup", description: "1 Action. Reaction (when an ally misses a creature adjacent to you): You can make an Opportunity Attack against them, treating them as Distracted." },
        { name: "Trickshot", description: "Passive. You can use Vicious Opportunist on thrown weapon attacks (but you can't use Twist the Blade on them). Whenever you throw a weapon, you may spend an additional action to have it hit another creature within Reach 2 of it, dealing half as much damage to them." }
      ],
      levels: {
        1: [
          { name: "Sneak Attack", description: "(1/turn) When you crit, deal +1d6 damage." },
          { name: "Vicious Opportunist", description: "(1/turn) When you HIT a Distracted target with a melee attack, you may change the Primary Die roll to whatever you like (changing it to the max value counts as a crit). A target is Distracted if it is adjacent to (or Taunted by) an ally, or if it cannot see you." }
        ],
        2: [
          { name: "Cheat", description: "You're a well-rounded cheater. (1/Round) You may either Move or Hide for free. (1/Safe Rest) You may change any of your skill checks to 10+INT. If you roll less than 10 on Initiative, you may change it to 10 instead. You may gain advantage on skill checks while playing any games, competitions, or placing wagers. If you're caught though..." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Cheat subclass: Tools of the Silent Blade, Tools of the Scoundrel, Tools of the Serpent, or Tools of the Gambler." },
          { name: "Sneak Attack (2)", description: "Your Sneak Attack becomes 1d8." },
          { name: "Thieves' Cant", description: "You learn the secret language of rogues and scoundrels." }
        ],
        4: [
          { name: "Key Stat Increase", description: "+1 DEX or INT." },
          { name: "Underhanded Ability", description: "Choose an Underhanded Ability." }
        ],
        5: [
          { name: "Twist the Blade", description: "Action: Change a Sneak Attack die to whatever you like." },
          { name: "Quick Read", description: "(1/encounter) Gain advantage on an Assess check." },
          { name: "Secondary Stat Increase", description: "+1 WIL or STR." }
        ],
        6: [
          { name: "Underhanded Ability (2)", description: "Choose a 2nd Underhanded Ability." },
          { name: "THAT'S Not What Happened!", description: "(1/Safe Rest) Action: After a Distracted enemy attacks you, you may change the Primary Die roll to whatever you like (changing the die to the minimum value counts as a miss)." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." },
          { name: "Sneak Attack (3)", description: "Sneak Attack damage increases to 2d8." }
        ],
        8: [
          { name: "Underhanded Ability (3)", description: "Choose a 3rd Underhanded Ability." },
          { name: "Key Stat Increase", description: "+1 to DEX or INT." }
        ],
        9: [
          { name: "Sneak Attack (4)", description: "Sneak Attack damage increases to 2d10." },
          { name: "Secondary Stat Increase", description: "+1 to WIL or STR." }
        ],
        10: [
          { name: "Underhanded Ability (4)", description: "Choose a 4th Underhanded Ability." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." },
          { name: "Sneak Attack (5)", description: "Sneak Attack damage increases to 2d12." }
        ],
        12: [
          { name: "Underhanded Ability (5)", description: "Choose a 5th Underhanded Ability." },
          { name: "Key Stat Increase", description: "+1 to DEX or INT." }
        ],
        13: [
          { name: "Twist the Blade (2)", description: "(1/turn) You can Twist the Blade for free." },
          { name: "Secondary Stat Increase", description: "+1 WIL or STR." }
        ],
        14: [
          { name: "Underhanded Ability (6)", description: "Choose a 6th Underhanded Ability." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." },
          { name: "Sneak Attack (6)", description: "Sneak Attack damage increases to 2d20." }
        ],
        16: [
          { name: "Underhanded Ability (7)", description: "Choose a 7th Underhanded Ability." },
          { name: "Key Stat Increase", description: "+1 to DEX or INT." }
        ],
        17: [
          { name: "Sneak Attack (7)", description: "Sneak Attack damage increases to 3d20." },
          { name: "Secondary Stat Increase", description: "+1 to WIL or STR." }
        ],
        18: [
          { name: "Underhanded Ability (8)", description: "Choose an 8th Underhanded Ability." }
        ],
        19: [
          { name: "Epic Boon", description: "Gain an Epic Boon of your choice." }
        ],
        20: [
          { name: "Supreme Execution", description: "+1 to any 2 of your stats. When you attack with a blade, you do not require targets to be Distracted to trigger Vicious Opportunist." }
        ]
      }
    },

    // ---- 3. COMMANDER ----
    {
      name: "Commander",
      keyStats: ["STR", "INT"],
      secondaryStats: ["DEX", "WIL"],
      hitDie: "d10",
      startingHP: 17,
      saves: { advantaged: "STR", disadvantaged: "DEX" },
      armorProficiency: "Mail, Shields",
      weaponProficiency: "All Martial",
      startingGear: ["Short Sword", "Javelins (4)", "Rusty Mail"],
      retrainFeature: {
        name: "Rigorous Training",
        description: "Whenever you train with your party or other soldiers during a Safe Rest, you may choose different Commander options available to you.",
        icon: "✠"
      },
      retrainArrays: ["commandersOrders", "combatTactics", "weaponMastery"],
      commandersOrders: [
        { name: "Commanding Presence", description: "1 Action. (1/encounter) Make an Influence check, and Command an enemy to perform a single simple action and they spend their entire next turn obeying it: 1-9 Move! (the creature moves to a place you choose). 10-19 Kneel! (Move them, then they are considered Prone). 20+ Strike! (They move and attack a target of your choice)." },
        { name: "Face Me!", description: "0 Actions. After an enemy crits or attacks a dying ally, you may Taunt them. Lasts until you drop to 0 HP." },
        { name: "Hold the Line!", description: "1 Action. (1/encounter) Reaction (when an ally drops to 0 HP): Command them to continue the fight! Set their HP to 3× your LVL." },
        { name: "I Can Do This ALL DAY!", description: "1 Action. (1/encounter) Reaction (when you would drop to 0 HP): Expend any number of Hit Dice and set your HP to the sum rolled instead (do not add your STR)." },
        { name: "Move it! Move it!", description: "Passive. When you roll Initiative, give yourself and an ally advantage on the roll and +3 speed for 1 round." },
        { name: "Reposition!", description: "1 Action. Command 1 ally to move up to their speed (or 2 allies up to half their speed) for free. You may use this as a reaction on an ally's turn." }
      ],
      combatTactics: [
        { name: "Heavy Strike", description: "When you hit, knockback your target STR spaces and deal extra damage equal to a roll of your Combat Die." },
        { name: "Inerrant Strike", description: "When you miss, reroll the attack, add 1 to the Primary Die, and deal extra damage equal to a roll of your Combat Die." },
        { name: "Lunging Strike", description: "Gain +1 Reach on an attack and deal extra damage equal to 2× a roll of your Combat Die." },
        { name: "Sweeping Strike", description: "Select any contiguous area within your weapon's Reach and damage ALL targets there (AoE attacks do not miss on a 1, nor crit on the max)." }
      ],
      weaponMastery: [
        { name: "Slashing", description: "(1/turn) Your attacks with slashing weapons can strike 1 additional creature adjacent to you and your target." },
        { name: "Bludgeoning", description: "(1/turn) Your attacks with bludgeoning weapons deal +10 damage vs Armored foes." },
        { name: "Piercing", description: "(1/turn) Your attacks with piercing weapons can strike another creature behind your target within Reach." }
      ],
      levels: {
        1: [
          { name: "Coordinated Strike!", description: "(1/encounter) You and an ally within Reach 6 both immediately make a weapon/unarmed attack or cast a cantrip for free." }
        ],
        2: [
          { name: "Fit for Any Battlefield", description: "Choose a Combat Tactic. When you roll Initiative, gain STR Combat Dice (each a d6); they are lost when combat ends if unspent." },
          { name: "Field Medic", description: "Roll 1 additional die for any health potion you administer. Whenever you or an ally spends any number of Hit Dice to recover HP, if you spent at least ten minutes examining their wounds, they can add your Examination bonus to the HP recovered." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Commander subclass: Champion of the Bulwark, Vanguard, Phalanx, Arena, or Siege-Breaker." }
        ],
        4: [
          { name: "Commander's Orders", description: "Choose 2 Commander's Orders." },
          { name: "Key Stat Increase", description: "+1 STR or INT." }
        ],
        5: [
          { name: "Master Commander", description: "Your Combat Dice are now d8s. You gain an additional pool of INT uses of Coordinated Strike to use per Safe Rest (you may use Coordinated Strike only 1/round). Attacks made from your Coordinated Strikes also now ignore disadvantage." },
          { name: "Secondary Stat Increase", description: "+1 DEX or WIL." }
        ],
        6: [
          { name: "Fit for Any Battlefield (2)", description: "Choose another Combat Ability or gain +1 max Combat Dice." },
          { name: "Weapon Mastery", description: "You may sheathe a weapon and draw a different one 2×/round for free. Choose a Weapon Mastery." }
        ],
        7: [
          { name: "Subclass", description: "Gain your Commander subclass feature." }
        ],
        8: [
          { name: "Fit for Any Battlefield (3)", description: "Choose another Combat Ability or gain +1 max Combat Dice." },
          { name: "Key Stat Increase", description: "+1 STR or INT." }
        ],
        9: [
          { name: "Master Commander (2)", description: "Your Combat Dice are now d10s. +1 use of Coordinated Strike." },
          { name: "Secondary Stat Increase", description: "+1 DEX or WIL." }
        ],
        10: [
          { name: "Fit for Any Battlefield (4)", description: "Choose another Combat Ability or gain +1 max Combat Dice." },
          { name: "Weapon Mastery (2)", description: "Choose a 2nd Weapon Mastery." }
        ],
        11: [
          { name: "Subclass", description: "Gain your Commander subclass feature." }
        ],
        12: [
          { name: "Fit for Any Battlefield (5)", description: "Choose another Combat Ability or gain +1 max Combat Dice." },
          { name: "Key Stat Increase", description: "+1 STR or INT." }
        ],
        13: [
          { name: "Master Commander (3)", description: "Your Combat Dice are now d12s. +1 use of Coordinated Strike." },
          { name: "Secondary Stat Increase", description: "+1 DEX or WIL." }
        ],
        14: [
          { name: "Weapon Mastery (3)", description: "You have complete mastery of all weapon types." }
        ],
        15: [
          { name: "Subclass", description: "Gain your Commander subclass feature." }
        ],
        16: [
          { name: "Fit for Any Battlefield (6)", description: "Choose another Combat Ability or gain +1 max Combat Dice." },
          { name: "Key Stat Increase", description: "+1 STR or INT." }
        ],
        17: [
          { name: "Master Commander (4)", description: "Your Combat Dice are now d20s. +1 use of Coordinated Strike." },
          { name: "Secondary Stat Increase", description: "+1 DEX or WIL." }
        ],
        18: [
          { name: "Unparalleled Tactics", description: "The first time each encounter you use Coordinated Strike, an ally who can hear you also gains 1 action to use on their next turn." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon (see pg. 23 of the GM's Guide)." }
        ],
        20: [
          { name: "Captain of Legions", description: "+1 to any 2 of your stats. The 1st time each encounter you use Coordinated Strike, INT allies gain +1 action (replaces Unparalleled Tactics)." }
        ]
      }
    },

    // ---- 4. HUNTER ----
    {
      name: "Hunter",
      keyStats: ["DEX", "WIL"],
      secondaryStats: ["STR", "INT"],
      hitDie: "d8",
      startingHP: 13,
      saves: { advantaged: "DEX", disadvantaged: "INT" },
      armorProficiency: "Leather",
      weaponProficiency: "DEX Weapons",
      startingGear: ["Shortbow", "Cheap Hides", "Dagger", "Hunting Trap"],
      retrainFeature: {
        name: "Remember the Wild",
        description: "Whenever you spend a day in the wilderness during a Safe Rest, you may choose different Hunter options available to you.",
        icon: "🌲"
      },
      retrainArrays: ["thrillOfTheHuntAbilities"],
      thrillOfTheHuntAbilities: [
        { name: "Addling Arrow", description: "1 Action. Shoot a target, the next attack they make must be against the closest other creature, chosen at random." },
        { name: "Come Get Some!", description: "1 Action. Attack a target. It is Taunted by you until the end of their next turn." },
        { name: "Decoy", description: "0 Actions. When you Defend: The attack misses instead, and you can move up to half your speed away (where you really were all along!)." },
        { name: "Fleet Feet", description: "0 Actions. (1/round) Move up to your speed for free, ignoring difficult terrain." },
        { name: "Grease Trap", description: "1 Action. (1/encounter) Reaction (when an enemy moves adjacent to you or an ally within Reach 6): Target falls Prone, is vulnerable to the next fire damage it takes, and is treated as if it is Smoldering." },
        { name: "Hail of Arrows", description: "2 Actions. (Half range) Shoot and Slow all creatures within a 3×3 area." },
        { name: "Heavy Shot", description: "1 Action. (Half range) Shoot a creature and knock them back 2 spaces." },
        { name: "Incendiary Shot", description: "1 Action. (Half range) Attack with a ranged weapon, add WIL d8 fire damage." },
        { name: "Multishot", description: "1 Action. (Half range) Shoot your Quarry and select a 2nd target within 2 spaces of them to take the same amount of damage." },
        { name: "Pinning Shot", description: "3 Actions. Shoot your Quarry, rolling 3 times the normal amount of dice. They are Restrained until they can escape (DC 10+WIL)." },
        { name: "Snare Trap", description: "1 Action. (1/encounter) Reaction (when an enemy moves adjacent to you or an ally within Reach 6): Move them back 1 space and Restrain them (escape DC 10+WIL)." },
        { name: "Sharpshooter", description: "1 Action. If you have not moved this turn and your Quarry is beyond Reach 3, attack them for double damage." },
        { name: "Vital Shot", description: "1 Action. (Half Range) Shoot your Hampered Quarry. Ignore their Armor or double your Hunter's Mark damage bonus if they have none." },
        { name: "Wild Instinct", description: "0 Actions. (1/round) (Costs 0 TotH charges if you have none) Assess, with advantage." }
      ],
      levels: {
        1: [
          { name: "Hunter's Mark", description: "Action: A creature you can see is marked as your Quarry for 1 day (or until you mark another creature). It can't be hidden from you, and your attacks against it gain your choice of advantage OR +LVL damage (choose before each attack)." },
          { name: "Forager", description: "Gain advantage on skill checks to find food and water in the wild." }
        ],
        2: [
          { name: "Thrill of the Hunt", description: "Choose 2 Thrill of the Hunt (TotH) abilities. Gain a charge to use these abilities during that encounter whenever: You HIT your Quarry in melee. You CRIT your Quarry at range. Your Quarry dies." },
          { name: "Roll & Strike", description: "Action: If you have no Thrill of the Hunt charges, move up to your speed toward your Quarry. If you end adjacent to them, make a melee attack against them for free." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Hunter subclass: Keeper of the Shadowpath, Keeper of the Wild Heart, Keeper of the Pack, or Keeper of Traps." },
          { name: "Tracker's Intuition", description: "You can discern the events of a past encounter by studying tracks and other subtle environmental clues, accurately determining the kind and amount of creatures, their direction, key actions, and passage of time." }
        ],
        4: [
          { name: "Thrill of the Hunt (2)", description: "Choose a 3rd Thrill of the Hunt ability." },
          { name: "Key Stat Increase", description: "+1 DEX or WIL." },
          { name: "Explorer of the Wilds", description: "+2 speed; gain a climbing speed." }
        ],
        5: [
          { name: "Hunter's Resolve", description: "Whenever you have no Thrill of the Hunt charges, gain Hunter's Resolve until the end of your turn: treat all creatures as your Quarry for the purposes of movement and melee attacks." },
          { name: "Final Takedown", description: "(1 Action, 1 TotH charge) Crit your Bloodied Quarry in melee and double the damage of your Hunter's Mark. If they survive, they crit you back." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        6: [
          { name: "Versatile Bowmaster", description: "Whenever you attack with a Longbow, you may roll 2d4 instead of 1d8; or with a Crossbow, 2d8 instead of 4d4." },
          { name: "Thrill of the Hunt (3)", description: "Choose a 4th Thrill of the Hunt ability." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Hunter subclass feature." }
        ],
        8: [
          { name: "Thrill of the Hunt (4)", description: "Choose a 5th Thrill of the Hunt ability." },
          { name: "Key Stat Increase", description: "+1 DEX or WIL." }
        ],
        9: [
          { name: "No Escape", description: "Whenever you see one or more allies make an opportunity attack, you may also make a ranged opportunity attack against the same target." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        10: [
          { name: "Veteran Stalker", description: "Gain a Thrill of the Hunt charge whenever you are first Bloodied in an encounter and for every Wound you gain." },
          { name: "Keen Eye, Steady Hand", description: "Add WIL to your ranged weapon damage." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Hunter subclass feature." }
        ],
        12: [
          { name: "Thrill of the Hunt (5)", description: "Choose a 6th Thrill of the Hunt ability." },
          { name: "Key Stat Increase", description: "+1 DEX or WIL." }
        ],
        13: [
          { name: "Keen Sight", description: "Advantage on Perception checks." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        14: [
          { name: "Thrill of the Hunt (6)", description: "Choose a 7th Thrill of the Hunt ability." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Hunter subclass feature." }
        ],
        16: [
          { name: "Key Stat Increase", description: "+1 DEX or WIL." }
        ],
        17: [
          { name: "Peerless Hunter", description: "You can Defend against your Quarry for free." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        18: [
          { name: "Wild Endurance", description: "Gain 1 Thrill of the Hunt charge at the start of your turns." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Nemesis", description: "+1 to any 2 of your stats. Your Hunter's Mark can target any number of creatures simultaneously." }
        ]
      }
    },

    // ---- 5. MAGE ----
    {
      name: "Mage",
      keyStats: ["INT", "WIL"],
      secondaryStats: ["STR", "DEX"],
      hitDie: "d6",
      startingHP: 10,
      saves: { advantaged: "INT", disadvantaged: "STR" },
      armorProficiency: "Cloth",
      weaponProficiency: "Blades, Staves, Wands",
      startingGear: ["Adventurer's Garb", "Staff", "Soap"],
      retrainFeature: {
        name: "Study!",
        description: "Whenever you study arcane books or are tutored by a higher level Mage during a Safe Rest, you may choose different Mage options available to you.",
        icon: "📚"
      },
      retrainArrays: ["spellshaperAbilities"],
      spellshaperAbilities: [
        { name: "Dimensional Compression", description: "(1 or more mana) +4 range to a spell for each additional mana spent." },
        { name: "Echo Casting", description: "(2x mana, min 1 mana) When you cast a tiered, single-target spell, you may cast a copy of that spell on a 2nd target for free." },
        { name: "Elemental Destruction", description: "(1 or more mana) After you hit with a spell, you may spend 1 or more mana (up to your WIL) to reroll 1 die per mana spent." },
        { name: "Elemental Transmutation", description: "(1 mana) Change the damage type of a spell to: Fire, Ice, Lightning, Necrotic, or Radiant." },
        { name: "Extra-Dimensional Vision", description: "(2 mana) You may ignore the line of sight requirement of a spell. Your spell will phase through barriers and obstacles to reach a target you know of within range." },
        { name: "Methodical Spellweaver", description: "(-2 mana) Spend 1 additional action to reduce the mana cost of a spell by 2 (min 1)." },
        { name: "Precise Casting", description: "(1+ mana) Choose 1 creature per mana spent to be unaffected by a spell you cast." },
        { name: "Stretch Time", description: "(2 mana) Reduce the action cost of a spell by 1 (min 1)." }
      ],
      levels: {
        1: [
          { name: "Elemental Spellcasting", description: "You know the Fire, Ice, and Lightning spell schools and can cast cantrips from them." }
        ],
        2: [
          { name: "Mana and Unlock Tier 1 Spells", description: "You may now cast tier 1 spells and gain a mana pool to cast them. This mana pool's max is always equal to (INT×3)+LVL and recharges on a Safe Rest." },
          { name: "Talented Researcher", description: "Gain advantage on Arcana or Lore checks when you have access to a large amount of books and time to study them." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Mage subclass: Invoker of Control, Invoker of Chaos, Invoker of Wards, Invoker of Flame, Invoker of Frost, or Invoker of Surges." },
          { name: "Elemental Mastery", description: "Learn the Utility Spells from 1 spell school you know." }
        ],
        4: [
          { name: "Spellshaper", description: "You gain the ability to enhance your spells with powerful effects by spending additional mana. Choose 2 Spellshaper abilities." },
          { name: "Tier 2 Spells", description: "You may now cast spells up to tier 2." },
          { name: "Key Stat Increase", description: "+1 INT or WIL." }
        ],
        5: [
          { name: "Elemental Surge", description: "A surge of adrenaline and your attunement with the elements grants you additional power as combat begins. When you roll Initiative, regain WIL mana (this expires at the end of combat if unused)." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        6: [
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." },
          { name: "Elemental Mastery (2)", description: "Learn the Utility Spells from a 2nd spell school you know." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Mage subclass feature." }
        ],
        8: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells and upcast spells at tier 4." },
          { name: "Key Stat Increase", description: "+1 INT or WIL." }
        ],
        9: [
          { name: "Spellshaper (2)", description: "Choose 1 additional Spellshaper ability." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        10: [
          { name: "Elemental Surge (2)", description: "Your Elemental Surge ability now regains WIL+1d4 mana." },
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells and upcast spells at tier 5." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Mage subclass feature." }
        ],
        12: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells and upcast spells at tier 6." },
          { name: "Key Stat Increase", description: "+1 INT or WIL." }
        ],
        13: [
          { name: "Spellshaper (3)", description: "Choose 1 additional Spellshaper ability." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        14: [
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells and upcast spells at tier 7." },
          { name: "Elemental Mastery (3)", description: "Learn the Utility Spells from a 3rd spell school you know." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Mage subclass feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Tier 8 Spells", description: "You may now cast tier 8 spells and upcast spells at tier 8." },
          { name: "Key Stat Increase", description: "+1 INT or WIL." }
        ],
        17: [
          { name: "Elemental Surge (3)", description: "Your Elemental Surge ability now regains WIL+2d4 mana." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        18: [
          { name: "Tier 9 Spells", description: "You may now cast tier 9 spells and upcast spells at tier 9." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Archmage", description: "+1 to any 2 of your stats. The first tiered spell you cast each encounter costs 1 action less and 5 fewer mana." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ]
      }
    },

    // ---- 6. OATHSWORN ----
    {
      name: "Oathsworn",
      keyStats: ["STR", "WIL"],
      secondaryStats: ["DEX", "INT"],
      hitDie: "d10",
      startingHP: 17,
      saves: { advantaged: "STR", disadvantaged: "DEX" },
      armorProficiency: "All Armor",
      weaponProficiency: "Melee STR Weapons",
      startingGear: ["Mace", "Rusty Mail", "Wooden Buckler", "Manacles"],
      retrainFeature: {
        name: "Serve Selflessly",
        description: "Whenever you perform a notable selfless act during a Safe Rest, you may choose different Oathsworn options available to you.",
        icon: "⚖"
      },
      retrainArrays: ["sacredDecrees"],
      sacredDecrees: [
        { name: "Blinding Aura", description: "1 Action. (1/Safe Rest) Enemies in your aura are Blinded until the end of their next turn." },
        { name: "Courage!", description: "0 Actions. (1/Encounter) When you or an ally in your aura would drop to 0 HP, set their HP to 1 instead." },
        { name: "Explosive Judgment", description: "2 Actions. (1/Encounter) Expend your Judgment Dice, deal that much radiant damage to all enemies within Reach 2." },
        { name: "Improved Aura", description: "Passive. +2 aura Reach." },
        { name: "Radiant Aura", description: "1 Action. (WIL/Safe Rest) End any single harmful condition or effect on yourself or another willing creature within your aura (ending \"Dying\" grants 1 HP, ending \"Dazed\" grants 1 action, etc.)." },
        { name: "Reliable Justice", description: "Passive. Whenever you roll Judgment Dice, roll with advantage (roll one extra and drop the lowest)." },
        { name: "Shining Mandate", description: "Passive. (1/Round) When you are attacked while you already have Judgment Dice, an ally within your aura gains a Judgment Die (roll a new one, they add it to their next attack). Gain advantage on checks to see through illusions." },
        { name: "Stand Fast, Friends!", description: "Passive. Whenever you roll Initiative, grant allies temp HP equal to your STR+WIL. You and allies within your aura have advantage against fear and effects that would move or knock Prone." },
        { name: "Unstoppable Protector", description: "Passive. Gain +2 Speed. Nothing can stop you from Interposing for an ally within your aura. If you Interpose for a noncombatant NPC, you may Interpose again this round." },
        { name: "Well Armored", description: "Passive. Whenever you Interpose, gain STR Temp HP." }
      ],
      levels: {
        1: [
          { name: "Radiant Judgment", description: "Whenever an enemy attacks you, roll and set aside 2d6 Judgment Dice (if you currently have none). They are expended on your next attack this encounter, dealing their total as extra radiant damage (they are lost on a miss)." },
          { name: "Lay on Hands", description: "Gain a magical pool of healing power. This pool's max is always equal to 5×LVL and recharges on a Safe Rest. Action: Touch a target and spend any amount of remaining healing power to restore that many HP." }
        ],
        2: [
          { name: "Mana and Radiant Spellcasting", description: "You know Radiant cantrips and tier 1 spells, and gain a mana pool. Your mana pool is equal to WIL + LVL and recharges on a Safe Rest." },
          { name: "Zealot", description: "Whenever you hit with a melee weapon, you may spend mana to deal +5 damage for each mana spent (up to the spell tier you've unlocked)." },
          { name: "Paragon of Virtue", description: "Advantage on Influence checks to convince someone when you are forthrightly telling the truth, disadvantage when misleading." }
        ],
        3: [
          { name: "Subclass", description: "Commit yourself to an Oath and gain its benefits. Options: Oath of Vengeance, Oath of Refuge, Oath of Valor, or Oath of Roaring Thunder." },
          { name: "Radiant Judgment (2)", description: "Your Judgment Dice are d8s." },
          { name: "Sacred Decree", description: "Learn 1 Sacred Decree." }
        ],
        4: [
          { name: "My Life, for My Friends", description: "You can Interpose for free." },
          { name: "Tier 2 Spells", description: "You may now cast spells up to tier 2." },
          { name: "Key Stat Increase", description: "+1 STR or WIL." }
        ],
        5: [
          { name: "Radiant Judgment (3)", description: "Your Judgment Dice are d10s." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Secondary Stat Increase", description: "+1 DEX or INT." }
        ],
        6: [
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." },
          { name: "Sacred Decree (2)", description: "Learn a 2nd Sacred Decree." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Oathsworn subclass feature." },
          { name: "Master of Radiance", description: "Choose 1 Radiant Utility Spell." }
        ],
        8: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells and upcast spells at tier 4." },
          { name: "Radiant Judgment (4)", description: "Your Judgment Dice are d12s." },
          { name: "Key Stat Increase", description: "+1 STR or WIL." }
        ],
        9: [
          { name: "Sacred Decree (3)", description: "Learn a 3rd Sacred Decree." },
          { name: "Secondary Stat Increase", description: "+1 DEX or INT." }
        ],
        10: [
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells and upcast spells at tier 5." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Radiant Judgment (5)", description: "Your Judgment Dice are d20s." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Oathsworn subclass feature." },
          { name: "Master of Radiance (2)", description: "Choose a 2nd Radiant Utility Spell." }
        ],
        12: [
          { name: "Sacred Decree (4)", description: "Learn a 4th Sacred Decree." },
          { name: "Key Stat Increase", description: "+1 STR or WIL." }
        ],
        13: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells and upcast spells at tier 6." },
          { name: "Secondary Stat Increase", description: "+1 DEX or INT." }
        ],
        14: [
          { name: "Sacred Decree (5)", description: "Learn a 5th Sacred Decree." },
          { name: "Radiant Judgment (6)", description: "Whenever you roll Judgment Dice, roll 1 more." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Oathsworn subclass feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Sacred Decree (6)", description: "Learn a 6th Sacred Decree." },
          { name: "Key Stat Increase", description: "+1 STR or WIL." }
        ],
        17: [
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells and upcast spells at tier 7." },
          { name: "Secondary Stat Increase", description: "+1 DEX or INT." }
        ],
        18: [
          { name: "Unending Judgment", description: "+5 damage to melee attacks while you have no Judgment Dice." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Glorious Paragon", description: "+1 to any 2 of your stats. Defend for free whenever you Interpose." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ]
      }
    },

    // ---- 7. SHADOWMANCER ----
    {
      name: "Shadowmancer",
      keyStats: ["INT", "DEX"],
      secondaryStats: ["STR", "WIL"],
      hitDie: "d8",
      startingHP: 13,
      saves: { advantaged: "INT", disadvantaged: "WIL" },
      armorProficiency: "Cloth",
      weaponProficiency: "Blades, Wands",
      startingGear: ["Adventurer's Garb", "Sickle", "Shovel"],
      retrainFeature: {
        name: "Supplicate",
        description: "Whenever you commune with your Patron on a Safe Rest, you may beg them to allow you to choose different Shadowmancer options (they may ask for something in return).",
        icon: "☠"
      },
      retrainArrays: ["lesserInvocations", "greaterInvocations"],
      levels: {
        1: [
          { name: "Conduit of Shadow", description: "Learn the Shadowmancer cantrips: Summon Shadow, Command Shadows, and Shadow Blast. Shadow minions are d12 minions; you can have up to INT Shadows at a time (Shadow Limit). Minions follow the minion rules and abandon you immediately outside of combat." }
        ],
        2: [
          { name: "Master of Darkness", description: "Your Patron grants you knowledge of Necrotic cantrips and tier 1 spells." },
          { name: "Pilfered Power", description: "You have NO mana pool. You may steal power from your patron to cast tiered spells, always at the highest tier you have unlocked. You can do this DEX times before your patron takes notice. Each time you exceed this limit, your patron damages you for half your max HP. Resets on Safe Rest. Max Spell Tier: 1." }
        ],
        3: [
          { name: "Subclass", description: "THE PACT IS SEALED. Choose a Shadowmancer subclass: Pact of the Red Dragon, Pact of the Abyssal Depths, Pact of the Void, Pact of the Endless Swarm, or Pact of the High Celestial." },
          { name: "Lesser Invocation", description: "Choose 1 Lesser Shadow Invocation." },
          { name: "Supplicate", description: "Whenever you commune with your Patron on a Safe Rest, you may beg them to allow you to choose different Shadowmancer options (they may ask for something in return)." }
        ],
        4: [
          { name: "Key Stat Increase", description: "+1 INT or DEX." },
          { name: "A Gift from the Master", description: "Choose 1 Greater Shadow Invocation." }
        ],
        5: [
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells; all of your spells are cast at this tier." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        6: [
          { name: "A Gift from the Master (2)", description: "Choose a 2nd Greater Shadow Invocation." },
          { name: "Shadowmastery", description: "Choose 1 Necrotic Utility Spell." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Shadowmancer subclass level 7 feature." },
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells; all of your spells are cast at this tier." }
        ],
        8: [
          { name: "Key Stat Increase", description: "+1 INT or DEX." },
          { name: "Lesser Invocation (2)", description: "Choose a 2nd Lesser Shadow Invocation." },
          { name: "Shadowmastery (2)", description: "Choose a 2nd Necrotic Utility Spell." }
        ],
        9: [
          { name: "A Gift from the Master (3)", description: "Choose a 3rd Greater Shadow Invocation." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        10: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells; all of your spells are cast at this tier." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Shadowmancer subclass level 11 feature." },
          { name: "Lesser Invocation (3)", description: "Choose a 3rd Lesser Shadow Invocation." }
        ],
        12: [
          { name: "Greedy Pact", description: "When you would take damage from Pilfered Power, make a STR save: 1-9 suffer damage as normal, 10-19 suffer only 10 HP damage, 20+ suffer no damage and cast the spell as if 1 tier higher." },
          { name: "Key Stat Increase", description: "+1 INT or DEX." }
        ],
        13: [
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells; all of your spells are cast at this tier." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        14: [
          { name: "A Gift from the Master (4)", description: "Choose a 4th Greater Shadow Invocation." },
          { name: "Shadowmastery (3)", description: "You know all Necrotic Utility Spells." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Shadowmancer subclass level 15 feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells; all of your spells are cast at this tier." },
          { name: "Key Stat Increase", description: "+1 INT or DEX." }
        ],
        17: [
          { name: "Dire Shadows", description: "Attacks against your shadow minions are made with disadvantage. They take no damage from successful saves." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        18: [
          { name: "A Gift from the Master (5)", description: "Choose a 5th Greater Shadow Invocation." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." },
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells; all of your spells are cast at this tier." }
        ],
        20: [
          { name: "Eldritch Usurper", description: "+1 to any 2 of your stats. (1/Encounter) When you cast Summon Shadow you may summon a Greater Shadow instead." },
          { name: "Greater Shadow", description: "A 5d12 minion. When it dies, it explodes into 5 Shadows (ignoring your Shadow Limit). Place them anywhere within Reach 6." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ]
      },
      lesserInvocations: [
        { name: "Abhorrent Speech", description: "You can communicate with horrible creatures (aberrations, undead, etc.)." },
        { name: "Beguiling Influence", description: "(1/day) You may reroll an Influence check." },
        { name: "Blood Sight", description: "(1/day) You may reroll an Examination check. Additionally, you can detect traces of blood on a surface, even after it has been cleaned." },
        { name: "Devoted Acolyte", description: "Learn 2 of the following languages: Celestial, Draconic, Deep Speak, Infernal, or Primordial. Advantage on Lore checks related to those 2 languages." },
        { name: "Eldritch Sense", description: "You can sense the presence of any shapechanger or creature concealed by magic while within 6 spaces of them." },
        { name: "Gaze of Two Minds", description: "Touch a willing creature and perceive through its senses instead of your own for as long as you hold concentration." },
        { name: "Knowledge from Beyond", description: "Whenever you fail an Insight or Arcana check, you may suffer 1 Wound to succeed instead." },
        { name: "My Favored Pet", description: "One shadow minion can begrudgingly tolerate you outside of combat. It can (very creepily) do any menial task a below average commoner could." },
        { name: "Voice of the Dark", description: "You can communicate telepathically with a humanoid within 6 spaces." },
        { name: "Whispers of the Grave", description: "(1/day) You can ask a dead creature 3 yes/no questions. It can never be questioned this way again." }
      ],
      greaterInvocations: [
        { name: "Armor of Shadows", description: "Passive. Reduce all damage you receive by an amount equal to the number of minions you have." },
        { name: "Fiendish Boon", description: "Passive. Increase your DEX or INT by 1. You have 1 fewer max Hit Dice." },
        { name: "Hungering Shadows", description: "Passive. Whenever one of your Shadows rolls the max, the next tiered spell you cast this encounter does not cost a use of Pilfered Power." },
        { name: "One with Shadows", description: "1 Action. While adjacent to a Shadow or in an area of dim light or darkness, you may become Invisible until you move or attack (summoning and commanding minions does not count as an attack)." },
        { name: "Repelling Blast", description: "Passive. Your Shadow Blast gains: On hit, knockback 2." },
        { name: "Shadow Magus", description: "Passive. Your Shadows gain +4 Reach and deal d10 damage instead." },
        { name: "Shadow Spear", description: "Passive. Your Shadow Blast gains +8 Range, ignores cover, and advantage vs Prone targets (instead of disadvantage)." },
        { name: "Shadow Rush", description: "Passive. Whenever your Shadows attack, instead of rolling damage, you may have any of them deal the max amount, then die." },
        { name: "Shadow Warp", description: "1 Action. (Reach 12) Switch places with a creature that has been dealt necrotic damage this turn." },
        { name: "Swarming Shadows", description: "Passive. Whenever a Shadow rolls the max, summon another Shadow adjacent to the target (ignoring your Shadow Limit)." }
      ]
    },

    // ---- 8. SHEPHERD ----
    {
      name: "Shepherd",
      keyStats: ["WIL", "STR"],
      secondaryStats: ["DEX", "INT"],
      hitDie: "d10",
      startingHP: 17,
      saves: { advantaged: "WIL", disadvantaged: "DEX" },
      armorProficiency: "Mail, Shields",
      weaponProficiency: "STR Weapons, Wands",
      startingGear: ["Rusty Mail", "Mace", "Wooden Buckler", "Bell"],
      retrainFeature: {
        name: "Serve",
        description: "After spending a day tending to a sacred place or serving others during a Safe Rest, you may choose different Shepherd options available to you.",
        icon: "☀"
      },
      retrainArrays: ["sacredGraces"],
      sacredGraces: [
        { name: "Dark Benediction", description: "Passive. Your Lifebinding Spirit can now cast Entice and Withering Touch." },
        { name: "Empowered Companion", description: "Passive. Your Lifebinding Spirit gains +STR damage vs Undead and +WIL healing." },
        { name: "Guiding Spirit", description: "Passive. Whenever your Lifebinding Spirit rolls a 6+ on its damage die, the next attack against that target has advantage." },
        { name: "Hasty Companion", description: "Passive. +4 Reach for your Lifebinding Spirit. It can also act for free when summoned." },
        { name: "Illuminate Soul", description: "1 Action. (WIL times/Safe Rest, Reach 6) Make a creature glow with radiant light for 1 round. Attacks against them are made with your choice of advantage or disadvantage." },
        { name: "Light Bearer", description: "Passive. Your Lifebinding Spirit can cast Heal. Whenever you roll Initiative, regain 1 use of Mend (it expires when combat ends if unused)." },
        { name: "Not Beyond MY Reach", description: "Passive. You may heal creatures that have been dead for less than 1 round. For every 10 HP a dead creature is healed this way, you may have them recover 1 Wound instead (you must heal at least 1 Wound to revive them)." },
        { name: "Vengeful Spirit", description: "1 Action. (AoE Reach 2) Your Lifebinding Spirit sacrifices itself to deal its Harm damage to all enemies within Reach." }
      ],
      levels: {
        1: [
          { name: "Keeper of Life & Death", description: "You know the Radiant & Necrotic cantrips." },
          { name: "My Buddy!", description: "Learn the Lifebinding Spirit cantrip." }
        ],
        2: [
          { name: "Mana and Unlock Tier 1 Spells", description: "You unlock tier 1 Radiant & Necrotic spells and gain a mana pool to cast them. This mana pool's max is always equal to (WIL×3)+LVL and recharges on a Safe Rest." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Shepherd subclass: Luminary of Mercy, Luminary of Malice, or Luminary of Protection." },
          { name: "Master of Twilight", description: "Choose 1 Necrotic and 1 Radiant Utility Spell." }
        ],
        4: [
          { name: "Sacred Grace", description: "Choose 1 Sacred Grace." },
          { name: "Tier 2 Spells", description: "You may now cast spells up to tier 2." },
          { name: "Key Stat Increase", description: "+1 WIL or STR." }
        ],
        5: [
          { name: "Assist Me, My Friend!", description: "Instead of your spirit attacking this round, you may add its damage to one of your melee weapon attacks." },
          { name: "Secondary Stat Increase", description: "+1 INT or DEX." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        6: [
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." },
          { name: "Master of Twilight (2)", description: "Choose a 2nd Necrotic and Radiant Utility Spell." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Shepherd subclass feature." }
        ],
        8: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells and upcast spells at tier 4." },
          { name: "Key Stat Increase", description: "+1 WIL or STR." }
        ],
        9: [
          { name: "Sacred Grace (2)", description: "Choose a 2nd Sacred Grace." },
          { name: "Secondary Stat Increase", description: "+1 INT or DEX." }
        ],
        10: [
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells and upcast spells at tier 5." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Shepherd subclass feature." },
          { name: "Master of Twilight (3)", description: "You know all Necrotic and Radiant Utility Spells." }
        ],
        12: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells and upcast spells at tier 6." },
          { name: "Key Stat Increase", description: "+1 WIL or STR." }
        ],
        13: [
          { name: "Sacred Grace (3)", description: "Choose a 3rd Sacred Grace." },
          { name: "Secondary Stat Increase", description: "+1 INT or DEX." }
        ],
        14: [
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells and upcast spells at tier 7." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Shepherd subclass feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Tier 8 Spells", description: "You may now cast tier 8 spells and upcast spells at tier 8." },
          { name: "Key Stat Increase", description: "+1 WIL or STR." }
        ],
        17: [
          { name: "Revitalizing Blessing", description: "(1/round) Whenever you roll a 6 or higher on one or more healing dice, the target may recover one Wound." },
          { name: "Secondary Stat Increase", description: "+1 INT or DEX." }
        ],
        18: [
          { name: "Tier 9 Spells", description: "You may now cast tier 9 spells and upcast spells at tier 9." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Twilight Sage", description: "+1 to any 2 of your stats. Your Lifebinding Spirit rolls twice as many dice." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ]
      }
    },

    // ---- 9. SONGWEAVER ----
    {
      name: "Songweaver",
      keyStats: ["WIL", "INT"],
      secondaryStats: ["STR", "DEX"],
      hitDie: "d8",
      startingHP: 13,
      saves: { advantaged: "WIL", disadvantaged: "STR" },
      armorProficiency: "Cloth, Leather",
      weaponProficiency: "DEX, Wands",
      startingGear: ["Adventurer's Garb", "Instrument", "Dagger", "Mirror"],
      retrainFeature: {
        name: "Perform!",
        description: "Whenever you perform in a place that inspires you, or exchange barbs with another competent wordsmith during a Safe Rest, you may choose different Songweaver options available to you.",
        icon: "♪"
      },
      retrainArrays: ["lyricalWeaponry"],
      lyricalWeaponry: [
        { name: "Heroic Ballad", description: "+2 max Songweaver's Inspiration charges. When used to reroll an ally's attack, your Inspiration also grants them +WIL damage on the attack." },
        { name: "Inspiring Anthem", description: "(1/encounter) Action: Grant all friendly Dying creatures who can hear you 1 HP and 1 action." },
        { name: "Not My Beautiful Faaace!", description: "(1/encounter) When you Defend, force the attacker to choose another target within range on a failed WIL save (if there is none, the attack fails). If they fail by 5 or more, they attack themselves. On save, they attack you with disadvantage." },
        { name: "Rhapsody of the Normal", description: "When you roll 4 or more on your Vicious Mockery, you may spend a Songweaver's Inspiration charge to suppress any special abilities the target has until the end of their next turn. They can only attack once for 1d4 damage and move up to 6 spaces (no armor, spellcasting, flying, regeneration, or other features)." },
        { name: "Song of Domination", description: "(1/encounter) 2 actions: All enemies within 6 spaces who hear it must make a WIL save. On failure, you move them up to 6 spaces in any direction, and they cannot move on their next turn." }
      ],
      aPeoplePersonFriends: [
        { name: "Stompy", description: "3 actions: Summon a huge hill giant for 1 round. Make a DC 10 Influence check. On success, he moves 6 spaces in your chosen direction; on failure, he moves towards YOU instead. He deals everything in his path damage equal to LVL + Influence check result. ANY creature within 6 spaces of Stompy can use this ability once instead of an attack." },
        { name: "Gran Gran", description: "When resting, summon her for 1 hour. She bakes pastries equal to your WIL+INT. Eating one recovers 1 mana, Hit Die, or Wound. They expire in 10 minutes." },
        { name: "Mal, the Malevolent Imp", description: "Summon a tiny fiend for 1 night. He can find out dangerous information or 'take care' of a problem. Make an Influence check (advantage if mischievous/fun task; disadvantage if good/menial task)." },
        { name: "Linos, the Everfriendly", description: "Summon a legendary flying creature to transport you and your party wherever you need to go. He may request a very large amount of food as payment." }
      ],
      levels: {
        1: [
          { name: "Wind Spellcasting", description: "You know cantrips from the Wind school and 1 other school of your choice. You also know Vicious Mockery: Action, Range 12 spaces, 1d4+INT psychic damage (ignoring armor), on hit target is Taunted during their next turn. +2 damage every 5 levels." },
          { name: "Songweaver's Inspiration", description: "(2 x WIL times/Safe Rest) Free Reaction: Allow an ally to reroll a single die related to an attack or save (must keep either result)." }
        ],
        2: [
          { name: "Mana and Unlock Tier 1 Spells", description: "You unlock tier 1 spells in the schools you know and gain a mana pool. Mana maximum = (INT x 3) + LVL. Recharges on a Safe Rest." },
          { name: "Jack of All Trades", description: "When you Safe Rest, you may move a skill point as if you just leveled up." },
          { name: "Song of Rest", description: "(1/day) Whenever you Field Rest, you may play a song and allow anyone who spends Hit Dice to heal additional HP equal to your WIL." }
        ],
        3: [
          { name: "Subclass", description: "Choose Herald of Snark or Herald of Courage." },
          { name: "Quick Wit", description: "When you roll Initiative, regain 2 spent uses of Songweaver's Inspiration (these expire at the end of combat if unused)." },
          { name: "Windbag", description: "Choose 1 Utility Spell from each spell school you know." }
        ],
        4: [
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells and upcast spells at tier 2." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." },
          { name: "Lyrical Weaponry", description: "Choose 1 ability from the Lyrical Weaponry list." },
          { name: "Perform!", description: "Whenever you perform in a place that inspires you, or exchange barbs with another competent wordsmith during a Safe Rest, you may choose different Songweaver options available to you." }
        ],
        5: [
          { name: "A \"People\" Person", description: "Choose 2 friends you know. You can temporarily summon them via song (1/Safe Rest each)." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        6: [
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." },
          { name: "Windbag (2)", description: "Choose a 2nd Utility Spell from each spell school you know." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Songweaver subclass feature." }
        ],
        8: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells and upcast spells at tier 4." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." }
        ],
        9: [
          { name: "Lyrical Weaponry (2)", description: "Choose a 2nd ability from the Lyrical Weaponry list." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        10: [
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells and upcast spells at tier 5." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Songweaver subclass feature." }
        ],
        12: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells and upcast spells at tier 6." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." }
        ],
        13: [
          { name: "Lyrical Weaponry (3)", description: "Choose a 3rd ability from the Lyrical Weaponry list." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        14: [
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells and upcast spells at tier 7." },
          { name: "Windbag (3)", description: "You know all Utility Spells from the spell schools you know." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Songweaver subclass feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Tier 8 Spells", description: "You may now cast tier 8 spells and upcast spells at tier 8." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." }
        ],
        17: [
          { name: "Lyrical Weaponry (4)", description: "Choose a 4th ability from the Lyrical Weaponry list." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        18: [
          { name: "Tier 9 Spells", description: "You may now cast tier 9 spells and upcast spells at tier 9." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "I'm So Famous!", description: "+1 to any 2 of your stats. Your Songweaver's Inspiration cannot fail (your target succeeds)." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ]
      }
    },

    // ---- 10. STORMSHIFTER ----
    {
      name: "Stormshifter",
      keyStats: ["WIL", "DEX"],
      secondaryStats: ["STR", "INT"],
      hitDie: "d8",
      startingHP: 13,
      saves: { advantaged: "WIL", disadvantaged: "STR" },
      armorProficiency: "Cloth, Leather",
      weaponProficiency: "Staves, Wands",
      startingGear: ["Cheap Hides", "Staff", "Strange Plant"],
      retrainFeature: {
        name: "Be Wild",
        description: "Whenever you spend a day with wild animals during a Safe Rest, you may choose different Stormshifter options available to you.",
        icon: "🐺"
      },
      retrainArrays: ["chimericBoons"],
      chimericBoons: [
        { name: "Beast of the Sea", description: "Can move, breathe, and fight underwater without penalty." },
        { name: "Climber", description: "Can walk across walls and ceilings; ignores difficult terrain." },
        { name: "Fleet Footed", description: "+2 speed. Advantage on Stealth checks and against the Grappled condition." },
        { name: "Earthwalker", description: "+2 armor. Can burrow through dirt and unworked rock at half speed (leaving a tunnel behind). Advantage against the Prone condition." },
        { name: "Keen Senses", description: "Advantage on Perception and Assess checks. Unaffected by Blinded." },
        { name: "Leader of the Pack", description: "Advantage against fear and charm effects for yourself and allies within 6 spaces." },
        { name: "Phasebeast", description: "Whenever you shift between this form and your normal form (and vice versa), you may teleport up to 6 spaces away to a place you can see." },
        { name: "Prehensile Tail", description: "Creatures you hit in melee that are your size or smaller are Grappled. If you hit a larger creature, you may move with it when it moves." },
        { name: "Winged", description: "Gain a flying speed. Forced movement moves you twice as far while flying." }
      ],
      direbeastForms: [
        { name: "Fearsome Beast (Large)", description: "Transform into any Large beast. Gain DEX+LVL temp HP (until Beastshift ends). Gore: Action, 1d6+LVL damage, on hit gain LVL temp HP. Fearsome: When you Interpose or Defend, spend 1 mana to force the attacker to reroll (you choose either result)." },
        { name: "Beast of the Pack (Medium)", description: "Transform into a Medium beast. Gain +DEX speed. Thunderfang: Action, 1d4+LVL piercing damage. On crit or kill, Thunderfang gains cumulative +1d4 lightning damage until combat ends. Supercharge: Spend up to WIL mana, next Thunderfang deals +1d8 lightning per mana spent (you take this damage on a miss)." },
        { name: "Beast of Nightmares (Tiny)", description: "Transform into any Tiny beast or insect (must be horrible). Sting: (1/round) Action, Reach 0, 1d4 piercing + 3xLVL acid damage (ignoring armor), on crit 4xLVL instead. Silent But Deadly: Speed 2, cannot Defend or Interpose, attackers cannot target you until you become conspicuous (seen transforming or attacking)." }
      ],
      levels: {
        1: [
          { name: "Master of Storms", description: "You know cantrips from the Lightning and Wind schools." },
          { name: "Beastshift", description: "Action: You can transform into a harmless beast (squirrel, pigeon, etc.). While transformed, you can speak with animals. This form lasts until you drop to 0 HP, cast a spell, or if you end it on your turn for free. You have DEX Beastshift charges; they reset on a Safe Rest." },
          { name: "Tiny Beasts", description: "Whenever you shapeshift into a Tiny beast, attacks against you are made with disadvantage, but ANY damage ends that shapeshift form." }
        ],
        2: [
          { name: "Direbeast Form", description: "You can Beastshift into a Fearsome Beast (Large)." },
          { name: "Mana and Unlock Tier 1 Spells", description: "You unlock tier 1 Wind and Lightning spells and gain a mana pool. Mana maximum = (WIL x 3) + LVL. Recharges on a Safe Rest." }
        ],
        3: [
          { name: "Subclass", description: "Choose Circle of Sky & Storm or Circle of Fang & Claw." },
          { name: "Direbeast Form (2)", description: "You can Beastshift into a Beast of the Pack (Medium)." }
        ],
        4: [
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells and upcast spells at tier 2." },
          { name: "Key Stat Increase", description: "+1 WIL or DEX." },
          { name: "Stormcaller", description: "Learn a Utility Spell from each spell school you know." }
        ],
        5: [
          { name: "Direbeast Form (3)", description: "You can Beastshift into a Beast of Nightmares (Tiny)." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        6: [
          { name: "Chimeric Boon", description: "Choose 2 Chimeric Boons. Whenever you shapeshift into a Direbeast form, you may modify it with 1 Chimeric Boon you know." },
          { name: "Expert Shifter", description: "Gain 1 additional use of Beastshift per Safe Rest." },
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Stormshifter subclass feature." },
          { name: "Stormcaller (2)", description: "Learn a 2nd Utility Spell from each spell school you know." }
        ],
        8: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells and upcast spells at tier 4." },
          { name: "Key Stat Increase", description: "+1 WIL or DEX." },
          { name: "Stormborn", description: "Gain resistance to lightning damage. (1/day) You may gain advantage on a Naturecraft check or Concentration check." }
        ],
        9: [
          { name: "Chimeric Boon (2)", description: "Choose a 3rd Chimeric Boon." },
          { name: "Expert Shifter (2)", description: "Gain 1 additional use of Beastshift per Safe Rest." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        10: [
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells and upcast spells at tier 5." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Stormshifter subclass feature." }
        ],
        12: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells and upcast spells at tier 6." },
          { name: "Key Stat Increase", description: "+1 WIL or DEX." },
          { name: "Chimeric Boon (3)", description: "Select a 4th Chimeric Boon." },
          { name: "Expert Shifter (3)", description: "Gain 1 additional use of Beastshift per Safe Rest." }
        ],
        13: [
          { name: "Secondary Stat Increase", description: "+1 STR or INT." },
          { name: "Stormborn (2)", description: "Instead of rolling dice, deal the max damage of a Wind spell by spending a charge of your Beastshift feature. Whenever you end Beastshift, you may cast a cantrip for free." }
        ],
        14: [
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells and upcast spells at tier 7." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Stormshifter subclass feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Tier 8 Spells", description: "You may now cast tier 8 spells and upcast spells at tier 8." },
          { name: "Key Stat Increase", description: "+1 WIL or DEX." }
        ],
        17: [
          { name: "Chimeric Boon (4)", description: "Select a 5th Chimeric Boon." },
          { name: "Secondary Stat Increase", description: "+1 STR or INT." }
        ],
        18: [
          { name: "Tier 9 Spells", description: "You may now cast tier 9 spells and upcast spells at tier 9." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Archdruid", description: "+1 to any 2 of your stats. (1/encounter) Cast a spell up to tier 4 for free when you enter or leave a Beastshift form." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ]
      }
    },

    // ---- 11. ZEPHYR ----
    {
      name: "Zephyr",
      keyStats: ["DEX", "STR"],
      secondaryStats: ["INT", "WIL"],
      hitDie: "d8",
      startingHP: 13,
      saves: { advantaged: "DEX", disadvantaged: "INT" },
      armorProficiency: "None",
      weaponProficiency: "Melee Weapons",
      startingGear: ["Staff", "Traveling Robes & Sandals"],
      retrainFeature: {
        name: "Focus",
        description: "Whenever you spend time meditating alone in a windy place during a Safe Rest, you may choose different Zephyr options available to you.",
        icon: "☯"
      },
      retrainArrays: ["martialArts"],
      levels: {
        1: [
          { name: "Iron Defense", description: "Your armor equals DEX+STR as long as you are unarmored." },
          { name: "Swift Fists", description: "Your unarmed strikes are not subject to disadvantage imposed by Rushed Attacks, and their damage is 1d4+STR." }
        ],
        2: [
          { name: "Swift Feet", description: "While unarmored, gain +2 speed and +LVL Initiative." },
          { name: "Burst of Speed", description: "When you roll Initiative, gain DEX Bursts of Speed. (1/turn) Spend 1 Burst of Speed to use: Slipstream (Defend, attack misses), Whirling Defense (Defend, armor applies to every attack this round), Swiftstrike (attack ignoring Rushed Attack disadvantage), or Windstep (move ignoring difficult terrain)." }
        ],
        3: [
          { name: "Subclass", description: "Choose Way of Pain or Way of Flame." },
          { name: "Kinetic Momentum", description: "Whenever you gain a Wound, gain a Burst of Speed." },
          { name: "Ethereal Projection", description: "(1/day) By meditating for at least 10 minutes, project an ethereal version of yourself up to 30 ft. away, passing through solid objects. You see through your projection's eyes. It is visible but cannot interact physically. Lasts up to 10 minutes." }
        ],
        4: [
          { name: "Unyielding Resolve", description: "Ignore the first Wound you would suffer each encounter (when-Wounded abilities, such as Kinetic Momentum, still trigger)." },
          { name: "Key Stat Increase", description: "+1 DEX or STR." },
          { name: "Martial Master", description: "Choose a Martial Arts ability." }
        ],
        5: [
          { name: "Reverberating Strikes", description: "Add LVL bludgeoning damage to all of your melee attacks." },
          { name: "Secondary Stat Increase", description: "+1 INT or WIL." }
        ],
        6: [
          { name: "Martial Master (2)", description: "Choose a 2nd Martial Arts Ability." },
          { name: "Infuse Strength", description: "Action: Make an unarmed strike against an ally to infuse them with strength instead of harming them. Expend any number of Hit Dice and heal them (roll each + add STR to each)." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Zephyr subclass feature." }
        ],
        8: [
          { name: "Martial Master (3)", description: "Choose a 3rd Martial Arts Ability." },
          { name: "Key Stat Increase", description: "+1 DEX or STR." }
        ],
        9: [
          { name: "Swift Feet (2)", description: "Gain an additional +2 speed as long as you are unarmored." },
          { name: "Secondary Stat Increase", description: "+1 INT or WIL." }
        ],
        10: [
          { name: "Martial Master (4)", description: "Choose a 4th Martial Arts Ability." },
          { name: "Unyielding Resolve (2)", description: "Ignore the first 2 Wounds you would suffer each encounter." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Zephyr subclass feature." }
        ],
        12: [
          { name: "Martial Master (5)", description: "Choose a 5th Martial Arts Ability." },
          { name: "Key Stat Increase", description: "+1 DEX or STR." }
        ],
        13: [
          { name: "Iron Defense (2)", description: "Your armor is doubled while unarmored." },
          { name: "Secondary Stat Increase", description: "+1 INT or WIL." }
        ],
        14: [
          { name: "Martial Master (6)", description: "Choose a 6th Martial Arts Ability." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Zephyr subclass feature." }
        ],
        16: [
          { name: "Martial Master (7)", description: "Choose a 7th Martial Arts Ability." },
          { name: "Key Stat Increase", description: "+1 DEX or STR." }
        ],
        17: [
          { name: "Unyielding Resolve (3)", description: "Ignore the first 3 Wounds you would suffer each encounter. You have advantage on STR saves while Dying." },
          { name: "Secondary Stat Increase", description: "+1 INT or WIL." }
        ],
        18: [
          { name: "Martial Master (8)", description: "Choose an 8th Martial Arts Ability." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Windborne", description: "+1 to any 2 of your stats. +1 additional Burst of Speed when you roll Initiative. Permanently gain 1 action (while Dying, you have a max of 2 actions)." }
        ]
      },
      martialArts: [
        { name: "Airshift", description: "You cannot be Grappled while conscious. While moving, you may travel across all terrain as normal ground, ignoring all ill effects (e.g., walls/ceilings, water, treetops, lava, spikes, clouds)." },
        { name: "Blur", description: "(1/encounter) When you Defend, you may first move up to half your speed away, taking no damage if you are now out of range or have Full Cover." },
        { name: "Bodily Discipline", description: "You may spend 1 action to end any non-Wound condition on yourself." },
        { name: "Enduring Soul", description: "Each time you roll Initiative, gain Hit Dice equal to the actions you get on your first turn. These Hit Dice expire at the end of combat if unused." },
        { name: "I Jump On His Back!", description: "While moving with your Windstep, if you move into the space of a creature your size or larger, you may jump onto its back. While on a creature this way, gain advantage on melee attacks against it, and any damage you avoid is dealt to it instead." },
        { name: "Kinetic Barrage", description: "Whenever you miss an attack, gain a cumulative +STR bonus to all damage you do for the rest of this encounter." },
        { name: "Mighty Soul", description: "You cannot be moved against your will. Whenever you would fail a saving throw, you may gain a Wound to add your STR to the result you rolled. You may repeat this any number of times." },
        { name: "Quickstrike", description: "When you Interpose, you may first make an unarmed strike against the enemy for free." },
        { name: "Use Momentum", description: "Whenever you avoid all of the damage of a melee attack (whether it misses or you Defend), you may swap places with the attacker and then choose another target that is now within the attack's reach, and they are hit instead." },
        { name: "Vital Rejuvenation", description: "When you receive healing for the first time on a turn, you may heal another target within 6 spaces HP equal to your STR." },
        { name: "Windstrider", description: "If you move through the space of a willing creature while using Windstep, they can move with you and choose any space adjacent to your path of movement to end in." }
      ]
    },

    // ---- 12. ARTIFICER ----
    {
      name: "Artificer",
      keyStats: ["INT", "DEX"],
      secondaryStats: ["STR", "WIL"],
      hitDie: "d8",
      startingHP: 13,
      saves: { advantaged: "INT", disadvantaged: "WIL" },
      armorProficiency: "Cloth, Leather",
      weaponProficiency: "Blades, Simple Ranged",
      startingGear: ["Adventurer's Garb", "Dagger", "Tinker's Tools", "Lantern"],
      levels: {
        1: [
          { name: "Tinker", description: "You can craft and maintain your Inventions. Choose 1 Invention (weapon or armor). You are proficient with your Inventions." },
          { name: "Gadgeteer", description: "Choose 2 Gadgets. You always have them prepared." }
        ],
        2: [
          { name: "Mana Dice", description: "When you roll Initiative, gain INT Mana Dice (d6s). You may spend these to power your Inventions and Gadgets. Lost at end of combat. You do NOT have a mana pool." },
          { name: "Overcharge", description: "(1/turn) When you attack with an Invention weapon, you may spend 1 Mana Die to add it to the damage." }
        ],
        3: [
          { name: "Subclass", description: "Choose Bombardier or Mechanist." },
          { name: "Tinker (2)", description: "Choose a 2nd Invention." }
        ],
        4: [
          { name: "Key Stat Increase", description: "+1 INT or DEX." },
          { name: "Upgrade", description: "Choose 1 Upgrade for one of your Inventions." },
          { name: "Gadgeteer (2)", description: "Choose a 3rd Gadget." }
        ],
        5: [
          { name: "Mana Dice (2)", description: "Your Mana Dice are now d8s." },
          { name: "Upgraded Gadgets", description: "Your Gadgets grow stronger." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        6: [
          { name: "Tinker (3)", description: "Choose a 3rd Invention." },
          { name: "Upgrade (2)", description: "Choose a 2nd Upgrade." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Artificer subclass feature." }
        ],
        8: [
          { name: "Key Stat Increase", description: "+1 INT or DEX." },
          { name: "Gadgeteer (3)", description: "Choose a 4th Gadget." },
          { name: "Upgrade (3)", description: "Choose a 3rd Upgrade." }
        ],
        9: [
          { name: "Mana Dice (3)", description: "Your Mana Dice are now d10s." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        10: [
          { name: "Tinker (4)", description: "Choose a 4th Invention." },
          { name: "Upgrade (4)", description: "Choose a 4th Upgrade." },
          { name: "Upgraded Gadgets", description: "Your Gadgets grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Artificer subclass feature." }
        ],
        12: [
          { name: "Upgrade (5)", description: "Choose a 5th Upgrade." },
          { name: "Gadgeteer (4)", description: "Choose a 5th Gadget." },
          { name: "Key Stat Increase", description: "+1 INT or DEX." }
        ],
        13: [
          { name: "Mana Dice (4)", description: "Your Mana Dice are now d12s." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        14: [
          { name: "Tinker (5)", description: "Choose a 5th Invention." },
          { name: "Upgrade (6)", description: "Choose a 6th Upgrade." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Artificer subclass feature." },
          { name: "Upgraded Gadgets", description: "Your Gadgets grow stronger." }
        ],
        16: [
          { name: "Key Stat Increase", description: "+1 INT or DEX." },
          { name: "Upgrade (7)", description: "Choose a 7th Upgrade." }
        ],
        17: [
          { name: "Mana Dice (5)", description: "Your Mana Dice are now d20s." },
          { name: "Secondary Stat Increase", description: "+1 STR or WIL." }
        ],
        18: [
          { name: "Upgrade (8)", description: "Choose an 8th Upgrade." },
          { name: "Gadgeteer (5)", description: "Choose a 6th Gadget." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Master Artificer", description: "+1 to any 2 of your stats. Your Inventions and Gadgets reach their ultimate potential. Choose 2 additional Upgrades." }
        ]
      },
      gadgets: [
        { name: "Smoke Bomb", description: "Action: Create a 3x3 area of smoke within 6 spaces. Creatures inside are Hidden. Lasts 1 round. High Levels: +1 round duration every 5 levels." },
        { name: "Grappling Hook", description: "Action: Move up to 6 spaces in any direction (including vertically). High Levels: +2 spaces every 5 levels." },
        { name: "Flash Bang", description: "Action: Range 6. All creatures within 2 spaces of the target point must make a DEX save (DC 10+INT) or be Blinded until end of their next turn. High Levels: +1 save DC every 5 levels." },
        { name: "Healing Injector", description: "Action: Heal yourself or adjacent ally for 1d8+INT HP. Uses: INT per Safe Rest. High Levels: +1d8 every 5 levels." },
        { name: "Decoy Drone", description: "Action: Deploy a drone within 6 spaces. It has 1 HP and Taunts all enemies within 3 spaces. Lasts until destroyed or end of encounter. High Levels: +LVL HP every 5 levels." },
        { name: "Electro-Mine", description: "Action: Place a mine in an adjacent space. When a creature moves onto it, they take 2d6+INT lightning damage and are Slowed. High Levels: +1d6 damage every 5 levels." },
        { name: "Turret", description: "2 actions: Deploy a turret in an adjacent space. It attacks the nearest enemy each round for 1d6+INT damage. Range: 6. HP: INT x 2. Lasts until destroyed or end of encounter. High Levels: +1d6 damage every 5 levels." },
        { name: "Jet Boots", description: "Reaction: When you would take fall damage, negate it. Gain a flying speed until the end of your next turn. High Levels: +1 round duration every 5 levels." }
      ],
      inventions: {
        weapons: [
          {
            name: "Arc Rifle",
            description: "Ranged weapon. Range: 10. Damage: 1d8+INT lightning.",
            overcharge: "Spend 1 Mana Die. The shot chains to a 2nd target within 3 spaces for the Mana Die's value in lightning damage.",
            upgrades: [
              { name: "Capacitor Coils", description: "+2 range. Chain damage increases to full weapon damage." },
              { name: "Stun Setting", description: "On crit, target is Dazed until end of their next turn." }
            ]
          },
          {
            name: "Flame Cannon",
            description: "Ranged weapon. Range: 6 (cone). Damage: 1d6+INT fire to all targets in a 3-space cone.",
            overcharge: "Spend 1 Mana Die. Increase cone to 5 spaces. Targets are Smoldering.",
            upgrades: [
              { name: "Napalm Tank", description: "Smoldering targets take additional INT fire damage at the start of their turn." },
              { name: "Concussive Blast", description: "On hit, push targets 2 spaces away from you." }
            ]
          },
          {
            name: "Shock Gauntlets",
            description: "Melee weapon. Reach: 1. Damage: 1d6+INT lightning.",
            overcharge: "Spend 1 Mana Die. Gain +1 Reach and add Mana Die to damage. Target cannot take reactions until end of their next turn.",
            upgrades: [
              { name: "Magnetic Grip", description: "On hit, pull target 1 space toward you. Advantage on Grapple checks." },
              { name: "Thunder Clap", description: "2 actions: Deal weapon damage to all adjacent enemies." }
            ]
          },
          {
            name: "Repeating Crossbow",
            description: "Ranged weapon. Range: 8. Damage: 1d8+DEX piercing.",
            overcharge: "Spend 1 Mana Die. Fire 2 additional bolts at the same or different targets for the Mana Die's value each.",
            upgrades: [
              { name: "Explosive Bolts", description: "On crit, deal half damage to all creatures within 1 space of target." },
              { name: "Rapid Fire", description: "(1/turn) When you miss, immediately fire another bolt at the same target." }
            ]
          }
        ],
        armor: [
          {
            name: "Clockwork Armor",
            description: "Medium armor. +3 armor.",
            overcharge: "Spend 1 Mana Die as a reaction when hit. Reduce damage by the Mana Die's value + INT.",
            upgrades: [
              { name: "Reinforced Plating", description: "+1 armor. Resistance to bludgeoning damage." },
              { name: "Gyroscopic Stabilizers", description: "Advantage against being knocked Prone or moved." }
            ]
          },
          {
            name: "Exo-Suit",
            description: "Light armor. +1 armor. +1 speed. +STR to melee damage.",
            overcharge: "Spend 1 Mana Die. Gain the Mana Die's value as temp HP and +2 speed this turn.",
            upgrades: [
              { name: "Hydraulic Boost", description: "+1 speed. Leap up to 4 spaces as part of your movement." },
              { name: "Power Fists", description: "Your unarmed strikes deal 1d6+STR+INT damage." }
            ]
          },
          {
            name: "Energy Shield Generator",
            description: "No base armor bonus. Generates a shield with INT x 2 shield HP. The shield absorbs damage before your HP. Regenerates 1d4 shield HP at the start of your turn.",
            overcharge: "Spend 1 Mana Die. Instantly regenerate the Mana Die's value in shield HP.",
            upgrades: [
              { name: "Feedback Loop", description: "When the shield breaks (reaches 0), deal INT lightning damage to all adjacent enemies." },
              { name: "Extended Coverage", description: "An ally within 3 spaces can also benefit from your shield." }
            ]
          }
        ]
      }
    },

    // ---- 13. HEXBINDER ----
    {
      name: "Hexbinder",
      keyStats: ["WIL", "INT"],
      secondaryStats: ["STR", "DEX"],
      hitDie: "d6",
      startingHP: 10,
      saves: { advantaged: "WIL", disadvantaged: "INT" },
      armorProficiency: "Cloth",
      weaponProficiency: "Blades, Wands",
      startingGear: ["Adventurer's Garb", "Ritual Dagger", "Hexing Focus", "Candles (6)"],
      levels: {
        1: [
          { name: "Hexcraft", description: "You know Necrotic cantrips. You learn 2 Afflictions and 1 Mystic Mark." },
          { name: "Afflict", description: "Action: Range 6. Apply an Affliction you know to a target. The target may make a WIL save (DC 10+WIL) to resist. Afflictions last until the target takes a Safe Rest, you dismiss them, or you apply a different Affliction to the same target (replacing the old one, unless you Diminish)." },
          { name: "Mystic Mark", description: "(1/turn) Free action: Apply a Mystic Mark you know to a creature you can see within 6 spaces. Marks last 1 round." }
        ],
        2: [
          { name: "Mana and Unlock Tier 1 Spells", description: "Gain a mana pool equal to WIL + LVL. Unlock tier 1 Necrotic spells. Recharges on a Safe Rest." },
          { name: "Curse Weaver", description: "Whenever a creature with one of your Afflictions takes damage, it takes +WIL additional necrotic damage (1/turn per creature)." }
        ],
        3: [
          { name: "Subclass", description: "Choose Circle of Thorns or Circle of Shadows." },
          { name: "Affliction (2)", description: "Learn a 3rd Affliction." },
          { name: "Mystic Mark (2)", description: "Learn a 2nd Mystic Mark." }
        ],
        4: [
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells and upcast spells at tier 2." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." },
          { name: "Diminution", description: "When you apply an Affliction to a target that already has one of your Afflictions, you may choose to Diminish the existing one instead of removing it. The Diminished Affliction's effect is permanently halved (round down) but both now apply." }
        ],
        5: [
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." },
          { name: "Affliction (3)", description: "Learn a 4th Affliction." }
        ],
        6: [
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." },
          { name: "Mystic Mark (3)", description: "Learn a 3rd Mystic Mark." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain your Hexbinder subclass feature." }
        ],
        8: [
          { name: "Tier 4 Spells", description: "You may now cast tier 4 spells and upcast spells at tier 4." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." },
          { name: "Affliction (4)", description: "Learn a 5th Affliction." }
        ],
        9: [
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." },
          { name: "Mystic Mark (4)", description: "Learn a 4th Mystic Mark." }
        ],
        10: [
          { name: "Tier 5 Spells", description: "You may now cast tier 5 spells and upcast spells at tier 5." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain your Hexbinder subclass feature." }
        ],
        12: [
          { name: "Tier 6 Spells", description: "You may now cast tier 6 spells and upcast spells at tier 6." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." },
          { name: "Affliction (5)", description: "Learn a 6th Affliction." }
        ],
        13: [
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." }
        ],
        14: [
          { name: "Tier 7 Spells", description: "You may now cast tier 7 spells and upcast spells at tier 7." },
          { name: "Mystic Mark (5)", description: "Learn a 5th Mystic Mark." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain your Hexbinder subclass feature." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." }
        ],
        16: [
          { name: "Tier 8 Spells", description: "You may now cast tier 8 spells and upcast spells at tier 8." },
          { name: "Key Stat Increase", description: "+1 WIL or INT." }
        ],
        17: [
          { name: "Secondary Stat Increase", description: "+1 STR or DEX." },
          { name: "Affliction (6)", description: "Learn a 7th Affliction." }
        ],
        18: [
          { name: "Tier 9 Spells", description: "You may now cast tier 9 spells and upcast spells at tier 9." }
        ],
        19: [
          { name: "Epic Boon", description: "Choose an Epic Boon." }
        ],
        20: [
          { name: "Grand Hexbinder", description: "+1 to any 2 of your stats. Your Afflictions can no longer be saved against. You may have up to 3 un-Diminished Afflictions on a single target." }
        ]
      },
      afflictions: [
        { name: "Hex of Weakness", description: "The target deals -WIL damage on all attacks (minimum 1)." },
        { name: "Hex of Frailty", description: "The target's armor is reduced by WIL (minimum 0)." },
        { name: "Hex of Lethargy", description: "The target's speed is reduced by WIL (minimum 1)." },
        { name: "Hex of Misfortune", description: "The target has disadvantage on their next save." },
        { name: "Hex of Agony", description: "At the start of the target's turn, they take WIL necrotic damage (ignoring armor)." },
        { name: "Hex of Binding", description: "The target cannot move more than 6 spaces away from the point where they were Afflicted." },
        { name: "Hex of Vulnerability", description: "The target has vulnerability to the next damage type they take (they take double damage from it)." },
        { name: "Hex of Silence", description: "The target cannot cast spells or use abilities that require verbal components." },
        { name: "Hex of Dread", description: "The target is Frightened of you." },
        { name: "Hex of Rot", description: "The target cannot be healed. Healing effects deal necrotic damage instead." }
      ],
      mysticMarks: [
        { name: "Mark of Pain", description: "The next time the marked creature takes damage this round, it takes +INT additional damage." },
        { name: "Mark of Pursuit", description: "You may move up to 3 spaces toward the marked creature for free." },
        { name: "Mark of Revelation", description: "The marked creature cannot be Hidden or Invisible and cannot benefit from cover." },
        { name: "Mark of Warding", description: "The next attack the marked creature makes this round has disadvantage." },
        { name: "Mark of Disruption", description: "If the marked creature casts a spell this round, they must make a Concentration check or lose the spell." },
        { name: "Mark of Feedback", description: "The next time the marked creature deals damage this round, they take half that damage themselves (necrotic, ignoring armor)." },
        { name: "Mark of Transference", description: "If the marked creature takes damage this round, you heal HP equal to your WIL." }
      ]
    }
  ],

  // ==========================================================================
  // SUBCLASSES
  // ==========================================================================
  SUBCLASSES: {
    berserker: [
      {
        name: "Path of the Mountainheart",
        className: "Berserker",
        description: "Withstand terrible blows and overwhelming damage. Shrug off death and disease that would crumple the mightiest armies.",
        features: {
          3:  [
            { name: "Stone's Resilience", description: "Whenever you expend Fury Dice to reduce incoming damage, add the value of the die to the amount reduced." },
            { name: "Mountainous Tenacity", description: "Whenever you expend Hit Dice to recover HP, for every 10 HP you would recover, you may heal 1 Wound instead." }
          ],
          7:  [{ name: "Unbreakable", description: "(1/encounter) While Raging, if you would suffer your last Wound or other negative condition of your choice, you don't." }],
          11: [{ name: "Titan's Fury", description: "After you miss an attack or are crit by an enemy, Rage for free." }],
          15: [{ name: "Mountain's Endurance", description: "While Dying, if an attack against you would be a crit, the attack is rerolled instead (when-crit abilities, such as Titan's Fury, still trigger)." }]
        }
      },
      {
        name: "Path of the Red Mist",
        className: "Berserker",
        description: "Lean into your offensive fury and leave nothing remaining of your enemies but a lingering crimson mist.",
        features: {
          3:  [
            { name: "Blood Frenzy", description: "(1/turn) While Raging, whenever you crit or kill an enemy, gain 1 Fury Die or change 1 Fury Die to the max." },
            { name: "Savage Awareness", description: "Advantage on Perception checks to notice or track down blood. Blindsight 2 while Raging: you ignore the Blinded condition and can see through darkness and Invisibility within that Range." }
          ],
          7:  [{ name: "Unstoppable Brutality", description: "While Raging, you may gain 1 Wound to reroll any attack or save, ignoring disadvantage." }],
          11: [{ name: "Opportunistic Frenzy", description: "While Raging, you can make opportunity attacks without disadvantage, and you may make them whenever an enemy enters your melee weapon's reach." }],
          15: [{ name: "Onslaught", description: "While Raging, gain +2 speed. (1/round) you may move for free." }]
        }
      },
      {
        name: "Path of the Titan's Grip",
        className: "Berserker",
        description: "Beat goblin chieftains with their own lackeys, piledrive bandits, and hurl enemies across the battlefield.",
        features: {
          3:  [
            { name: "Titan's Grip", description: "Your unarmed strikes gain: On hit: Grapple (vs Medium or smaller creatures)." },
            { name: "Living Weapon", description: "While Raging, living Grappled creatures can be used as improvised weapons: Tiny 1d4+STR Light, Thrown 6; Small 1d6+STR, Thrown 4; Medium 1d10+STR (2-handed). Living Weapons suffer as much damage as they deal." }
          ],
          7:  [{ name: "Meat Shield", description: "While Grappling a creature, you have Cover from attacks by other creatures. Attacks that miss you strike a creature you have Grappled." }],
          11: [{ name: "Wrathful Grip", description: "Your unarmed strikes are now 1d6+STR. You may expend a Fury Die to force a creature to reroll a save to escape your Grapple." }],
          15: [
            { name: "Sickening Blow", description: "Whenever you crit an enemy with an Improvised Weapon, double the damage added from Fury Dice." },
            { name: "Catch!", description: "Your improvised weapons gain +4 Thrown." }
          ]
        }
      },
      {
        name: "Path of the Burning Rage",
        className: "Berserker",
        description: "All will burn as your anger fuels the flames of battle, immolating all in its path in fiery destruction.",
        features: {
          3:  [
            { name: "Stoke the Flames", description: "Whenever your Fury Die size would increase, instead roll 1 additional Fury Die." },
            { name: "Overflowing Fury", description: "(Reach 2) When discarding Fury Dice over your max, deal 5 fire damage to an adjacent creature, they gain Smoldering." }
          ],
          7:  [{ name: "Hot Headed", description: "Gain STR Fury Dice when you roll Initiative instead. +2 to Overflowing Fury's Reach." }],
          11: [{ name: "EXPLOSION!", description: "When you attack a Smoldering creature, you may deal the same amount of damage to ALL other creatures adjacent to your target OR you can ignore armor of Smoldering creatures; ending the condition." }],
          15: [{ name: "Pyromania", description: "Treat each of your Fury Dice as if they were always 5s." }],
          20: [{ name: "BOUNDLESS FLAMES", description: "(Replaces BOUNDLESS RAGE) +1 to any 2 of your stats. (1/round) When attacked, deal your Fury Dice damage to an adjacent creature." }]
        }
      }
    ],
    cheat: [
      {
        name: "Tools of the Silent Blade",
        className: "The Cheat",
        description: "Kill, kill, kill.",
        features: {
          3:  [
            { name: "Amidst All This Commotion...", description: "If a creature dies while you Sneak Attack them, you may turn Invisible until you attack again or until the beginning of your next turn." },
            { name: "Leave No Trace", description: "Advantage on Stealth checks when you are at full health." }
          ],
          7:  [{ name: "Cunning Strike", description: "Deal +2×INT damage whenever you crit." }],
          11: [{ name: "Professional Skulker", description: "Gain a climbing speed and advantage on Stealth checks (replaces Leave No Trace)." }],
          15: [{ name: "KILL.", description: "When you Sneak Attack an enemy with fewer max HP than you, it dies." }]
        }
      },
      {
        name: "Tools of the Scoundrel",
        className: "The Cheat",
        description: "Stay alive, fight dirty.",
        features: {
          3:  [
            { name: "Low Blow", description: "When you Sneak Attack, spend 1 additional action to roll 1d4, they are: 1. Taunted by you for the rest of this encounter. 2. Knocked Prone, then Taunted by you for the rest of this encounter. 3. Dazed, then Taunted by you for the rest of this encounter. 4. Incapacitated until the end of next hero's turn." },
            { name: "Sweet Talk", description: "You may gain advantage on all Influence checks with NPCs you've just met for the first time. This lasts until you fail an Influence check with them or until you meet a 2nd time. You have disadvantage on Influence checks with them after you use this ability (until you get back on their good side)." }
          ],
          7:  [{ name: "Pocket Sand", description: "(2/encounter — you've got to collect more sand!) When you Defend against a melee attack, Blind the attacker until the start of their next turn and force them to reroll the attack (Blinded creatures attack with disadvantage)." }],
          11: [{ name: "Escape Plan", description: "(1/Safe Rest) When you would drop to 0 HP or gain a Wound, you don't. Instead, you turn Invisible for 1 minute or until you attack." }],
          15: [{ name: "Heads I Win, Tails You Lose", description: "(1/encounter) Attacks you make this round don't miss, you crit on 1 less than normally needed, and you gain LVL temp HP." }]
        }
      },
      {
        name: "Tools of the Serpent",
        className: "The Cheat",
        description: "You have harnessed the terrible fangs of nature to her deadly array of poisons.",
        features: {
          3:  [
            { name: "Viper's Kiss", description: "Creatures you damage become Poisoned until the end of their next turn. Creatures Poisoned this way are also Distracted." },
            { name: "I've Tried This One Before.", description: "You have advantage on saves against poison. Additionally, you can identify any poison you inspect." }
          ],
          7:  [{ name: "Noxious Cloud", description: "(1/encounter, Reach 4) Action: Enemies in a 2×2 area take INT d6 damage (ignoring armor) and become Poisoned. Creatures already Poisoned are also Dazed." }],
          11: [{ name: "Cruel Dose", description: "Creatures poisoned by you are also Slowed and their attack Range is halved." }],
          15: [{ name: "Volatile Toxins", description: "Noxious Cloud can be used twice each encounter. Whenever a creature Poisoned by you dies, their body erupts into a Noxious Cloud." }]
        }
      },
      {
        name: "Tools of the Gambler",
        className: "The Cheat",
        description: "Trust me — this time it's a SURE THING. Choose this subclass if you want to risk it all with dangerous plays and walk the line of ruin.",
        features: {
          3:  [
            { name: "All In", description: "When you Sneak Attack, you may go All In: Roll a single All In die; if it rolls higher than average, maximize ALL of your sneak attack dice; otherwise minimize them." },
            { name: "That was Just a Practice Roll", description: "(1/encounter) You may reroll ANY die." },
            { name: "It's All Fun and Games", description: "If you're caught cheating at a game, competition, or wager, you gain advantage on skill checks to get out of the consequences." }
          ],
          7:  [
            { name: "Pocket Aces!", description: "(1/Safe Rest) You can set a friendly creature's Initiative roll to 20." },
            { name: "Double Or Nothing!", description: "When you lose your \"All In\" roll, you may try once more. If you succeed, add 1 additional maximized Sneak Attack die. If you fail, your attack misses entirely and your turn ends." }
          ],
          11: [{ name: "Play the Odds", description: "(1/round) When a creature hits you, you may force them to reroll their Primary Die. If the roll is lower, the attack misses; otherwise, it crits." }],
          15: [{ name: "Odds Maker", description: "You may use That Was Just a Practice Roll 2/encounter and you may instead change the die to any other face." }]
        }
      }
    ],
    commander: [
      {
        name: "Champion of the Bulwark",
        className: "Commander",
        description: "Become an iron-clad juggernaut and boost your party with defensive prowess.",
        features: {
          3:  [
            { name: "Armor Master", description: "You are proficient with plate armor." },
            { name: "Shield Expert", description: "While equipped with a shield you can Defend for free; when you do, you may deal damage to an adjacent enemy equal to your shield's Defense." }
          ],
          7:  [{ name: "Juggernaut", description: "When you use Coordinated Strike, you can spend an additional action to add 1 to your Primary Die and deal extra damage equal to your Defense." }],
          11: [{ name: "Taunting Strike", description: "(1/turn) You may Taunt a creature you attack until the end of their next turn." }],
          15: [{ name: "Shield Wall", description: "(Reach 2) Your shields gain +2 Defense. Your allies can also use your shield's Defense when they Defend." }]
        }
      },
      {
        name: "Champion of the Vanguard",
        className: "Commander",
        description: "A forward-charging general who leads from the front!",
        features: {
          3:  [{ name: "Advance!", description: "(Reach 12) Whenever you use your Coordinated Strike, you and all allies can first move up to half their speed for free. Gain advantage on the first melee attack you make against enemies you moved toward this turn." }],
          7:  [{ name: "Experienced Commander", description: "Your Coordinated Strike may target 1 additional ally." }],
          11: [{ name: "Survey the Battlefield", description: "When you roll Initiative, regain 1 use of Coordinated Strike. +1 max Combat Dice." }],
          15: [{ name: "As One!", description: "All attacks made with your Coordinated Strike are made with advantage." }]
        }
      },
      {
        name: "Champion of the Phalanx",
        className: "Commander",
        description: "\"Together we stand, divided, we fall!\" A polearm-and-shield formation fighter who protects allies through Reach.",
        features: {
          3:  [
            { name: "Polearm Mastery", description: "Weapons with Reach 2 gain +1 Reach; OR can be wielded one-handed with a Shield." },
            { name: "Skewer", description: "You can perform Opportunity Attacks against enemies that enter the Reach of your weapon. If the movement was forced, attack with advantage instead of disadvantage." }
          ],
          7:  [{ name: "Formation March", description: "Whenever you move, allies within Reach of your weapon may move with you for free." }],
          11: [{ name: "Together We Stand", description: "Add 1 to your Combat Die rolls for each ally within your weapon's Reach." }],
          15: [{ name: "Shoulder to Shoulder", description: "Allies within your weapon's Reach gain +1 Reach to their weapons and gain the benefits of your Weapon Masteries." }]
        }
      },
      {
        name: "Champion of the Arena",
        className: "Commander",
        description: "A simple, single-minded fighter who goes for the glory!",
        // Arena replaces Commander's Orders picks with +1 max Combat Die each
        removesClassAbilities: ["Commander's Orders"],
        features: {
          3:  [
            { name: "Single-minded Fighter", description: "You forego all Commander's Orders. Whenever you would choose one, you gain +1 max Combat Die instead." },
            { name: "Showstopping Strike", description: "(1/Safe Rest) When you use Coordinated Strike, you and your ally both automatically crit." },
            { name: "Glory Seeker", description: "(1/round) Whenever an ally crits, your next attack is made with advantage." }
          ],
          7:  [
            { name: "Pushed to the Brink", description: "Showstopping Strike refreshes the first time each encounter you gain the Dying condition." },
            { name: "Remarkable Strategy", description: "(1/encounter) When Assessing with an INT skill, you may roll a Combat Die and add it to the result (without expending it)." }
          ],
          11: [{ name: "Superior Striker", description: "Gain +STR Initiative. Showstopping Strike refreshes when you roll Initiative." }],
          15: [{ name: "Outlast, Outmatch", description: "Your Coordinated Strike also grants you and your ally temp HP equal to the max value of your Combat Die." }]
        }
      },
      {
        name: "Champion of the Siege-Breaker",
        className: "Commander",
        description: "Unleash aggressive combat tactics to disrupt your enemies. Leave the shield behind, it'll only weigh you down.",
        features: {
          3:  [
            { name: "Siege Veteran", description: "+STR Defense when wielding a weapon with 2 hands." },
            { name: "Mighty Cleave", description: "Whenever your damage dice on a melee attack sum to 8+, you may select 1 additional target within your weapon's Reach." }
          ],
          7:  [{ name: "Shatter Formation", description: "(New Combat Tactic) Action: Roll a Combat Die and deal that much damage to up to STR targets within your weapon's Reach, and knockback 2. You may use this ability while moving." }],
          11: [
            { name: "Relentless Assault", description: "+2 Max Combat Dice. You roll Combat Dice with advantage." },
            { name: "Tear Asunder", description: "(New Combat Tactic) Strike an armored foe and deal extra damage equal to a roll of your Combat Die. The next non-critical attack against them ignores armor." }
          ],
          15: [{ name: "Against the Hordes", description: "If there are 2+ enemies within your weapon's Reach, your melee attacks have advantage and always trigger Mighty Cleave." }]
        }
      }
    ],
    hunter: [
      {
        name: "Keeper of the Shadowpath",
        className: "Hunter",
        description: "Stalk your prey from the shadows, and take down your foes with precision and speed.",
        features: {
          3:  [
            { name: "Ambusher", description: "Whenever you roll Initiative, use Hunter's Mark for free. Gain advantage on the first attack you make each encounter." },
            { name: "Skilled Tracker", description: "You have advantage on skill checks to track creatures." },
            { name: "Skilled Navigator", description: "You cannot become lost by nonmagical means." }
          ],
          7:  [{ name: "Primal Predator", description: "(1/encounter) Your weapon attacks ignore Cover and Armor this turn." }],
          11: [{ name: "Dread Hunter", description: "Choose both Hunter's Mark options when attacking your Quarry." }],
          15: [{ name: "Apex Predator", description: "You may use your Primal Predator ability twice each encounter. Gain 1 Thrill of the Hunt charge when you roll Initiative." }]
        }
      },
      {
        name: "Keeper of the Wild Heart",
        className: "Hunter",
        description: "A resourceful survivalist, you can endure far more adversity than most any other adventurer.",
        features: {
          3:  [
            { name: "Impressive Form", description: "+5 max HP. Upgrade your Hit Dice to d10s." },
            { name: "I Have the High Ground", description: "Whenever you roll Initiative or gain a Thrill of the Hunt charge, move up to half your speed for free, ignoring difficult terrain." }
          ],
          7:  [
            { name: "Resourceful Herbalist", description: "Add your WIL to your Examination skill. Whenever you Safe Rest in a location near where plants or fungi can grow, you may spend a day collecting healing herbs to craft WIL Healing Salves." },
            { name: "Healing Salve", description: "(Reach 1) Action: Heal a creature WIL d8 HP (only an experienced Herbalist may administer these, and they expire whenever you Safe Rest)." }
          ],
          11: [{ name: "Ha! I'm Over Here!", description: "(1/Safe Rest) If an attack would cause you to drop to 0 HP, you instead move up to your speed away and take no damage." }],
          15: [{ name: "Unparalleled Survivalist", description: "Gain +WIL armor. When you attack, you may first move half your speed for free." }]
        }
      },
      {
        name: "Keeper of the Pack",
        className: "Hunter",
        description: "Even the fiercest of prey is weak in isolation, while the pack has strength in numbers. Lead from the front, finish the hunt.",
        features: {
          3:  [
            { name: "Marked for Death", description: "(1/encounter) When you hit your Quarry in melee, the next WIL attacks against it are made with advantage 2." },
            { name: "Lead the Hunt", description: "Nearby allies can add your WIL to their Stealth roll." }
          ],
          7:  [
            { name: "The Lion's Share", description: "Whenever your Quarry dies, gain 3×WIL Temp HP." },
            { name: "Fearsome Alpha", description: "Your Quarry has disadvantage on melee attacks against you." }
          ],
          11: [{ name: "Frenzied Pack", description: "Allies within Reach 2 gain the benefits of your Hunter's Mark in melee." }],
          15: [{ name: "Ferocious Takedown", description: "When you kill your Quarry with Final Takedown, regain a use of Marked for Death." }]
        }
      },
      {
        name: "Keeper of Traps",
        className: "Hunter",
        description: "Daring trappers like carrying bits and baubles to attract attention. They often include some sort of charm for protection like the tuft of a fox tail, an old superstition.",
        features: {
          3:  [
            { name: "Hunter's Lure", description: "Whenever you use Hunter's Mark, you may gain KEY temp HP and Taunt your Quarry until you lose these temp HP." },
            { name: "Blinding Trap", description: "Reaction (when an enemy moves adjacent to you or an ally within Reach 6): Target is Blinded until the end of their next turn." },
            { name: "Skilled Trapmaker", description: "You have advantage on skill checks relating to traps." }
          ],
          7:  [
            { name: "Prolific Trapper", description: "Whenever you Safe Rest in a location where feral critters live nearby, you may spend a day capturing critters to make WIL Critter Traps." },
            { name: "Critter Trap", description: "Free Reaction (when an enemy moves adjacent to you or an ally within Reach 6): loose a critter to attack the enemy for WIL d6 damage. You must release all captured critters whenever you Safe Rest." }
          ],
          11: [{ name: "Bait and Switch", description: "You and your allies gain +2 Reach on Interposing vs Taunted attackers. (1/encounter) You can use Decoy for free while Prone." }],
          15: [{ name: "Trap Master", description: "Whenever you use a Trap, add LVL damage to it. One of your Traps can be used an additional time each encounter." }]
        }
      }
    ],
    mage: [
      {
        name: "Invoker of Control",
        className: "Mage",
        description: "Failure is NOT an option. Your will shall not be subsumed by chance.",
        features: {
          3:  [
            { name: "Force of Will", description: "(1/round) On your turn, you may Demand Control for free: Choose 1 option from the Control Table which you haven't chosen yet; resets when you roll Initiative, or when you have chosen all options once." },
            { name: "Deny Fate", description: "Whenever you miss with a spell (or if one or more creatures save vs a spell you cast), you MUST Demand Control." }
          ],
          7:  [
            { name: "At Any Cost", description: "Learn 1 cantrip and 1 tiered spell from the Necrotic school." },
            { name: "Nullify", description: "(1/encounter) Ignore all disadvantage and other negative effects on your next action this turn, then Demand Control." }
          ],
          11: [{ name: "Steel Will", description: "Whenever you roll a 1 on an Elemental Surge die, you may reroll it once. (1/Safe Rest) If you would fail a save, you succeed instead." }],
          15: [{ name: "Supreme Control", description: "Whenever you Demand Control, you may choose to trigger the selected option twice. You may now use Force of Will as a Reaction." }]
        }
      },
      {
        name: "Invoker of Chaos",
        className: "Mage",
        description: "Give in to the wild forces of magic, let randomness and CHAOS reign!",
        features: {
          3:  [{ name: "Force of Chaos", description: "Whenever you cast a spell, you can choose to spend 1 less mana by Invoking Chaos: Roll on the Chaos Table. Whenever you crit you may also Invoke Chaos." }],
          7:  [
            { name: "Tempest Mage", description: "Learn 1 cantrip and 1 tiered spell from the Wind school." },
            { name: "Chaos Lash", description: "(1/encounter) Reaction (when an enemy moves adjacent to you): They are pushed back 2 spaces, and on a failed WIL save, knocked Prone as well. Invoke Chaos." }
          ],
          11: [{ name: "Thrive in Chaos", description: "Whenever you Invoke Chaos, you may roll twice and cause both effects. (1/Safe Rest) You may choose which roll to use instead." }],
          15: [{ name: "Master of Chaos", description: "Whenever you Invoke Chaos, roll with advantage." }]
        }
      },
      {
        name: "Invoker of Wards",
        className: "Mage",
        description: "Use your magic to defend yourself and your allies.",
        features: {
          3:  [
            { name: "Abjurer", description: "Defensive spells you cast on yourself (Flame Barrier, Frost Shield, and Alacrity) are always cast as if you spent +1 mana on them (ignoring your usual upcasting limit)." },
            { name: "Elemental Wards", description: "Reaction (when an ally within Reach 6 Defends): You may spend 1 mana to cast an Elemental Ward on them. Flame Ward: First deal KEY damage and Smoldering to all creatures adjacent to your ally. Frost Ward: Grant 2×KEY Temp HP (lasts until the beginning of their next turn). Lightning Ward: Attacks miss them on 2 or less. They can move KEY spaces for free on their next turn." }
          ],
          7:  [{ name: "Elemental Wards (2)", description: "Your Elemental Wards gain +WIL effectiveness and +INT Reach." }],
          11: [{ name: "Abjurer (3)", description: "The 1st defensive spell you cast on yourself each encounter while Dying is free and does not require a save. The 1st Ward you cast on a Dying ally each encounter also grants them +1 action." }],
          15: [{ name: "Elemental Aegis", description: "(1/Safe Rest) Reaction (when a friendly creature is attacked): Up to KEY creatures within Reach 8 gain ALL the effects of your Elemental Wards until their next turn." }]
        }
      },
      {
        name: "Invoker of Flame",
        className: "Mage",
        description: "You dedicate yourself to the art of Pyromancy; choosing to relinquish control over the other elements so that your flames may burn brighter and hotter than any who has come before you.",
        // Fiery Dedication: only Fire spells from now on
        restrictsBaseSchoolsTo: ['fire'],
        features: {
          3:  [
            { name: "Fiery Dedication", description: "You can only cast fire spells from now on. You unlock fire spells 1 level earlier." },
            { name: "Embercaster", description: "When casting Flame Dart, you can spend 1 mana to roll 3d4 instead and ignore all disadvantage." }
          ],
          7:  [
            { name: "Thy Embers' Keeper", description: "When Initiative is rolled, cast Heart's Fire on an ally for free." },
            { name: "Fireshaper", description: "Choose 1 Ice or Lightning spell and treat it as a fire spell." }
          ],
          11: [
            { name: "Flash Fire", description: "+WIL Initiative. When Initiative is rolled, cast Enchant Weapon for free." },
            { name: "Fireshaper (2)", description: "Choose 1 Ice or Lightning spell and treat it as a fire spell." }
          ],
          15: [
            { name: "Phoenixform", description: "(1/Safe Rest) Reaction (when you would drop to 0 HP): Instead, gain the effects of the Dragonform spell (except you are a Medium Phoenix), when it ends gain 1 Wound." },
            { name: "Fireshaper (3)", description: "Choose 1 Lightning or Ice spell and treat it as a fire spell." }
          ]
        }
      },
      {
        name: "Invoker of Frost",
        className: "Mage",
        description: "Ice runs through your veins. A dedicated cryomancer, you relinquish control over the other elements so that your ice can freeze more deeply.",
        // Crown of Ice: only Ice spells from now on
        restrictsBaseSchoolsTo: ['ice'],
        features: {
          3:  [
            { name: "Crown of Ice", description: "You can only cast Ice spells from now on. You unlock ice spells 1 level earlier." },
            { name: "Aura of Cold", description: "Adjacent enemies are Slowed. Your unused Frost Shield Temp HP last until the end of the encounter. Your Shatter spell has Reach instead of Range." }
          ],
          7:  [
            { name: "Crystalline Aegis", description: "When your Frost Shield Temp HP is lost, cast Shatter for free on an adjacent enemy." },
            { name: "Frostshaper", description: "Choose 1 Fire or Lightning spell and treat it as an ice spell." }
          ],
          11: [
            { name: "Bitter Cold", description: "Your spells ignore the Armor of creatures Hampered by you." },
            { name: "Frostshaper (2)", description: "Choose 1 Fire or Lightning spell and treat it as an ice spell." }
          ],
          15: [
            { name: "Deep Freeze", description: "Reduce the mana cost of all spells by 2 while you have any Temp HP from Frost Shield." },
            { name: "Frostshaper (3)", description: "Choose 1 Fire or Lightning spell and treat it as an ice spell." }
          ]
        }
      },
      {
        name: "Invoker of Surges",
        className: "Mage",
        description: "DANGEROUS. FAST.",
        // Electrical Dedication: only Lightning spells from now on
        restrictsBaseSchoolsTo: ['lightning'],
        features: {
          3:  [
            { name: "Electrical Dedication", description: "You can only cast lightning spells from now on. Choose 1 Fire spell and treat it as a Lightning spell." },
            { name: "Power Surge", description: "You can store up to WIL uses of Charged at a time. After you cast a damaging spell, you may take 4 lightning damage to add 1d8 to the damage." },
            { name: "Blur", description: "While Charged, reduce ALL non-lightning damage you take by KEY." }
          ],
          7:  [
            { name: "Jumpstart", description: "When you roll Initiative, become Charged; and gain 1 additional action on the first round of combat." },
            { name: "Power Surge (2)", description: "Your Power Surge die becomes a d10. You may expend Charged to maximize it. Pick 1 wind spell, treat it as a Lightning spell." }
          ],
          11: [
            { name: "Power Surge (3)", description: "Your Power Surge die becomes a d12. (1/encounter) You may spend Charged to change any die on a spell you cast to the max." },
            { name: "Blur (2)", description: "While Charged, reduce ALL non-lightning damage you take by 2×KEY." }
          ],
          15: [
            { name: "Power Surge (4)", description: "Your Power Surge die becomes a d20." },
            { name: "Haywire", description: "Whenever you are Dying, you gain the effects of Electrocharge." }
          ]
        }
      }
    ],
    oathsworn: [
      {
        name: "Oath of Vengeance",
        className: "Oathsworn",
        description: "Empower your judgement dice and strike down your enemies with explosive retribution.",
        features: {
          3:  [{ name: "Aura of Zeal", description: "Whenever you roll Judgment Dice, roll 1 more. Gain an aura with a Reach of 4. Your Radiant Judgment also triggers when an ally within your aura is attacked while you have no Judgment Dice." }],
          7:  [{ name: "Avenger", description: "Whenever you or an ally within your aura gain any Wounds, change up to that many Judgment Dice to their max. Then, move up to half your Speed for free." }],
          11: [{ name: "Unerring Judgment", description: "Increase your Primary Die rolls on melee attacks by 1 whenever you have Judgment Dice." }],
          15: [{ name: "Maximum Judgment", description: "Whenever you are attacked, set a Judgment Die to its max." }]
        }
      },
      {
        name: "Oath of Refuge",
        className: "Oathsworn",
        description: "Raise your shield to protect your allies, and interpose with greater strength and purpose.",
        features: {
          3:  [{ name: "Aura of Refuge", description: "Your shields gain +WIL Defense and count as your spellcasting focus. Gain an aura with a Reach of 4; you can Interpose for an ally anywhere within your aura." }],
          7:  [{ name: "Face Me, Foul Creature!", description: "When you Interpose, the attacking enemy is also Taunted by you until the end of their next turn." }],
          11: [{ name: "Glorious Reprieve", description: "You and allies in your aura do not lose actions from Dying. (1/Round) You or an ally in your aura can ignore 1 Wound gained while Dying." }],
          15: [{ name: "Divine Grace", description: "You are resistant to all damage while Interposing." }]
        }
      },
      {
        name: "Oath of Valor",
        className: "Oathsworn",
        description: "The Valorsworn, is a knight with a selfless heart, courageous hand, and an unyielding will in the face of danger.",
        features: {
          3:  [{ name: "Aura of Valor", description: "You are immune to Fear; gain an aura with a Reach of 4, allies in this area are as well. When you Interpose, the protected creature gains advantage on their next roll this encounter." }],
          7:  [{ name: "Exemplar of Courage", description: "Whenever you survive an attack, grant an ally in your aura advantage on their next roll. When you Interpose for a Dying creature, grant them 1 additional action." }],
          11: [{ name: "Balm for the Downcast", description: "When using Lay on Hands, you may choose another creature within your aura to be healed the same amount." }],
          15: [{ name: "No Greater Love...", description: "When you Interpose while Dying, you suffer 1 fewer Wounds and all allies in your Aura gain 1 Action." }]
        }
      },
      {
        name: "Oath of Roaring Thunder",
        className: "Oathsworn",
        description: "With the power of thunder smash your foes across the battlefield, and with the swiftness of lightning you dash after them to strike them dead.",
        features: {
          3:  [{ name: "Aura of Gales", description: "Gain an aura with a Reach of 4. Allies can move freely within your aura." }],
          7:  [{ name: "Thunderous Strike", description: "When you use Zealot, you can first teleport WIL spaces for each mana spent. If your target is a medium or smaller creature knock them Prone as well." }],
          11: [{ name: "Thunderous Judgment", description: "(1 Mana, Reach 12) Exchange places with an ally outside your aura that is being attacked (this counts as Interposing)." }],
          15: [{ name: "Stormstrike", description: "(1/Encounter) Action: Exchange places with a willing creature within Reach 12, then deal lightning damage to enemies within your aura equal to a roll of your Judgment Dice." }]
        }
      }
    ],
    shadowmancer: [
      {
        name: "Pact of the Red Dragon",
        className: "Shadowmancer",
        description: "The Great Dragon's flames are yours. Its wrath is yours. Soon, even its flesh will be too.",
        features: {
          3:  [{ name: "Draconic Crimson Rite", description: "Your Patron grants you knowledge of Fire spells. Your Shadows become flaming dragon wyrmling shadows. Your Shadow Blast and Shadows can deal fire or necrotic damage and inflict Smoldering whenever they roll the max." }],
          7:  [{ name: "We'll ALL Burn!", description: "You may cast Pyroclasm without Pilfering Power by including yourself in the damage. You have advantage on the save. Choose 1 Fire Utility Spell." }],
          11: [{ name: "Heart of Burning Fire", description: "Regain 1 use of Pilfered Power each time you roll Initiative. This expires at the end of combat if unused." }],
          15: [{ name: "Enveloped by the Master", description: "Gain 1d4 Wounds to cast Dragonform." }]
        }
      },
      {
        name: "Pact of the Abyssal Depths",
        className: "Shadowmancer",
        description: "Icy tendrils reach out from the abyss, and drag your foes into absolute cold and darkness.",
        features: {
          3:  [{ name: "Master of Nightfrost", description: "Your Patron grants you knowledge of Ice spells. Gain the ability to breathe underwater. Your Shadows become beings of nightfrost. Your Shadow Blast and Shadows can deal cold or necrotic damage, and whenever they roll the max, you gain INT+LVL temp HP." }],
          7:  [{ name: "Shadowfrost", description: "Your Shadow Blast also Slows. You can cast Cryosleep or Rimeblades without Pilfering Power by expending 10 temp HP. Choose 1 Ice Utility Spell." }],
          11: [{ name: "Glacial Resilience", description: "(1/Safe Rest) Reaction (whenever you are attacked or would gain a condition): Gain 10 x LVL temp HP and end ALL negative conditions on yourself. At the end of your next turn, any remaining temp HP are lost." }],
          15: [{ name: "Cryomancer's Reprisal", description: "Pay half your max HP to cast ANY Ice spell. After casting an Ice spell in this way, you gain an invisible aura: the next creature that hits you with a melee attack this encounter takes cold damage equal to half the HP you spent on this casting." }]
        }
      },
      {
        name: "Pact of the Void",
        className: "Shadowmancer",
        description: "Your cosmic master gazes from beyond the stars. Time and space are mere playthings to you.",
        features: {
          3:  [
            { name: "Void Spawn", description: "You can summon Shadows within Reach 6." },
            { name: "Void Step", description: "You and your allies can move between spaces your Shadows occupy as if they were the same space (but cannot end movement in an occupied space)." }
          ],
          7:  [
            { name: "Voidstrike", description: "You and your allies can attack between spaces your Shadows occupy as if they were the same space. Gain advantage when attacking this way (e.g., an ally next to a Shadow can make a melee attack against any enemy also adjacent to a Shadow)." },
            { name: "The Vast Cold", description: "Your Shadows inflict the Slowed condition when attacked in melee." }
          ],
          11: [{ name: "Void Singularity", description: "(Reach 1/minion) Whenever 1 or more Shadows move into the space of another Shadow, all of them implode and die, dealing their combined damage to all creatures in the area, moving them towards the center as you choose." }],
          15: [
            { name: "The Consuming Dark", description: "(1/encounter) When a Shadow kills an enemy you may have it transform into a Greater Shadow." },
            { name: "Urgent Command", description: "Gain a Wound to move your Shadows as a Reaction." }
          ]
        }
      },
      {
        name: "Pact of the Endless Swarm",
        className: "Shadowmancer",
        description: "Pests and vermin... Even the weakest grow strong in numbers. The denizens of your swarm are infinite and unyielding.",
        features: {
          3:  [
            { name: "Summon Hive", description: "Whenever you cast Summon Shadow, also summon a Hive within Reach 2 (max of INT Hives)." },
            { name: "Hive", description: "Immobile minion; enemies within Reach 2 attack with disadvantage. At the end of your turns, spawns a swarm: roll and set aside 1d4. Whenever you or an ally attacks, you can expend any of these dice to increase the damage done." }
          ],
          7:  [
            { name: "Rampant Brood", description: "When a Hive dies, it spawns 2 swarms. Whenever you cast Command Shadows, your Hives can also move." },
            { name: "Broodlord", description: "You may spend your Interpose reaction to make a Hive Interpose for yourself or an ally instead." }
          ],
          11: [{ name: "Impending Infestation", description: "Summon 1 additional Hive for each time you've previously cast Summon Shadow this encounter." }],
          15: [{ name: "Terrible Plague", description: "Your swarms increase to d8 damage and your Hives' Reach increases to 3." }]
        }
      },
      {
        name: "Pact of the High Celestial",
        className: "Shadowmancer",
        description: "Be not afraid! Your radiant spirits empower, bless, and protect those that you deem worthy.",
        features: {
          3:  [{ name: "Divine Bestowal", description: "Your Shadows become radiant spirits, lose their ability to attack directly, but can move into the space of an ally and bless them. They move wherever the ally does, and each one grants the ally +2 damage on their attacks and +2 damage reduction from incoming attacks. If an ally takes damage, all minions blessing them die." }],
          7:  [{ name: "Radiant Boon", description: "You may target allies with Shadow Blast and give them Temp HP instead of damaging them." }],
          11: [
            { name: "Divine Bestowal (2)", description: "Your minions' blessing increases to 3." },
            { name: "Celestial Armor", description: "When a blessed ally Defends or Interposes, 1 minion blessing them can sacrifice itself to take the damage instead." }
          ],
          15: [{ name: "Apotheosis", description: "(1/Safe Rest) For 1 round you are immune to all damage and negative effects. Anytime you would roll a d20, roll a d100 instead, and anytime you would roll less than a d20, roll a d20." }]
        }
      }
      // Reaver was moved to SUBCLASSES.storyBased — it's a story-based subclass triggered by losing your patron, not pickable at L3.
    ],
    shepherd: [
      {
        name: "Luminary of Mercy",
        className: "Shepherd",
        description: "Save the dying, wield the light, embody your virtue. Your compassion makes you a worthy vessel for radiant energy.",
        features: {
          3:  [
            { name: "Merciful Healing", description: "You can use Mend on non-Dying creatures. While you are Dying, your Lifebinding Spirit can act 1/Round without spending an action." },
            { name: "Life is Beautiful", description: "Harmless and lovely creatures such as butterflies and humming birds are attracted to your presence and often follow you. Flowers bloom more vibrantly in your presence." }
          ],
          7:  [{ name: "Searing Light", description: "1 Action: (Reach 6) Whenever you heal HP, you may expend 1 use of Mend to damage another target for the amount of HP recovered." }],
          11: [{ name: "Powerful Healer", description: "(WIL/Safe Rest) Whenever you would heal HP, you may instead give that many temp HP, OR heal the max amount you could roll." }],
          15: [{ name: "Lifebinder's Embrace", description: "Your Mend may heal 1 additional creature. Regain 1 charge of Mend when you roll Initiative (this expires if unspent at the end of combat)." }]
        }
      },
      {
        name: "Luminary of Malice",
        className: "Shepherd",
        description: "With death as your companion, you can unleash dark powers on your foes.",
        features: {
          3:  [
            { name: "Soul Reaper", description: "(1/Round) Your companion's attacks can target a 2nd adjacent enemy." },
            { name: "Harbinger of Decay", description: "Vibrant colors and lovely smells are suppressed near you. Foods spoil more rapidly in your presence, and you frequently awaken to flies wherever you lodge. You may have your Lifebinding Spirit shift to a deathly version of itself (a zombie dog, a devious imp, etc.) and have its damage type become necrotic." }
          ],
          7:  [{ name: "Veilwalker's Blessing", description: "(1/Safe Rest) Reaction (when you would drop to 0 HP): Drop to 1 HP instead and crit the attacker back." }],
          11: [{ name: "Deathbringer's Touch", description: "Your Lifebinding Spirit and Withering Touch crit on 1 as well." }],
          15: [{ name: "Conduit of Death", description: "Your Veilwalker's Blessing ability recharges when you roll Initiative." }]
        }
      },
      {
        name: "Luminary of Protection",
        className: "Shepherd",
        description: "\"An ounce of prevention is worth a pound of cure. Why wait for your friends to get hurt to heal them when you could prevent them from being hurt in the first place?\"",
        features: {
          3:  [{ name: "Guardian Spirit", description: "Whenever you Interpose, you may have your Lifebinding Spirit do so instead by spending one of its Mend charges." }],
          7:  [{ name: "Ready For Danger", description: "+WIL Initiative. You may give this bonus to 1 ally as well (after they roll)." }],
          11: [{ name: "Shield of Light", description: "You may have your healing spells grant Temp HP instead. (1/encounter) You can use Mend without spending a charge." }],
          15: [{ name: "Ever Vigilant", description: "Gain advantage on Initiative. You and 1 ally gain +1 action at the start of each encounter." }]
        }
      }
    ],
    songweaver: [
      {
        name: "Herald of Snark",
        className: "Songweaver",
        features: {
          3:  [{ name: "Opportunistic Snark", description: "Reaction (when an enemy within Range 12 misses an attack): You may cast Vicious Mockery at them; it deals double damage when cast this way." }],
          7:  [{ name: "Fight Picker", description: "(1/turn) When an enemy is damaged by your Vicious Mockery, you may have one of your allies Taunt them until the end of the enemy's turn instead." }],
          11: [{ name: "Chord of Chaos", description: "(1/encounter) Action: You may move ALL creatures within hearing of your song up to 3 spaces as long as they do not move into an obviously dangerous place." }],
          15: [{ name: "Words Like Swords", description: "Your Vicious Mockery damage becomes 1d6+INT+WIL." }]
        }
      },
      {
        name: "Herald of Courage",
        className: "Songweaver",
        features: {
          3:  [{ name: "Inspiring Presence", description: "Whenever you use Songweaver's Inspiration, your allies within 12 spaces who can hear you gain WIL temp HP." }],
          7:  [{ name: "Unfailing Courage", description: "Your presence inspires others to feats of heroism and courage heard of only in legend. Your Songweaver's Inspiration allows your target to roll with advantage." }],
          11: [{ name: "Fire in my Bones", description: "Your Songweaver's Inspiration also grants your target 1 additional action." }],
          15: [{ name: "Chorus of Champions", description: "(1/encounter) Free Reaction: Give all party members 1 action." }]
        }
      }
    ],
    stormshifter: [
      {
        name: "Circle of Sky & Storm",
        className: "Stormshifter",
        description: "Master of tempests and heavenly lights. Cast lightning, wind, and one additional school (Ice or Radiant) with primal fury.",
        features: {
          3:  [
            { name: "Deepening Study", description: "Choose the Ice or Radiant school to learn." },
            { name: "Creature of the Fey", description: "You may cast spells while Beastshifted." },
            { name: "Attuned to Nature", description: "(1/day) Add LVL to any skill check related to nature or weather." }
          ],
          7:  [{ name: "Raging Tempest", description: "Whenever you crit with a tiered spell, you may cast a cantrip for free from a school you know and haven't cast any spells from this turn (at the same level of dis/advantage)." }],
          11: [{ name: "Primordial Force", description: "Spending 2+ mana on a spell grants an additional effect: Ice — gain WIL temp HP. Lightning — deal additional damage equal to your WIL. Radiant — you may heal a creature within 6 spaces WIL HP. Wind — gain a flying speed this turn, move up to 6 spaces for free." }],
          15: [{ name: "Master of Storm", description: "You can concentrate on 1 lightning spell and 1 wind spell at the same time. (1/Safe Rest) You can cast Ride the Lightning for 0 mana." }]
        }
      },
      {
        name: "Circle of Venom & Web",
        className: "Stormshifter",
        description: "Stormshifters who align themselves with the nature of spiders and utilize their power from these tiny but deadly creatures.",
        // Deadly Nature replaces lightning OR wind with necrotic (player picks via stormshifterReplacedSchool)
        replacesBaseSchoolChoice: { options: ['lightning', 'wind'], to: 'necrotic' },
        features: {
          3:  [
            { name: "Deadly Nature", description: "Replace your knowledge of the lightning or wind school with necrotic." },
            { name: "Too many legs, too many eyes", description: "Your beastforms gain Climber or Keen Senses for free." },
            { name: "Venom Sacs", description: "When your attack hits in beastform, you may spend mana to increase your Primary Die by 1 for each mana spent (up to the tier of spells you have unlocked). When you crit in beastform, the target is Poisoned until the end of their next turn." }
          ],
          7:  [
            { name: "Ensnare", description: "Whenever you Interpose or Defend vs a melee attack, you may spend 1 mana to Restrain the attacker until the end of their next turn if it is your size or smaller." },
            { name: "Recurring Nightmare", description: "(1/encounter) Shift into a Beast of Nightmares as a reaction for free (if you were being attacked, they must reroll and you choose either result)." }
          ],
          11: [
            { name: "Fear Toxin", description: "When you Poison a target, they are Frightened until the end of their next turn." },
            { name: "Skitter", description: "Your Beast of Nightmares form gets the Fleet Footed Chimeric Boon for free." }
          ],
          15: [
            { name: "Dread Voice", description: "You may cast necrotic spells while Beastshifted." },
            { name: "Spiderling Swarm", description: "Ensnare also Poisons creatures for as long as they are Restrained." }
          ]
        }
      },
      {
        name: "Circle of Cinder & Ash",
        className: "Stormshifter",
        description: "The circles of Cinders have an important duty beyond being perceived as pyromaniacs. They are responsible for clearing portions of forests of impurities or old invasive species to clear it out for the new.",
        // Wildfire replaces lightning OR wind with fire (player picks via stormshifterReplacedSchool)
        replacesBaseSchoolChoice: { options: ['lightning', 'wind'], to: 'fire' },
        features: {
          3:  [
            { name: "Wildfire", description: "Replace your lightning or wind spell school with the fire school." },
            { name: "Searing Fang", description: "Your direbeast form attacks gain the benefits of Enchant Weapon for free." },
            { name: "Firesight", description: "You have advantage on Skill checks related to fire." }
          ],
          7:  [{ name: "Phoenix Flame", description: "(1/encounter) While dying you may cast Pyroclasm for free. Gain temp HP equal to the amount rolled." }],
          11: [{ name: "Cinderhide", description: "Whenever you cast a tiered fire spell, you may spend 2 additional mana to Beastshift for free. You gain resistance to fire damage while shifted." }],
          15: [{ name: "Living Pyre", description: "You can cast Flame Barrier while Beastshifted. (1/encounter) You may do so for free." }]
        }
      },
      {
        name: "Circle of Fang & Claw",
        className: "Stormshifter",
        description: "Bestial shapeshifter. Move fluidly between Direbeast forms and unleash the raw fury of the wild.",
        features: {
          3:  [
            { name: "Swiftshift", description: "When you roll Initiative, you may Beastshift or move for free. While transformed, you may shift between different Direbeast forms for free (and as a reaction by spending 1 mana); however, Beastshifting for free does not grant any temp HP." },
            { name: "Windborne Protector", description: "(1/encounter) Reaction: when an enemy attacks, spend 2 mana to shift into a Fearsome Beast. Then you may Interpose from up to 12 spaces away and Defend for free (if you have not yet done so this round)." },
            { name: "Friend of Beasts", description: "Beasts will not attack you until you first harm them. You may transform into harmless beasts without spending a Beastshift charge." }
          ],
          7:  [
            { name: "Unleash the Beast", description: "(1/encounter) When you miss, you can crit instead." },
            { name: "Storm Wake", description: "(1/encounter) Action: Spend 3 mana to shift into a Beast of the Pack, then teleport in a straight line up to 12 spaces away, unerringly dealing WIL d8 lightning damage to any creatures you choose adjacent to your path." }
          ],
          11: [
            { name: "Master of Forms", description: "Your shapeshift forms can have 2 Chimeric Boons at a time." },
            { name: "Venomous Gaze", description: "(1/encounter) Action: Spend 3 mana to shift into a Beast of Nightmares. Then entice a creature within 12 spaces to move 2 × WIL spaces closer to you on a failed WIL save (they roll with disadvantage and must repeat until they save or can move no further). If they end up in the same space as you, you may Sting them for free." }
          ],
          15: [{ name: "Master of Forms (2)", description: "You can Beastshift 2 additional times per Safe Rest. Choose 2 additional Chimeric Boons. Your Direbeast forms can have 3 at a time." }]
        }
      }
    ],
    zephyr: [
      {
        name: "Way of Pain",
        className: "Zephyr",
        description: "The disciplined artist. Turn incoming pain into weapons, punishing enemies for every hit they land.",
        features: {
          3:  [{ name: "Bring the Pain", description: "(1/round) You may turn any melee attack against you into a crit. Whenever you are crit, reduce the damage by half. The attacker takes the same amount of damage you took (ignoring armor). You may suffer 1 Wound to double the damage the enemy takes." }],
          7:  [{ name: "Share My Pain", description: "Your Swiftstrike can also target a 2nd creature within Reach 2." }],
          11: [{ name: "Pain Sharpens the Mind", description: "While you are Bloodied, gain advantage on the first attack you make each turn, and on all saves." }],
          15: [{ name: "Echoed Agony", description: "Your Swiftstrike can also target a 3rd creature within Reach 4." }]
        }
      },
      {
        name: "Way of Iron",
        className: "Zephyr",
        description: "Train your body to be hard as iron. Concentrate to strengthen your defenses, then release the energy for devastating blows.",
        features: {
          3:  [{ name: "Steel Yourself", description: "When you roll Initiative gain Tempered: Roll STR saves with advantage. Reduce all Primary Dice rolled against you by 1. Ends when the encounter does, or when you hit, you may end it to add 1d20 damage." }],
          7:  [
            { name: "Iron Fists", description: "Your unarmed strikes deal 1d6+STR damage. Roll your Tempered die with advantage." },
            { name: "Iron Body", description: "Gain Tempered the first time you would gain a Wound each encounter." }
          ],
          11: [{ name: "Infuse with Iron", description: "When you use Infuse Strength, your target gains Tempered." }],
          15: [{ name: "Perfect Alloy", description: "Gain Tempered whenever you use a Burst of Speed." }]
        }
      },
      {
        name: "Way of Hurricanes",
        className: "Zephyr",
        description: "Your fist is as the howling wind, unceasing and everflowing. Those who face you are battered and bruised by a whirlwind of deadly strikes. Choose this subclass if you want to move with blinding speed and control the position of foes with typhoon-like strikes.",
        features: {
          3:  [
            { name: "Razor Fist", description: "Your unarmed strikes do Slashing damage and are Vicious." },
            { name: "Air Dash", description: "Your Windstep gains: You can pull creatures within Reach 1 of your movement anywhere else within this Reach." }
          ],
          7:  [
            { name: "Cyclonic Defense", description: "Whirling Defense gains: you may place any other creatures within Reach 4, elsewhere within Reach 4." },
            { name: "Cleaving Gale", description: "Whenever you crit, deal that much damage to a 2nd target within Reach 2." }
          ],
          11: [{ name: "Galeforce Strike", description: "Your Swiftstrikes gain Vicious and knockback STR spaces away; you may suffer 1 Wound to double the distance." }],
          15: [{ name: "Tempest's Fury", description: "Whenever you would roll any extra dice for a crit instead roll 1d20." }]
        }
      },
      {
        name: "Way of Flame",
        className: "Zephyr",
        description: "The explosive artist. Turn Wounds into fiery detonations that chain through your enemies.",
        features: {
          3:  [{ name: "Exploding Soul", description: "(1/round) On your turn, you may suffer a Wound. Whenever you gain a Wound, deal STR+Wounds damage to any creatures you choose within 2 spaces (ignoring armor) and give them the Smoldering condition." }],
          7:  [{ name: "Blazing Speed", description: "Gain +2 speed while using Windstep. After you cease movement with Windstep, enemies you passed through take STR+DEX fire damage. You may have Smoldering enemies take double, ending the condition." }],
          11: [{ name: "Chain Reaction", description: "(1/turn) When you crit, deal fire damage equal to your STR+Wounds to creatures of your choice within 2 spaces of your target. Repeat any number of times, targeting creatures not yet damaged by this effect within 2 spaces of any already damaged." }],
          15: [{ name: "Burning Soul", description: "Double any fire damage you deal." }]
        }
      }
    ],
    artificer: [
      {
        name: "Bombardier",
        className: "Artificer",
        features: {
          3:  [{ name: "Explosive Expert", description: "Your Gadgets that deal damage deal +INT additional damage. When you roll a 1 on a Mana Die, you may reroll it once." }],
          7:  [{ name: "Chain Reaction", description: "When your Gadgets damage a target, enemies within 2 spaces take half that damage." }],
          11: [{ name: "Walking Arsenal", description: "Gain 1 additional Mana Die when you roll Initiative. You may use 2 Gadgets per turn." }],
          15: [{ name: "Grand Finale", description: "(1/encounter) 3 actions: Activate ALL of your Gadgets simultaneously at any targets within range. Each deals maximum damage." }]
        }
      },
      {
        name: "Mechanist",
        className: "Artificer",
        features: {
          3:  [{ name: "Masterwork", description: "Choose one of your Inventions as your Masterwork. It gains +1 to all damage and effects. Overcharging it costs 1 fewer Mana Die (minimum 0)." }],
          7:  [{ name: "Efficient Design", description: "Regain 1 Mana Die whenever you crit or reduce an enemy to 0 HP." }],
          11: [{ name: "Dual Wield", description: "You may equip and use 2 Invention weapons simultaneously. The second attack each turn with a different Invention does not suffer Rushed Attack penalty." }],
          15: [{ name: "Magnum Opus", description: "Your Masterwork gains a unique ultimate ability (work with your GM to design it based on the Invention type)." }]
        }
      }
    ],
    hexbinder: [
      {
        name: "Circle of Thorns",
        className: "Hexbinder",
        features: {
          3:  [
            { name: "Thorn Binding", description: "Whenever you Afflict a target, thorny vines erupt around them. They take 1d4 piercing damage whenever they move." },
            { name: "Nature's Spite", description: "You learn cantrips from the Wind school." }
          ],
          7:  [{ name: "Deepening Roots", description: "Your Afflictions are harder to remove. Targets must succeed on 2 saves to remove them instead of 1." }],
          11: [{ name: "Entangling Hex", description: "(1/encounter) When you Afflict a target, all enemies within 3 spaces of them must make a DEX save or be Restrained for 1 round." }],
          15: [{ name: "Blight Lord", description: "Your Curse Weaver damage is doubled. Afflicted creatures that drop to 0 HP explode in thorns, dealing WIL+INT necrotic damage to all creatures within 2 spaces." }]
        }
      },
      {
        name: "Circle of Shadows",
        className: "Hexbinder",
        features: {
          3:  [
            { name: "Shadow Hex", description: "When you Afflict a target, you become Hidden from them until the end of your next turn or until you attack." },
            { name: "Dark Knowledge", description: "Learn 1 cantrip and 1 spell from the Ice school." }
          ],
          7:  [{ name: "Umbral Step", description: "(1/round) When a creature with your Affliction takes damage, you may teleport to any space within 3 spaces of them." }],
          11: [{ name: "Creeping Dread", description: "Afflicted creatures have disadvantage on saves against your spells." }],
          15: [{ name: "Master of Puppets", description: "(1/encounter) Choose an Afflicted creature. For 1 round, you control their actions on their turn (they still make their own saves)." }]
        }
      }
    ],
    // Story-based subclasses — chosen at pivotal story moments (not at level 1), replacing your current subclass
    storyBased: [
      {
        name: "Oathbreaker",
        className: "Oathsworn",
        description: "Fallen, Seeking Redemption. An Oathsworn who has broken their sacred oath, gaining dark powers while still clinging to remnants of light.",
        features: {
          base: [
            { name: "Dark Benediction", description: "Fallen from the light, but not entirely. You lose access to the following Radiant spells: True Strike, Heal, and Warding Bond; and gain access to the following Necrotic spells: Entice, Shadowtrap, and Dread Visage. Whenever you can choose a Utility Spell, you may choose a Radiant or Necrotic one." },
            { name: "Paragon of Power", description: "(Replaces Paragon of Virtue) Advantage on Might checks when attempting to intimidate others." },
            { name: "Aura of Suffering", description: "You gain an aura with a Reach of 4 and can Interpose for an ally anywhere within your aura; however, your Radiant Judgment ability no longer triggers when attacked. Instead, it triggers whenever you could Interpose but don't." }
          ],
          3:  [
            { name: "We All Suffer", description: "Gain +2 max Wounds. When an ally within your aura would gain any Wounds or fail a save, you may suffer the effect instead and trigger your Radiant Judgment ability." },
            { name: "Bring Me Your Pain", description: "Reaction (when a willing ally within your aura would drop to 0 HP): Switch HP with them (if your current HP is higher than their max HP, they gain Temp HP equal to the difference), dropping to 0 HP and gaining the Wound instead." }
          ],
          7:  [{ name: "Torment", description: "Your Lay on Hands heals you for twice as much, and others for half as much. When you deal damage, you can expend healing power from your Lay on Hands pool to increase the damage dealt by an amount equal to the points spent (ignoring armor)." }],
          11: [{ name: "Exploit", description: "Reaction (whenever an ally within your aura Defends): You may expend your Judgment Dice to force an enemy within your Aura to Interpose (a creature cannot interpose against its own attack)." }],
          15: [{ name: "Bloody Terror", description: "Attacks against you gain disadvantage for each Wound you have (max 3)." }]
        }
      },
      {
        name: "Spellblade",
        className: "Commander",
        description: "Steel Meets Spell. A Commander who weaves arcane magic into martial prowess, trading pure tactics for spellcraft.",
        features: {
          base: [
            { name: "Arcane Command", description: "Your focus on the arcane causes you to lose access to Weapon Mastery and Combat Tactics, but you now gain INT mana when you roll Initiative (this mana is lost if unspent when combat ends). Whenever you could choose a Combat Tactic or Weapon Mastery, instead choose another Commander's Order or a tier 1 (or lower) spell from any spell school. Your Commander's Orders are empowered with magical power (see empowered Orders list)." },
            { name: "Face Me! (Glimmering Decree)", description: "Reaction (after an ally within 12 spaces is crit): That enemy takes STR d8 radiant damage (ignoring armor), is pulled up to 4 spaces toward you, and is Taunted by you until you drop to 0 HP." },
            { name: "Move it! Move it! (Borne upon the Wind)", description: "When you roll Initiative, you may give yourself and an ally advantage on the roll, +3 speed, and the ability to fly for 1 round. Then, you both can also move for free." },
            { name: "Hold the Line! (Crystalline Armor)", description: "(1/encounter) Reaction (when an ally drops to 0 HP): Command them to continue the fight! Set their HP to 3x your LVL. Additionally, they gain that many temp HP. Enemies who reduce this temp HP in melee have their speed halved until the end of their next turn." },
            { name: "Reposition! (Flashstep)", description: "Action/Reaction (on an ally's turn): Command 1 ally to move up to their speed (or 2 allies up to half their speed) for free. You may exchange places with one of them." },
            { name: "I Can Do This ALL DAY! (Rising Phoenix)", description: "(1/encounter) Reaction (when you would drop to 0 HP): You may expend any number of Hit Dice, set your HP to the sum rolled instead, and deal that much fire damage to each enemy within 2 spaces of you. They gain the Smoldering condition." },
            { name: "Commanding Presence (Withering Presence)", description: "Creatures you Command suffer Necrotic damage equal to the max value of your Combat Die (ignoring armor) and are considered undead for 1 round." }
          ],
          3:  [
            { name: "Spellforge", description: "When you roll Initiative you may cast Enchant Weapon for free (can be upcast as normal by spending additional mana)." },
            { name: "Deep Knowledge (1)", description: "Choose any tier 1 (or lower) spell and any Utility Spell." }
          ],
          7:  [{ name: "Deep Knowledge (2)", description: "Choose any tier 2 (or lower) spell and any Utility Spell." }],
          11: [{ name: "Deep Knowledge (3)", description: "Choose any tier 3 (or lower) spell and any Utility Spell." }],
          15: [{ name: "Deep Knowledge (4)", description: "Choose any tier 4 (or lower) spell and any Utility Spell." }]
        }
      },
      {
        name: "Reaver",
        className: "Shadowmancer",
        description: "Cast Aside, Born Anew. Cut off from your patron, you lose Shadow Blast and tiered spells via Pilfered Power. In exchange you gain the magical Bonescythe.",
        // Reaver loses only Shadow Blast (keeps Summon Shadow) and gains Bonescythe as a replacement cantrip
        blocksClassSpecific: ['Shadow Blast'],
        grantsClassSpecific: ['Bonescythe'],
        // Base class abilities this subclass removes (e.g., Reaver strips Pilfered Power — replaced by Shadow Exploit)
        removesClassAbilities: ['Pilfered Power'],
        features: {
          base: [
            { name: "Hollow One", description: "Cut off from your patron, you can no longer cast Shadow Blast, nor can you cast tiered spells using Pilfering Power. However, as a parting token, you have stolen a secret from your patron: the magical Bonescythe, a weapon of sinew and bone, infused with shadowy magic." },
            { name: "Summon Bonescythe", description: "1 Action. Summon a magical Bonescythe, a melee weapon. (Reach 2) 2d12 slashing+DEX necrotic damage to EACH die (add 1 extra damage die every 5 levels). On hit (or when combat ends): it shatters and must be resummoned to use again. Invocations affecting Shadow Blast affect your Bonescythe instead." }
          ],
          3:  [
            { name: "Shadow Exploit", description: "Whenever you Defend, you can sacrifice a Shadow to take no damage. Or you may sacrifice a Shadow to cast a spell at the highest tier you have unlocked. Each subsequent time you use this ability in an encounter, increase the cost by 1 Shadow." }
          ],
          7:  [
            { name: "Grim Harrow", description: "When you strike with your Bonescythe, treat each die as Primary. You may divide the dice as you choose amongst any number of adjacent targets within Reach." },
            { name: "Reap", description: "When your Bonescythe crits or kills a creature, summon a Shadow for free (ignoring your Shadow Limit)." }
          ],
          11: [
            { name: "My Blood, My Power", description: "You may take 1 Wound to cast a tiered spell you know at the highest tier you have unlocked." },
            { name: "Otherworldly Might", description: "Advantage on concentration checks if you have any Shadows." }
          ],
          15: [{ name: "Sovereign One", description: "Summon 2 Shadows and your Bonescythe for free when you roll Initiative." }]
        }
      },
      {
        name: "Beastmaster",
        className: "Hunter",
        description: "Together, Unstoppable. A Hunter who has formed an extraordinary bond with a beast companion.",
        features: {
          base: [
            { name: "Beastmaster", description: "Choose a Small, Medium, or Large animal as your companion. Instead of your first 2 Thrill of the Hunt (TotH) abilities, you can select Go for the Throat! and Protect Me! to use with your companion." },
            { name: "No Stats or Actions to Track!", description: "Your companion's HP and movement are abstracted; it knows where it is most needed — whether defending you or attacking your quarry. It is smart enough, and you are caring enough, to make sure it is never put in mortal danger." },
            { name: "Extra Abilities?", description: "At the GM's discretion, your companion can also do anything the base animal can do: fly, sniff out scents, be used as a mount, etc. Even more complex actions like Grapple or Help may be doable if it makes sense (you'll need to spend 1 action to command it — it isn't smart enough to do so on its own)." },
            { name: "Small Companion (Cat, Bat, Hawk, Raccoon, Rooster, Ferret)", description: "Keen Eyes: (1/encounter) Mark a target for free. L7: 2/encounter. L11: 3/encounter. Protect me!: (1/encounter) When you Defend, your companion distracts the attacker, causing the attack to miss, and you move up to half your speed away. L7: 2/encounter. Go for the Throat!: (1/encounter) Costs 1 TotH charge. Your companion attacks your quarry for 1d4+LVL damage for free (ignoring armor). L11: 2/encounter, 1/round. L15: 3/encounter, 1/round." },
            { name: "Medium Companion (Wolf, Boar, Panther, Vulture, Giant Spider)", description: "Ferocious: Whenever you or your companion crit your quarry, your companion attacks again for LVL damage (ignoring armor), and you can move up to 2 spaces for free. L7: 4 spaces. L15: 6 spaces. Protect me!: When you Defend, your companion may first attack that creature for 1d4+LVL damage. L15: 6 spaces. Go for the Throat!: (1/encounter) Costs 1 TotH charge, action. Your companion attacks your quarry for 1d8+(3 x LVL) damage (ignoring armor). L11: 2/encounter." },
            { name: "Large Companion (Lion, Owlbear, Elk, Giant Scorpion, Drake) Req. Level 3", description: "Alpha Protector: Damage from the first attack against you each round is halved. Protect me!: (1/encounter) After you gain a Wound, your companion can whisk you away to safety up to 12 spaces. L7: You are whisked away BEFORE gaining the Wound. L15: 2/encounter. Go for the Throat!: (1/encounter) Costs 2 TotH charges, 2 actions. Your companion attacks your quarry for 1d12+(4 x LVL) damage (ignoring armor). If that creature dies, you may deal half as much to another creature within Reach 4. L11: 2/encounter." },
            { name: "Companion Attacks & Charges", description: "Your companion's attacks count as your own for gaining TotH charges. Abilities that spend TotH charges cannot miss nor can they generate new charges. Unused charges are lost when combat ends." }
          ]
        }
      },
      {
        name: "Muscle Mage",
        className: "Berserker",
        description: "\"Pointy-hat-man do magic. ME have pointy hat. ME DO MAGIC!\" — Fleximus the Wise. Your muscles have \"unlocked the secrets of the arcane\" (and any fool who disputes that is about to have a bad day).",
        // Muscle Mage strips Savage Arsenal and weapon proficiencies; instead grants Muscle Spells
        // (documented in reference/classes.md; requires N Fury Dice to cast — not auto-loaded).
        removesClassAbilities: ['Savage Arsenal', 'Savage Arsenal (2)', 'Savage Arsenal (3)', 'Savage Arsenal (4)', 'Savage Arsenal (5)', 'Savage Arsenal (6)', 'Savage Arsenal (7)'],
        features: {
          base: [
            { name: "Muscle Magic", description: "Your muscles have \"unlocked the secrets of the arcane\" (and any fool who disputes that is about to have a bad day). You lose access to the Savage Arsenal and all weapon proficiencies but gain access to \"Muscle Spells\" which require you to have a certain number of Fury Dice to cast." }
          ],
          3:  [{ name: "STRENGTH of Mind", description: "Add your STR to INT-based skills." }],
          7:  [{ name: "I'm Fine! Totally Fine!", description: "(1/Safe Rest) When you drop to 0 hp, give a number of actions out to your allies equal to the number of Fury Dice you had." }],
          11: [{ name: "Flexpertise", description: "Reduce the Fury Die Requirement of your Muscle Spells by 2." }],
          15: [{ name: "High Flexemplar", description: "Gain +4 max wounds. \"I'm Fine! Totally Fine!\" is unlimited." }]
        }
      },
      {
        name: "Luminary of the Forge",
        className: "Shepherd",
        description: "Your Lifebinding Spirit is the furnace's flame incarnate. The Necrotic school is exchanged for Fire.",
        // Exchange Necrotic for Fire per Flameworker (L3). getCharacterSchools honors this,
        // so switching into Forge auto-drops necrotic spells and loads fire spells at the
        // character's current tier.
        replacesBaseSchool: { from: 'necrotic', to: 'fire' },
        features: {
          3:  [
            { name: "Flameworker", description: "Exchange knowledge of the Necrotic spell school for Fire. Your Lifebinding Spirit inflicts Smoldering on crit." },
            { name: "Seasoned Journeyman", description: "Whenever you Safe Rest, choose one: Weaponsmith — Your weapons gain +STR damage until your next Safe Rest. Armorsmith — Your armor gains +STR Defense until your next Safe Rest." }
          ],
          7:  [
            { name: "Lightforged", description: "Mend also grants WIL+STR Temp HP and 1 action." },
            { name: "Living Ember", description: "Your Lifebinding Spirit deals 2× damage to Smoldering targets, ending the condition." }
          ],
          11: [{ name: "Masterwork", description: "+WIL to Weaponsmith and Armorsmith; you may choose twice." }],
          15: [{ name: "Quench the Blaze", description: "(1/encounter) When a Smoldering enemy loses the condition, you may Restrain them until the end of their next turn." }]
        }
      },
      {
        name: "The Honorseeker",
        className: "The Cheat",
        description: "\"No more tricks. Honest.\" A former Cheat who has given up sneak attacks and cheating in exchange for the courage to fight fair.",
        // Honorseeker gives up L1 core abilities and Twist the Blade in exchange for Honorable Gambits
        removesClassAbilities: ['Sneak Attack', 'Vicious Opportunist', 'Twist the Blade', 'Twist the Blade (2)'],
        features: {
          base: [
            { name: "Honorseeker", description: "You give up Sneak Attack, Vicious Opportunist, Underhanded Abilities, and Twist the Blade, in exchange gain: Honorable Gambits, Worthy Underdog, and Tenacious Fighter." },
            { name: "Honorable Gambits", description: "For every Underhanded Ability you would have (except for your Old Habits...), choose an Honorable Gambit instead. Options: Deft Parry, Down Not Out!, Frightful Confidence, Mark of Deflection, Nowhere to Flee!, Redemption Arc, Riposte, Say That to My Face!, Victor's Confidence." },
            { name: "Worthy Underdog", description: "When enemies have The Upper Hand, attacks miss you on 2 or less." },
            { name: "Tenacious Fighter", description: "(1/turn) When you HIT an enemy that has The Upper Hand you may change the Primary Die roll to whatever you like and deal +1d6 damage (this increases as your Sneak Attack dice would)." },
            { name: "The Upper Hand", description: "Whenever there are more of them adjacent to you than allies." }
          ],
          3:  [{ name: "Prove Your Worth!", description: "(Reach 12, 1/turn) Taunt an enemy for free (lasts until they damage you). Gain DEX damage reduction vs enemies Taunted by you." }],
          5:  [{ name: "Even the Odds", description: "When attacking or being attacked by an enemy with The Upper Hand, you may spend an action to change a die up or down 1 face (replaces Twist the Blade and improves as it would)." }],
          7:  [{ name: "Old Habits...", description: "Choose 1 Underhanded Ability." }],
          11: [{ name: "Right Where I Want You", description: "You have advantage on attacks and +10 Defense as long as enemies have The Upper Hand." }],
          15: [{ name: "Turn the Tables", description: "When an enemy with The Upper Hand misses you in melee, you may spend an action attacking them in return." }],
          20: [{ name: "Supreme Underdog", description: "(Replaces Supreme Execution...) You take 10 less damage from all attacks by creatures with The Upper Hand." }]
        }
      }
    ]
  },

  // ==========================================================================
  // SPELLS
  // ==========================================================================
  SPELLS: {
    fire: {
      name: "Fire",
      cantrips: [
        { name: "Flame Dart", tier: 0, actions: 1, range: "8 spaces", damage: "1d10 Fire", description: "Hurl a dart of flame at a creature. On crit: Smoldering. +5 damage every 5 levels.", type: "single" },
        { name: "Heart's Fire", tier: 0, actions: 1, range: "4 spaces", damage: "None", description: "Give an ally within Range an extra action. Spend 1 mana to cast this when it is not your turn. +1 Range every 5 levels.", type: "single" }
      ],
      spells: [
        { name: "Ignite", tier: 1, actions: 2, range: "8 spaces", damage: "4d10 Fire", description: "Deal 4d10 to a Smoldering target, ending the condition on hit.", upcast: "+10 damage", type: "single" },
        { name: "Enchant Weapon", tier: 2, actions: 1, range: "Touch", damage: "None", description: "A weapon you touch is enchanted with magical flame. It deals +KEY damage and inflicts Smoldering on crit. Concentration up to 1 min.", upcast: "+KEY damage", type: "single" },
        { name: "Flame Barrier", tier: 3, actions: 1, range: "Self", damage: "None", description: "Reaction: When attacked, Defend for free. Until the start of your next turn, melee attackers against you take KEY damage (ignoring armor) and gain Smoldering.", upcast: "+KEY damage", type: "self" },
        { name: "Pyroclasm", tier: 4, actions: 2, reach: "3 spaces", damage: "2d20+10 (ignoring armor)", description: "Others within Reach take 2d20+10 damage (ignoring armor) on a failed DEX save. Half damage on save. Smoldering creatures fail.", upcast: "+1 Reach, +2 damage", type: "aoe" },
        { name: "Fiery Embrace", tier: 5, actions: 2, reach: "8 spaces", damage: "None", description: "Concentration up to 1 min. While within Reach: 1 ally gains Enchant Weapon effects. Enemies gain Smoldering, lose damage resistance, and their immunity is reduced to resistance.", upcast: "+1 ally", type: "aoe" },
        { name: "Living Inferno", tier: 7, actions: 3, range: "Self", damage: "None", description: "Gain the effects of Flame Barrier until your next turn. At the end of this turn and your next turn, cast Pyroclasm for free.", upcast: "Upcast Flame Barrier and Pyroclasm", type: "self" },
        { name: "Dragonform", tier: 9, actions: 5, range: "Self", damage: "Various", description: "Transform into a Huge dragon. Gain 3 actions, fly speed of 12, LVL Armor, 10xLVL temp HP. Tooth & Claw (Reach 2): 1d20+LVL damage ignoring armor, inflicts Smoldering. Immolating Breath (2 Actions, Cone 8): DC 20 DEX save, KEYd20 damage, half on save. Smoldering targets fail. Lasts as long as temp HP remain (max 10 min). When it ends, you drop to 0 HP.", type: "self" }
      ]
    },
    ice: {
      name: "Ice",
      cantrips: [
        { name: "Ice Lance", tier: 0, actions: 1, range: "12 spaces", damage: "1d6 Cold/Piercing", description: "On hit: Slowed. +3 damage every 5 levels.", type: "single" },
        { name: "Snowblind", tier: 0, actions: 1, reach: "1 space", damage: "1d6", description: "On hit: Blinded until the end of their next turn. +3 damage every 5 levels.", type: "single" }
      ],
      spells: [
        { name: "Frost Shield", tier: 1, actions: 1, range: "Self", damage: "None", description: "Reaction: When attacked, gain 2xKEY temp HP and Defend for free. The ice melts and these temp HP are lost at the start of your next turn.", upcast: "+2xKEY temp HP", type: "self" },
        { name: "Shatter", tier: 2, actions: 2, range: "12 spaces", damage: "3d6", description: "If any die rolls the max against a Hampered target, this counts as a crit. On crit: +20 damage.", upcast: "Increase ANY die by 1. +5 crit damage", type: "single" },
        { name: "Cryosleep", tier: 3, actions: 2, reach: "12 spaces", damage: "None", description: "Creatures in a 2x2 area within Reach are Dazed. On failed STR save, they fall asleep (Incapacitated) until 2 turns pass, until damaged, or ally uses action to wake them.", upcast: "+1 area, +1 turn asleep", type: "aoe" },
        { name: "Rimeblades", tier: 4, actions: 3, reach: "12 spaces", damage: "2d6 per space", description: "Conjure razor-sharp icy spikes in 5 contiguous spaces within Reach (difficult terrain). Creatures entering suffer 2d6 damage for each space they touch. Concentration up to 1 min.", upcast: "+1 space, +1 damage", type: "aoe" },
        { name: "Arctic Blast", tier: 5, actions: 2, reach: "Cone 4", damage: "4d6+10", description: "Area is difficult terrain until end of your next turn. Surviving creatures STR save or frozen (Restrained) until end of next turn; already Hampered are Incapacitated 1 turn instead.", upcast: "+1 Reach", type: "aoe" },
        { name: "Glacier Strike", tier: 8, actions: 3, range: "12 spaces", damage: "d66 Bludgeoning", description: "Bludgeoning to creatures in a 3x3 area. Adjacent creatures take half. Area permanently becomes difficult terrain. d66 = roll 2d6, leftmost is tens.", upcast: "+1 initial area", type: "aoe" },
        { name: "Arctic Annihilation", tier: 9, actions: 3, reach: "12 spaces", damage: "d66", description: "Encase any objects/willing creatures within Reach in ice (Incapacitated, immune to damage). All others take d66 damage. Survivors STR save or Incapacitated 1 round. Must Safe Rest 1 week before reuse.", type: "aoe" }
      ]
    },
    lightning: {
      name: "Lightning",
      cantrips: [
        { name: "Zap", tier: 0, actions: 1, range: "12 spaces", damage: "2d8 Lightning", description: "On miss: the lightning fails to find ground and strikes you instead. +6 damage every 5 levels.", type: "single" },
        { name: "Overload", tier: 0, actions: 1, reach: "2 spaces", damage: "2d8 Lightning", description: "Castable only if you are Charged, ending the condition. Damage to others within Reach. +4 damage every 5 levels.", type: "aoe" }
      ],
      spells: [
        { name: "Arc Lightning", tier: 1, actions: 2, range: "12 spaces", damage: "3d8 Lightning", description: "The bolt also damages the next closest creature to your target. On miss: strikes you instead. If ally is next closest, they are hit!", upcast: "+4 damage", type: "single" },
        { name: "Alacrity", tier: 2, actions: 1, range: "4 spaces", damage: "None", description: "Reaction: When attacked, Defend for free. After damage, gain Charged then teleport anywhere within Range.", upcast: "+4 Range", type: "self" },
        { name: "Stormlash", tier: 3, actions: 2, range: "Line 12", damage: "3d8+4 (ignoring metal armor)", description: "Surviving creatures Dazed on failed STR save, or Incapacitated 1 turn if fail by 5+. Creatures with lots of metal roll with disadvantage.", upcast: "+4 damage", type: "aoe" },
        { name: "Electrickery", tier: 4, actions: 3, range: "8 spaces", damage: "None", description: "Reaction: When ally is attacked, choose another creature within Range to swap places with your ally on failed WIL save. Costs 1 Action while Charged.", upcast: "+2 Range", type: "single" },
        { name: "Electrocharge", tier: 5, actions: 2, range: "Touch", damage: "None", description: "Creature you touch gains Charged, +1 max action, +5 armor, 2x speed, advantage on DEX saves. Concentration up to 1 min.", upcast: "+4 Range", type: "single" },
        { name: "Ride the Lightning", tier: 6, actions: 3, range: "12 spaces", damage: "d88 Lightning", description: "Teleport up to 12 spaces to a spot you can see (swap with willing creature). Adjacent creatures take d88 damage. Survivors STR save or hurled back 3 spaces, Prone, deafened 1 day. d88 = roll 2d8, leftmost is tens.", upcast: "+1 DC", type: "aoe" },
        { name: "Seething Storm", tier: 9, actions: 3, reach: "4 spaces", damage: "d88 Lightning", description: "Become a cloud of storm. Fly, move free 1/round, attacks against you have disadvantage. End of each turn: strike up to 4 creatures within Reach for d88. +2 Reach and bolts each round. Costs 3 actions/round. Must Safe Rest 1 week before reuse. Concentration.", type: "aoe" }
      ]
    },
    wind: {
      name: "Wind",
      cantrips: [
        { name: "Razor Wind", tier: 0, actions: 1, range: "12 spaces", damage: "1d4 Slashing", description: "Vicious: roll 1 additional die on crit damage. Also damages up to 1 adjacent target. +2 damage every 5 levels.", type: "single" },
        { name: "Breath of Life", tier: 0, actions: 1, range: "6 spaces", damage: "None", description: "Restore 1 HP to a Dying creature. +2 Range every 5 levels.", type: "single" }
      ],
      spells: [
        { name: "Blustery Gale", tier: 1, actions: 2, range: "12 spaces", damage: "3d4 Bludgeoning", description: "Advantage vs flying, Small, or Tiny. On hit: move Med target 2 spaces away; Small/Tiny twice as far; Large half. For each forced movement die, deal +5 damage instead.", upcast: "+1 movement", type: "single" },
        { name: "Barrier of Wind", tier: 2, actions: 1, range: "Self", damage: "None", description: "Reaction: When attacked at Range, Defend for free. Ranged attacks have disadvantage against you this round.", upcast: "+3 Armor", type: "self" },
        { name: "Fly", tier: 3, actions: 1, range: "Touch", damage: "None", description: "Touch a creature, grant a flying speed of 12. Concentration up to 10 minutes.", upcast: "+1 target", type: "single" },
        { name: "Eye of the Storm", tier: 4, actions: 2, reach: "3 spaces", damage: "4d4+10 Bludgeoning", description: "Bludgeoning to enemies within Reach. Place surviving creatures anywhere within 1 space of the storm's Reach on failed STR save.", upcast: "+1 Reach", type: "aoe" },
        { name: "Updraft", tier: 5, actions: 3, reach: "12 spaces", damage: "1d6 per fail", description: "Enemies in 5x5 area repeat DEX save until success. Each fail: 1d6 falling damage, land prone.", upcast: "+2 Range, +1 area", type: "aoe" },
        { name: "Thousand Cuts", tier: 6, actions: 3, range: "12 spaces", damage: "d44 Slashing (advantage)", description: "Also damages enemies within Reach 1 of target. d44 with advantage = roll 3d4, drop lowest, leftmost is tens.", upcast: "+1 Reach", type: "aoe" },
        { name: "Boisterous Winds", tier: 7, actions: 2, reach: "12 spaces", damage: "None", description: "You and up to 12 allies within Reach 12 gain: ranged attacks disadvantage against you, fly speed 12, move free 1/round. Concentration up to 1 min.", upcast: "+1 min or +2 targets", type: "aoe" }
      ]
    },
    radiant: {
      name: "Radiant",
      cantrips: [
        { name: "Rebuke", tier: 0, actions: 1, reach: "4 spaces", damage: "1d6 (ignoring armor)", description: "Does not miss. 2x damage against undead or cowardly (Frightened or behind cover). +2 damage every 5 levels.", type: "single" },
        { name: "True Strike", tier: 0, actions: 1, reach: "2 spaces", damage: "None", description: "Give a creature advantage on the next attack they make (until end of their next turn). +1 Reach every 5 levels.", type: "single" }
      ],
      spells: [
        { name: "Heal", tier: 1, actions: 1, reach: "1 space", damage: "None (Heal 1d6+KEY)", description: "Heal a creature 1d6+KEY HP. Choose one: +1 target, +4 Reach, +1d6 healing. If 5+ mana spent, also heal 1 negative condition.", upcast: "+1 target, +4 Reach, or +1d6 healing", type: "single" },
        { name: "Warding Bond", tier: 2, actions: 1, range: "Touch", damage: "None", description: "Designate a willing creature as your ward for 1 minute. They take half damage from all attacks; you are attacked for the other half.", upcast: "+1 creature", type: "single" },
        { name: "Shield of Justice", tier: 3, actions: 1, range: "Self", damage: "None", description: "Reaction: When attacked, Defend for free and reflect Radiant damage back at attacker equal to amount blocked (ignoring armor).", upcast: "+5 Armor", type: "self" },
        { name: "Condemn", tier: 4, actions: 2, reach: "4 spaces", damage: "30 (unreducible)", description: "Can only target an enemy that crit you or an ally since your last turn. Cannot be reduced by any means. Next attack against that enemy has advantage.", upcast: "+1 Reach, +1 advantage", type: "single" },
        { name: "Vengeance", tier: 5, actions: 2, reach: "1 space", damage: "1d100", description: "Deal 1d100 to a creature that attacked a Dying ally or reduced one to 0 HP since your last turn.", upcast: "+1 Reach, roll with advantage", type: "single" },
        { name: "Sacrifice", tier: 6, actions: 1, reach: "4 spaces", damage: "None", description: "Reduce yourself to 0 HP (cannot exceed 0 until Safe Rest). Heal creatures within Reach your max HP total, divided as you choose. Revive a creature dead <1 min if you give 20+ HP (also heals 2 Wounds), if not previously revived by this spell.", upcast: "+4 Reach", type: "special" },
        { name: "Redeem", tier: 9, actions: 0, range: "1 mile", damage: "None", description: "Casting time: 24 hours. Requires diamond worth 10,000 gp (consumed). Revive any number of deceased creatures within 1 mile that died in the past year (not of old age, not previously revived by this spell).", type: "aoe" }
      ]
    },
    necrotic: {
      name: "Necrotic",
      cantrips: [
        { name: "Entice", tier: 0, actions: 1, range: "8 spaces", damage: "1d4 (ignoring armor)", description: "On hit: target moves 2 spaces closer to you. Die increments 1 step every 5 levels (d6, d8, d10, d12).", type: "single" },
        { name: "Withering Touch", tier: 0, actions: 1, reach: "1 space", damage: "1d12 Necrotic", description: "On hit: target is considered undead for 1 round. +6 damage every 5 levels.", type: "single" }
      ],
      spells: [
        { name: "Shadow Trap", tier: 1, actions: 2, range: "Self", damage: "3d12", description: "Next creature to move adjacent to you suffers 3d12 damage; if Small/Tiny, also Restrained by shadowy tendrils. Concentration up to 1 min.", upcast: "+1 size category, +1d12 on escape", type: "single" },
        { name: "Dread Visage", tier: 2, actions: 1, range: "Self", damage: "1d12", description: "Reaction: When attacked, Defend for free. Melee attackers are Frightened and suffer 1d12 damage if they attack you this round. Costs 2 mana less while dying.", upcast: "+2 damage, +2 armor", type: "self" },
        { name: "Vampiric Greed", tier: 3, actions: 2, range: "Self", damage: "4d12", description: "Gain 1 Wound. 4d12 to all adjacent creatures, heal HP equal to damage done. Surviving creatures STR save. Gain 1 additional Wound for each that saves.", upcast: "+1 DC", type: "aoe" },
        { name: "Vigor Mortis", tier: 4, actions: 1, range: "Reach", damage: "None", description: "Castable only when an ally drops to 0 HP. Concentration up to 1 min. Their max HP does not change, they skip STR saves to act, and taking damage while Dying causes 1 fewer Wounds (min 1).", upcast: "+10 temp HP", type: "single" },
        { name: "Gangrenous Burst", tier: 5, actions: 2, reach: "Up to 8 spaces", damage: "3d20 (ignoring armor)", description: "Other damaged creatures must STR save or take 3d20 damage (ignoring armor), half on save. Save rolled with disadvantage while Bloodied.", upcast: "+10 damage", type: "aoe" },
        { name: "Unspeakable Word", tier: 6, actions: 2, reach: "8 spaces", damage: "d66 (ignoring armor, advantage, no miss/crit)", description: "On failed INT save. Target rolls disadvantage if Bloodied/Frightened. On success, you both take half. d66 with advantage = roll 3d6, drop lowest.", upcast: "+1 DC, +10 damage", type: "single" },
        { name: "Creeping Death", tier: 7, actions: 3, reach: "8 spaces", damage: "4d20", description: "If this kills a creature, it erupts and you MUST deal the same damage to another creature within 8 spaces not yet damaged by this effect. Repeat until a creature survives or none remain.", upcast: "+1d20 damage", type: "aoe" }
      ]
    },
    classSpecific: {
      name: "Class-Specific Spells",
      spells: [
        { name: "Shadow Blast", tier: 0, actions: 1, range: "8 spaces", damage: "1d12+DEX Necrotic", description: "(Shadowmancer) 1/round. +1d12 damage every 5 levels.", type: "single", class: "Shadowmancer" },
        { name: "Summon Shadow", tier: 0, actions: 1, reach: "1 space", damage: "None", description: "(Shadowmancer) Summon 1 adjacent Shadow (a d12 minion). Shadow Limit: you can have up to INT Shadows. Minions follow the minion rules and abandon you immediately outside of combat. High Levels: +1 Shadow every 5 levels.", type: "single", class: "Shadowmancer" },
        { name: "Command Shadows", tier: 0, actions: 1, range: "N/A", damage: "None", description: "(Shadowmancer) 1/turn. ALL your Shadows move 6 then attack.", type: "single", class: "Shadowmancer" },
        { name: "Bonescythe", tier: 0, actions: 1, reach: "2 spaces", damage: "2d12 slashing + DEX necrotic per die", description: "(Shadowmancer — Reaver) Summon a magical Bonescythe. 2d12 slashing+DEX necrotic damage to EACH die. On hit (or when combat ends): it shatters and must be resummoned to use again. Invocations affecting Shadow Blast affect your Bonescythe instead. +1 extra damage die every 5 levels.", type: "single", class: "Shadowmancer", requiresSubclass: "Reaver" },
        { name: "Vicious Mockery", tier: 0, actions: 1, range: "12 spaces", damage: "1d4+INT Psychic (ignoring armor)", description: "(Songweaver) On hit: target is Taunted during their next turn. +2 damage every 5 levels.", type: "single", class: "Songweaver" },
        { name: "Lifebinding Spirit", tier: 0, actions: 1, range: "Self", damage: "None", description: "(Shepherd) Summon a spirit companion that follows you and is immune to harm (max 1). It can: Harm — 1 Action (Reach 4): It attacks for 1d8+STR (ignoring Armor). Mend — 1 Action (WIL/Safe Rest, Reach 4): It restores WIL d20 HP to a Dying creature. High Levels: +STR damage every 5 levels.", type: "single", class: "Shepherd" }
      ]
    },
    hexbinder: {
      name: "Hexbinder Spells",
      spells: [
        { name: "Misery", tier: 1, actions: 2, reach: "8 spaces", damage: "1d8+LVL", description: "On hit: apply an Affliction instead. On crit: do both.", type: "single", class: "Hexbinder" },
        { name: "Life Bloom", tier: 1, actions: 1, reach: "8 spaces", damage: "None (Heal)", description: "Consume 1 of your own Hit Dice and 1 from a willing target. Heal your target and another creature within Reach the sum of those dice.", type: "single", class: "Hexbinder" },
        { name: "Twitch Curse", tier: 2, actions: 1, reach: "8 spaces", damage: "None", description: "Reaction: When a creature within Reach attacks, Defend for free. Move the attacker 1 space (+1 per Affliction they have). Opportunity attacks triggered this way have advantage.", type: "single", class: "Hexbinder" },
        { name: "Bloodcurse", tier: 2, actions: 2, reach: "8 spaces", damage: "1d4+LVL", description: "Increment die size for each Affliction they have. On hit: target is secretly Bloodcursed, suffering 2x the next damage they deal (ignoring armor).", type: "single", class: "Hexbinder" },
        { name: "Wyrding Strands", tier: 3, actions: 2, reach: "8 spaces", damage: "None", description: "Move creatures in a 4x4 area a total of 2d6 spaces, divided as you choose. Large+ creatures move half as far.", type: "aoe", class: "Hexbinder" },
        { name: "Frogify", tier: 3, actions: 2, reach: "8 spaces", damage: "None", description: "On failed WIL save, turn a creature into a harmless, armorless, tiny FROG for up to 1 min. On save, only reduce armor to none. Damage or recast ends effect.", type: "single", class: "Hexbinder" },
        { name: "Malediction", tier: 4, actions: 2, reach: "4 spaces", damage: "KEYd4 x LVL (ignoring armor)", description: "Roll KEYd4 Primary Dice. For each hit, deal LVL damage to a creature within Reach (ignoring armor). Max 1 die per creature.", type: "aoe", class: "Hexbinder" },
        { name: "Circle of Thorns", tier: 4, actions: 2, reach: "8 spaces", damage: "KEYd6", description: "Fill every empty adjacent space around a creature with thorns. Creatures entering DEX save or take KEYd6 damage and become Restrained, half on save. Lasts up to 1 min or 3 damage instances.", type: "single", class: "Hexbinder" },
        { name: "Terror", tier: 5, actions: 2, reach: "8 spaces", damage: "LVL x 1d4 (ignoring armor)", description: "Advantage for each Affliction on the target.", type: "single", class: "Hexbinder" }
      ]
    },
    utility: {
      name: "Utility Spells",
      ice: [
        { name: "Ice Disk", tier: 0, actions: 0, range: "Self", damage: "None", description: "Casting time: 1 min. Conjure a floating disk of ice that follows you. Carries up to 250 lbs for 1 hour or until recast." },
        { name: "Chillcraft", tier: 0, actions: 1, range: "Self", damage: "None", description: "Chill: Harmlessly freeze, thaw, or move a bath-sized amount of water near you. OR Craft: Conjure a sheet of opaque, mirror-like, or transparent ice (window/small door size)." },
        { name: "Wintry Scrying", tier: 0, actions: 0, range: "Touch", damage: "None", description: "Casting time: 10 min. Turn a small patch of water into a reflective icy mirror. Grants vision of any desired location near this body of water for 10 minutes." }
      ],
      fire: [
        { name: "Firebrand", tier: 0, actions: 1, range: "Touch", damage: "None", description: "Touch a surface and secretly mark it with a symbol or brief message. Speaking a chosen command word while nearby reveals it." },
        { name: "Fire Step", tier: 0, actions: 0, range: "Self", damage: "None", description: "Casting time: 1 min. Teleport to a fire source you can see." },
        { name: "Kindle", tier: 0, actions: 1, range: "6 spaces", damage: "None", description: "Conjure a minor visual illusion. OR Ignite a small, unheld item within Range 6." }
      ],
      lightning: [
        { name: "Spark Buddy", tier: 0, actions: 0, range: "Self", damage: "None", description: "Casting time: 1 min. Conjure a Tiny electrical helper for up to 1 hour. Fetches tiny objects, opens doors, illuminates small area, delivers harmless shock. Dissipates if damaged or moves further than 6 spaces from you." },
        { name: "Spark Step", tier: 0, actions: 1, range: "4 spaces", damage: "None", description: "Teleport to a metal object within Range." },
        { name: "Tempest's Command", tier: 0, actions: 1, range: "Self", damage: "None", description: "Dispel a minor magical effect, or temporarily suppress a stronger one. OR Voice of Thunder: eyes glow and voice amplified to booming volume for 1 min." }
      ],
      wind: [
        { name: "Wind Whisper", tier: 0, actions: 1, range: "100 miles", damage: "None", description: "Whisper a message into the wind, carried to a specified target within 100 miles." },
        { name: "Helpful Gust", tier: 0, actions: 1, reach: "6 spaces", damage: "None", description: "Gently move a Tiny unheld item within Reach in any direction. OR Generate an illusory scent." },
        { name: "Feather Fall", tier: 0, actions: 1, reach: "6 spaces", damage: "None", description: "Reaction: When a creature falls, cause them to gently float to the ground, unharmed." }
      ],
      radiant: [
        { name: "Light", tier: 0, actions: 1, range: "Touch", damage: "None", description: "Cause an item to brightly glow as a torch with radiant light for as long as you hold it." },
        { name: "Beautify", tier: 0, actions: 1, range: "Touch", damage: "None", description: "Clean stains or repair a small tear/break in a non-magical item, or conjure tiny beautiful things: flowers, butterflies, etc." },
        { name: "Bond of Peace", tier: 0, actions: 1, range: "Self", damage: "None", description: "Bond: Telepathically communicate simple thoughts/feelings with a friendly creature you can see. OR Peace: Imbue words with calming magic, advantage on checks to soothe anger or fear." }
      ],
      necrotic: [
        { name: "Gravecraft", tier: 0, actions: 1, range: "Touch", damage: "None", description: "Gravemark (Action): Soil a surface with blood, filth, or disgusting things. OR Gravework (1 min): Shape/move a body-sized plot of earth." },
        { name: "False Face", tier: 0, actions: 0, range: "Self", damage: "None", description: "Casting time: 1 min. Change your appearance to look like someone else for 10 minutes. Requires a piece of them." },
        { name: "Thought Leech", tier: 0, actions: 1, reach: "6 spaces", damage: "None", description: "Read the surface thoughts of a creature within Reach. Creatures can sense you doing this and may not like it." }
      ]
    }
  },

  // ==========================================================================
  // EQUIPMENT
  // ==========================================================================
  // ==========================================================================
  // COMBAT ACTIONS & REACTIONS (per Nimble core rules §13-14)
  // ==========================================================================
  COMBAT_ACTIONS: [
    { name: "Attack",       cost: "1 Action", description: "Any spell or ability that harms an enemy is an attack. A 1 on the Primary Die is always a miss. Max on Primary = exploding crit. Additional attacks after the first suffer cumulative disadvantage (Rushed Attacks)." },
    { name: "Move",         cost: "1 Action", description: "Move up to your speed (default 6 spaces). Difficult terrain halves speed. Split movement or Move multiple times with extra actions." },
    { name: "Cast Spell",   cost: "Varies",   description: "Requires 1 free hand (or a held focus) and speech. Mana cost = spell tier (cantrips = 0). Upcast by spending extra mana, up to your unlocked tier." },
    { name: "Assess",       cost: "1 Action", description: "DC 12 skill check to Ask a Question, Create an Opening (+1 to next Primary Die vs target), or Anticipate Danger (-1 to all Primary Dice against you). Each skill once per encounter." },
    { name: "Free Actions", cost: "Free",     description: "Simple tasks (open unlocked door, shout, drop item, end concentration) are free 1/turn." }
  ],

  REACTIONS: [
    { name: "Defend",              cost: "1 Reaction", description: "Reduce damage from a single attack by your Armor. Some damage (psychic, some AOEs) may be unavoidable per GM. Limit 1/round." },
    { name: "Interpose",           cost: "1 Reaction", description: "If a creature within 2 spaces is struck, become the new target. Enter their space and move them to an adjacent space. Limit 1/round." },
    { name: "Opportunity Attack",  cost: "1 Reaction", description: "Melee attack with disadvantage against an adjacent enemy as they willingly move away. Heroes only. Limit 1/round." },
    { name: "Help",                cost: "1 Reaction", description: "Grant an ally advantage on a roll if you can reasonably explain how. GM may call for a skill check. Limit one Help per roll." }
  ],

  // ==========================================================================
  // EQUIPMENT (per Nimble core rules §22)
  // Armor formula: { base: number, statMod?: 'DEX'|'STR', statMax?: number (cap on stat) }
  //   e.g. Adventurer's Garb: { base: 2, statMod: 'DEX' }  → 2+DEX
  //   e.g. Rusty Mail:        { base: 6, statMod: 'DEX', statMax: 2 }  → 6+DEX (DEX max 2)
  //   e.g. Rusty Plate:       { base: 10 }  → flat 10
  // Weapon damage: "1d6+STR" format where the stat is added to the roll
  // ==========================================================================
  EQUIPMENT: {
    weapons: {
      melee: [
        { name: "Dagger",      damage: "1d4+DEX",  damageType: "Piercing",          statUsed: "DEX", properties: ["Light", "Thrown 4"],                                 cost: "3 gp" },
        { name: "Sickle",      damage: "1d4+DEX",  damageType: "Slashing",          statUsed: "DEX", properties: ["Vicious"],                                           cost: "10 gp" },
        { name: "Club",        damage: "1d6+STR",  damageType: "Bludgeoning",       statUsed: "STR", properties: [],                                                    cost: "2 gp" },
        { name: "Mace",        damage: "1d6+STR",  damageType: "Bludgeoning",       statUsed: "STR", properties: [],                                                    cost: "2 gp" },
        { name: "Hand Axe",    damage: "1d6+STR",  damageType: "Slashing",          statUsed: "STR", properties: ["Thrown 4"],                                          cost: "8 gp" },
        { name: "Spear",       damage: "1d6+STR",  damageType: "Piercing",          statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "10 gp" },
        { name: "Short Sword", damage: "1d6+DEX",  damageType: "Piercing",          statUsed: "DEX", properties: ["Light"],                                             cost: "15 gp" },
        { name: "Rapier",      damage: "2d4+DEX",  damageType: "Piercing",          statUsed: "DEX", properties: [],                                                    cost: "60 gp" },
        { name: "Staff",       damage: "1d8+STR",  damageType: "Bludgeoning",       statUsed: "STR", properties: ["2-handed"],                                          cost: "8 gp" },
        { name: "Longsword",   damage: "1d8+STR",  damageType: "Slashing",          statUsed: "STR", properties: ["2-handed (1-handed: Req. 2 STR)"],                   cost: "60 gp" },
        { name: "Battleaxe",   damage: "1d10+STR", damageType: "Slashing",          statUsed: "STR", properties: ["2-handed"],                                          cost: "30 gp" },
        { name: "Pole Hammer", damage: "1d10+STR", damageType: "Bludgeoning",       statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "60 gp" },
        { name: "Glaive",      damage: "1d10+STR", damageType: "Slashing",          statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "60 gp" },
        { name: "Great Spear", damage: "1d10+STR", damageType: "Piercing",          statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "60 gp" },
        { name: "Greatmaul",   damage: "3d4+STR",  damageType: "Bludgeoning",       statUsed: "STR", properties: ["2-handed", "Req. 2 STR"],                            cost: "80 gp" },
        { name: "Greataxe",    damage: "2d6+STR",  damageType: "Slashing",          statUsed: "STR", properties: ["2-handed", "Req. 2 STR"],                            cost: "100 gp" },
        { name: "Greatsword",  damage: "1d12+STR", damageType: "Slashing/Piercing", statUsed: "STR", properties: ["2-handed", "Req. 2 STR"],                            cost: "120 gp" }
      ],
      ranged: [
        { name: "Sling",             damage: "1d4+DEX",  damageType: "Bludgeoning", statUsed: "DEX", properties: ["2-handed", "Range 12", "Vicious"],                   cost: "4 gp" },
        { name: "Javelins",          damage: "1d6+STR",  damageType: "Piercing",    statUsed: "STR", properties: ["Range 8", "Stack of 4"],                             cost: "20 gp" },
        { name: "Throwing Hammers",  damage: "1d8+STR",  damageType: "Bludgeoning", statUsed: "STR", properties: ["Range 4", "Stack of 3"],                             cost: "25 gp" },
        { name: "Shortbow",          damage: "1d6+DEX",  damageType: "Piercing",    statUsed: "DEX", properties: ["2-handed", "Range 12"],                              cost: "25 gp" },
        { name: "Longbow",           damage: "1d8+DEX",  damageType: "Piercing",    statUsed: "DEX", properties: ["2-handed", "Range 16", "Req. 1 STR"],                cost: "30 gp" },
        { name: "Crossbow",          damage: "4d4+DEX",  damageType: "Piercing",    statUsed: "DEX", properties: ["2-handed", "Load: 1 action", "Range 8"],             cost: "60 gp" },
        { name: "Handheld Ballista", damage: "1d20+DEX", damageType: "Piercing",    statUsed: "DEX", properties: ["2-handed", "Load: 2 actions", "Range 8", "Req. 2 STR"], cost: "120 gp" }
      ]
    },
    armor: {
      cloth: [
        { name: "Adventurer's Garb",          formula: { base: 2, statMod: "DEX" }, cost: "10 gp",     requirements: "None" },
        { name: "Minor Enchantment (Cloth)",  formula: { base: 3, statMod: "DEX" }, cost: "100 gp",    requirements: "None" },
        { name: "Major Enchantment (Cloth)",  formula: { base: 4, statMod: "DEX" }, cost: "1,000 gp",  requirements: "None" },
        { name: "Epic Enchantment (Cloth)",   formula: { base: 5, statMod: "DEX" }, cost: "10,000 gp", requirements: "None" }
      ],
      leather: [
        { name: "Cheap Hides",  formula: { base: 3, statMod: "DEX" }, cost: "5 gp",     requirements: "None" },
        { name: "Ox Hide",      formula: { base: 4, statMod: "DEX" }, cost: "45 gp",    requirements: "None" },
        { name: "Hard Leather", formula: { base: 5, statMod: "DEX" }, cost: "300 gp",   requirements: "Req. 1 STR" },
        { name: "Wyrmhide",     formula: { base: 6, statMod: "DEX" }, cost: "2,000 gp", requirements: "Req. 1 STR" }
      ],
      mail: [
        { name: "Rusty Mail",   formula: { base: 6,  statMod: "DEX", statMax: 2 }, cost: "15 gp",    requirements: "None" },
        { name: "Chain Shirt",  formula: { base: 9,  statMod: "DEX", statMax: 2 }, cost: "60 gp",    requirements: "Req. 2 STR" },
        { name: "Scale Mail",   formula: { base: 12, statMod: "DEX", statMax: 2 }, cost: "700 gp",   requirements: "Req. 3 STR" },
        { name: "Dragonscale",  formula: { base: 15, statMod: "DEX", statMax: 2 }, cost: "3,000 gp", requirements: "Req. 4 STR" }
      ],
      plate: [
        { name: "Rusty Plate",   formula: { base: 10 }, cost: "25 gp",    requirements: "Req. 2 STR" },
        { name: "Half Plate",    formula: { base: 14 }, cost: "200 gp",   requirements: "Req. 3 STR" },
        { name: "Full Plate",    formula: { base: 18 }, cost: "2,000 gp", requirements: "Req. 4 STR" },
        { name: "Adamantine Plate", formula: { base: 22 }, cost: "5,000 gp", requirements: "Req. 5 STR" }
      ]
    },
    shields: [
      { name: "Wooden Buckler", shieldArmor: 2, cost: "5 gp",     requirements: "None" },
      { name: "Iron Shield",    shieldArmor: 4, cost: "80 gp",    requirements: "Req. 2 STR" },
      { name: "Tower Shield",   shieldArmor: 6, cost: "1,500 gp", requirements: "Req. 3 STR" },
      { name: "Dragon Shield",  shieldArmor: 8, cost: "9,000 gp", requirements: "Req. 3 STR" }
    ],
    healingPotions: [
      { name: "Healing Potion",         healing: "2d4+4", cost: "50 gp" },
      { name: "Greater Healing Potion", healing: "3d6+6", cost: "150 gp" },
      { name: "Supreme Healing Potion", healing: "4d8+8", cost: "450 gp" }
    ]
  },

  // ==========================================================================
  // ADVENTURING MOTIVATIONS
  // ==========================================================================
  ADVENTURING_MOTIVATIONS: [
    "Seeking revenge against those who wronged you",
    "Searching for a lost family member or loved one",
    "Paying off a massive debt",
    "Fulfilling a prophecy or destiny",
    "Running from a dark past",
    "Proving yourself worthy to your family or clan",
    "Seeking forbidden knowledge",
    "Protecting someone who cannot protect themselves",
    "Atoning for past sins",
    "Chasing glory and fame",
    "Hoarding wealth beyond measure",
    "Exploring uncharted lands and forgotten ruins",
    "Hunting a specific monster or villain",
    "Discovering the truth about your mysterious origins",
    "Serving a deity or higher power",
    "Building a legacy that will outlast you",
    "Escaping boredom and seeking thrills",
    "Liberating the oppressed",
    "Finding a cure for a rare disease or curse",
    "Recovering a stolen or lost artifact",
    "Making the world a safer place",
    "Gathering allies for an impending war",
    "Mastering your craft or magical ability",
    "Finding your place in the world",
    "Doing it for the stories to tell at the tavern"
  ]

};
