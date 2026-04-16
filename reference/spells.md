# Nimble TTRPG - Complete Spell Reference

> **Source of truth**: Nimble - Core Rules.pdf (pages 44-53) and Nimble 5E - Hexbinder.pdf (page 10).
> All ranges are in **SPACES** as written in the PDF. A spell's mana cost equals its tier. Cantrips cost 0 mana.

## General Spell Rules

- **Mana**: A spell's mana cost equals its tier. Cantrips cost no mana.
- **Upcasting**: You can spend additional mana on tiered spells (up to the tier you have unlocked) to make them stronger for each additional mana spent.
- **Multi-Target / AoE**: Do not miss or crit. A single roll is applied to all targets. Ignore (dis)advantage from conditions on individual targets (e.g., Blinded, Grappled). (Dis)advantage granted to *you* still applies.
- **Save DC**: Typically 10 + KEY stat.
- **Range and Reach**: Spells with "Range" can target from a distance but are cast with disadvantage if an enemy is adjacent to you. Add 1 die of disadvantage to gain +2 Range (max +6). Spells with "Reach" cannot do this but are cast as normal even in melee.
- **Defend**: If you've already Defended this round, you can't use abilities requiring it again (even for free).

---

# 1. Fire Spells

> Deal high, consistent damage at medium range. Can inflict Smoldering and gain additional destructive effects against Smoldering enemies.

**Smoldering**: This condition does nothing on its own, though some spells and abilities have additional effects against Smoldering creatures.

## Cantrips

### Flame Dart
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 8
- **Damage**: 1d10
- **Description**: Hurl a dart of flame at a creature. On crit: Smoldering.
- **High Levels**: +5 damage every 5 levels.

### Heart's Fire
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 4
- **Description**: Give an ally within Range an extra action. Spend 1 mana to cast this when it is not your turn.
- **High Levels**: +1 Range every 5 levels.

## Tiered Spells

### Ignite
- **Tier**: 1
- **Actions**: 2 Actions
- **Type**: Single Target
- **Range**: 8
- **Damage**: 4d10
- **Description**: Deal 4d10 to a Smoldering target, ending the condition on hit.
- **Upcast**: +10 damage.

### Enchant Weapon
- **Tier**: 2
- **Actions**: 1 Action
- **Type**: Single Target
- **Concentration**: Up to 1 minute
- **Description**: A weapon you touch is enchanted with magical flame. It deals +KEY damage and inflicts Smoldering on crit.
- **Upcast**: +KEY damage.

### Flame Barrier
- **Tier**: 3
- **Actions**: 1 Action
- **Type**: Self
- **Reaction**: When attacked, Defend for free. Until the start of your next turn, melee attackers against you take KEY damage (ignoring armor) and gain Smoldering.
- **Upcast**: +KEY damage.

### Pyroclasm
- **Tier**: 4
- **Actions**: 2 Actions
- **Type**: AoE
- **Reach**: 3
- **Damage**: 2d20+10 (ignoring armor)
- **Description**: Others within Reach take 2d20+10 damage (ignoring armor) on a failed DEX save. Half damage on save. Smoldering creatures fail.
- **Upcast**: +1 Reach, +2 damage.

### Fiery Embrace
- **Tier**: 5
- **Actions**: 2 Actions
- **Type**: AoE
- **Concentration**: Up to 1 minute
- **Reach**: 8
- **Description**: While within Reach: 1 ally gains the effects of Enchant Weapon. Enemies gain Smoldering, lose damage resistance, and their damage immunity is reduced to resistance.
- **Upcast**: +1 ally.

### Living Inferno
- **Tier**: 7
- **Actions**: 3 Actions
- **Type**: Self
- **Description**: Gain the effects of Fire Barrier until your next turn. At the end of this turn and your next turn, cast Pyroclasm for free.
- **Upcast**: Upcast Flame Barrier and Pyroclasm.

