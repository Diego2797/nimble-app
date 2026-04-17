# Nimble TTRPG — GM References

Reference markdowns extracted from the Nimble sourcebooks so Claude Code (and any other tool) can consult the content without parsing PDFs.

**Sources:**
- `Game Master's Guide 2.0.2.pdf` (Copyright © 2025 Nimble Co.) — Game design & art direction: Evan Diaz. ISBN: 979-8-9912696-2-9.
- `Creator's Kit 1.2.pdf` (Copyright © 2025 Nimble Co.) — Writing: Evan Diaz.

These files complement the existing player-facing references in `../reference copy/` (core-rules, classes, ancestries-backgrounds, spells). The content here is GM-focused and feeds the features being built: encounter generator, monster manager, adventure/dungeon generator, and session/combat tracker.

---

## File Map

| File | Contents |
|------|----------|
| `gm-running.md` | GM fundamentals. Starting as a GM, the 3 Rules of GMing, Advanced GM Tools (cutscenes, vignettes, skill challenges), What to Avoid, resting, leveling cadence, gating information. |
| `encounters.md` | Running monsters, armor rules, minions/flunkies, default stats, encounter guidelines by party level, difficulty tiers (Easy/Medium/Hard/Deadly/Very Deadly), fine-tuning with tactics/minions, 40+ unique encounter variants, monster design philosophy (roles, group traits, shared dice, what to avoid), combat math (avg hero HP/armor/damage by level). |
| `monsters.md` | Monster Builder stats table (Lvl 1/4 through 20), flavorful monster abilities (40+), complete bestiary organized by group (Kobolds, Goblins, Bandits, Snakemen, Dungeon Denizens, Hill & Field, Undead, Forest Denizens, Cultists/Horrors, Underground), adventure-specific stat blocks, full condition reference. |
| `legendary-monsters.md` | Legendary monster mechanics (act after each hero, Bloodied, Last Stand), design philosophy (tension, math, scripts), stats table by party level, all 16 printed legendary monsters with full stat blocks (Grimbeak, Thorn Quickblade, Krogg, Greenthumb, Ravager, Aranya, Nalzar, Florindris, Flameheart, Vael, Titan of the Deep Woods, Ul'vek, Dravok, Azriel, Gloomwing, Alaric, Caerys, plus Scorpion Queen and Lindworm). |
| `adventures.md` | Adventure design principles. 3 pillars, problems-not-solutions, bad guys to fight, places to explore, traps/challenges, dilemmas, lore/secrets/plots, gating information, compelling treasures, adventure framework blueprint (word counts, room contents, dungeon agency), skill challenge structure, tight writing. |
| `rewards.md` | Adventuring rewards philosophy, release valves (Gem of Escape, Glacier in a Bottle, Phoenix Helm), story items (Grimoire, Hear-ring, Pocket Cauldron), combat items (Lumina), secret spells (Revive, Sparkfetch, Windform, Hearth & Home, Teleport, Cryotomb, Memory Veil, etc.), gold table by level, lodging boons, full Minor/Major/Epic Boons catalog, magical item design rules ("strictly better is strictly worse"), items from each pre-made adventure. |
| `setting-overview.md` | Valley of Hope. Merivale (NPCs, points of interest), Farhope (3 factions: Golden Company, Explorer's Guild, Tower, with NPCs), and the 7 regional chapters: Elderwild, Withering Dunes, Iceforge Mountains, Skyreach Isles, Growling Marshes, Shadowblight. Each region includes secret plots, NPCs, points of interest, adventure hooks, encounters, treasures. |
| `premade-adventures.md` | All included adventures. Garden of Death trilogy (A Tiny Rescue L1, Goblins of the Crystal Crag L2, Greenthumb's Base L3 w/ Skill Challenge: Escape!), Vermin's Vengeance (Farhope L3), The Hidden Honey Cavern (Elderwild L3), The Lost Temple of Heytet-Seqat (Withering Dunes L5), The Vanishing Caravans (Iceforge L4), Raid on the Royal Nest (Skyreach L4), The Hag's Legacy (Growling Marshes L4), Beyond the Crimson Veil (Shadowblight L14). |
| `design-framework.md` | Creator's Kit design principles. Avoid fiddliness, maintain the Flow, class design (level-by-level framework, resting, hoarding/going nova, lane protection, retraining, multiclassing), clear & concise writing, spell framework (Range, Actions, schools, damage by tier), monster/adventure/item design summaries, Nimble trade dress (A5, layout, fonts, art cost guide), 3rd Party Creator License summary. |
| `5e-conversion.md` | Converting 5e content: save mappings (CON→STR, WIS/CHA→WIL), skill mappings, condition mappings (Paralyzed/Stunned/Unconscious→Incapacitated), monster/legendary conversion, optional tweaks (monster saves, agency), 5e spells, magical items, races & classes, monster skill checks on the fly. Includes full Chaos Table (1d20 wild magic effects). |

---

## Using These References

When building GM features:

- **Encounter generator.** Start with `encounters.md` (difficulty/composition rules, combat math) and `monsters.md` (the Monster Builder table + flavorful abilities + bestiary). For boss encounters, `legendary-monsters.md`.
- **Monster manager.** `monsters.md` is the canonical stat block dump. `legendary-monsters.md` for solo boss stat blocks. The condition reference at the bottom of `monsters.md` is useful for UI.
- **Adventure / dungeon generator.** `adventures.md` is the framework (rooms, traps, hooks, dilemmas). `setting-overview.md` for region-specific color. `premade-adventures.md` as a library of reusable hooks, rooms, and plots. `rewards.md` for loot at the end of a dungeon.
- **Session/combat tracker.** `gm-running.md` (rules-of-thumb, rolls, resting). `encounters.md` for combat mechanics (armor, minion rules, flow). `monsters.md` for condition definitions the tracker needs to surface. `legendary-monsters.md` for the "act after each hero" cadence and Bloodied/Last Stand phase transitions.

For design work (homebrew classes/subclasses/monsters), `design-framework.md` captures the philosophy from the Creator's Kit so feature decisions can stay aligned with Nimble's values: fast, fun, fluid play.
