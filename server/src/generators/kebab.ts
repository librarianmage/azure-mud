/* eslint-disable quotes */

import tracery from 'tracery-grammar'

export const actionString = (kebabs: string) => {
  return `${kebabs}`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      "You devour some #monster# #bodyPart# skewers!"
    ],
    monster: [
      'Ice Giant',
      'Slime',
      'Crab',
      'Balrog',
      'Cockatrice',
      'Kobold',
      'Mimic',
      'Bat',
      'Dragon',
      'Emu',
      'Venus Flytrap',
      'Jabberwock',
      'Quagga',
      'Rattlesnake',
      'Xeroc',
      'Yeti',
      'Eel',
      'Cobra',
      'Proto Gator',
      'Proto Shark',
      'Proto Mammoth',
      'Jellyfish',
      'Giant Ant',
      'Killer Hornet',
      'Jumping Spider',
      'Tarantula',
      'Magic Moth',
      'Millipede',
      'Shark',
      'Gator',
      'Sea Cucumber',
      'Urchin',
      'Cave Toad',
      'Giant Squid',
      'Piranha',
      'Grizzly Bear',
      'Python',
      'Dire Wolf',
      'Tyrannosaurus',
      'Mastodon',
      'Raptor',
      'Ankylosaurus',
      'Iguanodon',
      'Utahraptor',
      'Parasite',
      'Polar Bear',
      'Arctic Seal',
      'Giant Clam',
      'Barracuda',
      'Trilobyte',
      'Wild Boar',
      'Bark Scorpion',
      'Coelacanth',
      'Bagworm',
      'Dung Beetle',
      'Cassowary',
      'Hawk',
      'Kingfisher',
      'Monitor Lizard',
      'Weasel',
      'Wooly Rhino',
      'Bull',
      'Raven',
      'Leftover',
      'Unknowable Creature',
      'Rat',
      'Giant Rat',
      'Clay Golem',
      'Zombie Dragon',
      'Drake',
      'Unicorn',
      'Troll',
      'Imp',
      'Mycenoid',
      'Quasit',
      'Ectoplasm',
      'Griffon',
      'Wyvern',
      'Pixie',
      'Faefly',
      'Cave Freak',
      'Vile Freak',
      'Chimera',
      'Gaping Maw',
      'Demon Taskmaster',
      'Avatar of the Forest',
      'Dusk Stalker',
      'Night Reaver',
      'Kappa',
      'Oni',
      'Selkie',
      'Living Armor',
      'Bramble Elemental',
      'Magma Elemental',
      'Mummy',
      'Reanimated Corpse',
      'Hellhound',
      'Flesh Golem',
      'Mandragora',
      'Homunculus',
      'Ent',
      'Vine Blight',
      'Horror of the Depths',
      'Sea Serpent',
      'Giant Slug',
      'Tentacle Beast',
      'Night Hag',
      'Mad Mage',
      'Chatterer',
      'Milkwalker',
      'Giant Maggot Larva',
      'Giant Worm',
      'Gashadokuro',
      'Obake',
      'Tengu',
      'Haunted Mirror',
      'Toxic Toad',
      'Quill Beast',
      'Undead Sailor',
      'Roc',
      'Mantigore',
      'Flaming Bat',
      'Phoenix',
      'Harpy',
      'Gargoyle',
      'Beholder',
      'Gorgon',
      'Minotaur',
      'Belfry Spirit',
      'Fire Giant',
      'Evil Duke',
      'Cosmic Clown',
      'Werebear',
      'Wererat',
      'Witch\'s Familiar',
      'Chickenwitch',
      'Werewolf',
      'Air Elemental',
      'Tooth Fairy',
      'Bag Man',
      'Hat Man',
      'Vampire Queen',
      'Automaton',
      'Gnoll',
      'Warg',
      'Battle Hippo',
      'Frog Wizard',
      'Necromancer',
      'Lich',
      'Demigod',
      'Catoblepas',
      'Buer',
      'Malphas',
      'Dark Elf',
      'Acolyte',
      'Mondo Mantis',
      'Gamer',
      'Forgotten Beast',
      'Lazer Walker',
      'Fluffy Wambler',
      'Plump Helmet Man',
      'Glowcrow',
      'Honey Skunk',
      'Molluscmage',
      'Greydwarf',
      'Yendor',
      'Rakanishu',
      'Wumpus',
      'Nalzok',
      'Zuul',
      'Loud Bird',
      'Yung Venuz',
      'King Conga',
      'Magaera',
      'Thanatos',
      'Aquator',
      'Ur-vile',
      'Engi',
      'Kazaaakpleth',
      'Bracken',
      'Bancho',
      'Beefalo',
      'Clawler',
      'Stoat',
      'Geck',
      'Ironclad',
      'Lutefisk',
      'Tonberry',
      'Particle Man'
    ],
    bodyPart: [
      'Leg',
      'Thigh',
      'Arm',
      'Finger',
      'Toe',
      'Wing',
      'Tongue',
      'Heart',
      'Meat',
      'Marrow',
      'Sweetbread',
      'Tripe',
      'Essence',
      'Gland',
      'Eye',
      'Bacon',
      'Steak',
      'Head',
      'Shank',
      'Liver',
      'Sausage'
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
/* eslint-enable quotes */