### Dragonform
- **Tier**: 9
- **Actions**: 5 Actions
- **Type**: Self
- **Description**: Transform into a Huge dragon. Gain 3 actions, a fly speed of 12, LVL Armor, 10 x LVL temp HP, and:
  - **Tooth & Claw**: Action: (Reach 2) 1d20+LVL damage (ignoring armor). Inflicts Smoldering.
  - **Immolating Breath**: 2 Actions: (Reach: Cone 8). DC 20 DEX save, KEY d20 damage, half on save. Smoldering targets fail.
- You can maintain this form for as long as the temp HP granted by this spell remain (max 10 minutes). When it ends, you drop to 0 HP.

---

# 2. Ice Spells

> Deal medium damage at long range, with a focus on controlling the battlefield and protecting the spellcaster. Some ice spells have additional effects against Hampered targets.

**Hampered**: Any creature with actions or movement reduced; e.g., Dazed, Slowed, Grappled, Restrained, Prone, in Difficult Terrain.

## Cantrips

### Ice Lance
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 12
- **Damage**: 1d6 cold or piercing
- **Description**: On hit: Slowed.
- **High Levels**: +3 damage every 5 levels.

### Snowblind
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Reach**: 1
- **Damage**: 1d6
- **Description**: On hit: Blinded until the end of their next turn.
- **High Levels**: +3 damage every 5 levels.

## Tiered Spells

### Frost Shield
- **Tier**: 1
- **Actions**: 1 Action
- **Type**: Self
- **Reaction**: When attacked, Gain 2 x KEY temp HP and Defend for free. The ice melts and these temp HP are lost at the start of your next turn.
- **Upcast**: +2 x KEY temp HP.

### Shatter
- **Tier**: 2
- **Actions**: 2 Actions
- **Type**: Single Target
- **Range**: 12
- **Damage**: 3d6
- **Description**: If any die rolls the max against a Hampered target, this counts as a crit. On crit: +20 damage.
- **Upcast**: Increase the result of ANY die by 1. +5 damage on crit.

### Cryosleep
- **Tier**: 3
- **Actions**: 2 Actions
- **Type**: AoE
- **Reach**: 12
- **Description**: Creatures in a 2x2 area within Reach are Dazed. On a failed STR save, they fall asleep instead, becoming Incapacitated until their next two turns have passed, until damaged, or until an ally uses an action to wake them.
- **Upcast**: +1 area, +1 turn asleep.

### Rimeblades
- **Tier**: 4
- **Actions**: 3 Actions
- **Type**: AoE
- **Concentration**: Up to 1 minute
- **Reach**: 12
- **Description**: Conjure razor-sharp icy spikes in 5 contiguous spaces within Reach; this area is difficult terrain. Creatures that enter these spaces (or who are in the area when you conjure them) suffer 2d6 damage for each space they touch.
- **Upcast**: +1 space, +1 damage.

### Arctic Blast
- **Tier**: 5
- **Actions**: 2 Actions
- **Type**: AoE
- **Reach**: Cone 4
- **Damage**: 4d6+10
- **Description**: This area is difficult terrain until the end of your next turn. Surviving creatures must make a STR save or be frozen in place (Restrained) until the end of their next turn; creatures already Hampered are Incapacitated for 1 turn instead.
- **Upcast**: +1 Reach.

### Glacier Strike
- **Tier**: 8
- **Actions**: 3 Actions
- **Type**: AoE
- **Range**: 12
- **Damage**: d66 bludgeoning
- **Description**: Bludgeoning to creatures in a 3x3 area. Creatures adjacent to that area take half as much. The entire area permanently becomes difficult terrain.
- **Upcast**: +1 initial area.

**D66**: Roll 2d6. The leftmost die is the tens place, and the second is the ones (e.g., 4 and 5 deal 45 damage).

### Arctic Annihilation
- **Tier**: 9
- **Actions**: 3 Actions
- **Type**: AoE
- **Reach**: 12
- **Description**: Choose any number of objects or willing creatures within Reach to encase in ice. They are Incapacitated and immune to damage and negative effects until the start of their next turn. All other creatures and objects within Reach take d66 damage. Any surviving creature who took this damage must make a STR save or be Incapacitated for 1 round. Once you cast this spell, you must Safe Rest for 1 week before using it again.

---

