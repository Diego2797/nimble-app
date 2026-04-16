# Nimble TTRPG -- Ancestries, Backgrounds, Languages & Motivations
## Authoritative Reference (from Nimble Core Rules PDF, cross-referenced with gamedata.js)

> **Default Speed**: 6 spaces (unless modified by ancestry).
> **Default Size**: Medium (unless noted).
> **Default Max Wounds**: 6.
> **Inventory Slots**: 10 + STR.
> **Languages**: All heroes speak Common by default. Each point of INT grants 1 additional language.

---

# COMMON ANCESTRIES

## Human
- **Size:** Medium
- **Category:** Common
- **Ability Name:** Tenacious
- **Ability Description:** +1 to all skill checks and Initiative rolls. Humans are adaptable, driven, and refuse to give up.
- **Speed:** 6 (default, no modifier)
- **Languages:** Common
- **Stat Modifiers:** +1 to all skills, +1 Initiative
- **Notes:** No additional language granted by ancestry. The most versatile ancestry due to the flat +1 bonus across the board.

## Dwarf
- **Size:** Medium
- **Category:** Common
- **Ability Name:** Stout
- **Ability Description:** +2 to max Hit Dice. +1 max Wounds. -1 Speed. You know Dwarvish if your INT is not negative.
- **Speed:** 5 (default 6, -1 Speed)
- **Languages:** Common, Dwarvish (if INT is not negative)
- **Stat Modifiers:** +2 max Hit Dice, +1 max Wounds (total 7), -1 Speed
- **Notes:** The PDF says "+2 max Hit Dice, +1 max Wounds, -1 Speed." The gamedata.js uses `hitDieBonus: 2, maxWoundsBonus: 1, speedMod: -1`. The PDF wording is "+2 max Hit Dice" (i.e., the cap on how many Hit Dice you have increases by 2), not "+2 to Hit Die rolls for HP" as gamedata.js describes. Verify intent.

## Elf
- **Size:** Medium
- **Category:** Common
- **Ability Name:** Lithe
- **Ability Description:** Advantage on Initiative. +1 Speed. You know Elvish if your INT is not negative.
- **Speed:** 7 (default 6, +1 Speed)
- **Languages:** Common, Elvish (if INT is not negative)
- **Stat Modifiers:** Advantage on Initiative rolls, +1 Speed
- **Notes:** Fastest common ancestry. Initiative advantage is very strong for going first in combat.

## Halfling
- **Size:** Small
- **Category:** Common
- **Ability Name:** Elusive
- **Ability Description:** +1 to Stealth. If you fail a save, you can succeed instead, 1/Safe Rest.
- **Speed:** 6 (default, no modifier)
- **Languages:** Common
- **Stat Modifiers:** +1 Stealth, lucky save reroll (1/Safe Rest)
- **Notes:** The PDF says "+1 to Stealth. If you fail a save, you can succeed instead, 1/Safe Rest." The gamedata.js describes it as "+1 to Stealth checks. Once per Short Rest, when you fail a saving throw, you can choose to succeed instead." The PDF says "Safe Rest" not "Short Rest" -- use Safe Rest.

## Gnome
- **Size:** Small
- **Category:** Common
- **Ability Name:** Optimistic
- **Ability Description:** Allow an ally within Reach 6 to reroll any single die, resets when healed to your max HP. -1 Speed. You know Dwarvish if your INT is not negative (but you call it Gnomish, of course).
- **Speed:** 5 (default 6, -1 Speed)
- **Languages:** Common, Dwarvish/Gnomish (if INT is not negative)
- **Stat Modifiers:** Ally reroll ability, -1 Speed
- **Notes:** The PDF says "Allow an ally within Reach 6 to reroll any single die, resets when healed to your max HP." The gamedata.js says "Once per Short Rest, when an ally within 30 ft rolls a 1 on a d20, you can force them to reroll." The PDF version is broader (any die, any roll) and has a different reset condition (healed to max HP, not Short Rest). PDF is authoritative.

---

# EXOTIC ANCESTRIES

> Your setting may or may not support these choices -- check with your GM first before selecting one.

