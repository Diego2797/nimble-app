# Nimble Companion - PWA Project

## What This Is
A Progressive Web App (PWA) companion for the **Nimble TTRPG** system. It runs entirely in the browser, can be added to iPhone home screen like a native app, works offline, and stores all data in localStorage. The user (Diego) has zero programming experience — explain things simply when asked.

## Deployment
- **Live URL**: https://diego2797.github.io/nimble-app/
- **GitHub repo**: https://github.com/Diego2797/nimble-app (Diego2797 is the GitHub user)
- **Hosting**: GitHub Pages (free tier), source = `main` branch, path = `/`
- **Update workflow**: `git add <files> && git commit -m "msg" && git push` — Pages rebuilds automatically in ~30-60s
- **CLI tool**: `gh` (GitHub CLI, installed via Homebrew) is authenticated with Diego's account and should be used for any repo/Pages management (`gh api /repos/Diego2797/nimble-app/pages` to check build status)

## Project Vision & Goals

### Short-Term Goal
Diego's entire Nimble playgroup (his friends) should be able to use this app during live game sessions. Each player needs:
- Their own characters saved and persisted across sessions
- A rock-solid, bug-free experience on mobile (most use phones at the table)
- Full end-to-end support for character creation → leveling → spells → combat tracking

### Long-Term Goal
Pitch this app to the **creators of Nimble TTRPG** for potential official partnership/commercialization as the official companion app.

### Gap Analysis: What's Needed to Get There
To move from "Diego's personal prototype" to "shareable with the playgroup" and eventually "pitchable to Nimble creators":