# 3. Lightning Spells

> Deal high damage at long range with a focus on teleporting around the battlefield and taking advantage of creatures equipped with metal. However, some lightning spells may fail to find ground and damage the spellcaster instead.

**Charged**: Whenever you take lightning damage, you are Charged for 1 minute.

## Cantrips

### Zap
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 12
- **Damage**: 2d8
- **Description**: On miss: the lightning fails to find ground, and strikes you instead.
- **High Levels**: +6 damage every 5 levels.

### Overload
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: AoE
- **Reach**: 2
- **Damage**: 2d8
- **Description**: Castable only if you are Charged, ending the condition. Damage to others within Reach.
- **High Levels**: +4 damage every 5 levels.

## Tiered Spells

### Arc Lightning
- **Tier**: 1
- **Actions**: 2 Actions
- **Type**: Single Target
- **Range**: 12
- **Damage**: 3d8
- **Description**: The bolt also damages the next closest creature to your target. On miss: the lightning fails to find ground and strikes you instead.
- **Upcast**: +4 damage.

**Next Closest**: If you or an ally is the next closest, they are hit! If 2 creatures are equally close, the GM can roll for it or select the one wearing the most metal.

### Alacrity
- **Tier**: 2
- **Actions**: 1 Action
- **Type**: Self
- **Range**: 4
- **Reaction**: When attacked, Defend for free. After damage is dealt, you gain the Charged condition then teleport anywhere within Range.
- **Upcast**: +4 Range.

### Stormlash
- **Tier**: 3
- **Actions**: 2 Actions
- **Type**: AoE
- **Line**: 12
- **Damage**: 3d8+4 (ignoring metal armor)
- **Description**: Surviving creatures are Dazed on a failed STR save, or Incapacitated instead for 1 of their turns if they fail by 5 or more. Creatures with a large amount of metal (e.g., armor or a longsword) roll with disadvantage.
- **Upcast**: +4 damage.

### Electrickery
- **Tier**: 4
- **Actions**: 3 Actions, 2 Targets
- **Range**: 8
- **Reaction**: When an ally is attacked. Choose another creature within Range to swap places with your ally on a failed WIL save (they become the new target). Costs 1 Action while Charged, ending the condition.
- **Upcast**: +2 Range.

### Electrocharge
- **Tier**: 5
- **Actions**: 2 Actions
- **Type**: Single Target
- **Concentration**: Up to 1 minute
- **Description**: A creature you touch gains the Charged condition, +1 max action, +5 armor, 2x speed, and advantage on DEX saves.
- **Upcast**: +4 Range.

### Ride the Lightning
- **Tier**: 6
- **Actions**: 3 Actions
- **Type**: AoE
- **Description**: Teleport up to 12 spaces away to a spot you can see (if a willing creature is there, swap places with them). Adjacent creatures take d88 damage. Surviving creatures must make a STR save or be hurled back 3 spaces, knocked Prone, and deafened for 1 day.
- **Upcast**: +1 DC.

**D88**: Roll 2d8. The leftmost die is the tens place, and the second is the ones (e.g., 4 and 5 deal 45 damage).

### Seething Storm
- **Tier**: 9
- **Actions**: 3 Actions
- **Type**: AoE
- **Concentration**: Up to 1 minute
- **Reach**: 4
- **Description**: You become a cloud of tempestuous storm. You can fly, move for free 1/round, and attacks against you are made with disadvantage.
  - At the end of each of your turns, strike up to 4 creatures within Reach with a bolt of lightning for d88 damage (a creature can only be struck 1/round).
  - +2 Reach and number of bolts each round. Costs 3 actions each round to maintain.
- Once you cast this spell, you must Safe Rest for 1 week before you can use it again.

---

# 4. Wind Spells

> Aid in moving friend and foe alike around the battlefield. They can also slice and cut through entire groups of foes and viciously deal extra damage on critical hits.

## Cantrips

### Razor Wind
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 12
- **Damage**: 1d4 slashing
- **Description**: Vicious: roll 1 additional die whenever you roll crit damage. Also damages up to 1 adjacent target.
- **High Levels**: +2 damage every 5 levels.

