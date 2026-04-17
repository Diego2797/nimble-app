// Nimble Companion - GM Data
// Full bestiary, legendary monsters, conditions, flavorful abilities, and encounter rules.
// Source of truth: gm-references/*.md (transcribed from the Nimble Game Master's Guide 2.0.2).

window.GM_DATA = {

  // -----------------------------------------------------------------------
  // Conditions monsters can inflict. Keep short, GM-facing, for combat UI.
  // -----------------------------------------------------------------------
  CONDITIONS: {
    'Grappled':     { description: "Can't move. Use 1 Action to escape with STR/DEX save (DC 10 + KEY unless noted).", source: 'Monsters' },
    'Restrained':   { description: 'Speed 0 and Hampered.', source: 'Monsters' },
    'Prone':        { description: 'Speed halved, attacks with disadvantage, melee attacks against you with advantage.', source: 'Monsters' },
    'Dazed':        { description: '–1 Action for 1 round.', source: 'Monsters' },
    'Poisoned':     { description: 'Disadvantage on attacks and checks (ends per effect).', source: 'Monsters' },
    'Frightened':   { description: "Disadvantage on attacks and can't willingly move closer to source.", source: 'Monsters' },
    'Blinded':      { description: "Can't see; attacks at disadvantage; attacks against you with advantage.", source: 'Monsters' },
    'Incapacitated':{ description: 'No actions or reactions.', source: 'Monsters' },
    'Hampered':     { description: 'Movement restricted (see specific effect).', source: 'Monsters' },
    'Silenced':     { description: 'Cannot cast spells or use voice-required abilities.', source: 'Monsters (Ettercap, etc.)' },
    'Confused':     { description: 'The GM spends your next action.', source: 'Monsters (Umber Hulk, etc.)' },
    'Petrified':    { description: 'Turned to stone; Incapacitated.', source: 'Monsters (Basilisk)' },
    'Despair':      { description: 'Disadvantage on your next attack this encounter.', source: 'Cultists' },
    'Digested':     { description: 'Extra damage each time re-Digested this encounter.', source: 'Oozes' },
    'Latched On':   { description: 'Stirge rides target; attacks auto-hit; attacks missing stirge damage target instead.', source: 'Stirges' },
    'Swallowed':    { description: '20 damage at start of turn; your attacks auto-hit and ignore armor.', source: 'Great Worm' },
    'Dominated':    { description: 'Disadvantage on rolls. Monster spends your first action each turn. Damage ends.', source: "Ul'vek" },
    'Allured':      { description: 'GM spends 1 of your Actions. Advantage stacks per failure this encounter.', source: 'Incubus/Succubus' },
    'Beguiled':     { description: 'Dazed. Cannot Defend or allow anyone to Interpose for you. Damage ends.', source: 'Vampire (Alaric)' },
    'Doomed':       { description: 'Concentration ends; the next damage roll against you is maximized.', source: 'Caerys' },
    'Thornblight':  { description: 'Suffer 5 damage for each space you are forcibly moved. Magical healing ends.', source: 'Florindris' },
    "Cruelty's Gift":{ description: 'Healing is halved and Vulnerable to necrotic damage. Healing ends.', source: 'Gloomwing' },
    'Terrified':    { description: "Frightened, plus your screams give allies within 6 disadvantage on rolls. Ends when monster's plans are FLAWED.", source: 'Dravok' }
  },

  // -----------------------------------------------------------------------
  // Flavorful monster abilities (to sprinkle on stat blocks).
  // Each ability usually adds +1 level of threat, or costs HP/damage in return.
  // -----------------------------------------------------------------------
  FLAVORFUL_ABILITIES: [
    { name: 'Acid Blood',         description: 'Melee attackers take half the HP lost in return as acid damage.' },
    { name: 'Aggressive',         description: '+X speed if moving toward enemies.' },
    { name: 'Blinding Spit',      description: 'Spits a blinding substance at a target within range. The target must make a save or be blinded for 1 round.' },
    { name: 'Bloodthirsty',       description: 'Has advantage on attacks against Bloodied targets.' },
    { name: 'Brute',              description: 'Attacks also knockback a number of spaces equal to the primary die rolled.' },
    { name: 'Brawler',            description: 'Extra damage, can only attack in melee.' },
    { name: 'Burning Aura',       description: 'Creatures that start their turn adjacent to this monster take 1d6 fire damage.' },
    { name: 'Climbing',           description: 'Can traverse walls or ceilings normally.' },
    { name: 'Controlling',        description: 'Creates / immune to difficult terrain.' },
    { name: 'Disgusting/Venomous/Heavy Blows', description: 'Attacks also Daze the target.' },
    { name: 'Disintegrating Armor', description: 'Starts with Heavy Armor, on crit degrades to Medium, then to none.' },
    { name: 'Doom',               description: 'Attacks also Wound the target.' },
    { name: 'Explosive Death',    description: 'Explode on death, dealing 2d6 damage to creatures within reach.' },
    { name: 'FAST',               description: 'Reaction 1/round: force a reroll with disadvantage on an attack.' },
    { name: 'Fearsome',           description: 'Frighten enemies within Range on a failed WIL save. 1/encounter.' },
    { name: 'Flying',             description: 'Flying speed and immune to Opportunity Attacks. May FALL when crit (1d6 damage/10 ft. fallen, lands Prone).' },
    { name: 'Formation',          description: 'Armor increases 1 step for each adjacent ally (None → M → H).' },
    { name: 'Frenzied',           description: 'Deals extra damage or has faster speed while damaged.' },
    { name: 'Grappler',           description: 'On hit: Grapples.' },
    { name: 'Gravity Manipulator',description: 'Can pull or push enemies within reach.' },
    { name: 'Hates the Light',    description: 'Attacks the hero holding light.' },
    { name: 'Hypnotic Gaze',      description: 'Forces enemies to make a WIL save or be confused for 1 round.' },
    { name: 'Invulnerable',       description: 'Immune to damage until crit.' },
    { name: 'Mounted',            description: 'Faster movement and deals extra damage after moving toward an enemy.' },
    { name: 'Obstinate',          description: 'When attacking a target with disadvantage, treat the roll as if it had advantage instead.' },
    { name: 'Pack Tactics',       description: 'Advantage on attacks when an ally is adjacent to the target.' },
    { name: 'Parry',              description: 'Attacks against them miss on a 1 and 2.' },
    { name: 'Ranged',             description: 'Extra damage; can only attack at range.' },
    { name: 'Retaliate',          description: 'Attacks the first creature who attacks them in melee each round.' },
    { name: 'Savage',             description: 'Always crits Grappled creatures.' },
    { name: 'Shifty',             description: 'Can move after being attacked.' },
    { name: 'Silencer',           description: 'Attacks silence enemies (unable to cast spells or perform voice actions).' },
    { name: 'Sneak',              description: 'Invisible until they attack.' },
    { name: 'Spiked',             description: 'When hit by a melee attack, the attacker takes 1d4 piercing damage in return.' },
    { name: 'Standard Bearer',    description: 'Buffs nearby allies, reducing damage taken or increasing damage done.' },
    { name: 'Sturdy/Undying',     description: 'The first time the monster would die, they have 1 HP instead.' },
    { name: 'Summoner',           description: 'Calls minions to their aid each round.' },
    { name: 'Tricky',             description: 'Can swap places with allies or enemies.' },
    { name: 'Vicious',            description: 'Crits are Vicious (roll 1 additional die).' },
    { name: 'Warping Touch',      description: 'On hit: teleport target X spaces.' },
    { name: 'Webslinger',         description: 'Can immobilize a target with webs when hit or crit.' }
  ],

  // -----------------------------------------------------------------------
  // Monster Builder stats by level (regular monsters).
  // Use to generate custom monsters or quickly look up a target value.
  // -----------------------------------------------------------------------
  MONSTER_BUILDER: [
    { level: '1/4', hp: { none: 12, medium: 9,  heavy: 7 },  damage: 3,  sampleDice: '1d4+1',                     saveDC: 9,  crEquiv: '1/8' },
    { level: '1/3', hp: { none: 15, medium: 11, heavy: 8 },  damage: 5,  sampleDice: '1d6+2',                     saveDC: 9,  crEquiv: '1/4' },
    { level: '1/2', hp: { none: 18, medium: 15, heavy: 11 }, damage: 7,  sampleDice: '1d6+3',                     saveDC: 10, crEquiv: '1/4' },
    { level: 1,     hp: { none: 26, medium: 20, heavy: 16 }, damage: 11, sampleDice: '2d8+2 or (2×) 1d8+1',       saveDC: 10, crEquiv: '1/2' },
    { level: 2,     hp: { none: 34, medium: 27, heavy: 20 }, damage: 13, sampleDice: '2d8+4 or (2×) 1d8+3',       saveDC: 11, crEquiv: '1'   },
    { level: 3,     hp: { none: 41, medium: 33, heavy: 25 }, damage: 15, sampleDice: '2d8+6 or (2×) 1d8+4',       saveDC: 11, crEquiv: '1'   },
    { level: 4,     hp: { none: 49, medium: 39, heavy: 29 }, damage: 18, sampleDice: '2d8+9 or (2×) 1d8+5',       saveDC: 12, crEquiv: '2'   },
    { level: 5,     hp: { none: 58, medium: 46, heavy: 35 }, damage: 19, sampleDice: '2d8+10 or (2×) 1d8+6',      saveDC: 12, crEquiv: '2'   },
    { level: 6,     hp: { none: 68, medium: 54, heavy: 41 }, damage: 21, sampleDice: '2d8+12 or (2×) 1d8+7',      saveDC: 13, crEquiv: '3'   },
    { level: 7,     hp: { none: 79, medium: 63, heavy: 47 }, damage: 24, sampleDice: '3d8+10 or (2×) 2d8+4',      saveDC: 13, crEquiv: '3'   },
    { level: 8,     hp: { none: 91, medium: 73, heavy: 55 }, damage: 26, sampleDice: '3d8+12 or (2×) 2d8+5',      saveDC: 14, crEquiv: '4'   },
    { level: 9,     hp: { none: 104,medium: 83, heavy: 62 }, damage: 28, sampleDice: '4d8+10 or (2×) 2d8+6',      saveDC: 14, crEquiv: '4'   },
    { level: 10,    hp: { none: 118,medium: 94, heavy: 71 }, damage: 30, sampleDice: '4d8+12 or (2×) 2d8+7',      saveDC: 15, crEquiv: '5'   },
    { level: 11,    hp: { none: 133,medium: 106,heavy: 80 }, damage: 33, sampleDice: '5d8+11 or (2×) 3d8+3',      saveDC: 15, crEquiv: '6'   },
    { level: 12,    hp: { none: 149,medium: 119,heavy: 89 }, damage: 35, sampleDice: '5d8+13 or (2×) 3d8+4',      saveDC: 16, crEquiv: '7'   },
    { level: 13,    hp: { none: 166,medium: 132,heavy: 100}, damage: 38, sampleDice: '6d8+11 or (2×) 3d8+6',      saveDC: 16, crEquiv: '8'   },
    { level: 14,    hp: { none: 184,medium: 147,heavy: 110}, damage: 40, sampleDice: '6d8+13 or (2×) 3d8+7',      saveDC: 17, crEquiv: '9'   },
    { level: 15,    hp: { none: 203,medium: 162,heavy: 122}, damage: 43, sampleDice: '7d8+11 or (2×) 3d8+8',      saveDC: 17, crEquiv: '9'   },
    { level: 16,    hp: { none: 223,medium: 178,heavy: 134}, damage: 45, sampleDice: '7d8+13 or (2×) 4d8+5',      saveDC: 18, crEquiv: '10'  },
    { level: 17,    hp: { none: 244,medium: 195,heavy: 146}, damage: 48, sampleDice: '8d8+12 or (2×) 4d8+6',      saveDC: 18, crEquiv: '11'  },
    { level: 18,    hp: { none: 266,medium: 213,heavy: 160}, damage: 50, sampleDice: '8d8+14 or (2×) 4d8+7',      saveDC: 19, crEquiv: '12'  },
    { level: 19,    hp: { none: 289,medium: 231,heavy: 173}, damage: 52, sampleDice: '9d8+12 or (2×) 4d8+8',      saveDC: 19, crEquiv: '13'  },
    { level: 20,    hp: { none: 313,medium: 250,heavy: 189}, damage: 54, sampleDice: '9d8+13 or (2×) 4d8+9',      saveDC: 20, crEquiv: '14'  }
  ],

  // -----------------------------------------------------------------------
  // Legendary Monster Builder stats by party level.
  // HP is based on party level and stays constant regardless of party size.
  // -----------------------------------------------------------------------
  LEGENDARY_BUILDER: [
    { level: 1,  hpMedium: 50,  hpHeavy: 35,  hpLastStand: 10,  saveDC: 10, attackSmall: 8,  attackBig: 16 },
    { level: 2,  hpMedium: 75,  hpHeavy: 55,  hpLastStand: 20,  saveDC: 11, attackSmall: 9,  attackBig: 18 },
    { level: 3,  hpMedium: 100, hpHeavy: 75,  hpLastStand: 30,  saveDC: 11, attackSmall: 10, attackBig: 20 },
    { level: 4,  hpMedium: 125, hpHeavy: 95,  hpLastStand: 40,  saveDC: 12, attackSmall: 11, attackBig: 22 },
    { level: 5,  hpMedium: 150, hpHeavy: 115, hpLastStand: 50,  saveDC: 12, attackSmall: 12, attackBig: 24 },
    { level: 6,  hpMedium: 175, hpHeavy: 135, hpLastStand: 60,  saveDC: 13, attackSmall: 13, attackBig: 26 },
    { level: 7,  hpMedium: 200, hpHeavy: 155, hpLastStand: 70,  saveDC: 13, attackSmall: 14, attackBig: 28 },
    { level: 8,  hpMedium: 225, hpHeavy: 175, hpLastStand: 80,  saveDC: 14, attackSmall: 15, attackBig: 30 },
    { level: 9,  hpMedium: 250, hpHeavy: 195, hpLastStand: 90,  saveDC: 14, attackSmall: 16, attackBig: 32 },
    { level: 10, hpMedium: 275, hpHeavy: 215, hpLastStand: 100, saveDC: 15, attackSmall: 17, attackBig: 34 },
    { level: 11, hpMedium: 300, hpHeavy: 235, hpLastStand: 110, saveDC: 15, attackSmall: 18, attackBig: 36 },
    { level: 12, hpMedium: 325, hpHeavy: 255, hpLastStand: 120, saveDC: 16, attackSmall: 19, attackBig: 38 },
    { level: 13, hpMedium: 350, hpHeavy: 275, hpLastStand: 130, saveDC: 16, attackSmall: 20, attackBig: 40 },
    { level: 14, hpMedium: 375, hpHeavy: 295, hpLastStand: 140, saveDC: 17, attackSmall: 21, attackBig: 42 },
    { level: 15, hpMedium: 400, hpHeavy: 315, hpLastStand: 150, saveDC: 17, attackSmall: 22, attackBig: 44 },
    { level: 16, hpMedium: 425, hpHeavy: 335, hpLastStand: 160, saveDC: 18, attackSmall: 23, attackBig: 46 },
    { level: 17, hpMedium: 450, hpHeavy: 355, hpLastStand: 170, saveDC: 18, attackSmall: 24, attackBig: 48 },
    { level: 18, hpMedium: 475, hpHeavy: 375, hpLastStand: 180, saveDC: 19, attackSmall: 25, attackBig: 50 },
    { level: 19, hpMedium: 500, hpHeavy: 395, hpLastStand: 190, saveDC: 19, attackSmall: 26, attackBig: 52 },
    { level: 20, hpMedium: 525, hpHeavy: 415, hpLastStand: 200, saveDC: 20, attackSmall: 27, attackBig: 54 }
  ],

  // -----------------------------------------------------------------------
  // Monster groups: metadata per thematic group (flavor, group trait, loot,
  // sample encounter lines). Individual monsters live in MONSTERS below
  // with a `group` field linking them back here.
  // -----------------------------------------------------------------------
  MONSTER_GROUPS: {
    kobolds: {
      name: 'Kobolds',
      description: 'Small, maniacal dragonlings. Fiercely protective of their own.',
      groupTrait: { name: 'Nooooo!', description: 'When an ally within 2 spaces dies, attack once for free.' },
      sampleEncounters: {
        1: '3 Kobold Flunkies / 4 Minions',
        2: '6 Kobolds* / 4 Sneaks / 1 Clanger + 1 Trapper',
        3: '2 Clangers + 1 Trapper / 3 Trappers / 6 Sneaks*',
        4: '4 Trappers / 2 Denwardens + 4 Sneaks*'
      },
      loot: 'Honey, LOTS of twine, sandwiches (stolen), shiny objects, dragon painting (poorly—yet lovingly—made), rotting meats, a variety of traps.'
    },
    goblins: {
      name: 'Goblins',
      description: 'Green, cunning, & thriving on the edge of chaos. Will mock you mercilessly if given the chance.',
      groupTrait: { name: 'Haha, Missed Me!', description: 'Whenever an attack misses you, deal 1 psychic damage in return.' },
      sampleEncounters: {
        1: '1 Flunky / 2 Minions',
        2: '3 Goblins / 1 Bugbear / 1 Taskmaster / 1 Ratrider',
        3: '1 Goblin + 1 Bugbear/Taskmaster/Ratrider',
        4: '2 Goblins + 1 Bugbear/Taskmaster/Ratrider',
        5: '3 Goblins + 2 Ratriders / 2 Bugbears*',
        6: '3 Bugbears, 3 Ratriders, or 9 Goblins*'
      },
      loot: 'Live mouse, moldy bread, smooth stones, sharp sticks, teeth, arrows (surprisingly well-made), jagged blades, shiny junk, slug farm, suspiciously-colored potions, unidentifiable jerky, boots (too big).'
    },
    bandits: {
      name: 'Bandits',
      description: "You've got money, they want money… a perfect match! (hand it over)",
      groupTrait: { name: 'Parry', description: 'Treat attacks against you that roll 2 as a miss.' },
      sampleEncounters: {},
      loot: 'VERY valuable item (stolen), kidnapped person, leather armor, chipped blades, old food, fine art or clothes, wagon load of salt/nails/wool, coded letter from a secretive client.'
    },
    snakemen: {
      name: 'Snakemen',
      description: '*Aggressive Hissing Noises*',
      groupTrait: { name: 'Coiling Strike', description: 'On melee crit: Grapple (escape DC 10).' },
      sampleEncounters: {},
      loot: ''
    },
    'dungeon-denizens': {
      name: 'Dungeon Denizens',
      description: 'For some creatures, YOU are the loot at the end of the dungeon.',
      groupTrait: null,
      sampleEncounters: {},
      loot: 'Tarnished coins (partially dissolved by acid), ancient gnawed bones, indigestible items, water-damaged journal, lockpicks, half of a treasure map, suspiciously untouched boots.'
    },
    'hill-field': {
      name: 'Hill & Field',
      description: 'Mighty brutes and cunning beasts, always on the lookout for easy prey.',
      groupTrait: null,
      sampleEncounters: {},
      loot: ''
    },
    undead: {
      name: 'Undead',
      description: 'Hate the living for not being dead, hate themselves for not being living.',
      groupTrait: { name: 'Unliving, Undying', description: 'The first time this dies, reset to 1 HP instead (excluding minions).' },
      sampleEncounters: {},
      loot: 'Tarnished silver locket with faded portrait, bone fragments with arcane symbols, dark gemstone (faint chill), dried vials of blood, ancient diary, macabre necklace, broken holy symbol, signet ring of a lost noble house, moldy grave dirt, shovel.'
    },
    'forest-denizens': {
      name: 'Forest Denizens',
      description: 'Every shadow hides a predator, every branch and leaf conspires against you—the forest is alive, and you are not welcome.',
      groupTrait: null,
      sampleEncounters: {},
      loot: ''
    },
    briarbanes: {
      name: 'Briarbanes',
      description: 'Soulless, thorny plant beings fertilized by blood.',
      groupTrait: { name: 'Peeling Bark', description: 'Damage degrades Armor 1 step: Heavy » Medium » None.' },
      sampleEncounters: {},
      loot: '25 ft. of vines, glowing sap (minor healing), moss-covered ancient coins, Druidic-veined leaf, dried herbs, rare mushrooms, instant-growing acorns, never-wilting flower, mossy flute, tattered map, dried flower crown.'
    },
    cultists: {
      name: 'Cultists',
      description: 'Driven by twisted beliefs, fanatical cultists perform dark rituals to awaken ancient evils.',
      groupTrait: { name: 'Fanatical Zeal', description: 'While not at max HP, all rolls with advantage. Crits also inflict Despair.' },
      sampleEncounters: {},
      loot: 'Bloodstained dagger with dark symbols, twisted whispering idol, vial of black ichor, carved fiend mask, robe with hidden pockets, half-finished summoning scroll, infernal-rune shackles, fragment of a fiendish contract, black candles that cannot be extinguished.'
    },
    horrors: {
      name: 'Horrors',
      description: 'Unleashed by the cultists, feasting on fear and despair.',
      groupTrait: null,
      sampleEncounters: {},
      loot: ''
    },
    underground: {
      name: 'Underground',
      description: 'Nightmarish denizens of the deep, lurking in dark tunnels and cavernous depths.',
      groupTrait: null,
      sampleEncounters: {},
      loot: 'Chitinous plating, hastily-scrawled tunnel map, serrated teeth, spider silk, venom sac, partially digested meats, uncut gemstones, pheromone gland, luminescent fungus, molted carapace, rusted tools, ancient coins, echo stones.'
    },
    'adventure-specific': {
      name: 'Adventure-Specific',
      description: 'Monsters that appear in specific pre-made adventures, not part of the main bestiary.',
      groupTrait: null,
      sampleEncounters: {},
      loot: ''
    }
  },

  // -----------------------------------------------------------------------
  // Flat list of regular monsters. `group` links to MONSTER_GROUPS.
  // `level` stays a string so fractional levels ('1/4', '1/3', '1/2') remain
  // readable; parse with parseMonsterLevel() for numeric math.
  // -----------------------------------------------------------------------
  MONSTERS: [
    // ---- Kobolds ----
    { id: 'kobold-minion', group: 'kobolds', name: 'Kobold Minion', level: '1/4', size: 'small', hp: 0, isMinion: true, armor: null, speed: 6, trait: '', actions: '**Stab.** 1d4 (follows minion rules).' },
    { id: 'kobold', group: 'kobolds', name: 'Kobold', level: '1/3', size: 'small', hp: 12, armor: null, speed: 6, trait: '', actions: '**Stab.** 1d4+2 (or Sling, Range 8).' },
    { id: 'kobold-sneak', group: 'kobolds', name: 'Kobold Sneak', level: '1/2', size: 'small', hp: 15, armor: null, speed: 6, trait: '*Revenge!* When an ally dies, you may move up to 6 spaces before using your Nooooo! ability.', actions: '**Stab.** 1d4+2 (or Sling, Range 8).' },
    { id: 'kobold-clanger', group: 'kobolds', name: 'Kobold Clanger', level: 1, size: null, hp: 16, armor: 'H', speed: 6, trait: '*CLANG!* Allies who hear your clanging roll 1 additional die whenever they attack.', actions: '' },
    { id: 'kobold-trapper', group: 'kobolds', name: 'Kobold Trapper', level: 1, size: 'small', hp: 26, armor: null, speed: 6, trait: '*Trap!* When an enemy moves adjacent to you or an ally, they trigger one of your traps (1/encounter each): **BEEES!** 5d4 damage (doesn\'t miss), half to ALL adjacent creatures. **HIDDEN NET!** Restrained (escape DC 10).', actions: '**Throw Scorpion (2×).** (Range 8) 1d4+2.' },
    { id: 'kobold-denwarden', group: 'kobolds', name: 'Kobold Denwarden', level: 1, size: null, hp: 20, armor: 'M', speed: 6, trait: '*Hold!* Adjacent allies gain Medium Armor.', actions: '**Stab (2×).** 1d4+2 (or Sling, Range 8).' },

    // ---- Goblins ----
    { id: 'goblin-minion', group: 'goblins', name: 'Goblin Minion', level: '1/4', size: 'small', hp: 0, isMinion: true, armor: null, speed: 6, trait: '', actions: '**Stab.** 1d6 (follows minion rules).' },
    { id: 'goblin', group: 'goblins', name: 'Goblin', level: '1/3', size: 'small', hp: 15, armor: null, speed: 6, trait: '', actions: '**Stab.** 1d6+2 (or Shoot, Range 8).' },
    { id: 'goblin-flunkie', group: 'goblins', name: 'Goblin Flunkie', level: '1/3', size: null, hp: 15, isFlunky: true, armor: null, speed: 6, trait: "Can't crit.", actions: '**Stab.** 1d6+2 (or Shoot, Range 8).', notes: 'Used in starter adventure.' },
    { id: 'bugbear', group: 'goblins', name: 'Bugbear', level: 2, size: null, hp: 30, armor: 'M', speed: 6, trait: '', actions: '**Cleave.** 2d6+4. OR: **Javelin.** 1d6+2 (Range 8).' },
    { id: 'goblin-taskmaster', group: 'goblins', name: 'Goblin Taskmaster', level: 2, size: 'small', hp: 30, armor: 'M', speed: 6, trait: '*Meat Shield.* Can force other goblins to Interpose for him.', actions: '**Stab.** 1d6+2 (or Shoot, Range 8). Then: **Get in here!** Call a goblin minion to the fight.' },
    { id: 'goblin-ratrider', group: 'goblins', name: 'Goblin Ratrider', level: 2, size: null, hp: 30, armor: null, speed: 10, trait: '*CHAAARGE!* If you move at least 4 spaces in a straight line, attack with advantage once.', actions: '**Bite & Stab (2×).** 1d6+2. On crit: Prone.' },

    // ---- Bandits ----
    { id: 'bandit-minion', group: 'bandits', name: 'Bandit Minion', level: '1/4', size: null, hp: 0, isMinion: true, armor: null, speed: 6, trait: '', actions: '**Stab.** 1d8 (follows minion rules).' },
    { id: 'bandit', group: 'bandits', name: 'Bandit', level: '1/3', size: null, hp: 12, armor: null, speed: 6, trait: '', actions: '**Stab.** 1d8+1 (or Shoot, Range 8).' },
    { id: 'bandit-hunter', group: 'bandits', name: 'Bandit Hunter', level: 1, size: null, hp: 22, armor: null, speed: 6, trait: '', actions: '**Battlebow.** 2d8+2 (Range 12).' },
    { id: 'bandit-bruiser', group: 'bandits', name: 'Bandit Bruiser', level: 2, size: null, hp: 24, armor: 'M', speed: 6, trait: '', actions: '**Bash.** 2d8+4.' },
    { id: 'bandit-assassin', group: 'bandits', name: 'Bandit Assassin', level: 2, size: null, hp: 24, armor: null, speed: 6, trait: '*Sneak.* You are invisible until you attack.', actions: '**Poison Blade (2×).** 1d8+2. On damage: Dazed.' },
    { id: 'bandit-captain', group: 'bandits', name: 'Bandit Captain', level: 4, size: null, hp: 36, armor: 'M', speed: 6, trait: '', actions: '**Slice (3×).** 1d8+1 (or Shoot, Range 8).' },
    { id: 'bandit-mage', group: 'bandits', name: 'Bandit Mage', level: 4, size: null, hp: 41, armor: null, speed: 6, trait: '*Spark Step.* When damaged, teleport up to 4 spaces.', actions: '**Arc Lightning.** 3d8 (Range 12). Also strikes the next closest creature. On miss: damage self instead.' },

    // ---- Snakemen ----
    { id: 'snakeman-minion', group: 'snakemen', name: 'Snakeman Minion', level: '1/4', size: null, hp: 0, isMinion: true, armor: null, speed: 6, trait: '', actions: '**Strike.** 1d6 melee/ranged (follows minion rules).' },
    { id: 'snakeman', group: 'snakemen', name: 'Snakeman', level: 1, size: null, hp: 26, armor: null, speed: 6, trait: '', actions: '**Slash.** 1d6+6 (or Spit, Range 8).' },
    { id: 'cobra-captain', group: 'snakemen', name: 'Cobra Captain', level: 4, size: null, hp: 36, armor: 'M', speed: 6, trait: '', actions: '**Slash (2×).** 1d6+6 (or Spit, Range 8).' },
    { id: 'giant-cobra', group: 'snakemen', name: 'Giant Cobra', level: 8, size: 'Large', hp: 80, armor: 'M', speed: 6, trait: '', actions: '**Crush.** 2d6+20. Advantage vs. smaller creatures.' },

    // ---- Dungeon Denizens — Stirges ----
    { id: 'stirge', group: 'dungeon-denizens', subgroup: 'Stirges', name: 'Stirge', level: '1/2', size: 'tiny', hp: 10, armor: null, speed: 6, trait: '*Evasive Flier.* Attacks against stirges are made with disadvantage.', actions: '**Latch On.** 1d4+2. On hit: Latched On.' },
    { id: 'greater-stirge', group: 'dungeon-denizens', subgroup: 'Stirges', name: 'Greater Stirge', level: 6, size: 'small', hp: 60, armor: null, speed: 6, trait: '*Evasive Flier.* Attacks against stirges are made with disadvantage.', actions: '**Latch On.** 1d12+10. On hit: Latched On.' },

    // ---- Dungeon Denizens — Mimics ----
    { id: 'tiny-mimic', group: 'dungeon-denizens', subgroup: 'Mimics', name: 'Tiny Mimic', level: 1, size: null, hp: 28, armor: null, speed: 6, trait: '*Ambusher.* Mimics always start first and heroes roll Initiative with disadvantage. *Sticky.* Mimic hits also Grapple any number of creatures. When crit: release 1 creature. Forms: Cup, Shoe, Apple, Candlestick, Potion, Pebble.', actions: '**Pseudopod.** 1d4 (escape DC 9) OR: **Bite.** (Grappled creature) 1d12.' },
    { id: 'small-mimic', group: 'dungeon-denizens', subgroup: 'Mimics', name: 'Small Mimic', level: 2, size: null, hp: 41, armor: null, speed: 6, trait: '*Ambusher & Sticky.* Forms: Backpack, Shield/Weapon, Chair, Crate, Tree Stump.', actions: '**Pseudopod.** 1d6 (escape DC 11) OR: **Bite.** (Grappled creature) 1d20.' },
    { id: 'medium-mimic', group: 'dungeon-denizens', subgroup: 'Mimics', name: 'Medium Mimic', level: 6, size: null, hp: 79, armor: null, speed: 6, trait: '*Ambusher & Sticky.* Forms: Table, Treasure Chest, Barrel, Bookshelf, Door, Bed.', actions: '**Pseudopod.** 1d8 (escape DC 13) OR: **Bite.** (Grappled creature) 2d20.' },

    // ---- Dungeon Denizens — Oozes ----
    { id: 'gray-ooze', group: 'dungeon-denizens', subgroup: 'Oozes', name: 'Gray Ooze', level: 1, size: null, hp: 28, armor: null, speed: 6, trait: '*Digestive Touch.* Contact inflicts **Digested**: +X damage for each time target has been Digested this encounter. *Goopy.* When crit or slashed: summon X ooze minions (size: d6); their attacks inflict Digested.', actions: '**Acidic Touch (2×).** 1d6+2.' },
    { id: 'ochre-jelly', group: 'dungeon-denizens', subgroup: 'Oozes', name: 'Ochre Jelly', level: 4, size: 'large', hp: 52, armor: null, speed: 6, trait: '*Digestive Touch & Goopy.*', actions: '**Acidic Touch (2×).** 1d6+3.' },
    { id: 'black-pudding', group: 'dungeon-denizens', subgroup: 'Oozes', name: 'Black Pudding', level: 8, size: 'large', hp: 90, armor: null, speed: 6, trait: '*Digestive Touch & Goopy.*', actions: '**Acidic Touch (2×).** (Reach 2) 1d6+5.' },
    { id: 'elder-ooze', group: 'dungeon-denizens', subgroup: 'Oozes', name: 'Elder Ooze', level: 12, size: 'huge', hp: 150, armor: null, speed: 6, trait: '*Digestive Touch & Goopy.*', actions: '**Acidic Touch (3×).** (Reach 3) 1d6+6.' },

    // ---- Hill & Field — Gnolls ----
    { id: 'gnoll', group: 'hill-field', subgroup: 'Gnolls', name: 'Gnoll', level: 1, size: null, hp: 28, armor: null, speed: 6, trait: '*Frenzy.* Advantage against Bloodied creatures.', actions: '**Ravage (2×).** 1d10. OR: **Shoot.** (Range 12) 1d10.' },
    { id: 'gnoll-packleader', group: 'hill-field', subgroup: 'Gnolls', name: 'Gnoll Packleader', level: 4, size: null, hp: 39, armor: 'M', speed: 6, trait: '*Frenzy.*', actions: '**Bark Orders.** 2 allies can move. Then: **Ravage (3×).** 1d10.' },

    // ---- Hill & Field — Others ----
    { id: 'worg', group: 'hill-field', name: 'Worg', level: 1, size: 'large', hp: 28, armor: null, speed: 10, trait: '*Savage.* Always crits when attacking a Grappled creature.', actions: '**Rip Apart (2×).** 1d6+2. On hit: Grappled (escape DC 10).' },
    { id: 'blue-drake', group: 'hill-field', name: 'Blue Drake', level: 2, size: null, hp: 34, armor: null, speed: 'Fly 12', trait: '', actions: '**Shocking Bite.** 1d12+5 (ignores metal armor). *On Death.* Deal 1d12 damage back (ignores metal armor).' },
    { id: 'griffon', group: 'hill-field', name: 'Griffon', level: 4, size: 'large', hp: 50, armor: null, speed: 'Fly 12', trait: '', actions: '**Talons.** 2d6+10, on hit: Grappled (escape DC 14). OR: **Fly & Drop.** (if grappling) Fly upward 12 and release (6d6 fall damage).' },
    { id: 'bulette', group: 'hill-field', name: 'Bulette', level: 10, size: 'large', hp: 74, armor: 'H', speed: 'Burrow', trait: "*Burst Forth!* Combat starts with the heaviest character making a DC 14 DEX save or Grappled (escape DC 14) and take 1d12+20 damage (half on save).", actions: '**Drag Below.** (Grappled creature) 2d12 then burrow away. OR: **Leap & Bite.** (If not grappling) leap 6, 1d12+20. On hit: Grappled.' },
    { id: 'troll', group: 'hill-field', name: 'Troll', level: 10, size: 'large', hp: 100, armor: 'M', speed: 8, trait: '*Regenerate.* Does not die at 0 HP. Only fire, radiant, or a crit while at 0 HP can kill it.', actions: 'Choose twice: **Claws.** (Reach 2) 1d4+10. On crit: Prone. **Bite.** (A Prone creature) 1d4+20.' },
    { id: 'hill-giant', group: 'hill-field', name: 'Hill Giant', level: 12, size: 'huge', hp: 140, armor: null, speed: 8, trait: '*Brute.* On hit: Knockback Primary Die spaces.', actions: '**Smash (2×).** (Reach 2) 1d6+15. OR: **Boulder!** (Range 12) 1d6+20.' },
    { id: 'roc', group: 'hill-field', name: 'Roc', level: 17, size: 'gargantuan', hp: 195, armor: 'M', speed: 'Fly 20', trait: '', actions: '**Pluck Up.** (Reach 4, up to 2 creatures) 3d12+20. On hit: Grappled (escape DC 18). OR: **Crush & Drop.** Fly upward 20 spaces, 20 damage to Grappled creatures, release (10d6 fall damage).' },

    // ---- Undead ----
    { id: 'skeleton', group: 'undead', name: 'Skeleton', level: '1/3', size: null, hp: 10, armor: null, speed: 6, trait: '', actions: '**Grave Arrow.** 1d4+3 (Range 8).' },
    { id: 'zombie', group: 'undead', name: 'Zombie', level: '1/2', size: null, hp: 15, armor: null, speed: 6, trait: '', actions: '**Crunch.** 1d4+4. On damage: Grappled.' },
    { id: 'ghoul', group: 'undead', name: 'Ghoul', level: 1, size: null, hp: 20, armor: null, speed: 6, trait: '', actions: '**Sickening Claw.** 1d4+8. On damage: Dazed.' },
    { id: 'specter', group: 'undead', name: 'Specter', level: 3, size: null, hp: 30, armor: null, speed: 'Fly', trait: '', actions: '**Deathly Touch.** 1d4. On damage: set HP to 0.' },
    { id: 'ogre-zombie', group: 'undead', name: 'Ogre Zombie', level: 5, size: 'large', hp: 46, armor: null, speed: 6, trait: '', actions: '**Greatclub (2×).** 1d4+8. On crit: Prone.' },
    { id: 'mummy', group: 'undead', name: 'Mummy', level: 6, size: null, hp: 54, armor: null, speed: 6, trait: '', actions: '**Slam (2×).** 1d4+8. On damage: Dazed.' },
    { id: 'giant-zombie', group: 'undead', name: 'Giant Zombie', level: 8, size: 'huge', hp: 73, armor: null, speed: 6, trait: '', actions: '**Decaying Swipe (2×).** 1d4+10. On damage: knockback Primary Die spaces.' },
    { id: 'wraith', group: 'undead', name: 'Wraith', level: 10, size: null, hp: 94, armor: null, speed: 'Fly', trait: '', actions: '**Soul Rend (2×).** (Range 8) 1d4+10. On damage: deal 1 Wound.' },
    { id: 'mummy-lord', group: 'undead', name: 'Mummy Lord', level: 21, size: null, hp: 280, armor: null, speed: 6, trait: '*Cursed Gaze.* When crit: DC 20 INT save, or suffer 1 Wound.', actions: '**Scarab Swarm.** Summon 10 scarab minions (d6) within 6 spaces. Then: **Slam (2×).** 1d4+20. On damage: Dazed.' },

    // ---- Forest Denizens ----
    { id: 'duskprowler', group: 'forest-denizens', name: 'Duskprowler', level: 6, size: 'large', hp: 70, armor: null, speed: 6, trait: '*Illusory Aura.* Attacks against the Duskprowler have Disadvantage 2. Damage suppresses this effect until the end of the next hero\'s turn.', actions: '**Ravage (2×).** 2d8+2.' },
    { id: 'basilisk', group: 'forest-denizens', name: 'Basilisk', level: 7, size: null, hp: 48, armor: 'H', speed: 6, trait: '*Flesh to Stone.* Creatures Dazed by the Basilisk remain so for 10 minutes. Dazed 3 times = Petrified.', actions: '**Stone Gaze.** Daze 1 creature within sight, then: **Envenom.** 1d8+10, advantage vs Dazed targets.' },
    { id: 'druid', group: 'forest-denizens', name: 'Druid', level: 8, size: null, hp: 90, armor: null, speed: 6, trait: '', actions: '**Beastshift.** +4 speed, gain Medium armor this round. 4d4+10. OR: **Hurricane.** (Reach 3) 4d4+10 to all enemies within reach. On damage: move targets anywhere else in Reach.' },
    { id: 'seedling', group: 'briarbanes', name: 'Seedling', level: '1/2', size: 'small', hp: 8, armor: 'H*', speed: 6, trait: '*Peeling Bark.*', actions: '**Thorn Seed.** (Range 6) 2d6+2.' },
    { id: 'acidpod', group: 'briarbanes', name: 'Acidpod', level: 1, size: 'small', hp: 8, armor: 'H*', speed: 6, trait: '*Peeling Bark. Caustic Eruption.* On death: 4d6 acid damage to ALL adjacent creatures.', actions: '**Grab.** DC 12 DEX save or Grappled.' },
    { id: 'tangler', group: 'briarbanes', name: 'Tangler', level: 2, size: null, hp: 20, armor: 'H*', speed: 6, trait: '*Peeling Bark.*', actions: '**Tangle (2×).** (Reach 6) 1d6+2. On hit: Grappled (escape DC 12, or any fire or slashing damage).' },
    { id: 'rootbreaker', group: 'briarbanes', name: 'Rootbreaker', level: 5, size: 'large', hp: 50, armor: 'H*', speed: 6, trait: '*Peeling Bark.*', actions: '**Slam.** 3d6+6. On crit: knockback 2.' },
    { id: 'treant', group: 'briarbanes', name: 'Treant', level: 14, size: 'huge', hp: 170, armor: 'H*', speed: 6, trait: '*Peeling Bark. Enrage.* Attack with advantage when unarmored.', actions: 'Choose twice: **Slam.** (Reach 3) 2d6+10. On damage: Prone. **Stomp.** (Hampered target) 2d6+20.' },

    // ---- Cultists ----
    { id: 'cultist', group: 'cultists', name: 'Cultist', level: 1, size: null, hp: 28, armor: null, speed: 6, trait: '', actions: '**Oblation of Blood!** If undamaged, attack self for 2 damage. Adjacent enemies are inflicted with Despair. OR: **Dreadful Blade.** 1d6+6. OR: **Blood Boil.** (Range 12, Bloodied creature) 3d6+6.' },
    { id: 'fanatic', group: 'cultists', name: 'Fanatic', level: 3, size: null, hp: 41, armor: null, speed: 6, trait: '', actions: '**Oblation of Blood!** (see Cultist). OR: **Whispers of Madness.** Contested STR check or Grappled (reroll to escape, or any radiant damage); if successful, deal 3d6+6 psychic damage (cannot be Defended or Interposed).' },
    { id: 'doomsayer', group: 'cultists', name: 'Doomsayer', level: 5, size: null, hp: 58, armor: null, speed: 6, trait: '', actions: '**Feverish Chant.** (Concentration) Reduce all damage done to allies who can hear you to 1. OR: **Ecstatic Ravings.** 2d6 psychic damage to all enemies who can hear you.' },

    // ---- Horrors ----
    { id: 'stenchling', group: 'horrors', name: 'Stenchling', level: '1/2', size: 'small', hp: 18, armor: null, speed: 6, trait: '*Putrid Cloud.* On Death: 2d6 poison damage to enemies within Reach 2.', actions: '**Bite.** 2d6.' },
    { id: 'spiny-fiend', group: 'horrors', name: 'Spiny Fiend', level: 4, size: null, hp: 49, armor: null, speed: 6, trait: '*Spines.* Melee attackers take 3 damage.', actions: '**Claws (2×).** 1d6+6. OR: **Shoot Spine.** (Range 12) 1d6+6.' },
    { id: 'glabrezu', group: 'horrors', name: 'Glabrezu', level: 14, size: 'large', hp: 110, armor: 'H', speed: 6, trait: '', actions: '**Doomclaw (2×).** (Reach 2) 3d6+10. On damage: Grappled (escape DC 17). OR: **Tear Asunder.** (creature Grappled by both claws) 50 unpreventable damage. At 0 HP: DC 17 STR save or torn in two, dying instantly.' },
    { id: 'incubus-succubus', group: 'horrors', name: 'Incubus/Succubus', level: 4, size: null, hp: 50, armor: null, speed: 6, trait: '*Infernal Allure.* Start of turn: heroes make DC 15 WIL save or Allured (GM spends 1 Action). Advantage stacks per failure.', actions: '**Claws & Whip (2×).** 1d8+5.' },

    // ---- Underground ----
    { id: 'giant-spider', group: 'underground', name: 'Giant Spider', level: 2, size: null, hp: 27, armor: 'M', speed: 6, trait: '', actions: '**Shoot Web.** (Range 6) 1d8+2. On hit: Restrained (escape DC 12, or any slashing/fire damage). OR: **Bite.** (Hampered target) 2d8+4, Poisoned (magical healing ends).' },
    { id: 'ettercap', group: 'underground', name: 'Ettercap', level: 4, size: null, hp: 49, armor: null, speed: 6, trait: '', actions: '**Web Garrote.** 1d8+2. On hit: Grappled (escape DC 13), **Silenced** until target escapes.' },
    { id: 'nestweaver', group: 'underground', name: 'Nestweaver', level: 6, size: 'Large', hp: 54, armor: 'M', speed: 6, trait: '', actions: 'Summon 2 spider minions (d8). Then choose 1: **Shoot Web.** (Range 6) 1d8+2. On hit: Restrained. OR: **Bite.** (Hampered target) 3d8+6 and Poisoned.' },
    { id: 'umber-hulk', group: 'underground', name: 'Umber Hulk', level: 10, size: 'large', hp: 70, armor: 'H', speed: 6, trait: '*Confounding Pheromones.* Enemies make a DC 15 WIL save at the start of their turns or Confused this turn. Advantage 1 on save per failure this encounter.', actions: '**Mandible & Claws (2×).** 1d10+10.' },
    { id: 'cloaker', group: 'underground', name: 'Cloaker', level: 13, size: 'large', hp: 110, armor: null, speed: 'Fly 10', trait: '*Ambusher.* Cloakers always start first, heroes roll Initiative with disadvantage. *Mutual Harm.* Take half damage while grappling (target takes the other half).', actions: '**Wrap.** 2d10+20. On Hit: Grappled (escape DC 16). OR: **Horrifying Wail.** DC 16 WIL save or creatures within 6 are Frightened and must spend 1 Action moving as far away as possible.' },
    { id: 'great-worm', group: 'underground', name: 'Great Worm', level: 16, size: 'Huge', hp: 140, armor: 'H', speed: 'Burrow 8', trait: '*Tremor Sight.* Advantage against creatures that moved since its last turn.', actions: '**Crush.** Creatures in a 2×6 area take 50 damage on a failed DC 18 DEX save (dive out for 1 Action = half speed + Prone instead). OR: **Bite/Swallow.** 1d4+40. On crit: **Swallowed**.' },

    // ---- Adventure-Specific ----
    { id: 'wax-golem', group: 'adventure-specific', name: 'Wax Golem', level: 1, size: null, hp: 28, armor: null, speed: 6, trait: '*Sticky.* Grapples on hit. Any number of creatures. When crit: release 1 (attacker\'s choice).', actions: '**Wax Grip.** 1d4 (escape DC 10). OR: **Crush.** (Grappled creature) 1d12.' },
    { id: 'giant-venus-flytrap', group: 'adventure-specific', name: 'Giant Venus Flytrap', level: null, size: 'huge', hp: '20/hero', armor: null, speed: 0, trait: '*Blind.* Always attacks with disadvantage.', actions: 'Choose 1: **Tangle (2×).** (Reach 12) 1d6+2, Grappled (escape DC 12, or any fire or slashing damage). **Reel In.** Pull Grappled target adjacent, then Bite. **Bite.** (Reach 3) 1d6+15.' },
    { id: 'giant-slug-minion', group: 'adventure-specific', name: 'Giant Slug Minion', level: null, size: null, hp: 0, isMinion: true, armor: null, speed: 6, trait: '*Discordant Song.* Enemies who hear gain a cumulative +1 Dazed at the beginning of each round.', actions: '**Attack.** 1d4.' },
    { id: 'rat-prince', group: 'adventure-specific', name: 'Rat Prince', level: 1, size: null, hp: 20, armor: null, speed: 6, trait: '*Protect Master!* Rat swarms can Interpose for him.', actions: '**Filthblast.** 1d6+2 (Range 8). Then: **Feeding time!** Summon a 1d4 rat minion.' },
    { id: 'rat-swarm', group: 'adventure-specific', name: 'Rat Swarm', level: 1, size: null, hp: 0, isMinion: true, armor: null, speed: 6, trait: '*Swarm.* When damaged, decrement the damage die then summon 1 minion. (d6 small » d4 tiny » dead).', actions: '**Gnaw.** 1d8.' },
    { id: 'bog-giant', group: 'adventure-specific', name: 'Bog Giant', level: 12, size: 'huge', hp: 140, armor: null, speed: 8, trait: 'Use Hill Giant stats. Can\'t see, VERY good hearing. Attacks whatever makes the most noise.', actions: '**Smash (2×).** (Reach 2) 1d6+15. OR: **Boulder!** (Range 12) 1d6+20.' },
    { id: 'dregatha', group: 'adventure-specific', name: 'Dregatha, Thrice-Chinned (Hag)', level: 5, size: null, hp: 68, armor: null, speed: 6, trait: '*Spit Curse.* When crit: DC 12 INT save, or 1 Wound.', actions: '**Bug Swarm.** Summon 1 minion/hero (d4), then: **Claw (2×).** 1d4+8, on damage: Dazed.' },
    { id: 'pinky', group: 'adventure-specific', name: 'Pinky (Goblin Wizard Apprentice)', level: 2, size: 'small', hp: 18, armor: null, speed: 6, trait: '*Panic.* Attacks against Pinky are made with disadvantage.', actions: '**Protect Me!** Command a Rootbreaker to attack. **Escape.** (Reaction: when Bloodied) Use Cloak of Lesser Windform to turn Invisible and run away.' }
  ],

  // -----------------------------------------------------------------------
  // Legendary monsters. Each has a phase arc (opening → Bloodied → Last Stand).
  // They act after EACH hero's turn.
  // -----------------------------------------------------------------------
  LEGENDARY_MONSTERS: [
    {
      id: 'grimbeak', name: 'Grimbeak, the Unyielding', level: 3, size: 'Large', creatureType: 'Owlbear',
      hp: 100, armor: 'M', saves: 'STR+',
      trait: '*Brutal.* Treat the highest die rolled as the Primary Die. On crit: knock Prone.',
      actions: [
        { name: 'Savage Screech', usage: '1 use', description: 'All enemies within Reach 12 suffer 2d6 damage (ignoring armor). DC 11 WIL save or become Frightened for 1 round.' },
        { name: 'Rend & Tear', description: 'Attack for 2d6+10 damage.' },
        { name: 'Beak', description: 'Move 8. Attack for 2d6 damage.' }
      ],
      bloodied: 'At 50 HP, Savage Screech recharges.',
      lastStand: 'Grimbeak is dying! 30 more damage and she dies. Until then, her Attacks use d10s instead of d6s.'
    },
    {
      id: 'thorn-quickblade', name: 'Thorn Quickblade', level: 4, size: null, creatureType: 'Human Criminal',
      hp: 125, armor: 'M', saves: 'DEX+',
      trait: '*Strike Back.* When crit, make a Heart Piercer or Stormquill attack in return.',
      actions: [
        { name: 'Stormquill (Crossbow)', description: 'Move 4, 4d4+10 damage (Range 8).' },
        { name: 'Heart Piercer (Rapier)', description: 'Move 8, 2d4+3 damage. On crit: Dazed.' }
      ],
      bloodied: 'Smoke Bomb. At 62 HP, Thorn immediately becomes invisible (until the end of his next turn), then moves 8, ignoring opportunity attacks.',
      lastStand: "Mortal Panic! Thorn is dying! 30 more damage and he's dead! Until then he'll Strike Back EVERY time he's hit (1/turn).",
      script: [
        { beat: 'Opening Attack', line: "You should have taken my offer. Now, I'm afraid I'll have to make this hurt!" },
        { beat: 'On Crit', line: 'Oh, did that sting? Good! I want you to remember it.' },
        { beat: 'Gaining the Upper Hand', line: "I'm almost starting to feel bad for you—almost." },
        { beat: 'Bloodied', line: "You think this is over? I'm just getting warmed up!" },
        { beat: 'Last Stand', line: "Did you really think I'd fight fair? You have no idea who you're dealing with!" },
        { beat: 'On Death', line: "You think this ends with me? You're in deeper than you know… You've just made enemies in very high places…" }
      ]
    },
    {
      id: 'krogg', name: 'Krogg, Goblin King', level: 2, size: null, creatureType: 'Angry Bugbear',
      hp: 75, armor: 'M', saves: 'STR+, DEX+',
      trait: '',
      actions: [
        { name: 'Manglemaul', description: 'Move 6. 2d6+3 damage, Grappled (escape DC 10).' },
        { name: 'Crack Skulls', description: 'Move 6. Swing a Grappled creature at another creature. Both take 2d6+3 damage, ending the Grapple.' }
      ],
      bloodied: "At 35 HP, Krogg's damage increases to 2d8+3.",
      lastStand: 'Krogg is dying! 20 more damage and he dies. Until then, he has Heavy armor.'
    },
    {
      id: 'greenthumb', name: 'Greenthumb, Lichling', level: 3, size: null, creatureType: 'Botanical Wizard',
      hp: 100, armor: null, saves: 'INT+, WIL+',
      trait: '',
      actions: [
        { name: 'Summon Briarbanes', description: 'Summon 1 minion/hero (size: 1d4).' },
        { name: 'Root', description: 'Choose half of the heroes: DC 11 DEX save or take 2d4 piercing damage and be Restrained by thorny vines (escape DC 11 STR or DEX, or any slashing or fire damage).' },
        { name: 'Thorn Shot', description: '(Range 10) 5d4+5.' }
      ],
      bloodied: 'At 50 HP, Greenthumb gains magical bark, giving himself Heavy Armor.',
      lastStand: 'Greenthumb is dying! 30 more damage and he dies. Until then, he chooses twice each turn.'
    },
    {
      id: 'ravager', name: 'Ravager of the Lowlands', level: 5, size: 'Large', creatureType: 'Manticore',
      hp: 130, armor: 'M', saves: 'STR+, DEX+',
      trait: '*Feral Instinct.* Whenever Ravager is crit, he can fly 10.',
      actions: [
        { name: 'Venomous Stinger', usage: '1 use', description: 'Reach 3, 5d12 damage.' },
        { name: 'Ravage', description: 'Attack for 1d12+20 damage.' },
        { name: 'Claw', description: 'Fly 10, attack for 1d12+6 damage.' }
      ],
      bloodied: 'At 65 HP, his Venomous Stinger recharges.',
      lastStand: 'The Ravager is dying! 40 more damage and he dies. Until then, the first time each turn he takes damage, he uses Move & Claw.'
    },
    {
      id: 'aranya', name: 'Queen Aranya, Broodmother', level: 6, size: 'Large', creatureType: 'Matriarch of Spiders',
      hp: 160, armor: 'M', saves: 'ALL+',
      trait: '*Weave Web.* Creatures she hits are entangled in a sticky web (Dazed). *Flammable Webs.* Fire critical hits suppress Weave Web for 1 turn.',
      actions: [
        { name: 'Impale', description: '(Reach 2) 2d8+8 damage. Then skitter away up to 8 spaces.' },
        { name: 'Hatch Brood', description: 'Summon spiderling minions (1/hero, size: d8); they act only when commanded.' },
        { name: 'Dinner Time!', description: 'Command all of your spiderling minions to move up to 6 spaces and attack once each.' }
      ],
      bloodied: '"Avenge Your Queen, My Brood!" At 80 HP, summon 3 spiderling minions/hero anywhere within Reach 8.',
      lastStand: 'Aranya is dying! 40 more damage and she dies. Until then, Hatch Brood after each of her turns.'
    },
    {
      id: 'nalzar', name: 'Nalzar, Apex Predator', level: 6, size: 'Large', creatureType: 'Grey Drake',
      hp: 180, armor: 'M', saves: 'STR+, DEX+',
      trait: '*Tail Swipe.* When dealt slashing or lightning damage: knock a hero within 3 spaces Prone. *Torn Wings.* Each slashing crit reduces the Wing Buffet DC by 1.',
      actions: [
        { name: 'Devour', description: '(Prone creatures only, Reach 2) 4d12+6.' },
        { name: 'Wing Buffet', description: 'Fly 8, then land. Cone 8: 1d12, then DC 14 STR save or also knocked Prone (advantage if behind cover or another hero).' }
      ],
      bloodied: 'At 90 HP, her Wing Buffet Range and DC increase by 2.',
      lastStand: 'Nalzar is dying! 60 more damage and she dies. Until then, each turn she moves 6, then uses Devour (ignoring the Prone requirement).'
    },
    {
      id: 'florindris', name: 'Florindris, Bane of the Forest', level: 7, size: 'Large', creatureType: 'Floral Dragon',
      hp: 200, armor: 'M', saves: 'ALL+',
      trait: '*Aura of Wind.* Ranged attacks against you have disadvantage. End of turn: push adjacent creatures 2 spaces away. *Wither.* Resistant to necrotic damage, but it suppresses Aura of Wind for 1 turn.',
      actions: [
        { name: 'Petal Storm', usage: '1 use', description: '3d10+10 damage to all enemies within Reach 8, half on a DC 13 DEX save.' },
        { name: 'Rend', description: 'Fly 10 before or after attacking. (Reach 2) 1d10+10 damage to up to 2 targets within reach. On hit: Thornblight.' },
        { name: 'Gust', description: '(Reach 8) Move a target 1d10 spaces.' }
      ],
      bloodied: 'At 100 HP, enemies within Reach 12 gain Thornblight, and Petal Storm recharges.',
      lastStand: 'Florindris is dying! 70 more damage and she dies. Until then, Aura of Wind and Gust move creatures twice as far.'
    },
    {
      id: 'flameheart', name: 'General Flameheart', level: 8, size: 'Huge', creatureType: 'Flame Titan',
      hp: 175, armor: 'H', saves: 'STR+, WIL+',
      trait: '*Cinder Armor.* Immune to fire. When damaged, deal 5 fire damage to all adjacent creatures. *Extinguish Flame.* Cold or radiant crits extinguish all areas ignited by Molten Fury and suppress Cinder Armor for 1 turn.',
      actions: [
        { name: 'Inferno Cleave', description: 'Move 8 then strike a 2×2 square area for 2d10+10 fire damage.' },
        { name: 'Molten Fury', description: 'Lob a molten fireball at the furthest hero not already in the flames, igniting a 2×2 square area. Creatures there take 2d10+10 damage; another 10 at the end of each of their turns if they remain.' }
      ],
      bloodied: 'At 87 HP, on his next turn, he uses Molten Fury a number of times equal to half the number of heroes (rounded up).',
      lastStand: 'Flameheart is dying! 80 more damage and he dies. Until then, the area of his attacks increase to a 3×3 square.'
    },
    {
      id: 'vael', name: 'Vael, Undying Necromancer', level: 9, size: null, creatureType: 'Luminary of Malice',
      hp: 250, armor: null, saves: 'INT++, WIL++',
      trait: '*Protect Master!* Whenever Vael would fail a save or take 20+ damage, he may sacrifice his Lifebinding Spirit, Bane, instead. He spends his next turn moving up to 6 spaces and summoning Bane.',
      actions: [
        { name: 'Bane (Lifebinding Spirit)', description: 'Attacks for 1d12+6 at the start of each of Vael\'s turns.' },
        { name: 'DOOM', description: '(Range 12, undamaged target) DC 14 WIL save or 5d12 damage. Half on save.' },
        { name: "Veilwalker's Rebuke", description: '(Range 8) 2d12+6. Double damage against those behind cover. 1/round you may swap places with them.' },
        { name: "Cruelty's Edge", description: '1d4+2. On hit: DC 14 WIL save or Dazed and Frightened. Then move 6.' }
      ],
      bloodied: 'At 125 HP, Vael gains the reaction **Shield of Cruelty** (1 use): If Vael would be damaged, instead reflect that much radiant damage back at the attacker.',
      lastStand: 'DEATH, AN OLD FRIEND. Vael is dying! 90 more damage and he dies. Until then, he gains Heavy Armor, the hero that most recently damaged him is reduced to 0 HP, and Bane is sacrificed into a **Vengeful Spirit** (1d12+6 necrotic damage to creatures within reach 3 at the end of each of his turns).'
    },
    {
      id: 'titan-deep-woods', name: 'Titan of the Deep Woods', level: 10, size: 'Gargantuan', creatureType: 'Skeleton',
      hp: 240, armor: 'H', saves: 'STR+++',
      trait: '*Splintering Legions.* Bludgeoning damage or any crit cause bones to splinter off and animate, forming a d10 minion. *Brittle Bones.* Resistant to piercing, vulnerable to bludgeoning.',
      actions: [
        { name: 'Devastating Strike', description: '(Reach 4) 1d4+30 damage. On hit: Knockback 6.' },
        { name: 'Crushing Stomp', description: 'Move up to 10 spaces. Deal 1d4+20 damage to up to 2 targets along the path. On hit: Prone.' },
        { name: 'Beckoning Doom', description: 'The 2 furthest heroes make a DC 16 STR save or are moved adjacent to Titan.' }
      ],
      bloodied: null,
      lastStand: 'Shattered Legion. At 0 HP Titan collapses into 4 skeleton minions/hero (d10 sized). If any remain, they reassemble into the Titan the next evening.'
    },
    {
      id: 'ulvek', name: "Ul'vek, Psionic Despot", level: 11, size: 'Medium', creatureType: 'Brain-Eating Aberration',
      hp: 300, armor: null, saves: 'INT++, WIL++, DEX+',
      trait: '*Mind Shield.* Whenever Ul\' would fail a save or take more than 30 damage while he has a creature Dominated, he may avoid the attack instead, but all Dominated creatures come to their senses.',
      actions: [
        { name: 'Dominate', description: '(If no creatures are Dominated) Choose half of the heroes to suffer 2d12 psychic damage (ignoring armor). DC 15 WIL save or Dominated as well.' },
        { name: 'Consume', description: '(Dominated creature) Contested DEX or STR check, on success: Grappled and 6d12. Cannot be Defended or Interposed against.' },
        { name: 'Control', description: 'Teleport 8. (Reach 8) DC 15 WIL save, force an enemy to spend one Action to make a weapon attack or cast a cantrip. On save, they attack with disadvantage.' }
      ],
      bloodied: 'At 150 HP gain **Illusory Shift** (Reaction, 1 use): Swap places with a Dominated creature, making them the new target of the attack.',
      lastStand: "Ul' is dying! 110 more damage and he dies. Until then, Dominated no longer ends on taking damage. Every hero makes a WIL save or become Dominated."
    },
    {
      id: 'dravok', name: 'Dravok, All-Seeing Tyrant', level: 12, size: 'Large', creatureType: 'Aberration — all TEETH & EYES',
      hp: 325, armor: null, saves: 'INT++, WIL++',
      trait: '*My plans, flawless!* Dravok makes all saves with +1 Advantage, attacks against him have Disadvantage. *Weakness:* Taking more than 12 piercing or slashing damage: Dravok\'s plans are **FLAWED!** (until the end of the next hero\'s turn.)',
      actions: [
        { name: 'Eye Ray', description: '(Range 10, roll 1d6) 1: Warping Ray (3d6, Dazed, exchange places). 2: Petrification Ray (permanently Dazed. Healing ends. 3 stacks = Petrified). 3: Terror Ray (5d10 psychic & **Terrified**). 4: Gravitation Ray (2d6 damage, push that many spaces, Prone on 7+). 5: Charm Ray (DC 16 WIL or spend 3 Actions attacking/moving, 2 on save). 6: Death Ray (DC 16 STR or drop to 0 HP. On save, gain 1 Wound. Dying creature dies if fails).' },
        { name: 'Terrible Maw', description: '(Melee attack) 4d4, EVERY die can crit and is Vicious.' }
      ],
      bloodied: 'To Dust! At 110 HP, use Petrification Ray against every enemy. His save DC increases to 18.',
      lastStand: 'Dravok is dying! 70 more damage and he dies. Until then, each turn he will move or use Warping Ray and then **Devastation Beam**. 2d12+20 in a 10 space long, 2 space wide line.'
    },
    {
      id: 'azriel', name: 'Azriel, Lord of Pain & Flame', level: 14, size: 'Huge', creatureType: 'Balor',
      hp: 320, armor: 'H', saves: 'ALL+',
      trait: '*PAIN!* Crits against Azriel are Vicious, he deals damage equal to the crit dice back to the attacker.',
      actions: [
        { name: 'Crackling Whip', description: 'Move 6. (Reach 6) 3d12 damage. On hit: Grappled and pulled adjacent to Azriel (escape DC 17 STR, DEX, or until he uses the whip again).' },
        { name: 'Doom Sword', description: '3d12+10 fire damage to all creatures within Reach 2.' }
      ],
      bloodied: 'At 160 HP, Azriel can use Crackling Whip twice each turn.',
      lastStand: 'YES, MORE PAIN! Azriel is dying! 180 more damage and he dies. Until then, EVERY hit against him is a crit.',
      script: [
        { beat: 'Opening', line: 'Tremble at your doom, mortals!' },
        { beat: 'Gaining the Upper Hand', line: 'Is this all your pathetic world can muster?' },
        { beat: 'Last Stand', line: 'I am PAIN, suffer with me!' },
        { beat: 'On Death', line: 'You cannot kill flame…' }
      ]
    },
    {
      id: 'gloomwing', name: 'Gloomwing the Cruel', level: 15, size: 'Huge', creatureType: 'Rot Dragon',
      hp: 320, armor: 'H', saves: 'ALL++',
      trait: '*Aura of Rot.* Creatures within 6 spaces take 5 necrotic damage at the end of their turns. *Light Sensitivity.* Radiant damage suppresses Aura of Rot until the end of the next hero\'s turn.',
      actions: [
        { name: 'Rot Breath', usage: '1 use', description: 'Fly 10, then (Cone 8) DC 17 DEX save or 8d10 necrotic, half on save.' },
        { name: 'Bite', description: '(Reach 2) Move 6, then 3d10. On damage: Cruelty\'s Gift (healing is halved and Vulnerable to necrotic damage; healing ends).' },
        { name: 'Claws', description: '(Reach 2) then 3d10 slashing +10 necrotic.' },
        { name: 'Tail', description: '(Reach 4) 1d10, and knocked back that many spaces.' }
      ],
      bloodied: "At 160 HP Gloomwing's Rot Breath recharges.",
      lastStand: 'Gloomwing is dying! 150 more damage and he dies. Until then, the damage and range of His Aura of Rot is doubled.'
    },
    {
      id: 'alaric', name: 'Alaric Draegoth, the Crimson Count', level: 16, size: null, creatureType: 'Vampire Lord',
      hp: 320, armor: null, saves: 'ALL++',
      trait: '*Sanguine Cloak.* (1/turn) Deal 1d10 necrotic damage whenever you are hit, the attack is reduced by this amount. *Sunscorn.* Vulnerable to radiant. After taking radiant damage, use Beguile as a Reaction, they roll with disadvantage.',
      actions: [
        { name: 'Summon Blood Bat', description: 'After each hero\'s turn: summon 1 blood bat minion (d10) within 8 spaces.' },
        { name: 'Ebonfang', description: 'Deal 1d10+15 damage, your target is considered Bloodied for 1 round. Fly 8 before or after attacking.' },
        { name: 'Beguile', description: 'If no creature is Beguiled, Beguile a target on a failed DC 18 WIL save (w/ disadvantage if Bloodied).' },
        { name: 'Beckon & Bite', description: 'Move a Beguiled creature adjacent to you and bite them: 2d10+30 damage and 1 Wound.' }
      ],
      bloodied: 'At 160 HP, gain **Mistform**. Not vulnerable to radiant. **Bat Decoy**: Whenever Alaric would take damage, instead first swap places with a bat minion, 1/round.',
      lastStand: 'Alaric is dying! 160 more damage and he dies. Until then, his Sanguine Cloak, attacks, and bats roll d20s instead of d10s.'
    },
    {
      id: 'caerys', name: 'Caerys, the Hollow Star', level: 20, size: null, creatureType: 'World-Ending Cataclysm',
      hp: 620, armor: 'H', saves: 'ALL+++',
      trait: '*Ravages of Time.* At the beginning of each round, all heroes suffer 1 Wound. *Slipstream.* 3/encounter when she would suffer any negative effect she can swap places with a creature of her choice making them the target instead. All heroes recover 1 Wound.',
      actions: [
        { name: 'Wormhole', description: 'Teleport 12. 3d20 to a creature adjacent to where you began or ended.' },
        { name: 'Immensity', description: '(Reach 12) DC 20 STR save (disadvantage if within Reach 4) or suffer 3d20 damage and Prone. Half on save.' },
        { name: 'Glimpse Your End', description: 'DC 20 WIL save or **DOOMED**: Concentration ends, the next damage roll against you is maximized.' },
        { name: 'Plasma Storm', description: 'Reach 6, DC 20 DEX save or 2d20 lightning and 2d20 fire damage. Half on save.' },
        { name: 'Singularity', description: 'Reach 2, 5d20 bludgeoning damage.' },
        { name: 'Almighty Push & Pull', description: '(Range 12) DC 20 STR save or be launched 20 ft. into the air, repeat until the target saves. Fall damage 1d20 for every 10 ft. fallen.' }
      ],
      bloodied: 'At 310 HP, **Gravitational Mastery**. Move ALL objects and creatures within 16 spaces anywhere else within the area. **Gravitational Lensing**. The hero with the most HP is marked by Caerys. She takes half damage from all sources, her mark takes the other half. Lasts until the mark drops to 0 HP.',
      lastStand: 'Use Gravitational Mastery, then Caerys is dying! 200 more damage and she dies. Until then she chooses twice each turn. If still alive after 1 round: **Reset Time**: she resets back to full HP.',
      note: 'After each hero\'s turn, choose 1 not yet chosen (reset when all have been chosen).'
    },
    {
      id: 'scorpion-queen', name: 'Scorpion Queen — Heytet-Seqat', level: 5, size: 'Large', creatureType: 'Solo Scorpion',
      hp: 115, armor: 'H', saves: 'STR++',
      trait: '*Trampling Movement.* She can move through the space of any creature smaller than her, knocking them Prone. *Vulnerable Underbelly.* Hits from Prone melee attackers auto crit on her.',
      actions: [
        { name: 'Claw', description: '3d6. On damage: Grappled (escape DC 12).' },
        { name: 'Venom Stinger', description: '(Reach 3, a creature she has advantage against) 1d6+20.' }
      ],
      bloodied: 'At 58 HP, she drips acid blood, dealing 1d6 damage to any creature she walks over.',
      lastStand: null
    },
    {
      id: 'lindworm', name: 'Lindworm', level: 4, size: 'Huge', creatureType: 'Solo Serpent',
      hp: 75, armor: 'M', saves: 'STR/DEX+',
      trait: '*Fiercely Jealous.* Attacks those nearest the Golden Egg. *Desperate Purge.* When crit, Grappled, or Bloodied: regurgitates its most recent meal.',
      actions: [
        { name: 'Constrict', description: 'Move up to 8, attack for 1d6+10, target is Grappled (escape DC 10).' },
        { name: 'Squeeze & Spit Acid', description: 'Squeeze a Grappled creature for 1d6+10 damage. Move up to 4, attack for 1d6+10 (range 8). On crit: Poisoned until healed.' }
      ],
      bloodied: null,
      lastStand: null
    }
  ],

  // -----------------------------------------------------------------------
  // Encounter building rules. Used by the encounter builder / difficulty calc.
  // -----------------------------------------------------------------------
  ENCOUNTER_RULES: {
    // Total of hero levels vs total of monster levels → difficulty
    difficultyTiers: [
      { tier: 'Easy',         pctMax: 50,  description: 'Minimal HP/resource loss. Good for pacing or feeling powerful after a level up.', budgetPerSession: '1–2' },
      { tier: 'Medium',       pctMax: 75,  description: "Some HP loss, moderate resource use. Heroes get hurt but shouldn't drop to 0.", budgetPerSession: '1–2' },
      { tier: 'Hard',         pctMax: 100, description: 'Challenging but fair. Significant resource use; some may drop to 0 HP.',        budgetPerSession: '1'   },
      { tier: 'Deadly',       pctMax: 125, description: 'Strategic teamwork required. Tough battles or campaign bosses.',                 budgetPerSession: 'Sparingly' },
      { tier: 'Very Deadly',  pctMax: Infinity, description: 'Extremely dangerous. Heroes likely need to retreat or die.',                 budgetPerSession: 'Only when telegraphed' }
    ],
    monstersPerHero: { min: 1, max: 4, note: '1–4 non-minion monsters per hero is the sweet spot.' },
    encountersPerSession: { min: 2, max: 5, note: 'Flexible. Not every session needs combat.' },
    armorVariety: { unarmored: 0.6, medium: 0.3, heavy: 0.1 },
    armorScaling: { none: 1.0, medium: 0.8, heavy: 0.6, note: 'Multiply HP by these ratios to compare armored monsters of different levels.' },
    legendaryPacing: { expectedHeroTurns: 15, extraTurnsAfterLastStand: '2-4' },
    partySizeNote: 'Legendary monster HP is based on Party Level, not number of heroes.'
  },

  // -----------------------------------------------------------------------
  // Minion / flunky rules. Separate because they affect combat UI behavior.
  // -----------------------------------------------------------------------
  MINION_RULES: {
    hp: 'No HP to track. Any damage kills a minion.',
    attack: 'Single damage die, cannot crit, miss on a roll of 1.',
    defense: 'When multiple minions attack one target, damage is combined into a single attack — Defend/Interpose applies to all at once.',
    batched: 'Minions attacking the same target should move and attack together.'
  },
  FLUNKY_RULES: {
    note: 'Flunkies are regular monsters that cannot crit. Good for low-level fights.'
  }
};

// Helpers callable from the main app.
window.GM_DATA.parseMonsterLevel = function(level) {
  if (typeof level === 'number') return level;
  if (level == null) return 0;
  const s = String(level).trim();
  if (s.includes('/')) {
    const [n, d] = s.split('/').map(Number);
    return d ? n / d : 0;
  }
  const n = Number(s);
  return isNaN(n) ? 0 : n;
};

// Given total party level & total monster level, returns difficulty tier.
window.GM_DATA.calcEncounterDifficulty = function(partyLevelTotal, monsterLevelTotal) {
  if (!partyLevelTotal) return null;
  const pct = (monsterLevelTotal / partyLevelTotal) * 100;
  const tiers = window.GM_DATA.ENCOUNTER_RULES.difficultyTiers;
  for (const t of tiers) {
    if (pct <= t.pctMax) return { tier: t.tier, pct: Math.round(pct), description: t.description };
  }
  return { tier: 'Very Deadly', pct: Math.round(pct), description: tiers[tiers.length - 1].description };
};