**Multi-user / Shareability (Playgroup Stage)**
- [x] ~~Easy export/import of characters as JSON~~ — **DONE**: Export/Import Backup buttons in Characters tab (see Backup/Restore section below)
- [ ] Cloud sync option (optional backup, so a lost phone doesn't kill the character) — considered Firebase/Supabase but deferred; user decided to defer to after playgroup testing. Export/import JSON is the current manual workaround.
- [x] ~~App deployed publicly~~ — **DONE**: Live at https://diego2797.github.io/nimble-app/
- [x] Multiple characters per device with clear selector (works)
- [ ] Onboarding / first-run help so a non-technical friend can install the PWA and start playing in under 5 minutes (PWA install polish is the next priority Diego chose)

**Polish (Pitch-Ready Stage)**
- [ ] All 13 classes bug-free end-to-end (priority 5 classes listed below must work flawlessly)
- [ ] Full rules reference built-in (not just conditions — combat rules, leveling rules, character creation guide)
- [ ] Visually polished UI that honors the Nimble brand/aesthetic (currently uses parchment theme; if pitching, may need to align with official Nimble brand colors/fonts)
- [ ] No legal issues: all game data is transcribed from published Nimble PDFs owned by the creators. Before commercialization, Diego would need explicit permission/licensing from the Nimble creators to distribute their game content.
- [ ] App Store / Play Store listing (or at least installable PWA with manifest/icons that look good)
- [ ] Privacy policy, terms of use, and clear attribution to Nimble creators

**Technical Infrastructure (for a Real Product)**
- [ ] Actual backend (even simple) for user accounts if multi-device sync is desired
- [ ] Analytics / crash reporting so Diego knows what's breaking for users
- [ ] Version updates without wiping saved characters (current localStorage approach is fragile)

## Project Files

```
APP/
├── index.html                      # Single-file PWA (~100KB+) - ALL CSS and JS inline
├── gamedata.js                     # Complete Nimble game data (~180KB) - window.GAME_DATA
├── manifest.json                   # PWA manifest (standalone, dark theme, sword icon)
├── sw.js                           # Service worker for offline caching
├── CLAUDE.md                       # This file
├── .claude/launch.json             # Preview server config
└── reference/                      # Authoritative game data (transcribed from PDFs)
    ├── core-rules.md               # (~90KB) Full core rules: stats, skills, combat, movement, conditions, equipment, spells intro
    ├── classes.md                   # (~115KB) All 13 classes: level 1-20 features, subclasses, mana/resources, spell access
    ├── spells.md                    # (~32KB) All 80+ spells: cantrips, tiers 1-9, utility, class-specific
    └── ancestries-backgrounds.md   # (~29KB) 24 ancestries, 24 backgrounds, languages, motivations
```

### Important: Service Worker Caching
After editing `index.html` or `gamedata.js`, the browser may serve stale cached versions. To see changes in preview:
1. Clear caches: `caches.keys().then(keys => keys.forEach(k => caches.delete(k)))`
2. Hard reload: `location.reload(true)`
Or unregister SW first: `navigator.serviceWorker.getRegistrations().then(r => r.forEach(sw => sw.unregister()))`

## How to Run Locally

`.claude/launch.json` is already configured. Use `preview_start` with name `"nimble-app"` to launch on port 8765.

## Architecture

### Data Layer (`gamedata.js`)
- Exports `window.GAME_DATA` object
- All property keys are **UPPERCASE**: `STATS`, `STAT_ARRAYS`, `SKILLS`, `LANGUAGES`, `CONDITIONS`, `ANCESTRIES`, `BACKGROUNDS`, `CLASSES`, `SUBCLASSES`, `SPELLS`, `EQUIPMENT`, `ADVENTURING_MOTIVATIONS`
- `ANCESTRIES` is NOT a flat array — it's `{ common: [...], exotic: [...] }`
- `STAT_ARRAYS` is NOT an array — it's `{ standard: { name, values: [2,2,0,-1] }, balanced: {...}, minMax: {...} }`
- Classes have `levels` object with features per level: `{ 1: [{name, description}], 2: [...], ... }`
- Classes have `saves` object: `{ advantaged: 'STAT', disadvantaged: 'STAT' }`
- Classes with ability pick arrays have them as top-level arrays (e.g., `lesserInvocations`, `greaterInvocations`, `thrillOfTheHuntAbilities`, `afflictions`, `mysticMarks`, `combatTactics`, `savageArsenal`, `commandersOrders`, etc.)

### Reference Files (`reference/`)
- **These are the source of truth** for all game mechanics. They were transcribed from the original Nimble PDFs.
- When correcting gamedata.js or adding features, ALWAYS cross-reference against these files.

### UI Layer (`index.html`)
- Single file with all CSS + JS inline
- CSS variables for parchment theme: `--parchment: #f4e4c1`, `--ink: #3d2b1f`, `--burgundy: #8b1a1a`, `--gold: #c9a84c`, `--leather: #5c3d2e`
- `app` object is the main application controller with methods for navigation, rendering, state management
- `getData()` method normalizes UPPERCASE keys to lowercase and flattens data structures
- All render functions use **lowercase** property names (data.classes, data.ancestries, etc.)
- Characters stored in `localStorage` under key `nimble_characters`
- Mobile-first design (360-428px width target)

### Key Data Normalization in `getData()`:
- `CLASSES` → `classes`, `BACKGROUNDS` → `backgrounds`, etc.
- `ANCESTRIES` `{common, exotic}` → flat array with `category` field on each entry
- `STAT_ARRAYS` `{key: {name, values}}` → `{key: values_array}`

## Nimble TTRPG System — Correct Rules Summary

### Core Mechanics
- **4 Stats**: STR, DEX, INT, WIL (values typically -1 to +4)
- **10 Skills**: Might, Endurance (STR); Finesse, Stealth (DEX); Arcana, Examination, Lore (INT); Insight, Influence, Perception, Naturecraft (WIL)
- **Stat Arrays**: Standard [2,2,0,-1], Balanced [2,1,1,0], Min-Max [3,1,-1,-1]
- **d20 skill checks**: Roll d20 + stat + skill bonus vs DC
- **3-action economy**: Each turn you get 3 Actions + 1 Reaction
- **Wounds system**: Track wounds separately from HP; death at max wounds
- **Distance unit is SPACES** (NOT feet). Default speed is **6 spaces**. 1 space = 1 grid square.

### Leveling Up (from core-rules.md §18)
When a hero gains a level:
1. **HP Increase** — Roll Hit Die with advantage, increase max HP by that amount
2. **More Endurance** — Hit Die max increases by 1 (typically equals level)
3. **More Skilled** — Gain 1 skill point. May also move 1 point from one skill to another (no negatives). Max skill bonus: +12.
4. **Class Features** — Gain new class features for your level (may include mana increase, new spells, subclass at level 3)
5. **Other Adjustments** — If base stats increase, adjust skills, damage, initiative, armor, mana, languages, etc.

### 13 Classes & Their Resources

| Class | Resource | Formula | Spell Schools |
|---|---|---|---|
| Berserker | Rage (3 + STR uses) | No mana | None |
| The Cheat | Luck Dice (DEX d6s) | No mana | None |
| Commander | Commander's Orders | No mana | None (unless Arcane Command subclass) |
| Hunter | Quarry, Trap Dice | No mana | None |
| **Mage** | **Mana** | **INT x 3 + LVL** | **Fire, Ice, Lightning** (Wind via Invoker of Chaos subclass; Necrotic via Invoker of Control) |
| **Oathsworn** | **Mana** + Lay on Hands (5xLVL) | **WIL + LVL** | **Radiant only** |
| **Shadowmancer** | **Pilfered Power** (DEX uses/Safe Rest) | **NO mana pool** | **Necrotic** (Fire via Red Dragon pact; Ice via Abyssal Depths pact) |
| **Shepherd** | **Mana** | **WIL x 3 + LVL** | **Radiant, Necrotic** |
| **Songweaver** | **Mana** | **INT x 3 + LVL** | **Wind + 1 chosen school** |
| **Stormshifter** | **Mana** | **WIL x 3 + LVL** | **Lightning, Wind** (Ice or Radiant via Sky & Storm subclass) |
| Zephyr | Focus, Momentum | No mana | None |
| **Artificer** | **Mana Dice** (INT d6s→d12s) | Gained on Initiative, lost end of combat | None (Inventions/Gadgets) |
| **Hexbinder** | **Mana** + Afflictions | **WIL + LVL** | **Necrotic** |

### Spell System
- **6 Schools**: Fire, Ice, Lightning, Wind, Radiant, Necrotic
- **Each school**: 2 cantrips + Tier 1-9 spells + 3 Utility Spells
- **Cantrips**: Cost 0 mana, always available once unlocked
- **Tiered spells**: Cost mana equal to their tier (Tier 1 = 1 mana, etc.)
- **Utility spells**: Passive/situational, granted by specific class features (not freely chosen)
- All spell ranges/distances are in **SPACES** (not feet)

### Ancestries
- **Common (5)**: Human, Dwarf, Elf, Halfling, Gnome
- **Exotic (19)**: Bunbun, Birdfolk, Celestial, Changeling, Clockwork, Demon, Dragonkin, Dryad, Faun, Goblin, Hobgoblin, Kobold, Lizardfolk, Merfolk, Minotaur, Orc, Ratfolk, Tiefling, Troll

## App Sections & Navigation

### 1. Characters Tab (`renderCharacters`)
- Lists saved characters with class/ancestry/level
- "Create New Character" button → triggers `startCreation()`
- Click character → opens character sheet (`renderSheet`)

### 2. Character Sheet (`renderSheet`)
- Header: name, ancestry+class, level, height/weight/speed/HD, character image upload
- **Level Up button** — opens full interactive level-up modal (see Level-Up System below)
- **Delete Character button** — with confirmation
- Attributes: STR, DEX, INT, WIL with **editable +/- buttons**, **save indicators** (shield-up icon for advantage, shield-down for disadvantage)
- Vitals: HP +/-, **Max HP +/-**, Temp HP +/-, **editable Armor +/-**, **editable Initiative +/-**, Wounds (clickable circles), Mana +/- (shows only if maxMana > 0)
- Skills: 10 Nimble skills with bonuses (stat + skill points), **editable +/- buttons** on each skill (capped at +12)
- Abilities: expandable cards, auto-populated from Level 1 class features + ancestry trait + background mechanic, + Add Ability
- **Spells**: visible for ALL classes (with "no spells known" if empty), **remove buttons** on each spell, **+ Add Spell opens smart spell picker**
- Equipment: slot tracking, gold tracker, add/remove items
- Homebrew Items: custom items section with + Add Homebrew Item
- Campaign Notes: auto-saving textarea
- **Languages**: badge display with **+ Add / Remove buttons**

### 3. Character Creation (`renderCreation` - 8 steps)
Steps 0-7: Class → Ancestry → Background → Stats → Skills → Equipment → Details → Review
- Step 0 (Class): 13 classes as clickable cards
- Step 1 (Ancestry): Common/Exotic sections with traits displayed
- Step 2 (Background): 24 backgrounds with mechanics in burgundy text
- Step 3 (Stats): 3 stat arrays, 4 dropdowns for STR/DEX/INT/WIL — **tracks by index** to prevent duplicate value selection
- Step 4 (Skills): 10 skills with +/- buttons, 4 bonus points to distribute
- Step 5 (Equipment): Class-specific starting gear from `startingGear` field
- Step 6 (Details): Name, Height, Weight, Adventuring Motivation, Character Image upload
- Step 7 (Review): Summary of all choices, "Save Character" button

### 4. Combat Tracker (`renderCombat`)
- 3 Action tokens + Reactions section + End Turn / New Round
- Roll Initiative button + Quick HP tracker
- Conditions toggles

### 5. Dice Roller (`renderDice`)
- Die selector: d4, d6, d8, d10, d12, d20, d100
- Number of dice +/-, Advantage/Normal/Disadvantage toggle
- Roll button + Roll Stat Array + Roll History

### 6. Rules Reference (`renderRules`)
- Search bar, Conditions, Combat Actions, Reactions, Resting Rules

## Level-Up System (Enhanced)

The level-up system is a comprehensive interactive modal opened via `app.levelUp()`. It handles all aspects of leveling up in one flow.

### Feature Categorization (`categorizeFeature`)
Each class feature at the new level is categorized into one of 5 types:
- **`subclass`** — Feature named "Subclass" → renders subclass selection UI
- **`subclassFeature`** — Feature whose name matches a known subclass → only shown if character has that subclass
- **`statIncrease`** — Description contains "Increase a stat by 1" → renders stat picker (+1 to chosen stat)
- **`abilityChoice`** — Feature maps to a `CHOICE_ARRAYS` entry AND description contains "choose" or "learn" → renders interactive picker from class data array
- **`auto`** — Everything else → automatically added to abilities

### CHOICE_ARRAYS Mapping
Maps feature names to the class data property that contains the options:
```javascript
CHOICE_ARRAYS: {
  'Thrill of the Hunt': 'thrillOfTheHuntAbilities',
  'Combat Tactic': 'combatTactics',
  'Savage Arsenal': 'savageArsenal',
  "Commander's Order": 'commandersOrders',
  'Fighting Style': 'fightingStyles',
  'A Gift from the Master': 'greaterInvocations',
  'Lesser Invocation': 'lesserInvocations',
  'Affliction': 'afflictions',
  'Mystic Mark': 'mysticMarks',
  // ... more as needed
}
```

### numChoices Regex
Extracts how many picks a feature grants:
```javascript
/(?:Choose|Learn)\s+(\d+)(?!st|nd|rd|th)\s/i
```
- "Choose 2 Thrill of the Hunt abilities" → 2
- "Learn a 3rd Affliction" → 1 (ordinal, not quantity)
- "Choose 1 Lesser Invocation" → 1

### Parent Feature Descriptions
When a feature has both a "Choose X..." instruction and additional mechanic text, the mechanic text is extracted and added as a separate ability. The regex strips the "Choose/Learn X..." prefix:
```javascript
const stripped = description.replace(/^(?:Choose|Learn)\s+(?:a\s+)?(?:\d+(?:st|nd|rd|th)?\s+)?[^.]+\.\s*/i, '').trim();
```

### Level-Up Modal Sections
1. **HP Roll** — Digital (auto-roll 2 dice with advantage, re-roll button) OR manual (toggle to input physical dice results). Both modes take the higher of 2 rolls.
2. **Endurance Reminder** — Hit Dice max = new level
3. **Skill Point** — Pick any skill to increase by +1
4. **Skill Swap** — Optional: move 1 point from one skill to another (no negatives)
5. **Class Features** — Categorized rendering per feature type:
   - Subclass picker (level 3)
   - Stat increase picker
   - Ability choice picker (with multi-select for numChoices > 1)
   - Auto features listed
   - Subclass-specific features (filtered by character's subclass)
6. **New Spells Preview** — Shows "New Spells Unlocked" with auto-loaded spells (see SPELL_PROGRESSION)
7. **Confirm / Cancel** — Validates all required picks before enabling confirm

### levelUpState Object
```javascript
{
  newLevel, dieSize, roll1, roll2, hpGain,
  manualHP: false, manualHPValue: '',       // Manual dice input
  skillPoint: null, swapFrom: null, swapTo: null,
  features: [],                              // categorized features
  chosenAbilities: {},                       // { featureIndex: [selectedName, ...] }
  subclass: null,                            // chosen subclass name
  statIncrease: null,                        // chosen stat to +1
}
```

## SPELL_PROGRESSION System

Automatic spell loading on level-up for caster classes. Defined in `app.SPELL_PROGRESSION`:

```javascript
SPELL_PROGRESSION: {
  'Mage':         { baseSchools: ['fire','ice','lightning'], tierLevels: {0:1,1:2,2:4,3:6,4:8,5:10,6:12,7:14,8:16,9:18}, subclassSchools: { 'Invoker of Chaos': ['wind'], 'Invoker of Control': ['necrotic'] } },
  'Oathsworn':    { baseSchools: ['radiant'], tierLevels: {0:2,1:2,2:4,3:6,4:8,5:10,6:13,7:17}, subclassSchools: {} },
  'Shadowmancer': { baseSchools: ['necrotic'], tierLevels: {0:1,1:2,2:5,3:7,4:10,5:13,6:16,7:19}, subclassSchools: { 'Pact of the Red Dragon': ['fire'], 'Pact of the Abyssal Depths': ['ice'] } },
  'Shepherd':     { baseSchools: ['radiant','necrotic'], tierLevels: {0:1,1:2,2:4,3:6,4:8,5:10,6:12,7:14,8:16,9:18}, subclassSchools: {} },
  'Songweaver':   { baseSchools: ['wind'], tierLevels: {0:1,1:2,2:4,3:6,4:8,5:10,6:12,7:14,8:16,9:18}, subclassSchools: {} },
  'Stormshifter': { baseSchools: ['lightning','wind'], tierLevels: {0:1,1:2,2:4,3:6,4:8,5:10,6:12,7:14,8:16,9:18}, subclassSchools: {} },
  'Hexbinder':    { baseSchools: ['necrotic'], tierLevels: {0:1,1:2,2:4,3:6,4:8,5:10,6:12,7:14,8:16,9:18}, subclassSchools: { 'Circle of Thorns': ['wind'], 'Circle of Shadows': ['ice'] } },
}
```

### Helper Methods
- `getCharacterSchools(ch)` — Returns array of accessible school names based on class + subclass + `ch.songweaverSchool` / `ch.stormshifterSchool`
- `getMaxSpellTier(ch)` — Returns highest spell tier accessible at character's level
- `autoLoadSpells(ch)` — Returns full spell array: cantrips + tiered spells from all accessible schools + class-specific spells + hexbinder spells. Replaces character's spell list on level-up.

### Songweaver & Stormshifter Extra Schools
- Songweaver gets Wind + 1 player-chosen school stored in `ch.songweaverSchool` (not yet implemented in creation flow)
- Stormshifter (Sky & Storm subclass) gets 1 extra school stored in `ch.stormshifterSchool` (not yet implemented in creation flow)

## Smart Spell Picker (`renderSpellPicker`)
The spell picker is a modal with 3 tabs:
1. **Spells Tab** — filters by school and tier, shows all spells from GAME_DATA
2. **Utility Tab** — shows utility spells from each school
3. **Homebrew Tab** — manual entry form for custom spells

Features:
- Search bar across all spells
- School filter buttons (Fire, Ice, Lightning, Wind, Radiant, Necrotic)
- Tier filter
- **Warning system**: Shows alerts if a spell doesn't match the character's class schools (but doesn't block)
- `CLASS_SCHOOLS` mapping in index.html defines which schools each class can access
- Subclass-based spell access is handled by `SPELL_PROGRESSION.subclassSchools` during auto-loading

## Key Code Patterns

### State Management
```javascript
app.state = {
  currentView: 'characters', // characters | sheet | creation | combat | dice | rules
  selectedCharacterId: null,
  characters: [],
  creation: null,
  combat: { actions: [false,false,false], reactions: {}, conditions: {} },
  dice: { selectedDie: 20, numDice: 1, advantage: 'normal', history: [] },
  rulesSearch: ''
}
```

### Character Object Structure
```javascript
{
  id: 'unique_id',
  name: 'Aelindra',
  className: 'Mage',
  ancestry: 'Elf',
  background: 'Academy Dropout',
  level: 1,
  stats: { STR: -1, DEX: 0, INT: 2, WIL: 2 },
  saves: { advantaged: 'INT', disadvantaged: 'STR' },
  skillBonuses: { Arcana: 2, Perception: 1, ... },
  hp: 9, maxHp: 9,
  tempHp: 0,
  armor: 0,                          // Legacy/manual armor (used when no equipped gear; calculateArmor falls back to this)
  armorMod: 0,                       // Manual modifier on top of auto-calc (e.g., Fearless -1)
  hitDiceMaxMod: 0,                  // Additive mod to max hit dice (Survivalist +1, Fiendish Boon -1)
  initiative: 0,
  wounds: 0,
  mana: 7, maxMana: 7,
  hitDice: 'd6',                     // Die size as string
  currentHitDice: 4,                 // Current hit dice available (auto-set when missing)
  speed: 6,                          // IN SPACES (not feet!)
  height: "5'8\"", weight: '130 lbs',
  motivation: 'Seeking lost arcane knowledge',
  image: null,                       // base64 data URI
  abilities: [{ name: 'Elemental Spellcasting', description: '...' }, ...],
  spells: [],                        // Mix of tiered spells, cantrips, utility (isUtility: true)
  inventory: [
    // New shape (categorized, April 2026):
    { name: "Adventurer's Garb", slots: 1, category: 'armor', formula: { base: 2, statMod: 'DEX' }, equipped: true },
    { name: 'Sickle', slots: 1, category: 'weapon', damage: '1d4+DEX', damageType: 'Slashing', properties: ['Vicious'], equipped: true },
    { name: 'Shovel', slots: 1, category: 'other' }
  ],
  homebrew: [],
  notes: '',
  languages: ['Common', 'Elvish'],
  gold: 10,
  subclass: null,                    // Set at level 3 during level-up (e.g., 'Wild Heart', 'Pact of the Red Dragon')
  chosenAbilities: {},               // Tracks which abilities were picked: { 'thrillOfTheHuntAbilities': ['Grease Trap', 'Incendiary Shot'] }
  songweaverSchool: null,            // Extra school chosen by Songweaver at creation (e.g., 'fire')
  stormshifterSchool: null,          // Extra school chosen by Stormshifter Sky & Storm subclass (e.g., 'ice' | 'radiant')
  fiendishBoonStat: null,            // Shadowmancer's Fiendish Boon: chosen stat for +1 / -1 max hit dice
}
```

### App state shape (non-persistent fields)
```javascript
app.state = {
  currentView: 'characters',          // characters | sheet | creation | combat | dice | rules
  selectedCharacterId: null,
  characters: [],                     // PERSISTED to localStorage under 'nimble_characters'
  editMode: false,                    // Gates sheet editing UI (not persisted)
  creation: null,                     // Transient creation state (see startCreation)
  combat: { actions: [false,false,false], reactions: {}, conditions: {}, inFirstRound, firstRoundLockedActions },
  dice: { selectedDie, numDice, advantages, disadvantages, history },
  rulesSearch: ''
}
```

### Key Methods
```javascript
// Core
app.updateChar({ hp: newValue })       // Updates current character + saves to localStorage
app.save()                              // Persists app.state.characters to localStorage
app.navigate('view')                    // Switch views (calls render(true) to scroll to top)
app.render(scrollToTop)                 // Re-renders current view; only scrolls if scrollToTop=true
app.resolveStats(cr, data)              // Converts stat assignment indices to actual values
app.showModal(content)                  // Show/update modal (reuses existing overlay)

// Character Sheet Editing
app.adjustMaxHP(delta)                  // Edit max HP from sheet
app.adjustSkillBonus(skill, delta)      // Edit skill bonus points from sheet
app.adjustStat(stat, delta)             // Edit stat from sheet
app.adjustArmor(delta)                  // Edit armor from sheet
app.adjustInitiative(delta)             // Edit initiative from sheet
app.addLanguage()                       // Prompt + add language
app.removeLanguage(i)                   // Remove language by index
app.removeSpell(i)                      // Remove spell by index
app.deleteCharacterFromSheet()          // Delete with confirmation

// Spell System
app.renderSpellPicker()                 // Open smart spell picker modal
app.addSpellFromPicker(sp)              // Add spell from picker data
app.getCharacterSchools(ch)             // Get accessible spell schools for character
app.getMaxSpellTier(ch)                 // Get highest spell tier at character's level
app.autoLoadSpells(ch)                  // Auto-load all accessible spells for character

// Level-Up System
app.levelUp()                           // Opens interactive level-up modal
app.renderLevelUpModal()                // Re-renders modal content (called after state changes)
app.confirmLevelUp()                    // Applies all level-up changes to character
app.categorizeFeature(f, i, ch)         // Classifies a feature into subclass/statIncrease/abilityChoice/utilitySpellChoice/utilityAll/utilityAllPickSchool/auto. Needs `ch` for dynamic school resolution.
app.toggleLevelUpAbility(fi, name)      // Toggle ability selection in level-up picker
app.setLevelUpSubclass(name)            // Set subclass choice in level-up
app.setLevelUpStat(stat)                // Set stat increase choice in level-up
app.setLevelUpStormshifterSchool(s)     // Set Sky & Storm extra school (ice/radiant)
app.toggleUtilitySchoolPick(fi, s, n)   // Mage Elemental Mastery style: pick schools to learn all utility from
app.toggleManualHP()                    // Toggle between digital and manual HP dice input
app.setManualHP(index, value)           // Set manual HP die value (index 0 or 1)

// Equipment & Armor System
app.calculateArmor(ch)                  // Returns { total, breakdown, isAuto }. Handles equipped armor formula, shield bonus, Zephyr Iron Defense, armorMod
app.getCharacterAttacks(ch)             // Returns array of equipped weapons + unarmed strike with resolved damage display
app.enrichInventoryItem(name, eq)       // Matches name against EQUIPMENT presets, returns categorized item
app.toggleEquipped(i)                   // Equip/unequip item by inventory index (auto-unequips others of same category for armor/shield)
app.addItemModal(editIdx)               // Open add/edit item modal with category picker
app.renderAddItemModal()                // Re-render the add item modal (called after state changes)
app._applyItemPreset(idxStr)            // Apply a preset from the preset dropdown (index-based)
app._saveItemFromDraft()                // Save from modal state

// Edit Mode
app.toggleEditMode()                    // Toggle state.editMode which gates add/remove UI on sheet

// Backup / Restore
app.exportCharacters()                  // Download all characters as nimble-backup-YYYY-MM-DD.json
app.importCharactersPrompt()            // Open hidden file picker for JSON import
app.importCharactersFromFile(event)     // Handler for file input onchange
app.renderImportModal()                 // Conflict resolution modal (replace/keepBoth/skip)
app.confirmImport(strategy)             // Apply the import with chosen strategy

// Subclass Swap (Story Transition)
app.changeSubclassModal()               // Opens Story Transition modal (if eligible)
app.selectSubclassForSwap(index)        // Pick an option from step 1
app.confirmSubclassSwap()               // Applies the swap (handles blocksClassSpecific, grantsClassSpecific, removesClassAbilities)
app._computeSubclassDiff(ch, oldName, newSub) // Computes { abilitiesToRemove, abilitiesToAdd, lostSchools, gainedSchools, classSpecificLost, classSpecificGained }
```

### Save Indicator Normalization (in renderSheet)
Character saves stored as `{ advantaged: 'DEX', disadvantaged: 'INT' }` are normalized for display:
```javascript
const rawSaves = ch.saves || classData?.saves || {};
const saves = {};
if (rawSaves.advantaged) saves[rawSaves.advantaged] = 'advantage';
if (rawSaves.disadvantaged) saves[rawSaves.disadvantaged] = 'disadvantage';
['STR','DEX','INT','WIL'].forEach(s => { if (rawSaves[s]) saves[s] = rawSaves[s]; });
```
Then each stat card shows a shield icon: green up-arrow for advantage, red down-arrow for disadvantage.

## Data Corrections Status

### All Completed
- [x] **Distance Units**: All "ft"/"feet" converted to "spaces" (1 space = 5 feet). Default speed = 6.
- [x] **Spell Data**: All 6 schools rebuilt — 2 cantrips each, correct tiers, 3 utility spells each, hexbinder spells rewritten.
- [x] **Ancestry Data**: All 24 ancestries corrected against reference.
- [x] **Background Data**: All 24 backgrounds corrected against reference.
- [x] **CLASS_SCHOOLS Mapping**: Fixed in index.html — correct schools for all caster classes, Oathsworn added.
- [x] **All 13 Classes Levels 1-20**: Every class has been corrected against `reference/classes.md` with proper features for all 20 levels.
- [x] **All Subclasses — audited April 2026**: After discovering widespread fabrication, every subclass in `GAME_DATA.SUBCLASSES` was cross-checked against `reference/classes.md` and rewritten with the real features. Full list:
  - **Berserker**: Path of the Mountainheart (Stone's Resilience, Unbreakable, Titan's Fury, Mountain's Endurance), Path of the Red Mist (Blood Frenzy, Unstoppable Brutality, Opportunistic Frenzy, Onslaught)
  - **The Cheat**: Tools of the Silent Blade (Amidst All This Commotion, Cunning Strike, Professional Skulker, KILL), Tools of the Scoundrel (Low Blow, Pocket Sand, Escape Plan, Heads I Win Tails You Lose)
  - **Commander**: Champion of the Bulwark (Armor Master, Juggernaut, Taunting Strike, Shield Wall), Champion of the Vanguard (Advance, Experienced Commander, Survey the Battlefield, As One)
  - **Hunter**: Keeper of the Shadowpath (Ambusher, Primal Predator, Pack Hunter, Apex Predator), Keeper of the Wild Heart (Impressive Form, Resourceful Herbalist, Ha I'm Over Here, Unparalleled Survivalist)
  - **Mage**: Invoker of Control (Force of Will, At Any Cost, Steel Will, Supreme Control), Invoker of Chaos (Force of Chaos, Tempest Mage, Thrive in Chaos, Master of Chaos)
  - **Oathsworn**: Oath of Vengeance + Oath of Refuge — reference incomplete, marked as `(placeholder)` with a note asking the GM for canonical features
  - **Shadowmancer**: Pact of the Red Dragon, Pact of the Abyssal Depths, Reaver — already correct, not changed
  - **Shepherd**: Luminary of Mercy (Merciful Healing + Life is Beautiful, Conduit of Light, Powerful Healer, Empowered Conduit), Luminary of Malice (Soul Reaper + Harbinger of Decay, Veilwalker's Blessing, Deathbringer's Touch, Conduit of Death)
  - **Songweaver**: Herald of Snark (Opportunistic Snark, Fight Picker, Chord of Chaos, Words Like Swords), Herald of Courage (Inspiring Presence, Unfailing Courage, Fire in my Bones, Chorus of Champions)
  - **Stormshifter**: Circle of Sky & Storm (Deepening Study + Creature of the Fey + Attuned to Nature, Raging Tempest, Primordial Force, Master of Storm), Circle of Fang & Claw (Swiftshift + Windborne Protector + Friend of Beasts, Unleash the Beast + Storm Wake, Master of Forms + Venomous Gaze, Master of Forms 2)
  - **Zephyr**: Way of Pain, Way of Flame — already correct, not changed
  - **Hexbinder**: Circle of Thorns, Circle of Shadows — already correct, not changed
  - **Artificer**: subclasses unchanged (reference may itself be fabricated from the 1.3 beta PDF — flagged for future PDF verification)
  - **Story-based**: Oathbreaker, Spellblade, Beastmaster rewritten against reference; Reaver duplicate removed from `storyBased` (correct Reaver lives in `SUBCLASSES.shadowmancer[2]`)
- [x] **Class Ability Arrays**: All pick-from arrays added to class data (e.g., `thrillOfTheHuntAbilities`, `combatTactics`, `savageArsenal`, `commandersOrders`, `fightingStyles`, `lesserInvocations`, `greaterInvocations`, `afflictions`, `mysticMarks`).
- [x] **Class Saves**: All 13 classes have `saves: { advantaged: 'STAT', disadvantaged: 'STAT' }` in gamedata.js.
- [x] **Shadowmancer**: Complete rewrite — all 20 levels, Lesser Invocations (10), Greater Invocations (11), subclasses (Red Dragon, Abyssal Depths, Reaver). Pilfered Power (no mana). Level 3 split into separate "Subclass" + "Lesser Invocation" features.

## Retrain Feature System (Supplicate / Serve / ...)

Each class has a feature (the "callout box" in the PDF) that lets the player re-choose their class picks during a Safe Rest. It works like a class-scoped "retrain". All 11 core classes have one:
- **Berserker — Wrath & Ruin** (L4, ⚔): swaps Savage Arsenal
- **The Cheat — Trade Secrets** (L4, ♠): swaps Underhanded Abilities
- **Commander — Rigorous Training** (L2, ✠): swaps Commander's Orders + Combat Tactics
- **Hunter — Remember the Wild** (L2, 🌲): swaps Thrill of the Hunt abilities
- **Mage — Study!** (L4, 📚): swaps Spellshaper abilities
- **Oathsworn — Serve Selflessly** (L3, ⚖): swaps Sacred Decrees
- **Shadowmancer — Supplicate** (L3, ☠): swaps Lesser + Greater Invocations
- **Shepherd — Serve** (L5, ☀): swaps Sacred Graces
- **Songweaver — Perform!** (L4, ♪): swaps Lyrical Weaponry
- **Stormshifter — Be Wild** (L6, 🐺): swaps Chimeric Boons
- **Zephyr — Focus** (L4, ☯): swaps Martial Arts

Hexbinder and Artificer do not have a retrain feature defined (they come from expansion books and are hidden from character creation).

**Implementation**: classes declare this via two top-level fields in gamedata:
```javascript
{
  name: "Shepherd",
  retrainFeature: {
    name: "Serve",
    description: "...",
    icon: "☀"  // shown on the retrain button
  },
  retrainArrays: ["sacredGraces"],   // which chosenAbilities keys can be retrained
  ...
}
```
The app auto-adds a retrain button next to "+ Add Ability" on the character sheet whenever the character has the retrain feature in their abilities list. `app.retrainModal()` renders a generic swap UI for all declared arrays. Shadowmancer's Fiendish Boon stat bonus is handled as a special case (Fiendish Boon is the only "Greater Invocation" that grants a permanent stat change).

### Class visibility in character creation
Hexbinder and Artificer are filtered out of the class picker via a `HIDDEN_CLASSES` array in `renderStepClass()`. Their data remains intact in gamedata.js for future use.

## Equipment System (added April 2026)

### Data model (gamedata.js EQUIPMENT)
```javascript
EQUIPMENT: {
  weapons: {
    melee: [
      { name: "Dagger", damage: "1d4+DEX", damageType: "Piercing", statUsed: "DEX", properties: ["Light", "Thrown 4"], cost: "3 gp" },
      // ...
    ],
    ranged: [ /* similar */ ]
  },
  armor: {
    cloth:   [{ name: "Adventurer's Garb", formula: { base: 2, statMod: "DEX" }, cost: "10 gp", requirements: "None" }, ...],
    leather: [{ name: "Cheap Hides", formula: { base: 3, statMod: "DEX" }, ... }, ...],
    mail:    [{ name: "Rusty Mail", formula: { base: 6, statMod: "DEX", statMax: 2 }, ... }, ...],  // statMax caps the bonus
    plate:   [{ name: "Rusty Plate", formula: { base: 10 }, ... }, ...]  // flat, no stat mod
  },
  shields: [{ name: "Wooden Buckler", shieldArmor: 2, cost: "5 gp", requirements: "None" }, ...]
}
```

### Inventory item shape
```javascript
{
  name: "Adventurer's Garb",
  slots: 1,
  category: 'weapon' | 'armor' | 'shield' | 'other',
  equipped: true,  // only meaningful for weapon/armor/shield
  // Weapon fields:
  damage: "1d4+DEX",       // format: "NdX+STAT" — stat resolved at render time
  damageType: "Slashing",
  properties: ["Light", "Thrown 4"],
  // Armor fields:
  formula: { base: 2, statMod: 'DEX', statMax: 2 },  // statMax optional
  // Shield fields:
  shieldArmor: 2
}
```

### Armor auto-calc (calculateArmor)
- **Legacy fallback**: if no categorized armor/shield equipped AND no Zephyr Iron Defense, returns `ch.armor` as manual value (backward compat).
- **Auto mode triggers when**: any equipped armor, equipped shield, OR Zephyr with Iron Defense ability.
- **Formula**: `equippedArmor (applies formula with stat+max)` + `equippedShield.shieldArmor` + `ch.armorMod`
- **Zephyr Iron Defense** (L1): while unarmored, armor = STR+DEX (overrides default DEX).
- **Zephyr Iron Defense (2)** (L13): while unarmored, armor is doubled.
- **armorMod** is where background bonuses (Fearless -1) and manual +/- live. `adjustArmor` writes to `armorMod` when auto-calc is active, else to `ch.armor` (legacy path).

### Attacks display (getCharacterAttacks)
- Iterates equipped weapons, parses `"NdX+STAT"` damage, resolves to actual value (e.g., Pip DEX 2 + Sickle "1d4+DEX" → "1d4+2 (DEX)").
- Always appends **Unarmed Strike** (1d4+STR bludgeoning). Zephyr's Swift Fists adds a "no Rushed Attack disadvantage" note.
- Shown in Combat tab as "🏹 Attacks" section.

### Starting gear flow (creation)
- **"Use class defaults"** mode: iterates `classData.startingGear` (array of strings), runs `enrichInventoryItem` on each. First weapon/armor/shield are auto-equipped.
- **"50gp to buy"** mode: Step 5 shows weapon/armor/shield dropdowns from presets + manual other items list. Saved into `cr.customGear = { weapon, armor, shield }`.

### Add Item modal
- `addItemModal` opens; `_itemDraft` holds the in-progress item.
- Preset dropdowns are **index-based** (not JSON-encoded values — avoids HTML escaping issues).
- `_itemPresets = { weapon: [...], armor: [...], shield: [...] }` is rebuilt on every render.
- Category-specific fields appear conditionally.

## Edit Mode System

`state.editMode` is a boolean that gates editing UI on the character sheet. Button in sheet header "✎ Edit Character" / "✎ Done Editing" (gold when active).

**Gated behind edit mode** (hidden when not editing):
- +/- buttons on stats, Max HP, Armor, Initiative, skills
- `+ Add Ability / Spell / Homebrew / Item / Language`
- `×` remove buttons on spells, inventory items, languages, homebrew
- Inventory add row + language add row
- Delete Character button

**Always visible** (gameplay features, not editing):
- Gameplay +/- on current HP, Temp HP, Mana, Wounds, Hit Dice
- Tap-to-adjust gold
- Equip/Unequip buttons on inventory (gameplay action, not editing)
- Retrain button (Supplicate / Serve / etc. — class feature)
- Level Up, Combat, Story Transition buttons

## Backup / Restore (JSON export/import)

### Export
- `exportCharacters()` builds envelope: `{ app: 'nimble-companion', schemaVersion: 1, exportedAt, characters: [...] }`
- Triggers browser download as `nimble-backup-YYYY-MM-DD.json`
- Toasts count of exported characters.

### Import
- `importCharactersPrompt()` → opens hidden `<input type="file" id="charImportInput">`
- `importCharactersFromFile(event)` reads the file, parses JSON. Accepts envelope format OR a bare characters array.
- Validates each entry has id + name + className. Stores as `_pendingImport`.
- Opens `renderImportModal` with conflict summary.
- Conflict resolution: **Replace** (overwrite local), **Keep Both** (duplicate with new id + "(imported)" suffix), **Skip** (only add new ones).
- `confirmImport(strategy)` applies and toasts what happened.

### UI location
- Both buttons are in the Characters tab list view, below "Create New Character": **💾 Export Backup** / **📁 Import Backup**.
- Export hidden when no characters exist; Import always available.

## Service Worker

- **File**: `sw.js`
- **Version**: `v6` (bump CACHE_NAME to force old clients to purge cache on `activate`)
- **Strategy**: stale-while-revalidate (was cache-first in v5, which caused "deployed but phones still show old version" issues)
  - Serves cached response instantly (fast, offline)
  - Simultaneously fetches fresh, updates cache for next visit
  - Max lag: 1 visit behind latest
- **Cached assets**: `./`, `./index.html`, `./gamedata.js`, `./manifest.json` (reference/ not cached — larger, not needed offline)

## Subclass Swap System (Story Transitions)

Nimble RAW allows players to swap subclasses mid-campaign ONLY for story-based subclasses, triggered by narrative events like losing a patron, breaking an oath, or forming an extraordinary bond with a beast. Swapping between standard subclasses (e.g., Red Dragon ↔ Abyssal Depths) is **not** RAW-legal — the L3 subclass choice is otherwise permanent. The rule quote from `reference/classes.md`:

> "These are special subclasses chosen at pivotal moments in a story, at the GM's discretion. They can be chosen at any point in a campaign when a story demands it, replacing your existing subclass."

### The 4 story-based subclasses

| Class | Story-Based Subclass | Narrative Trigger |
|---|---|---|
| Shadowmancer | **Reaver** | Cut off from your patron |
| Oathsworn | **Oathbreaker** | Fallen, seeking redemption |
| Commander | **Spellblade** | Steel meets spell |
| Hunter | **Beastmaster** | Extraordinary bond with a beast |

All 4 live in `GAME_DATA.SUBCLASSES.storyBased`. They are NOT in the class-specific `SUBCLASSES[classKey]` arrays, so they don't appear as L3 subclass options during character creation or level-up — only through the Story Transition modal.

### Allowed swap directions

The modal only permits crossing the standard ↔ story-based boundary:
- **Standard → Story-based**: the normal case (e.g., Pact of Red Dragon → Reaver after losing your patron)
- **Story-based → Standard**: a narrative reversal (e.g., Reaver → Pact of Red Dragon if the GM allows reconciliation)

Never allowed: Standard ↔ Standard (e.g., Red Dragon → Abyssal). If a player realizes they mis-picked at L3, the character must be rebuilt manually.

### Implementation

**Button**: A "🔄 Story Transition" button appears in the character sheet header next to "Level Up" and "Combat", but ONLY when `app.hasSubclassSwapOption(ch)` returns true — i.e., the character's class has at least one valid story-based target (or they're currently in a story-based subclass and can revert). Classes without a story-based option (Shepherd, Berserker, Mage, Stormshifter, Songweaver, The Cheat, Zephyr, Artificer, Hexbinder) never see the button.

**Modal flow (`app.changeSubclassModal`)**:
1. **Step 1 — Choose**: title and options depend on current subclass type:
   - Currently **Standard** → title "Story Transition", shows only story-based options for the class (e.g., Shadowmancer Abyssal → [Reaver])
   - Currently **Story-based** → title "Revert Subclass", shows all standard subclasses of the class (e.g., Reaver → [Red Dragon, Abyssal Depths])
   - Story-based options tagged with a gold "STORY-BASED" badge
2. **Step 2 — Confirm**: shows a diff preview:
   - ⊖ **Removed** (burgundy): abilities from the old subclass at levels ≤ current level (`features.base` + level-gated features ≤ `ch.level`)
   - ⊕ **Gained** (green): abilities from the new subclass at the same level tier
   - ✨ **Spells affected**: lost schools, gained schools, class-specific block warnings
3. **Confirm** → applies changes atomically via `app.confirmSubclassSwap()`

**Helper methods**:
- `app._getSubclassSwapOptions(ch)` — returns `{ options, currentIsStory }`; filters by class + boundary rule
- `app.hasSubclassSwapOption(ch)` — convenience wrapper, drives button visibility

### What gets preserved vs changed

**Preserved**: level, max HP, current HP, wounds, stats, skills, skill bonuses, utility spells (user-chosen), homebrew spells (no `school` field), non-subclass abilities (class features L1-L18, ancestry, background, sacred graces / invocations already picked), equipment, gold, notes, languages, hit dice.

**Changed**:
- `ch.subclass` field
- Abilities granted by old subclass → removed
- Abilities granted by new subclass (up to current level) → added
- Base class abilities listed in new subclass's `removesClassAbilities` → removed (e.g., Reaver strips Pilfered Power because Hollow One replaces it)
- Base class abilities stripped by the old subclass but NOT by the new one → **restored** from `classData.levels` (most recent definition ≤ char level)
- Spells from schools the old subclass granted but new one doesn't → removed (e.g., Abyssal → Reaver loses ice school)
- New schools from new subclass → auto-loaded via `autoLoadSpells` (e.g., Red Dragon adds fire cantrips + tier-appropriate fire spells)
- Class-specific spells listed in new subclass's `blocksClassSpecific` → removed (e.g., Reaver blocks only `['Shadow Blast']`)
- Class-specific cantrips granted by old subclass but NOT the new one → removed (e.g., Bonescythe removed when reverting from Reaver)
- Class-specific cantrips granted by new subclass → loaded via `autoLoadSpells` (respects `requiresSubclass` on spells)

### Special flags on subclasses

Subclasses in gamedata can have:
- **`blocksClassSpecific: ['SpellName', ...]`** (preferred) — array of specific class-specific spell names to block. E.g., Reaver: `['Shadow Blast']` (blocks Shadow Blast but keeps Summon Shadow).
- **`blocksClassSpecific: true`** (legacy) — blocks ALL class-specific spells. Kept for backward compat, not recommended.
- **`grantsClassSpecific: ['SpellName', ...]`** — subclass-granted class-specific spells. E.g., Reaver: `['Bonescythe']`. Each referenced spell must exist in `GAME_DATA.SPELLS.classSpecific.spells` with matching `class` + `requiresSubclass` field.
- **`removesClassAbilities: ['Ability Name', ...]`** — base class abilities this subclass explicitly strips. E.g., Reaver: `['Pilfered Power']` (replaced by Shadow Exploit). The ability is removed during swap and restored if reverting.

### Class-specific spell shape
```javascript
{ name: "Bonescythe", tier: 0, actions: 1, reach: "2 spaces", damage: "2d12+DEX Slashing/Necrotic",
  description: "...", class: "Shadowmancer",
  requiresSubclass: "Reaver"  // Only loaded when char's subclass matches
}
```

### Story-based subclass data shape

Story-based subclasses have extra `features.base[]` (non-level-gated features always active) in addition to the level-keyed entries. Example:
```javascript
{
  name: "Oathbreaker",
  className: "Oathsworn",
  description: "Fallen, Seeking Redemption.",
  features: {
    base: [
      { name: "Dark Benediction", description: "..." },
      { name: "Paragon of Power", description: "..." },
      { name: "Aura of Suffering", description: "..." }
    ],
    3: [{ name: "We All Suffer", description: "..." }, { name: "Bring Me Your Pain", ... }],
    7: [{ name: "Torment", ... }],
    11: [{ name: "Exploit", ... }],
    15: [{ name: "Bloody Terror", ... }]
  }
}
```
`_computeSubclassDiff` merges base + level-gated features when computing what the character should gain.

### Key methods
```javascript
app.changeSubclassModal()              // Opens modal (step 1)
app.selectSubclassForSwap(index)       // Pick an option → step 2
app.backToSubclassSwapList()           // Step 2 → step 1
app.confirmSubclassSwap()              // Apply the swap
app._getSubclassSwapOptions(ch)        // Returns {options, currentIsStory} filtered by RAW boundary rule
app.hasSubclassSwapOption(ch)          // True if button should be visible
app._computeSubclassDiff(ch, oldName, newSub)  // Helper: returns {abilitiesToRemove, abilitiesToAdd, lostSchools, gainedSchools, classSpecificChange}
app.getSubclassData(ch)                // Looks up current subclass in SUBCLASSES[classKey] or SUBCLASSES.storyBased
```

### Edge case: swapping without losing campaign progress
This is the RAW-legal way to handle story events like "you lose your patron, become a Reaver" WITHOUT leveling down. Level, HP, stats, and skills all stay intact. Contrast with a hypothetical "undo last level-up" feature (not implemented) which would be for correcting misclicks during level-up.

## Priority Classes for Testing

The app is being tested with a real campaign group. These 5 classes MUST work correctly end-to-end (creation, level-up, abilities, spells, all features):

1. **The Cheat** — Luck Dice, no mana
2. **Shadowmancer** — Pilfered Power, Lesser/Greater Invocations, Supplicate, subclass-based spell schools
3. **Shepherd** — Mana (WIL x 3 + LVL), Radiant+Necrotic cantrips at L1, Searing Light, Lifebinding Spirit, Sacred Graces
4. **Stormshifter** — Mana (WIL x 3 + LVL), Lightning+Wind, Sky & Storm subclass extra school
5. **Zephyr** — Focus, Momentum, no mana

When making changes, **always verify these 5 classes are not broken**. Cross-reference `reference/classes.md` for any data corrections.

**Audit status (April 2026 Session 2)**: All 5 classes cross-referenced against `reference/classes.md` via agent-assisted audit. Critical issues found and fixed:
- The Cheat: ✅ clean (0 critical, 2 minor cosmetic)
- Shadowmancer: ✅ fixed (removed duplicate Pilfered Power from L1)
- Shepherd: ✅ fixed (armor prof + starting gear were wrong)
- Stormshifter: ✅ clean (0 critical, 3 minor)
- Zephyr: ✅ clean (0 critical, 2 minor)

## Features Not Yet Implemented

### ✅ Completed (Shepherd Playtest Feedback — April 2026)

All 10 items from the April 2026 Shepherd playtest session have been implemented. Kept here for context:

**1. Bonus Wounds Display** ✅
- Devoted Protector (Shepherd) grants +3 max wounds, but character sheet only shows the default 6 circles.
- Design idea: render the bonus wounds as **ghosted/transparent circles after the 6 main ones**, visually distinct so it's clear they come from a class feature.
- Generic system needed: any class feature that grants "extra wounds before death" should add to a `ch.bonusWounds` value, and the sheet should render `6 + bonusWounds` circles total (with the extras styled faintly).

**2. Shepherd Level 3 Utility Spell Picks Missing** ✅
- At Shepherd L3 the player must **choose 1 Necrotic utility spell AND 1 Radiant utility spell**. The level-up modal mentions it in text but doesn't present a picker.
- Need to add a "utility spell choice" category to `categorizeFeature` / level-up flow, similar to ability picker but sourcing from `SPELLS.utility[school]`.
- Similar patterns likely exist for other classes (audit all caster classes for utility spell picks at various levels).

**3. Manually-Added Spells Don't Show Up** ✅
- Bug: adding Bond of Peace and False Face via the Add Spell picker saves them but they don't appear in the rendered spell list on the character sheet.
- Investigate: probably a grouping issue in the collapsible-by-school spells renderer — manual/utility spells may not fit any school bucket and get dropped.
- Fix: render an "Other / Utility" section for any spell not matching a standard school bucket.

**4. Abilities: Active / Passive / Reference Categorization** ✅
- Currently all class features are dumped into one big "Abilities" list which gets noisy.
- Split into **three sections** on the character sheet:
  - **Active Abilities** — things you do on your turn (actions/reactions). Example: Searing Light, Lay on Hands.
  - **Passive Abilities** — always-on effects that matter in combat/play. Example: Merciful Light (heals grant +1d4 and temp HP = WIL), Sacred Graces.
  - **Reference / Benchmarks** — class milestones that just grant access to something already shown elsewhere (cantrips, max wounds, etc.). Collapsed by default. Example: Keeper of Life and Death, Devoted Protector.
- Needs a classification system per feature: `type: 'active' | 'passive' | 'reference'` in gamedata.js, OR heuristic classification based on description keywords ("action", "reaction", "when you", "once per").

**5. Spell-Modifying Passive Abilities Attached to Their Spell** ✅
- Features like **Empowered Companion** modify how a specific spell (`Lifebinding Spirit`) works.
- Design idea: when a passive ability references a specific spell, render it as a **sub-note under that spell's card** in the spell list, not (only) in the abilities section.
- Needs a way to tag a feature with `modifiesSpell: 'Lifebinding Spirit'` OR detect it via description matching.

**6. Combat Tab Needs Spells & Active Abilities** ✅
- Currently Combat view only shows: HP, armor, speed, mana, temp HP, wounds, conditions, action/reaction tokens.
- Needs to also show: **quick-access list of spells + active abilities** so you can see your options without leaving combat.
- Should show only actions/reactions/spells you can actually use (filter out passives and reference items).

**7. Navigation: Characters Tab Shouldn't Lose Current Character** ✅
- When on Combat tab, tapping "Characters" in the bottom nav takes you to the character list, forcing you to re-select.
- Fix: if a character is currently selected (`state.selectedCharacterId`), tapping "Characters" should return to that character's sheet, not the list. Add a separate way to get to the list (maybe a "Back to List" button on the sheet header).
- Even cleaner: persist `selectedCharacterId` so tapping Combat or Dice from the sheet and coming back lands on the same character.

**8. Conditions: Show Description When Selected** ✅
- In combat tracker, toggling a condition should reveal its description below the toggles so players remember what the condition actually does.
- Data already exists in `GAME_DATA.CONDITIONS`.

**9. Dice Roller: Cumulative Advantage/Disadvantage With Multi-Dice** ✅
- **Nimble rule**: advantages and disadvantages are cumulative and cancel out.
  - E.g., 3 advantages + 1 disadvantage = net 2 advantages.
  - Net N advantages = roll N extra dice, drop the N lowest.
  - Net N disadvantages = roll N extra dice, drop the N highest.
- Current roller only applies adv/dis when rolling 1 die. Needs:
  - UI input for number of advantages and number of disadvantages (separate +/- counters).
  - Compute net = advantages - disadvantages.
  - Roll `numDice + |net|` dice, keep `numDice` (drop lowest if advantage, highest if disadvantage).

**10. Rules Reference Expansion** ✅
- Currently only shows conditions.
- Needs **collapsible sections** for:
  - Conditions (existing)
  - Combat (actions, reactions, movement, attacks, damage, critical hits)
  - Resting (short rest, safe rest, field rest)
  - Leveling Up (the 5-step process from core-rules §18)
  - Character Creation Guide (overview of the 8 creation steps)
  - Stats & Skills
  - Spellcasting (mana, tiers, cantrips)
- All sections collapsed by default for a clean, scannable interface.
- Search bar should search across all sections.

### ✅ Completed (April 2026 Session 2)

Major work done in the deploy session. Kept here as context so future Claude instances don't re-do it:

- [x] **All 11 core classes have retrain features** (Wrath & Ruin, Trade Secrets, Rigorous Training, Remember the Wild, Study!, Serve Selflessly, Serve, Perform!, Be Wild, Focus + pre-existing Supplicate) — all declared with `retrainFeature` + `retrainArrays` in gamedata.
- [x] **Shepherd's Serve moved from L2 to L5** (correct per reference — triggers when Sacred Graces are picked).
- [x] **Background bonuses system** — structured `bonuses` field on backgrounds. Applied in `saveCharacter()`. Covers: Raised by Goblins (+Goblin language), Wild One (+1 Naturecraft), Survivalist (+1 hitDiceMaxMod), Fearless (+1 initiative, -1 armor), Back Out of Retirement (-1 maxWounds — handled by `getBonusWounds` regex extension).
- [x] **Hexbinder and Artificer hidden** from character creation UI via `HIDDEN_CLASSES` array in `renderStepClass`. Data stays in gamedata.
- [x] **Edit Character mode** — toggle button in sheet header. Gates all `+ Add Ability/Spell/Homebrew/Item/Language` and `× remove` buttons + Delete Character button behind `state.editMode`. Retrain buttons stay visible always (gameplay feature).
- [x] **Combat actions cleanup** — removed D&D-only actions (Dash, Disengage, Dodge, Hide, Interact, Use an Object). Now only Nimble's 5 heroic actions (Attack, Move, Cast Spell, Assess, Free Actions) and 4 reactions (Defend, Interpose, Opportunity Attack, Help). Data moved to `GAME_DATA.COMBAT_ACTIONS` and `GAME_DATA.REACTIONS`.
- [x] **Combat tab shows Attacks section** (equipped weapons + Unarmed Strike with damage calculated from character's stats) AND collapsible Heroic Actions reference.
- [x] **Reactions consume 1 action automatically** (per Nimble §14) — `toggleReaction` on spends/frees 1 action slot.
- [x] **Equipment overhaul** — `EQUIPMENT` data in gamedata rewritten with proper Nimble format (weapons with `damage: "1d6+STR"`, armor with `formula: { base, statMod, statMax }`, shields with `shieldArmor`). 4 armor categories (cloth/leather/mail/plate), 16 melee + 7 ranged weapons, 4 shields.
- [x] **Inventory items categorized** — each item has `category: 'weapon' | 'armor' | 'shield' | 'other'` plus category-specific fields and an `equipped` flag.
- [x] **Armor auto-calc** — `calculateArmor(ch)` returns `{ total, breakdown, isAuto }`. Respects unarmored = DEX default, equipped armor formula + statMax caps, equipped shield, Zephyr Iron Defense (STR+DEX while unarmored, doubled at L13), `armorMod` modifier for Fearless -1 and manual adjusts. Falls back to legacy `ch.armor` for chars without equipped gear.
- [x] **Character attacks** — `getCharacterAttacks(ch)` returns array of equipped weapons + unarmed strike with damage display that resolves stats (e.g., "1d4+2 (DEX)"). Zephyr Swift Fists gets "no Rushed Attack" note.
- [x] **Starting gear enrichment + auto-equip** — `enrichInventoryItem(name, eq)` matches item names against EQUIPMENT presets (handles pluralization, number prefixes, parens). First weapon/armor/shield auto-equipped in `saveCharacter`.
- [x] **Add Item modal** — `addItemModal` / `renderAddItemModal` with category picker + preset dropdown (index-based to avoid JSON encoding issues) + category-specific fields (damage/type/properties for weapons, base/stat/max for armor, shieldArmor for shields).
- [x] **Custom starting gear in creation** — Step 5 Equipment has weapon/armor/shield preset dropdowns when "50gp to buy" mode is selected.
- [x] **Songweaver school picker** — in Step 6 Details of creation. Stores in `ch.songweaverSchool`. Validation in `creationNext` (can't pass step 6 without choosing).
- [x] **Stormshifter Sky & Storm school picker** — in level-up modal when Circle of Sky & Storm subclass is chosen at L3. Stores in `ch.stormshifterSchool`. Blocks level-up confirm until chosen. Saves via `stormshifterSchool` in `updateChar`.
- [x] **Utility spell features audit** — extended `categorizeFeature` to handle dynamic school patterns:
  - "from each spell school you know" / "the spell schools you know" → resolves to character's accessible schools via `getCharacterSchools(ch)`
  - "from 1/a/a 2nd/a 3rd spell school you know" → new `utilityAllPickSchool` type (Mage Elemental Mastery). Player picks a school, auto-learns all utility spells from it.
  - `categorizeFeature` now takes `ch` as 3rd param (passed from `levelUp` as projected char at new level).
  - All 16 utility-granting features across 13 classes correctly categorized (no more `auto` fallthrough).
- [x] **Audit of 5 priority classes done** — cross-referenced gamedata against reference/classes.md. Critical fixes applied:
  - Shepherd `armorProficiency`: "Cloth, Leather" → "Mail, Shields"
  - Shepherd `startingGear`: was Songweaver-style gear → correct ["Rusty Mail", "Mace", "Wooden Buckler", "Bell"]
  - Shadowmancer L1 had duplicate "Pilfered Power" → removed (it's only L2 per reference)
- [x] **Reaver (Shadowmancer story-based subclass) spell handling** — nuanced swap:
  - `blocksClassSpecific: true` → `blocksClassSpecific: ['Shadow Blast']` (array of specific names, not boolean)
  - New field: `grantsClassSpecific: ['Bonescythe']` — subclass-granted class-specific cantrips
  - New field: `removesClassAbilities: ['Pilfered Power']` — base class abilities this subclass strips
  - **Bonescythe** added to `classSpecific.spells` with `requiresSubclass: 'Reaver'` (only loads when Reaver is active)
  - `autoLoadSpells`, `_computeSubclassDiff`, `confirmSubclassSwap` all updated to handle array-based blocking + grants + class-ability stripping
  - On revert from Reaver → standard: Pilfered Power is restored by looking up its definition in `classData.levels` (most recent definition ≤ char's level)
  - Story Transition modal diff now shows specific gained/lost spells instead of generic "blocks class-specific" message
- [x] **GitHub Pages deploy** — live at https://diego2797.github.io/nimble-app/
- [x] **Character Export/Import (JSON backup)** — buttons in Characters tab. File format: `{ app, schemaVersion, exportedAt, characters }`. Import modal handles conflicts (replace/keepBoth/skip). See Backup/Restore section.
- [x] **Service worker smart cache** — `sw.js` bumped to `v6` + switched from cache-first to **stale-while-revalidate**. Prevents "deployed but still see old version" issues in future.

### High Priority (Pre-Existing)

- **PWA install polish** (next task Diego chose): better icon for home screen, splash screen, auto install prompt on first visit. Current manifest icon is a generic sword that looks bad on home screen.
- **Desktop UI layout** (biggest remaining item): currently mobile-first 360-428px. Need media queries for >= 900px with side-by-side layout (character sheet left, combat/dice/rules panel right), possibly sidebar nav instead of bottom nav.
- **Cloud sync (deferred)** — Diego considered but deferred until after playgroup testing. Export/Import JSON is the current manual workaround. If implemented later, Firebase is the recommended backend (generous free tier, Google OAuth built-in, Firestore fits JSON character data).
- **Storage Persistence API** — iOS Safari evicts PWA data after 7 days of no use. Adding `navigator.storage.persist()` mitigates this. ~15 min work, never prioritized.

### Medium Priority
- **Homebrew Item form**: fields for name, description, effects, weaknesses (currently just name + generic)
- **Initiative calculation**: factor in ancestry bonuses (e.g., Elf +1 Speed / advantage on initiative)
- **Starting gold**: varies by class, currently hardcoded to 10
- **Equipment slot capacity**: should come from class/STR, currently hardcoded based on 9+STR in reference

### Nice-to-Haves
- Dice roll animation
- Sound effects on dice roll
- Dark mode toggle
- Landscape tablet layout

## Bugs Fixed (from previous sessions)
- [x] Starting equipment now uses `startingGear` field (was using generic gear)
- [x] Background mechanic now added to abilities via `bgData.mechanics` (was `bgData.mechanic`)
- [x] Ancestry trait now added via `ancestryData.abilityName` + `ancestryData.description` (was `ancestryData.trait`)
- [x] Stat assignment tracks by INDEX into array (prevents assigning same value to all stats)
- [x] Scroll-to-top only happens on navigation, not every render
- [x] Modal overlay reuses existing element (no stacking)
- [x] Mobile stats layout: reduced padding/font-size to fit +/- buttons on small screens
- [x] Cantrips auto-load from SPELLS.classSpecific for classes with class-specific spells
- [x] categorizeFeature false positives: added `/choose|learn/i.test(f.description)` guard to prevent non-choice features from showing pickers
- [x] numChoices regex: handles ordinals ("3rd") vs quantities ("3 abilities") correctly
- [x] Save format normalization: converts `{ advantaged: 'DEX' }` to `{ DEX: 'advantage' }` for display
- [x] Parent feature descriptions: extracts mechanic text beyond "Choose X..." so it shows on character sheet
- [x] iOS modal scroll: body overflow hidden + overscroll-behavior contain + -webkit-overflow-scrolling touch
- [x] Academy Dropout utility spell now chosen during creation (Step 2 background picker)
- [x] Spells section reorganized: grouped by school with collapsible headers, sub-grouped by tier
- [x] Fiendish Boon: prompts for DEX/INT choice, applies +1 stat and -1 max hit dice
- [x] Supplicate: modal to swap lesser/greater invocations, undoes Fiendish Boon effects on removal
- [x] Shepherd hitDie corrected from d8 to d10, startingHP from 13 to 17
- [x] Shepherd Searing Light description corrected to match reference (WIL d8 heal/damage, not 1d4+WIL)
- [x] Character creation now uses `autoLoadSpells()` — all caster classes get correct cantrips at level 1
- [x] INT-based bonus languages: language picker in Details step during creation
- [x] Hit Dice now a trackable resource on character sheet with +/- buttons (current/max)
- [x] Starting HP bug: was adding STR to class startingHP — fixed to use flat class value per reference rules

### Bugs Fixed (April 2026 Session 2 — deploy session)
- [x] Shepherd's Serve at wrong level (L2 → L5 to match Sacred Graces pick)
- [x] Raised by Goblins didn't grant Goblin language (backgrounds now have structured `bonuses` field)
- [x] Wild One / Survivalist / Fearless didn't apply their stat bonuses (same fix)
- [x] Back Out of Retirement's "-1 max Wounds" wasn't subtracted (`getBonusWounds` regex extended to capture negatives)
- [x] Rules Reference had D&D-only combat actions (Dash/Disengage/Dodge/Hide/Interact) — removed; now only Nimble's 5
- [x] Combat tab Reactions section was empty — added `REACTIONS` to gamedata
- [x] Combat tab had no quick-access for weapon attacks — added Attacks section with equipped weapons + unarmed strike
- [x] EQUIPMENT data in gamedata was D&D-flavored (wrong armor values, wrong damage format) — rewrote with Nimble format
- [x] Armor didn't auto-calculate from equipped items — added `calculateArmor` with Zephyr Iron Defense support
- [x] Starting gear items were just names with no category/stats — added `enrichInventoryItem` that matches against EQUIPMENT presets
- [x] Reactions didn't consume an action per Nimble §14 — `toggleReaction` now spends/frees 1 action slot
- [x] Add Item modal preset dropdowns didn't work due to JSON double-encoding in HTML attributes — switched to index-based lookup via `_itemPresets`
- [x] Songweaver couldn't pick extra school at creation — added picker in Step 6 Details
- [x] Stormshifter Sky & Storm subclass couldn't pick extra school (Ice/Radiant) — added picker in level-up modal
- [x] Utility spell features with "from each spell school you know" / "from 1 spell school you know" fell through to `auto` (no picker) — extended `categorizeFeature` with dynamic school resolution + new `utilityAllPickSchool` type
- [x] Shepherd had wrong armor proficiency (Cloth/Leather → Mail/Shields) and wrong starting gear (Songweaver-like → Rusty Mail/Mace/Buckler/Bell)
- [x] Shadowmancer L1 had duplicate Pilfered Power (is L2-only per reference) — removed
- [x] Reaver subclass lost BOTH Shadow Blast AND Summon Shadow — fixed: `blocksClassSpecific` is now array `['Shadow Blast']`; Summon Shadow kept
- [x] Reaver didn't gain Bonescythe — added as class-specific cantrip with `requiresSubclass: 'Reaver'`; subclass declares `grantsClassSpecific: ['Bonescythe']`
- [x] Reaver didn't strip Pilfered Power — added `removesClassAbilities: ['Pilfered Power']` field; reverting restores the ability from `classData.levels`
- [x] Sheet showed Add/Remove buttons at all times — gated behind `editMode` toggle in sheet header
- [x] Service worker cache-first strategy blocked deploys — switched to stale-while-revalidate in sw.js v6
- [x] Hexbinder/Artificer visible in character creation — now filtered via `HIDDEN_CLASSES` array (they're expansion-book classes, not core)

## Aesthetic Guidelines
- **Fantasy old book / worn parchment** look
- Dark brown text on parchment background
- Burgundy (#8b1a1a) for headings, accents, danger actions
- Gold (#c9a84c) for stat values, highlights, special elements
- Leather dark (#3d2b1f) for header/footer bars
- No external images — CSS-only parchment texture
- All in English (the game is played in English even though Diego speaks Spanish)

## Source Material
The game data was originally extracted from these Nimble PDFs:
- Nimble - Core Rules.pdf
- Nimble - Heroes.pdf
- Nimble 5E - Artificer1.3.pdf
- Nimble 5E - Hexbinder.pdf

These have been transcribed to the `reference/` folder as .md files. **The reference/ files are the source of truth** — always use them over gamedata.js when there's a conflict.

## Test Characters in localStorage
- **Pip** (Shadowmancer L4, id: mo0y94e2fuxic) — has One with Shadows (greaterInvocations), no subclass set
- **Kael Swiftbow** (Elf Hunter L3, Wild Heart subclass) — has Grease Trap + Incendiary Shot (thrillOfTheHuntAbilities), Tracker's Intuition, Animal Companion
