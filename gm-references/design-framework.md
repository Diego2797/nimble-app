# Nimble TTRPG - Design Framework (Creator's Kit)

> Source: Nimble Creator's Kit 1.2 (Copyright 2025 Nimble Co.)
> Writing: Evan Diaz.

> Design principles for creating Nimble-compatible content: classes, subclasses, monsters, adventures, spells, items, and more. Useful for homebrewing and understanding why Nimble works the way it does. See `monsters.md`/`encounters.md`/`legendary-monsters.md` for direct monster-design content; `rewards.md` for magical item design; `adventures.md` for adventure framework.

---

## 1. Avoid Fiddliness

**Fiddliness:** clunky, overly complex, or tedious mechanical overhead that slows down play and distracts from the core fun.

### Can I do this in fewer steps?

A single in-game action should typically take only one single real-world action to resolve. Fight the urge to add steps (saves, extra dice, etc.) wherever possible! Ask if the effect can simply happen automatically, or when something else does.

How long an action takes to resolve isn't about being in a hurry, it's about concentrating on the fun. Fiddly mechanics dilute the fun, spreading the same amount of fun out over a longer period of time. Take, for example, monster armor. Initially in development it reduced damage by a flat amount. Mathematically this worked, but mechanically it added an additional step to resolve. It didn't take very long, but multiplied over the dozens of attacks in an encounter, or thousands of attacks in a campaign, it was a suboptimal solution since it took up a significant amount of time.

Asking the question, "Can I do this in fewer steps?" is how Nimble landed on how monster armor currently works. Same end result, but with fewer mechanics getting in the way. This means more time for additional combat, story, roleplaying, and goofing off!

Find a way to eliminate as many steps as possible. Think this way with all of your design: Recognize how many steps are needed to resolve an action and eliminate as many as possible. Think of how it will be physically be resolved at the table.

### Can I make the calculation easier?

Math is inextricably tied to TTRPGs, it's part of the fun! But we should avoid anything but the simplest, quickest calculations that can be done in one's head. Even very simple calculations, when there are a lot of them can grind play down to a halt and kill momentum. So we should avoid rolling and summing too many dice at a time. **Summing at most 3–4 smaller dice or 2–3 larger dice is a good rule of thumb.** More than that, and players will often have to hunt for extra dice, roll them (increasing the odds that one lands cocked, rolls off the table, etc. eating up more time), and adding them all up takes longer as well.

Rolling LOTS of dice is fun—sometimes. It can quickly turn into a chore and add slog to the game when required too often. Lots of dice eliminates variability as well, the more dice that are rolled the more likely you'll end up with an average result. A fistful of dice should be special and rare.

Where possible think of creative solutions to more quickly generate high numbers. In the core rules we use LVL, d20s, d100s, dXX, or flat damage (e.g. **Condemn** deals a flat 30 damage, this could have been 12d4, or 9d6. That would have dealt the same amount of damage, but would have taken much, much longer to accomplish).

> **Exceptions.** Iconic or very large spells (e.g., tier 8 or 9 spells) or abilities that happen rarely (1/Safe Rest) can bend or break this rule of thumb. Cantrips or abilities that could happen multiple times in an encounter or even multiple times each turn should be especially quick to resolve.