## Bunbun
- **Size:** Small
- **Category:** Exotic
- **Ability Name:** Bunny Legs
- **Ability Description:** Before Interposing or after Defending (after damage), hop up to your Speed in any direction for free, 1/encounter.
- **Speed:** 6 (default, no modifier listed in PDF)
- **Languages:** Common
- **Stat Modifiers:** Free hop movement (1/encounter)
- **Notes:** The gamedata.js calls the ability "Hop Skip" with "+1 Speed, jump distance doubled, Bonus Action to Disengage." The PDF calls it "Bunny Legs" and the mechanic is a free hop after Interposing/Defending. PDF is authoritative. No speed modifier mentioned in PDF.

## Birdfolk
- **Size:** Small or Medium
- **Category:** Exotic
- **Ability Name:** Hollow Bones
- **Ability Description:** You have a fly Speed as long as you are wearing armor no heavier than Leather. Crits against you are Vicious (the attacker rolls 1 additional die). Forced movement moves you twice as far.
- **Speed:** Fly Speed (while in Leather or lighter armor)
- **Languages:** Common
- **Stat Modifiers:** Fly Speed (conditional), Vicious crits against you, double forced movement
- **Notes:** The gamedata.js calls this "Glide" with horizontal glide mechanics. The PDF version is significantly different -- it grants actual flight with the downside of Vicious crits and double forced movement. PDF is authoritative.

## Celestial
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Highborn
- **Ability Description:** Your disadvantaged save is Neutral instead. You know Celestial if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Celestial (if INT is not negative)
- **Stat Modifiers:** Disadvantaged save becomes Neutral
- **Notes:** The gamedata.js calls this "Divine Heritage" with Radiant resistance and free Heal. The PDF version is about save improvement. PDF is authoritative.

## Changeling
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** New Place, New Face
- **Ability Description:** +2 shifting skill points. You may take on the appearance of any ancestry. When you do, you may place your 2 shifting skill points into any 1 skill. 1/day.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** +2 shifting skill points (reassignable 1/day)
- **Notes:** The gamedata.js calls this "Shapeshifter" with +1 Influence. The PDF version is more nuanced with shifting skill points. PDF is authoritative.

## Crystalborn
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Reflective Aura
- **Ability Description:** When you Defend, gain KEY armor and deal KEY damage back to the attacker. 1/encounter.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** Reflective damage/armor on Defend (1/encounter)
- **Notes:** The gamedata.js calls this "Crystalline Body" with +1 natural Armor and light emission. The PDF version is a reactive damage/armor ability. PDF is authoritative. No language bonus mentioned in PDF (gamedata.js gives Primordial).

## Dragonborn
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Draconic Heritage
- **Ability Description:** +1 Armor. When you attack: deal an additional LVL+KEY damage (ignoring armor) divided as you choose among any of your targets; recharges whenever you Safe Rest or gain a Wound. You know Draconic if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Draconic (if INT is not negative)
- **Stat Modifiers:** +1 Armor, bonus LVL+KEY damage (divided among targets), recharges on Safe Rest or Wound
- **Notes:** The gamedata.js calls this "Dragon's Breath" with a 15 ft cone breath weapon. The PDF version is a passive +1 Armor plus a rechargeable damage boost. PDF is authoritative.

## Dryad/Shroomling
- **Size:** Small or Medium
- **Category:** Exotic
- **Ability Name:** Danger Pollen/Spores
- **Ability Description:** Whenever an enemy causes you one or more Wounds, you excrete soporific spores: all adjacent enemies are Dazed. You know Elvish if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Elvish (if INT is not negative)
- **Stat Modifiers:** Reactive Daze effect on adjacent enemies when Wounded
- **Notes:** The gamedata.js calls this "One with Nature" with plant communication, +1 Naturecraft, and natural regen. The PDF version is a defensive spore ability. PDF is authoritative. Language is Elvish (not Primordial as in gamedata.js).

## Fiendkin
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Flameborn
- **Ability Description:** 1 of your neutral saves is advantaged instead. You know Infernal if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Infernal (if INT is not negative)
- **Stat Modifiers:** One neutral save becomes advantaged
- **Notes:** The gamedata.js calls this "Infernal Legacy" with Fire resistance and darkvision. The PDF version is about save improvement (similar to Celestial but for a neutral save going up rather than a disadvantaged save going neutral). PDF is authoritative.

