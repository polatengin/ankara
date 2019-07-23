const colors = [
  'Indian',
  'Coral',
  'Salmon',
  'Crimson',
  'Red',
  'Firebrick',
  'Darkred',
  'Pink',
  'Pale',
  'Tomato',
  'Orange',
  'Gold',
  'Yellow',
  'Chiffon',
  'Papaya',
  'Moccasin',
  'Peachpuff',
  'Khaki',
  'Lavender',
  'Thistle',
  'Plum',
  'Violet',
  'Orchid',
  'Fuchsia',
  'Magenta',
  'Rebecca',
  'Purple',
  'Indigo',
  'Slate',
  'Chartreuse',
  'Lime',
  'Spring',
  'Sea',
  'Forest',
  'Green',
  'Olive',
  'Cyan',
  'Teal',
  'Aqua',
  'Turquoise',
  'Aquamarine',
  'Cadet',
  'Steel',
  'Powder',
  'Sky',
  'Dodger',
  'Cornflower',
  'Royal',
  'Blue',
  'Navy',
  'Midnight',
  'Cornsilk',
  'Almond',
  'Bisque',
  'Navajo',
  'Wheat',
  'Burlywood',
  'Tan',
  'Rose',
  'Sand',
  'Goldenrod',
  'Peru',
  'Chocolate',
  'Sienna',
  'Brown',
  'Maroon',
  'White',
  'Snow',
  'Honeydew',
  'Mint',
  'Azure',
  'Alice',
  'Ghost',
  'Smoke',
  'Seashell',
  'Beige',
  'Lace',
  'Floral',
  'Ivory',
  'Antique',
  'Linen',
  'Gainsboro',
  'Silver',
  'Gray',
  'Black'
];

const colorsLength = colors.length;

export function getRandomColor(): string {
  const index = Math.floor(Math.random() * colorsLength);
  const item = colors[index];

  return item;
};