- **Build mechanics where players can immediately see the result** rather than find the result (adding dice). Rolling 1d12 with advantage is easier than rolling and adding 2d8. Both have a similar average result—one requires no math, the other does.
- **Avoid dividing by anything other than 1/2** (and even that shouldn't happen too often).
- **Avoid multiplying difficult numbers** (×2 is easy, ×13 is not).
- **Avoid adding multi-digit numbers** (2+2 is easy, 7+16 is a bit harder). Again, it isn't that players can't perform these operations, it's that they take longer than necessary and add small bits of friction to the game. Those bits add up, stealing valuable brain space, killing momentum, and creating SLOG.
- **Design around easy increments** such as 2, 5, and 10 as flat modifiers where possible.
- **Avoid adding multiple large dice.** For instance rolling 4d6 and summing a result of 3, 4, 1, 5 is easy. Rolling 4d12 and a result of 7, 5, 9, 11 is a bit harder. Rolling 4d20 and a result of 7, 16, 19, & 14 is more challenging still. Much easier would be something like 2d6+5, 1d12+20, and 1d20+30 respectively. They have a similar average result but resolve much more quickly.

**For instance, look at how the Cheat's Sneak Attack began in development (as much as 10d6 at high levels), to where it ended up in the final version (1d20+20). Much better!**

### Conditions

**Tracking Game States.** Be very careful with conditions and other game states that need to be tracked. Mechanics like this are really great for video games where the computer can handle the fiddliness, but for a manually resolved TTRPG it can become a big headache. These frequently result in interrupting the Flow as players remind others about the ongoing state, adding friction and slowing play down.

With this in mind, **damage over time should be avoided completely.** All damage should be resolved as the attack resolves. Conditions that have a visual component like Prone are easier to remember since you can physically knock the miniature over to represent it. Other conditions that cannot be represented visually should be minimized.

**Monsters (or heroes) that can apply 1 condition, or temporary conditions that last only a single round, are fine.** When there are multiple different conditions to track simultaneously the fun doesn't increase—with more to track, generally the fun decreases. If something MUST be tracked, make it as easy as possible. For instance see the Hexbinder class, all of their afflictions apply only to a single monster, and other players need not remember any of them!

---

## 2. Maintain the Flow

Play proceeds most quickly when each player can take their turn without interruption and without waiting on anyone else. This is **Flow**. Actions that interrupt the Flow should ideally be both **important and rare**. Failing that, they should at least happen **asynchronously**.

- **Important & Rare.** A great example of this is Interposing for a Dying ally. This is both very important, and likely happens only on occasion.
- **Asynchronous.** Defend does technically interrupt the Flow, AND can happen rather commonly (each turn), AND is relatively low impact—the saving grace is that this happens asynchronously, or off turn. A hero choosing to Defend can privately calculate their HP without slowing anyone else down. The GM doesn't care (or even need to know) when a Hero Defends. That's between them and their character sheet.

Any fiddliness, especially if it disrupts the Flow, should happen off-turn whenever possible. See the Oathsworn's Judgment Dice, and the Berserker's "That all you got?!" Those dice are rolled or expended when it's not their turn. No one else needs to wait for those actions to resolve.

### The Worst Offender

The worst offender for breaking the Flow is any mechanic that requires information from another player before proceeding (e.g., in older d20 fantasy games: rolling to hit vs AC, rolling initiative, or saving throws). These are common (they happen for EVERY attack), are often low impact (it would not be game breaking if they just happened), and they completely halt play for everyone until the multiple steps and back-and-forth is resolved. Avoid these mechanics like the plague if you want the game to run smoothly.

**This is why saves should be quite rare and meaningful.** If a save MUST take place, consider if you can have it not tied to damage but an additional secondary effect. This way, if 3 of the 4 targets die first, you only need to roll 1 save instead of 4. Saves should be… saved for very meaningful (e.g., ones that can apply powerful conditions) or uncommonly used abilities (e.g., 1/encounter).

**Cantrips and low level spells should NOT require a save or any other feedback from other players.** Take a look at how these spells changed over the course of playtesting:

#### Entice — Evolution

**OLD VERSION**
> **Entice** — Cantrip, 1 Action, Single Target
> WIL Save. The target takes 1d6 damage and moves 2 spaces closer to you. Repeat until they save.

Note that this initial version potentially required numerous save rolls AND damage rolls; combine that with this being a low impact cantrip, it could conceivably be cast 3 or more times EVERY ROUND. It took far too long to resolve this single spell. So it was simplified to resolve very quickly and a small bonus was added to compensate.

**FINAL VERSION**
> **Entice** — Cantrip, 1 Action, Single Target
> Damage: 1d4 (ignoring armor). On hit: target moves 2 spaces closer to you.

The final version uses a single roll to both determine damage and movement. Instead of a save, a d4 was used as the damage die to put a reasonable limit on how often this can take place (the d4 is most likely to miss when cast multiple times).

#### Vicious Mockery — Evolution

**OLD VERSION**
> **Vicious Mockery** — Cantrip, 1 Action
> WIL Save. 1d6 psychic damage. The target's next attack is made with disadvantage. +1d6 damage every 5th level.

Note that this initial version breaks many of the guidelines. It is a low impact cantrip that requires a save. Lacks clarity (if I land this twice, are their next 2 attacks with Disadvantage, or their next single attack made with Disadvantage 2?), and the spell adds dice as one levels up (up to a maximum of 5d6 at level 20). Too fiddly, too slow.

**FINAL VERSION**
> **Vicious Mockery** — Cantrip, 1 Action
> Damage: 1d4+INT psychic (ignoring armor). On hit: the target is Taunted during their next turn. +2 damage every 5 levels.

The final version of the spell does essentially the same thing (a small amount of damage and a debuff), but does it in a more streamlined, clear, fun, and intuitive way.

### Design Summary

Special attention must go toward ensuring that each action is simple and quick to resolve. Each step doesn't take long, but when multiplied across every attack of every round, it adds up to slog. People start checking their phones, losing interest, and you can't do as much cool stuff.

**Flow should be maximized and interruptions minimized.** If there is an interruption it should be:
- **Minimal** (in terms of how long it takes to resolve),
- **Big** (in terms of the result it has on the game state),
- **Heroic** (or conniving—for the bad guys), and
- **Rare**.

### The Source of Fun

The fun comes from how all of these simple pieces interact with each other and how the heroes and monsters shape the story. Complex rules elements that take a long time to physically perform don't add to the fun, they detract from it.

---

## 3. Designing Classes

### Front-load the Fun (But Don't Overwhelm)

It's not very fun to have to wait until level 14+ to see a hero's build fully come online. Try hard to "front load" the really cool things by levels 3–7 (without making the very early levels overly complicated or busy). A class should feel quite complete by then, with additional levels simply giving more options and power, but the class fantasy should already be essentially fully unlocked.

### Level-by-Level Framework

- **Level 1.** Should give a small taste of the unique mechanics of the class. Think simple and flavorful. Level 1 should NOT include any additional choices. There are enough choices being made at level 1 already: class, ancestry, stats, background, etc. No need to slow things down further.
- **Level 2.** You can introduce 1 or 2 pieces of additional mechanical complexity (e.g., mana, more options to use their resource), just not too much. Utility! Around levels 2–4 a class will typically get some fun out of combat utility ability as well.
- **Level 3.** Subclass choice. Each subclass should push the class in one particular direction: more offensive, more defensive, better at range, better at buffing allies, better at hindering enemies, etc.
- **Level 4.** By now you are nearly a fully fledged hero. Typically introduces a big choice from among a list of class options (e.g., Savage Arsenal or Underhanded Abilities). Classes with a lot going on already may have their options at later levels. Simpler classes may have class options more frequently. Aim to have enough options so that by level 20 a hero would have chosen roughly 1/2 to 2/3 of them.
- **Level 5 & 10.** Typically a big damage increase or other large jump in power level.
- **Levels 7, 11, & 15.** Additional subclass boons. Do something you can already do, but better/more often. Gain a new iconic ability. Fill in a weakness. Overcome a common constraint other classes have.
- **Levels 4, 8, 12, & 16.** Key Stat Increase. And optionally another small boost (e.g., unlock an additional tier of spells).
- **Levels 5, 9, 13, & 17.** Secondary Stat increase and a larger boost.
- **Levels 18, 19, & 20.** Big feature (LVL 18), Epic Boon (LVL 19), Capstone (LVL 20). Very few people will ever reach levels 10-12, even fewer will reach beyond these levels—but don't let this stop you from really putting in the work to make sure the higher levels remain interesting! Level 20 in particular should be a BIG DREAM type of ability. Something players can think about, theorycraft with, and imagine being awesome using it. It should serve as a motivation to play the class, even if they never reach level 20, it's fun to dream of "how awesome it would be if…"

### Framework Summary Table

| LEVEL | FEATURE |
|-------|---------|
| 1 | Simple Taste of the Class |
| 2 | More Fully Fledged, Utility Ability |
| 3 | Subclass: Push 1 Direction |
| 4 | Key Stat Increase, Cool Choice |
| 5 | Secondary Stat Increase, Damage Increase |
| 6 | Cool Choice |
| 7 | Subclass |
| 8 | Key Stat Increase, New Core Ability |
| 9 | Secondary Stat Increase, Cool Choice |
| 10 | Improve level 5 Feature |
| 11 | Subclass |
| 12 | Key Stat Increase, Cool Choice |
| 13 | Passive Buff, Secondary Stat Increase |
| 14 | Cool Choice |
| 15 | Subclass Capstone |
| 16 | Key Stat Increase, Cool Choice |
| 17 | Secondary Stat Increase, Ability Boost |
| 18 | Big Iconic Improvement |
| 19 | Epic Boon |
| 20 | Dream Big Capstone |

> **Note.** These framework features are only a starting point. If a class has other core abilities (e.g., spellcasting, sneak attack) the cadence may vary slightly. Full spellcasters gain a new spell tier every other level. Half casters may gain new spells slightly slower.

### Resting

**There are NO abilities that recharge on Field Rests.** Field Rests should be identical for every class, they are only to regain lost gain HP. Otherwise the party can be divided, some wanting to continue adventuring, others wanting to rest after every encounter. See the 5e Warlock and Monk as somewhat infamous examples of this dynamic.

Players will often adopt "optimal" but unfun play patterns if allowed. Don't create mechanics that incentivize playing unheroically or annoyingly. GMs can disallow frequent rests at their own table by forcing "random encounters" upon the party, but that just further slows the story down and is a band-aid. Or they can homebrew a rule, but then risk becoming "the bad guy" not letting their players play how they want. **Best to have the rules as written be the bad guy.**

Don't incentivize sitting around and doing nothing. The optimal thing should also be the most fun, most heroic thing.

### Hoarding & Going Nova

Intelligently saving and using resources can be very fun, but their extremes: **hoarding** (NEVER spending resources) and **going nova** (immediately spending ALL of your resources) are both generally unfun play patterns. Since it can trivialize challenging encounters, or characters can feel underpowered or bored if they have spent all of their resources and have no way to regain it (or are afraid to spend them). Also frequently players will guess incorrectly when to hoard (going back to town with plenty of mana remaining) and when to spend their resources (there is another big monster right around the corner).

Lean toward "per encounter" and similar abilities, and you can encourage the wise spending of resources by allowing heroes to regain a small amount of spent resources temporarily.

### Lane Protection

Be careful not to step on the toes of other classes, maintain the unique mechanics and flavor of each class. **No two classes should deal damage the same way, avoid damage the same way, move around the same way, etc.** They should all fill a unique role and feel different to play. No class other than the Mage should have access to 3 spell schools and deal damage primarily through spending mana casting spells. No other class should get their damage increased when they are attacked or be able to freely Interpose—that is the domain of the Oathsworn.

### Retraining

In Nimble, heroes can retrain chosen abilities during a Safe Rest, think of a fun/thematic task the hero can perform to engage with the world and role play the means by which they choose new skills. Think of ways to get heroes to look for new NPCs, new areas, and ask questions of the GM to retrain. This allows the GM to introduce important new allies, environs, or even new problems and quests (the local wizard/soldier who retrains the mage/commander can ask for a favor afterward).

### Multiclassing

Don't worry about building or balancing classes & subclasses with multi-classing in mind. That will exponentially complicate your work and also dilute the fun of the base class. It's okay for multiclassing to be overpowered, easy to break, and a bit silly. Let it happen, and leave it to local GMs to adjudicate or even to allow it or not.

---

## 4. Clear & Concise Writing

Avoid overly wordy explanations designed to block "rules lawyers"—those who might exploit technicalities—since this can make the rules harder to read and less enjoyable for most players. Write in a way that's clear and concise, instead of exhaustive detail that tries to cover every possible loophole. Trust the heroes and GM to interpret the rules sensibly, and don't let the fear of rules lawyers bog down your writing with complexity. If you can also prevent rules exploitation without making the text longer or harder to read, that's fine—but never sacrifice readability for it.

**Take for example, the Birdfolk ancestry boon** was initially worded: *"You have a fly speed as long as you are wearing Leather or lighter armor."* Compared to how it ended up in the final version: *"You have a fly Speed as long as you are wearing armor no heavier than Leather."* Both are brief and easy to read, but the second also prevents the GM from having to deal with unfun technicalities ("but I'm wearing Plate AND Leather armor so…").

For an example of a change that was overly wordy and technical, look at the rules for dual wielding. The rules do not go into deep detail about attacking with different sized weapons and multiple instances of disadvantage and other edge cases. A simple example is given, and the GM can adjudicate any edge cases with the rules given.

> **Additional Clarity.** If such is needed, can be supplied in sidebars or FAQ! Simple rules followed by an example or FAQ in a callout box is often better than overly wordy core mechanics. Making it bite-sized helps with information transmission.

We should aim for brevity, even when clarity isn't an issue. For example, here is a comparison of how one feature was initially worded VS how it ended up in the final books:

**OLD VERSION**
> **Key Attribute Increase.** You may increase one of your key attributes (STR or DEX) by +1.

**FINAL VERSION**
> **Key Stat Increase.** +1 STR or DEX.

"Stat" is more clear (and shorter) than "Attribute," and we can cut an entire sentence, communicating the same idea in much fewer words. It may take a few rounds of revisions to hone your wording, but it's worth it!

### Naming Classes

Use class names that do not have lots of built-in preconceptions. This will free you from explaining why your warlock or your sorcerer works this way instead of "how it's supposed to work".

### Stats, Skills, & Equipment Proficiencies

Be VERY careful handing out shield and wand proficiency. They are VERY good. Likewise with plate and mail armor proficiency, but to a lesser extent.

---

## 5. Spell Framework

### Spell Range

The typical spell Range is 8. This is because it is just beyond how far a creature can move in a single turn (6 spaces). Spells with less Range should have some benefit, spells with a longer Range should have some drawback.

### Actions

- **Cantrips:** cost 1 action.
- **Tiered spells:** typically cost 2 actions.
- **Reaction or non-damaging spells:** can be reduced to 1 action instead.
- **Ranged AoE spells:** should cost 3 actions.

### Spell Schools

Each spell school should have its own flavor and mechanics:
- **Radiant spells** have Reach (not Range), aid allies and punish evildoers.
- **Wind spells** use the d4, are Vicious, and interact a lot with movement.
- **Ice spells** are very defensive and controlling.

### Spell Damage Scaling

The average damage of a spell per tier is listed below. If a spell does more than the average it should have a drawback (limited Range, status requirement, etc.), if it does less than this it should have some other utility or benefit (ignores armor, doesn't miss, etc.).

### Average Spell Damage by Tier

| Tier | Damage | Tier | Damage |
|------|--------|------|--------|
| Cantrip | 6 | Tier 5 | 56 |
| Tier 1 | 14 | Tier 6 | 69 |
| Tier 2 | 23 | Tier 7 | 83 |
| Tier 3 | 33 | Tier 8 | 98 |
| Tier 4 | 44 | Tier 9 | 114 |

> **Note.** These numbers assume no additional benefit or drawbacks, spells can and should deviate from the average once other benefits or drawbacks are considered.

> **Remember!** Damage is often NOT the most important aspect of a spell or ability. No single spell should be so good that it is the "go-to" spell in every situation. A spell's secondary effects are frequently the most important, fun, and memorable aspects as they allow for more creativity. Having a toolbox of different spells that are each best in their own situation is far more interesting than hyper-consistent (boring) spells that always hit exactly on the average damage curve, have no restrictions, or other benefits, drawbacks, or weirdnesses.

### Add Wrinkles

Spells that only deal damage in a straightforward way are boring.

### Avoid Legalese

Spells, more than other abilities can fall prey to Legalese: the language that lawyers speak in when writing contracts. Legalese is long-winded and not fun to read.

**Compare 5e Wish** (~400 words of specific options and contingencies including Object Creation, Instant Health, Resistance, Spell Immunity, Sudden Learning, Roll Redo, and Reshape Reality sub-clauses, stress penalties, and a 33% chance of losing the spell permanently) **to the Nimble equivalent:**

> **Manifest Reality** — Tier 9 (1/Safe Rest)
> Reshape reality in a single, decisive way (e.g., you could gain forbidden knowledge, conjure wealth, undo death, rewind time, or grant an extraordinary boon to yourself or allies). However, such immense power can be volatile—if your wish strains the fabric of reality too much, it may unravel in unpredictable ways. After casting, make a DC 10 STR save or permanently lose the ability to cast this spell. This DC increases by 1 each time you cast Manifest Reality.

Some examples are provided to help seed some possible ways this spell could be used, but beyond that, room is left for creativity. Since this is a collaborative game (and not adversarial contract law) with a GM who can fairly adjudicate anything that is unclear, we don't need that much detail. The players and the GM all want the most fun possible, we should leave the specifics to them.

---

## 6. Summary of Designing Monsters

*(Full monster-design content is in `encounters.md`. Key points:)*

- Monsters should **feel different** even with identical stats.
- Monster groups should have a **shared trait** with simple flavor.
- Use a **wide level band** per monster group (1/3 to 8+ where appropriate).
- Fill a variety of **roles** (Melee, Ranged, Controller, AoE, Summoner, Striker, Ambusher, Defender, Support).
- **Don't leave the GM wondering** what to do—1 action or 1 clearly best action.
- Use **shared dice sizes** per group (goblins all d6, kobolds all d4).
- Add effects beyond damage: **Automatic, On Hit, On Damage, On Crit/Miss, On Death.**
- Avoid: **healing monsters, kiting monsters, complex individual monsters, overly detailed or brief stat blocks.**
- For **Legendary monsters:** easy to run at a glance, uncertainty/Bloodied/Last Stand creates the ebb and flow, give the GM a script for memorable combat.

---

## 7. Summary of Adventure Framework

*(Full adventure-design content is in `adventures.md`. Key points:)*

- **1200–2000 words total.** Cool name, 100-word background, 100-word hooks, 100-word treasures.
- **200–300 words** of 2–4 traveling events.
- **600–1200 words** of 6–10 dungeon rooms (50–100 words each).
- Rooms contain: trap/obstacle, information, combat, NPCs, dilemmas, WEIRD things.
- Maximize **agency** (non-linear, multiple solutions). Give a satisfying **ending** and describe the **aftermath**.
- Include **maps** and **extra notes** to help the GM.

---

## 8. Magical Items Design

*(Full magical-item content is in `rewards.md`. Key points:)*

- Magical items inspire **choices, deepen the story, or enhance the fun**—not inflate power.
- Item roles: shore up weakness, improve strength, cause a wrinkle, hook into story, decoration, prestige, get out of jail free, push your luck, silliness, temporary/consumable, grant unique power.
- **Buy vs. Find:** flat bonuses → buy; unique/prestige → find/given; consumables → either.
- **"Strictly better" is strictly worse.** Every item should have trade-offs.

---

## 9. Nimble Trade Dress

You are certainly encouraged to develop your own trade dress (the look & feel of your own products) rather than mimic Nimble's. The following is information on why certain design choices were made so you can have insight on how to develop your own style.

### A5 Book Size

The A5 size (148 × 210 mm, or 5.83 × 8.27 inches) is common for printing and easily "handleable" at half the size of other common d20 books. They are compact and fit behind the GM screen easily, are not too large & heavy to take with you, or share at the table. The size constraints of the A5 page encourages economy of words rather than writing too much to fill the page. Much (most?) of my time writing was spent editing down and removing words so that they would actually FIT on the page or spread without wrapping to a new one!

It's a much more approachable format for readers new and old, less intimidating due to its diminutive size. The constraints of this smaller form factor is a huge creative blessing.

### Layout

A 2 column layout saves page space from new paragraphs not filling in an entire line (you can typically fit roughly 25% more content per A5 page by using 2 columns), and allows for easier scanning.

Justification & hyphenation provides for a neater layout with the small, tight layout. Instead of extra space between paragraphs, secondary paragraphs are indented. Sometimes you just need to squeeze one more line on a page and these choices allow for that as well.

### Fonts

**Headlines** use **Beaufort Pro Heavy**. This big, bold, chunky font has fantasy vibes and makes for easy scanning.

**Body text** uses **Avenir Next Condensed** at a size of **9.5 pt**. Condensed fonts are great at fitting more content on a page when it matters, without sacrificing legibility. Especially when using a 2-column layout, the width of the font matters far more than anything else. More words per line is important to reduce the needless usage of page space, enables more flexibility of justification, as well as fewer hyphens and ragged ends.

### Imagery & Art

The amount and quality of imagery greatly depends on your budget, but aim for having a piece of spot art on each spread, and a big splash of art every 2–3 spreads. Art helps "mark" pages like a guidepost when looking for it later, helps set the vibes, and ease the burden of reading giant walls of text for first time readers by breaking it up into more bite-sized chunks.

Assuming you are not an artist, the cost of art can vary dramatically. See the chart below for common ranges for pieces of art (in USD):

| Art Type | Range (USD) |
|----------|-------------|
| Licensed stock art (from a large company) | $1 – $20 |
| License existing art (directly from an artist) | $50 – $250 |
| Exclusive license existing art (directly from an artist) | $150 – $450 |
| Commission New Small Piece (items, spot art; experienced, smaller artist) | $50 – $100 |
| Commission New Medium Piece (character, no background; experienced, smaller artist) | $300 – $500 |
| Commission New Big Piece (character w/ background; experienced, smaller artist) | $400 – $800 |
| Commission New Piece from a "Big" Artist (character w/ background) | $1,000 – $2,000 |
| Commission New Big Piece from a "Big" Artist (Complex Scene) | $3,000 – $7,000+ |

---

## 10. Final Thoughts

You've got the keys to what makes Nimble tick: **fast, fun, fluid play.** But knowing isn't the goal. **Creating is.** So don't wait for the perfect idea or the right moment. Make something today.

Start small, start weird, just start. Whether it's a scrappy subclass, a wild adventure, or a rad monster.

**What to do with your creation:** Enjoy it with your friends at your own table, give it away to others, or even sell it and make a lot of money! You could also submit it to a Nimble design jam contest, for feedback and the chance to be included in a future official Nimble release. Whatever you do, Nimble Co. would love to see what you come up with. Join the Nimble Discord (nimblerpg.com/discord) and show it off. Ask questions. Get feedback. Inspire and be inspired.

---

## 11. Nimble 3rd Party Creator License (Summary)

- **You may** create and publish original works based on or compatible with Nimble (the "System") without Nimble Co.'s prior approval and retain all profits.
- **You may use and reference** this book's text in your original products (adventures, classes, subclasses, monsters, supplements, etc.). Copying large portions of text verbatim with little or no added value does not qualify as an original product.
- **You may not** use the System's art or logo but may use the Nimble compatibility logo.
- **Your product must not** appear to be an official Nimble product or endorsed by Nimble Co.
- **Required Attribution.** Include in your product: *"[Product Name] is an independent product published under the Nimble 3rd Party Creator License and is not affiliated with Nimble Co. Nimble © 2025 Nimble Co."*

For full license terms and FAQ see nimbleRPG.com/creators.