## Goblin
- **Size:** Small
- **Category:** Exotic
- **Ability Name:** Skedaddle
- **Ability Description:** Can move 2 spaces for free after you become the target of an attack or negative effect (after damage, ignoring difficult terrain). You know Goblin if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Goblin (if INT is not negative)
- **Stat Modifiers:** Free 2-space movement after being targeted
- **Notes:** The gamedata.js calls this "Nimble Escape" with Bonus Action Disengage/Hide, +1 Stealth, darkvision. The PDF version is a reactive movement ability. PDF is authoritative.

## Half-Giant
- **Size:** Large
- **Category:** Exotic
- **Ability Name:** Strength of Stone
- **Ability Description:** Force an enemy to reroll a crit against you, 1/encounter. +2 Might. You know Dwarvish if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Dwarvish (if INT is not negative)
- **Stat Modifiers:** Crit reroll against you (1/encounter), +2 Might
- **Notes:** The gamedata.js calls this "Towering Presence" with +2 HP per level and -1 Stealth. The PDF version is a defensive anti-crit ability plus +2 Might. PDF is authoritative. This is the only Large ancestry.

## Kobold
- **Size:** Small
- **Category:** Exotic
- **Ability Name:** Wily
- **Ability Description:** Force an enemy to reroll a non-critical attack against you, 1/encounter. +3 to Influence friendly characters. Advantage on skill checks related to dragons. You know Draconic if your INT is not negative.
- **Speed:** 6 (default)
- **Languages:** Common, Draconic (if INT is not negative)
- **Stat Modifiers:** Enemy attack reroll (1/encounter), +3 Influence (friendly targets only), Advantage on dragon-related checks
- **Notes:** The gamedata.js calls this "Pack Tactics" with advantage on attacks when ally is adjacent. The PDF version is substantially different. PDF is authoritative.

## Minotaur/Beastfolk
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Charge
- **Ability Description:** When you move at least 4 spaces, you can push a creature in your path. Medium: 1 space; Small/Tiny: up to 2 spaces. 1/turn.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** Charge push ability (1/turn)
- **Notes:** The gamedata.js calls this "Horns/Natural Weapons" with a d6 natural weapon and charge bonus damage. The PDF version is a push/displacement ability without natural weapon damage mentioned. PDF is authoritative. No bonus language in PDF.

## Orc
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Relentless
- **Ability Description:** When you would drop to 0 HP, you may set your HP to LVL instead, 1/Safe Rest. +1 Might. You know Goblin if your INT is not negative (but you call it Orcish, of course).
- **Speed:** 6 (default)
- **Languages:** Common, Goblin/Orcish (if INT is not negative)
- **Stat Modifiers:** Drop to LVL HP instead of 0 (1/Safe Rest), +1 Might
- **Notes:** The gamedata.js calls this "Relentless Endurance" dropping to 1 HP instead (once per Long Rest). The PDF version scales with level (drop to LVL HP) and recharges on Safe Rest. PDF is authoritative.

## Oozeling/Construct
- **Size:** Small or Medium
- **Category:** Exotic
- **Ability Name:** Odd Constitution
- **Ability Description:** Increment your Hit Die one step (d6 > d8 > d10 > d12 > d20); they always heal you for the maximum amount. Magical healing always heals for the minimum amount.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** Hit Die upgrade by one step, Hit Dice always heal max, magical healing always heals minimum
- **Notes:** The gamedata.js calls this "Amorphous/Constructed" with squeeze ability, poison immunity, no eat/drink/breathe. The PDF version is about Hit Die mechanics. PDF is authoritative. No bonus language in PDF.

## Planarbeing
- **Size:** Medium
- **Category:** Exotic
- **Ability Name:** Planeshift
- **Ability Description:** Whenever you Defend, you can gain 1 Wound to temporarily phase out of the material plane and ignore the damage. -2 max Wounds.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** Phase out on Defend (costs 1 Wound), -2 max Wounds (total 4)
- **Notes:** The gamedata.js calls this "Planar Step" with a 15 ft teleport (Bonus Action, 1/Short Rest). The PDF version is a damage-avoidance mechanic that costs Wounds, with a permanent -2 max Wounds penalty. PDF is authoritative. No bonus language in PDF (gamedata.js gives Primordial).

