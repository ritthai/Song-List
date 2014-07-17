/*
Copyright (c) 2014 Ritchie Thai

See the file license.txt for copying permission.
*/


var songs = [
  {
    "artist": "The Mountain Goats",
    "title": "You Were Cool",
    "rating": 5
  },
  {
    "artist": "Megadeth",
    "title": "Symphony of Destruction"
  },
  {
    "artist": "The Dandy Warhols",
    "title": "Bohemian Like You"
  },
  {
    "artist": "Nirvana",
    "title": "Dumb",
    "rating": 5
  },
  {
    "artist": "Dave Brubeck Quartet",
    "title": "Blue Rondo Ala Turk"
  },
  {
    "artist": "Smokey Robinson & The Miracles",
    "title": "The Tears Of A Clown"
  },
  {
    "artist": "Charli XCX",
    "title": "Boom Clap"
  },
  {
    "artist": "Lou Reed",
    "title": "Perfect Day",
    "rating": 5
  },
  {
    "artist": "Alanis Morisette",
    "title": "Hand in My Pocket",
    "rating": 5
  },
  {
    "artist": "No Doubt",
    "title": "Don't Speak"
  },
  {
    "artist": "Tchaikovsky",
    "title": "Romeo and Juliet Fantasy Overture"
  },
  {
    "artist": "Hey Arnold!",
    "title": "Hey Arnold! Theme Cover",
    "url": "https://www.youtube.com/watch?v=1wz80Rvxgw4",
    "rating": 5
  },
  {
    "artist": "Toni Basil",
    "title": "Hey Mickey"
  },
  {
    "artist": "Alizee",
    "title": "La Isla Bonita"
  },
  {
    "artist": "Cut Copy",
    "title": "Zap Zap"
  },
  {
    "artist": "Spirited Away",
    "title": "One Summer's Day"
  },
  {
    "artist": "Connan Mockasin",
    "title": "I’m the Man, That Will Find You"
  },
  {
    "artist": "Lara Fabian",
    "title": "Givin' Up On You"
  },
  {
    "artist": "Pink Floyd",
    "title": "The Wall",
    "rating": 5
  },
  {
    "artist": "Pink Floyd",
    "title": "Dark Side of the Moon",
    "rating": 5
  },
  {
    "artist": "Iggy Pop",
    "title": "Passenger"
  },
  {
    "artist": "We Are Stars",
    "title": "Virginia to Vegas-Feat. Alyssa Reid"
  },
  {
    "artist": "Io Perry",
    "title": "Valentine"
  },
  {
    "artist": "Pink",
    "title": "Just Give Me a Reason"
  },
  {
    "artist": "Fleetwood Mac",
    "title": "Go Your Own Way"
  },
  {
    "artist": "Drake",
    "title": "From Time ft. Jhene Aiko"
  },
  {
    "artist": "Shakira",
    "title": "Whenever, Wherever"
  },
  {
    "artist": "Nirvana",
    "title": "Rape Me"
  },
  {
    "artist": "Nina Simone",
    "title": "My Baby Just Cares for Me",
    "rating": 5
  },
  {
    "artist": "Joe Cocker",
    "title": "Never Tear Us Apart"
  },
  {
    "artist": "INXS",
    "title": "Never Tear Us Apart",
    "rating": 5
  },
  {
    "artist": "Amanda Marshall",
    "title": "Fall From Grace"
  },
  {
    "artist": "The Mountain Goats",
    "title": "Have To Explode",
    "rating": 5
  },
  {
    "artist": "The Mountain Goats",
    "title": "First Few Desperate Hours",
    "rating": 5
  },
  {
    "artist": "The Mountain Goats",
    "title": "Tallahassee",
    "rating": 5
  },
  {
    "artist": "The Mountain Goats",
    "title": "Oceanographer's Choice",
    "rating": 5
  },
  {
    "artist": "The Mountain Goats",
    "title": "Love Love Love",
    "rating": 5
  },
  {
    "artist": "The Mountain Goats",
    "title": "Old College Try",
    "rating": 5
  },
  {
    "artist": "The Mountain Goats",
    "title": "No Children",
    "rating": 5
  },
  {
    "artist": "Carl Orff",
    "title": "Fortuna Imperatrix Mundi"
  },
  {
    "artist": "Gravity of Love",
    "title": "Enigma"
  },
  {
    "artist": "Chrome Sparks",
    "title": "Marijuana",
    "rating": 5
  },
  {
    "artist": "Spandau Ballet",
    "title": "True"
  },
  {
    "artist": "The Mike Flowers Pops",
    "title": "Call Me"
  },
  {
    "artist": "Petula Clark",
    "title": "Call Me"
  },
  {
    "artist": "Pat Benatar",
    "title": "Hit Me With Your Best Shot"
  },
  {
    "artist": "Ol' Dirty Bastard",
    "title": "Fantasy (feat. M.Carey)"
  },
  {
    "artist": "Green Velvet",
    "title": "La La Land"
  },
  {
    "artist": "Metallica",
    "title": "Enter Sandman"
  },
  {
    "artist": "Ella Fitzgerald",
    "title": "My Funny Valentine"
  },
  {
    "artist": "Mumford and Sons",
    "title": "Little Lion Man"
  },
  {
    "artist": "Van Morrison",
    "title": "Brown Eyed Girl"
  },
  {
    "artist": "Iron Butterfly",
    "title": "In Da Gadda Da Vida"
  },
  {
    "artist": "Imogen Heap",
    "title": "Headlock",
    "rating": 5
  },
  {
    "artist": "Capital Cities",
    "title": "Safe and Sound"
  },
  {
    "artist": "Classified",
    "title": "Pay Day"
  },
  {
    "artist": "Gerry Rafferty",
    "title": "Baker Street"
  },
  {
    "artist": "Phil Collins",
    "title": "In The Air Tonight"
  },
  {
    "artist": "The White Stripes",
    "title": "Hardest Button To Button"
  },
  {
    "artist": "Chicago",
    "title": "Nowadays"
  },
  {
    "artist": "Rjd2",
    "title": "Smoke & Mirrors"
  },
  {
    "artist": "Busta Rhymes",
    "title": "Gimme Some More"
  },
  {
    "artist": "Blue Swede",
    "title": "Hooked on a Feeling",
    "rating": 5
  },
  {
    "artist": null,
    "title": "Cats on Mars",
    "rating": 5
  },
  {
    "artist": "Anna Ihlis",
    "title": "Dance",
    "rating": 4
  },
  {
    "artist": "Technotronic",
    "title": "Pump Up The Jam"
  },
  {
    "artist": "Amanda Marshall",
    "title": "Everybody’s Got a Story"
  },
  {
    "artist": "Amanda Marshall",
    "title": "Sunday Morning After"
  },
  {
    "artist": "Cream",
    "title": "Sunshine of your Love"
  },
  {
    "artist": "The Strokes",
    "title": "Hard to Explain",
    "rating": 5
  },
  {
    "artist": "David Bowie",
    "title": "Rebel Rebel",
    "rating": 5
  },
  {
    "artist": "Drowning Butterflies",
    "title": "Indie Morning"
  },
  {
    "artist": "Blind Melon",
    "title": "No Rain"
  },
  {
    "artist": "Blondie",
    "title": "Heart of Glass"
  },
  {
    "artist": "Heart",
    "title": "Crazy on You"
  },
  {
    "artist": "The Police",
    "title": "Roxanne",
    "rating": 5
  },
  {
    "artist": "Serena Ryder",
    "title": "What I Wouldn't Do"
  },
  {
    "artist": "I Can't Wait (Live 1986)",
    "title": "Nu Shooz"
  },
  {
    "artist": "Everest",
    "title": "Let Go"
  },
  {
    "artist": null,
    "title": "Night of Nights"
  },
  {
    "artist": "Lolita Jolie",
    "title": "Non Non Non"
  },
  {
    "artist": "Zedd",
    "title": "Stay the Night"
  },
  {
    "artist": "Buddy Holly",
    "title": "Everyday"
  },
  {
    "artist": "Heart",
    "title": "Barracuda"
  },
  {
    "artist": "Roy Orbison",
    "title": "You Got It"
  },
  {
    "artist": "Elizabeth Dawson",
    "title": "Gentle Rain"
  },
  {
    "artist": "Sarah McLachlan",
    "title": "Angel"
  },
  {
    "artist": "Tracy Chapman",
    "title": "Talkin bout a revolution"
  },
  {
    "artist": "Final Fantasy VII",
    "title": "Costa del Sol"
  },
  {
    "artist": "Diana Krall",
    "title": "Gentle Rain",
    "rating": 5
  },
  {
    "artist": "INXS",
    "title": "Pretty Vegas"
  },
  {
    "artist": "Mozart",
    "title": "Symphony No. 25 in G minor, K. 183 [complete]"
  },
  {
    "artist": "Kelsi Luck",
    "title": "That’s What I Like",
    "rating": 4
  },
  {
    "artist": "Robin S",
    "title": "Show Me Love"
  },
  {
    "artist": "OUTKAST",
    "title": "HEY YA (FROM NEW TARGET BACK TO SCHOOL COMMERCIAL) [HD]",
    "url": "http://www.youtube.com/watch?v=32MtJdt2o3E"
  },
  {
    "artist": "DAVID BOWIE",
    "title": "UNDER PRESSURE (FROM THE NEW TARGET BACK TO SCHOOL COMMERCIAL) [HD]",
    "url": "http://www.youtube.com/watch?v=DLcGABx4_GE"
  },
  {
    "artist": "America",
    "title": "Tin Man"
  },
  {
    "artist": "Emotions",
    "title": "Best Of My Love"
  },
  {
    "artist": "Mother Mother",
    "title": "Body of Years",
    "rating": 5
  },
  {
    "artist": "Tokyo Police Club",
    "title": "Favourite Colour",
    "rating": 5
  },
  {
    "artist": "Mumford & Sons",
    "title": "I Will Wait"
  },
  {
    "artist": "Yo-Yo Ma",
    "title": "Yo-Yo Ma plays the prelude from Bach´s Cello Suite No. 1"
  },
  {
    "artist": "Of Monsters and Men",
    "title": "Little Talks"
  },
  {
    "artist": "Fitz and the Tantrums",
    "title": "Out of My League"
  },
  {
    "artist": "OMD",
    "title": "If You Leave"
  },
  {
    "artist": "No Doubt",
    "title": "It’s My Life"
  },
  {
    "artist": "Talk Talk",
    "title": "It’s My Life"
  },
  {
    "artist": "Escaflowne Original Sound Track",
    "title": "Sora"
  },
  {
    "artist": "Zedd",
    "title": "Clarity ft. Foxes"
  },
  {
    "artist": "Diana Ross",
    "title": "Upside Down"
  },
  {
    "artist": "Lily Allen",
    "title": "Who'd Have Known",
    "rating": 2
  },
  {
    "artist": "Steve Reich",
    "title": "Electric Counterpoint"
  },
  {
    "artist": "Krewella",
    "title": "Alive",
    "rating": 2
  },
  {
    "artist": null,
    "title": "Heaven is a place on earth"
  },
  {
    "artist": "Phantasmosis",
    "title": "It’s Okay",
    "rating": 5
  },
  {
    "artist": "Matchbox Twenty",
    "title": "Time After Time",
    "rating": 5
  },
  {
    "artist": "Totally Enormous Extinct Dinosaurs",
    "title": "Your Love"
  },
  {
    "artist": "Justin Martin",
    "title": "Hood Rich"
  },
  {
    "artist": "Justin Martin",
    "title": "Ruff Stuff"
  },
  {
    "artist": "Hudson Mohawke",
    "title": "Fuse"
  },
  {
    "artist": "No More Heroes",
    "title": "Rocket Surgeon",
    "rating": 5
  },
  {
    "artist": "Netsky",
    "title": "Secret Agent"
  },
  {
    "artist": "Coldplay",
    "title": "In My Place"
  },
  {
    "artist": null,
    "title": "Octopus I Love You",
    "rating": 5
  },
  {
    "artist": "Tycho",
    "title": "A Walk"
  },
  {
    "artist": "Smallpools",
    "title": "Dreaming"
  },
  {
    "artist": "Disclosure",
    "title": "You & Me ft. Eliza Doolittle (Baauer Remix)",
    "rating": 2
  },
  {
    "artist": "Icona Pop",
    "title": "I Love It",
    "rating": 4
  },
  {
    "artist": "Michelle Branch",
    "title": "All You Wanted",
    "rating": 4
  },
  {
    "artist": "Michelle Branch",
    "title": "Everywhere",
    "rating": 5
  },
  {
    "artist": "Michelle Branch",
    "title": "Are You Happy Now?",
    "rating": 3
  },
  {
    "artist": "Atomic Kitten",
    "title": "Whole Again",
    "rating": 2
  },
  {
    "artist": "Atomic Kitten",
    "title": "Eternal Flame",
    "rating": 2
  },
  {
    "artist": "The Bangles",
    "title": "Eternal Flame",
    "rating": 2
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Alcohol",
    "rating": 4
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Pinch Me",
    "rating": 4
  },
  {
    "artist": "Emilie Autumn",
    "title": "Swallow",
    "rating": 4
  },
  {
    "artist": "Fedde Le Grande",
    "title": "Put Your Hands Up For Detroit"
  },
  {
    "artist": "Martin Solveig",
    "title": "We Came to Smash"
  },
  {
    "artist": "Donna Summer",
    "title": "She Works Hard for the Money"
  },
  {
    "artist": "Donna Lewis",
    "title": "I Love You Always Forever"
  },
  {
    "artist": "Matchbox Twenty",
    "title": "She's So Mean",
    "rating": 3
  },
  {
    "artist": "Dido",
    "title": "Thank You"
  },
  {
    "artist": "J. Cole",
    "title": "Work Out"
  },
  {
    "artist": "Matt Hires",
    "title": "Restless Heart"
  },
  {
    "artist": "Bob Marley",
    "title": "Stir It Up"
  },
  {
    "artist": "Marc Cohn",
    "title": "Walking In Memphis",
    "rating": 3
  },
  {
    "artist": "LAKE",
    "title": "No Wonder I",
    "rating": 5
  },
  {
    "artist": "Hyrule Temple (Melee)",
    "title": "Smash Bros Brawl"
  },
  {
    "artist": "Zelda: Ocarina of Time",
    "title": "Song of Storms"
  },
  {
    "artist": "John De Sohn feat. Kristin Amparo",
    "title": "Dance Our Tears Away"
  },
  {
    "artist": "Avicii vs Nicky Romero",
    "title": "I Could Be The One (Nicktim)"
  },
  {
    "artist": "Matt White",
    "title": "Best Days"
  },
  {
    "artist": "Sarah McLachlan",
    "title": "Loving You Is Easy"
  },
  {
    "artist": "Esthero",
    "title": "Everyday Is a Holiday"
  },
  {
    "artist": "Aerosmith",
    "title": "Jaded",
    "rating": 4
  },
  {
    "artist": "City High",
    "title": "What Would You Do?"
  },
  {
    "artist": "The Corrs",
    "title": "Breathless"
  },
  {
    "artist": "Shanai Twain",
    "title": "You’re Still the One"
  },
  {
    "artist": "Eric Clapton",
    "title": "Layla (Unplugged)",
    "rating": 5
  },
  {
    "artist": "Modjo",
    "title": "Lady (Hear Me Tonight)"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Funky Monks",
    "rating": 2
  },
  {
    "artist": "Imogen Heap",
    "title": "Speak for Yourself (album)"
  },
  {
    "artist": "Wez Clarke & Maxine Hardcastle",
    "title": "Bringing Me Back"
  },
  {
    "artist": "Peyton",
    "title": "Holiday (Eks Getaway 12 Mix)"
  },
  {
    "artist": "Bah Samba Feat. The Fatback Band",
    "title": "Let The Drums Speak (Phil Asher Remix)"
  },
  {
    "artist": "Kylie Minogue",
    "title": "Love At First Sight",
    "rating": 2
  },
  {
    "artist": "Ever After",
    "title": "Bonnie Bailey (Eric's Beach Mix)"
  },
  {
    "artist": "Myomi",
    "title": "Sun In My Eyes"
  },
  {
    "artist": "Hird feat. Yukimi Nagano",
    "title": "I Love You My Hope",
    "rating": 5
  },
  {
    "artist": "Dan Hill",
    "title": "Sometimes When We Touch"
  },
  {
    "artist": "Mr Groove & Vergas",
    "title": "U Make Me Happy",
    "rating": 3
  },
  {
    "artist": "Billy Joel",
    "title": "Big Shot"
  },
  {
    "artist": "Sky",
    "title": "Some Kinda Wonderful"
  },
  {
    "artist": "Soul Brothers Six",
    "title": "Some Kind of Wonderful"
  },
  {
    "artist": "Goloka",
    "title": "Thinking About You"
  },
  {
    "artist": "Mariah Carey",
    "title": "I’ll Be There"
  },
  {
    "artist": "The Jackson 5",
    "title": "I’ll Be There"
  },
  {
    "artist": "Frank Sinatra",
    "title": "Strangers in The Night"
  },
  {
    "artist": "The Drifters",
    "title": "This Magic Moment"
  },
  {
    "artist": "Freemasons",
    "title": "Pacific (12\" Mix)"
  },
  {
    "artist": "Mariah Carey",
    "title": "I Still Believe"
  },
  {
    "artist": "Michelle Branch",
    "title": "Game of Love"
  },
  {
    "artist": "The Carpenters",
    "title": "This Masquerade"
  },
  {
    "artist": "George Benson",
    "title": "This Masquerade"
  },
  {
    "artist": "Norah Jones",
    "title": "Don’t Know Why",
    "rating": 5
  },
  {
    "artist": "Sinéad O'Connor",
    "title": "Nothing Compares 2U",
    "rating": 5
  },
  {
    "artist": "The Main Ingredient",
    "title": "Everybody Plays The Fool"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Tell Me Baby",
    "rating": 5
  },
  {
    "artist": "Heather Nova",
    "title": "London Rain (Nothing Heals Me Like You Do)"
  },
  {
    "artist": "La Roux",
    "title": "Bulletproof",
    "rating": 5
  },
  {
    "artist": "Clelia Felix",
    "title": "Dancing With The Sun"
  },
  {
    "artist": "Mary J. Blige",
    "title": "Real Love"
  },
  {
    "artist": "Janet Jackson",
    "title": "All For You"
  },
  {
    "artist": "Seals & Crofts",
    "title": "Summer Breeze"
  },
  {
    "artist": "CATYA MARE",
    "title": "Light Longing"
  },
  {
    "artist": "U2 (Feat. Green Day)",
    "title": "The Saints Are Coming"
  },
  {
    "artist": "The Skids",
    "title": "The Saints Are Coming"
  },
  {
    "artist": "Kill Paris",
    "title": "I Do Love You",
    "rating": 5
  },
  {
    "artist": "Good Charlotte",
    "title": "The Anthem"
  },
  {
    "artist": "Celine Dion",
    "title": "A New Day Has Come"
  },
  {
    "artist": "the bird and the bee",
    "title": "My Love"
  },
  {
    "artist": "Janet Jackson",
    "title": "Doesn’t Really Matter"
  },
  {
    "artist": "Cascada",
    "title": "Evacuate the Dance Floor"
  },
  {
    "artist": "Cascada",
    "title": "Everytime We Touch"
  },
  {
    "artist": "Lenny Kravitz",
    "title": "Again"
  },
  {
    "artist": "Donna Summer",
    "title": "Love to Love You Baby"
  },
  {
    "artist": "Richard Strauss",
    "title": "Also Sprach Zarathustra"
  },
  {
    "artist": "Mozart",
    "title": "Alla Turca"
  },
  {
    "artist": "Wynton Marsalis",
    "title": "Flight of the Bumblebee"
  },
  {
    "artist": "Offenbach",
    "title": "Can Can Music"
  },
  {
    "artist": "05 Brahms Violin Concerto, Julia Fischer (Violin)",
    "title": "3rd Movement"
  },
  {
    "artist": "Glass Tiger",
    "title": "Don't forget me when i'm gone"
  },
  {
    "artist": "Roxette",
    "title": "She's Got The Look"
  },
  {
    "artist": "Huang An 黄安",
    "title": "新鴛鴦蝴蝶夢 Xin yuan yang hu die meng (Butterfly Dreams)"
  },
  {
    "artist": "Horowitz",
    "title": "Liszt Consolation No. 3"
  },
  {
    "artist": "Queens Of The Stone Age",
    "title": "No One Knows"
  },
  {
    "artist": "hack//SIGN",
    "title": "Open Your Heart",
    "rating": 5
  },
  {
    "artist": null,
    "title": ".Hack// Sign Orginal Soundtrack ~ Before Dawn",
    "rating": 5
  },
  {
    "artist": null,
    "title": ".Hack// Sign Orginal Soundtrack ~ A bit of Happiness",
    "rating": 5
  },
  {
    "artist": "Fred V & Grafix",
    "title": "White Lies"
  },
  {
    "artist": "Nujabes",
    "title": "The Sign"
  },
  {
    "artist": "Nujabes",
    "title": "Luv (Part 3 featuring Shing02)"
  },
  {
    "artist": "deadmau5 & Imogen Heap",
    "title": "Telemiscommunications (Kölsch Remix)"
  },
  {
    "artist": "Nujabes",
    "title": "Lady Brown"
  },
  {
    "artist": "Chamonix",
    "title": "77 Strings"
  },
  {
    "artist": "Venetian Snares",
    "title": "Szamár Madár"
  },
  {
    "artist": "Porter Robinson",
    "title": "Language"
  },
  {
    "artist": "Shaye",
    "title": "Happy Baby (just add the artist)"
  },
  {
    "artist": "MUST DIE! & Sue Cho",
    "title": "Live It Up",
    "rating": 5
  },
  {
    "artist": "Sugarhill Gang",
    "title": "Rapper’s Delight"
  },
  {
    "artist": "EMF",
    "title": "Unbelievable"
  },
  {
    "artist": "Fatboy Slim",
    "title": "Rockafeller Skank (i.e. Funk Soul Brother)"
  },
  {
    "artist": "Fatboy Slim",
    "title": "Right Here, Right Now"
  },
  {
    "artist": "Fatboy Slim",
    "title": "Praise You",
    "rating": 5
  },
  {
    "artist": "Fatboy Slim",
    "title": "Weapon Of Choice",
    "rating": 5
  },
  {
    "artist": "Anamanaguchi",
    "title": "Penpal"
  },
  {
    "artist": "Anamanaguchi",
    "title": "Airbrushed"
  },
  {
    "artist": "Vanessa Carlton",
    "title": "A Thousand Miles"
  },
  {
    "artist": "Cyndi Lauper",
    "title": "All Through the Night"
  },
  {
    "artist": "The Wiseguys",
    "title": "Ooh La La"
  },
  {
    "artist": "Acker Bilk",
    "title": "Stranger On the Shore"
  },
  {
    "artist": null,
    "title": "Waltz of the Flowers"
  },
  {
    "artist": "Journey",
    "title": "Separate Ways"
  },
  {
    "artist": "Amy Grant",
    "title": "Baby Baby (No Getting Over You Mix)"
  },
  {
    "artist": null,
    "title": "Push It to the Limit"
  },
  {
    "artist": null,
    "title": "Moulin Rouge"
  },
  {
    "artist": "Stevie Nicks",
    "title": "Edge of Seventeen"
  },
  {
    "artist": "Jann Arden",
    "title": "Insensitive"
  },
  {
    "artist": "Parov Stelar",
    "title": "Kiss Kiss"
  },
  {
    "artist": "Herbie Hancock",
    "title": "Rockit"
  },
  {
    "artist": "Herbie Hancock",
    "title": "Chameleon"
  },
  {
    "artist": "Outkast",
    "title": "B.O.B."
  },
  {
    "artist": "Victor Wooten",
    "title": "U Can’t Hold No Groove"
  },
  {
    "artist": "The Stylistics",
    "title": "You Make Me Feel Brand New"
  },
  {
    "artist": "Wilson Phillips",
    "title": "Hold On"
  },
  {
    "artist": null,
    "title": "Don’t Fear the Reaper"
  },
  {
    "artist": "The Police",
    "title": "Message In A Bottle"
  },
  {
    "artist": "Savage Garden",
    "title": "Crash And Burn"
  },
  {
    "artist": null,
    "title": "Eureka Opening 4 Sakura"
  },
  {
    "artist": null,
    "title": "Eureka Seven EnDing 3 Hal Cali Tip Taps"
  },
  {
    "artist": null,
    "title": "Eureka Seven EnDing 2 Fly Away"
  },
  {
    "artist": "Calvin Harris feat. Example",
    "title": "We'll Be Coming Back"
  },
  {
    "artist": "Mozart",
    "title": "The Magic Flute Queen of the Night Aria"
  },
  {
    "artist": "Mercy",
    "title": "Duffy"
  },
  {
    "artist": null,
    "title": "Tarzan (Doo Bad Shi Doo)"
  },
  {
    "artist": "Madness",
    "title": "In The Middle Of The Night"
  },
  {
    "artist": "Billy Joel",
    "title": "River of Dreams"
  },
  {
    "artist": "KC & The Sunshine Band",
    "title": "Get Down Tonight"
  },
  {
    "artist": null,
    "title": "Suffocate (Original Mix)\tThe Prototypes"
  },
  {
    "artist": null,
    "title": "Major Happy (Original Mix)\tFred V & Grafix"
  },
  {
    "artist": "Skrillex",
    "title": "Ruffneck Bass Full Flex"
  },
  {
    "artist": null,
    "title": "Steve Reich- Music for pieces of wood"
  },
  {
    "artist": "Kid Koala",
    "title": "A Dub Thing"
  },
  {
    "artist": null,
    "title": "Escaflowne Opening"
  },
  {
    "artist": null,
    "title": "Escaflowne You're Not Alone",
    "rating": 5
  },
  {
    "artist": null,
    "title": "Escaflowne Yubiwa",
    "rating": 5
  },
  {
    "artist": "Goldfish",
    "title": "Fort Knox"
  },
  {
    "artist": "Ace of Base",
    "title": "Don't Turn Around"
  },
  {
    "artist": "The Cure",
    "title": "Just Like Heaven"
  },
  {
    "artist": "The Offspring",
    "title": "Pretty Fly for a White Guy"
  },
  {
    "artist": "Dusty Springfield",
    "title": "Son of a Preacher Man"
  },
  {
    "artist": "Blue",
    "title": "Get Ready"
  },
  {
    "artist": "Tim Mason",
    "title": "Stars Come Out",
    "rating": 5
  },
  {
    "artist": "BanYa",
    "title": "Beethoven Virus"
  },
  {
    "artist": "The Cure",
    "title": "Friday I'm In Love"
  },
  {
    "artist": "Madeon",
    "title": "The Night Out"
  },
  {
    "artist": "Martin Solveig",
    "title": "The Night Out"
  },
  {
    "artist": null,
    "title": "Rave On"
  },
  {
    "artist": "Fleetwood Mac",
    "title": "Landslide"
  },
  {
    "artist": "Bran Van 3000",
    "title": "Call Me (I'll Be Around Medley)",
    "rating": 5
  },
  {
    "artist": "Chic",
    "title": "Good Times"
  },
  {
    "artist": null,
    "title": "Amadeus"
  },
  {
    "artist": "Alanis Morissette",
    "title": "Guardian"
  },
  {
    "artist": "Lenka",
    "title": "Trouble Is A Friend"
  },
  {
    "artist": "Dido",
    "title": "Thank You"
  },
  {
    "artist": null,
    "title": "Light My Life FELT"
  },
  {
    "artist": "Nhato feat. 3L",
    "title": "Listen Up"
  },
  {
    "artist": "Nhato",
    "title": "Raihaku"
  },
  {
    "artist": "Bach",
    "title": "Cello Suite No.1 i-Prelude"
  },
  {
    "artist": null,
    "title": "hungarian dance no. 5"
  },
  {
    "artist": null,
    "title": "op 9 no 2"
  },
  {
    "artist": "Nhato",
    "title": "Phantoms In Da House"
  },
  {
    "artist": "The Cranberries",
    "title": "Zombie"
  },
  {
    "artist": "Powerpuff Girls",
    "title": "Love Makes the World Go Round"
  },
  {
    "artist": null,
    "title": "D City Rock"
  },
  {
    "artist": null,
    "title": "Threat of rain Syrufit"
  },
  {
    "artist": "Round Table feat. Nino",
    "title": "Let Me Be With You"
  },
  {
    "artist": null,
    "title": "PONPONPON , Kyary Pamyu Pamyu"
  },
  {
    "artist": "Round Table feat. Nino",
    "title": "Let Me Be With You (New Step Mix)"
  },
  {
    "artist": "Panty & Stocking with Garterbelt OST",
    "title": "Fly Away (Now)"
  },
  {
    "artist": "Just For You",
    "title": "Round Table feat. Nino"
  },
  {
    "artist": "Andrew W.K.",
    "title": "Party Hard"
  },
  {
    "artist": "Round Table feat. Nino",
    "title": "In April"
  },
  {
    "artist": "Baby I Love Your Way",
    "title": "Sitti"
  },
  {
    "artist": "Chicago",
    "title": "If You Leave Me Now"
  },
  {
    "artist": "The Cars",
    "title": "Who's Gonna Drive You Home"
  },
  {
    "artist": "If You Leave Me Now",
    "title": "Sitti"
  },
  {
    "artist": "Pokemon 3",
    "title": "Johto Movie Version"
  },
  {
    "artist": "Dab Hands",
    "title": "Do Your Own Thing"
  },
  {
    "artist": "The Stranglers",
    "title": "Waltzinblack"
  },
  {
    "artist": "The Five Blobs",
    "title": "The Blob"
  },
  {
    "artist": "Depeche Mode",
    "title": "People are People"
  },
  {
    "artist": "Everything But the Girl",
    "title": "Before Today"
  },
  {
    "artist": "Don't Let Me Be Misunderstood",
    "title": "Santa Esmeralda"
  },
  {
    "artist": "Oren Lavie",
    "title": "Her Morning Elegance"
  },
  {
    "artist": "Van Halen",
    "title": "Jump"
  },
  {
    "artist": null,
    "title": "Phoenix- 1901"
  },
  {
    "artist": "Nichijou",
    "title": "ZZZ"
  },
  {
    "artist": "Nichijou",
    "title": "ZZZ (Accapella Version)"
  },
  {
    "artist": "Nichijou",
    "title": "ZZZ (Bossa Nova Version)"
  },
  {
    "artist": "Misfits",
    "title": "Monster Mash"
  },
  {
    "artist": null,
    "title": "The Devil Went Down to Georgia"
  },
  {
    "artist": "Sambomaster",
    "title": "Seishun Kyousoukyoku (Naruto opening 5)"
  },
  {
    "artist": "TiA",
    "title": "Ryuusei (Naruto ending 6)"
  },
  {
    "artist": "Orange Range",
    "title": "Asterisk (Bleach opening 1)"
  },
  {
    "artist": null,
    "title": "Bleach ending 2"
  },
  {
    "artist": "Chihiro",
    "title": "Honey (Cardcaptor Sakura ending 2)"
  },
  {
    "artist": null,
    "title": "Catch You, Catch Me (Cardcaptor Sakura opening 1)"
  },
  {
    "artist": null,
    "title": "Groovy! (Cardcaptor Sakura)"
  },
  {
    "artist": "Flow",
    "title": "Days (Eureka 7 opening 1)"
  },
  {
    "artist": null,
    "title": "Shell (Witch Hunter Robin opening)"
  },
  {
    "artist": null,
    "title": "All the Way (Kino's Journey opening)"
  },
  {
    "artist": "Ai Maeda",
    "title": "Kino no Tabi (Kino's Journey ending)"
  },
  {
    "artist": "Gnarls Barkley",
    "title": "Go-GO Gadget Gospel"
  },

  {
    "artist": "Genki Rockets",
    "title": "Breeze (Summer Afternoon Mix)"
  },
  {
    "artist": "Goldfish",
    "title": "Hold Tight"
  },
  {
    "artist": "Goldfish",
    "title": "We Come Together"
  },
  {
    "artist": "The Submarines",
    "title": "You, Me, and the Bourgeoisie"
  },
  {
    "artist": "Young MC",
    "title": "Bust a Move"
  },
  {
    "artist": "Bing Crosby and Frank Sinatra",
    "title": "Well, Did You Evah!",
    "rating": 2
  },
  {
    "artist": "Diana Krall",
    "title": "S'Wonderful",
    "genre": "jazz"
  },
  {
    "artist": "Nat King Cole",
    "title": "Don't Get Around Much Anymore",
    "genre": "jazz"
  },
  {
    "artist": "Dave Brubeck",
    "title": "Singing in the Rain",
    "genre": "jazz"
  },
  {
    "artist": "Holly Cole Trio",
    "title": "Trust in Me",
    "rating": 5,
    "genre": "jazz"
  },
  {
    "artist": "Billie the Vision and the Dancers",
    "title": "Summercat"
  },
  {
    "artist": "Passion Pit",
    "title": "Take a Walk"
  },
  {
    "artist": "Chaka Khan",
    "title": "I Feel For You",
    "rating": 5
  },
  {
    "artist": "Bran Van 3000",
    "title": "Love Cliche",
    "rating": 5
  },
  {
    "artist": "Bran Van 3000",
    "title": "Everywhere",
    "rating": 5
  },
  {
    "artist": "Bran Van 3000",
    "title": "Astounded",
    "rating": 5
  },
  {
    "artist": "DyE",
    "title": "Fantasy"
  },
  {
    "artist": "Afrojack ft. Eva Simons",
    "title": "Take Over Control"
  },
  {
    "artist": "Daft Punk",
    "title": "Too Long"
  },
  {
    "artist": "Everything but the Girl",
    "title": "Missing"
  },
  {
    "artist": "Steve Reich",
    "title": "Different Trains"
  },
  {
    "artist": "Steve Reich",
    "title": "Violin Phase"
  },
  {
    "artist": "Daft Punk",
    "title": "Something About Us",
    "rating": 5
  },
  {
    "artist": "Nujabes",
    "title": "Mystline",
    "rating": 4
  },
  {
    "artist": "Nujabes",
    "title": "Battlecry",
    "rating": 5
  },
  {
    "artist": "Nujabes",
    "title": "Feather",
    "rating": 5
  },
  {
    "artist": "Nujabes",
    "title": "Aruarian Dance",
    "rating": 5
  },
  {
    "artist": "Nujabes",
    "title": "Counting Stars",
    "rating": 5
  },
  {
    "artist": "Nujabes",
    "title": "Flowers",
    "rating": 5
  },
  {
    "artist": "Blur",
    "title": "Song 2"
  },
  {
    "artist": "Daft Punk",
    "title": "Revolution 909"
  },
  {
    "artist": "Pulp",
    "title": "This Is Hardcore",
    "rating": 5
  },
  {
    "artist": "Sum 41",
    "title": "Makes No Difference"
  },
  {
    "artist": "Uncle Kracker",
    "title": "Drift Away"
  },
  {
    "artist": "Dobie Gray",
    "title": "Drift Away"
  },
  {
    "artist": "Bran Van 3000",
    "title": "Drinking In L.A.",
    "rating": 5
  },
  {
    "artist": "Nerve",
    "title": "Drum and Bass"
  },
  {
    "artist": "Bee Gees",
    "title": "You Should Be Dancing"
  },
  {
    "artist": "Screaming Headless Torsos",
    "title": "Smile In A Wave"
  },
  {
    "artist": "UnanimousDelivers",
    "title": "Night Of Pony ★ ナイト・オブ・ポニー"
  },
  {
    "artist": "CRTified Technician",
    "title": "Friendship is Magic Extended Version (Famitracker VRC6 NES Chiptune)",
    "url": "http:\/\/www.youtube.com\/watch?v=e1HPaEM5NqY"
  },
  {
    "artist": "UnanimousDelivers",
    "title": "1000 PEOPLE CLICKED ON THE SUBSCRIBE BUTTON BY ACCIDENT (and then clicked on it AGAIN!)"
  },
  {
    "artist": "POGO",
    "title": "Alice (Disney Remix)"
  },
  {
    "artist": "Kitsune^2",
    "title": "Rainbow Tylenol"
  },
  {
    "artist": "Kitsune^2",
    "title": "Avast Your Ass"
  },
  {
    "artist": "Renard",
    "title": "Intensive Care Unit"
  },
  {
    "artist": "Jean-Jacques Perrey",
    "title": "Sentimental Trip"
  },
  {
    "artist": "Bruce Springsteen",
    "title": "Born in the U.S.A.",
    "rating": 3
  },
  {
    "artist": "David Bowie",
    "title": "Let's Dance"
  },
  {
    "artist": "Jennifer Lopez",
    "title": "Waiting For Tonight"
  },
  {
    "artist": "Michael Jackson",
    "title": "P.Y.T. (Pretty Young Thing)"
  },
  {
    "artist": "Karen Ramirez",
    "title": "Looking For Love",
    "rating": 5
  },
  {
    "artist": "Sitti Navarro",
    "title": "I Didn't Know I Was Looking for Love",
    "rating": 5
  },
  {
    "artist": "Dirty Vegas",
    "title": "Days Go By"
  },
  {
    "artist": "The Lonely Island",
    "title": "Threw It On The Ground"
  },
  {
    "artist": "Geto Boys",
    "title": "Damn It Feels Good To Be A Gangsta"
  },
  {
    "artist": "Splendora",
    "title": "You’re Standing on My Neck"
  },
  {
    "artist": "Pearl Kyoudai",
    "title": "Youkoso! Hitori Bocchi"
  },
  {
    "artist": "Thin Lizzy",
    "title": "The Boys Are Back in Town",
    "rating": 5
  },
  {
    "artist": "Diddy",
    "title": "Coming Home"
  },
  {
    "artist": "Circ (DeDonatis Remix)",
    "title": "Destroy She Said"
  },
  {
    "artist": "Circ",
    "title": "Destroy She Said"
  },
  {
    "artist": "REM",
    "title": "Everybody Hurts"
  },
  {
    "artist": "Jessie J",
    "title": "Domino"
  },
  {
    "artist": "Muse",
    "title": "Uprising"
  },
  {
    "artist": "Slackcircus Studios",
    "title": "HEYYEYAAEYAAAEYAEYAA"
  },
  {
    "artist": "Scatman John",
    "title": "Scatman"
  },
  {
    "artist": "Puff Daddy",
    "title": "I'll Be Missing You"
  },
  {
    "artist": "Senses Fail",
    "title": "Rum Is For Drinking, Not For Burning"
  },
  {
    "artist": "Beck",
    "title": "Loser"
  },
  {
    "artist": "The OverClocked Plaid Muffins",
    "title": "Delicious and Moist",
    "isObscure": true
  },
  {
    "artist": "The Lovin' Spoonful",
    "title": "Do You Believe in Magic"
  },
  {
    "artist": "Stars on 54",
    "title": "If You Could Read My Mind"
  },
  {
    "artist": "Kavinsky",
    "title": "Nightcall",
    "rating": 5
  },
  {
    "artist": "Alex Clare",
    "title": "Too Close"
  },
  {
    "artist": "Calvin Harris",
    "title": "Feel So Close"
  },
  {
    "artist": "Harvey Danger",
    "title": "Flagpole Sitta"
  },
  {
    "artist": "College & Electric Youth",
    "title": "A Real Hero",
    "rating": 5
  },
  {
    "artist": "The Rolling Stones",
    "title": "Mona (I Need You Baby)"
  },
  {
    "artist": "Florence + The Machine",
    "title": "You've Got The Love"
  },
  {
    "artist": "Rachel Goodrich",
    "title": "Light Bulb"
  },
  {
    "artist": "Feint & Boyinaband",
    "title": "Time Bomb"
  },
  {
    "artist": "Burial",
    "title": "Archangel"
  },
  {
    "artist": "Gorillaz",
    "title": "On Melancholy Hill",
    "rating": 4
  },
  {
    "artist": "Black Eyed Peas",
    "title": "Meet Me Halfway"
  },
  {
    "artist": "Kevin Rudolf",
    "title": "Let It Rock",
    "rating": 2
  },
  {
    "artist": "Martin Solveig ft Dragonette",
    "title": "Big In Japan"
  },
  {
    "artist": "Dragonette",
    "title": "I Get Around"
  },
  {
    "artist": "Pendulum",
    "title": "Propane Nightmares"
  },
  {
    "artist": "Thomas Dolby",
    "title": "She Blinded Me With Science"
  },
  {
    "artist": "Gotye",
    "title": "Eyes Wide Open"
  },
  {
    "artist": "Savoir Adore",
    "title": "Pop Goes the World"
  },
  {
    "artist": "Men Without Hats",
    "title": "Pop Goes the World"
  },
  {
    "artist": "Quiet Riot",
    "title": "Cum On Feel the Noize"
  },
  {
    "artist": "General Public",
    "title": "Tenderness"
  },
  {
    "artist": "Stevie Wonder",
    "title": "Don't You Worry 'bout a Thing"
  },
  {
    "artist": "Gotye",
    "title": "Somebody That I Used to Know"
  },
  {
    "artist": "Walk off the Earth",
    "title": "Somebody That I Used to Know"
  },
  {
    "artist": "Fun",
    "title": "We Are Young"
  },
  {
    "artist": "glue70",
    "title": "Friendship is Magic",
    "url": "http:\/\/www.youtube.com\/watch?v=aDynYwhUyoY&feature=related",
    "website": "youtube.com",
    "isObscure": true
  },
  {
    "artist": "Adventure Club",
    "title": "Do I See Color",
    "rating": 5
  },
  {
    "artist": "Pendulum",
    "title": "Axle Grinder"
  },
  {
    "artist": "Pendulum",
    "title": "Blood Sugar"
  },
  {
    "artist": "Neutral Milk Hotel",
    "title": "Two Headed Boy"
  },
  {
    "artist": "Neon Trees",
    "title": "Animal"
  },
  {
    "artist": "Karmin",
    "title": "Brokenhearted"
  },
  {
    "artist": "Nightcore",
    "title": "Dam Dadi Do"
  },
  {
    "artist": "Aphex Twin",
    "title": "Girl/Boy Song",
    "rating": 5
  },
  {
    "artist": "Jefferson Airplane",
    "title": "Somebody To Love"
  },
  {
    "artist": "Tycho",
    "title": "Coastal Brake"
  },
  {
    "artist": "John Mellencamp",
    "title": "Hurts So Good"
  },
  {
    "artist": "Green Day",
    "title": "Time Of Your Life (Good Riddance)"
  },
  {
    "artist": "Beardyman",
    "title": "Live @ Kendal Calling"
  },
  {
    "artist": "The Bangles",
    "title": "Manic Monday"
  },
  {
    "artist": "Train",
    "title": "Drive By"
  },
  {
    "artist": "The Wanted",
    "title": "Glad You Came"
  },
  {
    "artist": "Flo Rida",
    "title": "Wild Ones"
  },
  {
    "artist": "Ce Ce Peniston",
    "title": "Finally"
  },
  {
    "artist": "Stardust",
    "title": "Music Sounds Better with You",
    "rating": 5
  },
  {
    "artist": "Patrick Hernandez",
    "title": "Born to Be Alive"
  },
  {
    "artist": "Kelee Skin Peach",
    "title": "Never Treat Me Right (2step remix)"
  },
  {
    "artist": "Pendulum",
    "title": "Streamline"
  },
  {
    "artist": "Wolfgang Gartner",
    "title": "Wolfgang's 5th Symphony"
  },
  {
    "artist": "H*Wood",
    "title": "Could It Be You (Punk Rock Chick)"
  },
  {
    "artist": "",
    "title": "UKF Music Podcast #4 - Circus Records (Mixed by Flux Pavilion)",
    "website": "youtube.com"
  },
  {
    "artist": "",
    "title": "House Mix Octubre 2011 (II)",
    "user": "emsoks",
    "url": "http:\/\/www.youtube.com\/watch?v=fqEUt9a1e0c",
    "website": "youtube.com"
  },
  {
    "artist": "Aphex Twin",
    "title": "Flim"
  },
  {
    "artist": "Aphex Twin",
    "title": "Avril 14",
    "rating": 5
  },
  {
    "artist": "Aphex Twin",
    "title": "Xtal"
  },
  {
    "artist": "Aphex Twin",
    "title": "Ziggomatic 17"
  },
  {
    "artist": "Aphex Twin",
    "title": "Nannou"
  },
  {
    "artist": "Aphex Twin",
    "title": "Rhubarb"
  },
  {
    "artist": "Aphex Twin",
    "title": "Donkey Rhubarb"
  },
  {
    "artist": "Skrillex",
    "title": "In for the Kill"
  },
  {
    "artist": "deadmau5",
    "title": "You & I"
  },
  {
    "artist": "Ingrid Michaelson",
    "title": "Can't Help Falling in Love with You"
  },
  {
    "artist": "Dream Theater",
    "title": "In the Presence of Enemies"
  },
  {
    "artist": "Chobits",
    "title": "I Hear You Everywhere"
  },
  {
    "artist": "Amaning",
    "title": "Soul Joy"
  },
  {
    "artist": "Pendulum",
    "title": "Hold Your Colour"
  },
  {
    "artist": "Knife Party",
    "title": "Internet Friends"
  },
  {
    "artist": "Lock N Bounce",
    "title": "UFO in the House"
  },
  {
    "artist": "Gnarls Barkley",
    "title": "Gone Daddy Gone"
  },
  {
    "artist": "Gnarls Barkley",
    "title": "Going On"
  },
  {
    "artist": "Gnarls Barkley",
    "title": "Who's Gonna Save My Soul"
  },
  {
    "artist": "David Guetta",
    "title": "Titanium"
  },
  {
    "artist": "Wolfgang Gartner",
    "title": "Illmerica"
  },
  {
    "artist": "Wolfgang Gartner",
    "title": "Space Junk"
  },
  {
    "artist": "Wolfgang Gartner",
    "title": "There and Back"
  },
  {
    "artist": "deadmau5 & Wolfgang Gartner",
    "title": "Animal Rights"
  },
  {
    "artist": "deadmau5",
    "title": "Faxing Berlin"
  },
  {
    "artist": "No Doubt",
    "title": "Hey Baby"
  },
  {
    "artist": "Bobby Day",
    "title": "Rockin' Robin"
  },
  {
    "artist": "Carl Carlton",
    "title": "Everlasting Love"
  },
  {
    "artist": "Faith Hill",
    "title": "The Way You Love Me"
  },
  {
    "artist": "Shania Twain",
    "title": "That Don't Impress Me Much"
  },
  {
    "artist": "Done With Dolls",
    "title": "Story Of My Life"
  },
  {
    "artist": "Nelly Furtado",
    "title": "Do It"
  },
  {
    "artist": "Chris Brown",
    "title": "Forever",
    "rating": 1
  },
  {
    "artist": "Janet Jackson",
    "title": "Someone to Call My Lover"
  },
  {
    "artist": "R. Kelly",
    "title": "Ignition (remix)"
  },
  {
    "artist": "Sixpence None The Richer",
    "title": "There She Goes",
    "rating": 5
  },
  {
    "artist": "Guru Josh Project",
    "title": "Infinity 2008"
  },
  {
    "artist": "Dj Sammy & Yanou feat. DO",
    "title": "Heaven"
  },
  {
    "artist": "Gnarls Barkley",
    "title": "Run"
  },
  {
    "artist": "The Pillows",
    "title": "Crazy Sunshine"
  },
  {
    "artist": "Blink-182",
    "title": "Adam's Song"
  },
  {
    "artist": "Hikasa",
    "title": "Don't Say 'Lazy'"
  },
  {
    "artist": "Kiss",
    "title": "I Was Made for Loving You"
  },
  {
    "artist": "K'Naan",
    "title": "Take A Minute"
  },
  {
    "artist": "The Glitch Mob",
    "title": "Seven Nation Army"
  },
  {
    "artist": "psycosis91",
    "title": "My Little K-On!!",
    "isObscure": true,
    "website": "youtube.com",
    "uri": "http://www.youtube.com/watch?v=rYTJ7poJnq0&feature=plcp&context=C3217b83UDOEgsToPDskJvYYYBnQxWVAUlIWJkIFZb"
  },
  {
    "artist": "Lifeformed",
    "title": "Fifty FPS Forest",
    "website": "bandcamp.com"
  },
  {
    "artist": "Lifeformed",
    "title": "Cider Time",
    "website": "bandcamp.com"
  },
  {
    "artist": "Bodyrockers",
    "title": "I Like the Way"
  },
  {
    "artist": "Rich Aucoin",
    "title": "It"
  },
  {
    "artist": "The Flaming Lips",
    "title": "Fight Test"
  },
  {
    "artist": "Owsey, Stumbleine & Shura",
    "title": "You Came Out Of Nowhere",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "FELIX",
    "title": "Shades",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "Beat Culture",
    "title": "Memory (Cassettes)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "L▲nguⓘd",
    "title": "Scapes (Sound Recording Project)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "The Beloved",
    "title": "Sweet Harmony (Levantine Remix)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "Preyfour + Mizuki's Last Chance",
    "title": "Backflip Dinosaur",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "Jonny Bee",
    "title": "Deep Under My Skin (Orginal Mix)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "DeeJMD",
    "title": "The Ice",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "CHEEZ!",
    "title": "Wave (Fromance Remix)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "The Living Tombstone",
    "title": "Eurobeat Brony - Discord (The Living Tombstone's Remix)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "BICEP",
    "title": "BLONDES | WATER (BICEP REMIX)",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "Owsey & CoMa",
    "title": "Stay With Me",
    "isObscure": true,
    "website": "soundcloud.com"
  },
  {
    "artist": "Palpable",
    "title": "In Pieces",
    "isObscure": true,
    "website": "ocremix.org"
  },
  {
    "artist": "Brokenkites",
    "title": "Mechanize",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Brokenkites",
    "title": "Danger Current",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Mister Electric Demon",
    "title": "XMASMYTH",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Mister Electric Demon",
    "title": "3VIL-42ko",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Mister Electric Demon",
    "title": "CHO731ko",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "DANJYON KIMURA",
    "title": "TELEPORTER",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "DANJYON KIMURA",
    "title": "Space Alone",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "DANJYON KIMURA",
    "title": "MAIN THEME",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "DANJYON KIMURA",
    "title": "Nazca",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "DANJYON KIMURA",
    "title": "COUNT END",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Secret Babies",
    "title": "Aloof Tops",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Secret Babies",
    "title": "Bicycle Tunes",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Secret Babies",
    "title": "Frayed With Day",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "Secret Babies",
    "title": "Russian Wind",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "MenT@i",
    "title": "ハッピィケンキュウジョ",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "MenT@i",
    "title": "Selfish",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "MenT@i",
    "title": "初恋",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "epopsan",
    "title": "signal",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "epopsan",
    "title": "blue sky guitar",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "epopsan",
    "title": "restart",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "epopsan",
    "title": "a cog life",
    "isObscure": true,
    "website": "jamendo.com"
  },
  {
    "artist": "SoGreatAndPowerful",
    "title": "A Beautiful Heart",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Tower of Heaven Soundtrack",
    "title": "Luna Ascension",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "DJ Contacreast",
    "title": "Gates of Freedom",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "daks",
    "title": "The Best Party (Pinkie Pie daks Remix)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "331Erock",
    "title": "My Little Pony Meets Metal",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "RAINBOW DASH",
    "title": "Electric Feel Cover (MGMT)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "My Little Pony",
    "title": "Smile"
  },
  {
    "artist": "SweetieBot",
    "title": "Sweetie's Big Race",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "",
    "title": "Pinkie's Brew (Extended Version)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Mrmilkcarton",
    "title": "Its a Cold World",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Foozogz",
    "title": "Demented Cupcakes",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Wooden Toaster",
    "title": "Beyond Her Garden",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Chain Algorithm",
    "title": "Elements of Harmonics (DJ Pon-3 vs. Octavia)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "General Mumble",
    "title": "More Than a Chicken",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Nightmare Night",
    "title": "[WoodenToaster + Mic The Microphone]",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "AbranteDr",
    "title": "\"May the best rap win!\" RD&Fluttershy mix",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "KeepOnRockin'",
    "title": "Spin That Record Vinyl Scratch ",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "AgileDash",
    "title": "The Sunny Side Of Equestria",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "",
    "title": "Balladshy (Fluttershy's Theme) [Original] (Feat. Frederic Horseshoepin)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Danfango700",
    "title": "APPLEBLOOM",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "",
    "title": "Luna (Minimal House Cover [Feat. BeautifullyAbstract])",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Makkon as General Mumble",
    "title": "Test Pony",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Archie.V",
    "title": "Christmas In Equestria",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "",
    "title": "This is Unicorn E10 Winter Wrap Up Bonus Episode",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "PinkiePieSwear",
    "title": "Sunshine and Celery Stalks",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Silva Hound",
    "title": "Spitfire (Silva Hound Remix)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Silva Hound",
    "title": "Spitfire",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "SoGreatandPowerful",
    "title": "Your Faithful Student",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "PinkiePieSwear",
    "title": "Flutterwonder",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Dirty Androids vs. Pony Punk",
    "title": "Golden Cupcakes",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Super Ponybeat",
    "title": "Art of the Dress",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Saltlakrits",
    "title": "Giggle at the Ghostie (Saltlakrits 20% Cooler Remix)",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "",
    "title": "Brony Heaven",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Jackle App",
    "title": "I Love Everything",
    "isObscure": true,
    "website": "youtube.com"
  },
  {
    "artist": "Daft Punk",
    "title": "Digital Love"
  },
  {
    "artist": "The Apples in Stereo",
    "title": "Dance Floor"
  },
  {
    "artist": "The Apples in Stereo",
    "title": "Signal in the Sky"
  },
  {
    "artist": "Cirez D",
    "title": "Glow"
  },
  {
    "artist": "Benny Benassi",
    "title": "Satisfaction"
  },
  {
    "artist": "DJ Falcon & Thomas Bangalter",
    "title": "Together"
  },
  {
    "artist": "La Roux",
    "title": "In for the Kill"
  },
  {
    "artist": "Beardyman",
    "title": "Vampire Skank"
  },
  {
    "artist": "Aphex Twin",
    "title": "Window Licker",
    "rating": 5
  },
  {
    "artist": "Kenny Loggins",
    "title": "House At Pooh Corner"
  },
  {
    "artist": "Marvin Gaye",
    "title": "Let's Get It On",
    "rating": 5
  },
  {
    "artist": "Katy Perry",
    "title": "The One That Got Away"
  },
  {
    "artist": "Mia Martina",
    "title": "Burning"
  },
  {
    "artist": "Spiller",
    "title": "Groovejet (If This Ain't Love)"
  },
  {
    "artist": "Armand Van Helden",
    "title": "U Don't Know Me"
  },
  {
    "artist": "Skrillex",
    "title": "Scary Monsters and Nice Sprites"
  },
  {
    "artist": "Beardyman",
    "title": "Satvia Steps"
  },
  {
    "artist": "Kylie Minogue",
    "title": "The Loco-Motion"
  },
  {
    "artist": "Doman & Gooding",
    "title": "Runnin"
  },
  {
    "artist": "Brooke Fraser",
    "title": "Something in the Water"
  },
  {
    "artist": "Paramore",
    "title": "Misery Business"
  },
  {
    "artist": "Paramore",
    "title": "The Only Exception"
  },
  {
    "artist": "3L",
    "title": "Listen Up"
  },
  {
    "artist": "The Black Keys",
    "title": "Tighten Up"
  },
  {
    "artist": "Alanis Morissette",
    "title": "Head Over Feet"
  },
  {
    "artist": "They Might Be Giants",
    "title": "I Am a Paleontologist"
  },
  {
    "artist": "Jimmy Eat World",
    "title": "The Middle"
  },
  {
    "artist": "Violent Femmes",
    "title": "Blister in the Sun"
  },
  {
    "artist": "Beardyman",
    "title": "Gonna Be Sick"
  },
  {
    "artist": "Linval Thompson",
    "title": "I Love Marijuana"
  },
  {
    "artist": "Beardyman",
    "title": "Live @ Kendal Calling (part 1)"
  },
  {
    "artist": "Avicii",
    "title": "Electric Mastrubation"
  },
  {
    "artist": "Orgy",
    "title": "Blue Monday"
  },
  {
    "artist": "New Order",
    "title": "Blue Monday"
  },
  {
    "artist": "MGMT",
    "title": "Electric Feel"
  },
  {
    "artist": "Parov Stelar",
    "title": "Catgroove"
  },
  {
    "artist": "",
    "title": "FUKKIRETA"
  },
  {
    "artist": "Faith Hill",
    "title": "This Kiss"
  },
  {
    "artist": "Sporty-O",
    "title": "Let Me Hit It (Audiostalkers Original Mix)"
  },
  {
    "artist": "MLP:FiM BGM",
    "title": "Cutie Mark Crusaders Go Crusading"
  },
  {
    "artist": "deadmau5",
    "title": "Alone With You"
  },
  {
    "artist": "Carly Rae Jepsen",
    "title": "Call Me Maybe"
  },
  {
    "artist": "Foster The People",
    "title": "Helena Beat"
  },
  {
    "artist": "Cave Story",
    "title": "Geothermal",
    "rating": 5
  },
  {
    "artist": "Cave Story",
    "title": "Moonsong",
    "rating": 5
  },
  {
    "artist": "Cave Story",
    "title": "Waterway",
    "rating": 5
  },
  {
    "artist": "Cave Story",
    "title": "Cave Story Theme"
  },
  {
    "artist": "MGMT",
    "title": "Time to Pretend"
  },
  {
    "artist": "Coldplay",
    "title": "Paradise"
  },
  {
    "artist": "Mason",
    "title": "Exceeder"
  },
  {
    "artist": "deadmau5",
    "title": "Moar Ghosts N Stuff"
  },
  {
    "artist": "deadmau5",
    "title": "Strobe"
  },
  {
    "artist": "deadmau5",
    "title": "Professional Griefers"
  },
  {
    "artist": "deadmau5 & Kaskade",
    "title": "I Remember"
  },
  {
    "artist": "Mason vs Princess Superstar",
    "title": "Perfect (exceeder) [original edit]"
  },
  {
    "artist": "Stephen Lynch",
    "title": "Down To The Old Pub Instead"
  },
  {
    "artist": "Simple Plan",
    "title": "I'd Do Anything"
  },
  {
    "artist": "Stealers Wheel",
    "title": "Stuck in the Middle With You"
  },
  {
    "artist": "Electric Light Orchestra",
    "title": "Mr. Blue Sky"
  },
  {
    "artist": "The Asteroids Galaxy Tour",
    "title": "The Golden Age"
  },
  {
    "artist": "Daft Punk",
    "title": "Face to Face"
  },
  {
    "artist": "Daft Punk",
    "title": "Face to Face vs Harder Better Faster Stronger"
  },
  {
    "artist": "Daft Punk",
    "title": "Too Long / Steam Machine"
  },
  {
    "artist": "Daft Punk",
    "title": "Aura Rock"
  },
  {
    "artist": "Daft Punk",
    "title": "Television Rules The Nation"
  },
  {
    "artist": "Daft Punk",
    "title": "Make Love"
  },
  {
    "artist": "Daft Punk",
    "title": "Da Funk"
  },
  {
    "artist": "Daft Punk",
    "title": "Aerodynamic"
  },
  {
    "artist": "Daft Punk",
    "title": "Human After All"
  },
  {
    "artist": "Daft Punk",
    "title": "Robot Rock"
  },
  {
    "artist": "Daft Punk",
    "title": "The Prime Time of Your Life"
  },
  {
    "artist": "Foster the People",
    "title": "Call It What You Want"
  },
  {
    "artist": "The Postal Service",
    "title": "Such Great Heights",
    "rating": 5
  },
  {
    "artist": "Peter Bjorn and John",
    "title": "Young Folks",
    "rating": 5
  },
  {
    "artist": "The Tragically Hip",
    "title": "Ahead By A Century",
    "rating": 5
  },
  {
    "artist": "3 Doors Down",
    "title": "Kryptonite",
    "rating": 5
  },
  {
    "artist": "deadmau5",
    "title": "Raise Your Weapon (Madeon Remix)"
  },
  {
    "artist": "deadmau5",
    "title": "Raise Your Weapon"
  },
  {
    "artist": "Black Kids",
    "title": "I'm Not Gonna Teach Your Boyfriend How To Dance With You"
  },
  {
    "artist": "Petula Clark",
    "title": "Downtown"
  },
  {
    "artist": "Semisonic",
    "title": "Closing Time",
    "rating": 5
  },
  {
    "artist": "Rednex",
    "title": "Cotton Eye Joe"
  },
  {
    "artist": "The New Pornographers",
    "title": "Moves"
  },
  {
    "artist": "David Bowie",
    "title": "Oh You Pretty Things"
  },
  {
    "artist": "Bingo Players",
    "title": "Cry (Just A Little)"
  },
  {
    "artist": "Adele",
    "title": "Someone Like You"
  },
  {
    "artist": "Drill Queen",
    "title": "Born Depressed"
  },
  {
    "artist": "",
    "title": "Stirring an Autumn Moon"
  },
  {
    "artist": "Golden City Factory",
    "title": "Mooned Insect"
  },
  {
    "artist": "Pendulum",
    "title": "The Island (Madeon Remix)"
  },
  {
    "artist": "",
    "title": "Ghetto Superstar"
  },
  {
    "artist": "Ellie Goulding",
    "title": "Starry Eyed (Russ Chimes Remix)"
  },
  {
    "artist": "Super Smash Bros Brawl",
    "title": "Fountain of Dreams (Melee)"
  },
  {
    "artist": "Kirby Super Star Ultra Music",
    "title": "Gourmet Race"
  },
  {
    "artist": "Salteens",
    "title": "Nice Day"
  },
  {
    "artist": "Archies",
    "title": "Sugar Sugar"
  },
  {
    "artist": "Billy Ocean",
    "title": "Caribbean Queen"
  },
  {
    "artist": "Silva Hound",
    "title": "Twilight Sparkle"
  },
  {
    "artist": "iidx gold",
    "title": "Second Heaven"
  },
  {
    "artist": "Bleach OST 4",
    "title": "07 Can't Lose"
  },
  {
    "artist": "The Offspring",
    "title": "You're Gonna Go Far, Kid"
  },
  {
    "artist": "",
    "title": "Runnin in the 90's"
  },
  {
    "artist": "Eric Prydz",
    "title": "Call on Me"
  },
  {
    "artist": "Lady Antebellum",
    "title": "Need You Now"
  },
  {
    "artist": "THE OFFSPRING",
    "title": "The Kids Aren't Alright (The Wiseguys Remix)"
  },
  {
    "artist": "Death Cab for Cutie",
    "title": "I Will Follow You into the Dark"
  },
  {
    "artist": "Oikawa Rin",
    "title": "I'll be your home"
  },
  {
    "artist": "Taco",
    "title": "Puttin' on the Ritz"
  },
  {
    "artist": "",
    "title": "Giggle at the Rejects (All-American Rejects vs. My Little Pony)",
    "isObscure": true
  },
  {
    "artist": "The Scissor Sisters ",
    "title": "I Can't Decide"
  },
  {
    "artist": "S Club 7",
    "title": "Bring It All Back"
  },
  {
    "artist": "The Quick",
    "title": "Girls Against the World",
    "rating": 5
  },
  {
    "artist": "Emilia Rydberg",
    "title": "Big Big World"
  },
  {
    "artist": "She & Him",
    "title": "Why Do You Let Me Stay Here?"
  },
  {
    "artist": "She & Him",
    "title": "In the Sun"
  },
  {
    "artist": "Supertramp",
    "title": "The Logical Song"
  },
  {
    "artist": "",
    "title": "The Girl You Left Behind"
  },
  {
    "artist": "Duran Duran",
    "title": "The Reflex"
  },
  {
    "artist": "Avicii",
    "title": "Levels"
  },
  {
    "artist": "Marianas Trench",
    "title": "Haven't Had Enough"
  },
  {
    "artist": "John Denver",
    "title": "Country Roads"
  },
  {
    "artist": "",
    "title": "Dynamite"
  },
  {
    "artist": "Skrillex",
    "title": "Cinema (Skrillex Remix)"
  },
  {
    "artist": "Eric Prydz",
    "title": "Pjanoo (Club Mix)"
  },
  {
    "artist": "RÃ¶yksopp",
    "title": "Happy Up Here"
  },
  {
    "artist": "Fukkk Off",
    "title": "Rave Is King"
  },
  {
    "artist": "Kai",
    "title": "I Choose Me"
  },
  {
    "artist": "Maroon 5 featuring Christina Aguilera",
    "title": "Moves Like Jagger"
  },
  {
    "artist": "Foster the People",
    "title": "Pumped Up Kicks"
  },
  {
    "artist": "Syd Barrett",
    "title": "Effervescing Elephant"
  },
  {
    "artist": "",
    "title": "Moleskinsoft Clone Remover"
  },
  {
    "artist": "Adele",
    "title": "Rolling in the Deep"
  },
  {
    "artist": "Lionel Ritchie",
    "title": "All Night Long"
  },
  {
    "artist": "Shaggy",
    "title": "Angel"
  },
  {
    "artist": "Elton John",
    "title": "Bennie and the Jets",
    "rating": 5
  },
  {
    "artist": "Jewel",
    "title": "You Were Meant for Me"
  },
  {
    "artist": "",
    "title": "Radical Dreamers",
    "rating": 5
  },
  {
    "artist": "Macy Gray",
    "title": "I Try"
  },
  {
    "artist": "",
    "title": "Proud Mary"
  },
  {
    "artist": "Lilly Allen",
    "title": "The Fear"
  },
  {
    "artist": "",
    "title": "Love Shack"
  },
  {
    "artist": "",
    "title": "More Than Words"
  },
  {
    "artist": "Ingrid Michaelson",
    "title": "The Way I Am",
    "rating": 5
  },
  {
    "artist": "Hootie & the Blowfish",
    "title": "I Go Blind"
  },
  {
    "artist": "3 Doors Down",
    "title": "Let Me Go"
  },
  {
    "artist": "Liz Phair",
    "title": "Why Can't I?"
  },
  {
    "artist": "Robbie Williams",
    "title": "Feel"
  },
  {
    "artist": "Huey Lewis & the News",
    "title": "The Power of Love"
  },
  {
    "artist": "Flogging Molly",
    "title": "Drunken Lullabies",
    "rating": 5
  },
  {
    "artist": "The Guild",
    "title": "Do You Wanna Date My Avatar"
  },
  {
    "artist": "The Supremes",
    "title": "You Can't Hurry Love"
  },
  {
    "artist": "Weezer",
    "title": "Buddy Holly",
    "rating": 5
  },
  {
    "artist": "Vince Guaraldi",
    "title": "Skating"
  },
  {
    "artist": "Oasis",
    "title": "Wonderwall",
    "rating": 5
  },
  {
    "artist": "",
    "title": "Six Little Eggs"
  },
  {
    "artist": "Chic",
    "title": "Le Freak"
  },
  {
    "artist": "Flogging Molly",
    "title": "Salty Dog"
  },
  {
    "artist": "Tenacious D",
    "title": "Tribute"
  },
  {
    "artist": "Styx",
    "title": "Mr. Roboto"
  },
  {
    "artist": "Yoshie Nakano",
    "title": "ソレイユ",
    "album": "Soleil"
  },
  {
    "artist": "Aerosmith",
    "title": "Cryin'"
  },
  {
    "artist": "Child of Eden",
    "title": "Star Line",
    "rating": 5
  },
  {
    "artist": "Martin Solveig & Dragonette",
    "title": "Hello"
  },
  {
    "artist": "Toto",
    "title": "Georgy Porgy"
  },
  {
    "artist": "Harry Chapin",
    "title": "Cat's in the Cradle"
  },
  {
    "artist": "Zelda: Ocarina of Time",
    "title": "Zelda's Song"
  },
  {
    "artist": "If These Trees Could Talk",
    "title": "Malabar Front"
  },
  {
    "artist": "Big Mountain",
    "title": "Baby I Love Your Way"
  },
  {
    "artist": "Bodyrox",
    "title": "Yeah Yeah ft. Luciana"
  },
  {
    "artist": "J. Geils Band",
    "title": "Freeze Frame"
  },
  {
    "artist": "",
    "title": "Hall of the Mountain King"
  },
  {
    "artist": "",
    "title": "Table Dancing"
  },
  {
    "artist": "Bill Conti",
    "title": "Gonna Fly Now (Rocky Theme)"
  },
  {
    "artist": "Anamanaguchi",
    "title": "Another Winter",
    "rating": 5
  },
  {
    "artist": "Round Table",
    "title": "Puzzle *Extra Hot Mix*"
  },
  {
    "artist": "deadmau5",
    "title": "Ghosts N Stuff"
  },
  {
    "artist": "Kings of Leon",
    "title": "Use Somebody"
  },
  {
    "artist": "INXS",
    "title": "Need You Tonight"
  },
  {
    "artist": "Electric Six",
    "title": "Down at McDonelzzz"
  },
  {
    "artist": "Alanis Morissette",
    "title": "I'm a Bitch I'm a Lover",
    "rating": 5
  },
  {
    "artist": "Yello",
    "title": "Oh Yeah"
  },
  {
    "artist": "Fatboy Slim",
    "title": "Funk Soul Brother"
  },
  {
    "artist": "Sugar Ray",
    "title": "Fly"
  },
  {
    "artist": "",
    "title": "Fanfare For the Common Man"
  },
  {
    "artist": "",
    "title": "Santa Baby"
  },
  {
    "artist": "Hamasaki Ayumi",
    "title": "No More Words"
  },
  {
    "artist": "Do As Infinity",
    "title": "shinjitsu no uta (Song of Truth)"
  },
  {
    "artist": "Kid Koala",
    "title": "Jessica Rabbit"
  },
  {
    "artist": "Kid Koala",
    "title": "I Like My Beats"
  },
  {
    "artist": "Aerosmith",
    "title": "Walk This Way"
  },
  {
    "artist": "Kid Koala",
    "title": "Emperor's Main Course"
  },
  {
    "artist": "Kid Koala",
    "title": "Moon River Remix",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Footprints"
  },
  {
    "artist": "",
    "title": "Tutti Frutti"
  },
  {
    "artist": "Kid Koala",
    "title": "Fender Bender",
    "rating": 5
  },
  {
    "artist": "Kid Koala",
    "title": "Gorillaz Routine"
  },
  {
    "artist": "Jann Arden",
    "title": "Make It Christmas Day"
  },
  {
    "artist": "Run Run Rudolph",
    "title": "Lynyrd Skynyrd"
  },
  {
    "artist": "Chuck Berry",
    "title": "Run Rudolph Run"
  },
  {
    "artist": "Everly Brothers",
    "title": "All I Have To Do Is Dream"
  },
  {
    "artist": "Fine Young Cannibals",
    "title": "She Drives Me Crazy"
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Elf's Lament"
  },
  {
    "artist": "Wild Cherry",
    "title": "Play That Funky Music"
  },
  {
    "artist": "Emilie Autumn",
    "title": "Gentlemen Aren't Nice "
  },
  {
    "artist": "R.E.M.",
    "title": "Losing My Religion"
  },
  {
    "artist": "Cee Lo Green",
    "title": "Fuck You"
  },
  {
    "artist": "Louis Armstrong",
    "title": "Basin Street Blues"
  },
  {
    "artist": "Kid Koala",
    "title": "Basin Street Blues",
    "rating": 5
  },
  {
    "artist": "Kid Koala",
    "title": "Drunk Trumpet",
    "rating": 5
  },
  {
    "artist": "Parasite Eve OST",
    "title": "Primal Eyes"
  },
  {
    "artist": "Parasite Eve",
    "title": "Main Theme Orchestral Version"
  },
  {
    "artist": "Perfect Dark",
    "title": "Menu Theme"
  },
  {
    "artist": "Mirror's Edge",
    "title": "Mirror's Edge Theme"
  },
  {
    "artist": "Seether",
    "title": "Broken"
  },
  {
    "artist": "Kid Koala",
    "title": "Skanky Panky"
  },
  {
    "artist": "Emilie Autumn",
    "title": "What If"
  },
  {
    "artist": "The Cars",
    "title": "Just What I Needed",
    "rating": 5
  },
  {
    "artist": "Third Eye Blind",
    "title": "Semi Charmed Life",
    "rating": 5
  },
  {
    "artist": "Frente!",
    "title": "Bizarre Love Triangle",
    "rating": 5
  },
  {
    "artist": "Divinyls",
    "title": "I Touch Myself"
  },
  {
    "artist": "",
    "title": "Stacy's Mom"
  },
  {
    "artist": "Wham!",
    "title": "Careless Whisper"
  },
  {
    "artist": "Wham!",
    "title": "Everything She Wants"
  },
  {
    "artist": "U2",
    "title": "I Still Haven't Found What I'm Looking For"
  },
  {
    "artist": "Toto",
    "title": "Africa"
  },
  {
    "artist": "The Police",
    "title": "Every Breath You Take"
  },
  {
    "artist": "The Pointer Sisters",
    "title": "I'm So Excited"
  },
  {
    "artist": "Starship",
    "title": "We Built This City",
    "rating": 3
  },
  {
    "artist": "Rick Springfield",
    "title": "Jessie's Girl"
  },
  {
    "artist": "Run-D.M.C.",
    "title": "Walk This Way"
  },
  {
    "artist": "",
    "title": "Simply the Best"
  },
  {
    "artist": "Modern English",
    "title": "I Melt with You"
  },
  {
    "artist": "Gary Numan",
    "title": "Cars"
  },
  {
    "artist": "New Kids on the Block",
    "title": "The Right Stuff"
  },
  {
    "artist": "Foreigner",
    "title": "I Want to Know What Love Is"
  },
  {
    "artist": "Depeche Mode",
    "title": "Just Can't Get Enough"
  },
  {
    "artist": "The Original Caste",
    "title": "One Tin Soldier"
  },
  {
    "artist": "Queen",
    "title": "Friends Will Be Friends"
  },
  {
    "artist": "Elvis Costello",
    "title": "A Slow Drag With Josephine"
  },
  {
    "artist": "Elvis Costello",
    "title": "I'll Never Fall in Love Again"
  },
  {
    "artist": "Fiddler on the Roof",
    "title": "If I Were A Rich Man"
  },
  {
    "artist": "New Kids on the Block",
    "title": "Dirty Dancing"
  },
  {
    "artist": "",
    "title": "Does Your Chewing Gum Lose Its Flavor "
  },
  {
    "artist": "",
    "title": "Disco Inferno"
  },
  {
    "artist": "Jackson 5",
    "title": "ABC"
  },
  {
    "artist": "J. Geils Band",
    "title": "Love Stinks"
  },
  {
    "artist": "Alphaville",
    "title": "Big In Japan"
  },
  {
    "artist": "Village People",
    "title": "Macho Man"
  },
  {
    "artist": "Village People",
    "title": "In the Navy"
  },
  {
    "artist": "Pet Shop Boys",
    "title": "Go West"
  },
  {
    "artist": "The Human League",
    "title": "Human"
  },
  {
    "artist": "Fisherman's Friends",
    "title": "Drunken Sailor"
  },
  {
    "artist": "",
    "title": "Here We Go Looby Loo"
  },
  {
    "artist": "Steam",
    "title": "Na Na Hey Hey Kiss Him Goodbye"
  },
  {
    "artist": "Devo",
    "title": "Whip It"
  },
  {
    "artist": "Tom Cochrane",
    "title": "Life Is A Highway"
  },
  {
    "artist": "J. Geils Band",
    "title": "Centerfold"
  },
  {
    "artist": "",
    "title": "I Believe in Miracles"
  },
  {
    "artist": "Wicked",
    "title": "For Good"
  },
  {
    "artist": "Babar",
    "title": "Babar credits"
  },
  {
    "artist": "Babar",
    "title": "Babar the elephant king intro opening theme",
    "rating": 5
  },
  {
    "artist": "Journey",
    "title": "Change For The Better"
  },
  {
    "artist": "Air Supply",
    "title": "Without You"
  },
  {
    "artist": "My Morning Jacket",
    "title": "Anytime"
  },
  {
    "artist": "Edward Maya & Mia Martina",
    "title": "Stereo Love"
  },
  {
    "artist": "Billy Talent",
    "title": "River Below"
  },
  {
    "artist": "Bruno Mars",
    "title": "Just The Way You Are",
    "rating": 1
  },
  {
    "artist": "Come On Come On",
    "title": "Goldrush"
  },
  {
    "artist": "Collette",
    "title": "Ring My Bell"
  },
  {
    "artist": "Pilot",
    "title": "Magic"
  },
  {
    "artist": "Kate Alexa",
    "title": "Broken & Beautiful"
  },
  {
    "artist": "Pink",
    "title": "Please Don't Leave Me"
  },
  {
    "artist": "Santana",
    "title": "Why Don't You & I"
  },
  {
    "artist": "Enrique Iglesias",
    "title": "Bailamos"
  },
  {
    "artist": "Neil Diamond",
    "title": "Sweet Caroline"
  },
  {
    "artist": "Tommy Tutone",
    "title": "867-5309/Jenny"
  },
  {
    "artist": "Madonna",
    "title": "Don't Tell Me"
  },
  {
    "artist": "The Killers",
    "title": "Human"
  },
  {
    "artist": "Lights",
    "title": "February Air"
  },
  {
    "artist": "Blondie",
    "title": "Call Me"
  },
  {
    "artist": "Phil Collins",
    "title": "Against All Odds",
    "rating": 2
  },
  {
    "artist": "David Seville",
    "title": "Witch Doctor"
  },
  {
    "artist": "Bryan Adams",
    "title": "Heaven"
  },
  {
    "artist": "Mariah Carey",
    "title": "Fantasy"
  },
  {
    "artist": "Jully Black",
    "title": "Until I Stay"
  },
  {
    "artist": "Dionne Warwick",
    "title": "That's What Friends are For"
  },
  {
    "artist": "Bonnie Raitt",
    "title": "Something to Talk About"
  },
  {
    "artist": "Faber Drive",
    "title": "Tongue Tied"
  },
  {
    "artist": "Melissa O'Neil",
    "title": "Alive"
  },
  {
    "artist": "Destiny's Child",
    "title": "Say My Name"
  },
  {
    "artist": "Nelly Furtado",
    "title": "Do It"
  },
  {
    "artist": "TLC",
    "title": "Waterfalls"
  },
  {
    "artist": "Madonna",
    "title": "Into the Groove"
  },
  {
    "artist": "Marc Anthony",
    "title": "You Sang to Me"
  },
  {
    "artist": "Sky",
    "title": "All I Want"
  },
  {
    "artist": "Soul Decision",
    "title": "Ohh It's Kinda Crazy"
  },
  {
    "artist": "Amy Sky",
    "title": "I Will Take Care Of You"
  },
  {
    "artist": "U2",
    "title": "The Sweetest Thing"
  },
  {
    "artist": "Alicia Keys",
    "title": "If I Ain't Got You"
  },
  {
    "artist": "Matt Nathanson",
    "title": "Come On Get Higher"
  },
  {
    "artist": "Jim Brickman",
    "title": "The Greatest Gift Of All"
  },
  {
    "artist": "Enrique Iglesias",
    "title": "Escape"
  },
  {
    "artist": "Michael Montgomery",
    "title": "I Swear"
  },
  {
    "artist": "Bob Marley",
    "title": "Is This Love"
  },
  {
    "artist": "The La's",
    "title": "There She Goes"
  },
  {
    "artist": "Colbie Caillat",
    "title": "Falling For You"
  },
  {
    "artist": "The Who",
    "title": "Won't Get Fooled Again"
  },
  {
    "artist": "Gene Chandler",
    "title": "Duke of Earl"
  },
  {
    "artist": "Fool's Garden",
    "title": "Lemon Tree"
  },
  {
    "artist": "Lights",
    "title": "Drive My Soul"
  },
  {
    "artist": "Sum 41",
    "title": "In Too Deep"
  },
  {
    "artist": "Des'ree",
    "title": "You Gotta Be"
  },
  {
    "artist": "",
    "title": "Hey, Look Me Over"
  },
  {
    "artist": "",
    "title": "Limbo Rock"
  },
  {
    "artist": "Cartoons DK",
    "title": "Witch Doctor"
  },
  {
    "artist": "Culture Club",
    "title": "Do You Really Want to Hurt Me"
  },
  {
    "artist": "The Beatles",
    "title": "Let It Be"
  },
  {
    "artist": "ABBA",
    "title": "Does Your Mother Know"
  },
  {
    "artist": "Zombie Nation",
    "title": "Kernkraft 400"
  },
  {
    "artist": "Chantal Kreviazuk",
    "title": "In This Life",
    "rating": 5
  },
  {
    "artist": "Chantal Kreviazuk",
    "title": "Time",
    "rating": 5
  },
  {
    "artist": "The Rolling Stones",
    "title": "Sympathy for the Devil",
    "rating": 5
  },
  {
    "artist": "Gloria Gaynor",
    "title": "I Will Survive"
  },
  {
    "artist": "Reel Big Fish",
    "title": "Where Have You Been"
  },
  {
    "artist": "ABBA",
    "title": "Take A Chance On Me"
  },
  {
    "artist": "Baltimora",
    "title": "Tarzan Boy"
  },
  {
    "artist": "Morrissey",
    "title": "We Hate It When Our Friends Become Successful"
  },
  {
    "artist": "Reel Big Fish",
    "title": "We Hate It When Our Friends Become Successful"
  },
  {
    "artist": "Tom Petty",
    "title": "Free Fallin'"
  },
  {
    "artist": "Bobby Darin",
    "title": "Splish Splash"
  },
  {
    "artist": "Mina Mazzini",
    "title": "Splish Splash"
  },
  {
    "artist": "Steriogram",
    "title": "Walkie Talkie Man"
  },
  {
    "artist": "Eduard Khil",
    "title": "I Am Glad To Finally Be Home (Trololololo)"
  },
  {
    "artist": "Procol Harum",
    "title": "A Whiter Shade Of Pale"
  },
  {
    "artist": "Nas",
    "title": "Memory Lane",
    "rating": 5
  },
  {
    "artist": "Barbra Streisand",
    "title": "Woman in Love"
  },
  {
    "artist": "Reel Big Fish",
    "title": "I Want Your Girlfriend"
  },
  {
    "artist": "Reel Big Fish",
    "title": "She Has a Girlfriend Now"
  },
  {
    "artist": "Modest Mouse",
    "title": "Ocean Breathes Salty"
  },
  {
    "artist": "Alice Cooper",
    "title": "School's Out"
  },
  {
    "artist": "Eric Carmen",
    "title": "Hungry Eyes"
  },
  {
    "artist": "Timbaland Feat. Katy Perry",
    "title": "If We Ever Meet Again"
  },
  {
    "artist": "Mike Posner",
    "title": "Cooler Than Me"
  },
  {
    "artist": "Rune",
    "title": "Calabria"
  },
  {
    "artist": "Loituma",
    "title": "Ievan Polkka"
  },
  {
    "artist": "",
    "title": "Mambo No. 5"
  },
  {
    "artist": "Treble Charger",
    "title": "Brand New Low"
  },
  {
    "artist": "",
    "title": "Like Humans Do"
  },
  {
    "artist": "Oingo Boingo",
    "title": "Little Girls"
  },
  {
    "artist": "Passion Pit",
    "title": "Sleepyhead"
  },
  {
    "artist": "Lazy Town",
    "title": "You Are a Pirate"
  },
  {
    "artist": "Gary Glitter",
    "title": "Rock and Roll"
  },
  {
    "artist": "Mega Man 2",
    "title": "Dr. Wily Stage 1"
  },
  {
    "artist": "Marilyn Manson",
    "title": "The Beautiful People"
  },
  {
    "artist": "Eurythmics",
    "title": "Sweet Dreams"
  },
  {
    "artist": "Soft Cell",
    "title": "Tainted Love"
  },
  {
    "artist": "Frasier theme tune",
    "title": "Kelsey Grammer"
  },
  {
    "artist": "UNDER-GRAPH",
    "title": "Tsubasa"
  },
  {
    "artist": "Caramell",
    "title": "Caramelldansen"
  },
  {
    "artist": "Def Leppard",
    "title": "Pour Some Sugar on Me"
  },
  {
    "artist": "Katy Perry",
    "title": "California Gurls"
  },
  {
    "artist": "Guns N' Roses",
    "title": "Welcome to the Jungle"
  },
  {
    "artist": "Guns N' Roses",
    "title": "November Rain"
  },
  {
    "artist": "Sum 41",
    "title": "Pieces"
  },
  {
    "artist": "Bon Jovi",
    "title": "You Give Love A Bad Name"
  },
  {
    "artist": "Three Days Grace",
    "title": "Never Too Late"
  },
  {
    "artist": "System Of A Down",
    "title": "Chop Suey!"
  },
  {
    "artist": "Finger Eleven",
    "title": "Paralyzer"
  },
  {
    "artist": "Bon Jovi",
    "title": "Have a Nice Day"
  },
  {
    "artist": "Bon Jovi",
    "title": "It's My Life"
  },
  {
    "artist": "Nirvana",
    "title": "Lithium",
    "rating": 5
  },
  {
    "artist": "Electric Light Orchestra",
    "title": "Evil Woman",
    "rating": 4
  },
  {
    "artist": "Passion Pit",
    "title": "The Reeling"
  },
  {
    "artist": "Passion Pit",
    "title": "Little Secrets"
  },
  {
    "artist": "Sonic the Hedgehog",
    "title": "Green Hill Zone"
  },
  {
    "artist": "Sonic the Hedgehog",
    "title": "Spring Yard Zone"
  },
  {
    "artist": "Sonic the Hedgehog",
    "title": "Star Light Zone"
  },
  {
    "artist": "Sonic the Hedgehog",
    "title": "Labyrinth Zone"
  },
  {
    "artist": "Sonic the Hedgehog",
    "title": "Special Stage"
  },
  {
    "artist": "Lost Odyssey",
    "title": "Battle Theme"
  },
  {
    "artist": "Lost Odyssey",
    "title": "Main Theme"
  },
  {
    "artist": "",
    "title": "Dueling Banjos"
  },
  {
    "artist": "",
    "title": "Star of County Down"
  },
  {
    "artist": "Final Fantasy VI",
    "title": "Terra's Theme"
  },
  {
    "artist": "Yahel Sherman",
    "title": "Ocean (Michael Tsukerman Remix)"
  },
  {
    "artist": "A Taste Of Honey",
    "title": "Boogie Oogie Oogie"
  },
  {
    "artist": "Cake",
    "title": "Never There"
  },
  {
    "artist": "The Eurythmics",
    "title": "Here Comes The Rain Again"
  },
  {
    "artist": "Weather Girls",
    "title": "Its Raining Men"
  },
  {
    "artist": "My Guy",
    "title": "Mary Wells"
  },
  {
    "artist": "Crowded House",
    "title": "Fall At Your Feet"
  },
  {
    "artist": "Men at Work",
    "title": "Land Down Under"
  },
  {
    "artist": "MIKA",
    "title": "Happy Ending"
  },
  {
    "artist": "Axis of Awesome",
    "title": "Four Chord Song"
  },
  {
    "artist": "Crowded House",
    "title": "Don't Dream It's Over"
  },
  {
    "artist": "Alex Lloyd",
    "title": "Amazing"
  },
  {
    "artist": "The Calling",
    "title": "Wherever You Will Go"
  },
  {
    "artist": "Kasey Chambers",
    "title": "Not Pretty Enough"
  },
  {
    "artist": "Lunar Silver Star Story",
    "title": "Luna's Boat Song (Wind Nocturne)"
  },
  {
    "artist": "Freezepop",
    "title": "Less Talk More Rokk"
  },
  {
    "artist": "James Brown",
    "title": "I Feel Good"
  },
  {
    "artist": "ANAMANAGUCHI",
    "title": "Helix Nebula"
  },
  {
    "artist": "",
    "title": "Three Times a Lady"
  },
  {
    "artist": "",
    "title": "Merry Christmas Mr Lawrence"
  },
  {
    "artist": "Slash",
    "title": "I Hate Everybody"
  },
  {
    "artist": "Anamanaguchi",
    "title": "Jetpack Blues Sunset Hues"
  },
  {
    "artist": "AF Project",
    "title": "Moonlight Madness (Temple One Remix)"
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Lovers in a Dangerous Time",
    "rating": 4
  },
  {
    "artist": "Rolling Stones",
    "title": "I Can't Get No Satisfaction"
  },
  {
    "artist": "",
    "title": "SM3 Wand Music"
  },
  {
    "artist": "",
    "title": "I Am the Very Model of a Modern Major-General"
  },
  {
    "artist": "Temptations",
    "title": "My Girl"
  },
  {
    "artist": "Kyle Andrews",
    "title": "You Always Make Me Smile"
  },
  {
    "artist": "Nick Gilder",
    "title": "Hot Child In The City",
    "rating": 4
  },
  {
    "artist": "Train",
    "title": "Hey Soul Sister",
    "rating": 3
  },
  {
    "artist": "Lily Allen",
    "title": "Fuck You"
  },
  {
    "artist": "Justin Blais",
    "title": "Some Kind Of Beautiful"
  },
  {
    "artist": "Loverboy",
    "title": "Working for the Weekend"
  },
  {
    "artist": "The Romantics",
    "title": "What I Like About You"
  },
  {
    "artist": "Gnarls Barkley",
    "title": "Crazy"
  },
  {
    "artist": "Arrogant Worms",
    "title": "Happy Birthday"
  },
  {
    "artist": "Swing Out Sister",
    "title": "Breakout"
  },
  {
    "artist": "MGMT",
    "title": "Siberian Breaks"
  },
  {
    "artist": "Spoon",
    "title": "The Underdog"
  },
  {
    "artist": "Cyndi Lauper",
    "title": "True Colors",
    "rating": 5
  },
  {
    "artist": "Cyndi Lauper",
    "title": "Time After Time",
    "rating": 4
  },
  {
    "artist": "Weezer",
    "title": "Island in the Sun"
  },
  {
    "artist": "Great Big Sea",
    "title": "Ordinary Day"
  },
  {
    "artist": "",
    "title": "'S Wonderful"
  },
  {
    "artist": "Arcade Fire",
    "title": "We Used To Wait"
  },
  {
    "artist": "",
    "title": "Drunken Sailor"
  },
  {
    "artist": "",
    "title": "A Pirate's Life for Me"
  },
  {
    "artist": "Great Big sea",
    "title": "Drunken Sailor"
  },
  {
    "artist": "",
    "title": "Sing a Song of Sixpence"
  },
  {
    "artist": "Elvis Presley",
    "title": "Always On My Mind"
  },
  {
    "artist": "Pet Shop Boys",
    "title": "West End Girls"
  },
  {
    "artist": "Elvis",
    "title": "A Little Less Conversation"
  },
  {
    "artist": "The Jacksons",
    "title": "Can You Feel It"
  },
  {
    "artist": "James Brown",
    "title": "Papa's Got A Brand New Bag"
  },
  {
    "artist": "The Teenagers",
    "title": "Homecoming",
    "rating": 5
  },
  {
    "artist": "Celine Dion",
    "title": "Because You Loved Me"
  },
  {
    "artist": "Billy Idol",
    "title": "Dancing With Myself"
  },
  {
    "artist": "Jimi Hendrix",
    "title": "Purple Haze"
  },
  {
    "artist": "Steppenwolf",
    "title": "Magic Carpet Ride"
  },
  {
    "artist": "Squeeze",
    "title": "Tempted by the Fruit of Another"
  },
  {
    "artist": "Annie Lennox",
    "title": "No More \"I Love You's\""
  },
  {
    "artist": "Tina Turner",
    "title": "What's Love Got To Do With It"
  },
  {
    "artist": "Elvis Presley",
    "title": "Can't Help Falling in Love"
  },
  {
    "artist": "Mika",
    "title": "Grace Kelly"
  },
  {
    "artist": "Wham!",
    "title": "Wake Me Up Before You Go-Go"
  },
  {
    "artist": "Carolyn Dawn Johnson",
    "title": "Complicated"
  },
  {
    "artist": "Genesis",
    "title": "In Too Deep"
  },
  {
    "artist": "Pat Boone",
    "title": "Speedy Gonzales"
  },
  {
    "artist": "Chicago",
    "title": "Hard to Say I'm Sorry"
  },
  {
    "artist": "Bonnie Tyler",
    "title": "Total Eclipse of the Heart"
  },
  {
    "artist": "LeAnn Rimes",
    "title": "How Do I Live"
  },
  {
    "artist": "",
    "title": "Peter and the Wolf"
  },
  {
    "artist": "Cat Stevens",
    "title": "Wild World"
  },
  {
    "artist": "Sheryl Crow",
    "title": "Soak Up The Sun"
  },
  {
    "artist": "",
    "title": "Take Five"
  },
  {
    "artist": "Ritchie Valens",
    "title": "La Bamba"
  },
  {
    "artist": "Blondie",
    "title": "The Tide Is High"
  },
  {
    "artist": "Debussy",
    "title": "Arabesque #1"
  },
  {
    "artist": "",
    "title": "Jesu, Joy of Man's Desiring"
  },
  {
    "artist": "",
    "title": "It Don't Mean a Thing (If It Ain't Got That Swing)"
  },
  {
    "artist": "Rob Thomas",
    "title": "This Is How a Heart Breaks"
  },
  {
    "artist": "Debussy",
    "title": "Clair de lune",
    "rating": 5
  },
  {
    "artist": "Scott Pilgrim vs The World",
    "title": "I Heard Ramona Sing"
  },
  {
    "artist": "Lovin' Spoonful",
    "title": "Daydream"
  },
  {
    "artist": "Bernard Herrmann",
    "title": "Twisted Nerve"
  },
  {
    "artist": "Lipps Inc",
    "title": "Funkytown"
  },
  {
    "artist": "My Chemical Romance",
    "title": "Teenagers"
  },
  {
    "artist": "P!nk",
    "title": "U + Ur Hand"
  },
  {
    "artist": "Starcraft",
    "title": "Terran Theme 1",
    "rating": 5
  },
  {
    "artist": "Pet Shop Boys",
    "title": "Always On My Mind",
    "rating": 3
  },
  {
    "artist": "Eric Clapton",
    "title": "Layla",
    "rating": 5
  },
  {
    "artist": "George Michael",
    "title": "Faith",
    "rating": 5
  },
  {
    "artist": "The Ting Tings",
    "title": "Great DJ",
    "rating": 5
  },
  {
    "artist": "Yolanda Be Cool",
    "title": "We No Speak Americano",
    "rating": 3
  },
  {
    "artist": "Queen",
    "title": "You're My Best Friend",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Love of My Life",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Bohemian Rhapsody",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Lazing on a Sunday Afternoon",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Seaside Rendevous",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "'39",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Good Company",
    "rating": 3
  },
  {
    "artist": "Queen",
    "title": "Tie Your Mother Down",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Somebody to Love",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Good Old Fashioned Lover Boy",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "One Vision",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "A Kind of Magic",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Fat Bottomed Girls",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Play The Game",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Under Pressure",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Hammer to Fall",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Radio Ga Ga",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Crazy Little Thing Called Love",
    "rating": 3
  },
  {
    "artist": "Queen",
    "title": "We Will Rock You",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "You and I",
    "rating": 3
  },
  {
    "artist": "Queen",
    "title": "Millionaire Waltz",
    "rating": 3
  },
  {
    "artist": "Queen",
    "title": "Killer Queen",
    "rating": 5
  },
  {
    "artist": "Queen",
    "title": "Don't Stop Me Now",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Bicycle Race",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Death on Two Legs",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "Sweet Lady",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "You Take My Breath Away",
    "rating": 3
  },
  {
    "artist": "Queen",
    "title": "Another One Bites the Dust",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "The Show Must Go On",
    "rating": 4
  },
  {
    "artist": "Queen",
    "title": "I Was Born to Love You",
    "rating": 3
  },
  {
    "artist": "Led Zeppelin",
    "title": "Kashmir",
    "rating": 5
  },
  {
    "artist": "Led Zeppelin",
    "title": "Stairway to Heaven",
    "rating": 5
  },
  {
    "artist": "Led Zeppelin",
    "title": "Black Dog",
    "rating": 5
  },
  {
    "artist": "The Beatles",
    "title": "Elanor Rigby",
    "rating": 4
  },
  {
    "artist": "The Beatles",
    "title": "Hello Goodbye",
    "rating": 4
  },
  {
    "artist": "The Beatles",
    "title": "Strawberry Fields Forever",
    "rating": 5
  },
  {
    "artist": "The Beatles",
    "title": "I Want To Hold Your Hand",
    "rating": 3
  },
  {
    "artist": "The Beatles",
    "title": "Come Together",
    "rating": 4
  },
  {
    "artist": "The Beatles",
    "title": "I Am the Walrus",
    "rating": 4
  },
  {
    "artist": "Billy Joel",
    "title": "We Didn't Start The Fire",
    "rating": 5
  },
  {
    "artist": "Billy Joel",
    "title": "A Matter Of Trust",
    "rating": 4
  },
  {
    "artist": "Billy Joel",
    "title": "Uptown Girl",
    "rating": 5
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "rating": 5
  },
  {
    "artist": "Billy Joel",
    "title": "The Longest Time",
    "rating": 5
  },
  {
    "artist": "Reel Big Fish",
    "title": "Hungry Like The Wolf",
    "rating": 5
  },
  {
    "artist": "Reel Big Fish",
    "title": "Beer",
    "rating": 5
  },
  {
    "artist": "Jonathan Coulton",
    "title": "Code Monkey",
    "rating": 4
  },
  {
    "artist": "Jonathan Coulton",
    "title": "Big Bad World One",
    "rating": 4
  },
  {
    "artist": "Jonathan Coulton",
    "title": "Re: Your Brains",
    "rating": 4
  },
  {
    "artist": "Jonathan Coulton",
    "title": "I Feel Fantastic",
    "rating": 4
  },
  {
    "artist": "Jonathan Coulton",
    "title": "I'm Your Moon",
    "rating": 3
  },
  {
    "artist": "Jonathan Coulton",
    "title": "Still Alive",
    "rating": 4
  },
  {
    "artist": "Jonathan Coulton",
    "title": "I Crush Everything",
    "rating": 4
  },
  {
    "artist": "Jonathan Coulton",
    "title": "You Ruined Everything",
    "rating": 4
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Snow",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Dani California",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Can't Stop",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "By The Way",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "The Zephyr Song",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Under The Bridge",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Californication",
    "rating": 5
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Scar Tissue",
    "rating": 5
  },
  {
    "artist": "The Pillows",
    "title": "Last Dinosaur",
    "rating": 5
  },
  {
    "artist": "The Pillows",
    "title": "Funny Bunny",
    "rating": 5
  },
  {
    "artist": "The Pillows",
    "title": "Hybrid Rainbow",
    "rating": 5
  },
  {
    "artist": "The Pillows",
    "title": "Carnival",
    "rating": 5
  },
  {
    "artist": "The Pillows",
    "title": "One Life",
    "rating": 5
  },
  {
    "artist": "The Pillows",
    "title": "Instant Music",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Testing 1 2 3",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Easy",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "The Old Apartment",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "If I Had a Million Dollars",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Brian Wilson",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "One Week",
    "rating": 5
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Falling For the First Time",
    "rating": 5
  },
  {
    "artist": "",
    "title": "Red Red Wine",
    "rating": 3
  },
  {
    "artist": "Bob Marley",
    "title": "No Woman No Cry",
    "rating": 5
  },
  {
    "artist": "ABBA",
    "title": "Mama Mia",
    "rating": 3
  },
  {
    "artist": "ABBA",
    "title": "Dancing Queen",
    "rating": 3
  },
  {
    "artist": "The Go! Team",
    "title": "Get It Together",
    "rating": 5
  },
  {
    "artist": "The Go! Team",
    "title": "Huddle Formation",
    "rating": 5
  },
  {
    "artist": "Coldplay",
    "title": "Clocks",
    "rating": 3
  },
  {
    "artist": "Coldplay",
    "title": "The Scientist",
    "rating": 4
  },
  {
    "artist": "Coldplay",
    "title": "Yellow",
    "rating": 4
  },
  {
    "artist": "Coldplay",
    "title": "Talk",
    "rating": 4
  },
  {
    "artist": "Our Lady Peace",
    "title": "Innocent",
    "rating": 5
  },
  {
    "artist": "Our Lady Peace",
    "title": "Somewhere Out There",
    "rating": 5
  },
  {
    "artist": "Earth, Wind & Fire",
    "title": "September",
    "rating": 5
  },
  {
    "artist": "Earth, Wind & Fire",
    "title": "Boogie Wonderland",
    "rating": 5
  },
  {
    "artist": "Katy Perry",
    "title": "Waking Up In Vegas",
    "rating": 4
  },
  {
    "artist": "Katy Perry",
    "title": "Hook Up",
    "rating": 4
  },
  {
    "artist": "Prince",
    "title": "Little Red Corvette",
    "rating": 3
  },
  {
    "artist": "Prince",
    "title": "1999",
    "rating": 3
  },
  {
    "artist": "Prince",
    "title": "Kiss",
    "rating": 3
  },
  {
    "artist": "Prince and The Revolution",
    "title": "When Doves Cry",
    "rating": 3
  },
  {
    "artist": "Daft Punk",
    "title": "Around the World",
    "rating": 4
  },
  {
    "artist": "Daft Punk",
    "title": "One More Time",
    "rating": 5
  },
  {
    "artist": "Daft Punk",
    "title": "Harder Better Faster Stronger",
    "rating": 5
  },
  {
    "artist": "Sarah McLachlan",
    "title": "Ice Cream",
    "rating": 4
  },
  {
    "artist": "Sarah McLachlan",
    "title": "U Want Me 2",
    "rating": 5
  },
  {
    "artist": "Emilie Autumn",
    "title": "Shalott",
    "rating": 5
  },
  {
    "artist": "Emilie Autumn",
    "title": "Opheliac",
    "rating": 5
  },
  {
    "artist": "Deerhoof",
    "title": "The Perfect Me",
    "rating": 5
  },
  {
    "artist": "Deerhoof",
    "title": "Dog On The Sidewalk",
    "rating": 5
  },
  {
    "artist": "Genki Rockets",
    "title": "Heavenly Star",
    "rating": 5
  },
  {
    "artist": "Dexy's Midnight Runners",
    "title": "Come on Eileen",
    "rating": 5
  },
  {
    "artist": "The Apples in Stereo",
    "title": "Energy",
    "rating": 5
  },
  {
    "artist": "Nadia Fay",
    "title": "Honeycomb",
    "rating": 4
  },
  {
    "artist": "The Carpenters",
    "title": "Top Of The World",
    "rating": 3
  },
  {
    "artist": "Chopin",
    "title": "Nocturne Op. 9 No. 2",
    "rating": 5
  },
  {
    "artist": "Erik Satie",
    "title": "GymnopÃ©die No.1",
    "rating": 5
  },
  {
    "artist": "Debussy",
    "title": "Golliwogg's Cakewalk",
    "rating": 4
  },
  {
    "artist": "The Ramones",
    "title": "Merry Christmas (I Don't Want To Fight Tonight)",
    "rating": 4
  },
  {
    "artist": "The Arcade Fire",
    "title": "Wake Up",
    "rating": 5
  },
  {
    "artist": "Streetlight Manifesto",
    "title": "Saddest Song",
    "rating": 5
  },
  {
    "artist": "R.E.M.",
    "title": "It's the End of the World As We Know It",
    "rating": 4
  },
  {
    "artist": "Modest Mouse",
    "title": "Float On",
    "rating": 5
  },
  {
    "artist": "The Diskettes",
    "title": "1 2 3 4 5",
    "rating": 5
  },
  {
    "artist": "The Pixies",
    "title": "Where is my Mind",
    "rating": 5
  },
  {
    "artist": "Peter Schilling",
    "title": "Major Tom (Coming Home)",
    "rating": 5
  },
  {
    "artist": "David Bowie",
    "title": "Ziggy Stardust",
    "rating": 5
  },
  {
    "artist": "",
    "title": "Ave Maria",
    "rating": 5
  },
  {
    "artist": "My Chemical Romance",
    "title": "Blood",
    "rating": 4
  },
  {
    "artist": "Blue",
    "title": "The Birthday Massacre",
    "rating": 4
  },
  {
    "artist": "Weezer",
    "title": "Say It Ain't So",
    "rating": 5
  },
  {
    "artist": "The Four Seasons",
    "title": "December, 1963 (Oh What A Night)",
    "rating": 5
  },
  {
    "artist": "The Fray",
    "title": "You Found Me",
    "rating": 5
  },
  {
    "artist": "Moldy Peaches",
    "title": "Anyone Else But You",
    "rating": 5
  },
  {
    "artist": "Explosions In The Sky",
    "title": "Your Hand In Mine",
    "rating": 5
  },
  {
    "artist": "Kozue Takada",
    "title": "Himitsu Kichi",
    "rating": 5
  },
  {
    "artist": "The Who",
    "title": "Baba O'Riley",
    "rating": 5
  },
  {
    "artist": "Third Eye Blind",
    "title": "Jumper",
    "rating": 5
  },
  {
    "artist": "Guns N' Roses",
    "title": "Sweet Child O Mine",
    "rating": 5
  },
  {
    "artist": "Lynyrd Skynyrd",
    "title": "Sweet Home Alabama",
    "rating": 5
  },
  {
    "artist": "Pink Floyd",
    "title": "Wish You Were Here",
    "rating": 5
  },
  {
    "artist": "Ozzy Osbourne",
    "title": "Crazy Train",
    "rating": 4
  },
  {
    "artist": "New Order",
    "title": "Bizarre Love Triangle",
    "rating": 5
  },
  {
    "artist": "Train",
    "title": "Drops of Jupiter",
    "rating": 4
  },
  {
    "artist": "Jim Noir",
    "title": "My Patch",
    "rating": 3
  },
  {
    "artist": "A-ha",
    "title": "Take On Me",
    "rating": 5
  },
  {
    "artist": "AC/DC",
    "title": "You Shook Me All Night Long",
    "rating": 5
  },
  {
    "artist": "AC/DC",
    "title": "Thunderstruck",
    "rating": 5
  },
  {
    "artist": "AC/DC",
    "title": "Highway to Hell",
    "rating": 5
  },
  {
    "artist": "AC/DC",
    "title": "Back in Black",
    "rating": 5
  },
  {
    "artist": "The Buggles",
    "title": "Video Killed The Radio Star",
    "rating": 5
  },
  {
    "artist": "Lights",
    "title": "Saviour",
    "rating": 3
  },
  {
    "artist": "Alice DeeJay",
    "title": "Better Off Alone",
    "rating": 5
  },
  {
    "artist": "Elton John & Kiki Dee",
    "title": "Don't Go Breaking My Heart",
    "rating": 3
  },
  {
    "artist": "Whitesnake",
    "title": "Here I Go Again",
    "rating": 5
  },
  {
    "artist": "Bon Jovi",
    "title": "Livin' On A Prayer",
    "rating": 5
  },
  {
    "artist": "MGMT",
    "title": "Kids",
    "rating": 5
  },
  {
    "artist": "Marvin Gaye",
    "title": "Sexual Healing",
    "rating": 5
  },
  {
    "artist": "Bedouin Soundclash",
    "title": "When the Night Feels My Song",
    "rating": 4
  },
  {
    "artist": "The Seatbelts",
    "title": "Tank",
    "rating": 5,
    "genre": "jazz"
  },
  {
    "artist": "Lady Gaga",
    "title": "Bad Romance",
    "rating": 3
  },
  {
    "artist": "Journey",
    "title": "Don't Stop Believing",
    "rating": 5
  },
  {
    "artist": "Kansas",
    "title": "Carry On My Wayward Son",
    "rating": 5
  },
  {
    "artist": "Evanescence",
    "title": "Bring Me to Life",
    "rating": 4
  },
  {
    "artist": "Michelle Branch & Santana",
    "title": "I'm Feeling You",
    "rating": 5
  },
  {
    "artist": ".hack//SIGN",
    "title": "Aura",
    "rating": 4
  },
  {
    "artist": ".hack//SIGN",
    "title": "Key of the Twillight",
    "rating": 4
  },
  {
    "artist": ".hack//SIGN",
    "title": "Yasashii yoake or Easy Dawn",
    "rating": 5
  },
  {
    "artist": ".hack//SIGN",
    "title": "A Stray Child",
    "rating": 4
  },
  {
    "artist": ".hack//SIGN",
    "title": "Fake Wings",
    "rating": 4
  },
  {
    "artist": ".hack//SIGN",
    "title": "In the Land of Twilight Under the Moon",
    "rating": 4
  },
  {
    "artist": "Hikaru Utada",
    "title": "Sanctuary",
    "rating": 4
  },
  {
    "artist": "Hikaru Utada",
    "title": "Hikari",
    "rating": 4
  },
  {
    "artist": "Hikaru Utada",
    "title": "Simple and Clean",
    "rating": 4
  },
  {
    "artist": "Hikaru Utada",
    "title": "Passion",
    "rating": 4
  },
  {
    "artist": "Carly Rae Jepsen",
    "title": "Bucket",
    "rating": 4
  },
  {
    "artist": "Carly Rae Jepsen",
    "title": "Tug of War",
    "rating": 4
  },
  {
    "artist": "The Killers",
    "title": "Mr Brightside",
    "rating": 4
  },
  {
    "artist": "The Killers",
    "title": "When You Were Young",
    "rating": 4
  },
  {
    "artist": "The Killers",
    "title": "Somebody Told Me",
    "rating": 4
  },
  {
    "artist": "David Bowie",
    "title": "Magic Dance",
    "rating": 4
  },
  {
    "artist": "David Bowie",
    "title": "Underground",
    "rating": 4
  },
  {
    "artist": "Hedley",
    "title": "For The Nights I Can't Remember",
    "rating": 4
  },
  {
    "artist": "Hedley",
    "title": "Never Too Late",
    "rating": 4
  },
  {
    "artist": "The Beatles",
    "title": "Helter Skelter",
    "rating": 4
  },
  {
    "artist": "The Beatles",
    "title": "Hey Jude",
    "rating": 4
  },
  {
    "artist": "Vanessa Carlton",
    "title": "Ordinary Day",
    "rating": 4
  },
  {
    "artist": "Vanessa Carlton",
    "title": "White Houses",
    "rating": 4
  },
  {
    "artist": "War",
    "title": "Why Can't We Be Friends",
    "rating": 5
  },
  {
    "artist": "War",
    "title": "Low Rider",
    "rating": 4
  },
  {
    "artist": "Aerosmith",
    "title": "Sweet Emotion",
    "rating": 4
  },
  {
    "artist": "Aerosmith",
    "title": "Janie's Got a Gun",
    "rating": 4
  },
  {
    "artist": "Aerosmith",
    "title": "Dream On",
    "rating": 4
  },
  {
    "artist": "Flight of the Conchords",
    "title": "Business Time",
    "rating": 4
  },
  {
    "artist": "Flight of the Conchords",
    "title": "Think About It",
    "rating": 4
  },
  {
    "artist": "Flight of the Conchords",
    "title": "The Most Beautiful Girl in the Room",
    "rating": 4
  },
  {
    "artist": "Flight of the Conchords",
    "title": "Jenny",
    "rating": 4
  },
  {
    "artist": "Flight of the Conchords",
    "title": "I'm Not Crying",
    "rating": 4
  },
  {
    "artist": "Coldplay",
    "title": "Fix You",
    "rating": 4
  },
  {
    "artist": "Coldplay",
    "title": "Speed of Sound",
    "rating": 4
  },
  {
    "artist": "wham!",
    "title": "Love Machine",
    "rating": 4
  },
  {
    "artist": "Shad",
    "title": "A Story No One Told",
    "rating": 4
  },
  {
    "artist": "Alanis Morissette",
    "title": "Hands Clean",
    "rating": 5
  },
  {
    "artist": "Journey",
    "title": "Any Way You Want It",
    "rating": 4
  },
  {
    "artist": "Jack Johnson",
    "title": "Banana Pancakes",
    "rating": 4
  },
  {
    "artist": "Bass Is Base",
    "title": "I Cry",
    "rating": 4
  },
  {
    "artist": "Haibane Renmei",
    "title": "Blue Flow",
    "rating": 4
  },
  {
    "artist": "Bob Seger",
    "title": "Old time Rock and Roll",
    "rating": 4
  },
  {
    "artist": "Frankie Valli",
    "title": "Can't Take My Eyes Off You",
    "rating": 4
  },
  {
    "artist": "The Philosopher Kings",
    "title": "Castles in the Sand",
    "rating": 4
  },
  {
    "artist": "Howie Day",
    "title": "Collide",
    "rating": 4
  },
  {
    "artist": "Courtney Jaye",
    "title": "Can't Behave",
    "rating": 4
  },
  {
    "artist": "Marianas Trench",
    "title": "Cross My Heart",
    "rating": 4
  },
  {
    "artist": "Hot Hot Heat",
    "title": "Middle of Nowhere",
    "rating": 4
  },
  {
    "artist": "The Chordettes",
    "title": "Mr. Sandman",
    "rating": 4
  },
  {
    "artist": "U2",
    "title": "Mysterious Ways",
    "rating": 4
  },
  {
    "artist": "Nickelback",
    "title": "Someday",
    "rating": 2
  },
  {
    "artist": "Keane",
    "title": "Somewhere Only We Know",
    "rating": 3
  },
  {
    "artist": "Tracy Chapman",
    "title": "Fast Car",
    "rating": 5
  },
  {
    "artist": "Gorillaz",
    "title": "Feel Good Inc.",
    "rating": 5
  },
  {
    "artist": "Gorillaz",
    "title": "El Manana",
    "rating": 5
  },
  {
    "artist": "They Might Be Giants",
    "title": "Experimental Film",
    "rating": 4
  },
  {
    "artist": "Haibane Renmei",
    "title": "Free Bird",
    "rating": 4
  },
  {
    "artist": "Hello Gumption",
    "title": "Spinning As We Go",
    "rating": 4
  },
  {
    "artist": "John Lennon",
    "title": "Imagine",
    "rating": 4
  },
  {
    "artist": "Alanis Morissette",
    "title": "Incomplete",
    "rating": 5
  },
  {
    "artist": "Goo Goo Dolls",
    "title": "Iris",
    "rating": 4
  },
  {
    "artist": "Shimo",
    "title": "Kumikyoku Nico Nico Douga",
    "rating": 4
  },
  {
    "artist": "Led Zeppelin",
    "title": "Immigrant Song",
    "rating": 4
  },
  {
    "artist": "Cranberries",
    "title": "Linger",
    "rating": 5
  },
  {
    "artist": "Lostprophets",
    "title": "Rooftops",
    "rating": 4
  },
  {
    "artist": "Naked Eyes",
    "title": "Always Something There to Remind Me",
    "rating": 4
  },
  {
    "artist": "Natalie Imbruglia",
    "title": "Torn",
    "rating": 4
  },
  {
    "artist": "The Rolling Stones",
    "title": "Paint it Black",
    "rating": 4
  },
  {
    "artist": "Roy Orbison",
    "title": "Oh, Pretty Woman",
    "rating": 4
  },
  {
    "artist": "Salt-N-Pepa",
    "title": "Push It",
    "rating": 4
  },
  {
    "artist": "Scissor Sisters",
    "title": "I Don't Feel Like Dancin",
    "rating": 4
  },
  {
    "artist": "Basement Jaxx",
    "title": "Where's Your Head At",
    "rating": 4
  },
  {
    "artist": "4 Non Blondes",
    "title": "What's Up",
    "rating": 5
  },
  {
    "artist": "Green Day",
    "title": "She's a Rebel",
    "rating": 4
  },
  {
    "artist": "Fallout Boy",
    "title": "A Little Less Sixteen Candles A Little More Touch Me",
    "rating": 4
  },
  {
    "artist": "Nirvana",
    "title": "Smells Like Teen Spirit",
    "rating": 5
  },
  {
    "artist": "Nine Days",
    "title": "Absolutely (Story of a Girl)",
    "rating": 5
  },
  {
    "artist": "Franz Ferdinand",
    "title": "Take Me Out",
    "rating": 5
  },
  {
    "artist": "Massive Attack",
    "title": "Teardrop",
    "rating": 5
  },
  {
    "artist": "The Kooks",
    "title": "She Moves In Her Own Way",
    "rating": 3
  },
  {
    "artist": "No More Heroes",
    "title": "The Virgin Child",
    "rating": 4
  },
  {
    "artist": "Rocky Horror Picture Show",
    "title": "Time Warp",
    "rating": 4
  },
  {
    "artist": "Tomi Swick",
    "title": "A Night Like This",
    "rating": 4
  },
  {
    "artist": "Lia",
    "title": "Tori no Uta",
    "rating": 4
  },
  {
    "artist": "Slow Club",
    "title": "When I Go",
    "rating": 4
  },
  {
    "artist": "Whitney Houston",
    "title": "I Wanna Dance With Somebody",
    "rating": 3
  },
  {
    "artist": "MewithoutYou",
    "title": "Everything Was Beautiful and Nothing Hurt",
    "rating": 3
  },
  {
    "artist": "Switchfoot",
    "title": "Dare You to Move",
    "rating": 2
  },
  {
    "artist": "deerhoof",
    "title": "Panda Panda Panda",
    "rating": 4
  },
  {
    "artist": "Deerhoof",
    "title": "Kidz are so Small",
    "rating": 4
  },
  {
    "artist": "Mandy Moore",
    "title": "Cry",
    "rating": 4
  },
  {
    "artist": "Rob Thomas",
    "title": "Ever the Same",
    "rating": 4
  },
  {
    "artist": "C+C Music Factory",
    "title": "Gonna Make You Sweat (Everybody Dance Now)",
    "rating": 4
  },
  {
    "artist": "Fefe Dobson",
    "title": "Everything",
    "rating": 4
  },
  {
    "artist": "Jackson 5",
    "title": "I Want You Back",
    "rating": 4
  },
  {
    "artist": "Lady Gaga",
    "title": "Just Dance",
    "rating": 4
  },
  {
    "artist": "Oasis",
    "title": "Stop Crying Your Heart Out",
    "rating": 4
  },
  {
    "artist": "The Corrs",
    "title": "Summer Sunshine",
    "rating": 4
  },
  {
    "artist": "The Human League",
    "title": "Don't You Want Me",
    "rating": 4
  },
  {
    "artist": "ZZ Top",
    "title": "Sharp Dressed Man",
    "rating": 4
  },
  {
    "artist": "Avenue Q",
    "title": "It Sucks To Be Me",
    "rating": 3
  },
  {
    "artist": "Avenue Q",
    "title": "Everyone's A Little Bit Racist",
    "rating": 3
  },
  {
    "artist": "Avenue Q",
    "title": "If You Were Gay",
    "rating": 3
  },
  {
    "artist": "Avenue Q",
    "title": "Fantasies Come True",
    "rating": 3
  },
  {
    "artist": "Avenue Q",
    "title": "The Internet is for Porn",
    "rating": 3
  },
  {
    "artist": "Guys and Dolls",
    "title": "I've Never Been in Love Before",
    "rating": 3
  },
  {
    "artist": "Guys and Dolls",
    "title": "If I Were A Bell",
    "rating": 3
  },
  {
    "artist": "Guys and Dolls",
    "title": "Guys and Dolls",
    "rating": 3
  },
  {
    "artist": "Guys and Dolls",
    "title": "Luck Be a Lady",
    "rating": 3
  },
  {
    "artist": "Barenaked Ladies",
    "title": "It's All Been Done",
    "rating": 3
  },
  {
    "artist": "Barenaked Ladies",
    "title": "Jane",
    "rating": 3
  },
  {
    "artist": "OutKast",
    "title": "Roses",
    "rating": 4
  },
  {
    "artist": "Outkast",
    "title": "Hey Ya",
    "rating": 4
  },
  {
    "artist": "Plain White T's",
    "title": "Our Time Now",
    "rating": 3
  },
  {
    "artist": "Plain White T's",
    "title": "Hey There Delilah",
    "rating": 3
  },
  {
    "artist": "Smash Mouth",
    "title": "Why Can't We Be Friends",
    "rating": 3
  },
  {
    "artist": "The White Stripes",
    "title": "You're Pretty Good Looking",
    "rating": 3
  },
  {
    "artist": "The White Stripes",
    "title": "We're Going To Be Friends",
    "rating": 3
  },
  {
    "artist": "Smash Mouth",
    "title": "All Star",
    "rating": 3
  },
  {
    "artist": "John Michael Montgomery",
    "title": "I Swear",
    "rating": 3
  },
  {
    "artist": "Tal Bachman",
    "title": "She's So High",
    "rating": 3
  },
  {
    "artist": "blink-182",
    "title": "All The Small Things",
    "rating": 3
  },
  {
    "artist": "Bowling for Soup",
    "title": "1985",
    "rating": 3
  },
  {
    "artist": "3OH!3",
    "title": "Starstrukk",
    "rating": 2
  },
  {
    "artist": "Counting Crows",
    "title": "Accidentally in Love",
    "rating": 3
  },
  {
    "artist": "Akon",
    "title": "Nobody Wanna See Us Together",
    "rating": 3
  },
  {
    "artist": "Weird Al",
    "title": "Smells Like Nirvana",
    "rating": 3
  },
  {
    "artist": "Alphaville",
    "title": "Forever Young",
    "rating": 3
  },
  {
    "artist": "",
    "title": "'A' You're Adorable",
    "rating": 3
  },
  {
    "artist": "Nena",
    "title": "99 Red Balloons",
    "rating": 3
  },
  {
    "artist": "",
    "title": "A Whole New World",
    "rating": 3
  },
  {
    "artist": "",
    "title": "All Good Things",
    "rating": 2
  },
  {
    "artist": "Mariah Carey",
    "title": "Always Be My Baby",
    "rating": 3
  },
  {
    "artist": "The Guess Who",
    "title": "American Woman",
    "rating": 3
  },
  {
    "artist": "Another Night",
    "title": "Another Night",
    "rating": 3
  },
  {
    "artist": "Bobby Darin",
    "title": "Beyond the Sea",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Big Girls Don't Cry",
    "rating": 3
  },
  {
    "artist": "Billy Talent",
    "title": "Rusted from the Rain",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Bit Part Demon",
    "rating": 3
  },
  {
    "artist": "The Verve",
    "title": "Bitter Sweet Symphony",
    "rating": 3
  },
  {
    "artist": "Brian Melo",
    "title": "All I Ever wanted",
    "rating": 3
  },
  {
    "artist": "Bryan Adams",
    "title": "Summer Of '69",
    "rating": 3
  },
  {
    "artist": "The Foundations",
    "title": "Build Me Up Buttercup",
    "rating": 3
  },
  {
    "artist": "Train",
    "title": "Calling All Angels",
    "rating": 3
  },
  {
    "artist": "Rika Muranaka, Carla White",
    "title": "Can't Say Goodbye to Yesterday",
    "rating": 4,
    "genre": "jazz"
  },
  {
    "artist": "Jacksoul",
    "title": "Can't Stop",
    "rating": 4
  },
  {
    "artist": "Madonna",
    "title": "Holiday",
    "rating": 3
  },
  {
    "artist": "Denice Williams",
    "title": "Let's Hear It For The Boy",
    "rating": 3
  },
  {
    "artist": "Homestar Runner",
    "title": "Different Town",
    "rating": 2
  },
  {
    "artist": "The All-American Rejects",
    "title": "Dirty Little Secret",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Emotions",
    "rating": 3
  },
  {
    "artist": "Michael Buble",
    "title": "Everything",
    "rating": 2
  },
  {
    "artist": "Faber Drive",
    "title": "Second Chance",
    "rating": 3
  },
  {
    "artist": "Journey",
    "title": "Faithfully",
    "rating": 3
  },
  {
    "artist": "Nickelback",
    "title": "Far Away",
    "rating": 2
  },
  {
    "artist": "Finger Eleven",
    "title": "I'll Keep Your Memory Vague",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Fly Me to the Moon",
    "rating": 3
  },
  {
    "artist": "Foreigner",
    "title": "Hot Blooded",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Friends and Lovers",
    "rating": 3
  },
  {
    "artist": "Dee Lite",
    "title": "Groove Is In The Heart",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Happy Baby",
    "rating": 3
  },
  {
    "artist": "John Lennon",
    "title": "Happy Xmas",
    "rating": 3
  },
  {
    "artist": "Tears for Fears",
    "title": "Head Over Heels",
    "rating": 4
  },
  {
    "artist": "Jeremy Fisher",
    "title": "High School",
    "rating": 3
  },
  {
    "artist": "Bowling for Soup",
    "title": "High School Never Ends",
    "rating": 3
  },
  {
    "artist": "",
    "title": "How Deep is Your Love",
    "rating": 3
  },
  {
    "artist": "Matchbox Twenty",
    "title": "How Far We've Come",
    "rating": 3
  },
  {
    "artist": "Nickelback",
    "title": "How You Remind Me",
    "rating": 2
  },
  {
    "artist": "Treble Charger",
    "title": "Hundred Million",
    "rating": 3
  },
  {
    "artist": "Nickelback",
    "title": "I Don't Wanna Be",
    "rating": 2
  },
  {
    "artist": "Aerosmith",
    "title": "I Don't Wanna Miss a Thing",
    "rating": 3
  },
  {
    "artist": "",
    "title": "I Feel Pretty",
    "rating": 3
  },
  {
    "artist": "Stevie Wonder",
    "title": "I Just Called to Say I Love You",
    "rating": 3
  },
  {
    "artist": "Diana Ross",
    "title": "I'm Coming Out",
    "rating": 3
  },
  {
    "artist": "",
    "title": "I'm Not Wearing Underwear Today",
    "rating": 2
  },
  {
    "artist": "",
    "title": "I'm Too Sexy",
    "rating": 3
  },
  {
    "artist": "Jason Mraz",
    "title": "I'm Yours",
    "rating": 3
  },
  {
    "artist": "Issac Hayes",
    "title": "Theme from Shaft",
    "rating": 3
  },
  {
    "artist": "Caesars",
    "title": "Jerk It Out",
    "rating": 3
  },
  {
    "artist": "Jerry Lee Lewis",
    "title": "Great Balls Of Fire",
    "rating": 3
  },
  {
    "artist": "John Mayer",
    "title": "Your Body Is A Wonderland",
    "rating": 3
  },
  {
    "artist": "Chuck Berry",
    "title": "Johnny B. Goode",
    "rating": 3
  },
  {
    "artist": "Jully Black",
    "title": "Until I Stay",
    "rating": 3
  },
  {
    "artist": "Kaskade & deadmau5",
    "title": "Move For Me",
    "rating": 3
  },
  {
    "artist": "Sixpence None the Richer",
    "title": "Kiss Me",
    "rating": 4
  },
  {
    "artist": "",
    "title": "Kiss The Girl",
    "rating": 3
  },
  {
    "artist": "Soul Decision",
    "title": "Kiss The Walls",
    "rating": 3
  },
  {
    "artist": "Kreesha Turner",
    "title": "Don't Call Me Baby",
    "rating": 3
  },
  {
    "artist": "Wham!",
    "title": "Last Christmas",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Logos Naki World",
    "rating": 3
  },
  {
    "artist": "The Posies",
    "title": "Love Comes",
    "rating": 3
  },
  {
    "artist": "Sky",
    "title": "Love Song",
    "rating": 3
  },
  {
    "artist": "Sara Bareilles",
    "title": "Love Song",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Lovefool",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Lovers in a Dangerous Time",
    "rating": 3
  },
  {
    "artist": "The Beatles",
    "title": "Lucy in the Sky with Diamonds",
    "rating": 3
  },
  {
    "artist": "Tears for Fears",
    "title": "Mad World",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Mahna Mahna",
    "rating": 3
  },
  {
    "artist": "Maroon 5",
    "title": "Makes Me Wonder",
    "rating": 3
  },
  {
    "artist": "Marianas Trench",
    "title": "All To Myself",
    "rating": 3
  },
  {
    "artist": "Michael Jackson",
    "title": "The Way You Make Me Feel",
    "rating": 3
  },
  {
    "artist": "",
    "title": "My Favorite Things",
    "rating": 3
  },
  {
    "artist": "Songs To Wear Pants To",
    "title": "Never Been In Love",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Never Gonna Give You Up",
    "rating": 3
  },
  {
    "artist": "",
    "title": "New Future",
    "rating": 3
  },
  {
    "artist": "Yael Naim",
    "title": "New Soul",
    "rating": 5
  },
  {
    "artist": "South Park",
    "title": "No Substitute",
    "rating": 3
  },
  {
    "artist": "Noisettes",
    "title": "Sister Rosetta",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Numb",
    "rating": 3
  },
  {
    "artist": "Hedley",
    "title": "Old School",
    "rating": 3
  },
  {
    "artist": "Journey",
    "title": "Open Arms",
    "rating": 3
  },
  {
    "artist": "Orson",
    "title": "No Tomorrow",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Out Of My Head",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Photograph",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Pocket Full of Sunshine",
    "rating": 3
  },
  {
    "artist": "Radiohead",
    "title": "High & Dry",
    "rating": 3
  },
  {
    "artist": "",
    "title": "READY STEADY GO",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Robot Hell",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Rock Lobster",
    "rating": 3
  },
  {
    "artist": "Nickelback",
    "title": "Rockstar",
    "rating": 2
  },
  {
    "artist": "Roxette",
    "title": "Listen to Your Heart",
    "rating": 3
  },
  {
    "artist": "Liam Titcomb",
    "title": "Sad Eyes",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Save the Last Dance for Me",
    "rating": 3
  },
  {
    "artist": "Seal",
    "title": "Kiss from a Rose",
    "rating": 3
  },
  {
    "artist": "Metro Station",
    "title": "Shake It",
    "rating": 3
  },
  {
    "artist": "Manhattans",
    "title": "Shining Star",
    "rating": 3
  },
  {
    "artist": "Shiny Toy Guns",
    "title": "Le Disko",
    "rating": 5
  },
  {
    "artist": "Tears for Fears",
    "title": "Shout",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Silly Love Songs",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Since You've Been Gone",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Sitting Waiting Wishing",
    "rating": 3
  },
  {
    "artist": "Jacksoul",
    "title": "Somedays",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Some Guys Have All The Luck",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Stand By Me",
    "rating": 3
  },
  {
    "artist": "State of Shock",
    "title": "Money Honey",
    "rating": 3
  },
  {
    "artist": "Low Millions",
    "title": "Statue",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Steal My Sunshine",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Step Into Christmas",
    "rating": 3
  },
  {
    "artist": "Steve Miller Band",
    "title": "The Joker",
    "rating": 5
  },
  {
    "artist": "Jacksoul",
    "title": "Still Believe In Love",
    "rating": 3
  },
  {
    "artist": "Carlos Santana",
    "title": "Smooth",
    "rating": 3
  },
  {
    "artist": "Snow",
    "title": "Everybody Wants To Be Like You",
    "rating": 3
  },
  {
    "artist": "The Four Tops",
    "title": "Sugar Pie Honey Bunch",
    "rating": 3
  },
  {
    "artist": "Lesley Gore",
    "title": "Sunshine Lollipops and Rainbows",
    "rating": 3
  },
  {
    "artist": "Eric Clapton",
    "title": "Tears in Heaven",
    "rating": 3
  },
  {
    "artist": "The All-American Rejects",
    "title": "Gives You Hell",
    "rating": 3
  },
  {
    "artist": "Celine Dion and Andrea Bocelli",
    "title": "The Prayer",
    "rating": 3
  },
  {
    "artist": "Jason Mraz",
    "title": "The Remedy",
    "rating": 3
  },
  {
    "artist": "The Temptations",
    "title": "Ain't Too Proud to Beg",
    "rating": 3
  },
  {
    "artist": "Bill Medley and Jennifer Warnes",
    "title": "The Time of My Life",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Tico Tico",
    "rating": 3
  },
  {
    "artist": "Rabbit",
    "title": "Together",
    "rating": 3
  },
  {
    "artist": "Janet Jackson",
    "title": "Together Again",
    "rating": 3
  },
  {
    "artist": "Tom Jones",
    "title": "It's Not Unusual",
    "rating": 3
  },
  {
    "artist": "Belanova",
    "title": "Tus Ojos",
    "rating": 3
  },
  {
    "artist": "Fobia",
    "title": "Veneno Vil",
    "rating": 3
  },
  {
    "artist": "The Beatles",
    "title": "Twist and Shout",
    "rating": 3
  },
  {
    "artist": "U2",
    "title": "With or Without You",
    "rating": 3
  },
  {
    "artist": "Matchbox 20",
    "title": "Unwell",
    "rating": 3
  },
  {
    "artist": "Venga boys",
    "title": "Boom boom boom",
    "rating": 3
  },
  {
    "artist": "Coldplay",
    "title": "Viva La Vida",
    "rating": 3
  },
  {
    "artist": "Katrina and the Waves",
    "title": "Walking on Sunshine",
    "rating": 3
  },
  {
    "artist": "Irene Cara",
    "title": "What a Feeling",
    "rating": 3
  },
  {
    "artist": "Haddaway",
    "title": "What Is Love",
    "rating": 3
  },
  {
    "artist": "DVDA",
    "title": "What Would Brian Boitano Do",
    "rating": 3
  },
  {
    "artist": "South Park",
    "title": "What Would Brian Boitano Do",
    "rating": 3
  },
  {
    "artist": "Ryan Adams",
    "title": "When the Stars Go Blue",
    "rating": 3
  },
  {
    "artist": "Whitney Houston",
    "title": "Saving All My Love For You",
    "rating": 3
  },
  {
    "artist": "Westlife",
    "title": "World of Our Own",
    "rating": 3
  },
  {
    "artist": "Lifehouse",
    "title": "You and Me",
    "rating": 3
  },
  {
    "artist": "The Kinks",
    "title": "You Really Got Me",
    "rating": 3
  },
  {
    "artist": "Hitomi Shimatani",
    "title": "ANGELUS",
    "rating": 3
  },
  {
    "artist": "",
    "title": "Turn the Beat Around",
    "rating": 2
  },
  {
    "artist": "Madonna",
    "title": "Ray Of Light",
    "rating": 2
  },
  {
    "artist": "Phoenix",
    "title": "Rome",
    "rating": 2
  },
  {
    "artist": "",
    "title": "The Bugs Bunny Overture",
    "rating": 2
  },
  {
    "artist": "The Gay Blades",
    "title": "NHDN",
    "rating": 2
  },
  {
    "artist": "Burl Ives",
    "title": "The Lollipop Tree",
    "rating": 2
  },
  {
    "artist": "David Usher",
    "title": "The Music",
    "rating": 2
  },
  {
    "artist": "",
    "title": "The Oldest Established",
    "rating": 2
  },
  {
    "artist": "",
    "title": "Time of the Season",
    "rating": 2
  },
  {
    "artist": "Minnie Riperton",
    "title": "Lovin' You",
    "rating": 2
  },
  {
    "artist": "",
    "title": "You're The One That I Want",
    "rating": 2
  },
  {
    "artist": "Guys and Dolls",
    "title": "Adelaide's Lament",
    "rating": 2
  },
  {
    "artist": "Guys and Dolls",
    "title": "Bushel and a Peck",
    "rating": 2
  },
  {
    "artist": "Guys and Dolls",
    "title": "Take Back Your Mink",
    "rating": 2
  },
  {
    "artist": "Guys and Dolls",
    "title": "Sit Down You're Rockin' the Boat",
    "rating": 2
  },
  {
    "artist": "Guys and Dolls",
    "title": "Sue Me",
    "rating": 2
  },
  {
    "artist": "A Flock Of Seagulls",
    "title": "I Ran",
    "rating": 2
  },
  {
    "artist": "Dr Dre feat Snoop Dogg",
    "title": "Next Episode",
    "rating": 2
  },
  {
    "artist": "",
    "title": "4 in the Morning",
    "rating": 2
  },
  {
    "artist": "Weird Al",
    "title": "Albuquerque",
    "rating": 2
  },
  {
    "artist": "Jet",
    "title": "Are You Gonna Be My Girl",
    "rating": 2
  },
  {
    "artist": "",
    "title": "Blow Me Away",
    "rating": 2
  },
  {
    "artist": "Bobby Darin",
    "title": "Don't Rain On My Parade",
    "rating": 2
  },
  {
    "artist": "Low Millions",
    "title": "Eleanor",
    "rating": 2
  },
  {
    "artist": "LFO",
    "title": "Every Other Time",
    "rating": 2
  },
  {
    "artist": "Westlife",
    "title": "Home",
    "rating": 2
  },
  {
    "artist": "Foals",
    "title": "Balloons",
    "rating": 2
  },
  {
    "artist": "",
    "title": "Heartbreaker",
    "rating": 2
  },
  {
    "artist": "House Of Pain",
    "title": "Jump Around",
    "rating": 2
  },
  {
    "artist": "",
    "title": "I Need to Know",
    "rating": 2
  },
  {
    "artist": "Savage Garden",
    "title": "I Knew I Loved You",
    "rating": 2
  },
  {
    "artist": "",
    "title": "It's the Hard Knock Life",
    "rating": 2
  },
  {
    "artist": "James Blunt",
    "title": "Wisemen",
    "rating": 2
  },
  {
    "artist": "Taylor Swift",
    "title": "Love Story",
    "rating": 2
  },
  {
    "artist": "Taylor Swift",
    "title": "You Belong With Me",
    "rating": 2
  },
  {
    "artist": "",
    "title": "If You Wanna Be Happy",
    "rating": 2
  },
  {
    "artist": "Vengaboys",
    "title": "We Like To Party",
    "rating": 2
  },
  {
    "artist": "Adam Lambert",
    "title": "What Do You Want From Me",
    "rating": 2
  },
  {
    "artist": "Adam Lambert",
    "title": "If I Had You",
    "rating": 2
  },
  {
    "artist": "Down With Webster",
    "title": "Your Man",
    "rating": 1
  },
  {
    "artist": "Eminem",
    "title": "Mockingbird",
    "rating": 1
  },
  {
    "artist": "Black Eyed Peas",
    "title": "Don't Phunk with my Heart",
    "rating": 1
  },
  {
    "artist": "Mariah Carey",
    "title": "Obsessed",
    "rating": 1
  },
  {
    "artist": "Mariah Carey",
    "title": "Bye Bye",
    "rating": 1
  },
  {
    "artist": "",
    "title": "Welcome to My Life"
  },
  {
    "artist": "Fallout Boy",
    "title": "Thnks fr th Mmrs",
    "rating": 1
  },
  {
    "artist": "Theory of a Dead Man",
    "title": "Santa Monica",
    "rating": 1
  },
  {
    "artist": "Notorious BIG",
    "title": "Mo Money Mo Problems",
    "rating": 5
  },
  {
    "artist": "",
    "title": "Let Me Love You",
    "rating": 1
  },
  {
    "artist": "",
    "title": "Cinderella",
    "rating": 1
  },
  {
    "artist": "",
    "title": "I Just Wanna Live",
    "rating": 1
  },
  {
    "artist": "",
    "title": "Cupid's Chokehold",
    "rating": 1
  },
  {
    "artist": "Black Eyed Peas",
    "title": "Where is the Love"
  },
  {
    "artist": "Player",
    "title": "Baby Come Back"
  },
  {
    "artist": "",
    "title": "Breaking Free",
    "rating": 1
  },
  {
    "artist": "R. Kelly",
    "title": "Ignition",
    "rating": 1
  },
  {
    "artist": "Stereos",
    "title": "Summer Girl",
    "rating": 1
  }
];