const animals = [
  'Angelfish',
  'Barb',
  'Barracuda',
  'Butterfly Fish',
  'Cichlid',
  'Clown Fish',
  'Discus',
  'Electric Eel',
  'Flounder',
  'Gar',
  'Guppy',
  'Lionfish',
  'Molly',
  'Moray Eel',
  'Pike',
  'Piranha',
  'Puffer Fish',
  'Scorpion Fish',
  'Sea Dragon',
  'Seahorse',
  'Siamese Fighting Fish',
  'Silver Dollar',
  'Tang',
  'Tetra',
  'Wrasse',
  'X-Ray Tetra',
  'Axolotl',
  'Bullfrog',
  'Frog',
  'Toad',
  'Monte Iberia Eleuth',
  'Olm',
  'Salamander',
  'Black Widow Spider',
  'Red Knee Tarantula',
  'Scorpion',
  'Starfish',
  'Adelie Penguin',
  'African Penguin',
  'Albatross',
  'Avocet',
  'Barn Owl',
  'Bird',
  'Birds Of Paradise',
  'Booby',
  'Budgerigar',
  'Cassowary',
  'Chicken',
  'Chinstrap Penguin',
  'Common Buzzard',
  'Common Loon',
  'Crane',
  'Crested Penguin',
  'Dodo',
  'Duck',
  'Eagle',
  'Emperor Penguin',
  'Emu',
  'Falcon',
  'Flamingo',
  'Frigatebird',
  'Galapagos Penguin',
  'Gentoo Penguin',
  'Golden Oriole',
  'Goose',
  'Green Bee-Eater',
  'Grouse',
  'Guinea Fowl',
  'Heron',
  'Humboldt Penguin',
  'Hummingbird',
  'Ibis',
  'Kakapo',
  'Keel Billed Toucan',
  'King Penguin',
  'Kingfisher',
  'Kiwi',
  'Little Penguin',
  'Long-Eared Owl',
  'Macaroni Penguin',
  'Macaw',
  'Magellanic Penguin',
  'Magpie',
  'Moorhen',
  'Nightingale',
  'Ostrich',
  'Parrot',
  'Peacock',
  'Pelican',
  'Penguin',
  'Pheasant',
  'Puffin',
  'Quail',
  'Quetzal',
  'Robin',
  'Rockhopper Penguin',
  'Royal Penguin',
  'Snowy Owl',
  'Sparrow',
  'Swan',
  'Tawny Owl',
  'Toucan',
  'Tropicbird',
  'Turkey',
  'Uguisu',
  'Umbrellabird',
  'Vulture',
  'Woodpecker',
  'Yellow-Eyed Penguin',
  'Giant Clam',
  'Oyster',
  'Cuttlefish',
  'Octopus',
  'Squid',
  'Basking Shark',
  'Bull Shark',
  'Great White Shark',
  'Grey Reef Shark',
  'Hammerhead Shark',
  'Horn Shark',
  'Manta Ray',
  'Nurse Shark',
  'Spiny Dogfish',
  'Stingray',
  'Tiger Shark',
  'Whale Shark',
  'Zebra Shark',
  'Barnacle',
  'Crab',
  'King Crab',
  'Lobster',
  'Prawn',
  'Shrimp',
  'Woodlouse',
  'Sponge',
  'Sea Urchin',
  'Giant African Land Snail',
  'Snail',
  'Sea Slug',
  'Ant',
  'Asian Giant Hornet',
  'Beetle',
  'Bumble Bee',
  'Butterfly',
  'Caterpillar',
  'Cockroach',
  'Dragonfly',
  'Earwig',
  'Fly',
  'Glow Worm',
  'Grasshopper',
  'Hercules Beetle',
  'Honey Bee',
  'Ladybird',
  'Mayfly',
  'Moth',
  'Pond Skater',
  'Purple Emperor',
  'Puss Moth',
  'Stag Beetle',
  'Stick Insect',
  'Termite',
  'Wasp',
  'Newt',
  'Hermit Crab',
  'Aardvark',
  'African Bush Elephant',
  'African Civet',
  'African Forest Elephant',
  'African Palm Civet',
  'African Wild Dog',
  'Anteater',
  'Antelope',
  'Arctic Fox',
  'Arctic Hare',
  'Arctic Wolf',
  'Armadillo',
  'Asian Elephant',
  'Asian Palm Civet',
  'Asiatic Black Bear',
  'Aye Aye',
  'Baboon',
  'Bactrian Camel',
  'Badger',
  'Banded Palm Civet',
  'Bandicoot',
  'Bat',
  'Bear',
  'Beaver',
  'Bengal Tiger',
  'Binturong',
  'Bison',
  'Black Bear',
  'Black Rhinoceros',
  'Blue Whale',
  'Bobcat',
  'Bongo',
  'Bonobo',
  'Bornean Orang-utan',
  'Borneo Elephant',
  'Bottle Nosed Dolphin',
  'Brown Bear',
  'Buffalo',
  'Camel',
  'Capybara',
  'Caracal',
  'Cat',
  'Chamois',
  'Cheetah',
  'Chimpanzee',
  'Chinchilla',
  'Chipmunk',
  'Clouded Leopard',
  'Coati',
  'Collared Peccary',
  'Cottontop Tamarin',
  'Cougar',
  'Cow',
  'Coyote',
  'Crab-Eating Macaque',
  'Cross River Gorilla',
  'Cuscus',
  'Deer',
  'Dhole',
  'Dingo',
  'Dog',
  'Dolphin',
  'Donkey',
  'Dormouse',
  'Dugong',
  'Dusky Dolphin',
  'Eastern Gorilla',
  'Eastern Lowland Gorilla',
  'Echidna',
  'Elephant',
  'Elephant Seal',
  'Elephant Shrew',
  'Emperor Tamarin',
  'Fennec Fox',
  'Ferret',
  'Fin Whale',
  'Fishing Cat',
  'Flying Squirrel',
  'Fossa',
  'Fox',
  'Fur Seal',
  'Geoffroys Tamarin',
  'Gerbil',
  'Giant Panda Bear',
  'Gibbon',
  'Giraffe',
  'Goat',
  'Golden Lion Tamarin',
  'Gopher',
  'Gorilla',
  'Grey Mouse Lemur',
  'Grey Seal',
  'Grizzly Bear',
  'Guinea Pig',
  'Hamster',
  'Hare',
  'Hedgehog',
  'Highland Cattle',
  'Hippopotamus',
  'Horse',
  'Howler Monkey',
  'Human',
  'Humpback Whale',
  'Hyena',
  'Impala',
  'Indian Elephant',
  'Indian Palm Squirrel',
  'Indian Rhinoceros',
  'Indochinese Tiger',
  'Indri',
  'Jackal',
  'Jaguar',
  'Japanese Macaque',
  'Javan Rhinoceros',
  'Kangaroo',
  'Killer Whale',
  'Koala',
  'Kudu',
  'Lemming',
  'Lemur',
  'Leopard',
  'Leopard Cat',
  'Leopard Seal',
  'Liger',
  'Lion',
  'Llama',
  'Lynx',
  'Malayan Civet',
  'Malayan Tiger',
  'Manatee',
  'Mandrill',
  'Markhor',
  'Masked Palm Civet',
  'Meerkat',
  'Minke Whale',
  'Mole',
  'Mongoose',
  'Monkey',
  'Moose',
  'Mountain Gorilla',
  'Mountain Lion',
  'Mouse',
  'Mule',
  'Neanderthal',
  'Numbat',
  'Ocelot',
  'Okapi',
  'Opossum',
  'Orang-utan',
  'Otter',
  'Pademelon',
  'Panther',
  'Patas Monkey',
  'Pied Tamarin',
  'Pig',
  'Pika',
  'Pink Fairy Armadillo',
  'Platypus',
  'Polar Bear',
  'Porcupine',
  'Possum',
  'Proboscis Monkey',
  'Puma',
  'Pygmy Hippopotamus',
  'Pygmy Marmoset',
  'Quokka',
  'Quoll',
  'Rabbit',
  'Raccoon',
  'Raccoon Dog',
  'Rat',
  'Red Panda',
  'Red Wolf',
  'Red-handed Tamarin',
  'Reindeer',
  'Rhinoceros',
  'River Dolphin',
  'Rock Hyrax',
  'Sabre-Toothed Tiger',
  'Saola',
  'Sea Lion',
  'Sea Otter',
  'Seal',
  'Serval',
  'Sheep',
  'Siberian Tiger',
  'Skunk',
  'Sloth',
  'South China Tiger',
  'Spectacled Bear',
  'Sperm Whale',
  'Spider Monkey',
  'Squirrel',
  'Squirrel Monkey',
  'Sri Lankan Elephant',
  'Stellers Sea Cow',
  'Stoat',
  'Sumatran Elephant',
  'Sumatran Orang-utan',
  'Sumatran Rhinoceros',
  'Sumatran Tiger',
  'Sun Bear',
  'Tapanuli Orang-utan',
  'Tapir',
  'Tarsier',
  'Tasmanian Devil',
  'Tiger',
  'Uakari',
  'Vampire Bat',
  'Vervet Monkey',
  'Wallaby',
  'Walrus',
  'Warthog',
  'Water Buffalo',
  'Water Vole',
  'Weasel',
  'Western Gorilla',
  'Western Lowland Gorilla',
  'White Faced Capuchin',
  'White Rhinoceros',
  'White Tiger',
  'Wild Boar',
  'Wildebeest',
  'Wolf',
  'Wolverine',
  'Wombat',
  'Woolly Mammoth',
  'Woolly Monkey',
  'Yak',
  'Zebra',
  'Zebu',
  'Zonkey',
  'Zorse',
  'Horseshoe Crab',
  'Centipede',
  'Millipede',
  'Catfish',
  'Aldabra Giant Tortoise',
  'Alligator',
  'Bearded Dragon',
  'Caiman',
  'Caiman Lizard',
  'Chameleon',
  'Crocodile',
  'Desert Tortoise',
  'Frilled Lizard',
  'Galapagos Tortoise',
  'Gecko',
  'Gharial',
  'Gila Monster',
  'Glass Lizard',
  'Iguana',
  'Indian Star Tortoise',
  'Komodo Dragon',
  'Leaf-Tailed Gecko',
  'Leopard Tortoise',
  'Lizard',
  'Monitor Lizard',
  'Radiated Tortoise',
  'River Turtle',
  'Sand Lizard',
  'Sea Turtle',
  'Slow Worm',
  'Snapping Turtle',
  'Thorny Devil',
  'Tortoise',
  'Tuatara',
  'Water Dragon',
  'Dwarf Crocodile',
  'Jellyfish',
  'Sea Squirt',
];