### Breath of Life
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 6
- **Description**: Restore 1 HP to a Dying creature.
- **High Levels**: +2 Range every 5 levels.

## Tiered Spells

### Blustery Gale
- **Tier**: 1
- **Actions**: 2 Actions
- **Type**: Single Target
- **Range**: 12
- **Damage**: 3d4 bludgeoning
- **Description**: Advantage against flying, Small, or Tiny targets. On hit: Move a Med target 2 spaces away; Small/Tiny twice as far; Large half as far (round down). For each die you would roll due to forced movement from this spell, deal +5 damage instead.
- **Upcast**: +1 movement.

### Barrier of Wind
- **Tier**: 2
- **Actions**: 1 Action
- **Type**: Self
- **Reaction**: When attacked at Range. Defend for free. Ranged attacks have disadvantage against you this round (including the triggering attack).
- **Upcast**: +3 Armor.

### Fly
- **Tier**: 3
- **Actions**: 1 Action
- **Type**: Single Target+
- **Concentration**: Up to 10 minutes
- **Description**: Touch a creature, grant a flying speed of 12.
- **Upcast**: +1 target.

### Eye of the Storm
- **Tier**: 4
- **Actions**: 2 Actions
- **Type**: AoE
- **Reach**: 3
- **Damage**: 4d4+10 bludgeoning
- **Description**: Bludgeoning to enemies within Reach. You may place surviving creatures anywhere within 1 space of the storm's Reach on a failed STR save.
- **Upcast**: +1 Reach.

### Updraft
- **Tier**: 5
- **Actions**: 3 Actions
- **Type**: AoE
- **Reach**: 12
- **Description**: Enemies within a 5x5 area must repeat a DEX save until they succeed. For each time they fail they suffer 1d6 falling damage and land prone.
- **Upcast**: +2 Range, +1 area.

### Thousand Cuts
- **Tier**: 6
- **Actions**: 3 Actions
- **Type**: AoE
- **Range**: 12
- **Damage**: d44 slashing (roll with advantage)
- **Description**: Also damages enemies within Reach 1 of your target.
- **Upcast**: +1 Reach.

**D44 with advantage**: Roll 3d4 and drop the lowest die. The leftmost die is the tens place, and the second is the ones (e.g., 2, 3, and 4 deals 34 damage).

### Boisterous Winds
- **Tier**: 7
- **Actions**: 2 Actions
- **Type**: Multi-target
- **Concentration**: Up to 1 minute
- **Description**: You and up to 12 allies within Reach 12 gain: Ranged attacks have disadvantage against you, a flying speed of 12, and can move for free 1/round.
- **Upcast**: +1 minute or +2 targets.

---

## Songweaver Only

### Vicious Mockery
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 12
- **Damage**: 1d4+INT psychic (ignoring armor)
- **Description**: On hit: the target is Taunted during their next turn.
- **High Levels**: +2 damage every 5 levels.

---

# 5. Radiant Spells

> Can obliterate the unholy, the fearful, and those who would dare harm you or your allies. Equally effective at a distance or in melee. Other spells can protect, mend wounds, and even restore creatures back to life!

## Cantrips

### Rebuke
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Reach**: 4
- **Damage**: 1d6 (ignoring armor)
- **Description**: Does not miss. 2x damage against undead or cowardly (those Frightened or behind cover).
- **High Levels**: +2 damage every 5 levels.

### True Strike
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Reach**: 2
- **Description**: Give a creature advantage on the next attack they make (until the end of their next turn).
- **High Levels**: +1 Reach every 5 levels.

## Tiered Spells

### Heal
- **Tier**: 1
- **Actions**: 1 Action
- **Type**: Single Target+
- **Reach**: 1
- **Description**: Heal a creature 1d6+KEY HP. Choose one: +1 target, +4 Reach, +1d6 healing. If 5+ mana is spent, you may also heal 1 negative condition (e.g., Blind, Poisoned, 1 Wound).
- **Upcast**: Choose one: +1 target, +4 Reach, +1d6 healing.

