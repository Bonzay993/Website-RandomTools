const VERBS = ["run", "jump", "swim", "fly", "drive","abandon",
"abate",
"abbreviate",
"abdicate",
"abduct",
"abhor",
"abide",
"abolish",
"abort",
"abound",
"abridge",
"abscond",
"absolve",
"absorb",
"abstain",
"abstract",
"abuse",
"accelerate",
"accent",
"accentuate",
"accept",
"access",
"accessorize",
"acclaim",
"acclimate",
"acclimatize",
"accommodate",
"accompany",
"accomplish",
"accord",
"accost",
"account",
"accredit",
"accrue",
"acculturate",
"accumulate",
"accuse",
"accustom",
"acerbate",
"ache",
"achieve",
"acidify",
"acknowledge",
"acquaint",
"acquiesce",
"acquire",
"acquit",
"act",
"activate",
"actualize",
"adapt",
"add",
"address",
"adhere",
"adjoin",
"adjourn",
"adjudicate",
"adjust",
"administer",
"administrate",
"admire",
"admit",
"admonish",
"adopt",
"adore",
"adorn",
"adsorb",
"adulate",
"advance",
"advertise",
"advise",
"advocate",
"affect",
"affiliate",
"affirm",
"affix",
"afflict",
"afford",
"affront",
"age",
"aggravate",
"aggregate",
"aggrieve",
"agitate",
"agonize",
"agree",
"aid",
"ail",
"aim",
"airbrush",
"airdrop",
"airlift",
"airmail",
"alarm",
"alert",
"alienate",
"align",
"allege",
"alleviate",
"allocate",
"allot",
"allow",
"allude",
"allure",
"ally",
"alphabetize",
"alter",
"alternate",
"amalgamate",
"amass",
"amaze",
"ambush",
"amend",
"amount",
"amplify",
"amputate",
"amuse",
"analogize",
"analyze",
"anchor",
"anesthetize",
"anger",
"anguish",
"animate",
"annex",
"annihilate",
"annotate",
"announce",
"annoy",
"annualize",
"annul",
"annunciate",
"anoint",
"answer",
"antagonize",
"anticipate",
"antiquate",
"apologize",
"appall",
"appeal",
"appear",
"appease",
"appertain",
"applaud",
"apply",
"appoint",
"appraise",
"appreciate",
"apprehend",
"apprentice",
"apprise",
"approach",
"appropriate",
"approve",
"approximate",
"arbitrage",
"arbitrate",
"archive",
"argue",
"arise",
"arm",
"armor",
"aromatize",
"arouse",
"arraign",
"arrange",
"arrest",
"arrive",
"articulate",
"ascend",
"ascertain",
"ascribe",
"ask",
"aspirate",
"aspire",
"assail",
"assassinate",
"assault",
"assay",
"assemble",
"assent",
"assert",
"assess",
"assign",
"assimilate",
"assist",
"associate",
"assort",
"assume",
"assure",
"astonish",
"astound",
"atone",
"attach",
"attack",
"attain",
"attempt",
"attend",
"attest",
"attract",
"attribute",
"auction",
"audit",
"audition",
"augment",
"authenticate",
"author",
"authorize",
"autograph",
"automate",
"avail",
"avalanche",
"avenge",
"average",
"avert",
"aviate",
"avoid",
"avow",
"await",
"awake",
"awaken",
"award",
"ax",
"babble",
"baby",
"back",
"backdate",
"backfire",
"backhand",
"backpack",
"backpedal",
"backspace",
"backtrack",
"backwash",
"badger",
"badmouth",
"baffle",
"bag",
"bail",
"bait",
"bake",
"balance",
"bale",
"balk",
"balloon",
"ballyhoo",
"bamboozle",
"ban",
"band",
"bandage",
"bang",
"banish",
"bank",
"bankroll",
"bankrupt",
"banter",
"baptize",
"bar",
"barbarize",
"barbecue",
"bare",
"bargain",
"barge",
"bark",
"barnstorm",
"barrage",
"barricade",
"barter",
"base",
"bash",
"bask",
"baste",
"bat",
"batch",
"bath",
"batter",
"battle",
"bawl",
"be",
"beach",
"beam",
"bear",
"beat",
"beautify",
"beckon",
"become",
"bedazzle",
"beep",
"befriend",
"befuddle",
"beg",
"begin",
"begrudge",
"beguile",
"behave",
"behold",
"behoove",
"belabor",
"belch",
"beleaguer",
"believe",
"belittle",
"bellow",
"belong",
"belt",
"bemoan",
"bemuse",
"bend",
"benefit",
"bequeath",
"berate",
"bereave",
"beset",
"besiege",
"bestow",
"bet",
"betray",
"better",
"bewilder",
"bewitch",
"bid",
"bide",
"bill",
"billow",
"bind",
"bite",
"blab",
"blacken",
"blacklist",
"blame",
"blast",
"blaze",
"bleach",
"bleed",
"blend",
"bless",
"blind",
"blindfold",
"blink",
"blister",
"bloat",
"block",
"bloody",
"bloom",
"blossom",
"blot",
"blow",
"blunder",
"blur",
"blurt",
"blush",
"board",
"boast",
"bob",
"boil",
"bolster",
"bolt",
"bomb",
"bombard",
"bond",
"book",
"boom",
"boost",
"boot",
"border",
"bore",
"borrow",
"bother",
"bottle",
"bounce",
"bound",
"bow",
"bowl",
"box",
"boycott",
"brace",
"brag",
"braid",
"brake",
"branch",
"brand",
"brave",
"breach",
"break",
"breakfast",
"breath",
"breed",
"brew",
"bribe",
"bridge",
"brief",
"brighten",
"bring",
"bristle",
"broach",
"broadcast",
"broaden",
"bronze",
"brood",
"bruise",
"brush",
"bubble",
"buck",
"buckle",
"budget",
"buffer",
"bug",
"build",
"bulge",
"bully",
"bump",
"bunch",
"bundle",
"burden",
"burgle",
"burn",
"burp",
"burrow",
"burst",
"bury",
"bus",
"bust",
"bustle",
"busy",
"butcher",
"butter",
"button",
"buttress",
"buy",
"buzz",
"bypass",
"cackle",
"cage",
"cajole",
"cake",
"calculate",
"calibrate",
"call",
"calm",
"camouflage",
"camp",
"campaign",
"can",
"cancel",
"canvass",
"cap",
"capitalize",
"capitulate",
"capsize",
"captain",
"captivate",
"capture",
"care",
"caress",
"carpet",
"carry",
"cart",
"carve",
"cascade",
"cash",
"cast",
"castigate",
"catalog",
"catapult",
"catch",
"categorize",
"cater",
"cause",
"caution",
"cave",
"cease",
"celebrate",
"cement",
"censor",
"censure",
"center",
"centralize",
"certify",
"chain",
"chair",
"challenge",
"champion",
"chance",
"change",
"channel",
"chant",
"char",
"characterize",
"charge",
"charm",
"chart",
"charter",
"chase",
"chasten",
"chat",
"chatter",
"cheat",
"check",
"cheer",
"cherish",
"chew",
"chide",
"chill",
"chime",
"chip",
"chirp",
"choke",
"choose",
"chop",
"choreograph",
"christen",
"chronicle",
"chuck",
"chuckle",
"churn",
"circle",
"circulate",
"circumscribe",
"circumvent",
"cite",
"civilize",
"claim",
"clamber",
"clamp",
"clap",
"clarify",
"clash",
"clasp",
"classify",
"clatter",
"claw",
"clean",
"cleanse",
"clear",
"clench",
"click",
"climb",
"clinch",
"cling",
"clip",
"cloak",
"clock",
"clog",
"clone",
"close",
"cloth",
"cloud",
"club",
"cluster",
"clutch",
"clutter",
"coach",
"coat",
"coax",
"cobble",
"cock",
"code",
"codify",
"coerce",
"coil",
"coin",
"coincide",
"collaborate",
"collapse",
"collate",
"collect",
"collide",
"colonize",
"color",
"comb",
"combine",
"come",
"comfort",
"command",
"commandeer",
"commemorate",
"commence",
"commend",
"comment",
"commission",
"commit",
"communicate",
"commute",
"compact",
"compare",
"compel",
"compensate",
"compete",
"compile",
"complain",
"complement",
"complete",
"complicate",
"compliment",
"comply",
"compose",
"compound",
"comprehend",
"compress",
"comprise",
"compromise",
"compute",
"computerize",
"con",
"conceal",
"concede",
"conceive",
"concentrate",
"conceptualize",
"concern",
"concert",
"conclude",
"concoct",
"concur",
"condemn",
"condense",
"condition",
"condone",
"conduct",
"confer",
"confess",
"confide",
"configure",
"confine",
"confirm",
"confiscate",
"conflict",
"conform",
"confound",
"confront",
"confuse",
"congratulate",
"congregate",
"conjure",
"connect",
"conquer",
"consecrate",
"consent",
"conserve",
"consider",
"consign",
"consist",
"console",
"consolidate",
"conspire",
"constitute",
"constrain",
"constrict",
"construct",
"construe",
"consult",
"consume",
"contact",
"contain",
"contaminate",
"contemplate",
"contend",
"content",
"contest",
"continue",
"contort",
"contract",
"contradict",
"contrast",
"contravene",
"contribute",
"contrive",
"control",
"convene",
"converge",
"converse",
"convert",
"convey",
"convict",
"convince",
"cook",
"cool",
"cooperate",
"coordinate",
"cope",
"copy",
"copyright",
"corner",
"correct",
"correlate",
"correspond",
"corroborate",
"corrupt",
"cost",
"couch",
"cough",
"counsel",
"count",
"counter",
"counterbalance",
"court",
"cover",
"covet",
"crack",
"crackle",
"cradle",
"craft",
"cram",
"cramp",
"crane",
"crash",
"crave",
"crawl",
"creak",
"crease",
"create",
"credit",
"creep",
"cremate",
"crest",
"cringe",
"cripple",
"criticize",
"critique",
"croak",
"crop",
"cross",
"cross-examine",
"crouch",
"crow",
"crowd",
"crown",
"cruise",
"crumble",
"crumple",
"crunch",
"crush",
"cry",
"crystallize",
"cuddle",
"cull",
"culminate",
"cultivate",
"cup",
"curb",
"cure",
"curl",
"curse",
"curtail",
"curve",
"cushion",
"customize",
"cut",
"cycle",
"dab",
"dabble",
"damage",
"dampen",
"dance",
"dangle",
"dare",
"darken",
"dart",
"dash",
"date",
"dawn",
"daze",
"dazzle",
"deadlock",
"deal",
"debate",
"debit",
"decay",
"deceive",
"decentralize",
"decide",
"decimate",
"decipher",
"deck",
"declare",
"decline",
"decompose",
"decorate",
"decrease",
"decree",
"dedicate",
"deduce",
"deduct",
"deed",
"deem",
"deepen",
"deface",
"default",
"defeat",
"defect",
"defend",
"defer",
"define",
"deflate",
"deflect",
"deform",
"defray",
"defuse",
"defy",
"degenerate",
"degrade",
"dehydrate",
"delay",
"delegate",
"delete",
"delight",
"delineate",
"deliver",
"delude",
"delve",
"demand",
"demolish",
"demonstrate",
"demote",
"denominate",
"denote",
"denounce",
"dent",
"deny",
"depart",
"depend",
"depict",
"deplete",
"deplore",
"deploy",
"deport",
"depose",
"deposit",
"deprecate",
"depress",
"deprive",
"deride",
"derive",
"descend",
"describe",
"desert",
"deserve",
"design",
"designate",
"desire",
"despair",
"despise",
"destroy",
"detach",
"detail",
"detain",
"detect",
"deter",
"deteriorate",
"determine",
"detest",
"detonate",
"devalue",
"devastate",
"develop",
"deviate",
"devise",
"devolve",
"devote",
"devour",
"diagnose",
"dial",
"dice",
"dictate",
"die",
"differ",
"differentiate",
"diffuse",
"dig",
"digest",
"dignify",
"dilapidate",
"dilate",
"dilute",
"dim",
"diminish",
"dine",
"dip",
"direct",
"disable",
"disadvantage",
"disagree",
"disallow",
"disappear",
"disappoint",
"disapprove",
"disarm",
"disband",
"discard",
"discern",
"discharge",
"discipline",
"disclose",
"disconcert",
"disconnect",
"discontinue",
"discount",
"discourage",
"discover",
"discredit",
"discriminate",
"discuss",
"disembark",
"disfigure",
"disgrace",
"disgruntle",
"disguise",
"disgust",
"dishevel",
"dishonor",
"disillusion",
"disintegrate",
"disinterest",
"dislike",
"dislocate",
"dislodge",
"dismantle",
"dismay",
"dismiss",
"dismount",
"disorder",
"disorientate",
"disown",
"dispatch",
"dispel",
"dispense",
"disperse",
"displace",
"display",
"displease",
"dispose",
"dispossess",
"disprove",
"dispute",
"disqualify",
"disregard",
"disrespect",
"disrupt",
"dissatisfy",
"dissect",
"disseminate",
"dissipate",
"dissolve",
"dissuade",
"distain",
"distance",
"distill",
"distinguish",
"distort",
"distract",
"distress",
"distribute",
"distrust",
"disturb",
"ditch",
"dive",
"diverge",
"diversify",
"divert",
"divest",
"divide",
"divorce",
"divulge",
"do",
"dock",
"document",
"dodge",
"dog",
"domesticate",
"dominate",
"don",
"donate",
"doom",
"dot",
"dote",
"double",
"doubt",
"douse",
"down",
"downgrade",
"download",
"doze",
"draft",
"drag",
"drain",
"dramatize",
"drape",
"draw",
"drawl",
"dread",
"dream",
"dredge",
"drench",
"dress",
"dribble",
"drift",
"drill",
"drink",
"drip",
"drive",
"drone",
"droop",
"drop",
"drown",
"drum",
"dry",
"dub",
"duck",
"dull",
"dump",
"dupe",
"duplicate",
"dust",
"dwarf",
"dwell",
"dwindle",
"dye",
"earn",
"ease",
"eat",
"ebb",
"echo",
"eclipse",
"edge",
"edit",
"educate",
"efface",
"effect",
"eject",
"elaborate",
"elapse",
"elate",
"elbow",
"elect",
"electrify",
"elevate",
"elicit",
"eliminate",
"elongate",
"elude",
"emaciate",
"emanate",
"embark",
"embarrass",
"embed",
"embellish",
"embody",
"embolden",
"emboss",
"embrace",
"embroider",
"emend",
"emerge",
"emigrate",
"emit",
"emphasize",
"employ",
"empower",
"empty",
"emulate",
"enable",
"enact",
"encapsulate",
"encase",
"enchant",
"enclose",
"encode",
"encompass",
"encounter",
"encourage",
"encroach",
"end",
"endanger",
"endear",
"endeavor",
"endorse",
"endow",
"endure",
"enforce",
"engage",
"engender",
"engineer",
"engrave",
"engross",
"engulf",
"enhance",
"enjoy",
"enlarge",
"enlighten",
"enlist",
"enliven",
"enmesh",
"enquire",
"enrage",
"enrich",
"enroll",
"enshrine",
"ensnare",
"ensue",
"ensure",
"entail",
"entangle",
"enter",
"entertain",
"entice",
"entitle",
"entrench",
"entrust",
"enumerate",
"enunciate",
"envelop",
"envy",
"epitomize",
"equal",
"equalize",
"equate",
"equip",
"eradicate",
"erase",
"erect",
"erode",
"err",
"erupt",
"escalate",
"escape",
"eschew",
"escort",
"espouse",
"establish",
"esteem",
"estimate",
"estrange",
"etch",
"evacuate",
"evade",
"evaluate",
"evaporate",
"evict",
"evidence",
"evince",
"evoke",
"evolve",
"exacerbate",
"exact",
"exaggerate",
"exalt",
"examine",
"exasperate",
"excavate",
"exceed",
"excel",
"exchange",
"excise",
"excite",
"exclaim",
"exclude",
"excrete",
"excuse",
"execute",
"exemplify",
"exempt",
"exercise",
"exert",
"exhale",
"exhaust",
"exhibit",
"exhilarate",
"exhort",
"exile",
"exist",
"exit",
"expand",
"expect",
"expedite",
"expel",
"expend",
"experience",
"experiment",
"expire",
"explain",
"explode",
"exploit",
"explore",
"export",
"expose",
"expound",
"express",
"extend",
"extinguish",
"extract",
"extradite",
"eye",
"fabricate",
"face",
"facilitate",
"factor",
"fade",
"fail",
"faint",
"fake",
"fall",
"falsify",
"falter",
"fan",
"fancy",
"fare",
"farm",
"fascinate",
"fashion",
"fasten",
"fathom",
"fatigue",
"fault",
"favor",
"fax",
"fear",
"feather",
"feature",
"federate",
"feed",
"feel",
"feign",
"fell",
"fence",
"ferment",
"ferry",
"fertilize",
"fetch",
"fiddle",
"fidget",
"field",
"fight",
"figure",
"file",
"fill",
"film",
"filter",
"finalize",
"finance",
"find",
"fine",
"finger",
"finish",
"fire",
"firm",
"fish",
"fit",
"fix",
"flag",
"flame",
"flank",
"flap",
"flare",
"flash",
"flatten",
"flatter",
"flaunt",
"flavor",
"flaw",
"flee",
"flex",
"flick",
"flicker",
"flinch",
"fling",
"flip",
"flirt",
"flit",
"float",
"flock",
"flog",
"flood",
"floor",
"flop",
"flounder",
"flourish",
"flout",
"flow",
"flower",
"fluctuate",
"flush",
"fluster",
"flutter",
"fly",
"focus",
"foil",
"fold",
"follow",
"fool",
"forbid",
"force",
"ford",
"forecast",
"forgo",
"foresee",
"foreshadow",
"foretell",
"forfeit",
"forge",
"forget",
"forgive",
"fork",
"form",
"formalize",
"format",
"formulate",
"forsake",
"fortify",
"forward",
"foster",
"foul",
"found",
"fracture",
"fragment",
"frame",
"free",
"freeze",
"frequent",
"fret",
"frighten",
"front",
"frost",
"frown",
"frustrate",
"fry",
"fuel",
"fulfill",
"fumble",
"fume",
"function",
"fund",
"furnish",
"furrow",
"further",
"fuss",
"gag",
"gain",
"gallop",
"galvanize",
"gamble",
"garner",
"garnish",
"gasp",
"gather",
"gauge",
"gaze",
"gear",
"generalize",
"generate",
"gesture",
"get",
"gift",
"giggle",
"gild",
"give",
"glance",
"glare",
"glaze",
"gleam",
"glean",
"glide",
"glimpse",
"glisten",
"glitter",
"glorify",
"gloss",
"glow",
"glue",
"gnaw",
"go",
"goad",
"gobble",
"gossip",
"gouge",
"govern",
"grab",
"grace",
"grade",
"graduate",
"graft",
"grant",
"grapple",
"grasp",
"grate",
"gratify",
"graze",
"grease",
"greet",
"grieve",
"grill",
"grimace",
"grin",
"grind",
"grip",
"gripe",
"grit",
"groan",
"groom",
"grope",
"ground",
"group",
"grow",
"growl",
"grumble",
"grunt",
"guarantee",
"guard",
"guess",
"guide",
"gulp",
"gush",
"gut",
"hack",
"hail",
"halt",
"halve",
"hammer",
"hamper",
"hand",
"handcuff",
"handicap",
"handle",
"handwrite",
"hang",
"happen",
"harass",
"harbor",
"harden",
"harm",
"harness",
"harvest",
"hasten",
"hatch",
"hate",
"haul",
"haunt",
"head",
"headline",
"heal",
"heap",
"hear",
"heat",
"heave",
"heckle",
"hedge",
"heed",
"heighten",
"help",
"hem",
"herald",
"herd",
"hesitate",
"hide",
"highlight",
"hijack",
"hinder",
"hinge",
"hint",
"hire",
"hiss",
"hit",
"hitch",
"hobble",
"hoist",
"hold",
"hole",
"hollow",
"hone",
"honor",
"hook",
"hoot",
"hop",
"hope",
"horrify",
"hospitalize",
"host",
"hound",
"house",
"hover",
"howl",
"huddle",
"hug",
"hum",
"humble",
"humiliate",
"hunch",
"hunt",
"hurl",
"hurry",
"hurt",
"hurtle",
"hush",
"hustle",
"hypnotize",
"hypothesize",
"ice",
"idealize",
"identify",
"ignite",
"ignore",
"illuminate",
"illustrate",
"imagine",
"imitate",
"immerse",
"immortalize",
"impair",
"impale",
"impart",
"impeach",
"impede",
"impel",
"impinge",
"implant",
"implement",
"implicate",
"implore",
"imply",
"import",
"impose",
"impound",
"impoverish",
"impress",
"imprint",
"imprison",
"improve",
"improvise",
"impute",
"inaugurate",
"incapacitate",
"incarcerate",
"incense",
"inch",
"incline",
"include",
"incorporate",
"increase",
"incubate",
"incur",
"indebt",
"indent",
"index",
"indicate",
"indict",
"individualize",
"induce",
"indulge",
"industrialize",
"infect",
"infer",
"infest",
"infiltrate",
"inflame",
"inflate",
"inflict",
"influence",
"inform",
"infringe",
"infuriate",
"infuse",
"ingest",
"ingrain",
"inhabit",
"inhale",
"inherit",
"inhibit",
"initial",
"initiate",
"inject",
"injure",
"inlay",
"innovate",
"inquire",
"inscribe",
"insert",
"insinuate",
"insist",
"inspect",
"inspire",
"install",
"instigate",
"instill",
"institute",
"institutionalize",
"instruct",
"insulate",
"insult",
"insure",
"integrate",
"intend",
"intensify",
"intercept",
"interchange",
"interest",
"interfere",
"interject",
"interlace",
"intern",
"internalize",
"interpret",
"interrelate",
"interrogate",
"interrupt",
"intersperse",
"intertwine",
"intervene",
"interview",
"intimidate",
"intoxicate",
"intrigue",
"introduce",
"intrude",
"inundate",
"invade",
"invalidate",
"invent",
"inventory",
"invert",
"invest",
"investigate",
"invite",
"invoke",
"involve",
"irk",
"iron",
"irradiate",
"irritate",
"isolate",
"issue",
"itch",
"itemize",
"jab",
"jail",
"jam",
"jar",
"jeer",
"jeopardize",
"jerk",
"jettison",
"jog",
"join",
"joke",
"jolt",
"jostle",
"journey",
"judge",
"juggle",
"jumble",
"jump",
"justify",
"juxtapose",
"keep",
"kick",
"kid",
"kill",
"kiss",
"kneel",
"knight",
"knit",
"knock",
"knot",
"know",
"label",
"labor",
"lace",
"lack",
"lag",
"lament",
"laminate",
"land",
"landscape",
"lap",
"lapse",
"lash",
"last",
"latch",
"laud",
"laugh",
"launch",
"launder",
"lavish",
"lay",
"layer",
"leach",
"lead",
"leak",
"lean",
"leap",
"learn",
"lease",
"leave",
"lecture",
"leer",
"legalize",
"legislate",
"lend",
"lengthen",
"lessen",
"let",
"level",
"leverage",
"levy",
"liberate",
"license",
"lick",
"lie",
"lift",
"light",
"lighten",
"like",
"liken",
"limit",
"limp",
"line",
"linger",
"link",
"liquidate",
"list",
"listen",
"litigate",
"litter",
"live",
"load",
"loan",
"loath",
"lob",
"lobby",
"localize",
"locate",
"lock",
"lodge",
"log",
"long",
"look",
"loom",
"loop",
"loosen",
"loot",
"lose",
"lounge",
"love",
"lower",
"lull",
"lumber",
"lump",
"lunch",
"lunge",
"lurch",
"lurk",
"magnify",
"mail",
"maim",
"maintain",
"make",
"man",
"manage",
"maneuver",
"mangle",
"manicure",
"manifest",
"manipulate",
"manufacture",
"map",
"march",
"marginalize",
"mark",
"market",
"maroon",
"marry",
"marshal",
"marvel",
"mash",
"mask",
"mass",
"massacre",
"massage",
"master",
"mastermind",
"match",
"materialize",
"matter",
"mature",
"maul",
"maximize",
"mean",
"meander",
"measure",
"meddle",
"mediate",
"meet",
"mellow",
"melt",
"memorize",
"mend",
"mention",
"mentor",
"merge",
"merit",
"mesmerize",
"mess",
"migrate",
"milk",
"mill",
"mimic",
"mince",
"mind",
"mine",
"mingle",
"minimize",
"mint",
"mirror",
"misinterpret",
"misjudge",
"mislay",
"mislead",
"misplace",
"misrepresent",
"miss",
"misspeak",
"misspell",
"mistake",
"misuse",
"mitigate",
"mix",
"moan",
"mob",
"mobilize",
"mock",
"model",
"moderate",
"modernize",
"modify",
"modulate",
"moisten",
"mold",
"monitor",
"moor",
"mop",
"mope",
"mortify",
"motion",
"motivate",
"motorize",
"mount",
"mourn",
"mouth",
"move",
"mow",
"muddle",
"muffle",
"mug",
"multiply",
"mumble",
"murder",
"murmur",
"muscle",
"muse",
"muster",
"mutate",
"mute",
"mutilate",
"mutter",
"mystify",
"nab",
"nag",
"nail",
"name",
"narrate",
"narrow",
"nationalize",
"navigate",
"near",
"necessitate",
"need",
"needle",
"negate",
"neglect",
"negotiate",
"nest",
"nestle",
"net",
"network",
"neutralize",
"nibble",
"nick",
"nickname",
"nip",
"nod",
"nominate",
"normalize",
"nose",
"note",
"notice",
"notify",
"nudge",
"nullify",
"numb",
"number",
"nurse",
"nurture",
"nuzzle",
"obey",
"object",
"oblige",
"obliterate",
"obscure",
"observe",
"obsess",
"obstruct",
"obtain",
"occasion",
"occupy",
"occur",
"offend",
"offer",
"officiate",
"oil",
"omit",
"ooze",
"open",
"operate",
"oppose",
"oppress",
"opt",
"optimize",
"orchestrate",
"ordain",
"order",
"organize",
"orientate",
"originate",
"oust",
"outclass",
"outlaw",
"outline",
"outlive",
"outnumber",
"outrage",
"outrun",
"outstretch",
"outweigh",
"overcome",
"overcrowd",
"overdo",
"overeat",
"overestimate",
"overflow",
"overhaul",
"overhear",
"overheat",
"overlap",
"overload",
"overlook",
"overpower",
"overrule",
"oversee",
"overshadow",
"oversleep",
"overstate",
"overtake",
"overthrow",
"overturn",
"overwhelm",
"owe",
"own",
"pace",
"pack",
"package",
"pad",
"paddle",
"page",
"paint",
"pair",
"pamper",
"pan",
"panel",
"panic",
"pant",
"parachute",
"parade",
"paralyze",
"pardon",
"pare",
"park",
"parley",
"parody",
"parrot",
"part",
"participate",
"partition",
"partner",
"pass",
"paste",
"pat",
"patch",
"patent",
"patrol",
"patronize",
"pattern",
"pause",
"pave",
"paw",
"pay",
"peak",
"peck",
"pedal",
"peel",
"peep",
"peer",
"peg",
"pelt",
"penalize",
"pencil",
"penetrate",
"pepper",
"perceive",
"perch",
"perfect",
"perform",
"perfume",
"perish",
"permeate",
"permit",
"perpetrate",
"perpetuate",
"perplex",
"persecute",
"persevere",
"persist",
"personalize",
"personify",
"persuade",
"perturb",
"pervade",
"pester",
"petition",
"petrify",
"phase",
"phone",
"photocopy",
"photograph",
"phrase",
"pick",
"pickle",
"picture",
"pierce",
"pile",
"pilot",
"pin",
"pinch",
"pine",
"pinpoint",
"pioneer",
"pipe",
"pit",
"pitch",
"pity",
"placate",
"place",
"plague",
"plan",
"plant",
"plaster",
"play",
"plead",
"please",
"pledge",
"plod",
"plot",
"plow",
"pluck",
"plug",
"plummet",
"plump",
"plunder",
"plunge",
"ply",
"poach",
"pocket",
"point",
"poise",
"poison",
"poke",
"polarize",
"police",
"polish",
"poll",
"pollute",
"ponder",
"pool",
"pop",
"populate",
"portray",
"pose",
"position",
"possess",
"post",
"postpone",
"postulate",
"pot",
"pounce",
"pound",
"pour",
"pout",
"powder",
"power",
"practice",
"praise",
"pray",
"preach",
"precede",
"precipitate",
"preclude",
"predetermine",
"predicate",
"predict",
"preen",
"prefer",
"prejudice",
"preoccupy",
"prepare",
"prescribe",
"present",
"preserve",
"preside",
"press",
"pressure",
"pressurize",
"presume",
"presuppose",
"pretend",
"prevail",
"prevent",
"preview",
"price",
"prick",
"pride",
"prime",
"primp",
"print",
"privatize",
"prize",
"probe",
"proceed",
"process",
"proclaim",
"procure",
"prod",
"produce",
"profess",
"profit",
"program",
"progress",
"prohibit",
"project",
"proliferate",
"prolong",
"promise",
"promote",
"prompt",
"pronounce",
"proofread",
"prop",
"propagate",
"propel",
"prophesize",
"propose",
"proscribe",
"prosecute",
"prosper",
"protect",
"protest",
"protract",
"protrude",
"prove",
"provide",
"provoke",
"prowl",
"prune",
"pry",
"publicize",
"publish",
"pucker",
"puff",
"pull",
"pummel",
"pump",
"punch",
"punctuate",
"puncture",
"punish",
"purchase",
"purge",
"purify",
"purport",
"purr",
"purse",
"pursue",
"push",
"put",
"puzzle",
"quadruple",
"qualify",
"quantify",
"quarrel",
"quarter",
"quash",
"quell",
"quench",
"query",
"question",
"queue",
"quicken",
"quip",
"quit",
"quiver",
"quiz",
"quote",
"race",
"rack",
"radiate",
"rage",
"raid",
"rain",
"raise",
"rake",
"rally",
"ram",
"range",
"rank",
"ransack",
"rant",
"rat",
"rate",
"ratify",
"ration",
"rationalize",
"rattle",
"ravage",
"rave",
"raze",
"reach",
"react",
"read",
"readmit",
"reaffirm",
"realign",
"realize",
"reap",
"reappear",
"rear",
"rearrange",
"reason",
"reassemble",
"reassert",
"reassess",
"reassure",
"rebel",
"rebound",
"rebuff",
"rebuke",
"recall",
"recapture",
"recede",
"receive",
"recess",
"recharge",
"reciprocate",
"recite",
"reckon",
"reclaim",
"recline",
"recognize",
"recoil",
"recollect",
"recommend",
"reconcile",
"reconfigure",
"reconsider",
"reconstitute",
"reconstruct",
"reconvene",
"record",
"recount",
"recoup",
"recover",
"recreate",
"recruit",
"rectify",
"recycle",
"redden",
"redeem",
"redefine",
"redesign",
"redevelop",
"redirect",
"rediscover",
"redistribute",
"reduce",
"reel",
"refer",
"reference",
"refill",
"refine",
"reflect",
"reform",
"refrain",
"refresh",
"refrigerate",
"refund",
"refurbish",
"refuse",
"refute",
"regain",
"regard",
"register",
"regret",
"regulate",
"rehabilitate",
"rehearse",
"reign",
"reimburse",
"rein",
"reinforce",
"reinstate",
"reinterpret",
"reintroduce",
"reinvest",
"reissue",
"reiterate",
"reject",
"rejoice",
"rejoin",
"rekindle",
"relapse",
"relate",
"relax",
"relay",
"release",
"relegate",
"relent",
"relieve",
"relinquish",
"relish",
"relocate",
"rely",
"remain",
"remand",
"remark",
"remedy",
"remember",
"remind",
"remit",
"remove",
"rename",
"render",
"renege",
"renegotiate",
"renew",
"renounce",
"renovate",
"rent",
"reopen",
"reorganize",
"repair",
"repay",
"repeal",
"repeat",
"repel",
"replace",
"replenish",
"replicate",
"reply",
"report",
"repossess",
"represent",
"repress",
"reprieve",
"reprimand",
"reprint",
"reproach",
"reproduce",
"reprogram",
"repulse",
"repute",
"request",
"require",
"requisition",
"reread",
"reschedule",
"rescind",
"rescue",
"research",
"resell",
"resemble",
"resent",
"reserve",
"reset",
"reshuffle",
"reside",
"resign",
"resist",
"resolve",
"resort",
"respect",
"respond",
"rest",
"restart",
"restate",
"restore",
"restrain",
"restrict",
"restructure",
"result",
"resume",
"resurface",
"resurrect",
"retake",
"retain",
"retaliate",
"reteach",
"retell",
"rethink",
"retire",
"retort",
"retrace",
"retract",
"retreat",
"retrieve",
"return",
"reunite",
"reuse",
"rev",
"revamp",
"reveal",
"revel",
"reverberate",
"revere",
"reverse",
"revert",
"review",
"revile",
"revise",
"revisit",
"revive",
"revoke",
"revolt",
"revolutionize",
"revolve",
"reward",
"rework",
"rhyme",
"rib",
"rid",
"riddle",
"ride",
"ridicule",
"rig",
"right",
"ring",
"rinse",
"rip",
"ripple",
"rise",
"risk",
"rival",
"rivet",
"roam",
"roar",
"roast",
"rob",
"rock",
"rocket",
"roll",
"romp",
"root",
"rope",
"rot",
"rotate",
"round",
"rouse",
"route",
"row",
"rub",
"ruffle",
"ruin",
"rule",
"rumble",
"rummage",
"rumple",
"run",
"rupture",
"rush",
"rust",
"rustle",
"sabotage",
"sack",
"sacrifice",
"sadden",
"saddle",
"safeguard",
"sag",
"sail",
"salt",
"salute",
"salvage",
"sample",
"sanction",
"sandwich",
"sap",
"sass",
"satisfy",
"saturate",
"saunter",
"save",
"savor",
"saw",
"say",
"scald",
"scale",
"scamper",
"scan",
"scar",
"scare",
"scatter",
"scavenge",
"scent",
"schedule",
"school",
"scoff",
"scold",
"scoop",
"scorch",
"score",
"scorn",
"scour",
"scowl",
"scramble",
"scrap",
"scrape",
"scratch",
"scrawl",
"scream",
"screech",
"screen",
"screw",
"scribble",
"scroll",
"scrub",
"scrutinize",
"sculpt",
"scurry",
"scuttle",
"seal",
"search",
"season",
"seat",
"seclude",
"secrete",
"secure",
"seduce",
"see",
"seed",
"seek",
"seem",
"seep",
"seethe",
"segment",
"segregate",
"seize",
"select",
"sell",
"send",
"sense",
"sentence",
"separate",
"sequence",
"serve",
"service",
"set",
"settle",
"sever",
"sew",
"shade",
"shadow",
"shake",
"shame",
"shape",
"share",
"sharpen",
"shatter",
"shave",
"shear",
"sheath",
"shed",
"shell",
"shelter",
"shelve",
"shepherd",
"shield",
"shift",
"shimmer",
"shine",
"ship",
"shiver",
"shock",
"shoot",
"shop",
"shorten",
"shoulder",
"shout",
"shove",
"show",
"shower",
"shred",
"shriek",
"shrink",
"shrivel",
"shroud",
"shrug",
"shudder",
"shuffle",
"shun",
"shunt",
"shut",
"shutter",
"sicken",
"side",
"sideline",
"sidle",
"sift",
"sigh",
"sight",
"sign",
"signal",
"signify",
"silence",
"silhouette",
"simplify",
"simulate",
"sing",
"singe",
"single",
"sink",
"sip",
"sire",
"sit",
"situate",
"size",
"sketch",
"skew",
"ski",
"skid",
"skim",
"skin",
"skip",
"skirt",
"slacken",
"slam",
"slant",
"slap",
"slash",
"slate",
"slaughter",
"slay",
"sleep",
"slice",
"slide",
"sling",
"slink",
"slip",
"slit",
"slither",
"slope",
"slouch",
"slow",
"slug",
"slump",
"slur",
"smack",
"smash",
"smear",
"smell",
"smile",
"smirk",
"smoke",
"smooth",
"smother",
"smudge",
"smuggle",
"snake",
"snap",
"snare",
"snarl",
"snatch",
"sneak",
"sneer",
"sneeze",
"snicker",
"sniff",
"snoop",
"snore",
"snort",
"snow",
"snub",
"snuff",
"snuggle",
"soak",
"soar",
"sob",
"socialize",
"soften",
"soil",
"solicit",
"solve",
"sooth",
"sort",
"sound",
"sour",
"sow",
"space",
"span",
"spare",
"spark",
"sparkle",
"spatter",
"spawn",
"speak",
"spear",
"spearhead",
"specialize",
"specify",
"speckle",
"speculate",
"speed",
"spell",
"spend",
"spice",
"spike",
"spill",
"spin",
"spiral",
"spirit",
"spit",
"spite",
"splash",
"splatter",
"splice",
"splinter",
"split",
"splutter",
"spoil",
"sponsor",
"spoon",
"sport",
"spot",
"sprawl",
"spray",
"spread",
"spring",
"sprinkle",
"sprint",
"sprout",
"spur",
"spurn",
"spurt",
"spy",
"squander",
"square",
"squash",
"squat",
"squeak",
"squeal",
"squeeze",
"squint",
"squirm",
"squirt",
"stab",
"stabilize",
"stable",
"stack",
"staff",
"stage",
"stagger",
"stain",
"stake",
"stalk",
"stall",
"stammer",
"stamp",
"stand",
"standardize",
"stare",
"start",
"startle",
"starve",
"stash",
"state",
"station",
"stay",
"steady",
"steal",
"steam",
"steer",
"stem",
"step",
"stereotype",
"stick",
"stiffen",
"stifle",
"stimulate",
"sting",
"stink",
"stipulate",
"stir",
"stitch",
"stock",
"stomp",
"stone",
"stoop",
"stop",
"store",
"storm",
"stow",
"straddle",
"straighten",
"strain",
"strand",
"strangle",
"strap",
"strategize",
"stratify",
"stray",
"streak",
"stream",
"streamline",
"strengthen",
"stress",
"stretch",
"stride",
"strike",
"string",
"strip",
"strive",
"stroke",
"structure",
"struggle",
"strut",
"stub",
"study",
"stuff",
"stumble",
"stump",
"stun",
"stunt",
"stutter",
"style",
"stylize",
"subdivide",
"subdue",
"subject",
"sublet",
"submerge",
"submit",
"subordinate",
"subscribe",
"subside",
"subsidize",
"substantiate",
"substitute",
"subsume",
"subtract",
"subvert",
"succeed",
"succumb",
"suck",
"sue",
"suffer",
"suffice",
"suffocate",
"suggest",
"suit",
"summarize",
"summon",
"superimpose",
"supersede",
"supervise",
"supplant",
"supplement",
"supply",
"support",
"suppose",
"suppress",
"surface",
"surge",
"surmise",
"surmount",
"surpass",
"surprise",
"surrender",
"surround",
"survey",
"survive",
"suspect",
"suspend",
"sustain",
"swagger",
"swallow",
"swamp",
"swap",
"swarm",
"sway",
"swear",
"sweat",
"sweep",
"swell",
"swerve",
"swim",
"swing",
"swirl",
"switch",
"swivel",
"swoop",
"symbolize",
"sympathize",
"synthesize",
"systematize",
"systemize",
"table",
"tabulate",
"tack",
"tackle",
"tag",
"tail",
"tailor",
"taint",
"take",
"talk",
"tame",
"tamper",
"tan",
"tangle",
"tap",
"tape",
"taper",
"target",
"tarnish",
"taste",
"tatter",
"taunt",
"tax",
"teach",
"team",
"tear",
"tease",
"telephone",
"televise",
"tell",
"tempt",
"tend",
"tender",
"tense",
"term",
"terminate",
"terrify",
"terrorize",
"test",
"testify",
"tether",
"texture",
"thank",
"thatch",
"thaw",
"theorize",
"thicken",
"thin",
"think",
"thrash",
"thread",
"threaten",
"thrill",
"thrive",
"throb",
"throw",
"thrust",
"thud",
"thumb",
"thump",
"thunder",
"thwart",
"tick",
"tickle",
"tie",
"tighten",
"tile",
"till",
"tilt",
"time",
"tinge",
"tingle",
"tint",
"tip",
"tiptoe",
"tire",
"title",
"toast",
"toil",
"tolerate",
"tone",
"top",
"topple",
"torment",
"torture",
"toss",
"total",
"totter",
"touch",
"tour",
"tout",
"tow",
"tower",
"toy",
"trace",
"track",
"trade",
"trail",
"train",
"tramp",
"trample",
"transact",
"transcend",
"transcribe",
"transfer",
"transfix",
"transform",
"translate",
"transmit",
"transmute",
"transpire",
"transplant",
"transport",
"transpose",
"trap",
"travel",
"traverse",
"tread",
"treasure",
"treat",
"tremble",
"trick",
"trickle",
"trigger",
"trim",
"trip",
"triple",
"triumph",
"trot",
"trouble",
"troubleshoot",
"trudge",
"truncate",
"truss",
"trust",
"try",
"tuck",
"tug",
"tumble",
"tune",
"turn",
"tutor",
"twinkle",
"twirl",
"twist",
"twitch",
"type",
"typify",
"unarm",
"unbalance",
"unbutton",
"uncover",
"undercut",
"underestimate",
"undergo",
"underline",
"undermine",
"understand",
"understate",
"undertake",
"undervalue",
"undo",
"undress",
"unearth",
"unfasten",
"unfold",
"unfurl",
"unify",
"unite",
"unleash",
"unload",
"unlock",
"unpack",
"unravel",
"unroll",
"untie",
"unveil",
"unwind",
"unwrap",
"unzip",
"up",
"update",
"upgrade",
"uphold",
"upholster",
"uproot",
"upset",
"upstage",
"urge",
"use",
"usher",
"usurp",
"utilize",
"utter",
"vacate",
"vaccinate",
"validate",
"value",
"vandalize",
"vanish",
"varnish",
"vary",
"vault",
"veer",
"vegetate",
"venerate",
"vent",
"ventilate",
"venture",
"verbalize",
"verify",
"vest",
"vet",
"veto",
"vibrate",
"victimize",
"view",
"vindicate",
"violate",
"visit",
"visualize",
"voice",
"void",
"volunteer",
"vomit",
"vote",
"vow",
"wad",
"waddle",
"wade",
"wag",
"wage",
"wail",
"wait",
"waive",
"wake",
"waken",
"walk",
"wall",
"wander",
"wane",
"want",
"warm",
"warn",
"warp",
"warrant",
"wash",
"waste",
"watch",
"water",
"waterlog",
"wave",
"waver",
"wax",
"weaken",
"wean",
"wear",
"weather",
"weave",
"wed",
"wedge",
"weep",
"weigh",
"welcome",
"weld",
"whack",
"wheel",
"whimper",
"whine",
"whip",
"whirl",
"whisk",
"whisper",
"whistle",
"whiten",
"whitewash",
"whittle",
"widen",
"wield",
"wiggle",
"will",
"win",
"wince",
"wind",
"wink",
"wipe",
"wire",
"wish",
"withdraw",
"wither",
"withhold",
"withstand",
"witness",
"wobble",
"wonder",
"woo",
"word",
"work",
"worry",
"worsen",
"worship",
"wound",
"wrap",
"wreck",
"wrench",
"wrestle",
"wriggle",
"wring",
"wrinkle",
"write",
"writhe",
"x-ray",
"yak",
"yank",
"yawn",
"yearn",
"yell",
"yelp",
"yield",
"zap",
"zip",
"zoom",
];