const animalsLength = colors.length;

export function getRandomAnimal(): string {
  const index = Math.floor(Math.random() * animalsLength);
  const item = animals[index];

  return item;
};

const alloys = [
  'Aluminium',
  'Bismuth',
  'Chrome',
  'Cobalt',
  'Copper',
  'Gallium',
  'Gold',
  'Silver',
  'Iron',
  'Carbon',
  'Steel',
  'Magnesium',
  'Mercury',
  'Nickel',
  'Plutonium',
  'Potassium',
  'Rhodium',
  'Sodium',
  'Titanium',
  'Uranium',
];

const alloysLength = alloys.length;

export function getRandomAlloy(): string {
  const index = Math.floor(Math.random() * alloysLength);
  const item = alloys[index];

  return item;
};

const birds = [
  'Crow',
  'Peacock',
  'Dove',
  'Sparrow',
  'Goose',
  'Ostrich',
  'Pigeon',
  'Turkey',
  'Hawk',
  'Eagle',
  'Raven',
  'Parrot',
  'Flamingo',
  'Seagull',
  'Swallow',
  'Blackbird',
  'Penguin',
  'Robin',
  'Swan',
  'Owl',
  'Stork',
  'Woodpecker',
];

const birdsLength = birds.length;

export function getRandomBird(): string {
  const index = Math.floor(Math.random() * birdsLength);
  const item = birds[index];

  return item;
};