### Warding Bond
- **Tier**: 2
- **Actions**: 1 Action
- **Type**: Single Target
- **Description**: Designate a willing creature as your ward for 1 minute. They take half damage from all attacks; you are attacked for the other half.
- **Upcast**: +1 creature.

### Shield of Justice
- **Tier**: 3
- **Actions**: 1 Action
- **Type**: Self
- **Reaction**: When attacked, Defend for free and reflect Radiant damage back at the attacker equal to the amount blocked (ignoring armor).
- **Upcast**: +5 Armor.

### Condemn
- **Tier**: 4
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 4
- **Damage**: 30
- **Description**: Can only target an enemy that crit you or an ally since your last turn. Cannot be reduced by any means. The next attack against that enemy is made with advantage.
- **Upcast**: +1 Reach, +1 advantage.

### Vengeance
- **Tier**: 5
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 1
- **Damage**: 1d100
- **Description**: Deal 1d100 to a creature that attacked a Dying ally or reduced one to 0 HP since your last turn.
- **Upcast**: +1 Reach, roll w/ advantage.

### Sacrifice
- **Tier**: 6
- **Actions**: 1 Action
- **Type**: Special
- **Reach**: 4
- **Description**: Reduce yourself to 0 HP. You cannot have more than 0 HP until you Safe Rest. Heal a number of HP equal to your maximum HP, divided as you choose to any other creatures within Reach. You may revive a creature that has died in the past minute if you give them at least 20 HP (also healing 2 Wounds from them), provided they have not been revived with this spell before.
- **Upcast**: +4 Reach.

### Redeem
- **Tier**: 9
- **Actions**: AoE
- **Casting Time**: 24 hours
- **Requires**: A diamond worth at least 10,000 gp, which this spell consumes.
- **Description**: Revive any number of deceased creatures you choose -- within 1 mile -- that have died in the past year, provided they have not died of old age or been revived with this spell before.

---

## Shepherd Only

### Lifebinding Spirit
- **Tier**: 1
- **Actions**: 1 Action
- **Description**: Summon a spirit companion that follows you and is immune to harm. It lasts until you cast this spell again, take a Safe Rest, or it heals a number of times equal to the mana spent summoning it.
- **Action**: It attacks or heals a creature within Reach 4. It attacks for 1d6+WIL radiant damage (ignoring armor), or heals for the same amount.
- **Upcast**: Increment its die size by 1 (max d12), +1 healing use.
- **Flavor is Free**: Your Lifebinding Spirit can take the form of any small friendly animal or similar creature (dog, lamb, rabbit, sparrow, etc.). Make sure you give your little buddy a name, too!
- **Outside of Combat**: Your companion is a spirit, so it can pass through walls and dangers harmlessly. It can briefly move away from you (but always prefers to be faithfully at your side). It cannot speak.

---

# 6. Necrotic Spells

> Summon horrible minions or manipulate and trap targets. Some risky necrotic spells prey upon damaged creatures, sapping their very life force -- but frequently fail to distinguish between friend and foe.

## Cantrips

### Entice
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 8
- **Damage**: 1d4 (ignoring armor)
- **Description**: On hit: target moves 2 spaces closer to you.
- **High Levels**: Increment the die size 1 step every 5 levels (d6, d8, d10, d12).

### Withering Touch
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 12 (but see note)
- **Reach**: 1 (implied from "Touch" keyword variant)
- **Damage**: 1d12
- **Description**: On hit: Target is considered undead for 1 round.
- **High Levels**: +6 damage every 5 levels.

## Tiered Spells

### Shadow Trap
- **Tier**: 1
- **Actions**: 2 Actions
- **Type**: Single Target
- **Concentration**: Up to 1 minute
- **Description**: The next creature to move adjacent to you suffers 3d12 damage; if Small or Tiny, it is also Restrained by shadowy tendrils for as long as you maintain concentration or until they escape.
- **Upcast**: +1 size category, +1d12 damage when they escape.

