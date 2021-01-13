const nodes = [
    {
        "id": 1,
        "label": "Abduction",
        "x": 415,
        "y": -2256,
        "value": 28
    },
    {
        "id": 2,
        "label": "Peter Abelard",
        "x": 2432,
        "y": 1685,
        "value": 12
    },
    {
        "id": 3,
        "label": "Abhidharma",
        "x": 5463,
        "y": -1622,
        "value": 20
    },
    {
        "id": 4,
        "label": "Abilities",
        "x": 911,
        "y": -2005,
        "value": 18
    },
    {
        "id": 5,
        "label": "Abner of Burgos",
        "x": -2068,
        "y": 83,
        "value": 22
    },
    {
        "id": 6,
        "label": "Judah Abrabanel",
        "x": 3437,
        "y": -87,
        "value": 4
    },
    {
        "id": 7,
        "label": "Abstract Objects",
        "x": 2639,
        "y": -1367,
        "value": 46
    },
    {
        "id": 8,
        "label": "Essential vs. Accidental Properties",
        "x": 2113,
        "y": -1779,
        "value": 56
    },
    {
        "id": 9,
        "label": "Action",
        "x": 2035,
        "y": -1522,
        "value": 58
    },
    {
        "id": 10,
        "label": "Action-based Theories of Perception",
        "x": 4188,
        "y": 157,
        "value": 8
    },
    {
        "id": 11,
        "label": "Action at a Distance in Quantum Mechanics",
        "x": 2377,
        "y": -4689,
        "value": 16
    },
    {
        "id": 12,
        "label": "Actualism",
        "x": 2797,
        "y": -2890,
        "value": 42
    },
    {
        "id": 13,
        "label": "Actualism and Possibilism in Ethics",
        "x": 1318,
        "y": -4443,
        "value": 8
    },
    {
        "id": 14,
        "label": "Adaptationism",
        "x": 3288,
        "y": 818,
        "value": 48
    },
    {
        "id": 15,
        "label": "Jane Addams",
        "x": 347,
        "y": 1823,
        "value": 18
    },
    {
        "id": 16,
        "label": "Theodor W. Adorno",
        "x": 323,
        "y": 1032,
        "value": 54
    },
    {
        "id": 17,
        "label": "Advance Directives and Substitute Decision-Making",
        "x": -2446,
        "y": -314,
        "value": 16
    },
    {
        "id": 18,
        "label": "Giles of Rome",
        "x": 411,
        "y": 2710,
        "value": 26
    },
    {
        "id": 19,
        "label": "Ancient Skepticism",
        "x": -386,
        "y": -252,
        "value": 54
    },
    {
        "id": 20,
        "label": "The Concept of the Aesthetic",
        "x": 5144,
        "y": 2391,
        "value": 2
    },
    {
        "id": 21,
        "label": "Aesthetics of the Everyday",
        "x": 1809,
        "y": 1734,
        "value": 22
    },
    {
        "id": 22,
        "label": "Affirmative Action",
        "x": -1106,
        "y": 2248,
        "value": 20
    },
    {
        "id": 23,
        "label": "Africana Philosophy",
        "x": 2142,
        "y": 3792,
        "value": 30
    },
    {
        "id": 24,
        "label": "Afterlife",
        "x": -84,
        "y": 22,
        "value": 24
    },
    {
        "id": 25,
        "label": "Agency",
        "x": 2439,
        "y": -2137,
        "value": 26
    },
    {
        "id": 26,
        "label": "Reasons for Action: Agent-Neutral vs. Agent-Relative",
        "x": 630,
        "y": -1453,
        "value": 24
    },
    {
        "id": 27,
        "label": "Atheism and Agnosticism",
        "x": 583,
        "y": -440,
        "value": 42
    },
    {
        "id": 28,
        "label": "Heinrich Cornelius Agrippa von Nettesheim",
        "x": -3550,
        "y": 1525,
        "value": 16
    },
    {
        "id": 29,
        "label": "Weakness of Will",
        "x": 2466,
        "y": -1200,
        "value": 22
    },
    {
        "id": 30,
        "label": "\u2018Abd al-Latif al-Baghdadi",
        "x": -3594,
        "y": 1294,
        "value": 16
    },
    {
        "id": 31,
        "label": "al-Farabi",
        "x": -1746,
        "y": 785,
        "value": 24
    },
    {
        "id": 32,
        "label": "al-Ghazali",
        "x": -3738,
        "y": 571,
        "value": 18
    },
    {
        "id": 33,
        "label": "al-Kindi",
        "x": -3106,
        "y": 1570,
        "value": 28
    },
    {
        "id": 34,
        "label": "Isaac Albalag",
        "x": -4753,
        "y": -623,
        "value": 10
    },
    {
        "id": 35,
        "label": "Albert of Saxony",
        "x": -2756,
        "y": -1570,
        "value": 14
    },
    {
        "id": 36,
        "label": "Albert the Great",
        "x": -699,
        "y": 1106,
        "value": 44
    },
    {
        "id": 37,
        "label": "Joseph Albo",
        "x": -336,
        "y": 252,
        "value": 20
    },
    {
        "id": 38,
        "label": "Alcmaeon",
        "x": -4005,
        "y": -1628,
        "value": 14
    },
    {
        "id": 39,
        "label": "Samuel Alexander",
        "x": 1033,
        "y": -1751,
        "value": 16
    },
    {
        "id": 40,
        "label": "Alexander of Aphrodisias",
        "x": -3251,
        "y": 381,
        "value": 32
    },
    {
        "id": 41,
        "label": "Algebra",
        "x": -3791,
        "y": 149,
        "value": 10
    },
    {
        "id": 42,
        "label": "The Algebra of Logic Tradition",
        "x": -4480,
        "y": 1378,
        "value": 10
    },
    {
        "id": 43,
        "label": "Alienation",
        "x": -1362,
        "y": 2331,
        "value": 14
    },
    {
        "id": 44,
        "label": "Louis Althusser",
        "x": -482,
        "y": 1148,
        "value": 24
    },
    {
        "id": 45,
        "label": "Altruism",
        "x": 1332,
        "y": -1155,
        "value": 20
    },
    {
        "id": 46,
        "label": "Robert Alyngton",
        "x": -1170,
        "y": -2399,
        "value": 20
    },
    {
        "id": 47,
        "label": "Ambiguity",
        "x": 961,
        "y": -3019,
        "value": 12
    },
    {
        "id": 48,
        "label": "Ammonius",
        "x": -3448,
        "y": 624,
        "value": 46
    },
    {
        "id": 49,
        "label": "Plotinus",
        "x": -1972,
        "y": 1078,
        "value": 76
    },
    {
        "id": 50,
        "label": "Analogy and Analogical Reasoning",
        "x": 545,
        "y": -2706,
        "value": 26
    },
    {
        "id": 51,
        "label": "Analysis",
        "x": 820,
        "y": -547,
        "value": 56
    },
    {
        "id": 52,
        "label": "The Analytic/Synthetic Distinction",
        "x": 1460,
        "y": -1232,
        "value": 82
    },
    {
        "id": 53,
        "label": "Anaphora",
        "x": 3236,
        "y": -3326,
        "value": 24
    },
    {
        "id": 54,
        "label": "Anarchism",
        "x": -2222,
        "y": -1020,
        "value": 26
    },
    {
        "id": 55,
        "label": "Anaxagoras",
        "x": -3003,
        "y": -1668,
        "value": 26
    },
    {
        "id": 56,
        "label": "Pyrrho",
        "x": -1130,
        "y": 586,
        "value": 16
    },
    {
        "id": 57,
        "label": "John Anderson",
        "x": 715,
        "y": -924,
        "value": 34
    },
    {
        "id": 58,
        "label": "Commentators on Aristotle",
        "x": -3401,
        "y": 924,
        "value": 44
    },
    {
        "id": 59,
        "label": "Animalism",
        "x": 2695,
        "y": 181,
        "value": 16
    },
    {
        "id": 60,
        "label": "The Moral Status of Animals",
        "x": -128,
        "y": 1800,
        "value": 22
    },
    {
        "id": 61,
        "label": "Anomalous Monism",
        "x": 2262,
        "y": -1408,
        "value": 50
    },
    {
        "id": 62,
        "label": "Gertrude Elizabeth Margaret Anscombe",
        "x": 1569,
        "y": -107,
        "value": 20
    },
    {
        "id": 63,
        "label": "Saint Anselm",
        "x": 417,
        "y": 1201,
        "value": 34
    },
    {
        "id": 64,
        "label": "Moral Anti-Realism",
        "x": 3052,
        "y": -52,
        "value": 38
    },
    {
        "id": 65,
        "label": "Antiochus of Ascalon",
        "x": 941,
        "y": 1023,
        "value": 18
    },
    {
        "id": 66,
        "label": "A Priori Justification and Knowledge",
        "x": 1040,
        "y": -1016,
        "value": 46
    },
    {
        "id": 67,
        "label": "Saint Thomas Aquinas",
        "x": 83,
        "y": 956,
        "value": 134
    },
    {
        "id": 68,
        "label": "Arcesilaus",
        "x": 442,
        "y": 97,
        "value": 30
    },
    {
        "id": 69,
        "label": "Philosophy of Architecture",
        "x": 3615,
        "y": -417,
        "value": 14
    },
    {
        "id": 70,
        "label": "Archytas",
        "x": -3949,
        "y": -1339,
        "value": 16
    },
    {
        "id": 71,
        "label": "Hannah Arendt",
        "x": 323,
        "y": 1507,
        "value": 36
    },
    {
        "id": 72,
        "label": "Ancient Ethical Theory",
        "x": -1931,
        "y": 358,
        "value": 26
    },
    {
        "id": 73,
        "label": "Aristotle",
        "x": -1904,
        "y": -168,
        "value": 172
    },
    {
        "id": 74,
        "label": "Antoine Arnauld",
        "x": -929,
        "y": 11,
        "value": 30
    },
    {
        "id": 75,
        "label": "Voltaire",
        "x": -1220,
        "y": -1829,
        "value": 24
    },
    {
        "id": 76,
        "label": "Arrow\u2019s Theorem",
        "x": -1624,
        "y": -4034,
        "value": 12
    },
    {
        "id": 77,
        "label": "Conceptual Art",
        "x": 3877,
        "y": -3730,
        "value": 6
    },
    {
        "id": 78,
        "label": "The Definition of Art",
        "x": 3907,
        "y": -1130,
        "value": 14
    },
    {
        "id": 79,
        "label": "Artifact",
        "x": 2077,
        "y": -2387,
        "value": 22
    },
    {
        "id": 80,
        "label": "Artificial Intelligence",
        "x": 3062,
        "y": -1690,
        "value": 40
    },
    {
        "id": 81,
        "label": "Tense and Aspect",
        "x": 4441,
        "y": -2758,
        "value": 10
    },
    {
        "id": 82,
        "label": "Assertion",
        "x": 2142,
        "y": -3251,
        "value": 38
    },
    {
        "id": 83,
        "label": "Associationist Theories of Thought",
        "x": 1567,
        "y": -793,
        "value": 18
    },
    {
        "id": 84,
        "label": "Mary Astell",
        "x": -2414,
        "y": 174,
        "value": 22
    },
    {
        "id": 85,
        "label": "Attention",
        "x": 1220,
        "y": -425,
        "value": 24
    },
    {
        "id": 86,
        "label": "Properties",
        "x": 1506,
        "y": -2209,
        "value": 150
    },
    {
        "id": 87,
        "label": "Auditory Perception",
        "x": 4140,
        "y": -420,
        "value": 16
    },
    {
        "id": 88,
        "label": "Saint Augustine",
        "x": -335,
        "y": 555,
        "value": 96
    },
    {
        "id": 89,
        "label": "Peter Auriol",
        "x": -3286,
        "y": 114,
        "value": 12
    },
    {
        "id": 90,
        "label": "John Austin",
        "x": -3933,
        "y": -474,
        "value": 12
    },
    {
        "id": 91,
        "label": "John Langshaw Austin",
        "x": 1959,
        "y": -2289,
        "value": 46
    },
    {
        "id": 92,
        "label": "Authenticity",
        "x": 2394,
        "y": 2026,
        "value": 14
    },
    {
        "id": 93,
        "label": "Authority",
        "x": -1241,
        "y": 90,
        "value": 62
    },
    {
        "id": 94,
        "label": "Automated Reasoning",
        "x": 3693,
        "y": -1193,
        "value": 14
    },
    {
        "id": 95,
        "label": "Solomon Ibn Gabirol [Avicebron]",
        "x": -2883,
        "y": 2202,
        "value": 18
    },
    {
        "id": 96,
        "label": "Ibn Sina [Avicenna]",
        "x": -3125,
        "y": 1017,
        "value": 32
    },
    {
        "id": 97,
        "label": "Bodily Awareness",
        "x": 2264,
        "y": 802,
        "value": 22
    },
    {
        "id": 98,
        "label": "Alfred Jules Ayer",
        "x": 1707,
        "y": -133,
        "value": 34
    },
    {
        "id": 99,
        "label": "Francis Bacon",
        "x": -1471,
        "y": -334,
        "value": 32
    },
    {
        "id": 100,
        "label": "Roger Bacon",
        "x": -1324,
        "y": 587,
        "value": 58
    },
    {
        "id": 101,
        "label": "Scottish Philosophy in the 19th Century",
        "x": 92,
        "y": 133,
        "value": 20
    },
    {
        "id": 102,
        "label": "The Epistemic Basing Relation",
        "x": -753,
        "y": -4329,
        "value": 6
    },
    {
        "id": 103,
        "label": "Jean Baudrillard",
        "x": 652,
        "y": 2779,
        "value": 12
    },
    {
        "id": 104,
        "label": "Bruno Bauer",
        "x": -2120,
        "y": 1173,
        "value": 16
    },
    {
        "id": 105,
        "label": "Bayes\u2019 Theorem",
        "x": 49,
        "y": -3385,
        "value": 24
    },
    {
        "id": 106,
        "label": "Pierre Bayle",
        "x": -1257,
        "y": -681,
        "value": 20
    },
    {
        "id": 107,
        "label": "Scottish Philosophy in the 18th Century",
        "x": -696,
        "y": -746,
        "value": 40
    },
    {
        "id": 108,
        "label": "Beauty",
        "x": -246,
        "y": 1031,
        "value": 42
    },
    {
        "id": 109,
        "label": "Simone de Beauvoir",
        "x": 620,
        "y": 1508,
        "value": 32
    },
    {
        "id": 110,
        "label": "Behaviorism",
        "x": 2356,
        "y": -525,
        "value": 48
    },
    {
        "id": 111,
        "label": "Existence",
        "x": 2355,
        "y": -755,
        "value": 58
    },
    {
        "id": 112,
        "label": "Time",
        "x": 2020,
        "y": -2040,
        "value": 52
    },
    {
        "id": 113,
        "label": "Belief",
        "x": 1958,
        "y": -1350,
        "value": 94
    },
    {
        "id": 114,
        "label": "The Ethics of Belief",
        "x": 81,
        "y": -2137,
        "value": 28
    },
    {
        "id": 115,
        "label": "Formal Representations of Belief",
        "x": 1213,
        "y": -3815,
        "value": 30
    },
    {
        "id": 116,
        "label": "Belief Merging and Judgment Aggregation",
        "x": -1137,
        "y": -3924,
        "value": 12
    },
    {
        "id": 117,
        "label": "Bell\u2019s Theorem",
        "x": 2158,
        "y": -5189,
        "value": 10
    },
    {
        "id": 118,
        "label": "The Principle of Beneficence in Applied Ethics",
        "x": -1695,
        "y": 284,
        "value": 30
    },
    {
        "id": 119,
        "label": "Walter Benjamin",
        "x": 511,
        "y": 1903,
        "value": 62
    },
    {
        "id": 120,
        "label": "Jeremy Bentham",
        "x": -844,
        "y": 179,
        "value": 40
    },
    {
        "id": 121,
        "label": "Henri Bergson",
        "x": 2094,
        "y": 1654,
        "value": 28
    },
    {
        "id": 122,
        "label": "George Berkeley",
        "x": -327,
        "y": -419,
        "value": 54
    },
    {
        "id": 123,
        "label": "Isaiah Berlin",
        "x": 116,
        "y": 542,
        "value": 78
    },
    {
        "id": 124,
        "label": "Basil [Cardinal] Bessarion",
        "x": -4178,
        "y": 283,
        "value": 16
    },
    {
        "id": 125,
        "label": "Implicit Bias",
        "x": 1229,
        "y": -762,
        "value": 18
    },
    {
        "id": 126,
        "label": "Binarium Famosissimum",
        "x": -417,
        "y": 2455,
        "value": 26
    },
    {
        "id": 127,
        "label": "Biodiversity",
        "x": 3576,
        "y": 1827,
        "value": 12
    },
    {
        "id": 128,
        "label": "Biological Individuals",
        "x": 3489,
        "y": 1347,
        "value": 40
    },
    {
        "id": 129,
        "label": "Biological Information",
        "x": 2907,
        "y": 987,
        "value": 34
    },
    {
        "id": 130,
        "label": "Philosophy of Biomedicine",
        "x": 526,
        "y": -1559,
        "value": 12
    },
    {
        "id": 131,
        "label": "Blame",
        "x": 1215,
        "y": -2021,
        "value": 22
    },
    {
        "id": 132,
        "label": "Jean Bodin",
        "x": -2067,
        "y": -88,
        "value": 28
    },
    {
        "id": 133,
        "label": "Substance",
        "x": 883,
        "y": -940,
        "value": 68
    },
    {
        "id": 134,
        "label": "Anicius Manlius Severinus Boethius",
        "x": -893,
        "y": 670,
        "value": 44
    },
    {
        "id": 135,
        "label": "Boethius of Dacia",
        "x": 1622,
        "y": 1515,
        "value": 18
    },
    {
        "id": 136,
        "label": "Bernard Bolzano",
        "x": 1738,
        "y": -644,
        "value": 32
    },
    {
        "id": 137,
        "label": "Saint Bonaventure",
        "x": 654,
        "y": 1029,
        "value": 28
    },
    {
        "id": 138,
        "label": "George Boole",
        "x": -5557,
        "y": 1542,
        "value": 8
    },
    {
        "id": 139,
        "label": "Bernard Bosanquet",
        "x": 774,
        "y": 1542,
        "value": 18
    },
    {
        "id": 140,
        "label": "Boundary",
        "x": 3255,
        "y": -1406,
        "value": 16
    },
    {
        "id": 141,
        "label": "Bounded Rationality",
        "x": 1021,
        "y": -4207,
        "value": 14
    },
    {
        "id": 142,
        "label": "Robert Boyle",
        "x": -157,
        "y": -352,
        "value": 58
    },
    {
        "id": 143,
        "label": "Francis Herbert Bradley",
        "x": 1716,
        "y": 176,
        "value": 44
    },
    {
        "id": 144,
        "label": "The Definition of Death",
        "x": 1295,
        "y": 119,
        "value": 28
    },
    {
        "id": 145,
        "label": "Skepticism and Content Externalism",
        "x": 401,
        "y": -2087,
        "value": 18
    },
    {
        "id": 146,
        "label": "Franz Brentano",
        "x": 3432,
        "y": -322,
        "value": 60
    },
    {
        "id": 147,
        "label": "Charlie Dunbar Broad",
        "x": 2236,
        "y": -2653,
        "value": 12
    },
    {
        "id": 148,
        "label": "Luitzen Egbertus Jan Brouwer",
        "x": -775,
        "y": -2561,
        "value": 22
    },
    {
        "id": 149,
        "label": "Giordano Bruno",
        "x": -2747,
        "y": 159,
        "value": 52
    },
    {
        "id": 150,
        "label": "Martin Buber",
        "x": 1415,
        "y": 2573,
        "value": 26
    },
    {
        "id": 151,
        "label": "Buddha",
        "x": 6740,
        "y": -1870,
        "value": 14
    },
    {
        "id": 152,
        "label": "Huayan Buddhism",
        "x": 5689,
        "y": -2576,
        "value": 24
    },
    {
        "id": 153,
        "label": "John Buridan",
        "x": -1732,
        "y": -286,
        "value": 52
    },
    {
        "id": 154,
        "label": "Edmund Burke",
        "x": -1939,
        "y": -1822,
        "value": 18
    },
    {
        "id": 155,
        "label": "Walter Burley",
        "x": -1957,
        "y": -1341,
        "value": 36
    },
    {
        "id": 156,
        "label": "Byzantine Philosophy",
        "x": -1940,
        "y": 190,
        "value": 28
    },
    {
        "id": 157,
        "label": "Callicles and Thrasymachus",
        "x": -1472,
        "y": 2075,
        "value": 10
    },
    {
        "id": 158,
        "label": "The Cambridge Platonists",
        "x": -1617,
        "y": -955,
        "value": 42
    },
    {
        "id": 159,
        "label": "Tommaso Campanella",
        "x": -4421,
        "y": -611,
        "value": 10
    },
    {
        "id": 160,
        "label": "Albert Camus",
        "x": 3007,
        "y": 1230,
        "value": 12
    },
    {
        "id": 161,
        "label": "Cancer",
        "x": 1472,
        "y": 486,
        "value": 12
    },
    {
        "id": 162,
        "label": "The Capability Approach",
        "x": -2118,
        "y": -696,
        "value": 22
    },
    {
        "id": 163,
        "label": "Girolamo [Geronimo] Cardano",
        "x": -1365,
        "y": -206,
        "value": 16
    },
    {
        "id": 164,
        "label": "Rudolf Carnap",
        "x": 561,
        "y": -1916,
        "value": 58
    },
    {
        "id": 165,
        "label": "Carneades",
        "x": 708,
        "y": 624,
        "value": 20
    },
    {
        "id": 166,
        "label": "Ernst Cassirer",
        "x": 356,
        "y": 2055,
        "value": 28
    },
    {
        "id": 167,
        "label": "Moral Reasoning",
        "x": 957,
        "y": -2133,
        "value": 34
    },
    {
        "id": 168,
        "label": "Categories",
        "x": 1670,
        "y": -1201,
        "value": 44
    },
    {
        "id": 169,
        "label": "Category Mistakes",
        "x": 2645,
        "y": -3985,
        "value": 12
    },
    {
        "id": 170,
        "label": "Category Theory",
        "x": -1312,
        "y": -473,
        "value": 16
    },
    {
        "id": 171,
        "label": "Causal Determinism",
        "x": 347,
        "y": -1704,
        "value": 48
    },
    {
        "id": 172,
        "label": "Causal Models",
        "x": 971,
        "y": -5229,
        "value": 12
    },
    {
        "id": 173,
        "label": "Margaret Lucas Cavendish",
        "x": 630,
        "y": 249,
        "value": 14
    },
    {
        "id": 174,
        "label": "Philosophy of Cell Biology",
        "x": 2466,
        "y": 845,
        "value": 22
    },
    {
        "id": 175,
        "label": "Cellular Automata",
        "x": 855,
        "y": -3579,
        "value": 20
    },
    {
        "id": 176,
        "label": "Pornography and Censorship",
        "x": -2352,
        "y": 960,
        "value": 24
    },
    {
        "id": 177,
        "label": "Certainty",
        "x": 3770,
        "y": -1644,
        "value": 10
    },
    {
        "id": 178,
        "label": "Ceteris Paribus Laws",
        "x": 1413,
        "y": -3115,
        "value": 20
    },
    {
        "id": 179,
        "label": "Chinese Philosophy of Change (Yijing)",
        "x": 6130,
        "y": -3902,
        "value": 8
    },
    {
        "id": 180,
        "label": "Chaos",
        "x": 240,
        "y": -3244,
        "value": 20
    },
    {
        "id": 181,
        "label": "Moral Character",
        "x": -1102,
        "y": -766,
        "value": 34
    },
    {
        "id": 182,
        "label": "\u00c9milie du Ch\u00e2telet",
        "x": -677,
        "y": -1636,
        "value": 20
    },
    {
        "id": 183,
        "label": "Walter Chatton",
        "x": -2553,
        "y": -625,
        "value": 20
    },
    {
        "id": 184,
        "label": "Philosophy of Chemistry",
        "x": 2497,
        "y": -861,
        "value": 20
    },
    {
        "id": 185,
        "label": "The Philosophy of Childhood",
        "x": -2085,
        "y": 2351,
        "value": 12
    },
    {
        "id": 186,
        "label": "Philosophy for Children",
        "x": -2640,
        "y": 2943,
        "value": 8
    },
    {
        "id": 187,
        "label": "Human/Non-Human Chimeras",
        "x": 1930,
        "y": 2881,
        "value": 12
    },
    {
        "id": 188,
        "label": "Chinese Ethics",
        "x": 4257,
        "y": -4005,
        "value": 36
    },
    {
        "id": 189,
        "label": "The Chinese Room Argument",
        "x": 2503,
        "y": -1419,
        "value": 38
    },
    {
        "id": 190,
        "label": "Roderick Chisholm",
        "x": 3313,
        "y": -1577,
        "value": 22
    },
    {
        "id": 191,
        "label": "The Axiom of Choice",
        "x": -525,
        "y": 902,
        "value": 14
    },
    {
        "id": 192,
        "label": "Dynamic Choice",
        "x": 210,
        "y": -3734,
        "value": 22
    },
    {
        "id": 193,
        "label": "Social Choice Theory",
        "x": -1575,
        "y": -2968,
        "value": 24
    },
    {
        "id": 194,
        "label": "Philosophy and Christian Theology",
        "x": 1068,
        "y": 822,
        "value": 38
    },
    {
        "id": 195,
        "label": "The Church-Turing Thesis",
        "x": 358,
        "y": -3533,
        "value": 34
    },
    {
        "id": 196,
        "label": "Citizenship",
        "x": -1066,
        "y": 1464,
        "value": 42
    },
    {
        "id": 197,
        "label": "Civic Education",
        "x": -1184,
        "y": 468,
        "value": 24
    },
    {
        "id": 198,
        "label": "Civic Humanism",
        "x": -2318,
        "y": 1755,
        "value": 20
    },
    {
        "id": 199,
        "label": "Civil Disobedience",
        "x": -1647,
        "y": 417,
        "value": 20
    },
    {
        "id": 200,
        "label": "Civil Rights",
        "x": -1463,
        "y": 1445,
        "value": 34
    },
    {
        "id": 201,
        "label": "Samuel Clarke",
        "x": -488,
        "y": -1264,
        "value": 44
    },
    {
        "id": 202,
        "label": "Doxography of Ancient Philosophy",
        "x": -2820,
        "y": -2095,
        "value": 30
    },
    {
        "id": 203,
        "label": "Climate Justice",
        "x": -2925,
        "y": -139,
        "value": 16
    },
    {
        "id": 204,
        "label": "Climate Science",
        "x": -3285,
        "y": 1132,
        "value": 8
    },
    {
        "id": 205,
        "label": "The Ethics of Clinical Research",
        "x": -1802,
        "y": -1173,
        "value": 28
    },
    {
        "id": 206,
        "label": "Cloning",
        "x": -830,
        "y": 2618,
        "value": 20
    },
    {
        "id": 207,
        "label": "Catharine Trotter Cockburn",
        "x": -2449,
        "y": -2618,
        "value": 8
    },
    {
        "id": 208,
        "label": "Coercion",
        "x": -1641,
        "y": 1207,
        "value": 46
    },
    {
        "id": 209,
        "label": "Cognitive Disability and Moral Status",
        "x": -1336,
        "y": 4470,
        "value": 4
    },
    {
        "id": 210,
        "label": "Cognitive Science",
        "x": 2832,
        "y": -582,
        "value": 76
    },
    {
        "id": 211,
        "label": "Moral Cognitivism vs. Non-Cognitivism",
        "x": 2372,
        "y": -174,
        "value": 74
    },
    {
        "id": 212,
        "label": "Hermann Cohen",
        "x": 1222,
        "y": 2183,
        "value": 42
    },
    {
        "id": 213,
        "label": "Robin George Collingwood",
        "x": 1818,
        "y": 40,
        "value": 18
    },
    {
        "id": 214,
        "label": "Anthony Collins",
        "x": -638,
        "y": -1259,
        "value": 30
    },
    {
        "id": 215,
        "label": "Colonialism",
        "x": -744,
        "y": 2054,
        "value": 30
    },
    {
        "id": 216,
        "label": "Color",
        "x": 2718,
        "y": -797,
        "value": 40
    },
    {
        "id": 217,
        "label": "Reichenbach\u2019s Common Cause Principle",
        "x": 1322,
        "y": -4878,
        "value": 22
    },
    {
        "id": 218,
        "label": "The Common Good",
        "x": -2226,
        "y": -276,
        "value": 22
    },
    {
        "id": 219,
        "label": "Common Knowledge",
        "x": 1556,
        "y": -3753,
        "value": 20
    },
    {
        "id": 220,
        "label": "Communitarianism",
        "x": -1089,
        "y": 822,
        "value": 42
    },
    {
        "id": 221,
        "label": "Compatibilism",
        "x": 1079,
        "y": -1917,
        "value": 36
    },
    {
        "id": 222,
        "label": "Decision-Making Capacity",
        "x": -910,
        "y": -737,
        "value": 28
    },
    {
        "id": 223,
        "label": "The Problem of the Many",
        "x": 2781,
        "y": -2659,
        "value": 34
    },
    {
        "id": 224,
        "label": "Compositionality",
        "x": 2817,
        "y": -2324,
        "value": 44
    },
    {
        "id": 225,
        "label": "Computability and Complexity",
        "x": 393,
        "y": -2867,
        "value": 42
    },
    {
        "id": 226,
        "label": "Computational Complexity Theory",
        "x": -180,
        "y": -3852,
        "value": 22
    },
    {
        "id": 227,
        "label": "Computational Linguistics",
        "x": 3730,
        "y": -2781,
        "value": 18
    },
    {
        "id": 228,
        "label": "Computational Philosophy",
        "x": 3061,
        "y": -3802,
        "value": 10
    },
    {
        "id": 229,
        "label": "The Computational Theory of Mind",
        "x": 1896,
        "y": -1475,
        "value": 86
    },
    {
        "id": 230,
        "label": "The Philosophy of Computer Science",
        "x": -337,
        "y": -3152,
        "value": 28
    },
    {
        "id": 231,
        "label": "Auguste Comte",
        "x": 1017,
        "y": 394,
        "value": 28
    },
    {
        "id": 232,
        "label": "Concepts",
        "x": 2199,
        "y": -808,
        "value": 50
    },
    {
        "id": 233,
        "label": "Condemnation of 1277",
        "x": 512,
        "y": 2139,
        "value": 24
    },
    {
        "id": 234,
        "label": "\u00c9tienne Bonnot de Condillac",
        "x": -751,
        "y": -1768,
        "value": 22
    },
    {
        "id": 235,
        "label": "Indicative Conditionals",
        "x": 1616,
        "y": -3212,
        "value": 42
    },
    {
        "id": 236,
        "label": "Confirmation",
        "x": 231,
        "y": -2293,
        "value": 46
    },
    {
        "id": 237,
        "label": "Confucius",
        "x": 4417,
        "y": -3627,
        "value": 32
    },
    {
        "id": 238,
        "label": "Connectionism",
        "x": 3296,
        "y": -1238,
        "value": 32
    },
    {
        "id": 239,
        "label": "Conscience",
        "x": 4867,
        "y": 640,
        "value": 6
    },
    {
        "id": 240,
        "label": "Consciousness",
        "x": 2043,
        "y": -309,
        "value": 72
    },
    {
        "id": 241,
        "label": "Political Obligation",
        "x": -1440,
        "y": -985,
        "value": 44
    },
    {
        "id": 242,
        "label": "Medieval Theories of Consequence",
        "x": -878,
        "y": -1076,
        "value": 34
    },
    {
        "id": 243,
        "label": "Consequentialism",
        "x": 366,
        "y": -1265,
        "value": 128
    },
    {
        "id": 244,
        "label": "Conservation Biology",
        "x": 3186,
        "y": 2130,
        "value": 12
    },
    {
        "id": 245,
        "label": "Conservatism",
        "x": -600,
        "y": -1007,
        "value": 26
    },
    {
        "id": 246,
        "label": "Constitutionalism",
        "x": -2154,
        "y": 487,
        "value": 30
    },
    {
        "id": 247,
        "label": "Constructive Empiricism",
        "x": 1476,
        "y": -2698,
        "value": 20
    },
    {
        "id": 248,
        "label": "Epistemic Contextualism",
        "x": 1754,
        "y": -2996,
        "value": 24
    },
    {
        "id": 249,
        "label": "Continental Rationalism",
        "x": -702,
        "y": 53,
        "value": 42
    },
    {
        "id": 250,
        "label": "Continuity and Infinitesimals",
        "x": -754,
        "y": -952,
        "value": 52
    },
    {
        "id": 251,
        "label": "The Continuum Hypothesis",
        "x": 1291,
        "y": 441,
        "value": 16
    },
    {
        "id": 252,
        "label": "Contractarianism",
        "x": -1056,
        "y": -1359,
        "value": 36
    },
    {
        "id": 253,
        "label": "Theories of the Common Law of Contracts",
        "x": -2315,
        "y": -3022,
        "value": 12
    },
    {
        "id": 254,
        "label": "Contractualism",
        "x": -65,
        "y": -785,
        "value": 38
    },
    {
        "id": 255,
        "label": "Contradiction",
        "x": 1406,
        "y": -2889,
        "value": 38
    },
    {
        "id": 256,
        "label": "Convention",
        "x": 1417,
        "y": -2515,
        "value": 50
    },
    {
        "id": 257,
        "label": "Lady Anne Conway",
        "x": -1807,
        "y": -975,
        "value": 20
    },
    {
        "id": 258,
        "label": "Anna Julia Cooper",
        "x": 1777,
        "y": 3833,
        "value": 14
    },
    {
        "id": 259,
        "label": "Nicolaus Copernicus",
        "x": -2506,
        "y": -1525,
        "value": 24
    },
    {
        "id": 260,
        "label": "G\u00e9raud de Cordemoy",
        "x": -2573,
        "y": 1537,
        "value": 18
    },
    {
        "id": 261,
        "label": "Corruption",
        "x": 3024,
        "y": 406,
        "value": 8
    },
    {
        "id": 262,
        "label": "Cosmological Argument",
        "x": 623,
        "y": 67,
        "value": 40
    },
    {
        "id": 263,
        "label": "Philosophy of Cosmology",
        "x": 583,
        "y": -4243,
        "value": 10
    },
    {
        "id": 264,
        "label": "Cosmopolitanism",
        "x": -1211,
        "y": 1053,
        "value": 60
    },
    {
        "id": 265,
        "label": "Counterfactuals",
        "x": 2487,
        "y": -3695,
        "value": 24
    },
    {
        "id": 266,
        "label": "Possible Objects",
        "x": 2926,
        "y": -2096,
        "value": 56
    },
    {
        "id": 267,
        "label": "William Crathorn",
        "x": -3471,
        "y": -482,
        "value": 20
    },
    {
        "id": 268,
        "label": "Creation and Conservation",
        "x": -2316,
        "y": 3197,
        "value": 10
    },
    {
        "id": 269,
        "label": "Creationism",
        "x": 2764,
        "y": -12,
        "value": 22
    },
    {
        "id": 270,
        "label": "Hasdai Crescas",
        "x": -2040,
        "y": -378,
        "value": 28
    },
    {
        "id": 271,
        "label": "Theories of Criminal Law",
        "x": -1649,
        "y": 1852,
        "value": 16
    },
    {
        "id": 272,
        "label": "Critical Theory",
        "x": -51,
        "y": 1501,
        "value": 38
    },
    {
        "id": 273,
        "label": "Critical Thinking",
        "x": -681,
        "y": 920,
        "value": 20
    },
    {
        "id": 274,
        "label": "Alexander Crummell",
        "x": 2212,
        "y": 2942,
        "value": 20
    },
    {
        "id": 275,
        "label": "Cultural Evolution",
        "x": 3500,
        "y": 1101,
        "value": 28
    },
    {
        "id": 276,
        "label": "The Ethics of Cultural Heritage ",
        "x": 1020,
        "y": 2555,
        "value": 22
    },
    {
        "id": 277,
        "label": "Culture",
        "x": 763,
        "y": 3002,
        "value": 12
    },
    {
        "id": 278,
        "label": "Curry\u2019s Paradox",
        "x": 290,
        "y": -3005,
        "value": 28
    },
    {
        "id": 279,
        "label": "Cusanus, Nicolaus [Nicolas of Cusa]",
        "x": -2022,
        "y": 929,
        "value": 32
    },
    {
        "id": 280,
        "label": "Peter Damian",
        "x": 1396,
        "y": 1484,
        "value": 16
    },
    {
        "id": 281,
        "label": "The Philosophy of Dance",
        "x": 3872,
        "y": -2148,
        "value": 18
    },
    {
        "id": 282,
        "label": "Dante Alighieri",
        "x": -1090,
        "y": 1275,
        "value": 28
    },
    {
        "id": 283,
        "label": "Daoism",
        "x": 4908,
        "y": -3412,
        "value": 32
    },
    {
        "id": 284,
        "label": "Darwinism",
        "x": 2611,
        "y": 624,
        "value": 54
    },
    {
        "id": 285,
        "label": "Martin Heidegger",
        "x": 1071,
        "y": 1459,
        "value": 86
    },
    {
        "id": 286,
        "label": "Abraham Ibn Daud",
        "x": -1632,
        "y": 2539,
        "value": 14
    },
    {
        "id": 287,
        "label": "David",
        "x": -4502,
        "y": 1072,
        "value": 18
    },
    {
        "id": 288,
        "label": "Donald Davidson",
        "x": 2407,
        "y": -1704,
        "value": 64
    },
    {
        "id": 289,
        "label": "Death",
        "x": 447,
        "y": -83,
        "value": 28
    },
    {
        "id": 290,
        "label": "Decision Theory",
        "x": 211,
        "y": -4318,
        "value": 26
    },
    {
        "id": 291,
        "label": "Defaults in Semantics and Pragmatics",
        "x": 2840,
        "y": -3450,
        "value": 26
    },
    {
        "id": 292,
        "label": "Definitions",
        "x": 1620,
        "y": -1439,
        "value": 24
    },
    {
        "id": 293,
        "label": "Gilles Deleuze",
        "x": 696,
        "y": 1860,
        "value": 16
    },
    {
        "id": 294,
        "label": "Elijah Delmedigo",
        "x": -4655,
        "y": -1053,
        "value": 8
    },
    {
        "id": 295,
        "label": "Delusion",
        "x": 3457,
        "y": -695,
        "value": 24
    },
    {
        "id": 296,
        "label": "Science and Pseudo-Science",
        "x": 738,
        "y": -63,
        "value": 26
    },
    {
        "id": 297,
        "label": "Democracy",
        "x": -1546,
        "y": -154,
        "value": 88
    },
    {
        "id": 298,
        "label": "Democritus",
        "x": -2519,
        "y": -2334,
        "value": 26
    },
    {
        "id": 299,
        "label": "Indexicals",
        "x": 2468,
        "y": -2923,
        "value": 44
    },
    {
        "id": 300,
        "label": "Reference",
        "x": 2120,
        "y": -2184,
        "value": 84
    },
    {
        "id": 301,
        "label": "Deontological Ethics",
        "x": 161,
        "y": -310,
        "value": 34
    },
    {
        "id": 302,
        "label": "Ontological Dependence",
        "x": 3057,
        "y": -1876,
        "value": 50
    },
    {
        "id": 303,
        "label": "Depiction",
        "x": 4143,
        "y": -2512,
        "value": 12
    },
    {
        "id": 304,
        "label": "Jacques Derrida",
        "x": 1490,
        "y": 1372,
        "value": 26
    },
    {
        "id": 305,
        "label": "Ren\u00e9 Descartes",
        "x": -973,
        "y": -481,
        "value": 132
    },
    {
        "id": 306,
        "label": "Descriptions",
        "x": 1974,
        "y": -2555,
        "value": 58
    },
    {
        "id": 307,
        "label": "Desert",
        "x": -354,
        "y": -1145,
        "value": 26
    },
    {
        "id": 308,
        "label": "Robert Desgabets",
        "x": -2807,
        "y": 372,
        "value": 14
    },
    {
        "id": 309,
        "label": "Teleological Arguments for God\u2019s Existence",
        "x": 1020,
        "y": -681,
        "value": 28
    },
    {
        "id": 310,
        "label": "Desire",
        "x": 928,
        "y": -1337,
        "value": 36
    },
    {
        "id": 311,
        "label": "Determinables and Determinates",
        "x": 2767,
        "y": -1641,
        "value": 28
    },
    {
        "id": 312,
        "label": "Developmental Biology",
        "x": 1508,
        "y": 218,
        "value": 60
    },
    {
        "id": 313,
        "label": "John Dewey",
        "x": 500,
        "y": 928,
        "value": 82
    },
    {
        "id": 314,
        "label": "Dharmak\u012brti",
        "x": 5025,
        "y": -889,
        "value": 26
    },
    {
        "id": 315,
        "label": "Diagrams",
        "x": 3681,
        "y": 2063,
        "value": 6
    },
    {
        "id": 316,
        "label": "Dialectical School",
        "x": -726,
        "y": -2333,
        "value": 28
    },
    {
        "id": 317,
        "label": "Hegel\u2019s Dialectics",
        "x": -389,
        "y": 952,
        "value": 24
    },
    {
        "id": 318,
        "label": "Dialetheism",
        "x": 1643,
        "y": -2788,
        "value": 40
    },
    {
        "id": 319,
        "label": "Denis Diderot",
        "x": -1116,
        "y": -1221,
        "value": 36
    },
    {
        "id": 320,
        "label": "Dietrich of Freiberg",
        "x": -1290,
        "y": 2493,
        "value": 20
    },
    {
        "id": 321,
        "label": "The Philosophy of Digital Art",
        "x": 4356,
        "y": -3063,
        "value": 10
    },
    {
        "id": 322,
        "label": "Wilhelm Dilthey",
        "x": 1042,
        "y": 2301,
        "value": 42
    },
    {
        "id": 323,
        "label": "Diodorus Cronus",
        "x": -1365,
        "y": -2051,
        "value": 26
    },
    {
        "id": 324,
        "label": "Pseudo-Dionysius the Areopagite",
        "x": -1672,
        "y": 2049,
        "value": 34
    },
    {
        "id": 325,
        "label": "The Problem of Dirty Hands",
        "x": -1898,
        "y": 2102,
        "value": 18
    },
    {
        "id": 326,
        "label": "Disagreement",
        "x": -635,
        "y": -5098,
        "value": 6
    },
    {
        "id": 327,
        "label": "Discourse Representation Theory",
        "x": 3507,
        "y": -3309,
        "value": 32
    },
    {
        "id": 328,
        "label": "Discrimination",
        "x": -1085,
        "y": 2483,
        "value": 26
    },
    {
        "id": 329,
        "label": "Concepts of Disease and Health",
        "x": 1549,
        "y": -643,
        "value": 24
    },
    {
        "id": 330,
        "label": "Disjunction",
        "x": 2009,
        "y": -3954,
        "value": 22
    },
    {
        "id": 331,
        "label": "Dispositions",
        "x": 1707,
        "y": -1699,
        "value": 48
    },
    {
        "id": 332,
        "label": "The Sophists",
        "x": -2853,
        "y": -2393,
        "value": 20
    },
    {
        "id": 333,
        "label": "Distributive Justice",
        "x": -1155,
        "y": -88,
        "value": 70
    },
    {
        "id": 334,
        "label": "Doing vs. Allowing Harm",
        "x": 167,
        "y": 2171,
        "value": 18
    },
    {
        "id": 335,
        "label": "Marriage and Domestic Partnership",
        "x": -2383,
        "y": 708,
        "value": 20
    },
    {
        "id": 336,
        "label": "Domination",
        "x": -2104,
        "y": 2693,
        "value": 10
    },
    {
        "id": 337,
        "label": "The Donation and Sale of Human Eggs and Sperm",
        "x": -366,
        "y": 2796,
        "value": 22
    },
    {
        "id": 338,
        "label": "The Donation of Human Organs",
        "x": -1461,
        "y": 1123,
        "value": 26
    },
    {
        "id": 339,
        "label": "Double Consciousness",
        "x": 2307,
        "y": 3474,
        "value": 14
    },
    {
        "id": 340,
        "label": "Doctrine of Double Effect",
        "x": 978,
        "y": 1591,
        "value": 24
    },
    {
        "id": 341,
        "label": "Frederick Douglass",
        "x": 1668,
        "y": 3448,
        "value": 22
    },
    {
        "id": 342,
        "label": "Dreams and Dreaming",
        "x": 1556,
        "y": -1794,
        "value": 20
    },
    {
        "id": 343,
        "label": "Dualism",
        "x": 1481,
        "y": -996,
        "value": 78
    },
    {
        "id": 344,
        "label": "W.E.B. Du Bois",
        "x": 1413,
        "y": 2852,
        "value": 36
    },
    {
        "id": 345,
        "label": "Jean-Baptiste Du Bos",
        "x": 1051,
        "y": -4404,
        "value": 6
    },
    {
        "id": 346,
        "label": "Pierre Duhem",
        "x": -255,
        "y": -1295,
        "value": 52
    },
    {
        "id": 347,
        "label": "John Duns Scotus",
        "x": -816,
        "y": 398,
        "value": 62
    },
    {
        "id": 348,
        "label": "Dutch Book Arguments",
        "x": 701,
        "y": -4567,
        "value": 14
    },
    {
        "id": 349,
        "label": "Dynamic Epistemic Logic",
        "x": 1340,
        "y": -4156,
        "value": 18
    },
    {
        "id": 350,
        "label": "Dynamic Semantics",
        "x": 2612,
        "y": -3431,
        "value": 48
    },
    {
        "id": 351,
        "label": "Analytic Philosophy in Early Modern India",
        "x": 4006,
        "y": -162,
        "value": 24
    },
    {
        "id": 352,
        "label": "Meister Eckhart",
        "x": -788,
        "y": 1798,
        "value": 30
    },
    {
        "id": 353,
        "label": "Ecology",
        "x": 2724,
        "y": 2123,
        "value": 12
    },
    {
        "id": 354,
        "label": "Economics and Economic Justice",
        "x": -1677,
        "y": -1330,
        "value": 46
    },
    {
        "id": 355,
        "label": "Philosophy of Education",
        "x": -719,
        "y": 571,
        "value": 32
    },
    {
        "id": 356,
        "label": "Jonathan Edwards",
        "x": 60,
        "y": 373,
        "value": 24
    },
    {
        "id": 357,
        "label": "Egalitarianism",
        "x": -1355,
        "y": 214,
        "value": 52
    },
    {
        "id": 358,
        "label": "Egoism",
        "x": -137,
        "y": -1324,
        "value": 34
    },
    {
        "id": 359,
        "label": "Christian von Ehrenfels",
        "x": 3844,
        "y": -430,
        "value": 18
    },
    {
        "id": 360,
        "label": "Elias",
        "x": -4413,
        "y": 781,
        "value": 20
    },
    {
        "id": 361,
        "label": "Elisabeth, Princess of Bohemia",
        "x": -3980,
        "y": 536,
        "value": 8
    },
    {
        "id": 362,
        "label": "Emergent Properties",
        "x": 1411,
        "y": -1624,
        "value": 66
    },
    {
        "id": 363,
        "label": "Ralph Waldo Emerson",
        "x": -460,
        "y": 705,
        "value": 48
    },
    {
        "id": 364,
        "label": "Emotion",
        "x": 1744,
        "y": -446,
        "value": 88
    },
    {
        "id": 365,
        "label": "Empathy",
        "x": 2231,
        "y": -60,
        "value": 22
    },
    {
        "id": 366,
        "label": "Empedocles",
        "x": -3209,
        "y": -1728,
        "value": 24
    },
    {
        "id": 367,
        "label": "Rationalism vs. Empiricism",
        "x": 455,
        "y": -509,
        "value": 70
    },
    {
        "id": 368,
        "label": "Enlightenment",
        "x": -944,
        "y": -153,
        "value": 60
    },
    {
        "id": 369,
        "label": "Logical Consequence",
        "x": 783,
        "y": -1478,
        "value": 60
    },
    {
        "id": 370,
        "label": "Envy",
        "x": -2136,
        "y": -1718,
        "value": 12
    },
    {
        "id": 371,
        "label": "Epictetus",
        "x": -2893,
        "y": -1379,
        "value": 14
    },
    {
        "id": 372,
        "label": "Epicurus",
        "x": -1501,
        "y": -1554,
        "value": 42
    },
    {
        "id": 373,
        "label": "Epiphenomenalism",
        "x": 2223,
        "y": -626,
        "value": 40
    },
    {
        "id": 374,
        "label": "Episteme and Techne",
        "x": -2187,
        "y": -1296,
        "value": 18
    },
    {
        "id": 375,
        "label": "Epistemic Closure",
        "x": 634,
        "y": -2542,
        "value": 24
    },
    {
        "id": 376,
        "label": "Epistemic Paradoxes",
        "x": 1147,
        "y": -3579,
        "value": 36
    },
    {
        "id": 377,
        "label": "Epistemic Self-Doubt",
        "x": 452,
        "y": -4092,
        "value": 12
    },
    {
        "id": 378,
        "label": "Epistemic Utility Arguments for Probabilism",
        "x": 97,
        "y": -4680,
        "value": 16
    },
    {
        "id": 379,
        "label": "Epistemology",
        "x": 1359,
        "y": -1912,
        "value": 64
    },
    {
        "id": 380,
        "label": "Formal Epistemology",
        "x": 372,
        "y": -3837,
        "value": 46
    },
    {
        "id": 381,
        "label": "The Epsilon Calculus",
        "x": 1698,
        "y": -969,
        "value": 16
    },
    {
        "id": 382,
        "label": "Equality",
        "x": -1511,
        "y": -509,
        "value": 46
    },
    {
        "id": 383,
        "label": "The Equivalence of Mass and Energy",
        "x": -2240,
        "y": -4598,
        "value": 4
    },
    {
        "id": 384,
        "label": "Desiderius Erasmus",
        "x": -1757,
        "y": 102,
        "value": 44
    },
    {
        "id": 385,
        "label": "The Ergodic Hierarchy",
        "x": 5922,
        "y": 254,
        "value": 2
    },
    {
        "id": 386,
        "label": "John Scottus Eriugena",
        "x": -1142,
        "y": 1381,
        "value": 28
    },
    {
        "id": 387,
        "label": "Locke on Real Essence",
        "x": 3465,
        "y": -3903,
        "value": 4
    },
    {
        "id": 388,
        "label": "Eternity in Christian Thought",
        "x": 663,
        "y": 463,
        "value": 30
    },
    {
        "id": 389,
        "label": "African Ethics",
        "x": 2910,
        "y": 3415,
        "value": 6
    },
    {
        "id": 390,
        "label": "Eugenics",
        "x": 720,
        "y": 3290,
        "value": 14
    },
    {
        "id": 391,
        "label": "Events",
        "x": 3258,
        "y": -2203,
        "value": 52
    },
    {
        "id": 392,
        "label": "Evidence",
        "x": -167,
        "y": -2761,
        "value": 26
    },
    {
        "id": 393,
        "label": "Evolution",
        "x": 2927,
        "y": 812,
        "value": 88
    },
    {
        "id": 394,
        "label": "Morality and Evolutionary Biology",
        "x": 3129,
        "y": 790,
        "value": 22
    },
    {
        "id": 395,
        "label": "Evolutionary Game Theory",
        "x": 2570,
        "y": -2215,
        "value": 30
    },
    {
        "id": 396,
        "label": "Evolutionary Psychology",
        "x": 3750,
        "y": -226,
        "value": 28
    },
    {
        "id": 397,
        "label": "Existentialism",
        "x": 1562,
        "y": 2010,
        "value": 72
    },
    {
        "id": 398,
        "label": "Experimental Moral Philosophy",
        "x": 1509,
        "y": 29,
        "value": 28
    },
    {
        "id": 399,
        "label": "Experimental Philosophy",
        "x": -1265,
        "y": -1565,
        "value": 8
    },
    {
        "id": 400,
        "label": "Exploitation",
        "x": -1965,
        "y": 762,
        "value": 42
    },
    {
        "id": 401,
        "label": "Externalism About the Mind",
        "x": 2695,
        "y": -1993,
        "value": 42
    },
    {
        "id": 402,
        "label": "Intrinsic vs. Extrinsic Properties",
        "x": 3233,
        "y": -1789,
        "value": 34
    },
    {
        "id": 403,
        "label": "Abraham Ibn Ezra",
        "x": -2329,
        "y": 2506,
        "value": 18
    },
    {
        "id": 404,
        "label": "Facts",
        "x": 2285,
        "y": -1902,
        "value": 44
    },
    {
        "id": 405,
        "label": "Faith",
        "x": 845,
        "y": 1382,
        "value": 40
    },
    {
        "id": 406,
        "label": "Shem Tov Ibn Falaquera",
        "x": -3187,
        "y": -310,
        "value": 8
    },
    {
        "id": 407,
        "label": "Fallacies",
        "x": -568,
        "y": 1990,
        "value": 10
    },
    {
        "id": 408,
        "label": "Frantz Fanon",
        "x": 1919,
        "y": 3487,
        "value": 14
    },
    {
        "id": 409,
        "label": "Fatalism",
        "x": 1306,
        "y": -2325,
        "value": 32
    },
    {
        "id": 410,
        "label": "Gustav Theodor Fechner",
        "x": -773,
        "y": -68,
        "value": 16
    },
    {
        "id": 411,
        "label": "Federalism",
        "x": -1462,
        "y": 1668,
        "value": 22
    },
    {
        "id": 412,
        "label": "Herbert Feigl",
        "x": 121,
        "y": -2810,
        "value": 16
    },
    {
        "id": 413,
        "label": "Margaret Fell",
        "x": -2846,
        "y": -416,
        "value": 14
    },
    {
        "id": 414,
        "label": "Feminist Philosophy",
        "x": -1045,
        "y": 1059,
        "value": 52
    },
    {
        "id": 415,
        "label": "Ludwig Andreas Feuerbach",
        "x": -555,
        "y": 476,
        "value": 40
    },
    {
        "id": 416,
        "label": "Paul Feyerabend",
        "x": 220,
        "y": -1553,
        "value": 70
    },
    {
        "id": 417,
        "label": "Johann Gottlieb Fichte",
        "x": -408,
        "y": 1749,
        "value": 42
    },
    {
        "id": 418,
        "label": "Marsilio Ficino",
        "x": -2794,
        "y": 774,
        "value": 38
    },
    {
        "id": 419,
        "label": "Fiction",
        "x": 4006,
        "y": -1547,
        "value": 20
    },
    {
        "id": 420,
        "label": "Fictional Entities",
        "x": 4089,
        "y": -1043,
        "value": 24
    },
    {
        "id": 421,
        "label": "Fictionalism",
        "x": 2687,
        "y": -1045,
        "value": 42
    },
    {
        "id": 422,
        "label": "Fideism",
        "x": 52,
        "y": -169,
        "value": 20
    },
    {
        "id": 423,
        "label": "Philosophy of Film",
        "x": 3985,
        "y": -2762,
        "value": 16
    },
    {
        "id": 424,
        "label": "Philosophy of Money and Finance",
        "x": -645,
        "y": -2867,
        "value": 20
    },
    {
        "id": 425,
        "label": "John Niemeyer Findlay",
        "x": 1420,
        "y": -100,
        "value": 8
    },
    {
        "id": 426,
        "label": "Fine-Tuning",
        "x": 1347,
        "y": -3500,
        "value": 12
    },
    {
        "id": 427,
        "label": "Fitch\u2019s Paradox of Knowability",
        "x": 1545,
        "y": -4237,
        "value": 12
    },
    {
        "id": 428,
        "label": "Fitness",
        "x": 3601,
        "y": 753,
        "value": 38
    },
    {
        "id": 429,
        "label": "Fitting Attitude Theories of Value",
        "x": 4081,
        "y": 452,
        "value": 16
    },
    {
        "id": 430,
        "label": "Richard FitzRalph",
        "x": -4383,
        "y": -330,
        "value": 10
    },
    {
        "id": 431,
        "label": "Ludwik Fleck",
        "x": -616,
        "y": -3240,
        "value": 18
    },
    {
        "id": 432,
        "label": "Philippa Foot",
        "x": 2524,
        "y": 1025,
        "value": 18
    },
    {
        "id": 433,
        "label": "Foreknowledge and Free Will",
        "x": -144,
        "y": -539,
        "value": 52
    },
    {
        "id": 434,
        "label": "Forgiveness",
        "x": 3383,
        "y": 67,
        "value": 10
    },
    {
        "id": 435,
        "label": "Plato\u2019s Middle Period Metaphysics and Epistemology",
        "x": 200,
        "y": -1229,
        "value": 16
    },
    {
        "id": 436,
        "label": "Form vs. Matter",
        "x": -2214,
        "y": 3,
        "value": 12
    },
    {
        "id": 437,
        "label": "Michel Foucault",
        "x": -96,
        "y": 506,
        "value": 34
    },
    {
        "id": 438,
        "label": "Temporal Parts",
        "x": 2592,
        "y": -2516,
        "value": 58
    },
    {
        "id": 439,
        "label": "The Frame Problem",
        "x": 3572,
        "y": -1364,
        "value": 14
    },
    {
        "id": 440,
        "label": "Francis of Marchia",
        "x": -3822,
        "y": -286,
        "value": 12
    },
    {
        "id": 441,
        "label": "The Free Rider Problem",
        "x": -1794,
        "y": -2349,
        "value": 20
    },
    {
        "id": 442,
        "label": "Free Will",
        "x": 1084,
        "y": -835,
        "value": 112
    },
    {
        "id": 443,
        "label": "Gottlob Frege",
        "x": 1468,
        "y": -1394,
        "value": 96
    },
    {
        "id": 444,
        "label": "Friendship",
        "x": -651,
        "y": -579,
        "value": 38
    },
    {
        "id": 445,
        "label": "Functionalism",
        "x": 2531,
        "y": -1043,
        "value": 82
    },
    {
        "id": 446,
        "label": "Fundamentality",
        "x": 2478,
        "y": -1810,
        "value": 32
    },
    {
        "id": 447,
        "label": "Future Contingents",
        "x": 1092,
        "y": -3270,
        "value": 20
    },
    {
        "id": 448,
        "label": "Hans-Georg Gadamer",
        "x": 1105,
        "y": 2003,
        "value": 24
    },
    {
        "id": 449,
        "label": "Galen",
        "x": -2394,
        "y": -848,
        "value": 12
    },
    {
        "id": 450,
        "label": "Galileo Galilei",
        "x": -1955,
        "y": -1593,
        "value": 34
    },
    {
        "id": 451,
        "label": "Game Theory",
        "x": 451,
        "y": -3374,
        "value": 32
    },
    {
        "id": 452,
        "label": "Ga\u1e45ge\u015ba",
        "x": 2671,
        "y": 4533,
        "value": 2
    },
    {
        "id": 453,
        "label": "Pierre Gassendi",
        "x": -1489,
        "y": -1346,
        "value": 44
    },
    {
        "id": 454,
        "label": "Gelukpa [dge lugs pa]",
        "x": 7363,
        "y": -728,
        "value": 10
    },
    {
        "id": 455,
        "label": "Gene",
        "x": 3275,
        "y": 1138,
        "value": 48
    },
    {
        "id": 456,
        "label": "Generalized Quantifiers",
        "x": 3284,
        "y": -2526,
        "value": 16
    },
    {
        "id": 457,
        "label": "Generic Generalizations",
        "x": 3808,
        "y": -2535,
        "value": 12
    },
    {
        "id": 458,
        "label": "Genetic Drift",
        "x": 3328,
        "y": 334,
        "value": 34
    },
    {
        "id": 459,
        "label": "Genetics",
        "x": 2236,
        "y": 1031,
        "value": 86
    },
    {
        "id": 460,
        "label": "Genomics and Postgenomics",
        "x": 3175,
        "y": 1857,
        "value": 24
    },
    {
        "id": 461,
        "label": "Gersonides",
        "x": -2628,
        "y": 1302,
        "value": 16
    },
    {
        "id": 462,
        "label": "Foundationalist Theories of Epistemic Justification",
        "x": 979,
        "y": -2622,
        "value": 36
    },
    {
        "id": 463,
        "label": "Global Democracy",
        "x": -2129,
        "y": 298,
        "value": 22
    },
    {
        "id": 464,
        "label": "Globalization",
        "x": -1612,
        "y": 1371,
        "value": 32
    },
    {
        "id": 465,
        "label": "Global Justice",
        "x": -1577,
        "y": 729,
        "value": 64
    },
    {
        "id": 466,
        "label": "Godfrey of Fontaines",
        "x": 1092,
        "y": 3356,
        "value": 20
    },
    {
        "id": 467,
        "label": "William Godwin",
        "x": -1980,
        "y": -2847,
        "value": 12
    },
    {
        "id": 468,
        "label": "Kurt G\u00f6del",
        "x": 772,
        "y": -749,
        "value": 52
    },
    {
        "id": 469,
        "label": "Nelson Goodman",
        "x": 1570,
        "y": -2371,
        "value": 26
    },
    {
        "id": 470,
        "label": "Perfect Goodness",
        "x": 1097,
        "y": 1729,
        "value": 18
    },
    {
        "id": 471,
        "label": "Gorampa [go rams pa]",
        "x": 8170,
        "y": 607,
        "value": 2
    },
    {
        "id": 472,
        "label": "Gratitude",
        "x": -30,
        "y": -931,
        "value": 16
    },
    {
        "id": 473,
        "label": "Thomas Hill Green",
        "x": 262,
        "y": 894,
        "value": 30
    },
    {
        "id": 474,
        "label": "Gregory of Rimini",
        "x": -3540,
        "y": 162,
        "value": 18
    },
    {
        "id": 475,
        "label": "Paul Grice",
        "x": 2562,
        "y": -3037,
        "value": 42
    },
    {
        "id": 476,
        "label": "Robert Grosseteste",
        "x": -2078,
        "y": 1462,
        "value": 12
    },
    {
        "id": 477,
        "label": "Hugo Grotius",
        "x": -1147,
        "y": 3343,
        "value": 12
    },
    {
        "id": 478,
        "label": "Metaphysical Grounding",
        "x": 3070,
        "y": -2123,
        "value": 42
    },
    {
        "id": 479,
        "label": "Group Rights",
        "x": -414,
        "y": 1916,
        "value": 26
    },
    {
        "id": 480,
        "label": "J\u00fcrgen Habermas",
        "x": 144,
        "y": 1149,
        "value": 42
    },
    {
        "id": 481,
        "label": "Haecceitism",
        "x": 3591,
        "y": -2988,
        "value": 20
    },
    {
        "id": 482,
        "label": "Judah Halevi",
        "x": -594,
        "y": 646,
        "value": 44
    },
    {
        "id": 483,
        "label": "Johann Georg Hamann",
        "x": 616,
        "y": 1248,
        "value": 26
    },
    {
        "id": 484,
        "label": "Happiness",
        "x": -400,
        "y": 392,
        "value": 40
    },
    {
        "id": 485,
        "label": "Richard Mervyn Hare",
        "x": 3848,
        "y": 575,
        "value": 12
    },
    {
        "id": 486,
        "label": "David Hartley",
        "x": -562,
        "y": -66,
        "value": 12
    },
    {
        "id": 487,
        "label": "Nicolai Hartmann",
        "x": 3139,
        "y": -3501,
        "value": 6
    },
    {
        "id": 488,
        "label": "Charles Hartshorne",
        "x": 530,
        "y": 418,
        "value": 30
    },
    {
        "id": 489,
        "label": "Friedrich Hayek",
        "x": -657,
        "y": -179,
        "value": 18
    },
    {
        "id": 490,
        "label": "Heaven and Hell in Christian Thought",
        "x": 898,
        "y": 575,
        "value": 12
    },
    {
        "id": 491,
        "label": "Hedonism",
        "x": 414,
        "y": -1099,
        "value": 48
    },
    {
        "id": 492,
        "label": "Georg Wilhelm Friedrich Hegel",
        "x": -37,
        "y": 1061,
        "value": 114
    },
    {
        "id": 493,
        "label": "Hermann von Helmholtz",
        "x": 829,
        "y": 177,
        "value": 44
    },
    {
        "id": 494,
        "label": "Carl Hempel",
        "x": 1110,
        "y": -2442,
        "value": 44
    },
    {
        "id": 495,
        "label": "Michel Henry",
        "x": 2564,
        "y": 1895,
        "value": 16
    },
    {
        "id": 496,
        "label": "Henry of Ghent",
        "x": 746,
        "y": 4049,
        "value": 18
    },
    {
        "id": 497,
        "label": "Heraclitus",
        "x": -1735,
        "y": -1552,
        "value": 30
    },
    {
        "id": 498,
        "label": "Johann Friedrich Herbart",
        "x": -2631,
        "y": -1261,
        "value": 6
    },
    {
        "id": 499,
        "label": "Johann Gottfried von Herder",
        "x": 493,
        "y": 1370,
        "value": 62
    },
    {
        "id": 500,
        "label": "Heritability",
        "x": 2873,
        "y": 1668,
        "value": 44
    },
    {
        "id": 501,
        "label": "Hermeneutics",
        "x": 930,
        "y": 911,
        "value": 60
    },
    {
        "id": 502,
        "label": "William Heytesbury",
        "x": -2404,
        "y": -1347,
        "value": 26
    },
    {
        "id": 503,
        "label": "Hiddenness of God",
        "x": 3192,
        "y": 157,
        "value": 14
    },
    {
        "id": 504,
        "label": "Philosophy of History",
        "x": 737,
        "y": 2071,
        "value": 26
    },
    {
        "id": 505,
        "label": "Thomas Hobbes",
        "x": -534,
        "y": -663,
        "value": 72
    },
    {
        "id": 506,
        "label": "Paul-Henri Thiry (Baron) d\u2019Holbach",
        "x": -3132,
        "y": -1353,
        "value": 8
    },
    {
        "id": 507,
        "label": "Holes",
        "x": 4381,
        "y": -1306,
        "value": 10
    },
    {
        "id": 508,
        "label": "Robert Holkot",
        "x": -1883,
        "y": 10,
        "value": 22
    },
    {
        "id": 509,
        "label": "Homosexuality",
        "x": -1767,
        "y": 2599,
        "value": 16
    },
    {
        "id": 510,
        "label": "Sidney Hook",
        "x": -434,
        "y": 2230,
        "value": 12
    },
    {
        "id": 511,
        "label": "Hope",
        "x": 1629,
        "y": 2250,
        "value": 16
    },
    {
        "id": 512,
        "label": "Max Horkheimer",
        "x": 312,
        "y": 2340,
        "value": 28
    },
    {
        "id": 513,
        "label": "Human Enhancement",
        "x": 2043,
        "y": 343,
        "value": 36
    },
    {
        "id": 514,
        "label": "The Human Genome Project",
        "x": 2443,
        "y": 1209,
        "value": 36
    },
    {
        "id": 515,
        "label": "Human Rights",
        "x": -1573,
        "y": 564,
        "value": 50
    },
    {
        "id": 516,
        "label": "Wilhelm von Humboldt",
        "x": -75,
        "y": 3022,
        "value": 18
    },
    {
        "id": 517,
        "label": "David Hume",
        "x": 100,
        "y": -838,
        "value": 108
    },
    {
        "id": 518,
        "label": "Modesty and Humility",
        "x": -128,
        "y": -4337,
        "value": 16
    },
    {
        "id": 519,
        "label": "Philosophy of Humor",
        "x": -118,
        "y": 360,
        "value": 26
    },
    {
        "id": 520,
        "label": "Edmund Husserl",
        "x": 2154,
        "y": 163,
        "value": 114
    },
    {
        "id": 521,
        "label": "Hybrid Logic",
        "x": 2093,
        "y": -4526,
        "value": 10
    },
    {
        "id": 522,
        "label": "Iamblichus",
        "x": -3609,
        "y": 807,
        "value": 30
    },
    {
        "id": 523,
        "label": "Ibn \u2018Arab\u00ee",
        "x": -5388,
        "y": 916,
        "value": 10
    },
    {
        "id": 524,
        "label": "Ibn B\u00e2jja [Avempace]",
        "x": -2003,
        "y": 2867,
        "value": 8
    },
    {
        "id": 525,
        "label": "Ibn Kammuna",
        "x": -3059,
        "y": 583,
        "value": 16
    },
    {
        "id": 526,
        "label": "Samuel Ibn Tibbon",
        "x": -2695,
        "y": 1006,
        "value": 32
    },
    {
        "id": 527,
        "label": "Idealism",
        "x": 302,
        "y": -36,
        "value": 124
    },
    {
        "id": 528,
        "label": "Identity",
        "x": 2052,
        "y": -903,
        "value": 50
    },
    {
        "id": 529,
        "label": "Identity Politics",
        "x": -157,
        "y": 2449,
        "value": 40
    },
    {
        "id": 530,
        "label": "The Mind/Brain Identity Theory",
        "x": 1878,
        "y": -1653,
        "value": 48
    },
    {
        "id": 531,
        "label": "Law and Ideology",
        "x": -1693,
        "y": 2275,
        "value": 14
    },
    {
        "id": 532,
        "label": "Idiolects",
        "x": 3248,
        "y": -2006,
        "value": 34
    },
    {
        "id": 533,
        "label": "Ikhw\u00e2n al-Saf\u00e2\u2019",
        "x": -3586,
        "y": 1994,
        "value": 12
    },
    {
        "id": 534,
        "label": "Mental Imagery",
        "x": 2540,
        "y": 179,
        "value": 38
    },
    {
        "id": 535,
        "label": "Imagination",
        "x": 2248,
        "y": -1191,
        "value": 64
    },
    {
        "id": 536,
        "label": "Imaginative Resistance",
        "x": 4180,
        "y": 976,
        "value": 8
    },
    {
        "id": 537,
        "label": "The Turing Test",
        "x": 3479,
        "y": -1932,
        "value": 16
    },
    {
        "id": 538,
        "label": "Immigration",
        "x": -1368,
        "y": 2978,
        "value": 12
    },
    {
        "id": 539,
        "label": "Philosophy of Immunology",
        "x": 2740,
        "y": 1441,
        "value": 28
    },
    {
        "id": 540,
        "label": "Immutability",
        "x": 1230,
        "y": 1394,
        "value": 14
    },
    {
        "id": 541,
        "label": "Impartiality",
        "x": 12,
        "y": -1572,
        "value": 48
    },
    {
        "id": 542,
        "label": "Implicature",
        "x": 2157,
        "y": -3483,
        "value": 44
    },
    {
        "id": 543,
        "label": "Impossible Worlds",
        "x": 3317,
        "y": -2726,
        "value": 22
    },
    {
        "id": 544,
        "label": "Incommensurable Values",
        "x": -109,
        "y": -2947,
        "value": 12
    },
    {
        "id": 545,
        "label": "Methodological Individualism",
        "x": 1191,
        "y": 38,
        "value": 38
    },
    {
        "id": 546,
        "label": "Inductive Logic",
        "x": -38,
        "y": -3102,
        "value": 30
    },
    {
        "id": 547,
        "label": "Space and Time: Inertial Frames",
        "x": -1908,
        "y": -4284,
        "value": 8
    },
    {
        "id": 548,
        "label": "Infinite Regress Arguments",
        "x": 3527,
        "y": -2416,
        "value": 14
    },
    {
        "id": 549,
        "label": "Informal Logic",
        "x": -180,
        "y": -61,
        "value": 24
    },
    {
        "id": 550,
        "label": "Information",
        "x": 603,
        "y": -2166,
        "value": 34
    },
    {
        "id": 551,
        "label": "Informed Consent",
        "x": -1870,
        "y": -365,
        "value": 38
    },
    {
        "id": 552,
        "label": "Roman Ingarden",
        "x": 3261,
        "y": -972,
        "value": 34
    },
    {
        "id": 553,
        "label": "Inheritance Systems",
        "x": 3978,
        "y": 1915,
        "value": 16
    },
    {
        "id": 554,
        "label": "The Distinction Between Innate and Acquired Characteristics",
        "x": 2616,
        "y": 452,
        "value": 26
    },
    {
        "id": 555,
        "label": "Insolubles",
        "x": -1295,
        "y": -1103,
        "value": 46
    },
    {
        "id": 556,
        "label": "Instrumental Rationality",
        "x": 2115,
        "y": -1636,
        "value": 24
    },
    {
        "id": 557,
        "label": "Integrity",
        "x": 2848,
        "y": -295,
        "value": 18
    },
    {
        "id": 558,
        "label": "Intensional Transitive Verbs",
        "x": 3443,
        "y": -3550,
        "value": 12
    },
    {
        "id": 559,
        "label": "Intention",
        "x": 1765,
        "y": -2199,
        "value": 32
    },
    {
        "id": 560,
        "label": "Intentionality",
        "x": 2738,
        "y": -420,
        "value": 66
    },
    {
        "id": 561,
        "label": "Reasons for Action: Internal vs. External",
        "x": 3143,
        "y": -2462,
        "value": 14
    },
    {
        "id": 562,
        "label": "Internet Research Ethics",
        "x": -2707,
        "y": -2866,
        "value": 14
    },
    {
        "id": 563,
        "label": "Introspection",
        "x": 2346,
        "y": -309,
        "value": 46
    },
    {
        "id": 564,
        "label": "Intuition",
        "x": 335,
        "y": -979,
        "value": 26
    },
    {
        "id": 565,
        "label": "Intuitionistic Logic",
        "x": 382,
        "y": -1912,
        "value": 40
    },
    {
        "id": 566,
        "label": "Intuitionistic Type Theory",
        "x": -1007,
        "y": 1659,
        "value": 10
    },
    {
        "id": 567,
        "label": "Inverted Qualia",
        "x": 3427,
        "y": -1069,
        "value": 22
    },
    {
        "id": 568,
        "label": "Isaac Israeli",
        "x": -3438,
        "y": 2414,
        "value": 14
    },
    {
        "id": 569,
        "label": "Friedrich Heinrich Jacobi",
        "x": -310,
        "y": 1240,
        "value": 34
    },
    {
        "id": 570,
        "label": "William James",
        "x": 1155,
        "y": 656,
        "value": 80
    },
    {
        "id": 571,
        "label": "James of Viterbo",
        "x": 1294,
        "y": 4238,
        "value": 8
    },
    {
        "id": 572,
        "label": "Japanese Philosophy",
        "x": 5314,
        "y": 2649,
        "value": 12
    },
    {
        "id": 573,
        "label": "Karl Jaspers",
        "x": 407,
        "y": 2502,
        "value": 20
    },
    {
        "id": 574,
        "label": "Jayar\u0101\u015bi",
        "x": 4463,
        "y": -1011,
        "value": 10
    },
    {
        "id": 575,
        "label": "Thomas Jefferson",
        "x": -201,
        "y": 2005,
        "value": 18
    },
    {
        "id": 576,
        "label": "William Stanley Jevons",
        "x": -5715,
        "y": 2059,
        "value": 4
    },
    {
        "id": 577,
        "label": "John of Salisbury",
        "x": 628,
        "y": 797,
        "value": 16
    },
    {
        "id": 578,
        "label": "Emily Elizabeth Constance Jones",
        "x": -2661,
        "y": 501,
        "value": 14
    },
    {
        "id": 579,
        "label": "Justice",
        "x": -1150,
        "y": -468,
        "value": 36
    },
    {
        "id": 580,
        "label": "Immanuel Kant",
        "x": -562,
        "y": 1674,
        "value": 182
    },
    {
        "id": 581,
        "label": "Joseph Kaspi",
        "x": -1371,
        "y": -2895,
        "value": 6
    },
    {
        "id": 582,
        "label": "Johannes Kepler",
        "x": -3364,
        "y": -1895,
        "value": 14
    },
    {
        "id": 583,
        "label": "S\u00f8ren Kierkegaard",
        "x": 810,
        "y": 1741,
        "value": 38
    },
    {
        "id": 584,
        "label": "Richard Kilvington",
        "x": -2911,
        "y": -1053,
        "value": 20
    },
    {
        "id": 585,
        "label": "Robert Kilwardby",
        "x": -1640,
        "y": 2915,
        "value": 12
    },
    {
        "id": 586,
        "label": "The Value of Knowledge",
        "x": -763,
        "y": -3970,
        "value": 8
    },
    {
        "id": 587,
        "label": "Knowledge How",
        "x": -1567,
        "y": -857,
        "value": 8
    },
    {
        "id": 588,
        "label": "The Kochen-Specker Theorem",
        "x": 1804,
        "y": -5583,
        "value": 8
    },
    {
        "id": 589,
        "label": "The Kokugaku (Native Studies) School",
        "x": 5582,
        "y": 3072,
        "value": 8
    },
    {
        "id": 590,
        "label": "Thomas Kuhn",
        "x": 173,
        "y": -1929,
        "value": 58
    },
    {
        "id": 591,
        "label": "Kum\u0101rila",
        "x": 4096,
        "y": -820,
        "value": 14
    },
    {
        "id": 592,
        "label": "K\u016bkai",
        "x": 4045,
        "y": 2485,
        "value": 10
    },
    {
        "id": 593,
        "label": "Jacques Lacan",
        "x": -942,
        "y": 2074,
        "value": 10
    },
    {
        "id": 594,
        "label": "Louis de La Forge",
        "x": -1329,
        "y": 1497,
        "value": 24
    },
    {
        "id": 595,
        "label": "Imre Lakatos",
        "x": -395,
        "y": -997,
        "value": 52
    },
    {
        "id": 596,
        "label": "The Lambda Calculus",
        "x": -711,
        "y": -3561,
        "value": 14
    },
    {
        "id": 597,
        "label": "Friedrich Albert Lange",
        "x": 669,
        "y": 2277,
        "value": 28
    },
    {
        "id": 598,
        "label": "The Language of Thought Hypothesis",
        "x": 2379,
        "y": -1303,
        "value": 62
    },
    {
        "id": 599,
        "label": "Laozi",
        "x": 5132,
        "y": -4212,
        "value": 22
    },
    {
        "id": 600,
        "label": "Large Cardinals and Determinacy",
        "x": 1287,
        "y": 1589,
        "value": 14
    },
    {
        "id": 601,
        "label": "Latin American Philosophy",
        "x": 2471,
        "y": 2556,
        "value": 14
    },
    {
        "id": 602,
        "label": "Latinx Philosophy",
        "x": 2537,
        "y": 3400,
        "value": 10
    },
    {
        "id": 603,
        "label": "Laws of Nature",
        "x": 1599,
        "y": -2057,
        "value": 80
    },
    {
        "id": 604,
        "label": "Perceptual Learning",
        "x": 4260,
        "y": 3190,
        "value": 2
    },
    {
        "id": 605,
        "label": "Formal Learning Theory",
        "x": 1204,
        "y": -2590,
        "value": 30
    },
    {
        "id": 606,
        "label": "Jacques Lef\u00e8vre d\u2019\u00c9taples",
        "x": -3458,
        "y": 394,
        "value": 30
    },
    {
        "id": 607,
        "label": "Legal Obligation and Authority",
        "x": -2327,
        "y": -148,
        "value": 38
    },
    {
        "id": 608,
        "label": "Legal Positivism",
        "x": -2606,
        "y": -149,
        "value": 20
    },
    {
        "id": 609,
        "label": "Legal Punishment",
        "x": -430,
        "y": 1520,
        "value": 22
    },
    {
        "id": 610,
        "label": "Legal Rights",
        "x": -1481,
        "y": 828,
        "value": 20
    },
    {
        "id": 611,
        "label": "Political Legitimacy",
        "x": -1271,
        "y": 342,
        "value": 40
    },
    {
        "id": 612,
        "label": "Antoine Le Grand",
        "x": -2552,
        "y": 2427,
        "value": 8
    },
    {
        "id": 613,
        "label": "Gottfried Wilhelm Leibniz",
        "x": -321,
        "y": -125,
        "value": 94
    },
    {
        "id": 614,
        "label": "Yeshayahu Leibowitz",
        "x": 2912,
        "y": 3137,
        "value": 4
    },
    {
        "id": 615,
        "label": "Stanis\u0142aw Le\u015bniewski",
        "x": 3483,
        "y": -1579,
        "value": 22
    },
    {
        "id": 616,
        "label": "Leucippus",
        "x": -3152,
        "y": -2598,
        "value": 16
    },
    {
        "id": 617,
        "label": "Levels of Organization in Biology",
        "x": 2947,
        "y": 97,
        "value": 18
    },
    {
        "id": 618,
        "label": "Emmanuel Levinas",
        "x": 2043,
        "y": 2276,
        "value": 26
    },
    {
        "id": 619,
        "label": "Clarence Irving Lewis",
        "x": 1838,
        "y": -1830,
        "value": 36
    },
    {
        "id": 620,
        "label": "David Lewis",
        "x": 2164,
        "y": -1968,
        "value": 66
    },
    {
        "id": 621,
        "label": "Liar Paradox",
        "x": 1034,
        "y": -2809,
        "value": 28
    },
    {
        "id": 622,
        "label": "Liberal Feminism",
        "x": -1890,
        "y": 578,
        "value": 22
    },
    {
        "id": 623,
        "label": "Liberalism",
        "x": -61,
        "y": 654,
        "value": 138
    },
    {
        "id": 624,
        "label": "Philosophy of Liberation",
        "x": 2939,
        "y": 3901,
        "value": 8
    },
    {
        "id": 625,
        "label": "Libertarianism",
        "x": -1250,
        "y": -216,
        "value": 42
    },
    {
        "id": 626,
        "label": "Life",
        "x": 2208,
        "y": 488,
        "value": 42
    },
    {
        "id": 627,
        "label": "The Limits of Law",
        "x": -2021,
        "y": 1318,
        "value": 34
    },
    {
        "id": 628,
        "label": "Linear Logic",
        "x": 21,
        "y": -453,
        "value": 14
    },
    {
        "id": 629,
        "label": "Justus Lipsius",
        "x": -5174,
        "y": 1781,
        "value": 2
    },
    {
        "id": 630,
        "label": "Ramon Llull",
        "x": -649,
        "y": 2780,
        "value": 14
    },
    {
        "id": 631,
        "label": "Location and Mereology",
        "x": 3053,
        "y": -2698,
        "value": 34
    },
    {
        "id": 632,
        "label": "Alain LeRoy Locke",
        "x": 2057,
        "y": 2611,
        "value": 24
    },
    {
        "id": 633,
        "label": "John Locke",
        "x": -494,
        "y": -837,
        "value": 116
    },
    {
        "id": 634,
        "label": "The Normative Status of Logic",
        "x": 804,
        "y": -3809,
        "value": 16
    },
    {
        "id": 635,
        "label": "Logical Constants",
        "x": 1204,
        "y": -2217,
        "value": 34
    },
    {
        "id": 636,
        "label": "Logical Constructions",
        "x": 737,
        "y": -1831,
        "value": 34
    },
    {
        "id": 637,
        "label": "Logical Empiricism",
        "x": 865,
        "y": -1594,
        "value": 52
    },
    {
        "id": 638,
        "label": "Logical Form",
        "x": 1692,
        "y": -1924,
        "value": 70
    },
    {
        "id": 639,
        "label": "Logical Pluralism",
        "x": 1052,
        "y": -2293,
        "value": 54
    },
    {
        "id": 640,
        "label": "Logical Truth",
        "x": 1358,
        "y": -1477,
        "value": 38
    },
    {
        "id": 641,
        "label": "Logic and Ontology",
        "x": 1864,
        "y": -1214,
        "value": 28
    },
    {
        "id": 642,
        "label": "Logicism and Neologicism",
        "x": 587,
        "y": -983,
        "value": 42
    },
    {
        "id": 643,
        "label": "Hermann Lotze",
        "x": 1225,
        "y": 934,
        "value": 52
    },
    {
        "id": 644,
        "label": "Love",
        "x": -504,
        "y": 102,
        "value": 26
    },
    {
        "id": 645,
        "label": "Loyalty",
        "x": -2965,
        "y": 1181,
        "value": 8
    },
    {
        "id": 646,
        "label": "Lucretius",
        "x": -2597,
        "y": -1968,
        "value": 22
    },
    {
        "id": 647,
        "label": "Georg [Gy\u00f6rgy] Luk\u00e1cs",
        "x": -187,
        "y": 2228,
        "value": 18
    },
    {
        "id": 648,
        "label": "Jan \u0141ukasiewicz",
        "x": 4675,
        "y": -2527,
        "value": 8
    },
    {
        "id": 649,
        "label": "Martin Luther",
        "x": -45,
        "y": 828,
        "value": 26
    },
    {
        "id": 650,
        "label": "Lvov-Warsaw School",
        "x": 4205,
        "y": -1829,
        "value": 18
    },
    {
        "id": 651,
        "label": "Jean Fran\u00e7ois Lyotard",
        "x": 817,
        "y": 1082,
        "value": 32
    },
    {
        "id": 652,
        "label": "Catharine Macaulay",
        "x": -1740,
        "y": -1775,
        "value": 18
    },
    {
        "id": 653,
        "label": "Ernst Mach",
        "x": -342,
        "y": -1640,
        "value": 30
    },
    {
        "id": 654,
        "label": "Niccol\u00f2 Machiavelli",
        "x": -2332,
        "y": 1500,
        "value": 26
    },
    {
        "id": 655,
        "label": "Philosophy of Macroevolution",
        "x": 3843,
        "y": 969,
        "value": 26
    },
    {
        "id": 656,
        "label": "Madhyamaka",
        "x": 6230,
        "y": -1325,
        "value": 28
    },
    {
        "id": 657,
        "label": "Salomon Maimon",
        "x": -759,
        "y": 1264,
        "value": 26
    },
    {
        "id": 658,
        "label": "Maimonides",
        "x": -1750,
        "y": 540,
        "value": 42
    },
    {
        "id": 659,
        "label": "Nicolas Malebranche",
        "x": -945,
        "y": 512,
        "value": 52
    },
    {
        "id": 660,
        "label": "Ernst Mally",
        "x": 4278,
        "y": -752,
        "value": 20
    },
    {
        "id": 661,
        "label": "The Ethics of Manipulation",
        "x": -2501,
        "y": 1954,
        "value": 16
    },
    {
        "id": 662,
        "label": "Gabriel (-Honor\u00e9) Marcel",
        "x": 2284,
        "y": 2379,
        "value": 18
    },
    {
        "id": 663,
        "label": "Marcus Aurelius",
        "x": -3811,
        "y": -61,
        "value": 10
    },
    {
        "id": 664,
        "label": "Herbert Marcuse",
        "x": 216,
        "y": 2731,
        "value": 22
    },
    {
        "id": 665,
        "label": "Lucrezia Marinella",
        "x": -4031,
        "y": 2852,
        "value": 6
    },
    {
        "id": 666,
        "label": "Jacques Maritain",
        "x": 1836,
        "y": 2035,
        "value": 10
    },
    {
        "id": 667,
        "label": "Markets",
        "x": -1950,
        "y": -2020,
        "value": 10
    },
    {
        "id": 668,
        "label": "Marsilius of Inghen",
        "x": -2870,
        "y": 1537,
        "value": 12
    },
    {
        "id": 669,
        "label": "Anton Marty",
        "x": 4287,
        "y": 320,
        "value": 18
    },
    {
        "id": 670,
        "label": "Karl Marx",
        "x": -571,
        "y": 1462,
        "value": 78
    },
    {
        "id": 671,
        "label": "Lady Damaris Masham",
        "x": -2394,
        "y": -1083,
        "value": 16
    },
    {
        "id": 672,
        "label": "Material Constitution",
        "x": 2859,
        "y": -1924,
        "value": 42
    },
    {
        "id": 673,
        "label": "Physicalism",
        "x": 1794,
        "y": -788,
        "value": 94
    },
    {
        "id": 674,
        "label": "Mathematical Style",
        "x": -1399,
        "y": -3457,
        "value": 12
    },
    {
        "id": 675,
        "label": "Philosophy of Mathematics",
        "x": 55,
        "y": -1814,
        "value": 58
    },
    {
        "id": 676,
        "label": "John M. E. McTaggart",
        "x": 2643,
        "y": -577,
        "value": 18
    },
    {
        "id": 677,
        "label": "George Herbert Mead",
        "x": 1180,
        "y": 351,
        "value": 58
    },
    {
        "id": 678,
        "label": "Theories of Meaning",
        "x": 2724,
        "y": -2150,
        "value": 98
    },
    {
        "id": 679,
        "label": "Meaning Holism",
        "x": 3809,
        "y": -1473,
        "value": 12
    },
    {
        "id": 680,
        "label": "Treating Persons as Means",
        "x": -2599,
        "y": 2240,
        "value": 12
    },
    {
        "id": 681,
        "label": "Mechanisms in Science",
        "x": 1375,
        "y": -893,
        "value": 46
    },
    {
        "id": 682,
        "label": "Philosophy of Medicine",
        "x": 749,
        "y": -1667,
        "value": 20
    },
    {
        "id": 683,
        "label": "Chinese Philosophy and Chinese Medicine",
        "x": 6563,
        "y": -4726,
        "value": 2
    },
    {
        "id": 684,
        "label": "Medieval Philosophy",
        "x": 274,
        "y": 670,
        "value": 152
    },
    {
        "id": 685,
        "label": "Alexius Meinong",
        "x": 3207,
        "y": -682,
        "value": 66
    },
    {
        "id": 686,
        "label": "Memory",
        "x": 3837,
        "y": 308,
        "value": 16
    },
    {
        "id": 687,
        "label": "Mencius",
        "x": 4532,
        "y": -3367,
        "value": 36
    },
    {
        "id": 688,
        "label": "Moses Mendelssohn",
        "x": -791,
        "y": 1644,
        "value": 20
    },
    {
        "id": 689,
        "label": "Mental Causation",
        "x": 2376,
        "y": -1537,
        "value": 64
    },
    {
        "id": 690,
        "label": "Mental Disorder (Illness)",
        "x": 2715,
        "y": 327,
        "value": 30
    },
    {
        "id": 691,
        "label": "Mental Representation",
        "x": 2965,
        "y": -818,
        "value": 64
    },
    {
        "id": 692,
        "label": "Mereology",
        "x": 3094,
        "y": -1548,
        "value": 96
    },
    {
        "id": 693,
        "label": "Maurice Merleau-Ponty",
        "x": 1761,
        "y": 1316,
        "value": 40
    },
    {
        "id": 694,
        "label": "Marin Mersenne",
        "x": -1680,
        "y": -2544,
        "value": 12
    },
    {
        "id": 695,
        "label": "Metaethics",
        "x": 2549,
        "y": 20,
        "value": 52
    },
    {
        "id": 696,
        "label": "Metaphor",
        "x": 1790,
        "y": -2382,
        "value": 30
    },
    {
        "id": 697,
        "label": "Metaphysics",
        "x": 1302,
        "y": -579,
        "value": 66
    },
    {
        "id": 698,
        "label": "Methodological Holism in the Social Sciences",
        "x": 1829,
        "y": -3203,
        "value": 12
    },
    {
        "id": 699,
        "label": "Philosophy of Microbiology",
        "x": 4519,
        "y": 1194,
        "value": 8
    },
    {
        "id": 700,
        "label": "Harriet Taylor Mill",
        "x": -2219,
        "y": 2080,
        "value": 10
    },
    {
        "id": 701,
        "label": "James Mill",
        "x": -924,
        "y": 873,
        "value": 16
    },
    {
        "id": 702,
        "label": "John Stuart Mill",
        "x": -334,
        "y": 72,
        "value": 80
    },
    {
        "id": 703,
        "label": "Miracles",
        "x": 148,
        "y": -1735,
        "value": 26
    },
    {
        "id": 704,
        "label": "The Epistemology of Modality",
        "x": 3058,
        "y": -3141,
        "value": 20
    },
    {
        "id": 705,
        "label": "Modal Logic",
        "x": 1850,
        "y": -2705,
        "value": 64
    },
    {
        "id": 706,
        "label": "Models in Science",
        "x": 1154,
        "y": -1408,
        "value": 70
    },
    {
        "id": 707,
        "label": "Model Theory",
        "x": 1441,
        "y": -504,
        "value": 38
    },
    {
        "id": 708,
        "label": "Mohism",
        "x": 4040,
        "y": -3573,
        "value": 36
    },
    {
        "id": 709,
        "label": "Mohist Canons",
        "x": 4906,
        "y": -4498,
        "value": 22
    },
    {
        "id": 710,
        "label": "Molecular Biology",
        "x": 2321,
        "y": 262,
        "value": 80
    },
    {
        "id": 711,
        "label": "Molyneux\u2019s Problem",
        "x": -889,
        "y": -356,
        "value": 28
    },
    {
        "id": 712,
        "label": "Monism",
        "x": 1105,
        "y": -1269,
        "value": 54
    },
    {
        "id": 713,
        "label": "Monotheism",
        "x": -215,
        "y": 703,
        "value": 26
    },
    {
        "id": 714,
        "label": "Michel de Montaigne",
        "x": -2393,
        "y": -505,
        "value": 22
    },
    {
        "id": 715,
        "label": "Baron de Montesquieu, Charles-Louis de Secondat",
        "x": -3064,
        "y": 419,
        "value": 10
    },
    {
        "id": 716,
        "label": "George Edward Moore",
        "x": 1595,
        "y": -506,
        "value": 66
    },
    {
        "id": 717,
        "label": "The Psychology of Normative Cognition",
        "x": 3774,
        "y": 58,
        "value": 14
    },
    {
        "id": 718,
        "label": "Moral Dilemmas",
        "x": 283,
        "y": -201,
        "value": 24
    },
    {
        "id": 719,
        "label": "Moral Epistemology",
        "x": 2398,
        "y": 440,
        "value": 40
    },
    {
        "id": 720,
        "label": "Moral Particularism and Moral Generalism",
        "x": 2023,
        "y": -1185,
        "value": 28
    },
    {
        "id": 721,
        "label": "Intuitionism in Ethics",
        "x": 1979,
        "y": 35,
        "value": 18
    },
    {
        "id": 722,
        "label": "The Definition of Morality",
        "x": 1916,
        "y": 962,
        "value": 16
    },
    {
        "id": 723,
        "label": "Moral Luck",
        "x": -141,
        "y": -1644,
        "value": 24
    },
    {
        "id": 724,
        "label": "Moral Motivation",
        "x": 2526,
        "y": -481,
        "value": 32
    },
    {
        "id": 725,
        "label": "Moral Naturalism",
        "x": 2569,
        "y": -260,
        "value": 48
    },
    {
        "id": 726,
        "label": "Moral Non-Naturalism",
        "x": 3064,
        "y": -298,
        "value": 36
    },
    {
        "id": 727,
        "label": "Moral Particularism",
        "x": 1885,
        "y": -503,
        "value": 44
    },
    {
        "id": 728,
        "label": "Moral Realism",
        "x": 2870,
        "y": 344,
        "value": 54
    },
    {
        "id": 729,
        "label": "Moral Relativism",
        "x": 2053,
        "y": -77,
        "value": 42
    },
    {
        "id": 730,
        "label": "Moral Responsibility",
        "x": 723,
        "y": -2002,
        "value": 38
    },
    {
        "id": 731,
        "label": "Moral Sentimentalism",
        "x": 3171,
        "y": 469,
        "value": 26
    },
    {
        "id": 732,
        "label": "Moral Skepticism",
        "x": 1870,
        "y": 475,
        "value": 36
    },
    {
        "id": 733,
        "label": "The Grounds of Moral Status",
        "x": -698,
        "y": 2312,
        "value": 32
    },
    {
        "id": 734,
        "label": "Henry More",
        "x": -1909,
        "y": -792,
        "value": 28
    },
    {
        "id": 735,
        "label": "Thomas More",
        "x": -2443,
        "y": -6,
        "value": 24
    },
    {
        "id": 736,
        "label": "Mulla Sadra",
        "x": -5740,
        "y": 1127,
        "value": 10
    },
    {
        "id": 737,
        "label": "Philosophical Aspects of Multi-Modal Logic",
        "x": 1557,
        "y": -3021,
        "value": 38
    },
    {
        "id": 738,
        "label": "Multiculturalism",
        "x": -578,
        "y": 2533,
        "value": 32
    },
    {
        "id": 739,
        "label": "Multiple Realizability",
        "x": 2785,
        "y": -952,
        "value": 40
    },
    {
        "id": 740,
        "label": "The Philosophy of Music",
        "x": 2944,
        "y": -1475,
        "value": 40
    },
    {
        "id": 741,
        "label": "Mysticism",
        "x": 1404,
        "y": 2169,
        "value": 24
    },
    {
        "id": 742,
        "label": "Plato\u2019s Myths",
        "x": 1732,
        "y": -4351,
        "value": 4
    },
    {
        "id": 743,
        "label": "N\u0101g\u0101rjuna",
        "x": 6357,
        "y": -1039,
        "value": 24
    },
    {
        "id": 744,
        "label": "Names",
        "x": 2255,
        "y": -2402,
        "value": 36
    },
    {
        "id": 745,
        "label": "Nationalism",
        "x": -889,
        "y": 1151,
        "value": 46
    },
    {
        "id": 746,
        "label": "Paul Natorp",
        "x": 1659,
        "y": 2783,
        "value": 22
    },
    {
        "id": 747,
        "label": "Naturalism",
        "x": 1706,
        "y": -308,
        "value": 52
    },
    {
        "id": 748,
        "label": "Natural Kinds",
        "x": 2862,
        "y": -1762,
        "value": 50
    },
    {
        "id": 749,
        "label": "Natural Selection",
        "x": 2985,
        "y": 1343,
        "value": 46
    },
    {
        "id": 750,
        "label": "The Nature of Law",
        "x": -1889,
        "y": -564,
        "value": 32
    },
    {
        "id": 751,
        "label": "Necessary and Sufficient Conditions",
        "x": 3086,
        "y": -2334,
        "value": 14
    },
    {
        "id": 752,
        "label": "Needs in Moral and Political Philosophy",
        "x": -2233,
        "y": 663,
        "value": 16
    },
    {
        "id": 753,
        "label": "Negation",
        "x": 1746,
        "y": -3573,
        "value": 38
    },
    {
        "id": 754,
        "label": "N\u00e9gritude",
        "x": 1851,
        "y": 2511,
        "value": 22
    },
    {
        "id": 755,
        "label": "Neo-Daoism",
        "x": 5532,
        "y": -4151,
        "value": 18
    },
    {
        "id": 756,
        "label": "Neo-Kantianism",
        "x": 838,
        "y": 2419,
        "value": 26
    },
    {
        "id": 757,
        "label": "Neoplatonism",
        "x": -2820,
        "y": 1301,
        "value": 92
    },
    {
        "id": 758,
        "label": "Otto Neurath",
        "x": 807,
        "y": -312,
        "value": 34
    },
    {
        "id": 759,
        "label": "Neuroethics",
        "x": 1247,
        "y": -222,
        "value": 26
    },
    {
        "id": 760,
        "label": "The Philosophy of Neuroscience",
        "x": 3043,
        "y": -648,
        "value": 38
    },
    {
        "id": 761,
        "label": "Neutral Monism",
        "x": 757,
        "y": -1103,
        "value": 40
    },
    {
        "id": 762,
        "label": "Isaac Newton",
        "x": -832,
        "y": -595,
        "value": 40
    },
    {
        "id": 763,
        "label": "Nicholas of Autrecourt",
        "x": -2970,
        "y": 802,
        "value": 14
    },
    {
        "id": 764,
        "label": "Friedrich Nietzsche",
        "x": 1080,
        "y": 1272,
        "value": 60
    },
    {
        "id": 765,
        "label": "Nishida Kitar\u014d",
        "x": 4268,
        "y": 760,
        "value": 16
    },
    {
        "id": 766,
        "label": "Nonconceptual Mental Content",
        "x": 3337,
        "y": -508,
        "value": 22
    },
    {
        "id": 767,
        "label": "Nonexistent Objects",
        "x": 3072,
        "y": -1176,
        "value": 50
    },
    {
        "id": 768,
        "label": "The Nonidentity Problem",
        "x": 66,
        "y": 1312,
        "value": 22
    },
    {
        "id": 769,
        "label": "Social Norms",
        "x": 2014,
        "y": -3076,
        "value": 24
    },
    {
        "id": 770,
        "label": "John Norris",
        "x": -1380,
        "y": 5,
        "value": 26
    },
    {
        "id": 771,
        "label": "Nothingness",
        "x": 2910,
        "y": 609,
        "value": 24
    },
    {
        "id": 772,
        "label": "Georg Friedrich Philipp von Hardenberg [Novalis]",
        "x": 157,
        "y": 2998,
        "value": 28
    },
    {
        "id": 773,
        "label": "Numenius",
        "x": -2750,
        "y": -237,
        "value": 18
    },
    {
        "id": 774,
        "label": "Michael Oakeshott",
        "x": -1037,
        "y": -2003,
        "value": 10
    },
    {
        "id": 775,
        "label": "Object",
        "x": 2109,
        "y": -1348,
        "value": 88
    },
    {
        "id": 776,
        "label": "Medieval Theories of Obligationes",
        "x": -2094,
        "y": -904,
        "value": 20
    },
    {
        "id": 777,
        "label": "Occasionalism",
        "x": -1814,
        "y": 1289,
        "value": 32
    },
    {
        "id": 778,
        "label": "William of Ockham",
        "x": -1686,
        "y": -476,
        "value": 78
    },
    {
        "id": 779,
        "label": "Peter John Olivi",
        "x": -1144,
        "y": -989,
        "value": 10
    },
    {
        "id": 780,
        "label": "Olympiodorus",
        "x": -4249,
        "y": 1447,
        "value": 22
    },
    {
        "id": 781,
        "label": "Omnipotence",
        "x": 875,
        "y": 1900,
        "value": 14
    },
    {
        "id": 782,
        "label": "Omnipresence",
        "x": 1767,
        "y": 879,
        "value": 20
    },
    {
        "id": 783,
        "label": "Omniscience",
        "x": 806,
        "y": 318,
        "value": 32
    },
    {
        "id": 784,
        "label": "Ontological Arguments",
        "x": 1062,
        "y": -146,
        "value": 48
    },
    {
        "id": 785,
        "label": "Ontological Commitment",
        "x": 1836,
        "y": -2044,
        "value": 48
    },
    {
        "id": 786,
        "label": "History of the Ontology of Art",
        "x": 2804,
        "y": -1307,
        "value": 56
    },
    {
        "id": 787,
        "label": "Operationalism",
        "x": 303,
        "y": 1279,
        "value": 12
    },
    {
        "id": 788,
        "label": "Ordinary Objects",
        "x": 2639,
        "y": -2355,
        "value": 36
    },
    {
        "id": 789,
        "label": "Nicole Oresme",
        "x": -2880,
        "y": -676,
        "value": 34
    },
    {
        "id": 790,
        "label": "Origen",
        "x": -1873,
        "y": 880,
        "value": 16
    },
    {
        "id": 791,
        "label": "Original Position",
        "x": -1442,
        "y": -2248,
        "value": 20
    },
    {
        "id": 792,
        "label": "Jos\u00e9 Ortega y Gasset",
        "x": 2195,
        "y": 2027,
        "value": 26
    },
    {
        "id": 793,
        "label": "Other Minds",
        "x": 2113,
        "y": -1044,
        "value": 26
    },
    {
        "id": 794,
        "label": "Property and Ownership",
        "x": -1503,
        "y": 224,
        "value": 56
    },
    {
        "id": 795,
        "label": "Pacifism",
        "x": -1710,
        "y": -133,
        "value": 22
    },
    {
        "id": 796,
        "label": "Pain",
        "x": 1343,
        "y": 744,
        "value": 20
    },
    {
        "id": 797,
        "label": "Thomas Paine",
        "x": -2994,
        "y": 191,
        "value": 16
    },
    {
        "id": 798,
        "label": "Panentheism",
        "x": -170,
        "y": -911,
        "value": 22
    },
    {
        "id": 799,
        "label": "Panpsychism",
        "x": 939,
        "y": -244,
        "value": 54
    },
    {
        "id": 800,
        "label": "Pantheism",
        "x": 197,
        "y": 286,
        "value": 96
    },
    {
        "id": 801,
        "label": "Parenthood and Procreation",
        "x": 33,
        "y": 2246,
        "value": 28
    },
    {
        "id": 802,
        "label": "Parmenides",
        "x": -1595,
        "y": -1860,
        "value": 36
    },
    {
        "id": 803,
        "label": "Blaise Pascal",
        "x": -1547,
        "y": -1165,
        "value": 26
    },
    {
        "id": 804,
        "label": "Pascal\u2019s Wager",
        "x": -1372,
        "y": -2597,
        "value": 16
    },
    {
        "id": 805,
        "label": "Paternalism",
        "x": -2430,
        "y": 1115,
        "value": 34
    },
    {
        "id": 806,
        "label": "Patriotism",
        "x": -1765,
        "y": -647,
        "value": 20
    },
    {
        "id": 807,
        "label": "Francesco Patrizi",
        "x": -4262,
        "y": -17,
        "value": 14
    },
    {
        "id": 808,
        "label": "Paul of Venice",
        "x": -1079,
        "y": 77,
        "value": 34
    },
    {
        "id": 809,
        "label": "Benjamin Peirce",
        "x": -1103,
        "y": 3633,
        "value": 4
    },
    {
        "id": 810,
        "label": "Charles Sanders Peirce",
        "x": 481,
        "y": 233,
        "value": 62
    },
    {
        "id": 811,
        "label": "William Penbygull",
        "x": -1190,
        "y": -2175,
        "value": 20
    },
    {
        "id": 812,
        "label": "Perfectionism in Moral and Political Philosophy",
        "x": -715,
        "y": 769,
        "value": 26
    },
    {
        "id": 813,
        "label": "Personal Identity",
        "x": 1414,
        "y": -325,
        "value": 60
    },
    {
        "id": 814,
        "label": "Personalism",
        "x": 1749,
        "y": 725,
        "value": 40
    },
    {
        "id": 815,
        "label": "Personal Relationship Goods",
        "x": -2274,
        "y": 365,
        "value": 14
    },
    {
        "id": 816,
        "label": "Peter of Spain",
        "x": -2445,
        "y": 371,
        "value": 24
    },
    {
        "id": 817,
        "label": "Joane Petrizi",
        "x": -4430,
        "y": 2912,
        "value": 4
    },
    {
        "id": 818,
        "label": "Phenomenal Intentionality",
        "x": 3269,
        "y": -827,
        "value": 20
    },
    {
        "id": 819,
        "label": "Phenomenology",
        "x": 2061,
        "y": 591,
        "value": 90
    },
    {
        "id": 820,
        "label": "Philip the Chancellor",
        "x": 1179,
        "y": 3677,
        "value": 6
    },
    {
        "id": 821,
        "label": "Philodemus",
        "x": -2939,
        "y": -3101,
        "value": 8
    },
    {
        "id": 822,
        "label": "Philolaus",
        "x": -4090,
        "y": -1087,
        "value": 20
    },
    {
        "id": 823,
        "label": "Philo of Alexandria",
        "x": -561,
        "y": 1290,
        "value": 14
    },
    {
        "id": 824,
        "label": "Philo of Larissa",
        "x": 1703,
        "y": 1095,
        "value": 16
    },
    {
        "id": 825,
        "label": "John Philoponus",
        "x": -3894,
        "y": 1140,
        "value": 28
    },
    {
        "id": 826,
        "label": "Giovanni Pico della Mirandola",
        "x": -3684,
        "y": -131,
        "value": 24
    },
    {
        "id": 827,
        "label": "Descartes and the Pineal Gland",
        "x": 382,
        "y": -326,
        "value": 20
    },
    {
        "id": 828,
        "label": "Plato",
        "x": -1222,
        "y": -875,
        "value": 126
    },
    {
        "id": 829,
        "label": "Pleasure",
        "x": -58,
        "y": -207,
        "value": 24
    },
    {
        "id": 830,
        "label": "Plural Quantification",
        "x": 2255,
        "y": -1648,
        "value": 26
    },
    {
        "id": 831,
        "label": "Plutarch",
        "x": -1445,
        "y": 418,
        "value": 24
    },
    {
        "id": 832,
        "label": "Henri Poincar\u00e9",
        "x": -668,
        "y": -2689,
        "value": 30
    },
    {
        "id": 833,
        "label": "Isaac Polqar",
        "x": -3493,
        "y": -709,
        "value": 14
    },
    {
        "id": 834,
        "label": "Religion and Political Theory",
        "x": -1130,
        "y": -286,
        "value": 30
    },
    {
        "id": 835,
        "label": "Pietro Pomponazzi",
        "x": -4162,
        "y": -653,
        "value": 12
    },
    {
        "id": 836,
        "label": "Karl Popper",
        "x": 181,
        "y": -1036,
        "value": 66
    },
    {
        "id": 837,
        "label": "Population Genetics",
        "x": 4109,
        "y": 1477,
        "value": 24
    },
    {
        "id": 838,
        "label": "Porphyry",
        "x": -3190,
        "y": 766,
        "value": 44
    },
    {
        "id": 839,
        "label": "Giambattista della Porta",
        "x": -3579,
        "y": -1047,
        "value": 14
    },
    {
        "id": 840,
        "label": "Port Royal Logic",
        "x": 160,
        "y": -535,
        "value": 20
    },
    {
        "id": 841,
        "label": "Possible Worlds",
        "x": 2598,
        "y": -2746,
        "value": 68
    },
    {
        "id": 842,
        "label": "Postmodernism",
        "x": 134,
        "y": 751,
        "value": 62
    },
    {
        "id": 843,
        "label": "Fran\u00e7ois Poulain de la Barre",
        "x": -4020,
        "y": 1892,
        "value": 10
    },
    {
        "id": 844,
        "label": "Innateness and Language",
        "x": 3090,
        "y": -470,
        "value": 22
    },
    {
        "id": 845,
        "label": "Practical Reason",
        "x": 1268,
        "y": -1770,
        "value": 50
    },
    {
        "id": 846,
        "label": "Pragmatic Arguments and Belief in God",
        "x": 144,
        "y": -4,
        "value": 20
    },
    {
        "id": 847,
        "label": "Pragmatics",
        "x": 2781,
        "y": -3155,
        "value": 62
    },
    {
        "id": 848,
        "label": "Pragmatism",
        "x": 1167,
        "y": 1068,
        "value": 48
    },
    {
        "id": 849,
        "label": "Classical Logic",
        "x": 1192,
        "y": -1162,
        "value": 86
    },
    {
        "id": 850,
        "label": "Prediction versus Accommodation",
        "x": -444,
        "y": -1898,
        "value": 18
    },
    {
        "id": 851,
        "label": "Preferences",
        "x": -173,
        "y": -3510,
        "value": 26
    },
    {
        "id": 852,
        "label": "Epigenesis and Preformationism",
        "x": 3229,
        "y": 1624,
        "value": 20
    },
    {
        "id": 853,
        "label": "Pregnancy, Birth, and Medicine",
        "x": 917,
        "y": 3466,
        "value": 14
    },
    {
        "id": 854,
        "label": "Presentism",
        "x": 3061,
        "y": -2928,
        "value": 24
    },
    {
        "id": 855,
        "label": "Presocratic Philosophy",
        "x": -3365,
        "y": -2170,
        "value": 42
    },
    {
        "id": 856,
        "label": "Presupposition",
        "x": 2797,
        "y": -3790,
        "value": 32
    },
    {
        "id": 857,
        "label": "Richard Price",
        "x": -2020,
        "y": -2387,
        "value": 12
    },
    {
        "id": 858,
        "label": "Harold Arthur Prichard",
        "x": 2057,
        "y": -576,
        "value": 28
    },
    {
        "id": 859,
        "label": "Principia Mathematica",
        "x": 404,
        "y": -1484,
        "value": 50
    },
    {
        "id": 860,
        "label": "Principle of Sufficient Reason",
        "x": 201,
        "y": -691,
        "value": 22
    },
    {
        "id": 861,
        "label": "Arthur Prior",
        "x": 2513,
        "y": -3216,
        "value": 34
    },
    {
        "id": 862,
        "label": "Prisoner\u2019s Dilemma",
        "x": 1188,
        "y": -2986,
        "value": 30
    },
    {
        "id": 863,
        "label": "Privacy",
        "x": -2345,
        "y": -1874,
        "value": 22
    },
    {
        "id": 864,
        "label": "Private Language",
        "x": 1627,
        "y": -1048,
        "value": 22
    },
    {
        "id": 865,
        "label": "Imprecise Probabilities",
        "x": 795,
        "y": -4871,
        "value": 18
    },
    {
        "id": 866,
        "label": "Probability in Medieval and Renaissance Philosophy",
        "x": -1631,
        "y": -2253,
        "value": 12
    },
    {
        "id": 867,
        "label": "Interpretations of Probability",
        "x": 493,
        "y": -3217,
        "value": 78
    },
    {
        "id": 868,
        "label": "Logic and Probability",
        "x": 440,
        "y": -4644,
        "value": 18
    },
    {
        "id": 869,
        "label": "The Rule of Law",
        "x": -2190,
        "y": 893,
        "value": 28
    },
    {
        "id": 870,
        "label": "Process Philosophy",
        "x": 4,
        "y": -662,
        "value": 24
    },
    {
        "id": 871,
        "label": "Process Theism",
        "x": -315,
        "y": -869,
        "value": 20
    },
    {
        "id": 872,
        "label": "Proclus",
        "x": -3266,
        "y": 1418,
        "value": 46
    },
    {
        "id": 873,
        "label": "Progress",
        "x": 295,
        "y": 132,
        "value": 24
    },
    {
        "id": 874,
        "label": "Promises",
        "x": -368,
        "y": -2828,
        "value": 24
    },
    {
        "id": 875,
        "label": "Proof Theory",
        "x": 1049,
        "y": -23,
        "value": 18
    },
    {
        "id": 876,
        "label": "Prophecy",
        "x": 339,
        "y": -737,
        "value": 34
    },
    {
        "id": 877,
        "label": "Propositional Attitude Reports",
        "x": 2460,
        "y": -2394,
        "value": 56
    },
    {
        "id": 878,
        "label": "Propositional Function",
        "x": 727,
        "y": -2388,
        "value": 20
    },
    {
        "id": 879,
        "label": "Propositions",
        "x": 2638,
        "y": -1806,
        "value": 50
    },
    {
        "id": 880,
        "label": "Protagoras",
        "x": -2261,
        "y": -1530,
        "value": 20
    },
    {
        "id": 881,
        "label": "Divine Providence",
        "x": 1124,
        "y": -567,
        "value": 24
    },
    {
        "id": 882,
        "label": "Ancient Theories of Soul",
        "x": -2052,
        "y": 648,
        "value": 34
    },
    {
        "id": 883,
        "label": "Philosophy of Psychiatry",
        "x": 3274,
        "y": -187,
        "value": 20
    },
    {
        "id": 884,
        "label": "Psychologism",
        "x": 2393,
        "y": 660,
        "value": 34
    },
    {
        "id": 885,
        "label": "Publicity",
        "x": -1456,
        "y": -1790,
        "value": 20
    },
    {
        "id": 886,
        "label": "Public Reason",
        "x": -652,
        "y": -1440,
        "value": 16
    },
    {
        "id": 887,
        "label": "Punishment",
        "x": -188,
        "y": 151,
        "value": 48
    },
    {
        "id": 888,
        "label": "Pythagoras",
        "x": -3219,
        "y": -1125,
        "value": 38
    },
    {
        "id": 889,
        "label": "Pythagoreanism",
        "x": -3730,
        "y": -570,
        "value": 40
    },
    {
        "id": 890,
        "label": "Qing Philosophy",
        "x": 5077,
        "y": -2841,
        "value": 4
    },
    {
        "id": 891,
        "label": "Qualia",
        "x": 2536,
        "y": -696,
        "value": 52
    },
    {
        "id": 892,
        "label": "Tropes",
        "x": 2743,
        "y": -1499,
        "value": 58
    },
    {
        "id": 893,
        "label": "Quantifiers and Quantification",
        "x": 2305,
        "y": -2068,
        "value": 34
    },
    {
        "id": 894,
        "label": "Quantum Mechanics",
        "x": 1056,
        "y": -3987,
        "value": 26
    },
    {
        "id": 895,
        "label": "Questions",
        "x": 2891,
        "y": -4369,
        "value": 10
    },
    {
        "id": 896,
        "label": "Willard Van Orman Quine",
        "x": 1411,
        "y": -2058,
        "value": 62
    },
    {
        "id": 897,
        "label": "Quine\u2019s New Foundations",
        "x": 1370,
        "y": -748,
        "value": 12
    },
    {
        "id": 898,
        "label": "Quotation",
        "x": 2320,
        "y": -3919,
        "value": 12
    },
    {
        "id": 899,
        "label": "Race",
        "x": 1605,
        "y": 2497,
        "value": 52
    },
    {
        "id": 900,
        "label": "Radulphus Brito",
        "x": 373,
        "y": 4128,
        "value": 12
    },
    {
        "id": 901,
        "label": "Frank Ramsey",
        "x": 1264,
        "y": -2787,
        "value": 38
    },
    {
        "id": 902,
        "label": "Petrus Ramus",
        "x": -2577,
        "y": 751,
        "value": 14
    },
    {
        "id": 903,
        "label": "Ayn Rand",
        "x": 537,
        "y": -1299,
        "value": 22
    },
    {
        "id": 904,
        "label": "John Rawls",
        "x": -941,
        "y": -1227,
        "value": 152
    },
    {
        "id": 905,
        "label": "Realism",
        "x": 2233,
        "y": -963,
        "value": 74
    },
    {
        "id": 906,
        "label": "Recognition",
        "x": -1343,
        "y": 1782,
        "value": 24
    },
    {
        "id": 907,
        "label": "Reconciliation",
        "x": 2497,
        "y": 2811,
        "value": 8
    },
    {
        "id": 908,
        "label": "Recursive Functions",
        "x": -140,
        "y": -3302,
        "value": 34
    },
    {
        "id": 909,
        "label": "Redistribution",
        "x": -2193,
        "y": -2081,
        "value": 14
    },
    {
        "id": 910,
        "label": "Scientific Reduction",
        "x": 1903,
        "y": -927,
        "value": 42
    },
    {
        "id": 911,
        "label": "Reflective Equilibrium",
        "x": -426,
        "y": -2291,
        "value": 24
    },
    {
        "id": 912,
        "label": "Henricus Regius",
        "x": 627,
        "y": -327,
        "value": 36
    },
    {
        "id": 913,
        "label": "August Wilhelm Rehberg",
        "x": -1029,
        "y": -2294,
        "value": 8
    },
    {
        "id": 914,
        "label": "Hans Reichenbach",
        "x": 855,
        "y": -2775,
        "value": 46
    },
    {
        "id": 915,
        "label": "Thomas Reid",
        "x": 373,
        "y": -610,
        "value": 50
    },
    {
        "id": 916,
        "label": "Adolf Reinach",
        "x": 2616,
        "y": -1586,
        "value": 18
    },
    {
        "id": 917,
        "label": "Karl Leonhard Reinhold",
        "x": -1305,
        "y": 2727,
        "value": 14
    },
    {
        "id": 918,
        "label": "Reism",
        "x": 4950,
        "y": -1193,
        "value": 8
    },
    {
        "id": 919,
        "label": "Relations",
        "x": 3459,
        "y": -2144,
        "value": 26
    },
    {
        "id": 920,
        "label": "Relativism",
        "x": 1182,
        "y": -967,
        "value": 62
    },
    {
        "id": 921,
        "label": "Reliabilist Epistemology",
        "x": 879,
        "y": -2298,
        "value": 30
    },
    {
        "id": 922,
        "label": "Natural Theology and Natural Religion",
        "x": -220,
        "y": -672,
        "value": 40
    },
    {
        "id": 923,
        "label": "Phenomenology of Religion",
        "x": 1347,
        "y": 1148,
        "value": 34
    },
    {
        "id": 924,
        "label": "Religious Diversity (Pluralism)",
        "x": 200,
        "y": 1545,
        "value": 10
    },
    {
        "id": 925,
        "label": "Religious Experience",
        "x": 1828,
        "y": 1506,
        "value": 24
    },
    {
        "id": 926,
        "label": "Religious Language",
        "x": -781,
        "y": 1445,
        "value": 10
    },
    {
        "id": 927,
        "label": "Black Reparations",
        "x": -325,
        "y": 3930,
        "value": 10
    },
    {
        "id": 928,
        "label": "Replication and Reproduction",
        "x": 3585,
        "y": 1553,
        "value": 42
    },
    {
        "id": 929,
        "label": "Political Representation",
        "x": -2938,
        "y": -814,
        "value": 16
    },
    {
        "id": 930,
        "label": "Scientific Representation",
        "x": -187,
        "y": -2479,
        "value": 16
    },
    {
        "id": 931,
        "label": "Reproducibility of Scientific Results",
        "x": -2337,
        "y": 1212,
        "value": 8
    },
    {
        "id": 932,
        "label": "Republicanism",
        "x": -1695,
        "y": 923,
        "value": 38
    },
    {
        "id": 933,
        "label": "The Repugnant Conclusion",
        "x": -355,
        "y": -640,
        "value": 18
    },
    {
        "id": 934,
        "label": "Respect",
        "x": -1439,
        "y": 970,
        "value": 32
    },
    {
        "id": 935,
        "label": "Retributive Justice",
        "x": 502,
        "y": 635,
        "value": 28
    },
    {
        "id": 936,
        "label": "Divine Revelation",
        "x": 1974,
        "y": 791,
        "value": 18
    },
    {
        "id": 937,
        "label": "Revolution",
        "x": -1230,
        "y": 2010,
        "value": 20
    },
    {
        "id": 938,
        "label": "Richard the Sophister",
        "x": -2673,
        "y": -489,
        "value": 18
    },
    {
        "id": 939,
        "label": "Heinrich Rickert",
        "x": 1581,
        "y": 1725,
        "value": 32
    },
    {
        "id": 940,
        "label": "Paul Ricoeur",
        "x": 1440,
        "y": 981,
        "value": 22
    },
    {
        "id": 941,
        "label": "Rights",
        "x": -1121,
        "y": 248,
        "value": 60
    },
    {
        "id": 942,
        "label": "Rigid Designators",
        "x": 2357,
        "y": -2544,
        "value": 46
    },
    {
        "id": 943,
        "label": "Risk",
        "x": -893,
        "y": -2874,
        "value": 20
    },
    {
        "id": 944,
        "label": "Special Obligations",
        "x": -1301,
        "y": -1300,
        "value": 36
    },
    {
        "id": 945,
        "label": "Richard Rorty",
        "x": 1590,
        "y": 924,
        "value": 26
    },
    {
        "id": 946,
        "label": "Eugen Rosenstock-Huessy",
        "x": 1034,
        "y": 3086,
        "value": 14
    },
    {
        "id": 947,
        "label": "Franz Rosenzweig",
        "x": 1180,
        "y": 2773,
        "value": 26
    },
    {
        "id": 948,
        "label": "Antonio Rosmini",
        "x": -1213,
        "y": 1671,
        "value": 14
    },
    {
        "id": 949,
        "label": "William David Ross",
        "x": 1763,
        "y": -1474,
        "value": 16
    },
    {
        "id": 950,
        "label": "Jean Jacques Rousseau",
        "x": -1570,
        "y": 43,
        "value": 34
    },
    {
        "id": 951,
        "label": "Richard Sylvan [Routley]",
        "x": 1623,
        "y": -3995,
        "value": 12
    },
    {
        "id": 952,
        "label": "Josiah Royce",
        "x": 912,
        "y": 754,
        "value": 54
    },
    {
        "id": 953,
        "label": "Rule Consequentialism",
        "x": -114,
        "y": -1935,
        "value": 24
    },
    {
        "id": 954,
        "label": "Bertrand Russell",
        "x": 970,
        "y": -502,
        "value": 114
    },
    {
        "id": 955,
        "label": "Russell\u2019s Paradox",
        "x": 918,
        "y": -1857,
        "value": 46
    },
    {
        "id": 956,
        "label": "Gilbert Ryle",
        "x": 1819,
        "y": -1051,
        "value": 38
    },
    {
        "id": 957,
        "label": "Saadya [Saadiah]",
        "x": -2108,
        "y": 3080,
        "value": 12
    },
    {
        "id": 958,
        "label": "\u015a\u0101ntarak\u1e63ita",
        "x": 6022,
        "y": -954,
        "value": 26
    },
    {
        "id": 959,
        "label": "\u015a\u0101ntideva",
        "x": 7137,
        "y": -1424,
        "value": 10
    },
    {
        "id": 960,
        "label": "Sakya Pa\u1e47\u1e0dita [sa skya pa\u1e47 \u1e0di ta]",
        "x": 6808,
        "y": -377,
        "value": 14
    },
    {
        "id": 961,
        "label": "The Sale of Human Organs",
        "x": -1704,
        "y": 1508,
        "value": 24
    },
    {
        "id": 962,
        "label": "Wesley Salmon",
        "x": 983,
        "y": -3428,
        "value": 26
    },
    {
        "id": 963,
        "label": "Francisco Sanches",
        "x": -1206,
        "y": 707,
        "value": 26
    },
    {
        "id": 964,
        "label": "George Santayana",
        "x": 1271,
        "y": 1894,
        "value": 16
    },
    {
        "id": 965,
        "label": "Jean-Paul Sartre",
        "x": 1990,
        "y": 1369,
        "value": 56
    },
    {
        "id": 966,
        "label": "Skepticism",
        "x": 128,
        "y": -1333,
        "value": 70
    },
    {
        "id": 967,
        "label": "Max Scheler",
        "x": 2048,
        "y": 1183,
        "value": 34
    },
    {
        "id": 968,
        "label": "Friedrich Wilhelm Joseph von Schelling",
        "x": 68,
        "y": 1823,
        "value": 50
    },
    {
        "id": 969,
        "label": "Schema",
        "x": 685,
        "y": -2918,
        "value": 12
    },
    {
        "id": 970,
        "label": "Friedrich Schiller",
        "x": 274,
        "y": 3258,
        "value": 16
    },
    {
        "id": 971,
        "label": "August Wilhelm von Schlegel",
        "x": 185,
        "y": 3632,
        "value": 14
    },
    {
        "id": 972,
        "label": "Friedrich Schlegel",
        "x": 51,
        "y": 2585,
        "value": 30
    },
    {
        "id": 973,
        "label": "Friedrich Daniel Ernst Schleiermacher",
        "x": 175,
        "y": 1988,
        "value": 34
    },
    {
        "id": 974,
        "label": "Moritz Schlick",
        "x": -87,
        "y": -1201,
        "value": 34
    },
    {
        "id": 975,
        "label": "Carl Schmitt",
        "x": -983,
        "y": 1898,
        "value": 18
    },
    {
        "id": 976,
        "label": "Gershom Scholem",
        "x": 1310,
        "y": 3115,
        "value": 14
    },
    {
        "id": 977,
        "label": "Heinrich Scholz",
        "x": 368,
        "y": 347,
        "value": 12
    },
    {
        "id": 978,
        "label": "School of Names",
        "x": 4934,
        "y": -3814,
        "value": 26
    },
    {
        "id": 979,
        "label": "School of Salamanca",
        "x": -932,
        "y": 2297,
        "value": 16
    },
    {
        "id": 980,
        "label": "Arthur Schopenhauer",
        "x": 498,
        "y": 790,
        "value": 32
    },
    {
        "id": 981,
        "label": "Alfred Schutz",
        "x": 2225,
        "y": 1350,
        "value": 24
    },
    {
        "id": 982,
        "label": "Scientific Discovery",
        "x": 931,
        "y": -1177,
        "value": 28
    },
    {
        "id": 983,
        "label": "Scientific Explanation",
        "x": 1537,
        "y": -1595,
        "value": 52
    },
    {
        "id": 984,
        "label": "Scientific Method",
        "x": -562,
        "y": -395,
        "value": 100
    },
    {
        "id": 985,
        "label": "Scientific Objectivity",
        "x": -429,
        "y": -2622,
        "value": 24
    },
    {
        "id": 986,
        "label": "Scientific Progress",
        "x": -249,
        "y": -2128,
        "value": 28
    },
    {
        "id": 987,
        "label": "Scientific Realism",
        "x": 393,
        "y": -2616,
        "value": 66
    },
    {
        "id": 988,
        "label": "Scientific Research and Big Data",
        "x": 86,
        "y": -1479,
        "value": 24
    },
    {
        "id": 989,
        "label": "Scientific Revolutions",
        "x": -87,
        "y": -2120,
        "value": 46
    },
    {
        "id": 990,
        "label": "Madeleine de Scud\u00e9ry",
        "x": -2623,
        "y": -840,
        "value": 10
    },
    {
        "id": 991,
        "label": "Search Engines and Ethics",
        "x": -2226,
        "y": -3572,
        "value": 12
    },
    {
        "id": 992,
        "label": "Secession",
        "x": -1888,
        "y": 1897,
        "value": 22
    },
    {
        "id": 993,
        "label": "Self-Consciousness",
        "x": 2630,
        "y": -130,
        "value": 26
    },
    {
        "id": 994,
        "label": "Self-Deception",
        "x": 2970,
        "y": -987,
        "value": 26
    },
    {
        "id": 995,
        "label": "Self-Knowledge",
        "x": 2006,
        "y": -750,
        "value": 60
    },
    {
        "id": 996,
        "label": "Self-Reference",
        "x": 713,
        "y": -2705,
        "value": 50
    },
    {
        "id": 997,
        "label": "Wilfrid Sellars",
        "x": 1921,
        "y": -225,
        "value": 22
    },
    {
        "id": 998,
        "label": "Seneca",
        "x": -2576,
        "y": 141,
        "value": 24
    },
    {
        "id": 999,
        "label": "Sense-Data",
        "x": 2179,
        "y": -436,
        "value": 42
    },
    {
        "id": 1000,
        "label": "Set Theory",
        "x": 1091,
        "y": -341,
        "value": 48
    },
    {
        "id": 1001,
        "label": "Sex and Sexuality",
        "x": -2696,
        "y": 1825,
        "value": 10
    },
    {
        "id": 1002,
        "label": "Sextus Empiricus",
        "x": -793,
        "y": -442,
        "value": 36
    },
    {
        "id": 1003,
        "label": "Lord Shaftesbury [Anthony Ashley Cooper, 3rd Earl of Shaftesbury]",
        "x": -820,
        "y": -1341,
        "value": 30
    },
    {
        "id": 1004,
        "label": "Johannes Sharpe",
        "x": -929,
        "y": -1558,
        "value": 22
    },
    {
        "id": 1005,
        "label": "Mary Shepherd",
        "x": -292,
        "y": 822,
        "value": 14
    },
    {
        "id": 1006,
        "label": "Henry Sidgwick",
        "x": 294,
        "y": -469,
        "value": 38
    },
    {
        "id": 1007,
        "label": "Simon of Faversham",
        "x": -175,
        "y": 3310,
        "value": 20
    },
    {
        "id": 1008,
        "label": "Simplicity",
        "x": 493,
        "y": -2988,
        "value": 20
    },
    {
        "id": 1009,
        "label": "Simplicius",
        "x": -4043,
        "y": 929,
        "value": 26
    },
    {
        "id": 1010,
        "label": "Simpson\u2019s Paradox",
        "x": 1719,
        "y": -5189,
        "value": 8
    },
    {
        "id": 1011,
        "label": "Computer Simulations in Science",
        "x": -756,
        "y": -2043,
        "value": 16
    },
    {
        "id": 1012,
        "label": "Skeptical Theism",
        "x": 3949,
        "y": -1822,
        "value": 10
    },
    {
        "id": 1013,
        "label": "Skolem\u2019s Paradox",
        "x": 2687,
        "y": 801,
        "value": 10
    },
    {
        "id": 1014,
        "label": "Social Epistemology",
        "x": 147,
        "y": -2610,
        "value": 38
    },
    {
        "id": 1015,
        "label": "Social Institutions",
        "x": -639,
        "y": -1935,
        "value": 20
    },
    {
        "id": 1016,
        "label": "Socialism",
        "x": -1210,
        "y": 876,
        "value": 48
    },
    {
        "id": 1017,
        "label": "Social Minimum",
        "x": -2221,
        "y": -550,
        "value": 28
    },
    {
        "id": 1018,
        "label": "Social Networking and Ethics",
        "x": -1312,
        "y": -2737,
        "value": 20
    },
    {
        "id": 1019,
        "label": "Social Ontology",
        "x": 1970,
        "y": -1838,
        "value": 54
    },
    {
        "id": 1020,
        "label": "Formal Approaches to Social Procedures",
        "x": -412,
        "y": -3386,
        "value": 32
    },
    {
        "id": 1021,
        "label": "Sociobiology",
        "x": 3618,
        "y": 935,
        "value": 24
    },
    {
        "id": 1022,
        "label": "Socrates",
        "x": -996,
        "y": 319,
        "value": 28
    },
    {
        "id": 1023,
        "label": "Sophie de Grouchy",
        "x": -576,
        "y": -4092,
        "value": 6
    },
    {
        "id": 1024,
        "label": "Sophismata",
        "x": -2702,
        "y": -1035,
        "value": 28
    },
    {
        "id": 1025,
        "label": "Sorites Paradox",
        "x": 1922,
        "y": -2873,
        "value": 42
    },
    {
        "id": 1026,
        "label": "Sortals",
        "x": 2651,
        "y": -1184,
        "value": 28
    },
    {
        "id": 1027,
        "label": "Sounds",
        "x": 4702,
        "y": -1569,
        "value": 10
    },
    {
        "id": 1028,
        "label": "Sovereignty",
        "x": -1338,
        "y": 1249,
        "value": 52
    },
    {
        "id": 1029,
        "label": "Species",
        "x": 3334,
        "y": 570,
        "value": 34
    },
    {
        "id": 1030,
        "label": "Speech Acts",
        "x": 2112,
        "y": -2789,
        "value": 52
    },
    {
        "id": 1031,
        "label": "Herbert Spencer",
        "x": 1629,
        "y": 528,
        "value": 30
    },
    {
        "id": 1032,
        "label": "Speusippus",
        "x": -3148,
        "y": -121,
        "value": 32
    },
    {
        "id": 1033,
        "label": "Baruch Spinoza",
        "x": -663,
        "y": 222,
        "value": 70
    },
    {
        "id": 1034,
        "label": "Philosophy of Sport",
        "x": 5125,
        "y": -1843,
        "value": 4
    },
    {
        "id": 1035,
        "label": "The Traditional Square of Opposition",
        "x": 742,
        "y": -3360,
        "value": 18
    },
    {
        "id": 1036,
        "label": "\u015ar\u012bhar\u1e63a",
        "x": 4472,
        "y": -237,
        "value": 14
    },
    {
        "id": 1037,
        "label": "The St. Petersburg Paradox",
        "x": -475,
        "y": -4442,
        "value": 10
    },
    {
        "id": 1038,
        "label": "States of Affairs",
        "x": 2503,
        "y": -1989,
        "value": 50
    },
    {
        "id": 1039,
        "label": "Philosophy of Statistics",
        "x": 720,
        "y": -3160,
        "value": 44
    },
    {
        "id": 1040,
        "label": "Susan Stebbing",
        "x": -502,
        "y": -1667,
        "value": 16
    },
    {
        "id": 1041,
        "label": "Edith Stein",
        "x": 2911,
        "y": -74,
        "value": 24
    },
    {
        "id": 1042,
        "label": "Ethics of Stem Cell Research",
        "x": 573,
        "y": 3531,
        "value": 16
    },
    {
        "id": 1043,
        "label": "Charles Leslie Stevenson",
        "x": 3679,
        "y": 290,
        "value": 16
    },
    {
        "id": 1044,
        "label": "Max Stirner",
        "x": -2528,
        "y": 585,
        "value": 16
    },
    {
        "id": 1045,
        "label": "Stoicism",
        "x": -1391,
        "y": -801,
        "value": 66
    },
    {
        "id": 1046,
        "label": "Leo Strauss",
        "x": -277,
        "y": 1398,
        "value": 56
    },
    {
        "id": 1047,
        "label": "Peter Frederick Strawson",
        "x": 1681,
        "y": -2561,
        "value": 30
    },
    {
        "id": 1048,
        "label": "Structural Realism",
        "x": 210,
        "y": -2487,
        "value": 22
    },
    {
        "id": 1049,
        "label": "Carl Stumpf",
        "x": 3527,
        "y": 211,
        "value": 28
    },
    {
        "id": 1050,
        "label": "Johann Sturm",
        "x": -1661,
        "y": 1669,
        "value": 18
    },
    {
        "id": 1051,
        "label": "Francisco Su\u00e1rez",
        "x": -755,
        "y": 3024,
        "value": 14
    },
    {
        "id": 1052,
        "label": "Substructural Logics",
        "x": -55,
        "y": -2642,
        "value": 18
    },
    {
        "id": 1053,
        "label": "Suhrawardi",
        "x": -4993,
        "y": 1063,
        "value": 12
    },
    {
        "id": 1054,
        "label": "Suicide",
        "x": 507,
        "y": 1093,
        "value": 20
    },
    {
        "id": 1055,
        "label": "Supererogation",
        "x": 1290,
        "y": -3251,
        "value": 8
    },
    {
        "id": 1056,
        "label": "Supervenience",
        "x": 2941,
        "y": -1223,
        "value": 84
    },
    {
        "id": 1057,
        "label": "The Paradox of Suspense",
        "x": 3071,
        "y": -4067,
        "value": 8
    },
    {
        "id": 1058,
        "label": "Symmetry and Symmetry Breaking",
        "x": -1374,
        "y": -4988,
        "value": 6
    },
    {
        "id": 1059,
        "label": "Syrianus",
        "x": -3926,
        "y": 1499,
        "value": 20
    },
    {
        "id": 1060,
        "label": "Philosophy of Systems and Synthetic Biology",
        "x": 2475,
        "y": 1430,
        "value": 24
    },
    {
        "id": 1061,
        "label": "Alfred Tarski",
        "x": 996,
        "y": -1578,
        "value": 58
    },
    {
        "id": 1062,
        "label": "Nicolaus Taurellus",
        "x": -114,
        "y": -2308,
        "value": 10
    },
    {
        "id": 1063,
        "label": "Philosophy of Technology",
        "x": 520,
        "y": -2414,
        "value": 52
    },
    {
        "id": 1064,
        "label": "Bernardino Telesio",
        "x": -3253,
        "y": -734,
        "value": 28
    },
    {
        "id": 1065,
        "label": "Temporal Consciousness",
        "x": 3619,
        "y": -745,
        "value": 16
    },
    {
        "id": 1066,
        "label": "Territorial Rights and Territorial Justice",
        "x": -1147,
        "y": 2899,
        "value": 16
    },
    {
        "id": 1067,
        "label": "Terrorism",
        "x": -2090,
        "y": 1653,
        "value": 18
    },
    {
        "id": 1068,
        "label": "Philosophy of Theater",
        "x": 1617,
        "y": -3396,
        "value": 18
    },
    {
        "id": 1069,
        "label": "The Theology of Aristotle",
        "x": -3159,
        "y": 1990,
        "value": 18
    },
    {
        "id": 1070,
        "label": "Theophrastus",
        "x": -4756,
        "y": -1617,
        "value": 8
    },
    {
        "id": 1071,
        "label": "Theoretical Terms in Science",
        "x": 896,
        "y": -2490,
        "value": 28
    },
    {
        "id": 1072,
        "label": "Thick Ethical Concepts",
        "x": 2296,
        "y": -2241,
        "value": 22
    },
    {
        "id": 1073,
        "label": "Thomas of Erfurt",
        "x": -166,
        "y": 2756,
        "value": 16
    },
    {
        "id": 1074,
        "label": "Henry David Thoreau",
        "x": 598,
        "y": -137,
        "value": 64
    },
    {
        "id": 1075,
        "label": "Thought Experiments",
        "x": -242,
        "y": -1833,
        "value": 26
    },
    {
        "id": 1076,
        "label": "Tibetan Epistemology and Philosophy of Language",
        "x": 5290,
        "y": -1131,
        "value": 22
    },
    {
        "id": 1077,
        "label": "Time Machines",
        "x": 39,
        "y": -5199,
        "value": 6
    },
    {
        "id": 1078,
        "label": "Time Travel",
        "x": 866,
        "y": -4051,
        "value": 14
    },
    {
        "id": 1079,
        "label": "Timon of Phlius",
        "x": -2078,
        "y": -1152,
        "value": 24
    },
    {
        "id": 1080,
        "label": "Toleration",
        "x": -768,
        "y": -236,
        "value": 38
    },
    {
        "id": 1081,
        "label": "Theories of the Common Law of Torts",
        "x": -2632,
        "y": -1719,
        "value": 14
    },
    {
        "id": 1082,
        "label": "Torture",
        "x": -1884,
        "y": 2499,
        "value": 14
    },
    {
        "id": 1083,
        "label": "Touch",
        "x": 1011,
        "y": 2160,
        "value": 8
    },
    {
        "id": 1084,
        "label": "Transcendental Arguments",
        "x": 1511,
        "y": 672,
        "value": 20
    },
    {
        "id": 1085,
        "label": "Transcendentalism",
        "x": 414,
        "y": 1654,
        "value": 12
    },
    {
        "id": 1086,
        "label": "Medieval Theories of Transcendentals",
        "x": -516,
        "y": 3320,
        "value": 14
    },
    {
        "id": 1087,
        "label": "Feminist Perspectives on Trans Issues",
        "x": -115,
        "y": 4708,
        "value": 4
    },
    {
        "id": 1088,
        "label": "Transmission of Justification and Warrant",
        "x": 1174,
        "y": -1558,
        "value": 12
    },
    {
        "id": 1089,
        "label": "Transworld Identity",
        "x": 3367,
        "y": -2917,
        "value": 28
    },
    {
        "id": 1090,
        "label": "Trinity",
        "x": 666,
        "y": -572,
        "value": 78
    },
    {
        "id": 1091,
        "label": "Trust",
        "x": 872,
        "y": -68,
        "value": 14
    },
    {
        "id": 1092,
        "label": "Truth",
        "x": 1157,
        "y": -1673,
        "value": 48
    },
    {
        "id": 1093,
        "label": "Truthlikeness",
        "x": -861,
        "y": -3314,
        "value": 18
    },
    {
        "id": 1094,
        "label": "Truthmakers",
        "x": 2878,
        "y": -2507,
        "value": 40
    },
    {
        "id": 1095,
        "label": "Truth Values",
        "x": 2197,
        "y": -3682,
        "value": 14
    },
    {
        "id": 1096,
        "label": "Tsongkhapa",
        "x": 6715,
        "y": -712,
        "value": 16
    },
    {
        "id": 1097,
        "label": "Alan Turing",
        "x": 1017,
        "y": -3146,
        "value": 28
    },
    {
        "id": 1098,
        "label": "Turing Machines",
        "x": 616,
        "y": -3631,
        "value": 32
    },
    {
        "id": 1099,
        "label": "Kazimierz Twardowski",
        "x": 3824,
        "y": -752,
        "value": 30
    },
    {
        "id": 1100,
        "label": "The Theory of Two Truths in India",
        "x": 6124,
        "y": -1710,
        "value": 22
    },
    {
        "id": 1101,
        "label": "The Theory of Two Truths in Tibet",
        "x": 6906,
        "y": -1073,
        "value": 18
    },
    {
        "id": 1102,
        "label": "Types and Tokens",
        "x": 3592,
        "y": -1705,
        "value": 18
    },
    {
        "id": 1103,
        "label": "Type Theory",
        "x": -227,
        "y": -1511,
        "value": 38
    },
    {
        "id": 1104,
        "label": "Umar Khayyam",
        "x": -446,
        "y": -511,
        "value": 24
    },
    {
        "id": 1105,
        "label": "The Uncertainty Principle",
        "x": 2260,
        "y": -6110,
        "value": 4
    },
    {
        "id": 1106,
        "label": "Underdetermination of Scientific Theory",
        "x": 141,
        "y": -3080,
        "value": 26
    },
    {
        "id": 1107,
        "label": "Units and Levels of Selection",
        "x": 3801,
        "y": 1383,
        "value": 32
    },
    {
        "id": 1108,
        "label": "The Unity of Science",
        "x": 454,
        "y": -826,
        "value": 106
    },
    {
        "id": 1109,
        "label": "Vagueness",
        "x": 2224,
        "y": -2952,
        "value": 58
    },
    {
        "id": 1110,
        "label": "Hans Vaihinger",
        "x": 1575,
        "y": 351,
        "value": 18
    },
    {
        "id": 1111,
        "label": "Lorenzo Valla",
        "x": -1000,
        "y": -1824,
        "value": 22
    },
    {
        "id": 1112,
        "label": "Value Theory",
        "x": 2358,
        "y": 49,
        "value": 32
    },
    {
        "id": 1113,
        "label": "Vasubandhu",
        "x": 6602,
        "y": -1553,
        "value": 12
    },
    {
        "id": 1114,
        "label": "Moral Vegetarianism",
        "x": -68,
        "y": 3820,
        "value": 8
    },
    {
        "id": 1115,
        "label": "Giambattista Vico",
        "x": -529,
        "y": 308,
        "value": 32
    },
    {
        "id": 1116,
        "label": "Vienna Circle",
        "x": 600,
        "y": -1106,
        "value": 92
    },
    {
        "id": 1117,
        "label": "Virtue Ethics",
        "x": 81,
        "y": -1142,
        "value": 62
    },
    {
        "id": 1118,
        "label": "Juan Luis Vives [Joannes Ludovicus Vives]",
        "x": -3340,
        "y": -360,
        "value": 14
    },
    {
        "id": 1119,
        "label": "Theological Voluntarism",
        "x": 1545,
        "y": 1164,
        "value": 16
    },
    {
        "id": 1120,
        "label": "The Ethics and Rationality of Voting",
        "x": -3030,
        "y": -2189,
        "value": 14
    },
    {
        "id": 1121,
        "label": "Wang Yangming",
        "x": 5485,
        "y": -3464,
        "value": 18
    },
    {
        "id": 1122,
        "label": "War",
        "x": -1870,
        "y": 1550,
        "value": 36
    },
    {
        "id": 1123,
        "label": "James Ward",
        "x": 193,
        "y": 1690,
        "value": 14
    },
    {
        "id": 1124,
        "label": "Watsuji Tetsur\u014d",
        "x": 4648,
        "y": 2033,
        "value": 14
    },
    {
        "id": 1125,
        "label": "Max Weber",
        "x": -106,
        "y": 1237,
        "value": 62
    },
    {
        "id": 1126,
        "label": "Simone Weil",
        "x": -242,
        "y": 1588,
        "value": 16
    },
    {
        "id": 1127,
        "label": "Well-Being",
        "x": -516,
        "y": -233,
        "value": 58
    },
    {
        "id": 1128,
        "label": "Hermann Weyl",
        "x": -436,
        "y": -2098,
        "value": 26
    },
    {
        "id": 1129,
        "label": "William Whewell",
        "x": -65,
        "y": 219,
        "value": 36
    },
    {
        "id": 1130,
        "label": "Alfred North Whitehead",
        "x": 593,
        "y": -754,
        "value": 42
    },
    {
        "id": 1131,
        "label": "William of Auvergne",
        "x": -2081,
        "y": 1862,
        "value": 16
    },
    {
        "id": 1132,
        "label": "William of Champeaux",
        "x": 2847,
        "y": 2581,
        "value": 8
    },
    {
        "id": 1133,
        "label": "William of Sherwood",
        "x": -3210,
        "y": -3050,
        "value": 6
    },
    {
        "id": 1134,
        "label": "Bernard Williams",
        "x": 755,
        "y": -1255,
        "value": 26
    },
    {
        "id": 1135,
        "label": "Donald Cary Williams",
        "x": 2399,
        "y": -3315,
        "value": 12
    },
    {
        "id": 1136,
        "label": "John Cook Wilson",
        "x": 3659,
        "y": -1974,
        "value": 16
    },
    {
        "id": 1137,
        "label": "Wilhelm Windelband",
        "x": 1427,
        "y": 1812,
        "value": 26
    },
    {
        "id": 1138,
        "label": "Wisdom",
        "x": -634,
        "y": -3787,
        "value": 12
    },
    {
        "id": 1139,
        "label": "Ludwig Wittgenstein",
        "x": 950,
        "y": -796,
        "value": 78
    },
    {
        "id": 1140,
        "label": "Adam de Wodeham",
        "x": -2844,
        "y": 15,
        "value": 28
    },
    {
        "id": 1141,
        "label": "Christian Wolff",
        "x": 294,
        "y": 506,
        "value": 24
    },
    {
        "id": 1142,
        "label": "Mary Wollstonecraft",
        "x": -2306,
        "y": -2800,
        "value": 14
    },
    {
        "id": 1143,
        "label": "Word Meaning",
        "x": 2416,
        "y": -2745,
        "value": 54
    },
    {
        "id": 1144,
        "label": "World Government",
        "x": -1775,
        "y": 1108,
        "value": 34
    },
    {
        "id": 1145,
        "label": "Chauncey Wright",
        "x": 819,
        "y": 1212,
        "value": 18
    },
    {
        "id": 1146,
        "label": "Wilhelm Maximilian Wundt",
        "x": 1768,
        "y": 343,
        "value": 30
    },
    {
        "id": 1147,
        "label": "John Wyclif",
        "x": -1029,
        "y": -910,
        "value": 38
    },
    {
        "id": 1148,
        "label": "Xenocrates",
        "x": -3435,
        "y": -157,
        "value": 26
    },
    {
        "id": 1149,
        "label": "Xenophanes",
        "x": -2902,
        "y": -1900,
        "value": 30
    },
    {
        "id": 1150,
        "label": "Xunzi",
        "x": 4705,
        "y": -4271,
        "value": 28
    },
    {
        "id": 1151,
        "label": "Count Paul Yorck von Wartenburg",
        "x": 591,
        "y": 3019,
        "value": 14
    },
    {
        "id": 1152,
        "label": "Giacomo Zabarella",
        "x": -1116,
        "y": -1570,
        "value": 14
    },
    {
        "id": 1153,
        "label": "Zeno of Elea",
        "x": -3446,
        "y": -1568,
        "value": 26
    },
    {
        "id": 1154,
        "label": "Zhuangzi",
        "x": 4677,
        "y": -3967,
        "value": 32
    },
    {
        "id": 1155,
        "label": "Zhu Xi",
        "x": 5435,
        "y": -3800,
        "value": 18
    },
    {
        "id": 1156,
        "label": "Zombies",
        "x": 2378,
        "y": -968,
        "value": 38
    }
]