const capitals = [
  'Kabul',
  'Tirana',
  'Algiers',
  'Andorra la Vella',
  'Luanda',
  'Buenos Aires',
  'Yerevan',
  'Canberra',
  'Vienna',
  'Baku',
  'Nassau',
  'Manama',
  'Dhaka',
  'Bridgetown',
  'Minsk',
  'Brussels',
  'Belmopan',
  'Porto-Novo',
  'Thimphu',
  'Sucre',
  'La Paz',
  'Sarajevo',
  'Gaborone',
  'Brasilia',
  'Bandar Seri Begawan',
  'Sofia',
  'Ouagadougou',
  'Gitega',
  'Praia',
  'Phnom Penh',
  'Yaounde',
  'Ottawa',
  'Bangui',
  'Santiago',
  'Beijing',
  'Bogotá',
  'Moroni',
  'Kinshasa',
  'Brazzaville',
  'San Jose',
  'Yamoussoukro',
  'Zagreb',
  'Havana',
  'Nicosia',
  'Prague',
  'Copenhagen',
  'Djibouti',
  'Roseau',
  'Santo Domingo',
  'Quito',
  'Cairo',
  'San Salvador',
  'Malabo',
  'Oyala',
  'Asmara',
  'Tallinn',
  'Mbabane',
  'Lobamba',
  'Addis Ababa',
  'Suva',
  'Helsinki',
  'Paris',
  'Libreville',
  'Banjul',
  'Tbilisi',
  'Berlin',
  'Accra',
  'Athens',
  'Guatemala City',
  'Conakry',
  'Bissau',
  'Georgetown',
  'Port-au-Prince',
  'Tegucigalpa',
  'Budapest',
  'Reykjavik',
  'New Delhi',
  'Jakarta',
  'Tehran',
  'Baghdad',
  'Dublin',
  'Jerusalem',
  'Rome',
  'Kingston',
  'Tokyo',
  'Amman',
  'Nur-Sultan',
  'Nairobi',
  'Tarawa',
  'Pristina',
  'Kuwait City',
  'Bishkek',
  'Vientiane',
  'Riga',
  'Beirut',
  'Maseru',
  'Monrovia',
  'Tripoli',
  'Vaduz',
  'Vilnius',
  'Luxembourg',
  'Antananarivo',
  'Lilongwe',
  'Kuala Lumpur',
  'Male',
  'Bamako',
  'Valletta',
  'Majuro',
  'Nouakchott',
  'Port Louis',
  'Mexico City',
  'Palikir',
  'Chisinau',
  'Monaco',
  'Ulaanbaatar',
  'Podgorica',
  'Rabat',
  'Maputo',
  'Naypyidaw',
  'Windhoek',
  'Yaren District',
  'Kathmandu',
  'Amsterdam',
  'Wellington',
  'Managua',
  'Niamey',
  'Abuja',
  'Pyongyang',
  'Skopje',
  'Oslo',
  'Muscat',
  'Islamabad',
  'Ngerulmud',
  'Jerusalem',
  'Panama City',
  'Port Moresby',
  'Asunción',
  'Lima',
  'Manila',
  'Warsaw',
  'Lisbon',
  'Doha',
  'Bucharest',
  'Moscow',
  'Kigali',
  'Basseterre',
  'Castries',
  'Kingstown',
  'Apia',
  'San Marino',
  'Sao Tome',
  'Riyadh',
  'Dakar',
  'Belgrade',
  'Victoria',
  'Freetown',
  'Singapore',
  'Bratislava',
  'Ljubljana',
  'Honiara',
  'Mogadishu',
  'Pretoria',
  'Cape Town',
  'Bloemfontein',
  'Seoul',
  'Juba',
  'Madrid',
  'Sri Jayawardenepura Kotte',
  'Khartoum',
  'Paramaribo',
  'Stockholm',
  'Bern',
  'Damascus',
  'Taipei',
  'Dushanbe',
  'Dodoma',
  'Bangkok',
  'Dili',
  'Lome',
  'Nuku Alofa',
  'Tunis',
  'Ankara',
  'Ashgabat',
  'Funafuti',
  'Kampala',
  'Kyiv',
  'Abu Dhabi',
  'London',
  'Washington, D.C.',
  'Montevideo',
  'Tashkent',
  'Port Vila',
  'Vatican City',
  'Caracas',
  'Hanoi',
  'Lusaka',
  'Harare',
];

const capitalsLength = capitals.length;

export function getRandomCapital(): string {
  const index = Math.floor(Math.random() * capitalsLength);
  const item = capitals[index];

  return item;
};

enum RandomType {
  Color,
  Animal,
  Alloy,
  Bird,
  Capital
}

export function getRandom(type: RandomType): string {
  switch (type) {
    case RandomType.Color:
      return getRandomColor();
    case RandomType.Animal:
      return getRandomAnimal();
    case RandomType.Alloy:
      return getRandomAlloy();
    case RandomType.Bird:
      return getRandomBird();
    case RandomType.Capital:
      return getRandomCapital();
    default:
      return '';
  }
}