### Dread Visage
- **Tier**: 2
- **Actions**: 1 Action
- **Type**: Self
- **Reaction**: When attacked, Defend for free. Melee attackers are Frightened of you and suffer 1d12 damage if they attack you this round. Costs 2 mana less while dying.
- **Upcast**: +2 damage, +2 armor.

### Vampiric Greed
- **Tier**: 3
- **Actions**: 2 Actions
- **Type**: AoE
- **Description**: Gain 1 Wound. 4d12 to all adjacent creatures, and heal HP equal to the damage done. Any surviving creatures make a STR save. Gain 1 additional Wound for each creature that saves.
- **Upcast**: +1 DC.

### Greater Shadow
- **Tier**: 4
- **Actions**: 2 Actions
- **Description**: Summon a 5d12 Greater Shadow minion (max 1) adjacent to you. When it dies, it explodes into 5 shadow minions (see Summon Shadow). Place them anywhere within 8 spaces.
- **Upcast**: +1d12 damage, +1 shadow minion on explosion.

### Gangrenous Burst
- **Tier**: 5
- **Actions**: 2 Actions
- **Type**: AoE
- **Reach**: Up to 8
- **Description**: Other damaged creatures must make a STR save or take 3d20 damage (ignoring armor), half on save. The save is rolled with disadvantage while Bloodied.
- **Upcast**: +10 damage.

### Unspeakable Word
- **Tier**: 6
- **Actions**: 2 Actions
- **Type**: Special
- **Reach**: 8
- **Damage**: d66 (with advantage, ignoring armor, does not miss or crit)
- **Description**: On a failed INT save. Target rolls with disadvantage if Bloodied or Frightened. On a success, you both take half of this damage instead.
- **Upcast**: +1 DC, +10 damage.

**D66 with advantage**: Roll 3d6 and drop the lowest die. The leftmost die is the tens place, and the second is the ones (e.g., 2, 3, and 4 deals 34 damage).

### Creeping Death
- **Tier**: 7
- **Actions**: 3 Actions
- **Type**: AoE
- **Reach**: 8
- **Damage**: 4d20
- **Description**: If this kills the creature, it violently erupts and you MUST deal the same amount of damage to another creature within 8 spaces of it that has not yet been damaged by this effect. Repeat until a creature survives this damage or no other creatures are within Reach.
- **Upcast**: +1d20 damage.

---

## Shadowmancer Only

### Shadow Blast
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Range**: 8
- **Damage**: 1d12+KEY, 1/round
- **High Levels**: +1d12 every 5 levels.

### Summon Shadow
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Description**: Summon a shadow minion within Reach 1 (you can summon a max of INT or LVL minions this way, whichever is lower). Your shadow minions follow the normal minion rules: they have 1 HP, no damage bonus, and do not crit. They abandon you immediately outside of combat.
- **Action**: (1/turn) you may command ALL of your minions to move up to 6 then attack (Reach 1, d12 each).
- **High Levels**: +1 Reach every 5 levels.

---

# 7. Utility Spells

> Some classes can choose from among these additional spells as they level up.

---

## Ice Utility

### Ice Disk
- **Tier**: Cantrip
- **Casting Time**: 1 min
- **Description**: Conjure a disk of ice that floats just above the ground and follows you. It can carry up to 250 lbs./115 kg of weight for 1 hour or until you cast this spell again.

### Chillcraft
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Description**: **Chill**: Harmlessly freeze, thaw, or move a bath-sized amount of water near you. OR: **Craft**: Conjure a sheet of opaque, mirror-like, or transparent ice the size of a window or small door.

### Wintry Scrying
- **Tier**: Cantrip
- **Casting Time**: 10 min
- **Description**: Turn a small patch of water into a reflective icy mirror. Looking through it grants you vision of any desired location near this same body of water for 10 minutes.

---

## Fire Utility

### Firebrand
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Description**: Touch a surface and secretly mark it with a symbol or brief message. Speaking a chosen command word while nearby reveals it.

### Fire Step
- **Tier**: Cantrip
- **Type**: Self
- **Casting Time**: 1 min
- **Description**: Teleport to a fire source you can see.

### Kindle
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Description**: **Conjure** a minor visual illusion. OR: **Ignite** a small, unheld item within Range 6.

