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
    { name: "Blinded",             description: "Cannot see. Automatically fails any check that requires sight. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage." },
    { name: "Bloodied",            description: "A creature is Bloodied when reduced to half or fewer of its maximum HP. Some abilities trigger or change when a creature is Bloodied." },
    { name: "Charmed",             description: "A Charmed creature cannot attack or target the charmer with harmful effects. The charmer has advantage on social checks against the Charmed creature." },
    { name: "Dazed",               description: "A Dazed creature can only take 1 Action on its turn (no Bonus Actions). It cannot take Reactions." },
    { name: "Dying",               description: "A creature at 0 HP is Dying. At the start of each turn, roll a d20: 10+ is a success, 9 or below is a failure. 3 successes stabilize; 3 failures result in death. A natural 20 restores 1 HP. A natural 1 counts as 2 failures." },
    { name: "Frightened",          description: "A Frightened creature has disadvantage on checks and attack rolls while the source of its fear is within line of sight. The creature cannot willingly move closer to the source of its fear." },
    { name: "Grappled/Restrained", description: "A Grappled creature's Speed is 0 and it cannot benefit from bonuses to Speed. Attack rolls against it have advantage. Its attack rolls and DEX saves have disadvantage. The grappler can drag the target at half speed." },
    { name: "Hampered",            description: "A Hampered creature deals half damage with weapon attacks." },
    { name: "Incapacitated",       description: "An Incapacitated creature cannot take Actions, Bonus Actions, or Reactions. It automatically fails STR and DEX saves." },
    { name: "Invisible",           description: "An Invisible creature cannot be seen without magic or special senses. It is heavily obscured. Attack rolls against it have disadvantage, and its attack rolls have advantage." },
    { name: "Petrified",           description: "A Petrified creature is transformed to stone. It is Incapacitated, has resistance to all damage, and is immune to poison and disease. Time does not pass for the creature." },
    { name: "Poisoned",            description: "A Poisoned creature has disadvantage on attack rolls and ability checks." },
    { name: "Prone",               description: "A Prone creature can only crawl (half speed). It has disadvantage on attack rolls. Melee attacks against it have advantage; ranged attacks have disadvantage. Standing up costs half movement." },
    { name: "Riding",              description: "A creature Riding a mount uses the mount's Speed. When the mount is attacked, the rider can use a Reaction to force the attack to target themselves instead. If the mount is forced to move, the rider moves with it." },
    { name: "Slowed",              description: "A Slowed creature's Speed is halved. It cannot take Reactions." },
    { name: "Taunted",             description: "A Taunted creature has disadvantage on attack rolls against targets other than the taunter. Lasts until the taunter is Incapacitated or until end of the Taunted creature's next turn." },
    { name: "Wounded",             description: "When you take a critical hit or massive damage, you gain a Wound. Each Wound reduces your maximum HP by your Hit Die size. If your max Wounds are exceeded, you are instantly killed. Wounds heal during long rests or with medical attention." }
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
    exotic: [
      {
        name: "Bunbun",
        size: "Small",
        abilityName: "Bunny Legs",
        description: "Before Interposing or after Defending (after damage), hop up to your Speed in any direction for free, 1/encounter.",
        languages: ["Common"],
        statMods: { freeHop: true }
      },
      {
        name: "Birdfolk",
        size: "Small/Medium",
        abilityName: "Hollow Bones",
        description: "You have a fly Speed as long as you are wearing armor no heavier than Leather. Crits against you are Vicious (the attacker rolls 1 additional die). Forced movement moves you twice as far.",
        languages: ["Common"],
        statMods: { flySpeed: true, viciousCrits: true, doubleForcedMovement: true }
      },
      {
        name: "Celestial",
        size: "Medium",
        abilityName: "Highborn",
        description: "Your disadvantaged save is Neutral instead. You know Celestial if your INT is not negative.",
        languages: ["Common", "Celestial"],
        statMods: { disadvantagedSaveNeutral: true }
      },
      {
        name: "Changeling",
        size: "Medium",
        abilityName: "New Place, New Face",
        description: "+2 shifting skill points. You may take on the appearance of any ancestry. When you do, you may place your 2 shifting skill points into any 1 skill. 1/day.",
        languages: ["Common"],
        statMods: { shiftingSkillPoints: 2 }
      },
      {
        name: "Crystalborn",
        size: "Medium",
        abilityName: "Reflective Aura",
        description: "When you Defend, gain KEY armor and deal KEY damage back to the attacker. 1/encounter.",
        languages: ["Common"],
        statMods: { reflectiveAura: true }
      },
      {
        name: "Dragonborn",
        size: "Medium",
        abilityName: "Draconic Heritage",
        description: "+1 Armor. When you attack: deal an additional LVL+KEY damage (ignoring armor) divided as you choose among any of your targets; recharges whenever you Safe Rest or gain a Wound. You know Draconic if your INT is not negative.",
        languages: ["Common", "Draconic"],
        statMods: { naturalArmor: 1, draconicHeritage: true }
      },
      {
        name: "Dryad/Shroomling",
        size: "Small/Medium",
        abilityName: "Danger Pollen/Spores",
        description: "Whenever an enemy causes you one or more Wounds, you excrete soporific spores: all adjacent enemies are Dazed. You know Elvish if your INT is not negative.",
        languages: ["Common", "Elvish"],
        statMods: { dangerSpores: true }
      },
      {
        name: "Fiendkin",
        size: "Medium",
        abilityName: "Flameborn",
        description: "1 of your neutral saves is advantaged instead. You know Infernal if your INT is not negative.",
        languages: ["Common", "Infernal"],
        statMods: { neutralSaveAdvantaged: true }
      },
      {
        name: "Goblin",
        size: "Small",
        abilityName: "Skedaddle",
        description: "Can move 2 spaces for free after you become the target of an attack or negative effect (after damage, ignoring difficult terrain). You know Goblin if your INT is not negative.",
        languages: ["Common", "Goblin"],
        statMods: { skedaddle: true }
      },
      {
        name: "Half-Giant",
        size: "Large",
        abilityName: "Strength of Stone",
        description: "Force an enemy to reroll a crit against you, 1/encounter. +2 Might. You know Dwarvish if your INT is not negative.",
        languages: ["Common", "Dwarvish"],
        statMods: { mightBonus: 2, critReroll: true }
      },
      {
        name: "Kobold",
        size: "Small",
        abilityName: "Wily",
        description: "Force an enemy to reroll a non-critical attack against you, 1/encounter. +3 to Influence friendly characters. Advantage on skill checks related to dragons. You know Draconic if your INT is not negative.",
        languages: ["Common", "Draconic"],
        statMods: { attackReroll: true, influenceFriendlyBonus: 3 }
      },
      {
        name: "Minotaur/Beastfolk",
        size: "Medium",
        abilityName: "Charge",
        description: "When you move at least 4 spaces, you can push a creature in your path. Medium: 1 space; Small/Tiny: up to 2 spaces. 1/turn.",
        languages: ["Common"],
        statMods: { charge: true }
      },
      {
        name: "Orc",
        size: "Medium",
        abilityName: "Relentless",
        description: "When you would drop to 0 HP, you may set your HP to LVL instead, 1/Safe Rest. +1 Might. You know Goblin if your INT is not negative (but you call it Orcish, of course).",
        languages: ["Common", "Goblin"],
        statMods: { mightBonus: 1, relentless: true }
      },
      {
        name: "Oozeling/Construct",
        size: "Small/Medium",
        abilityName: "Odd Constitution",
        description: "Increment your Hit Die one step (d6 > d8 > d10 > d12 > d20); they always heal you for the maximum amount. Magical healing always heals for the minimum amount.",
        languages: ["Common"],
        statMods: { hitDieIncrement: true, maxHitDieHeal: true, minMagicHeal: true }
      },
      {
        name: "Planarbeing",
        size: "Medium",
        abilityName: "Planeshift",
        description: "Whenever you Defend, you can gain 1 Wound to temporarily phase out of the material plane and ignore the damage. -2 max Wounds.",
        languages: ["Common"],
        statMods: { planeshift: true, maxWoundsMod: -2 }
      },
      {
        name: "Ratfolk",
        size: "Small",
        abilityName: "Scurry",
        description: "Gain +2 armor if you moved on your last turn.",
        languages: ["Common"],
        statMods: { conditionalArmor: 2 }
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
        description: "Whenever you or a willing ally within Reach 6 casts a tiered spell, you may allow them to roll on the Chaos Table. 1/encounter.",
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
    { name: "So Dumb I'm Smart Sometimes", description: "Requires 0 or negative INT at character creation.", mechanics: "Reroll an INT-related skill check, 1/day. Reroll a failed INT save with advantage, 1/Safe Rest." },
    { name: "Wily Underdog",        description: "Requires 0 or negative STR at character creation.", mechanics: "Reroll a failed STR-related roll and use another stat instead, 1/day." },
    { name: "Bumblewise",           description: "Requires 0 or negative WIL at character creation.", mechanics: "A result of 1 or less on any WIL-related roll counts as a natural 20 (WIL save, Naturecraft, Perception, Influence, or Insight check)." },
    { name: "Accidental Acrobat",   description: "Requires 0 or negative DEX at character creation.", mechanics: "Whenever you fail a DEX-related roll, you may roll again. If you still fail, the consequences are BAD." },
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
      startingGear: ["Battleaxe", "Rations (meat)", "Rope (10 spaces)"],
      retrainFeature: {
        name: "Wrath & Ruin",
        description: "Whenever you perform a notable act of destruction or feat of strength during a Safe Rest, you may choose different Berserker options available to you.",
        icon: "⚔"
      },
      retrainArrays: ["savageArsenal"],
      savageArsenal: [
        { name: "Death Blow", description: "After dealing critical damage, expend any number of Fury Dice. Sum the results and deal double that amount as additional damage." },
        { name: "Deathless Rage", description: "1/turn, while Dying, suffer 1 Wound to gain 1 additional action." },
        { name: "Eager for Battle", description: "You have advantage on Initiative rolls. On your first turn of combat, move 2×DEX spaces for free." },
        { name: "Into the Fray", description: "Action: Leap up to 2×DEX spaces toward an enemy. If you land adjacent to 2 or more enemies, make a free attack." },
        { name: "Mighty Endurance", description: "You survive an additional 4 Wounds before death." },
        { name: "MORE BLOOD!", description: "Whenever an enemy lands a critical hit against you, gain 1 Fury Die." },
        { name: "Rampage", description: "1/turn, after landing a hit, treat the next attack this turn as if you rolled the same result." },
        { name: "Swift Fury", description: "Whenever you gain Fury Dice, move DEX spaces for free, ignoring difficult terrain." },
        { name: "Thunderous Steps", description: "After moving 4 or more spaces while Raging, deal STR Bludgeoning damage to all adjacent creatures." },
        { name: "Unstoppable Force", description: "While Dying and Raging, damage causes 1 Wound instead of 2, and critical hits cause 2 Wounds instead of 3." },
        { name: "Whirlwind", description: "2 actions: Attack ALL targets within your melee reach." },
        { name: "You're Next!", description: "Action while Raging: Make a Might check to demoralize an enemy within 12 spaces (DC equals their current HP). On success, they flee." }
      ],
      levels: {
        1: [
          { name: "Rage", description: "1/turn Action: Roll a Fury Die (d4) and set it aside. Add the result to every STR-based attack. You may hold a maximum number of Fury Dice equal to your KEY dice. All Fury Dice are lost when Rage ends." },
          { name: "That All You Got?!", description: "When attacked, expend 1 or more Fury Dice to reduce the damage by STR + DEX per die spent." }
        ],
        2: [
          { name: "Intensifying Fury", description: "If you are Raging at the start of your turn, roll 1 Fury Die for free." },
          { name: "One with the Ancients", description: "1/Safe Rest, call upon your ancestors to guide you toward the most dangerous path." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Berserker subclass: Path of the Mountainheart or Path of the Red Mist." },
          { name: "Bloodlust", description: "Expend 1 or more Fury Dice on your turn to move DEX spaces per die spent for free." }
        ],
        4: [
          { name: "Enduring Rage", description: "While Dying, you automatically Rage at the start of your turn. You may take a maximum of 2 actions instead of 1, and you ignore STR saves to attack." },
          { name: "Key Stat Increase", description: "+1 to STR or DEX." },
          { name: "Savage Arsenal", description: "Choose 1 Savage Arsenal ability." },
          { name: "Wrath & Ruin", description: "Whenever you perform a notable act of destruction or feat of strength during a Safe Rest, you may choose different Berserker options available to you." }
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
          { name: "BOUNDLESS RAGE", description: "+1 to any 2 stats. Anytime you roll less than 6 on a Fury Die, change the result to 6." }
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
        { name: "\"Creative\" Accounting", description: "Steal up to INT actions from your next turn (gain them now, subtract them later). Cannot be used two turns in a row." },
        { name: "Exploit Weakness", description: "Action: Make a contested INT check against a target. If you win, you may use Vicious Opportunist on that target even if they are not Distracted for 1 minute." },
        { name: "Feinting Attack", description: "If you miss for the 2nd time in a single round, change your Primary Die to any result you like." },
        { name: "How'd YOU Get Here?!", description: "2 actions: \"Teleport\" up to 4 spaces to a Distracted target and make a melee attack. If you score a critical hit, you may teleport again." },
        { name: "I'm Outta Here!", description: "When an ally within 4 spaces is critically hit, you turn invisible until the end of your next turn and may move half your speed for free." },
        { name: "Misdirection", description: "Gain INT as bonus armor. Whenever you take the Defend action, you may halve the damage instead of the normal benefit." },
        { name: "Steal Tempo", description: "When you land a 2nd critical hit on a single turn, the target loses 1 action and you gain 1 action." },
        { name: "Sunder Armor (Medium)", description: "Action on a critical hit: Sunder the target's medium armor. All melee attacks against the target ignore armor until the start of your next turn." },
        { name: "Sunder Armor (Heavy)", description: "Requires: Sunder Armor (Medium). Also works on heavy armor." },
        { name: "Trickshot", description: "Your thrown dagger returns to you after each throw. On a hit, the dagger ricochets to a creature within 2 spaces, dealing half damage." }
      ],
      levels: {
        1: [
          { name: "Sneak Attack", description: "1/turn, when you score a critical hit, deal an additional 1d6 damage." },
          { name: "Vicious Opportunist", description: "1/turn, when you hit a Distracted target with a melee attack, change your Primary Die to whatever result you like. Changing it to the maximum counts as a critical hit." }
        ],
        2: [
          { name: "Cheat", description: "1/round, take a free Move or Hide action. 1/day, change any skill check result to 10 + INT. Your Initiative roll minimum is 10. You have advantage on games and wagers." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Cheat subclass: Tools of the Silent Blade or Tools of the Scoundrel." },
          { name: "Sneak Attack (2)", description: "Sneak Attack damage increases to 1d8." },
          { name: "Thieves' Cant", description: "You learn Thieves' Cant, a secret language known only to rogues and criminals." }
        ],
        4: [
          { name: "Key Stat Increase", description: "+1 to DEX or INT." },
          { name: "Underhanded Ability", description: "Choose 1 Underhanded Ability." },
          { name: "Trade Secrets", description: "Whenever you spend a night talking shop with other roguish types during a Safe Rest, you may choose different Cheat options available to you." }
        ],
        5: [
          { name: "Twist the Blade", description: "Action: Change one Sneak Attack die to whatever result you like." },
          { name: "Quick Read", description: "1/encounter, gain advantage on an Assess action. 1/day, gain advantage on an Examination check." },
          { name: "Secondary Stat Increase", description: "+1 to WIL or STR." }
        ],
        6: [
          { name: "Underhanded Ability (2)", description: "Choose a 2nd Underhanded Ability." },
          { name: "THAT'S Not What Happened!", description: "1/Safe Rest, after a Distracted enemy attacks you, change their Primary Die to whatever result you like." }
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
          { name: "Twist the Blade (2)", description: "Twist the Blade is now 1/turn and free (no action cost)." },
          { name: "Secondary Stat Increase", description: "+1 to WIL or STR." }
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
          { name: "Supreme Execution", description: "+1 to any 2 stats. You no longer require targets to be Distracted to use Vicious Opportunist." }
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
      startingGear: ["Hand Axe", "Javelins (4)", "Rusty Mail"],
      retrainFeature: {
        name: "Rigorous Training",
        description: "Whenever you train with your party or other soldiers during a Safe Rest, you may choose different Commander options available to you.",
        icon: "✠"
      },
      retrainArrays: ["commandersOrders", "combatTactics"],
      commandersOrders: [
        { name: "Coordinated Strike!", description: "1/round, Free action: You and an ally within 6 spaces both make a weapon attack or cast a cantrip for free. Usable INT times per Safe Rest." },
        { name: "Face Me!", description: "Reaction (when an ally within 12 spaces is critically hit): Taunt that enemy, forcing them to target you until you drop to 0 HP." },
        { name: "Hold the Line!", description: "1/encounter, Reaction (when an ally drops to 0 HP): Set their HP to 3×LVL and grant that many temporary HP. Enemies who reduce the temporary HP in melee have their speed halved." },
        { name: "I Can Do This ALL DAY!", description: "1/encounter, Reaction (when you would drop to 0 HP): Expend any number of Hit Dice and set your HP to the sum rolled." },
        { name: "Move it! Move it!", description: "On Initiative, you and an ally gain advantage on the Initiative roll, +3 speed, and the ability to fly for 1 round. Both of you move for free." },
        { name: "Reposition!", description: "Action or Reaction: 1 ally moves their full speed for free, or 2 allies each move half their speed for free. Allies may exchange places with each other." }
      ],
      combatTactics: [
        { name: "Commanding Presence", description: "Action: Issue a 2-word command to an enemy. The target must make a WIL save (DC 10 + your STR) or obey the command on their next turn. A target is immune for 1 day after being affected." },
        { name: "Heavy Strike", description: "On a hit, push a Medium creature STR spaces and deal additional damage equal to your Combat Die. Small creatures are pushed 2× the distance. Large creatures are pushed half." },
        { name: "Inerrant Strike", description: "Reroll a missed attack with +1 to the Primary Die and add your Combat Die to the damage." },
        { name: "Lunging Strike", description: "Gain +1 Reach for this attack and deal additional damage equal to 2× your Combat Die." },
        { name: "Sweeping Strike", description: "2 actions: Attack all targets in a contiguous area within your Reach. This attack cannot miss on a roll of 1." }
      ],
      weaponMastery: [
        { name: "Slashing", description: "Your slashing attacks cannot miss unarmored enemies." },
        { name: "Bludgeoning", description: "When your Primary Die is 7 or higher, your bludgeoning attacks ignore Heavy Armor." },
        { name: "Piercing", description: "Your piercing attacks ignore Medium Armor." }
      ],
      levels: {
        1: [
          { name: "Coordinated Strike!", description: "1/round, Free action: You and an ally within 6 spaces both make a weapon attack or cast a cantrip for free. You can use this INT times per Safe Rest." }
        ],
        2: [
          { name: "Commander's Orders", description: "Choose 2 Commander's Orders abilities." },
          { name: "Field Medic", description: "Roll 1 extra die when using health potions. Add your Examination bonus to Hit Dice healing after 10 minutes of rest." },
          { name: "Rigorous Training", description: "Whenever you train with your party or other soldiers during a Safe Rest, you may choose different Commander options available to you." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Commander subclass: Champion of the Bulwark or Champion of the Vanguard." }
        ],
        4: [
          { name: "Fit for Any Battlefield", description: "Choose a Combat Tactic. You gain STR Combat Dice (d6s) on Initiative. 1/attack, you may expend a Combat Die to perform the chosen maneuver." },
          { name: "Key Stat Increase", description: "+1 to STR or INT." }
        ],
        5: [
          { name: "Master Commander", description: "Regain 1 use of Coordinated Strike on Initiative. Attacks made from Coordinated Strike ignore disadvantage." },
          { name: "Combat Tactics", description: "Combat Dice are now d8s." },
          { name: "Secondary Stat Increase", description: "+1 to DEX or WIL." }
        ],
        6: [
          { name: "Fit for Any Battlefield (2)", description: "Choose another Combat Tactic or gain +1 max Combat Dice." },
          { name: "Weapon Mastery", description: "You may sheathe and draw weapons up to 2 times per round for free. Choose a weapon damage type to master." }
        ],
        7: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." }
        ],
        8: [
          { name: "Fit for Any Battlefield (3)", description: "Choose another Combat Tactic or gain +1 max Combat Dice." },
          { name: "Key Stat Increase", description: "+1 to STR or INT." }
        ],
        9: [
          { name: "Master Commander (2)", description: "Gain +1 use of Coordinated Strike per Safe Rest." },
          { name: "Combat Tactics (2)", description: "Combat Dice are now d10s." },
          { name: "Secondary Stat Increase", description: "+1 to DEX or WIL." }
        ],
        10: [
          { name: "Fit for Any Battlefield (4)", description: "Choose another Combat Tactic or gain +1 max Combat Dice." },
          { name: "Weapon Mastery (2)", description: "Choose a 2nd weapon damage type to master." }
        ],
        11: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." }
        ],
        12: [
          { name: "Fit for Any Battlefield (5)", description: "Choose another Combat Tactic or gain +1 max Combat Dice." },
          { name: "Key Stat Increase", description: "+1 to STR or INT." }
        ],
        13: [
          { name: "Master Commander (3)", description: "Gain +1 use of Coordinated Strike per Safe Rest." },
          { name: "Combat Tactics (3)", description: "Combat Dice are now d12s." },
          { name: "Secondary Stat Increase", description: "+1 to DEX or WIL." }
        ],
        14: [
          { name: "Weapon Mastery (3)", description: "You now have mastery of all weapon damage types." }
        ],
        15: [
          { name: "Subclass Feature", description: "Gain a feature from your chosen subclass." }
        ],
        16: [
          { name: "Fit for Any Battlefield (6)", description: "Choose another Combat Tactic or gain +1 max Combat Dice." },
          { name: "Key Stat Increase", description: "+1 to STR or INT." }
        ],
        17: [
          { name: "Master Commander (4)", description: "Gain +1 use of Coordinated Strike per Safe Rest." },
          { name: "Combat Tactics (4)", description: "Combat Dice are now d20s." },
          { name: "Secondary Stat Increase", description: "+1 to DEX or WIL." }
        ],
        18: [
          { name: "Unparalleled Tactics", description: "The first Coordinated Strike each encounter also grants the chosen ally 1 additional action on their next turn." }
        ],
        19: [
          { name: "Epic Boon", description: "Gain an Epic Boon of your choice." }
        ],
        20: [
          { name: "Captain of Legions", description: "+1 to any 2 stats. The first Coordinated Strike each encounter gives EVERY ally within 12 spaces +1 action on their next turn (replaces Unparalleled Tactics)." }
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
        { name: "Addling Arrow", description: "Action: Attack with a ranged weapon. The next attack the target makes must be against the closest other creature, chosen at random." },
        { name: "Come Get Some!", description: "Action: Attack a target. It is Taunted by you until the end of their next turn." },
        { name: "Decoy", description: "When you Defend: The attack misses instead, and you can move up to half your speed away (where you really were all along!)." },
        { name: "Fleet Feet", description: "Move up to your speed for free, ignoring difficult terrain." },
        { name: "Grease Trap", description: "(1/encounter) Reaction (when an enemy moves adjacent to you or an ally within 6 spaces): Target falls Prone, is vulnerable to the next fire damage it takes, and is treated as if it is Smoldering." },
        { name: "Hail of Arrows", description: "(Half range) 2 actions: Shoot all creatures within a 3x3 area. Their speed is halved until the end of their next turn." },
        { name: "Heavy Shot", description: "(Half range) Action: Attack with a ranged weapon and push your target: 4 spaces for a small creature, 2 for a medium creature, 1 for a large creature." },
        { name: "Incendiary Shot", description: "(Half range) Action: Attack with a ranged weapon, add WIL d8 fire damage." },
        { name: "Multishot", description: "(Half range) Action: Attack your quarry with a ranged weapon and load an extra projectile. Select a 2nd target within 2 spaces of them to take the same amount of damage." },
        { name: "Pinning Shot", description: "Spend 3 actions shooting your quarry. They are Restrained until they can escape (DC 10+WIL)." },
        { name: "Snare Trap", description: "(1/encounter) Reaction (when an enemy moves adjacent to you or an ally within 6 spaces): Move them back 1 space, they are Restrained until they can escape (DC 10+WIL)." },
        { name: "Sharpshooter", description: "Action: If you have not moved this turn and your quarry is 4 or more spaces away, attack them for double damage." },
        { name: "Vital Shot", description: "(Half range) Action: Attack your Hampered quarry with a ranged weapon, ignoring their armor or doubling your Hunter's Mark damage bonus if they have none." },
        { name: "Wild Instinct", description: "(1/round, costs 0 TotH charges if you have none.) Assess for free, with advantage." }
      ],
      levels: {
        1: [
          { name: "Hunter's Mark", description: "Action: Mark a creature you can see as your quarry for 1 day (or until you mark another). It can't be hidden from you, and your attacks against it gain your choice of advantage OR +LVL damage (choose before each attack)." },
          { name: "Forager", description: "Gain advantage on skill checks to find food and water in the wild." }
        ],
        2: [
          { name: "Thrill of the Hunt", description: "Choose 2 Thrill of the Hunt (TotH) abilities. Gain a charge to use these abilities during that encounter whenever your quarry dies, you hit your quarry in melee, or you crit your quarry at range." },
          { name: "Roll & Strike", description: "Action: If you have no Thrill of the Hunt charges, move up to your speed toward your quarry. If you end adjacent to them, make a melee attack against them for free." },
          { name: "Remember the Wild", description: "Whenever you spend a day in the wilderness during a Safe Rest, you may choose different Hunter options available to you." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Hunter subclass: Keeper of the Shadowpath or Keeper of the Wild Heart." },
          { name: "Tracker's Intuition", description: "You can discern the events of a past encounter by studying tracks and other subtle environmental clues, accurately determining the kind and amount of creatures, their direction, key actions, and passage of time." }
        ],
        4: [
          { name: "Thrill of the Hunt (2)", description: "Choose a 3rd Thrill of the Hunt ability." },
          { name: "Key Stat Increase", description: "+1 DEX or WIL." },
          { name: "Explorer of the Wilds", description: "+2 speed; gain a climbing speed." }
        ],
        5: [
          { name: "Hunter's Resolve", description: "Whenever you have no Thrill of the Hunt charges, gain Hunter's Resolve until the end of your turn: treat all creatures as your quarry for the purposes of movement and melee attacks." },
          { name: "Final Takedown", description: "Action: Spend 1 Thrill of the Hunt charge to make a melee attack against your Bloodied quarry. Turn it into a crit and double the damage of your Hunter's Mark. If they survive, they crit you back." },
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
          { name: "Peerless Hunter", description: "You can Defend against your quarry for free." },
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
          { name: "Elemental Spellcasting", description: "You know Fire, Ice, and Lightning cantrips." }
        ],
        2: [
          { name: "Mana and Unlock Tier 1 Spells", description: "You unlock tier 1 Fire, Ice, and Lightning spells and gain a mana pool. Your mana pool maximum is always equal to (INT x 3) + LVL and recharges on a Safe Rest." },
          { name: "Talented Researcher", description: "Gain advantage on Arcana or Lore checks when you have access to a large amount of books and time to study them." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Mage subclass: Invoker of Control or Invoker of Chaos." },
          { name: "Elemental Mastery", description: "Learn the Utility Spells from 1 spell school you know." }
        ],
        4: [
          { name: "Spellshaper", description: "You gain the ability to enhance your spells with powerful effects by spending additional mana. Choose 2 Spellshaper abilities." },
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells and upcast spells at tier 2." },
          { name: "Key Stat Increase", description: "+1 INT or WIL." },
          { name: "Study!", description: "Whenever you study arcane books or are tutored by a higher level Mage during a Safe Rest, you may choose different Mage options available to you." }
        ],
        5: [
          { name: "Elemental Surge", description: "When you roll Initiative, regain WIL mana. This mana expires at the end of combat if unused." },
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
      weaponProficiency: "STR Weapons",
      startingGear: ["Mace", "Rusty Mail", "Wooden Buckler", "Manacles"],
      retrainFeature: {
        name: "Serve Selflessly",
        description: "Whenever you perform a notable selfless act during a Safe Rest, you may choose different Oathsworn options available to you.",
        icon: "⚖"
      },
      retrainArrays: ["sacredDecrees"],
      sacredDecrees: [
        { name: "Blinding Aura", description: "(1/Safe Rest) Action: Enemies in your aura are Blinded until the end of their next turn." },
        { name: "Courage!", description: "(1/encounter) When you or an ally in your aura would drop to 0 HP, set their HP to 1 instead." },
        { name: "Explosive Judgment", description: "(1/encounter) 2 actions: Expend your Judgment Dice, deal that much radiant damage to all enemies in your aura." },
        { name: "Improved Aura", description: "+2 aura Reach." },
        { name: "Radiant Aura", description: "Action: End any single harmful condition or effect on yourself or another willing creature within your aura. You may use this ability WIL times per Safe Rest." },
        { name: "Reliable Justice", description: "Whenever you roll Judgment Dice, roll with advantage (roll one extra and drop the lowest)." },
        { name: "Shining Mandate", description: "The first time each round you are attacked while you already have Judgment Dice, select an ally within your aura to roll one and apply it to their next attack. You have advantage on skill checks to see through illusions." },
        { name: "Stand Fast, Friends!", description: "When you roll Initiative, grant allies temp HP equal to your STR+WIL. You and allies within your aura have advantage against fear and effects that would move or knock Prone." },
        { name: "Unstoppable Protector", description: "Gain +1 speed. You may Interpose even if you are restrained, stunned, or otherwise incapacitated. If you Interpose for a non-combatant NPC, you may Interpose again this round." },
        { name: "Well Armored", description: "Whenever you Interpose, gain temp HP equal to your STR." }
      ],
      levels: {
        1: [
          { name: "Radiant Judgment", description: "Whenever an enemy attacks you, if you have no Judgment Dice, roll your Judgment Dice (2d6). On your next melee attack this encounter, if you hit, deal that much additional radiant damage. The dice are expended whether you hit or miss." },
          { name: "Lay on Hands", description: "Gain a magical pool of healing power equal to 5 x LVL, recharges on a Safe Rest. Action: Touch a target and spend any amount of remaining healing power to restore that many HP." }
        ],
        2: [
          { name: "Mana and Radiant Spellcasting", description: "You know Radiant cantrips and tier 1 Radiant spells and gain a mana pool equal to WIL + LVL, recharges on a Safe Rest." },
          { name: "Zealot", description: "Whenever you attack with a melee weapon, you may spend mana (up to your highest unlocked spell tier) to choose one for each mana spent: Condemning Strike (+5 radiant damage) or Blessed Aim (decrease target's armor by 1 step for this attack)." },
          { name: "Paragon of Virtue", description: "Advantage on Influence checks to convince someone when you are forthrightly telling the truth; disadvantage when misleading." }
        ],
        3: [
          { name: "Subclass", description: "Commit yourself to an Oath: Oath of Vengeance or Oath of Refuge." },
          { name: "Radiant Judgment (2)", description: "Your Judgment Dice are d8s." },
          { name: "Sacred Decree", description: "Learn 1 Sacred Decree." },
          { name: "Serve Selflessly", description: "Whenever you perform a notable selfless act during a Safe Rest, you may choose different Oathsworn options available to you." }
        ],
        4: [
          { name: "My Life, for My Friends", description: "You can Interpose for free." },
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells and upcast spells at tier 2." },
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
          { name: "Unending Judgment", description: "While you have no Judgment Dice, gain +5 damage to melee attacks." }
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
          { name: "Conduit of Shadow", description: "Your Patron grants you Shadow Blast (Necrotic cantrip, 1 Action, 1/turn, Range: 8, 1d12+KEY damage, +1d12 every 5 levels) and Summon Shadows (Necrotic cantrip, summon a shadow minion within Reach 1, max INT or LVL minions; Action 1/turn: command ALL minions to move 6 then attack, Reach 1, 1d12 each, +1 Reach every 5 levels). Shadow minions: 1 HP, no damage bonus, no crit, abandon you outside combat." }
        ],
        2: [
          { name: "Master of Darkness", description: "Your Patron grants you knowledge of Necrotic cantrips and tier 1 spells." },
          { name: "Pilfered Power", description: "You have NO mana pool. You may steal power from your patron to cast tiered spells, always at the highest tier you have unlocked. You can do this DEX times before your patron takes notice. Each time you exceed this limit, your patron damages you for half your max HP. Resets on Safe Rest. Max Spell Tier: 1." }
        ],
        3: [
          { name: "Subclass", description: "Choose a Shadowmancer subclass: Pact of the Red Dragon or Pact of the Abyssal Depths." },
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
          { name: "Eldritch Usurper", description: "+1 to any 2 of your stats. Whenever you summon a single shadow minion, summon 2 instead. They die only when they receive 12 or more damage at one time." },
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
        { name: "Armor of Shadows", description: "Reduce all damage you receive by an amount equal to the number of minions you have." },
        { name: "Fiendish Boon", description: "Increase your DEX or INT by 1. You have 1 fewer maximum Hit Dice." },
        { name: "Hungering Shadows", description: "Whenever one of your shadows would crit, the next tiered spell you cast this encounter does not cost a use of Pilfered Power." },
        { name: "One with Shadows", description: "Action: When you are in dim light or darkness, you may become Invisible until you move or attack." },
        { name: "Repelling Blast", description: "When you hit a Medium or smaller creature with Shadow Blast, you can push the creature up to 2 spaces away from yourself." },
        { name: "Shadow Magus", description: "Your minions gain +4 Reach and you deal d10 damage instead." },
        { name: "Shadow Spear", description: "Your Shadow Blast can target creatures twice as far away, it ignores cover, and you may attack Prone targets with advantage (instead of disadvantage)." },
        { name: "Shadow Rush", description: "When your shadow minions attack, instead of rolling damage, you may have any of them deal the max amount, then die." },
        { name: "Shadow Warp", description: "Action: Switch places with a creature within 12 spaces that has been dealt necrotic damage this turn." },
        { name: "Swarming Shadows", description: "Whenever one of your shadows would crit, summon another shadow minion adjacent to the target." },
        { name: "Vengeful Blast", description: "Whenever a minion dies, you may cast Shadow Blast as a reaction (even if you already cast it this turn)." }
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
        { name: "Assist Me, My Friend!", description: "Whenever you make your first melee attack each round, you may add your Lifebinding Spirit's damage to the attack." },
        { name: "Empowered Companion", description: "Whenever you spend mana to summon your Lifebinding Spirit, you cast it as if you spent 1 additional mana (ignoring typical spell tier restrictions). The maximum die size is now a d20." },
        { name: "Guiding Spirit", description: "When your Lifebinding Spirit rolls a 6 or higher on its damage die, the target begins to glow with radiant light. The next attack against that target has advantage." },
        { name: "Hasty Companion", description: "+4 Reach for your Lifebinding Spirit. It can also act for free when summoned." },
        { name: "Illuminate Soul", description: "Action: A creature within 6 spaces begins to glow with radiant light. For 1 round, attacks against them are made with your choice of advantage or disadvantage. WIL times per Safe Rest." },
        { name: "Light Bearer", description: "Regain 1 use of Searing Light when you roll Initiative (this expires if unspent at the end of combat)." },
        { name: "Not Beyond MY Reach", description: "You may target creatures who have been dead less than 1 round for healing. For every 10 HP a dead creature is healed this way, you may have them recover 1 Wound instead (you must heal at least 1 Wound to revive them)." },
        { name: "Vengeful Spirit", description: "Action: Your Lifebinding Spirit sacrifices itself to transform into a swirling vortex of radiant light. At the end of your turn, it damages all enemies within 3 spaces of you, ignoring armor and cover. This lasts for a number of rounds equal to the healing charges left on the Lifebinding Spirit. Ends early if you summon your spirit again." }
      ],
      levels: {
        1: [
          { name: "Keeper of Life & Death", description: "You know Radiant and Necrotic cantrips." },
          { name: "Searing Light", description: "(WIL times/Safe Rest) Action: Reach 6. Heal WIL d8 HP to a Dying creature OR inflict WIL d8 radiant damage to an undead or Bloodied enemy." }
        ],
        2: [
          { name: "Mana and Unlock Tier 1 Spells", description: "You unlock tier 1 Radiant and Necrotic spells and gain a mana pool. Mana maximum = (WIL x 3) + LVL. Recharges on a Safe Rest." },
          { name: "Lifebinding Spirit", description: "Radiant Spell, Tier 1. Action: Summon a spirit companion immune to harm. Lasts until recast, Safe Rest, or it heals a number of times equal to mana spent. Action: It attacks or heals a creature within Reach 4 for 1d6+WIL radiant damage (ignoring armor), or heals for the same amount. Upcasting: +1 die size (max d12), +1 healing use." }
        ],
        3: [
          { name: "Subclass", description: "Choose Luminary of Mercy or Luminary of Malice." },
          { name: "Master of Twilight", description: "Choose 1 Necrotic and 1 Radiant Utility Spell." }
        ],
        4: [
          { name: "Tier 2 Spells", description: "You may now cast tier 2 spells and upcast spells at tier 2." },
          { name: "Key Stat Increase", description: "+1 WIL or STR." }
        ],
        5: [
          { name: "Secondary Stat Increase", description: "+1 INT or DEX." },
          { name: "Upgraded Cantrips", description: "Your cantrips grow stronger." },
          { name: "Sacred Grace", description: "Choose 2 Sacred Graces from the Sacred Graces list." },
          { name: "Serve", description: "After spending a day tending to a sacred place or serving others during a Safe Rest, you may choose different Shepherd options available to you." }
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
          { name: "Sacred Grace (2)", description: "Choose a 3rd Sacred Grace." },
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
          { name: "Sacred Grace (3)", description: "Choose a 4th Sacred Grace." },
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
          { name: "Beastshift", description: "Action: Transform into a harmless beast (squirrel, pigeon, etc.). While transformed, you can speak with animals. This form lasts until you drop to 0 HP, cast a spell, or you end it on your turn for free. DEX charges per Safe Rest." }
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
          { name: "Tier 3 Spells", description: "You may now cast tier 3 spells and upcast spells at tier 3." },
          { name: "Be Wild", description: "Whenever you spend a day with wild animals during a Safe Rest, you may choose different Stormshifter options available to you." }
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
          { name: "Martial Master", description: "Choose a Martial Arts ability." },
          { name: "Focus", description: "Whenever you spend time meditating alone in a windy place during a Safe Rest, you may choose different Zephyr options available to you." }
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
        features: {
          3:  [
            { name: "Stone's Resilience", description: "Whenever you expend Fury Dice to reduce incoming damage, add the value of the die to the amount reduced." },
            { name: "Mountainous Tenacity", description: "Whenever you expend your Hit Dice to recover HP, for every 10 HP you would recover, you may heal 1 Wound instead." }
          ],
          7:  [{ name: "Unbreakable", description: "(1/encounter) While Raging, if you would suffer your last Wound or other negative condition of your choice, you don't." }],
          11: [{ name: "Titan's Fury", description: "After you miss an attack or are crit by an enemy, Rage for free." }],
          15: [{ name: "Mountain's Endurance", description: "While Dying, if an attack against you would be a crit, the attack is rerolled instead (when-crit abilities, such as Titan's Fury, still trigger)." }]
        }
      },
      {
        name: "Path of the Red Mist",
        className: "Berserker",
        features: {
          3:  [
            { name: "Blood Frenzy", description: "(1/turn) While Raging, whenever you crit or kill an enemy, change 1 Fury Die to the maximum." },
            { name: "Savage Awareness", description: "Advantage on Perception checks to notice or track down blood. Blindsight 2 while Raging: you ignore the Blinded condition and can see through darkness and Invisibility within that Range." }
          ],
          7:  [{ name: "Unstoppable Brutality", description: "While Raging, you may gain 1 Wound to reroll any attack or save." }],
          11: [{ name: "Opportunistic Frenzy", description: "While Raging, you can make opportunity attacks without disadvantage, and you may make them whenever an enemy enters your melee weapon's reach." }],
          15: [{ name: "Onslaught", description: "While Raging, gain +2 speed. (1/round) you may move for free." }]
        }
      }
    ],
    cheat: [
      {
        name: "Tools of the Silent Blade",
        className: "The Cheat",
        features: {
          3:  [
            { name: "Amidst All This Commotion...", description: "If a creature dies while you Sneak Attack them, you may turn Invisible until you attack again or until the beginning of your next turn." },
            { name: "Leave No Trace", description: "Advantage on Stealth checks when you are at full health." }
          ],
          7:  [{ name: "Cunning Strike", description: "(2/encounter) When you land a Sneak Attack, you may force the target to make a STR save (DC 10+INT). On a failure, instead of rolling your Sneak Attack dice, they deal the maximum amount of damage (if your target saves, regain 1 use)." }],
          11: [{ name: "Professional Skulker", description: "Gain a climbing speed and advantage on Stealth checks (replaces Leave No Trace)." }],
          15: [{ name: "KILL.", description: "When you crit an enemy with fewer max HP than you, it dies." }]
        }
      },
      {
        name: "Tools of the Scoundrel",
        className: "The Cheat",
        features: {
          3:  [
            { name: "Low Blow", description: "When you Sneak Attack, you may spend 2 additional actions to Incapacitate your target for their next turn on a failed STR save (DC 10+INT). Save or fail, they are Taunted by you until you drop to 0 HP." },
            { name: "Sweet Talk", description: "You may gain advantage on all Influence checks with NPCs you've just met for the first time. This lasts until you fail an Influence check with them or until you meet a 2nd time. You have disadvantage on Influence checks with them after you use this ability (until you get back on their good side)." }
          ],
          7:  [{ name: "Pocket Sand", description: "(2/encounter - you've got to collect more sand!) When you Defend against a melee attack, Blind the attacker until the start of their next turn and force them to reroll the attack (Blinded creatures attack with disadvantage)." }],
          11: [{ name: "Escape Plan", description: "(1/Safe Rest) When you would drop to 0 HP or gain a Wound, you don't. Instead, you turn Invisible for 1 minute or until you attack." }],
          15: [{ name: "Heads I Win, Tails You Lose", description: "(1/encounter) Attacks you make this round don't miss, you crit on 1 less than normally needed, and you gain LVL temp HP." }]
        }
      }
    ],
    commander: [
      {
        name: "Champion of the Bulwark",
        className: "Commander",
        features: {
          3:  [
            { name: "Armor Master", description: "You are proficient with plate armor." },
            { name: "Shield Expert", description: "While wearing a shield, you may Defend 2x each round. The first time each round you block all of the damage from an attack, you may make an opportunity attack against the attacker for free." }
          ],
          7:  [{ name: "Juggernaut", description: "When you use Coordinated Strike, you deal extra damage equal to your armor, and you can add 1 to your primary die." }],
          11: [{ name: "Taunting Strike", description: "(1/turn) You may Taunt a creature you hit until the end of their next turn." }],
          15: [{ name: "Shield Wall", description: "Allies within 2 spaces gain ALL the benefits of the shield you have equipped." }]
        }
      },
      {
        name: "Champion of the Vanguard",
        className: "Commander",
        features: {
          3:  [{ name: "Advance!", description: "(1/round) After you move toward an enemy, gain advantage on the first melee attack you make against it. When you use your Coordinated Strike, you and all allies within 12 spaces can first move up to half their speed for free." }],
          7:  [{ name: "Experienced Commander", description: "Your Coordinated Strike may target 1 additional ally. Gain +1 use of Coordinated Strike/Safe Rest." }],
          11: [{ name: "Survey the Battlefield", description: "When you roll Initiative, regain 1 use of Coordinated Strike. +1 max Combat Dice." }],
          15: [{ name: "As One!", description: "Attacks made with your Coordinated Strike also grant advantage and ignore all disadvantage. Your chosen allies gain 1 additional action to use on their next turn." }]
        }
      }
    ],
    hunter: [
      {
        name: "Keeper of the Shadowpath",
        className: "Hunter",
        features: {
          3:  [
            { name: "Ambusher", description: "When you roll Initiative, you may use Hunter's Mark for free. Gain advantage on the first attack you make each encounter." },
            { name: "Skilled Tracker", description: "You have advantage on skill checks to track creatures." },
            { name: "Skilled Navigator", description: "You cannot become lost by nonmagical means." }
          ],
          7:  [{ name: "Primal Predator", description: "(1/encounter) Your weapon attacks ignore cover and armor this turn." }],
          11: [{ name: "Pack Hunter", description: "Whenever you mark a creature, you may also mark another creature within 6 spaces of them for free." }],
          15: [{ name: "Apex Predator", description: "You may use your Primal Predator ability twice each encounter. Gain 1 Thrill of the Hunt charge when you roll Initiative." }]
        }
      },
      {
        name: "Keeper of the Wild Heart",
        className: "Hunter",
        features: {
          3:  [
            { name: "Impressive Form", description: "+5 max HP. Upgrade your Hit Dice to d10s." },
            { name: "I Have the High Ground", description: "When you roll Initiative or gain one or more Thrill of the Hunt charges, move up to half your speed for free, ignoring difficult terrain." }
          ],
          7:  [{ name: "Resourceful Herbalist", description: "Whenever you Safe Rest in a location near where plants or fungi can grow, you may spend a day collecting healing herbs to craft a number of Healing Salves equal to your WIL. Healing Salve (Action): Heal yourself or an adjacent creature WIL d6 HP. Only you or another experienced Herbalist may administer these, and they expire whenever you Safe Rest." }],
          11: [{ name: "Ha! I'm Over Here!", description: "(1/Safe Rest) If an attack would cause you to drop to 0 HP, you instead move up to your speed away and take no damage." }],
          15: [{ name: "Unparalleled Survivalist", description: "Gain +WIL armor. When you attack with a ranged weapon, you may first move half your speed for free." }]
        }
      }
    ],
    mage: [
      {
        name: "Invoker of Control",
        className: "Mage",
        features: {
          3:  [
            { name: "Force of Will", description: "(1/round) On your turn, you may Demand Control: Choose 1 option from the Control Table which you haven't chosen yet; resets when you roll Initiative, or when you have chosen all options once." },
            { name: "Deny Fate", description: "Whenever you miss with a spell or an effect you cause is saved against, you MUST Demand Control." }
          ],
          7:  [
            { name: "At Any Cost", description: "Learn 1 cantrip and 1 tiered spell from the Necrotic school." },
            { name: "Nullify", description: "(1/encounter) Ignore all disadvantage and other negative effects on your next action this turn, then Demand Control." }
          ],
          11: [{ name: "Steel Will", description: "(1/Safe Rest) Whenever you would fail a save, you may succeed instead. Whenever you roll a 1 on an Elemental Surge die, you may reroll it once." }],
          15: [{ name: "Supreme Control", description: "Whenever you Demand Control, you may choose to trigger the selected option twice. You may Demand Control as a Reaction." }]
        }
      },
      {
        name: "Invoker of Chaos",
        className: "Mage",
        features: {
          3:  [{ name: "Force of Chaos", description: "Whenever you cast a spell, you can choose to spend 1 less mana. Whenever you do this and whenever you crit, Invoke Chaos: Roll on the Chaos Table. (The Chaos Table is kept secret by the GM — rolling a 1 is really bad, rolling a 20 is AWESOME.)" }],
          7:  [
            { name: "Tempest Mage", description: "Learn 1 cantrip and 1 tiered spell from the Wind school." },
            { name: "Chaos Lash", description: "(1/encounter) Reaction (when an enemy moves adjacent to you): They are pushed back 2 spaces, and on a failed WIL save, knocked Prone as well. Invoke Chaos." }
          ],
          11: [{ name: "Thrive in Chaos", description: "Whenever you Invoke Chaos, you may roll twice and cause both effects. (1/Safe Rest) You may choose which roll to use instead." }],
          15: [{ name: "Master of Chaos", description: "Whenever you Invoke Chaos, roll with advantage." }]
        }
      }
    ],
    oathsworn: [
      {
        name: "Oath of Vengeance",
        className: "Oathsworn",
        features: {
          3:  [{ name: "Oath of Vengeance (placeholder)", description: "Source pending: specific subclass features for Oath of Vengeance were not fully included in the available Nimble source material. Consult your GM or the Nimble Heroes PDF for the canonical features, and add them manually as you level up." }]
        }
      },
      {
        name: "Oath of Refuge",
        className: "Oathsworn",
        features: {
          3:  [{ name: "Oath of Refuge (placeholder)", description: "Source pending: specific subclass features for Oath of Refuge were not fully included in the available Nimble source material. Consult your GM or the Nimble Heroes PDF for the canonical features, and add them manually as you level up." }]
        }
      }
    ],
    shadowmancer: [
      {
        name: "Pact of the Red Dragon",
        className: "Shadowmancer",
        features: {
          3:  [{ name: "Draconic Crimson Rite", description: "Your Patron grants you knowledge of Fire spells. Your shadow minions become flaming dragon wyrmling shadows. Your Shadow Blast and minions can deal fire or necrotic damage and inflict Smoldering whenever they would crit." }],
          7:  [{ name: "We'll ALL Burn!", description: "You may cast Pyroclasm without Pilfering Power by including yourself in the damage. You have advantage on the save." }],
          11: [{ name: "Heart of Burning Fire", description: "Regain 1 use of Pilfered Power each time you roll Initiative. This expires at the end of combat if unused." }],
          15: [{ name: "Enveloped by the Master", description: "Gain 1d4 Wounds to cast Dragonform." }]
        }
      },
      {
        name: "Pact of the Abyssal Depths",
        className: "Shadowmancer",
        features: {
          3:  [{ name: "Master of Nightfrost", description: "Your Patron grants you knowledge of Ice spells. Gain the ability to breathe underwater. Your shadow minions become beings of nightfrost. Your Shadow Blast and minions can deal cold or necrotic damage, and whenever they would crit, you gain INT+LVL temp HP." }],
          7:  [{ name: "Shadowfrost", description: "Your Shadow Blast also Slows. You can cast Cryosleep or Rimeblades without Pilfering Power by expending 10 temp HP. Choose 1 Ice Utility Spell." }],
          11: [{ name: "Glacial Resilience", description: "(1/Safe Rest) Reaction (whenever you are attacked or would gain a condition), gain 10 x LVL temp HP and end ALL negative conditions on yourself. At the end of your next turn, any remaining temp HP are lost." }],
          15: [{ name: "Cryomancer's Reprisal", description: "Pay half your max HP to cast ANY Ice spell. After casting an Ice spell in this way, you gain an invisible aura: the next creature that hits you with a melee attack this encounter takes cold damage equal to half the HP you spent on this casting." }]
        }
      },
      // Reaver was moved to SUBCLASSES.storyBased — it's a story-based subclass triggered by losing your patron, not pickable at L3.
    ],
    shepherd: [
      {
        name: "Luminary of Mercy",
        className: "Shepherd",
        features: {
          3:  [
            { name: "Merciful Healing", description: "When an effect caused by you heals a Dying creature, they are healed for twice as much. (1/round) Your Lifebinding Spirit can act for free while you are Dying." },
            { name: "Life is Beautiful", description: "Harmless and lovely creatures such as butterflies and hummingbirds are attracted to your presence and often follow you. Flowers bloom more vibrantly in your presence." }
          ],
          7:  [{ name: "Conduit of Light", description: "When an effect caused by you would heal HP, you may expend 1 use of Searing Light to heal (or damage, ignoring armor) another target within 6 spaces of yourself for the same amount." }],
          11: [{ name: "Powerful Healer", description: "(WIL times/Safe Rest) Whenever you would roll dice to heal damage, you may instead heal the max amount you could roll, or give that many temp HP." }],
          15: [{ name: "Empowered Conduit", description: "Your Conduit of Light may target 1 additional creature. Regain 1 charge of Searing Light when you roll Initiative (this expires if unspent at the end of combat)." }]
        }
      },
      {
        name: "Luminary of Malice",
        className: "Shepherd",
        features: {
          3:  [
            { name: "Soul Reaper", description: "When you use Searing Light to harm an enemy, make a 2nd enemy within range take the same amount of damage (ignoring armor)." },
            { name: "Harbinger of Decay", description: "Vibrant colors and lovely smells are suppressed near you. Foods spoil more rapidly in your presence, and you frequently awaken to flies wherever you lodge. You may have your Lifebinding Spirit shift into a deathly version of itself (a zombie dog, a devious imp, etc.) and have its damage type become necrotic." }
          ],
          7:  [{ name: "Veilwalker's Blessing", description: "(1/Safe Rest) Reaction (when you would drop to 0 HP): Drop to 1 HP instead and force an enemy within 6 spaces to make a STR save. On a failure, they become Bloodied, or if they are already Bloodied, they drop to 0 HP." }],
          11: [{ name: "Deathbringer's Touch", description: "Your first melee attack each round against a Bloodied creature is an automatic critical hit. Your Lifebinding Spirit deals additional damage equal to your STR." }],
          15: [{ name: "Conduit of Death", description: "Your Veilwalker's Blessing ability recharges when you roll Initiative. This charge is lost if unspent at the end of combat." }]
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
        name: "Circle of Fang & Claw",
        className: "Stormshifter",
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
            { name: "Venomous Gaze", description: "(1/encounter) Action: Spend 2 mana to shift into a Beast of Nightmares. Then entice a creature within 12 spaces to move 2 × WIL spaces closer to you on a failed WIL save with disadvantage (they roll with disadvantage and must repeat until they save or can move no further). If they end up in the same space as you, you may Sting them for free." }
          ],
          15: [{ name: "Master of Forms (2)", description: "You can Beastshift 2 additional times per Safe Rest. Choose 2 additional Chimeric Boons. Your Direbeast forms can have 3 at a time." }]
        }
      }
    ],
    zephyr: [
      {
        name: "Way of Pain",
        className: "Zephyr",
        features: {
          3:  [{ name: "Bring the Pain", description: "(1/round) You may turn any melee attack against you into a crit. Whenever you are crit, reduce the damage by half. The attacker takes the same amount of damage you took (ignoring armor). You may suffer 1 Wound to double the damage the enemy takes." }],
          7:  [{ name: "Share My Pain", description: "Your Swiftstrike can also target a 2nd creature within Reach 2." }],
          11: [{ name: "Pain Sharpens the Mind", description: "While you are Bloodied, gain advantage on the first attack you make each turn, and on all saves." }],
          15: [{ name: "Echoed Agony", description: "Your Swiftstrike can also target a 3rd creature within Reach 4." }]
        }
      },
      {
        name: "Way of Flame",
        className: "Zephyr",
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
          15: [{ name: "Bloody Terror", description: "Attacks against you gain 1 instance of disadvantage for each Wound you have (max 3)." }]
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
            { name: "Coordinated Strike! (Withering Strike)", description: "Any attacks made this way deal additional Necrotic damage equal to the max value of your Combat Die. An enemy damaged this way is considered undead for 1 round." }
          ],
          3:  [
            { name: "Firebrand", description: "When you roll Initiative you may cast Enchant Weapon for free (can be upcast as normal by spending additional mana)." },
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
        description: "Cast Aside, Born Anew. Cut off from your patron, you lose Shadow Blast and Pilfered Power. Instead you gain the Bonescythe.",
        // Reaver loses only Shadow Blast (keeps Summon Shadow) and gains Bonescythe as a replacement cantrip
        blocksClassSpecific: ['Shadow Blast'],
        grantsClassSpecific: ['Bonescythe'],
        // Base class abilities this subclass removes (e.g., Reaver strips Pilfered Power — replaced by Shadow Exploit)
        removesClassAbilities: ['Pilfered Power'],
        features: {
          3:  [
            { name: "Hollow One", description: "Cut off from your patron, you can no longer cast Shadow Blast and you can no longer cast tiered spells using Pilfered Power. However, you have stolen the magical Bonescythe: Action: Summon a melee weapon: 2d12 slashing+DEX necrotic damage (Reach: 2). It shatters after you hit with it (or when combat ends). Any Invocations affecting Shadow Blast affect your Bonescythe instead. High Levels: +1 extra damage die every 5 levels." },
            { name: "Shadow Exploit", description: "Sacrifice a shadow minion to cast a spell at the highest tier you have unlocked. Each subsequent spell you cast in this encounter costs 1 additional minion." },
            { name: "Martyr Spawn", description: "Whenever you Defend, you can sacrifice a shadow minion to take no damage." }
          ],
          7:  [
            { name: "Grim Harrow", description: "When you strike with your Bonescythe, you may divide the dice as you choose amongst any number of adjacent targets within Reach." },
            { name: "Reap", description: "When your Bonescythe crits, or kills a creature, summon a shadow minion for free." }
          ],
          11: [
            { name: "My Blood, My Power", description: "You may take 1 Wound to cast a tiered spell you know at the highest tier you have unlocked." },
            { name: "Otherworldly Might", description: "Advantage on concentration checks if you have any shadow minions." }
          ],
          15: [{ name: "I'm the Patron Now!", description: "Summon 2 shadow minions for free when you roll Initiative." }]
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
        { name: "Greater Shadow", tier: 4, actions: 2, range: "Self", damage: "5d12", description: "Summon a 5d12 Greater Shadow minion (max 1) adjacent to you. When it dies, explodes into 5 shadow minions placed within 8 spaces.", upcast: "+1d12, +1 shadow minion", type: "single" },
        { name: "Gangrenous Burst", tier: 5, actions: 2, reach: "Up to 8 spaces", damage: "3d20 (ignoring armor)", description: "Other damaged creatures must STR save or take 3d20 damage (ignoring armor), half on save. Save rolled with disadvantage while Bloodied.", upcast: "+10 damage", type: "aoe" },
        { name: "Unspeakable Word", tier: 6, actions: 2, reach: "8 spaces", damage: "d66 (ignoring armor, advantage, no miss/crit)", description: "On failed INT save. Target rolls disadvantage if Bloodied/Frightened. On success, you both take half. d66 with advantage = roll 3d6, drop lowest.", upcast: "+1 DC, +10 damage", type: "single" },
        { name: "Creeping Death", tier: 7, actions: 3, reach: "8 spaces", damage: "4d20", description: "If this kills a creature, it erupts and you MUST deal the same damage to another creature within 8 spaces not yet damaged by this effect. Repeat until a creature survives or none remain.", upcast: "+1d20 damage", type: "aoe" }
      ]
    },
    classSpecific: {
      name: "Class-Specific Spells",
      spells: [
        { name: "Shadow Blast", tier: 0, actions: 1, range: "8 spaces", damage: "1d12+KEY Necrotic", description: "(Shadowmancer) 1/round. +1d12 damage every 5 levels.", type: "single", class: "Shadowmancer" },
        { name: "Summon Shadow", tier: 0, actions: 1, reach: "1 space", damage: "None", description: "(Shadowmancer) Summon a shadow minion within Reach 1 (max INT or LVL minions). Action (1/turn): command ALL minions to move 6 then attack (Reach 1, d12 each). Minions: 1 HP, no damage bonus, no crit, abandon you outside combat. +1 Reach every 5 levels.", type: "single", class: "Shadowmancer" },
        { name: "Bonescythe", tier: 0, actions: 1, reach: "2 spaces", damage: "2d12+DEX Slashing/Necrotic", description: "(Shadowmancer — Reaver) Action: Summon a melee weapon. It shatters after you hit with it (or when combat ends). Any Invocations affecting Shadow Blast affect your Bonescythe instead. +1 extra damage die every 5 levels.", type: "single", class: "Shadowmancer", requiresSubclass: "Reaver" },
        { name: "Vicious Mockery", tier: 0, actions: 1, range: "12 spaces", damage: "1d4+INT Psychic (ignoring armor)", description: "(Songweaver) On hit: target is Taunted during their next turn. +2 damage every 5 levels.", type: "single", class: "Songweaver" },
        { name: "Lifebinding Spirit", tier: 1, actions: 1, range: "Self", damage: "None", description: "(Shepherd) Summon a spirit companion, immune to harm. Lasts until recast, Safe Rest, or heals equal to mana spent. Action: attacks or heals within Reach 4 for 1d6+WIL radiant (ignoring armor). Upcast: increment die (max d12), +1 healing use.", type: "single", class: "Shepherd" }
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
        { name: "Short Sword", damage: "1d6+DEX",  damageType: "Piercing",          statUsed: "DEX", properties: ["Light"],                                             cost: "10 gp" },
        { name: "Rapier",      damage: "2d4+DEX",  damageType: "Piercing",          statUsed: "DEX", properties: [],                                                    cost: "60 gp" },
        { name: "Staff",       damage: "1d8+STR",  damageType: "Bludgeoning",       statUsed: "STR", properties: ["2-handed"],                                          cost: "8 gp" },
        { name: "Longsword",   damage: "1d8+STR",  damageType: "Slashing",          statUsed: "STR", properties: ["2-handed (1-handed: Req. 2 STR)"],                   cost: "60 gp" },
        { name: "Battleaxe",   damage: "1d10+STR", damageType: "Slashing",          statUsed: "STR", properties: ["2-handed"],                                          cost: "30 gp" },
        { name: "Pole Hammer", damage: "1d10+STR", damageType: "Bludgeoning",       statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "60 gp" },
        { name: "Glaive",      damage: "1d10+STR", damageType: "Slashing",          statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "60 gp" },
        { name: "Spear",       damage: "1d10+STR", damageType: "Piercing",          statUsed: "STR", properties: ["2-handed", "Reach 2"],                               cost: "60 gp" },
        { name: "Greatmaul",   damage: "1d12+STR", damageType: "Bludgeoning",       statUsed: "STR", properties: ["2-handed", "Req. 2 STR"],                            cost: "80 gp" },
        { name: "Greataxe",    damage: "2d6+STR",  damageType: "Slashing",          statUsed: "STR", properties: ["2-handed", "Req. 2 STR"],                            cost: "100 gp" },
        { name: "Greatsword",  damage: "3d4+STR",  damageType: "Slashing/Piercing", statUsed: "STR", properties: ["2-handed", "Req. 2 STR"],                            cost: "120 gp" }
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
        { name: "Mithril Plate", formula: { base: 22 }, cost: "5,000 gp", requirements: "Req. 5 STR" }
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