## Ratfolk
- **Size:** Small
- **Category:** Exotic
- **Ability Name:** Scurry
- **Ability Description:** Gain +2 armor if you moved on your last turn.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** +2 Armor (conditional, must have moved on previous turn)
- **Notes:** The gamedata.js adds +1 Speed and darkvision which are not in the PDF. The PDF ability is purely a conditional armor bonus. PDF is authoritative.

## Stoatling
- **Size:** Small
- **Category:** Exotic
- **Ability Name:** Small But Ferocious
- **Ability Description:** Whenever you make a single-target attack against a creature larger than you, roll 1 additional d6 for each size category it is larger. They do the same.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** Bonus d6 damage per size difference (both ways)
- **Notes:** The gamedata.js calls this "Slippery" with grapple escape advantage and +1 Finesse. The PDF version is a size-based damage scaling ability that works both ways. PDF is authoritative.

## Turtlefolk
- **Size:** Small or Medium
- **Category:** Exotic
- **Ability Name:** Slow & Steady
- **Ability Description:** +4 Armor, -2 Speed.
- **Speed:** 4 (default 6, -2 Speed)
- **Languages:** Common
- **Stat Modifiers:** +4 Armor, -2 Speed
- **Notes:** The gamedata.js calls this "Shell Defense" with a toggle shell mechanic (+2 Armor, Speed 0) plus +1 natural Armor. The PDF version is a simple permanent +4 Armor / -2 Speed. PDF is authoritative. Slowest ancestry at Speed 4.

## Wyrdling
- **Size:** Small
- **Category:** Exotic
- **Ability Name:** Chaotic Surge
- **Ability Description:** Whenever you or a willing ally within Reach 6 casts a tiered spell, you may allow them to roll on the Chaos Table. 1/encounter.
- **Speed:** 6 (default)
- **Languages:** Common
- **Stat Modifiers:** Chaos Table roll on tiered spells (1/encounter)
- **Notes:** The gamedata.js calls this "Wild Magic" triggered on natural 1s plus a random cantrip. The PDF version is a deliberate choice to roll on a Chaos Table when casting tiered spells. PDF is authoritative.

---

# BACKGROUNDS

> Backgrounds provide a glimpse into your character's past. Feel free to adapt or reimagine these backgrounds to suit your character's story. Choose 1 background.

## 1. Back Out of Retirement
- **Description:** You've forgotten more than most adventurers these days know! Talk with your GM, what made you come out of retirement?
- **Mechanic - "Let's see if I remember how to do this...":** You may gain 1 Wound to use an ability or cast a spell as if you were 1 level higher.
- **Mechanic - "These old bones...":** Your age has long since started to show. -1 max Wounds.

## 2. Acrobat
- **Description:** Can be thrown by a larger ally, REALLY far. Half damage from falling and forced movement.
- **Mechanic:** Half damage from falling and forced movement. Can be thrown by a larger ally.

## 3. Wild One
- **Description:** Whether it is the sticks or flowers in your hair, your smell, or the way you carry yourself, wild creatures are less frightened of you and more willing to aid you.
- **Mechanic:** +1 Naturecraft. While Field Resting, roll your Hit Die with advantage while in the wild.

## 4. Devoted Protector
- **Description:** Choose 1 ally in your party.
- **Mechanic:** You can survive +3 max Wounds as long as they are nearby. Whenever they take a Wound, you do too.

## 5. Fey Touched
- **Description:** You take half damage from all magical effects, double from weapons made of metal (before armor is applied).
- **Mechanic:** Half damage from magical effects. Double damage from metal weapons (before armor).

## 6. Academy Dropout
- **Description:** School just isn't for everyone! You learn by experience in the real world (or at least that's what you tell yourself).
- **Mechanic:** Learn 1 Utility Spell.

## 7. Survivalist
- **Description:** You never run out of your own personal rations. Anything can be food if you try hard enough!
- **Mechanic:** Advantage against poison saves. +1 max Hit Die.