---

## Lightning Utility

### Spark Buddy
- **Tier**: Cantrip
- **Casting Time**: 1 min
- **Description**: Conjure a Tiny (squirrel-sized) electrical helper for up to 1 hour. It can fetch Tiny objects (~1 lb./500 g max), open unlocked doors, illuminate a small area, or deliver a harmless shock. If it takes damage or moves further than 6 spaces away from you, it dissipates into sparks.

### Spark Step
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Self
- **Range**: 4
- **Description**: Teleport to a metal object.

### Tempest's Command
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Description**: **Dispel** a minor magical effect, or temporarily suppress a stronger one (the more powerful an enchantment, the shorter the duration). OR: **Voice of Thunder**: Your eyes glow and your voice is amplified to a booming, thunder-like volume for 1 min.

---

## Wind Utility

### Wind Whisper
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Description**: You whisper a message into the wind and it will be secretly carried to a specified target within 100 miles/160 km.

### Helpful Gust
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Reach**: 6
- **Description**: Gently move a Tiny unheld item within Reach in any direction. OR: Generate an illusory scent.

### Feather Fall
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Reach**: 6
- **Reaction**: When a creature falls, cause them to gently float to the ground, unharmed.

---

## Radiant Utility

### Light
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Description**: Cause an item to brightly glow as a torch with radiant light for as long as you hold it.

### Beautify
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target
- **Description**: Clean stains or repair a small tear/break in a non-magical item, or conjure tiny beautiful things: flowers, butterflies, etc.

### Bond of Peace
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Type**: Single Target/Self
- **Description**: **Bond**: Telepathically communicate simple thoughts or feelings with a friendly creature you can see. OR: **Peace**: Imbue your spoken words with calming magic, granting advantage on any check made to soothe anger or fear in creatures who can hear you.

---

## Necrotic Utility

### Gravecraft
- **Tier**: Cantrip
- **Type**: Single Target
- **Description**: **Gravemark**: Action: Soil a surface with blood, filth, or other disgusting things. OR: **Gravework**: Casting time 1 minute: Shape/move a body-sized plot of earth.

### False Face
- **Tier**: Cantrip
- **Casting Time**: 1 min
- **Description**: Change your appearance to look like someone else for 10 minutes. Requires a piece of them.

### Thought Leech
- **Tier**: Cantrip
- **Actions**: 1 Action
- **Reach**: 6
- **Description**: Read the surface thoughts of a creature within Reach. Creatures can sense you doing this and may not like it.

---

# 8. Hexbinder Spells

> Hexbinder-exclusive spells. Mana pool = WIL + LVL.

## Tiered Spells

### Misery
- **Tier**: 1
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 8
- **Damage**: 1d8+LVL
- **Description**: On hit: apply an Affliction on hit instead. On crit: do both.

### Life Bloom
- **Tier**: 1
- **Actions**: 1 Action
- **Type**: Single Target+
- **Reach**: 8
- **Description**: Consume 1 of your own Hit Dice, and 1 more from a willing target. Heal your target and another creature within Reach the sum of those dice.

### Twitch Curse
- **Tier**: 2
- **Actions**: 1 Action
- **Type**: Single Target
- **Reach**: 8
- **Reaction**: When a creature within Reach attacks, Defend for free. First move the attacker 1 space (+1 space for each Affliction they have). Opportunity attacks triggered this way are made with advantage instead of disadvantage.
- **Note**: If you are no longer a valid target (e.g., the attacker is dead, you are out of line of sight/Reach/Range), the triggering attack misses.

### Bloodcurse
- **Tier**: 2
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 8
- **Damage**: 1d4+LVL (increment the die size for each Affliction they have)
- **Description**: On hit: Target is secretly Bloodcursed, suffering 2x the next damage they deal (ignoring armor).

### Wyrding Strands
- **Tier**: 3
- **Actions**: 2 Actions
- **Type**: AoE
- **Reach**: 8
- **Description**: Move creatures in a 4x4 area a total of 2d6 spaces, divided among them as you choose. Large or larger creatures move half as far.