## 8. Made a BAD Choice
- **Description:** Start with 500 or 1000 extra gold, or an uncommon/rare magical item (that your GM allows). Gain an equally powerful curse or enemy who wants it back.
- **Mechanic:** Extra starting gold (500 or 1000) OR an uncommon/rare magic item. Gain a curse or powerful enemy. *If you choose this background, your GM may allow you to choose another.*

## 9. Haunted Past
- **Description:** You are haunted by voices that occasionally give you cryptic advice. The voices are sometimes VERY helpful. Other times they only want to see you suffer.
- **Mechanic:** Advantage on checks to fear-related situations (implied from flavor). Cryptic advice from voices.

## 10. Ear to the Ground
- **Description:** Advantage on checks to know or obtain gossip for events that will soon happen or have happened less than 1 year ago.
- **Mechanic:** Advantage on checks related to recent events/gossip.

## 11. What? I've Been Around
- **Description:** 1/per location (or at the GM's discretion). You happen to know JUST the person who has the information you're looking for, or could get you out of a jam, and... Roll 1d20:
- **Mechanic:**
  - **1-5.** They want you DEAD.
  - **6-12.** You owe them money.
  - **13-19.** They can be convinced to help you.
  - **20.** They are your biggest fan/are madly in love with you.

## 12. Home at Sea
- **Description:** Recover twice as many Wounds and HP while resting on a ship or near water. You can fill in for a first mate or captain in a pinch.
- **Mechanic:** 2x Wound and HP recovery near water. Advantage on water-related skill checks.

## 13. At Home Underground
- **Description:** Safe resting locations underground always count as Lavish lodging for you. You struggle to rest (INT save) while it's raining.
- **Mechanic:** Underground rest = Lavish lodging. You can dig twice as fast as others. Struggle to rest in rain (INT save). "Water... from the SKY?!"

## 14. Raised by Goblins
- **Description:** You speak Goblin natively (much better than one who has learned it later in life). You automatically notice and can avoid crudely-made traps and have advantage to notice and disarm more sophisticated traps.
- **Mechanic:** Speak Goblin natively. Auto-detect crude traps. Advantage to notice/disarm sophisticated traps.

## 15. History Buff
- **Description:** Advantage on all Lore checks related to knowledge about items, facts, or events that happened more than 100 years ago.
- **Mechanic:** Advantage on Lore checks for historical knowledge (100+ years old).

## 16. (Former) Con Artist
- **Description:** You can forge most documents or mimic voices flawlessly. You have a criminal contact in most major cities. However, your reputation often precedes you -- until you prove yourself trustworthy.
- **Mechanic:** Forge documents, mimic voices. Criminal contact in most cities. Reputation precedes you.

## 17. (Secretly) Undead
- **Description:** Unnatural Resilience: You are immune to disease and do not need to eat, drink, or breathe. Children, animals, and Celestials are uneasy in your presence; many will be horrified to discover your true nature.
- **Mechanic:** Immune to disease. No need to eat, drink, or breathe. Children, animals, and Celestials are uneasy around you.

## 18. Taste for the Finer Things
- **Description:** You always have up-to-date knowledge of the customs and dress of the upper classes and may even know many of their secrets.
- **Mechanic:** Advantage on Influence checks with the upper class.

## 19. Fearless
- **Description:** You are immune to the Frightened condition.
- **Mechanic:** Immune to Frightened. +1 Initiative. -1 Armor.

## 20. So Dumb I'm Smart Sometimes
- **Description:** (Req. 0 or negative INT at character creation.)
- **Mechanic:** Reroll an INT-related skill check, 1/day. Reroll a failed INT save with advantage, 1/Safe Rest.

## 21. Wily Underdog
- **Description:** (Req. 0 or negative STR at character creation.)
- **Mechanic:** Reroll a failed STR-related roll (e.g., STR attack, STR save, Might check) and use another stat instead, 1/day.

## 22. Bumblewise
- **Description:** (Req. 0 or negative WIL at character creation.)
- **Mechanic:** A result of 1 or less on any WIL-related roll counts as a natural 20 (WIL save, Naturecraft, Perception, Influence, or Insight check).

## 23. Accidental Acrobat
- **Description:** (Req. 0 or negative DEX at character creation.)
- **Mechanic:** Whenever you fail a DEX-related roll (e.g., DEX attack, DEX save, Stealth check, Finesse check), you may roll again. If you still fail, the consequences are BAD.

## 24. Tradesman/Artisan
- **Description:** Choose a profession (Baker/Cook, Smith, Stonemason, Weaver, Leatherworker, etc.).
- **Mechanic:** Checks you make related to that profession are made with advantage. You also retain special knowledge related to your profession.

---

# LANGUAGES

All heroes speak Common by default. Each point of INT grants 1 additional language known. These languages are typically spoken by:

| Language | Typical Speakers |
|---|---|
| **Common** | Most intelligent creatures |
| **Dwarvish** | Dwarves, Gnomes, and Giants |
| **Elvish** | Elves, Fey, and Sylvan |
| **Goblin** | Goblins and Orcs |
| **Infernal** | Various Fiends and cultists |
| **Thieves' Cant** | Scoundrels and rogues |
| **Celestial** | Celestials and priests |
| **Draconic** | Dragons, Dragonborn, and Kobolds |
| **Primordial** | Elementals and Ancient Beings |
| **Deep Speak** | Underworld dwellers |

**Total: 10 languages.**

> **GROFVINT DRAZLON!** Speaking another creature's language can open doors that weapons alone cannot -- being heavily armed without the ability to communicate often leads to hostility.

---

# ADVENTURING MOTIVATIONS

> The world is a dangerous place -- people don't usually just "go adventuring" without a reason. Your motivation should make your character want to work with the rest of the group.

### From the Core Rules PDF (page 31):

1. **I owe a life debt to someone in my party.** Chat with your party: Who else needs help with their backstory? What did they do to help you?
2. **I owe a LOT of money to some very dangerous people.** What did you do with the money? Your GM probably has some GREAT ideas of bad guys you're in deep with.
3. **I need to grow in power to defeat someone who has wronged me.** Do you know who wronged you, or are they unknown? Is it an individual or a larger group? Chat with your GM; they'll love to help fill in the blanks.
4. **I am searching for a way to bring a loved one (or someone I hate) back from the dead.** Who even told you this was possible? What if they don't remember you?
5. **I am trying to get back home.** Where is home for you, do you even remember? What caused you to leave? Chat with your GM; they can give you some options of homelands.
6. **I am searching for the one who stole something valuable from me.** Is it an object? A person? A memory? Was it really stolen or did you make a bad bargain?
7. **I was polymorphed into another kind of creature by a wizard.** Hah! How would it feel for a cute halfling to become an ugly goblin? What did you do to anger the wizard?
8. **Duty calls. I am honor-bound to serve.** Who calls you? Your king? Your family? An ancient alliance or grudge? Talk with your GM and other players for ideas and mutual connections.
9. **I was best friends with (and betrayed by) ______.** Do you want to win them back? Get even? Warn others of their backstabbing? Talk with your GM about who this might be.
10. **I'm lost.** Physically? Emotionally? Spiritually? Are you in the wrong country or even plane of existence?
11. **Wanderlust/Pilgrimage.** What amazing thing do you want to see or experience? Have you spent too much time away from the road? Your GM probably has some fantastic locations in mind for you.
12. **My home town is in danger.** Are you looking for a cure? Mercenaries? Personal strength?
13. **Curiosity! I want to learn the DEEP secrets.** Which secrets? Magical, lore, politics, what really happened in history?
14. **To prove my worth.** You were always underestimated -- by your family, your village, your peers, or yourself. What will it take to show them you're more than they thought? What kind of recognition do you seek?
15. **I'm following a prophecy.** A mysterious figure or ancient text foretold that you would play a crucial role in the fate of the world. What do you know of the prophecy? Do you believe it?

### From gamedata.js (app-specific list, may differ from PDF):

1. Seeking revenge against those who wronged you
2. Searching for a lost family member or loved one
3. Paying off a massive debt
4. Fulfilling a prophecy or destiny
5. Running from a dark past
6. Proving yourself worthy to your family or clan
7. Seeking forbidden knowledge
8. Protecting someone who cannot protect themselves
9. Atoning for past sins
10. Chasing glory and fame
11. Hoarding wealth beyond measure
12. Exploring uncharted lands and forgotten ruins
13. Hunting a specific monster or villain
14. Discovering the truth about your mysterious origins
15. Serving a deity or higher power
16. Building a legacy that will outlast you
17. Escaping boredom and seeking thrills
18. Liberating the oppressed
19. Finding a cure for a rare disease or curse
20. Recovering a stolen or lost artifact
21. Making the world a safer place
22. Gathering allies for an impending war
23. Mastering your craft or magical ability
24. Finding your place in the world
25. Doing it for the stories to tell at the tavern

> **Or Make Your Own!** A great character background has connections with the world, its people, your fellow heroes, or even the bad guys. Work with your GM and fellow players to find a motivation that will cross paths with where the story goes. Every good hero has a desire. What's yours?

---

# DISCREPANCY SUMMARY: gamedata.js vs PDF

The gamedata.js file has significant differences from the Core Rules PDF for many exotic ancestries. Below is a summary of every ancestry where the ability name, description, or mechanics differ:

| Ancestry | gamedata.js Ability | PDF Ability | Key Difference |
|---|---|---|---|
| Dwarf | hitDieBonus: 2 ("+2 to Hit Die rolls") | "+2 max Hit Dice" | Bonus type differs |
| Halfling | Resets on "Short Rest" | Resets on "Safe Rest" | Rest type differs |
| Gnome | Ally rolls a 1 on d20 | Ally rerolls any single die | Trigger and scope differ |
| Bunbun | "Hop Skip" +1 Speed, jump doubled | "Bunny Legs" free hop after Defend/Interpose | Completely different ability |
| Birdfolk | "Glide" horizontal glide | "Hollow Bones" fly Speed, Vicious crits | Completely different ability |
| Celestial | "Divine Heritage" Radiant resist, free Heal | "Highborn" disadvantaged save becomes Neutral | Completely different ability |
| Changeling | "Shapeshifter" +1 Influence | "New Place, New Face" +2 shifting skill points | Different mechanic |
| Crystalborn | "Crystalline Body" +1 Armor, light | "Reflective Aura" KEY armor+damage on Defend | Completely different ability |
| Dragonborn | "Dragon's Breath" 15ft cone 2d6 | "Draconic Heritage" +1 Armor, LVL+KEY damage | Completely different ability |
| Dryad/Shroomling | "One with Nature" +1 Naturecraft, regen | "Danger Pollen/Spores" Daze on Wound | Completely different ability |
| Fiendkin | "Infernal Legacy" Fire resist, darkvision | "Flameborn" neutral save becomes advantaged | Completely different ability |
| Goblin | "Nimble Escape" BA Disengage/Hide, +1 Stealth | "Skedaddle" free 2-space move after targeted | Different mechanic |
| Half-Giant | "Towering Presence" +2 HP/lvl, -1 Stealth | "Strength of Stone" crit reroll, +2 Might | Completely different ability |
| Kobold | "Pack Tactics" advantage with ally adjacent | "Wily" reroll attack, +3 Influence, dragon advantage | Completely different ability |
| Minotaur | "Horns" d6 natural weapon + charge bonus | "Charge" push creatures when moving 4+ spaces | Different mechanic |
| Orc | Drop to 1 HP (1/Long Rest) | Drop to LVL HP (1/Safe Rest) | Values and reset differ |
| Oozeling | "Amorphous" squeeze, poison immune | "Odd Constitution" Hit Die upgrade, max heal | Completely different ability |
| Planarbeing | "Planar Step" 15ft teleport | "Planeshift" phase out on Defend, -2 max Wounds | Completely different ability |
| Ratfolk | +1 Speed, darkvision, move through larger | +2 Armor if moved last turn | Completely different ability |
| Stoatling | "Slippery" grapple advantage, +1 Finesse | "Small But Ferocious" bonus d6 per size diff | Completely different ability |
| Turtlefolk | "Shell Defense" toggle +2/0 Speed, +1 Armor | "Slow & Steady" +4 Armor, -2 Speed | Different values |
| Wyrdling | "Wild Magic" on nat 1 + random cantrip | "Chaotic Surge" Chaos Table on tiered spells | Different trigger and effect |

**The gamedata.js exotic ancestries need to be updated to match the PDF.** The common ancestries are mostly correct with minor wording differences.