### Frogify
- **Tier**: 3
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 8
- **Description**: On a failed WIL save, turn a creature into a harmless, armorless, tiny, FROG for up to 1 min. It can still move but not attack (except for bugs). On a save, they are partially transformed, only reducing their armor to none instead. Damage or casting this again ends the effect.

### Malediction
- **Tier**: 4
- **Actions**: 2 Actions
- **Type**: Multi-target
- **Reach**: 4
- **Damage**: Roll KEYd4 Primary Dice. For each hit, deal LVL damage to a creature within Reach (ignoring armor). Max 1 die per creature.

### Circle of Thorns
- **Tier**: 4
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 8
- **Description**: Fill every empty adjacent space around a creature with a growth of thorns. Creatures who enter the area must make a DEX save or take KEYd6 damage and become Restrained, half on save. Lasts up to 1 min or until it has dealt damage 3 times.

### Terror
- **Tier**: 5
- **Actions**: 2 Actions
- **Type**: Single Target
- **Reach**: 8
- **Damage**: LVL x 1d4 (ignoring armor)
- **Description**: Advantage for each Affliction on the target.

---

## Hexbinder Afflictions

> You may apply a max of INT different Afflictions to 1 creature at a time. Afflictions last as long as you maintain Concentration (DC 10 STR save when crit).

| Affliction | Effect |
|---|---|
| **Brittle** | Target suffers 1 damage for each space it moves (or is moved). Level 10: 2 damage/space. |
| **Dimmed** | Target has disadvantage 2 when attacking beyond Range/Reach 1. |
| **Doomed** | (1/encounter) Maximize the next roll against target. |
| **Enfeebled** | Target falls Prone at the end of each of your turns. |
| **Frenzied** | Target's first attack each round MUST be against the nearest random creature (acts first amongst monsters). |
| **Pestilent** | On death of target: creatures within Reach 2 of it suffer LVL damage (ignoring armor). |
| **Sundered** | Target's armor reduced 1 step. |
| **Withered** | Target's first attack against a friendly creature each round is made with disadvantage. |

---

## Hexbinder Mystic Marks

> Chosen at Level 4, 6, 9, 12, 16.

| Mystic Mark | Effect |
|---|---|
| **Bramble Mark** | Action: Touch an ally and grant them an aura of mystical thorns (max 1 ally at a time). Attackers take damage equal to their armor whenever they Defend. The thorns last for WIL attacks or 1 min. |
| **Broom Flight** | Spend 1 mana to gain flying for 1 hour (or until you fall). When crit while flying you fall, landing Prone. |
| **Coven** | Choose 1 spell school a close ally knows, you can cast tiered spells from that school. (*Healer of the Old Ways*: non-Hexbinder healing spells cannot be Diminished.) |
| **Mark of Protection** | Creatures you heal can ignore 1 negative condition they would receive within the next minute. |
| **Pact of Enmity** | The next time you would apply an Affliction, instead bind yourself to a creature with a pact of mutual destruction. Both of you deal MAX damage to each other (instead of rolling dice). |
| **Sigil of Journey** | Action: you or another willing creature you touch exchange places with an Afflicted creature up to 1 size larger you can see within Reach 8. |
| **Sigil of Root** | (1/encounter) Your Enfeebled affliction also Restrains for 1 round. |
| **Word of Decay** | Whenever you use a Futuresight Die against an Afflicted target, take the max value. Whenever your Afflicted target dies, regain 1 spent Futuresight Die. |

---

## Hexbinder Diminution

> Reduce the mana cost of spells by 1 for each condition chosen. You can't diminish an effect a spell does not have (e.g., Humble on a spell with no Range/Reach).

| Diminution | Effect |
|---|---|
| **Humble** | The Range/Reach of the spell is halved. |
| **Weak** | Roll with disadvantage (or enemies save with advantage). |
| **Slow** | Spend 1 additional action. |

---

*Secret Spells: Some spells have been hidden or lost through the ages. Whether too dangerous to be common knowledge or for other reasons, adventurers can sometimes stumble upon new spells (or wrench them out of the undead hands of a defeated Lich).*
