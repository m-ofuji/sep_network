const nodes = [
    {
        "id": 1,
        "label": "Abduction",
        "value": 21,
        "x": -428,
        "y": -1215
    },
    {
        "id": 2,
        "label": "Peter Abelard",
        "value": 17,
        "x": -4892,
        "y": 1246
    },
    {
        "id": 3,
        "label": "Abhidharma",
        "value": 16,
        "x": 1682,
        "y": 3448
    },
    {
        "id": 4,
        "label": "Abilities",
        "value": 13,
        "x": -1835,
        "y": -2475
    },
    {
        "id": 5,
        "label": "Abner of Burgos",
        "value": 14,
        "x": -3248,
        "y": 1558
    },
    {
        "id": 6,
        "label": "Judah Abrabanel",
        "value": 2,
        "x": 3364,
        "y": 3285
    },
    {
        "id": 7,
        "label": "Abstract Objects",
        "value": 36,
        "x": -689,
        "y": 1040
    },
    {
        "id": 8,
        "label": "Essential vs. Accidental Properties",
        "value": 35,
        "x": -948,
        "y": 565
    },
    {
        "id": 9,
        "label": "Action",
        "value": 41,
        "x": -185,
        "y": -1789
    },
    {
        "id": 10,
        "label": "Shared Agency",
        "value": 16,
        "x": -205,
        "y": -3470
    },
    {
        "id": 11,
        "label": "The Logic of Action",
        "value": 17,
        "x": -2129,
        "y": -622
    },
    {
        "id": 12,
        "label": "Action-based Theories of Perception",
        "value": 5,
        "x": 2260,
        "y": 2933
    },
    {
        "id": 13,
        "label": "Action at a Distance in Quantum Mechanics",
        "value": 24,
        "x": 3597,
        "y": 65
    },
    {
        "id": 14,
        "label": "Actualism",
        "value": 30,
        "x": -1394,
        "y": 1912
    },
    {
        "id": 15,
        "label": "Actualism and Possibilism in Ethics",
        "value": 5,
        "x": 3411,
        "y": -2927
    },
    {
        "id": 16,
        "label": "Adaptationism",
        "value": 36,
        "x": 2318,
        "y": -3832
    },
    {
        "id": 17,
        "label": "Jane Addams",
        "value": 17,
        "x": -79,
        "y": -2706
    },
    {
        "id": 18,
        "label": "Theodor W. Adorno",
        "value": 29,
        "x": 1477,
        "y": -1397
    },
    {
        "id": 19,
        "label": "Advance Directives and Substitute Decision-Making",
        "value": 13,
        "x": 1260,
        "y": -3984
    },
    {
        "id": 20,
        "label": "Giles of Rome",
        "value": 17,
        "x": -4824,
        "y": -713
    },
    {
        "id": 21,
        "label": "Ancient Skepticism",
        "value": 34,
        "x": 475,
        "y": -416
    },
    {
        "id": 22,
        "label": "The Concept of the Aesthetic",
        "value": 26,
        "x": 1906,
        "y": -267
    },
    {
        "id": 23,
        "label": "19th Century Romantic Aesthetics",
        "value": 7,
        "x": 3737,
        "y": 773
    },
    {
        "id": 24,
        "label": "Aesthetic Judgment",
        "value": 17,
        "x": 779,
        "y": -981
    },
    {
        "id": 25,
        "label": "Beardsley\u2019s Aesthetics",
        "value": 12,
        "x": -1290,
        "y": -2238
    },
    {
        "id": 26,
        "label": "18th Century British Aesthetics",
        "value": 20,
        "x": 814,
        "y": -852
    },
    {
        "id": 27,
        "label": "Collingwood\u2019s Aesthetics",
        "value": 10,
        "x": 432,
        "y": 94
    },
    {
        "id": 28,
        "label": "Croce\u2019s Aesthetics",
        "value": 15,
        "x": 1713,
        "y": -874
    },
    {
        "id": 29,
        "label": "The Definition of Art",
        "value": 15,
        "x": 988,
        "y": -1468
    },
    {
        "id": 30,
        "label": "Dewey\u2019s Aesthetics",
        "value": 16,
        "x": -186,
        "y": -1936
    },
    {
        "id": 31,
        "label": "Environmental Aesthetics",
        "value": 11,
        "x": 2950,
        "y": -1383
    },
    {
        "id": 32,
        "label": "Existentialist Aesthetics",
        "value": 13,
        "x": 2246,
        "y": 1537
    },
    {
        "id": 33,
        "label": "Feminist Aesthetics",
        "value": 8,
        "x": 4335,
        "y": -867
    },
    {
        "id": 34,
        "label": "18th Century French Aesthetics",
        "value": 13,
        "x": 373,
        "y": -370
    },
    {
        "id": 35,
        "label": "Gadamer\u2019s Aesthetics",
        "value": 8,
        "x": 376,
        "y": -2102
    },
    {
        "id": 36,
        "label": "18th Century German Aesthetics",
        "value": 23,
        "x": 1542,
        "y": 123
    },
    {
        "id": 37,
        "label": "Goodman\u2019s Aesthetics",
        "value": 18,
        "x": -369,
        "y": -1410
    },
    {
        "id": 38,
        "label": "Hegel\u2019s Aesthetics",
        "value": 16,
        "x": 2438,
        "y": 17
    },
    {
        "id": 39,
        "label": "Heidegger\u2019s Aesthetics",
        "value": 9,
        "x": 2861,
        "y": 667
    },
    {
        "id": 40,
        "label": "Hume\u2019s Aesthetics",
        "value": 14,
        "x": 684,
        "y": -1353
    },
    {
        "id": 41,
        "label": "Japanese Aesthetics",
        "value": 5,
        "x": 1073,
        "y": 4411
    },
    {
        "id": 42,
        "label": "Plato\u2019s Aesthetics",
        "value": 10,
        "x": 2873,
        "y": 206
    },
    {
        "id": 43,
        "label": "Schopenhauer\u2019s Aesthetics",
        "value": 9,
        "x": 2749,
        "y": 443
    },
    {
        "id": 44,
        "label": "Wittgenstein\u2019s Aesthetics",
        "value": 5,
        "x": -2613,
        "y": -2655
    },
    {
        "id": 45,
        "label": "Aesthetics of the Everyday",
        "value": 21,
        "x": 2163,
        "y": 85
    },
    {
        "id": 46,
        "label": "Affirmative Action",
        "value": 18,
        "x": 1521,
        "y": -5597
    },
    {
        "id": 47,
        "label": "Africana Philosophy",
        "value": 18,
        "x": -857,
        "y": -5041
    },
    {
        "id": 48,
        "label": "African Ethics",
        "value": 4,
        "x": -1397,
        "y": -6201
    },
    {
        "id": 49,
        "label": "African Sage Philosophy",
        "value": 2,
        "x": -1866,
        "y": -7472
    },
    {
        "id": 50,
        "label": "Afterlife",
        "value": 18,
        "x": -802,
        "y": -527
    },
    {
        "id": 51,
        "label": "Agency",
        "value": 27,
        "x": -460,
        "y": -1890
    },
    {
        "id": 52,
        "label": "Reasons for Action: Agent-Neutral vs. Agent-Relative",
        "value": 14,
        "x": 2649,
        "y": -2546
    },
    {
        "id": 53,
        "label": "Atheism and Agnosticism",
        "value": 28,
        "x": -1353,
        "y": -407
    },
    {
        "id": 54,
        "label": "Heinrich Cornelius Agrippa von Nettesheim",
        "value": 9,
        "x": 589,
        "y": 4049
    },
    {
        "id": 55,
        "label": "Akan Philosophy of the Person",
        "value": 5,
        "x": -885,
        "y": -6259
    },
    {
        "id": 56,
        "label": "Weakness of Will",
        "value": 15,
        "x": 340,
        "y": -1578
    },
    {
        "id": 57,
        "label": "\u2018Abd al-Latif al-Baghdadi",
        "value": 9,
        "x": -2747,
        "y": 3311
    },
    {
        "id": 58,
        "label": "al-Farabi",
        "value": 28,
        "x": -3007,
        "y": 888
    },
    {
        "id": 59,
        "label": "al-Farabi\u2019s Philosophy of Logic and Language",
        "value": 12,
        "x": -3346,
        "y": 511
    },
    {
        "id": 60,
        "label": "al-Farabi\u2019s Philosophy of Society and Religion",
        "value": 10,
        "x": -2643,
        "y": -1024
    },
    {
        "id": 61,
        "label": "al-Farabi\u2019s Psychology and Epistemology",
        "value": 10,
        "x": -3647,
        "y": 1149
    },
    {
        "id": 62,
        "label": "al-Ghazali",
        "value": 20,
        "x": -3979,
        "y": 1841
    },
    {
        "id": 63,
        "label": "al-Kindi",
        "value": 21,
        "x": -2988,
        "y": 2152
    },
    {
        "id": 64,
        "label": "Isaac Albalag",
        "value": 7,
        "x": -4459,
        "y": 3161
    },
    {
        "id": 65,
        "label": "Albert of Saxony",
        "value": 9,
        "x": -5003,
        "y": 2298
    },
    {
        "id": 66,
        "label": "Albert the Great",
        "value": 25,
        "x": -3363,
        "y": 330
    },
    {
        "id": 67,
        "label": "Joseph Albo",
        "value": 12,
        "x": -3103,
        "y": 159
    },
    {
        "id": 68,
        "label": "Alcmaeon",
        "value": 7,
        "x": 3425,
        "y": 2106
    },
    {
        "id": 69,
        "label": "Samuel Alexander",
        "value": 8,
        "x": -316,
        "y": -2058
    },
    {
        "id": 70,
        "label": "Alexander of Aphrodisias",
        "value": 26,
        "x": -1762,
        "y": 2639
    },
    {
        "id": 71,
        "label": "Algebra",
        "value": 13,
        "x": -2818,
        "y": 4108
    },
    {
        "id": 72,
        "label": "The Algebra of Logic Tradition",
        "value": 10,
        "x": -3088,
        "y": 4366
    },
    {
        "id": 73,
        "label": "Alienation",
        "value": 8,
        "x": 3187,
        "y": -2072
    },
    {
        "id": 74,
        "label": "Louis Althusser",
        "value": 13,
        "x": 1778,
        "y": -2444
    },
    {
        "id": 75,
        "label": "Altruism",
        "value": 15,
        "x": 3133,
        "y": -3004
    },
    {
        "id": 76,
        "label": "Biological Altruism",
        "value": 17,
        "x": 3051,
        "y": -3978
    },
    {
        "id": 77,
        "label": "Empirical Approaches to Altruism",
        "value": 12,
        "x": 3564,
        "y": -2390
    },
    {
        "id": 78,
        "label": "Robert Alyngton",
        "value": 11,
        "x": -5913,
        "y": 1913
    },
    {
        "id": 79,
        "label": "Ambiguity",
        "value": 8,
        "x": -2191,
        "y": -1766
    },
    {
        "id": 80,
        "label": "Ammonius",
        "value": 26,
        "x": -1949,
        "y": 3261
    },
    {
        "id": 81,
        "label": "Plotinus",
        "value": 50,
        "x": -923,
        "y": 2046
    },
    {
        "id": 82,
        "label": "Medieval Theories of Analogy",
        "value": 20,
        "x": -3979,
        "y": -320
    },
    {
        "id": 83,
        "label": "Analogy and Analogical Reasoning",
        "value": 18,
        "x": -331,
        "y": -1587
    },
    {
        "id": 84,
        "label": "Analysis",
        "value": 37,
        "x": -1395,
        "y": 455
    },
    {
        "id": 85,
        "label": "The Analytic/Synthetic Distinction",
        "value": 49,
        "x": -636,
        "y": 94
    },
    {
        "id": 86,
        "label": "Anaphora",
        "value": 14,
        "x": -2838,
        "y": -1498
    },
    {
        "id": 87,
        "label": "Anarchism",
        "value": 17,
        "x": 1105,
        "y": -3638
    },
    {
        "id": 88,
        "label": "Anaxagoras",
        "value": 14,
        "x": 2454,
        "y": 2477
    },
    {
        "id": 89,
        "label": "Pyrrho",
        "value": 10,
        "x": 2856,
        "y": -627
    },
    {
        "id": 90,
        "label": "John Anderson",
        "value": 21,
        "x": -1271,
        "y": -261
    },
    {
        "id": 91,
        "label": "Commentators on Aristotle",
        "value": 27,
        "x": -2212,
        "y": 3158
    },
    {
        "id": 92,
        "label": "Animal Cognition",
        "value": 34,
        "x": -433,
        "y": -1662
    },
    {
        "id": 93,
        "label": "Animal Consciousness",
        "value": 31,
        "x": -692,
        "y": -658
    },
    {
        "id": 94,
        "label": "Animalism",
        "value": 13,
        "x": 911,
        "y": -1184
    },
    {
        "id": 95,
        "label": "The Moral Status of Animals",
        "value": 19,
        "x": 840,
        "y": -3313
    },
    {
        "id": 96,
        "label": "Anomalous Monism",
        "value": 26,
        "x": -1098,
        "y": -908
    },
    {
        "id": 97,
        "label": "Gertrude Elizabeth Margaret Anscombe",
        "value": 12,
        "x": -623,
        "y": -1979
    },
    {
        "id": 98,
        "label": "Saint Anselm",
        "value": 23,
        "x": -3717,
        "y": -363
    },
    {
        "id": 99,
        "label": "Moral Anti-Realism",
        "value": 26,
        "x": 1511,
        "y": -455
    },
    {
        "id": 100,
        "label": "Antiochus of Ascalon",
        "value": 9,
        "x": 299,
        "y": -3188
    },
    {
        "id": 101,
        "label": "A Priori Justification and Knowledge",
        "value": 37,
        "x": 716,
        "y": 343
    },
    {
        "id": 102,
        "label": "Epistemological Problems of Perception",
        "value": 27,
        "x": -139,
        "y": 446
    },
    {
        "id": 103,
        "label": "Skepticism",
        "value": 48,
        "x": 500,
        "y": 270
    },
    {
        "id": 104,
        "label": "Saint Thomas Aquinas",
        "value": 95,
        "x": -2686,
        "y": -653
    },
    {
        "id": 105,
        "label": "Aquinas\u2019 Moral, Political, and Legal Philosophy",
        "value": 10,
        "x": -1852,
        "y": -3312
    },
    {
        "id": 106,
        "label": "Arabic and Islamic Metaphysics",
        "value": 23,
        "x": -3174,
        "y": 1978
    },
    {
        "id": 107,
        "label": "Arabic and Islamic Natural Philosophy and Natural Science",
        "value": 19,
        "x": -2357,
        "y": 2683
    },
    {
        "id": 108,
        "label": "Arabic and Islamic Philosophy of Language and Logic",
        "value": 22,
        "x": -3863,
        "y": 1089
    },
    {
        "id": 109,
        "label": "Arabic and Islamic Psychology and Philosophy of Mind",
        "value": 19,
        "x": -2099,
        "y": 2108
    },
    {
        "id": 110,
        "label": "Greek Sources in Arabic and Islamic Philosophy",
        "value": 27,
        "x": -2375,
        "y": 2106
    },
    {
        "id": 111,
        "label": "Influence of Arabic and Islamic Philosophy on Judaic Thought",
        "value": 30,
        "x": -3913,
        "y": 1659
    },
    {
        "id": 112,
        "label": "Influence of Arabic and Islamic Philosophy on the Latin West",
        "value": 29,
        "x": -3161,
        "y": 695
    },
    {
        "id": 113,
        "label": "Ibn Kammuna",
        "value": 10,
        "x": -3806,
        "y": -1163
    },
    {
        "id": 114,
        "label": "Ikhw\u00e2n al-Saf\u00e2\u2019",
        "value": 11,
        "x": -1863,
        "y": 3048
    },
    {
        "id": 115,
        "label": "Mysticism in Arabic and Islamic Philosophy",
        "value": 12,
        "x": -4572,
        "y": -576
    },
    {
        "id": 116,
        "label": "Arcesilaus",
        "value": 15,
        "x": 920,
        "y": -1922
    },
    {
        "id": 117,
        "label": "Philosophy of Architecture",
        "value": 13,
        "x": 2156,
        "y": -574
    },
    {
        "id": 118,
        "label": "Archytas",
        "value": 9,
        "x": 2932,
        "y": 1699
    },
    {
        "id": 119,
        "label": "Hannah Arendt",
        "value": 20,
        "x": 1495,
        "y": -626
    },
    {
        "id": 120,
        "label": "Ancient Ethical Theory",
        "value": 19,
        "x": 2503,
        "y": -1130
    },
    {
        "id": 121,
        "label": "Epistemic Utility Arguments for Probabilism",
        "value": 9,
        "x": 2271,
        "y": 1721
    },
    {
        "id": 122,
        "label": "Aristotelianism in the Renaissance",
        "value": 31,
        "x": -2283,
        "y": 2846
    },
    {
        "id": 123,
        "label": "Aristotle",
        "value": 124,
        "x": -2580,
        "y": 835
    },
    {
        "id": 124,
        "label": "David",
        "value": 9,
        "x": -2604,
        "y": 4819
    },
    {
        "id": 125,
        "label": "Elias",
        "value": 10,
        "x": -2303,
        "y": 4375
    },
    {
        "id": 126,
        "label": "Olympiodorus",
        "value": 12,
        "x": -1992,
        "y": 4513
    },
    {
        "id": 127,
        "label": "John Philoponus",
        "value": 17,
        "x": -2735,
        "y": 3777
    },
    {
        "id": 128,
        "label": "Simplicius",
        "value": 14,
        "x": -997,
        "y": 3856
    },
    {
        "id": 129,
        "label": "Aristotle\u2019s Biology",
        "value": 13,
        "x": -512,
        "y": -1348
    },
    {
        "id": 130,
        "label": "Aristotle\u2019s Categories",
        "value": 12,
        "x": -2922,
        "y": 1226
    },
    {
        "id": 131,
        "label": "Aristotle\u2019s Ethics",
        "value": 36,
        "x": 258,
        "y": -1747
    },
    {
        "id": 132,
        "label": "Aristotle\u2019s Logic",
        "value": 48,
        "x": -2776,
        "y": 865
    },
    {
        "id": 133,
        "label": "Aristotle\u2019s Metaphysics",
        "value": 37,
        "x": -1407,
        "y": 1597
    },
    {
        "id": 134,
        "label": "Aristotle\u2019s Political Theory",
        "value": 10,
        "x": 642,
        "y": -1589
    },
    {
        "id": 135,
        "label": "Aristotle\u2019s Psychology",
        "value": 18,
        "x": -1231,
        "y": 1961
    },
    {
        "id": 136,
        "label": "Aristotle\u2019s Rhetoric",
        "value": 10,
        "x": -1457,
        "y": -1120
    },
    {
        "id": 137,
        "label": "Aristotle on Causality",
        "value": 14,
        "x": -1379,
        "y": 2552
    },
    {
        "id": 138,
        "label": "Aristotle and Mathematics",
        "value": 6,
        "x": -4676,
        "y": 1606
    },
    {
        "id": 139,
        "label": "Aristotle\u2019s Natural Philosophy",
        "value": 17,
        "x": -1246,
        "y": 2162
    },
    {
        "id": 140,
        "label": "Aristotle on Non-contradiction",
        "value": 24,
        "x": -1520,
        "y": 1245
    },
    {
        "id": 141,
        "label": "Antoine Arnauld",
        "value": 18,
        "x": -551,
        "y": 2442
    },
    {
        "id": 142,
        "label": "Voltaire",
        "value": 16,
        "x": 695,
        "y": -45
    },
    {
        "id": 143,
        "label": "Arrow\u2019s Theorem",
        "value": 10,
        "x": 3515,
        "y": -1109
    },
    {
        "id": 144,
        "label": "Erotic Art",
        "value": 11,
        "x": 3886,
        "y": -1272
    },
    {
        "id": 145,
        "label": "Conceptual Art",
        "value": 7,
        "x": -1470,
        "y": -2994
    },
    {
        "id": 146,
        "label": "Artifact",
        "value": 15,
        "x": 1310,
        "y": -1760
    },
    {
        "id": 147,
        "label": "Artificial Intelligence",
        "value": 27,
        "x": -1916,
        "y": -1863
    },
    {
        "id": 148,
        "label": "Automated Reasoning",
        "value": 14,
        "x": -3290,
        "y": -70
    },
    {
        "id": 149,
        "label": "Formal Representations of Belief",
        "value": 22,
        "x": 967,
        "y": 627
    },
    {
        "id": 150,
        "label": "The Chinese Room Argument",
        "value": 25,
        "x": -1712,
        "y": -1385
    },
    {
        "id": 151,
        "label": "Connectionism",
        "value": 18,
        "x": -2702,
        "y": -1948
    },
    {
        "id": 152,
        "label": "Defeasible Reasoning",
        "value": 22,
        "x": -344,
        "y": -412
    },
    {
        "id": 153,
        "label": "Ethics of Artificial Intelligence and Robotics",
        "value": 7,
        "x": 3663,
        "y": -5297
    },
    {
        "id": 154,
        "label": "The Frame Problem",
        "value": 15,
        "x": -2397,
        "y": -1764
    },
    {
        "id": 155,
        "label": "Logic and Artificial Intelligence",
        "value": 17,
        "x": -2853,
        "y": -1183
    },
    {
        "id": 156,
        "label": "The Turing Test",
        "value": 12,
        "x": -3075,
        "y": -1367
    },
    {
        "id": 157,
        "label": "Tense and Aspect",
        "value": 10,
        "x": -3176,
        "y": -778
    },
    {
        "id": 158,
        "label": "Assertion",
        "value": 24,
        "x": -1587,
        "y": -1885
    },
    {
        "id": 159,
        "label": "Associationist Theories of Thought",
        "value": 10,
        "x": -1498,
        "y": -2591
    },
    {
        "id": 160,
        "label": "Mary Astell",
        "value": 11,
        "x": 1047,
        "y": 1497
    },
    {
        "id": 161,
        "label": "Atomism from the 17th to the 20th Century",
        "value": 23,
        "x": 943,
        "y": 1277
    },
    {
        "id": 162,
        "label": "Ancient Atomism",
        "value": 25,
        "x": 135,
        "y": 2618
    },
    {
        "id": 163,
        "label": "Attention",
        "value": 13,
        "x": -273,
        "y": -69
    },
    {
        "id": 164,
        "label": "Properties",
        "value": 102,
        "x": -1793,
        "y": 325
    },
    {
        "id": 165,
        "label": "Auditory Perception",
        "value": 12,
        "x": -2928,
        "y": 1355
    },
    {
        "id": 166,
        "label": "Saint Augustine",
        "value": 63,
        "x": -1917,
        "y": 448
    },
    {
        "id": 167,
        "label": "Peter Auriol",
        "value": 10,
        "x": -5437,
        "y": 275
    },
    {
        "id": 168,
        "label": "John Austin",
        "value": 10,
        "x": -1837,
        "y": -4973
    },
    {
        "id": 169,
        "label": "John Langshaw Austin",
        "value": 30,
        "x": -1046,
        "y": -1089
    },
    {
        "id": 170,
        "label": "Authenticity",
        "value": 7,
        "x": 991,
        "y": 2354
    },
    {
        "id": 171,
        "label": "Authority",
        "value": 41,
        "x": -74,
        "y": -3653
    },
    {
        "id": 172,
        "label": "Legal Obligation and Authority",
        "value": 24,
        "x": -1013,
        "y": -4641
    },
    {
        "id": 173,
        "label": "Informed Consent",
        "value": 24,
        "x": 1871,
        "y": -4367
    },
    {
        "id": 174,
        "label": "Autonomy in Moral and Political Philosophy",
        "value": 38,
        "x": 1070,
        "y": -3488
    },
    {
        "id": 175,
        "label": "Personal Autonomy",
        "value": 50,
        "x": 480,
        "y": -2459
    },
    {
        "id": 176,
        "label": "Ibn Rushd\u2019s Natural Philosophy",
        "value": 2,
        "x": -6376,
        "y": 2991
    },
    {
        "id": 177,
        "label": "Solomon Ibn Gabirol [Avicebron]",
        "value": 15,
        "x": -3739,
        "y": 1281
    },
    {
        "id": 178,
        "label": "Ibn Sina [Avicenna]",
        "value": 34,
        "x": -3669,
        "y": 1466
    },
    {
        "id": 179,
        "label": "Ibn Sina\u2019s Logic",
        "value": 15,
        "x": -3984,
        "y": 1259
    },
    {
        "id": 180,
        "label": "Ibn Sina\u2019s Metaphysics",
        "value": 9,
        "x": -2717,
        "y": 3541
    },
    {
        "id": 181,
        "label": "Ibn Sina\u2019s Natural Philosophy",
        "value": 10,
        "x": -1916,
        "y": 3617
    },
    {
        "id": 182,
        "label": "Bodily Awareness",
        "value": 16,
        "x": 319,
        "y": 1366
    },
    {
        "id": 183,
        "label": "Alfred Jules Ayer",
        "value": 20,
        "x": 185,
        "y": -134
    },
    {
        "id": 184,
        "label": "Francis Bacon",
        "value": 22,
        "x": 186,
        "y": 559
    },
    {
        "id": 185,
        "label": "Roger Bacon",
        "value": 35,
        "x": -2781,
        "y": 588
    },
    {
        "id": 186,
        "label": "Scottish Philosophy in the 19th Century",
        "value": 11,
        "x": 136,
        "y": -2082
    },
    {
        "id": 187,
        "label": "The Epistemic Basing Relation",
        "value": 5,
        "x": 526,
        "y": 3364
    },
    {
        "id": 188,
        "label": "Jean Baudrillard",
        "value": 6,
        "x": 3877,
        "y": -1836
    },
    {
        "id": 189,
        "label": "Bruno Bauer",
        "value": 9,
        "x": 2857,
        "y": -2505
    },
    {
        "id": 190,
        "label": "Bayes\u2019 Theorem",
        "value": 22,
        "x": -6,
        "y": -2210
    },
    {
        "id": 191,
        "label": "Pierre Bayle",
        "value": 15,
        "x": -495,
        "y": -273
    },
    {
        "id": 192,
        "label": "Scottish Philosophy in the 18th Century",
        "value": 28,
        "x": -28,
        "y": -1901
    },
    {
        "id": 193,
        "label": "Beauty",
        "value": 26,
        "x": 574,
        "y": 77
    },
    {
        "id": 194,
        "label": "Simone de Beauvoir",
        "value": 35,
        "x": 2962,
        "y": -908
    },
    {
        "id": 195,
        "label": "Behaviorism",
        "value": 27,
        "x": -1284,
        "y": -1257
    },
    {
        "id": 196,
        "label": "Existence",
        "value": 34,
        "x": -843,
        "y": 1394
    },
    {
        "id": 197,
        "label": "Time",
        "value": 51,
        "x": -995,
        "y": 855
    },
    {
        "id": 198,
        "label": "Being and Becoming in Modern Physics",
        "value": 22,
        "x": -982,
        "y": 1541
    },
    {
        "id": 199,
        "label": "Belief",
        "value": 62,
        "x": -475,
        "y": -664
    },
    {
        "id": 200,
        "label": "The Ethics of Belief",
        "value": 16,
        "x": -1483,
        "y": -522
    },
    {
        "id": 201,
        "label": "Belief Merging and Judgment Aggregation",
        "value": 7,
        "x": 3305,
        "y": 803
    },
    {
        "id": 202,
        "label": "Bell\u2019s Theorem",
        "value": 18,
        "x": 3886,
        "y": 150
    },
    {
        "id": 203,
        "label": "The Principle of Beneficence in Applied Ethics",
        "value": 24,
        "x": 1278,
        "y": -4567
    },
    {
        "id": 204,
        "label": "Walter Benjamin",
        "value": 33,
        "x": 1688,
        "y": -551
    },
    {
        "id": 205,
        "label": "Jeremy Bentham",
        "value": 25,
        "x": 94,
        "y": -3660
    },
    {
        "id": 206,
        "label": "Henri Bergson",
        "value": 18,
        "x": 748,
        "y": 1225
    },
    {
        "id": 207,
        "label": "George Berkeley",
        "value": 29,
        "x": 8,
        "y": -149
    },
    {
        "id": 208,
        "label": "Isaiah Berlin",
        "value": 46,
        "x": 788,
        "y": -1705
    },
    {
        "id": 209,
        "label": "Basil [Cardinal] Bessarion",
        "value": 13,
        "x": -1380,
        "y": 3829
    },
    {
        "id": 210,
        "label": "Implicit Bias",
        "value": 13,
        "x": 1380,
        "y": -1896
    },
    {
        "id": 211,
        "label": "Binarium Famosissimum",
        "value": 14,
        "x": -4747,
        "y": -205
    },
    {
        "id": 212,
        "label": "Biodiversity",
        "value": 10,
        "x": 3114,
        "y": -4565
    },
    {
        "id": 213,
        "label": "Biological Individuals",
        "value": 26,
        "x": 2484,
        "y": -4003
    },
    {
        "id": 214,
        "label": "Biological Information",
        "value": 24,
        "x": 1249,
        "y": -3435
    },
    {
        "id": 215,
        "label": "Conservation Biology",
        "value": 9,
        "x": 2939,
        "y": -5053
    },
    {
        "id": 216,
        "label": "Developmental Biology",
        "value": 44,
        "x": 1330,
        "y": -2503
    },
    {
        "id": 217,
        "label": "Experiment in Biology",
        "value": 31,
        "x": 1046,
        "y": -2540
    },
    {
        "id": 218,
        "label": "Molecular Biology",
        "value": 49,
        "x": 1634,
        "y": -3206
    },
    {
        "id": 219,
        "label": "Philosophy of Biology",
        "value": 64,
        "x": 1998,
        "y": -3910
    },
    {
        "id": 220,
        "label": "Reductionism in Biology",
        "value": 44,
        "x": 1376,
        "y": -2684
    },
    {
        "id": 221,
        "label": "Teleological Notions in Biology",
        "value": 25,
        "x": 1458,
        "y": -3286
    },
    {
        "id": 222,
        "label": "Feminist Philosophy of Biology",
        "value": 32,
        "x": 2456,
        "y": -3049
    },
    {
        "id": 223,
        "label": "Philosophy of Biomedicine",
        "value": 9,
        "x": 3291,
        "y": -1441
    },
    {
        "id": 224,
        "label": "Blame",
        "value": 13,
        "x": -2201,
        "y": -2892
    },
    {
        "id": 225,
        "label": "Jean Bodin",
        "value": 15,
        "x": 187,
        "y": -2733
    },
    {
        "id": 226,
        "label": "Substance",
        "value": 46,
        "x": -955,
        "y": 722
    },
    {
        "id": 227,
        "label": "Anicius Manlius Severinus Boethius",
        "value": 36,
        "x": -3808,
        "y": 315
    },
    {
        "id": 228,
        "label": "Boethius of Dacia",
        "value": 9,
        "x": -3485,
        "y": -1296
    },
    {
        "id": 229,
        "label": "Bohr\u2019s Correspondence Principle",
        "value": 5,
        "x": 5063,
        "y": -49
    },
    {
        "id": 230,
        "label": "Bernard Bolzano",
        "value": 20,
        "x": -1567,
        "y": 2476
    },
    {
        "id": 231,
        "label": "Bolzano\u2019s Logic",
        "value": 5,
        "x": -1743,
        "y": 4198
    },
    {
        "id": 232,
        "label": "Saint Bonaventure",
        "value": 18,
        "x": -3391,
        "y": 80
    },
    {
        "id": 233,
        "label": "George Boole",
        "value": 9,
        "x": -3756,
        "y": 4844
    },
    {
        "id": 234,
        "label": "The Mathematics of Boolean Algebra",
        "value": 13,
        "x": -3395,
        "y": 4036
    },
    {
        "id": 235,
        "label": "Bernard Bosanquet",
        "value": 9,
        "x": -1111,
        "y": -3004
    },
    {
        "id": 236,
        "label": "Boundary",
        "value": 10,
        "x": -1121,
        "y": 2711
    },
    {
        "id": 237,
        "label": "Bounded Rationality",
        "value": 10,
        "x": 3220,
        "y": -1651
    },
    {
        "id": 238,
        "label": "Robert Boyle",
        "value": 35,
        "x": -252,
        "y": 543
    },
    {
        "id": 239,
        "label": "Francis Herbert Bradley",
        "value": 27,
        "x": -1349,
        "y": -974
    },
    {
        "id": 240,
        "label": "Francis Herbert Bradley\u2019s Moral and Political Philosophy",
        "value": 12,
        "x": -1265,
        "y": -2853
    },
    {
        "id": 241,
        "label": "Bradley\u2019s Regress",
        "value": 8,
        "x": -3548,
        "y": -763
    },
    {
        "id": 242,
        "label": "The Definition of Death",
        "value": 17,
        "x": 451,
        "y": -1288
    },
    {
        "id": 243,
        "label": "Skepticism and Content Externalism",
        "value": 13,
        "x": 1081,
        "y": 1031
    },
    {
        "id": 244,
        "label": "Franz Brentano",
        "value": 39,
        "x": -13,
        "y": 2157
    },
    {
        "id": 245,
        "label": "Brentano\u2019s Theory of Judgement",
        "value": 14,
        "x": -733,
        "y": 2787
    },
    {
        "id": 246,
        "label": "Charlie Dunbar Broad",
        "value": 13,
        "x": -1416,
        "y": 622
    },
    {
        "id": 247,
        "label": "Luitzen Egbertus Jan Brouwer",
        "value": 30,
        "x": -1744,
        "y": 2437
    },
    {
        "id": 248,
        "label": "Giordano Bruno",
        "value": 26,
        "x": -931,
        "y": 2399
    },
    {
        "id": 249,
        "label": "Martin Buber",
        "value": 13,
        "x": 2158,
        "y": 1331
    },
    {
        "id": 250,
        "label": "Buddha",
        "value": 13,
        "x": 1414,
        "y": 4421
    },
    {
        "id": 251,
        "label": "Chan Buddhism",
        "value": 10,
        "x": -1010,
        "y": 5218
    },
    {
        "id": 252,
        "label": "Ethics in Indian and Tibetan Buddhism",
        "value": 9,
        "x": 206,
        "y": -1301
    },
    {
        "id": 253,
        "label": "Mind in Indian Buddhist Philosophy",
        "value": 21,
        "x": 1138,
        "y": 2347
    },
    {
        "id": 254,
        "label": "Tiantai Buddhism",
        "value": 6,
        "x": 598,
        "y": 5576
    },
    {
        "id": 255,
        "label": "Japanese Zen Buddhist Philosophy",
        "value": 11,
        "x": -374,
        "y": 5706
    },
    {
        "id": 256,
        "label": "Huayan Buddhism",
        "value": 17,
        "x": -975,
        "y": 4552
    },
    {
        "id": 257,
        "label": "John Buridan",
        "value": 41,
        "x": -4412,
        "y": 1310
    },
    {
        "id": 258,
        "label": "Edmund Burke",
        "value": 12,
        "x": 480,
        "y": -2617
    },
    {
        "id": 259,
        "label": "Walter Burley",
        "value": 24,
        "x": -5300,
        "y": 1187
    },
    {
        "id": 260,
        "label": "Joseph Butler\u2019s Moral Philosophy",
        "value": 9,
        "x": -2003,
        "y": 219
    },
    {
        "id": 261,
        "label": "Byzantine Philosophy",
        "value": 18,
        "x": -1143,
        "y": 2547
    },
    {
        "id": 262,
        "label": "Callicles and Thrasymachus",
        "value": 9,
        "x": 3860,
        "y": -1584
    },
    {
        "id": 263,
        "label": "The Cambridge Platonists",
        "value": 24,
        "x": 284,
        "y": 832
    },
    {
        "id": 264,
        "label": "Tommaso Campanella",
        "value": 6,
        "x": 815,
        "y": 3940
    },
    {
        "id": 265,
        "label": "Albert Camus",
        "value": 9,
        "x": 2931,
        "y": 1838
    },
    {
        "id": 266,
        "label": "Cancer",
        "value": 6,
        "x": 3443,
        "y": -5222
    },
    {
        "id": 267,
        "label": "The Capability Approach",
        "value": 12,
        "x": 1287,
        "y": -5653
    },
    {
        "id": 268,
        "label": "Girolamo [Geronimo] Cardano",
        "value": 10,
        "x": 620,
        "y": 2033
    },
    {
        "id": 269,
        "label": "Rudolf Carnap",
        "value": 32,
        "x": -824,
        "y": -251
    },
    {
        "id": 270,
        "label": "Carneades",
        "value": 12,
        "x": 207,
        "y": -2523
    },
    {
        "id": 271,
        "label": "Ernst Cassirer",
        "value": 17,
        "x": 2987,
        "y": -365
    },
    {
        "id": 272,
        "label": "Moral Reasoning",
        "value": 26,
        "x": 1353,
        "y": -2369
    },
    {
        "id": 273,
        "label": "Categories",
        "value": 24,
        "x": -409,
        "y": -163
    },
    {
        "id": 274,
        "label": "Medieval Theories of the Categories",
        "value": 13,
        "x": -4449,
        "y": -19
    },
    {
        "id": 275,
        "label": "Category Mistakes",
        "value": 6,
        "x": -1662,
        "y": -3169
    },
    {
        "id": 276,
        "label": "Category Theory",
        "value": 19,
        "x": -3084,
        "y": 3266
    },
    {
        "id": 277,
        "label": "Causal Determinism",
        "value": 47,
        "x": -132,
        "y": -95
    },
    {
        "id": 278,
        "label": "Causal Models",
        "value": 16,
        "x": 2622,
        "y": -465
    },
    {
        "id": 279,
        "label": "Backward Causation",
        "value": 14,
        "x": -70,
        "y": 1528
    },
    {
        "id": 280,
        "label": "Counterfactual Theories of Causation",
        "value": 33,
        "x": -60,
        "y": -636
    },
    {
        "id": 281,
        "label": "Causation in Arabic and Islamic Thought",
        "value": 10,
        "x": -3135,
        "y": 2998
    },
    {
        "id": 282,
        "label": "Causation in Physics",
        "value": 0,
        "x": -10351,
        "y": 8942
    },
    {
        "id": 283,
        "label": "Causation in the Law",
        "value": 10,
        "x": -1280,
        "y": -3552
    },
    {
        "id": 284,
        "label": "Causation and Manipulability",
        "value": 19,
        "x": 2286,
        "y": -2289
    },
    {
        "id": 285,
        "label": "Medieval Theories of Causation",
        "value": 14,
        "x": -5002,
        "y": 546
    },
    {
        "id": 286,
        "label": "Mental Causation",
        "value": 41,
        "x": -1282,
        "y": -724
    },
    {
        "id": 287,
        "label": "The Metaphysics of Causation",
        "value": 56,
        "x": -176,
        "y": -409
    },
    {
        "id": 288,
        "label": "Probabilistic Causation",
        "value": 41,
        "x": 955,
        "y": -1042
    },
    {
        "id": 289,
        "label": "Retrocausality in Quantum Mechanics",
        "value": 18,
        "x": 2552,
        "y": 238
    },
    {
        "id": 290,
        "label": "Margaret Lucas Cavendish",
        "value": 9,
        "x": -2211,
        "y": -933
    },
    {
        "id": 291,
        "label": "Philosophy of Cell Biology",
        "value": 12,
        "x": 1656,
        "y": -3941
    },
    {
        "id": 292,
        "label": "Cellular Automata",
        "value": 12,
        "x": -2306,
        "y": -747
    },
    {
        "id": 293,
        "label": "Pornography and Censorship",
        "value": 24,
        "x": 2066,
        "y": -4482
    },
    {
        "id": 294,
        "label": "Certainty",
        "value": 10,
        "x": 951,
        "y": 1651
    },
    {
        "id": 295,
        "label": "Ceteris Paribus Laws",
        "value": 16,
        "x": 882,
        "y": -672
    },
    {
        "id": 296,
        "label": "Chance versus Randomness",
        "value": 12,
        "x": 796,
        "y": 697
    },
    {
        "id": 297,
        "label": "Change and Inconsistency",
        "value": 24,
        "x": -599,
        "y": 1895
    },
    {
        "id": 298,
        "label": "Chinese Philosophy of Change (Yijing)",
        "value": 5,
        "x": -4024,
        "y": 5622
    },
    {
        "id": 299,
        "label": "Chaos",
        "value": 13,
        "x": 1325,
        "y": 133
    },
    {
        "id": 300,
        "label": "Moral Character",
        "value": 26,
        "x": 1838,
        "y": -2567
    },
    {
        "id": 301,
        "label": "Empirical Approaches to Moral Character",
        "value": 10,
        "x": 3475,
        "y": -2589
    },
    {
        "id": 302,
        "label": "\u00c9milie du Ch\u00e2telet",
        "value": 14,
        "x": 1208,
        "y": 294
    },
    {
        "id": 303,
        "label": "Walter Chatton",
        "value": 18,
        "x": -4696,
        "y": 670
    },
    {
        "id": 304,
        "label": "Philosophy of Chemistry",
        "value": 16,
        "x": 958,
        "y": 29
    },
    {
        "id": 305,
        "label": "The Philosophy of Childhood",
        "value": 13,
        "x": -159,
        "y": -4590
    },
    {
        "id": 306,
        "label": "Philosophy for Children",
        "value": 4,
        "x": -1506,
        "y": -5406
    },
    {
        "id": 307,
        "label": "Philosophy in Chile",
        "value": 5,
        "x": 5668,
        "y": -1277
    },
    {
        "id": 308,
        "label": "Human/Non-Human Chimeras",
        "value": 8,
        "x": 3116,
        "y": -1350
    },
    {
        "id": 309,
        "label": "Chinese Ethics",
        "value": 26,
        "x": -4343,
        "y": 3540
    },
    {
        "id": 310,
        "label": "Chinese Philosophy and Chinese Medicine",
        "value": 3,
        "x": -6098,
        "y": 5893
    },
    {
        "id": 311,
        "label": "Comparative Philosophy: Chinese and Western",
        "value": 13,
        "x": -4133,
        "y": 3604
    },
    {
        "id": 312,
        "label": "Confucius",
        "value": 22,
        "x": -4306,
        "y": 3929
    },
    {
        "id": 313,
        "label": "Daoism",
        "value": 25,
        "x": -3980,
        "y": 4130
    },
    {
        "id": 314,
        "label": "Epistemology in Chinese Philosophy",
        "value": 18,
        "x": -4837,
        "y": 4379
    },
    {
        "id": 315,
        "label": "Laozi",
        "value": 16,
        "x": -5122,
        "y": 4414
    },
    {
        "id": 316,
        "label": "Legalism in Chinese Philosophy",
        "value": 5,
        "x": -5628,
        "y": 1312
    },
    {
        "id": 317,
        "label": "Logic and Language in Early Chinese Philosophy",
        "value": 10,
        "x": -5014,
        "y": 3096
    },
    {
        "id": 318,
        "label": "Mencius",
        "value": 24,
        "x": -4045,
        "y": 3907
    },
    {
        "id": 319,
        "label": "Metaphysics in Chinese Philosophy",
        "value": 21,
        "x": -3571,
        "y": 4474
    },
    {
        "id": 320,
        "label": "Mohism",
        "value": 27,
        "x": -4447,
        "y": 2960
    },
    {
        "id": 321,
        "label": "Mohist Canons",
        "value": 15,
        "x": -5342,
        "y": 4140
    },
    {
        "id": 322,
        "label": "Neo-Daoism",
        "value": 12,
        "x": -4560,
        "y": 4894
    },
    {
        "id": 323,
        "label": "Qing Philosophy",
        "value": 3,
        "x": -5281,
        "y": 3004
    },
    {
        "id": 324,
        "label": "Science and Chinese Philosophy",
        "value": 5,
        "x": -5671,
        "y": 5410
    },
    {
        "id": 325,
        "label": "Social and Political Thought in Chinese Philosophy",
        "value": 13,
        "x": -5204,
        "y": 3642
    },
    {
        "id": 326,
        "label": "Song-Ming Confucianism",
        "value": 9,
        "x": -4848,
        "y": 4780
    },
    {
        "id": 327,
        "label": "Translating and Interpreting Chinese Philosophy",
        "value": 11,
        "x": -3988,
        "y": 1456
    },
    {
        "id": 328,
        "label": "Wang Yangming",
        "value": 13,
        "x": -4361,
        "y": 4578
    },
    {
        "id": 329,
        "label": "Xunzi",
        "value": 19,
        "x": -5037,
        "y": 3941
    },
    {
        "id": 330,
        "label": "Zhuangzi",
        "value": 23,
        "x": -4709,
        "y": 3864
    },
    {
        "id": 331,
        "label": "Zhu Xi",
        "value": 14,
        "x": -4211,
        "y": 4845
    },
    {
        "id": 332,
        "label": "Roderick Chisholm",
        "value": 17,
        "x": 21,
        "y": 836
    },
    {
        "id": 333,
        "label": "The Axiom of Choice",
        "value": 16,
        "x": -3605,
        "y": 3433
    },
    {
        "id": 334,
        "label": "Dynamic Choice",
        "value": 15,
        "x": 2653,
        "y": -2063
    },
    {
        "id": 335,
        "label": "Social Choice Theory",
        "value": 15,
        "x": 2057,
        "y": -864
    },
    {
        "id": 336,
        "label": "Philosophy and Christian Theology",
        "value": 23,
        "x": -2030,
        "y": 423
    },
    {
        "id": 337,
        "label": "The Church-Turing Thesis",
        "value": 24,
        "x": -2944,
        "y": -22
    },
    {
        "id": 338,
        "label": "Citizenship",
        "value": 23,
        "x": 1014,
        "y": -4961
    },
    {
        "id": 339,
        "label": "Civic Education",
        "value": 13,
        "x": 321,
        "y": -4305
    },
    {
        "id": 340,
        "label": "Civic Humanism",
        "value": 13,
        "x": 1946,
        "y": -3062
    },
    {
        "id": 341,
        "label": "Civil Disobedience",
        "value": 10,
        "x": -604,
        "y": -4024
    },
    {
        "id": 342,
        "label": "Civil Rights",
        "value": 23,
        "x": 1282,
        "y": -4977
    },
    {
        "id": 343,
        "label": "Samuel Clarke",
        "value": 34,
        "x": -737,
        "y": -407
    },
    {
        "id": 344,
        "label": "Doxography of Ancient Philosophy",
        "value": 17,
        "x": 1819,
        "y": 2185
    },
    {
        "id": 345,
        "label": "Climate Justice",
        "value": 12,
        "x": 2029,
        "y": -5788
    },
    {
        "id": 346,
        "label": "Climate Science",
        "value": 6,
        "x": 738,
        "y": -5866
    },
    {
        "id": 347,
        "label": "The Ethics of Clinical Research",
        "value": 15,
        "x": 2358,
        "y": -4924
    },
    {
        "id": 348,
        "label": "Cloning",
        "value": 13,
        "x": 3569,
        "y": -3646
    },
    {
        "id": 349,
        "label": "Catharine Trotter Cockburn",
        "value": 5,
        "x": 3700,
        "y": -2358
    },
    {
        "id": 350,
        "label": "Coercion",
        "value": 32,
        "x": 130,
        "y": -4672
    },
    {
        "id": 351,
        "label": "Embodied Cognition",
        "value": 19,
        "x": -364,
        "y": 269
    },
    {
        "id": 352,
        "label": "Cognitive Disability and Moral Status",
        "value": 8,
        "x": 2971,
        "y": -2980
    },
    {
        "id": 353,
        "label": "Cognitive Science",
        "value": 52,
        "x": -810,
        "y": -1147
    },
    {
        "id": 354,
        "label": "Moral Cognitivism vs. Non-Cognitivism",
        "value": 49,
        "x": 807,
        "y": -362
    },
    {
        "id": 355,
        "label": "Hermann Cohen",
        "value": 23,
        "x": 2738,
        "y": -325
    },
    {
        "id": 356,
        "label": "Robin George Collingwood",
        "value": 11,
        "x": 1104,
        "y": -1069
    },
    {
        "id": 357,
        "label": "Anthony Collins",
        "value": 18,
        "x": -971,
        "y": -494
    },
    {
        "id": 358,
        "label": "Colonialism",
        "value": 20,
        "x": 1462,
        "y": -4591
    },
    {
        "id": 359,
        "label": "Color",
        "value": 23,
        "x": -1453,
        "y": 269
    },
    {
        "id": 360,
        "label": "Reichenbach\u2019s Common Cause Principle",
        "value": 22,
        "x": 3144,
        "y": -252
    },
    {
        "id": 361,
        "label": "The Common Good",
        "value": 11,
        "x": 248,
        "y": -5143
    },
    {
        "id": 362,
        "label": "Common Knowledge",
        "value": 14,
        "x": 69,
        "y": 72
    },
    {
        "id": 363,
        "label": "Communitarianism",
        "value": 24,
        "x": 712,
        "y": -4361
    },
    {
        "id": 364,
        "label": "Compatibilism",
        "value": 33,
        "x": -1743,
        "y": -1862
    },
    {
        "id": 365,
        "label": "Decision-Making Capacity",
        "value": 17,
        "x": 1634,
        "y": -3408
    },
    {
        "id": 366,
        "label": "Computability and Complexity",
        "value": 33,
        "x": -2519,
        "y": -33
    },
    {
        "id": 367,
        "label": "Computational Complexity Theory",
        "value": 13,
        "x": -3021,
        "y": 297
    },
    {
        "id": 368,
        "label": "The Problem of the Many",
        "value": 21,
        "x": -1977,
        "y": 1154
    },
    {
        "id": 369,
        "label": "Compositionality",
        "value": 31,
        "x": -2440,
        "y": -911
    },
    {
        "id": 370,
        "label": "Computation in Physical Systems",
        "value": 18,
        "x": -2450,
        "y": -611
    },
    {
        "id": 371,
        "label": "Computational Linguistics",
        "value": 14,
        "x": -3033,
        "y": -2085
    },
    {
        "id": 372,
        "label": "Computational Philosophy",
        "value": 8,
        "x": -547,
        "y": -2437
    },
    {
        "id": 373,
        "label": "The Computational Theory of Mind",
        "value": 61,
        "x": -1939,
        "y": -950
    },
    {
        "id": 374,
        "label": "The Philosophy of Computer Science",
        "value": 24,
        "x": -2299,
        "y": -552
    },
    {
        "id": 375,
        "label": "The Modern History of Computing",
        "value": 11,
        "x": -3421,
        "y": -1932
    },
    {
        "id": 376,
        "label": "Computing and Moral Responsibility",
        "value": 13,
        "x": 2365,
        "y": -3224
    },
    {
        "id": 377,
        "label": "Auguste Comte",
        "value": 20,
        "x": 1910,
        "y": -2083
    },
    {
        "id": 378,
        "label": "Concepts",
        "value": 35,
        "x": -1164,
        "y": -1194
    },
    {
        "id": 379,
        "label": "Condemnation of 1277",
        "value": 14,
        "x": -3879,
        "y": -136
    },
    {
        "id": 380,
        "label": "\u00c9tienne Bonnot de Condillac",
        "value": 13,
        "x": 725,
        "y": -646
    },
    {
        "id": 381,
        "label": "Indicative Conditionals",
        "value": 27,
        "x": -946,
        "y": -135
    },
    {
        "id": 382,
        "label": "Counterfactuals",
        "value": 21,
        "x": -352,
        "y": 423
    },
    {
        "id": 383,
        "label": "The Logic of Conditionals",
        "value": 17,
        "x": 148,
        "y": 720
    },
    {
        "id": 384,
        "label": "The History of Feminism: Marie-Jean-Antoine-Nicolas de Caritat, Marquis de Condorcet",
        "value": 14,
        "x": 2103,
        "y": -3175
    },
    {
        "id": 385,
        "label": "Confirmation",
        "value": 29,
        "x": 783,
        "y": -1469
    },
    {
        "id": 386,
        "label": "Japanese Confucian Philosophy",
        "value": 9,
        "x": -3394,
        "y": 5328
    },
    {
        "id": 387,
        "label": "Sentence Connectives in Formal Logic",
        "value": 10,
        "x": -2555,
        "y": 2958
    },
    {
        "id": 388,
        "label": "Conscience",
        "value": 7,
        "x": 2561,
        "y": -206
    },
    {
        "id": 389,
        "label": "Medieval Theories of Conscience",
        "value": 14,
        "x": -2890,
        "y": -668
    },
    {
        "id": 390,
        "label": "Consciousness",
        "value": 56,
        "x": -955,
        "y": 378
    },
    {
        "id": 391,
        "label": "Higher-Order Theories of Consciousness",
        "value": 15,
        "x": -1109,
        "y": 1000
    },
    {
        "id": 392,
        "label": "Consciousness and Intentionality",
        "value": 31,
        "x": -586,
        "y": 611
    },
    {
        "id": 393,
        "label": "The Neuroscience of Consciousness",
        "value": 10,
        "x": -3001,
        "y": -793
    },
    {
        "id": 394,
        "label": "Representational Theories of Consciousness",
        "value": 32,
        "x": -1354,
        "y": -99
    },
    {
        "id": 395,
        "label": "Seventeenth-Century Theories of Consciousness",
        "value": 20,
        "x": 520,
        "y": 1704
    },
    {
        "id": 396,
        "label": "Temporal Consciousness",
        "value": 11,
        "x": -899,
        "y": 2690
    },
    {
        "id": 397,
        "label": "The Unity of Consciousness",
        "value": 25,
        "x": -539,
        "y": 1064
    },
    {
        "id": 398,
        "label": "Political Obligation",
        "value": 27,
        "x": -19,
        "y": -3841
    },
    {
        "id": 399,
        "label": "Medieval Theories of Consequence",
        "value": 23,
        "x": -4405,
        "y": 1944
    },
    {
        "id": 400,
        "label": "Consequentialism",
        "value": 76,
        "x": 340,
        "y": -2579
    },
    {
        "id": 401,
        "label": "Rule Consequentialism",
        "value": 14,
        "x": 1235,
        "y": -3802
    },
    {
        "id": 402,
        "label": "Conservatism",
        "value": 15,
        "x": -628,
        "y": -3700
    },
    {
        "id": 403,
        "label": "Constitutionalism",
        "value": 17,
        "x": -800,
        "y": -4532
    },
    {
        "id": 404,
        "label": "Constructive Empiricism",
        "value": 14,
        "x": 719,
        "y": -519
    },
    {
        "id": 405,
        "label": "Constructivism in Metaethics",
        "value": 10,
        "x": 2199,
        "y": -2132
    },
    {
        "id": 406,
        "label": "Epistemic Contextualism",
        "value": 19,
        "x": 302,
        "y": -129
    },
    {
        "id": 407,
        "label": "Continental Rationalism",
        "value": 42,
        "x": 185,
        "y": 2122
    },
    {
        "id": 408,
        "label": "Continuity and Infinitesimals",
        "value": 33,
        "x": -1389,
        "y": 2225
    },
    {
        "id": 409,
        "label": "The Continuum Hypothesis",
        "value": 11,
        "x": -3407,
        "y": 3618
    },
    {
        "id": 410,
        "label": "Contractarianism",
        "value": 30,
        "x": 391,
        "y": -3392
    },
    {
        "id": 411,
        "label": "Theories of the Common Law of Contracts",
        "value": 7,
        "x": 257,
        "y": -6386
    },
    {
        "id": 412,
        "label": "Contractualism",
        "value": 25,
        "x": 667,
        "y": -3427
    },
    {
        "id": 413,
        "label": "Contradiction",
        "value": 26,
        "x": -1294,
        "y": 1767
    },
    {
        "id": 414,
        "label": "Convention",
        "value": 32,
        "x": -601,
        "y": -1694
    },
    {
        "id": 415,
        "label": "Lady Anne Conway",
        "value": 11,
        "x": 471,
        "y": 1832
    },
    {
        "id": 416,
        "label": "Anna Julia Cooper",
        "value": 9,
        "x": -1505,
        "y": -3792
    },
    {
        "id": 417,
        "label": "Nicolaus Copernicus",
        "value": 12,
        "x": -1293,
        "y": 2420
    },
    {
        "id": 418,
        "label": "G\u00e9raud de Cordemoy",
        "value": 9,
        "x": 146,
        "y": 4283
    },
    {
        "id": 419,
        "label": "Corruption",
        "value": 5,
        "x": 3651,
        "y": -4296
    },
    {
        "id": 420,
        "label": "Cosmological Argument",
        "value": 24,
        "x": -2131,
        "y": -466
    },
    {
        "id": 421,
        "label": "Cosmology: Methodological Debates in the 1930s and 1940s",
        "value": 11,
        "x": 2502,
        "y": -517
    },
    {
        "id": 422,
        "label": "Cosmology and Theology",
        "value": 8,
        "x": -1654,
        "y": -2312
    },
    {
        "id": 423,
        "label": "Philosophy of Cosmology",
        "value": 7,
        "x": -1365,
        "y": -2458
    },
    {
        "id": 424,
        "label": "Cosmopolitanism",
        "value": 36,
        "x": 196,
        "y": -3877
    },
    {
        "id": 425,
        "label": "Possible Objects",
        "value": 45,
        "x": -1053,
        "y": 1364
    },
    {
        "id": 426,
        "label": "William Crathorn",
        "value": 11,
        "x": -4924,
        "y": 1731
    },
    {
        "id": 427,
        "label": "Creation and Conservation",
        "value": 5,
        "x": -471,
        "y": 3945
    },
    {
        "id": 428,
        "label": "Creationism",
        "value": 17,
        "x": 864,
        "y": -3866
    },
    {
        "id": 429,
        "label": "Hasdai Crescas",
        "value": 15,
        "x": -3319,
        "y": 1112
    },
    {
        "id": 430,
        "label": "Theories of Criminal Law",
        "value": 11,
        "x": -915,
        "y": -5552
    },
    {
        "id": 431,
        "label": "Critical Theory",
        "value": 24,
        "x": 1050,
        "y": -2968
    },
    {
        "id": 432,
        "label": "Critical Thinking",
        "value": 11,
        "x": -655,
        "y": -3220
    },
    {
        "id": 433,
        "label": "Alexander Crummell",
        "value": 10,
        "x": -992,
        "y": -4137
    },
    {
        "id": 434,
        "label": "Cultural Evolution",
        "value": 20,
        "x": 2676,
        "y": -4096
    },
    {
        "id": 435,
        "label": "The Ethics of Cultural Heritage ",
        "value": 14,
        "x": 929,
        "y": -4128
    },
    {
        "id": 436,
        "label": "Culture",
        "value": 8,
        "x": 1699,
        "y": -4888
    },
    {
        "id": 437,
        "label": "Culture and Cognitive Science",
        "value": 10,
        "x": 2382,
        "y": -2129
    },
    {
        "id": 438,
        "label": "Curry\u2019s Paradox",
        "value": 25,
        "x": -3661,
        "y": 2676
    },
    {
        "id": 439,
        "label": "Cusanus, Nicolaus [Nicolas of Cusa]",
        "value": 19,
        "x": -2620,
        "y": 1042
    },
    {
        "id": 440,
        "label": "Peter Damian",
        "value": 10,
        "x": -4538,
        "y": -240
    },
    {
        "id": 441,
        "label": "The Philosophy of Dance",
        "value": 12,
        "x": -859,
        "y": -2689
    },
    {
        "id": 442,
        "label": "Dante Alighieri",
        "value": 18,
        "x": -3653,
        "y": -973
    },
    {
        "id": 443,
        "label": "Religious Daoism",
        "value": 6,
        "x": -5542,
        "y": 3816
    },
    {
        "id": 444,
        "label": "Darwin: From Origin of Species to Descent of Man",
        "value": 23,
        "x": 2594,
        "y": -3878
    },
    {
        "id": 445,
        "label": "Darwinism",
        "value": 36,
        "x": 1244,
        "y": -3225
    },
    {
        "id": 446,
        "label": "Martin Heidegger",
        "value": 49,
        "x": 1171,
        "y": 613
    },
    {
        "id": 447,
        "label": "Abraham Ibn Daud",
        "value": 9,
        "x": -4063,
        "y": -780
    },
    {
        "id": 448,
        "label": "Donald Davidson",
        "value": 41,
        "x": -1004,
        "y": -643
    },
    {
        "id": 449,
        "label": "Death",
        "value": 16,
        "x": 2291,
        "y": -941
    },
    {
        "id": 450,
        "label": "The Definition of Lying and Deception",
        "value": 15,
        "x": -1171,
        "y": -2639
    },
    {
        "id": 451,
        "label": "Self-Deception",
        "value": 16,
        "x": -516,
        "y": -420
    },
    {
        "id": 452,
        "label": "Decision Theory",
        "value": 21,
        "x": 2155,
        "y": -273
    },
    {
        "id": 453,
        "label": "Causal Decision Theory",
        "value": 19,
        "x": 1200,
        "y": -536
    },
    {
        "id": 454,
        "label": "Descriptive Decision Theory",
        "value": 7,
        "x": 3679,
        "y": 545
    },
    {
        "id": 455,
        "label": "Normative Theories of Rational Choice: Expected Utility",
        "value": 17,
        "x": 2370,
        "y": -527
    },
    {
        "id": 456,
        "label": "Dedekind\u2019s Contributions to the Foundations of Mathematics",
        "value": 18,
        "x": -2469,
        "y": 3158
    },
    {
        "id": 457,
        "label": "Defaults in Semantics and Pragmatics",
        "value": 18,
        "x": -1865,
        "y": -2032
    },
    {
        "id": 458,
        "label": "Definitions",
        "value": 18,
        "x": -1756,
        "y": 1971
    },
    {
        "id": 459,
        "label": "Gilles Deleuze",
        "value": 8,
        "x": 2389,
        "y": 2268
    },
    {
        "id": 460,
        "label": "Elijah Delmedigo",
        "value": 5,
        "x": -2350,
        "y": 4670
    },
    {
        "id": 461,
        "label": "Delusion",
        "value": 12,
        "x": 1329,
        "y": 309
    },
    {
        "id": 462,
        "label": "Science and Pseudo-Science",
        "value": 14,
        "x": 627,
        "y": -2201
    },
    {
        "id": 463,
        "label": "Democracy",
        "value": 57,
        "x": 459,
        "y": -4070
    },
    {
        "id": 464,
        "label": "Global Democracy",
        "value": 13,
        "x": 4,
        "y": -5653
    },
    {
        "id": 465,
        "label": "Democritus",
        "value": 18,
        "x": 1187,
        "y": 2939
    },
    {
        "id": 466,
        "label": "Medieval Theories of Demonstration",
        "value": 19,
        "x": -4428,
        "y": 278
    },
    {
        "id": 467,
        "label": "Indexicals",
        "value": 31,
        "x": -2253,
        "y": -370
    },
    {
        "id": 468,
        "label": "Reference",
        "value": 57,
        "x": -1114,
        "y": -294
    },
    {
        "id": 469,
        "label": "Deontological Ethics",
        "value": 25,
        "x": 462,
        "y": -2995
    },
    {
        "id": 470,
        "label": "Ontological Dependence",
        "value": 26,
        "x": -1150,
        "y": 1133
    },
    {
        "id": 471,
        "label": "Depiction",
        "value": 8,
        "x": 1169,
        "y": -2279
    },
    {
        "id": 472,
        "label": "Jacques Derrida",
        "value": 14,
        "x": 2538,
        "y": 368
    },
    {
        "id": 473,
        "label": "Ren\u00e9 Descartes",
        "value": 98,
        "x": -51,
        "y": 1393
    },
    {
        "id": 474,
        "label": "Descartes\u2019 Epistemology",
        "value": 38,
        "x": 159,
        "y": 1612
    },
    {
        "id": 475,
        "label": "Descartes\u2019 Ethics",
        "value": 13,
        "x": 1180,
        "y": 1951
    },
    {
        "id": 476,
        "label": "Descartes\u2019 Life and Works",
        "value": 19,
        "x": 26,
        "y": 3251
    },
    {
        "id": 477,
        "label": "Descartes\u2019 Mathematics",
        "value": 8,
        "x": -1111,
        "y": 3649
    },
    {
        "id": 478,
        "label": "Descartes\u2019 Method",
        "value": 9,
        "x": 139,
        "y": 3028
    },
    {
        "id": 479,
        "label": "Descartes\u2019 Modal Metaphysics",
        "value": 21,
        "x": -491,
        "y": 2784
    },
    {
        "id": 480,
        "label": "Descartes\u2019 Ontological Argument",
        "value": 21,
        "x": -775,
        "y": 1687
    },
    {
        "id": 481,
        "label": "Descartes\u2019 Physics",
        "value": 19,
        "x": 528,
        "y": 2761
    },
    {
        "id": 482,
        "label": "Descartes and the Pineal Gland",
        "value": 12,
        "x": -34,
        "y": 2347
    },
    {
        "id": 483,
        "label": "17th and 18th Century Theories of Emotions",
        "value": 47,
        "x": 217,
        "y": 183
    },
    {
        "id": 484,
        "label": "Descartes\u2019 Theory of Ideas",
        "value": 12,
        "x": -624,
        "y": 3157
    },
    {
        "id": 485,
        "label": "Descriptions",
        "value": 37,
        "x": -1884,
        "y": -168
    },
    {
        "id": 486,
        "label": "Desert",
        "value": 18,
        "x": 275,
        "y": -4097
    },
    {
        "id": 487,
        "label": "Robert Desgabets",
        "value": 10,
        "x": 281,
        "y": 3967
    },
    {
        "id": 488,
        "label": "Teleological Arguments for God\u2019s Existence",
        "value": 20,
        "x": -656,
        "y": -2531
    },
    {
        "id": 489,
        "label": "Desire",
        "value": 19,
        "x": 2560,
        "y": -1300
    },
    {
        "id": 490,
        "label": "Determinables and Determinates",
        "value": 16,
        "x": -2172,
        "y": 720
    },
    {
        "id": 491,
        "label": "Ancient Theories of Freedom and Determinism",
        "value": 15,
        "x": -538,
        "y": 922
    },
    {
        "id": 492,
        "label": "Epigenesis and Preformationism",
        "value": 16,
        "x": 2290,
        "y": -4070
    },
    {
        "id": 493,
        "label": "Evolution and Development",
        "value": 12,
        "x": 2136,
        "y": -4873
    },
    {
        "id": 494,
        "label": "John Dewey",
        "value": 55,
        "x": -610,
        "y": -2223
    },
    {
        "id": 495,
        "label": "Dewey\u2019s Moral Philosophy",
        "value": 9,
        "x": -1801,
        "y": -3081
    },
    {
        "id": 496,
        "label": "Dewey\u2019s Political Philosophy",
        "value": 14,
        "x": -849,
        "y": -3348
    },
    {
        "id": 497,
        "label": "Dharmak\u012brti",
        "value": 22,
        "x": 2061,
        "y": 2304
    },
    {
        "id": 498,
        "label": "Diagrams",
        "value": 8,
        "x": -3647,
        "y": 1615
    },
    {
        "id": 499,
        "label": "The Epistemology of Visual Thinking in Mathematics",
        "value": 8,
        "x": -2131,
        "y": 3634
    },
    {
        "id": 500,
        "label": "Dialectical School",
        "value": 17,
        "x": -1200,
        "y": 1391
    },
    {
        "id": 501,
        "label": "Hegel\u2019s Dialectics",
        "value": 16,
        "x": -208,
        "y": -208
    },
    {
        "id": 502,
        "label": "Dialetheism",
        "value": 30,
        "x": -2166,
        "y": 2266
    },
    {
        "id": 503,
        "label": "Denis Diderot",
        "value": 21,
        "x": -64,
        "y": -282
    },
    {
        "id": 504,
        "label": "Dietrich of Freiberg",
        "value": 11,
        "x": -3839,
        "y": 917
    },
    {
        "id": 505,
        "label": "The Philosophy of Digital Art",
        "value": 7,
        "x": -359,
        "y": -3245
    },
    {
        "id": 506,
        "label": "Wilhelm Dilthey",
        "value": 21,
        "x": 1583,
        "y": -1262
    },
    {
        "id": 507,
        "label": "Diodorus Cronus",
        "value": 17,
        "x": -984,
        "y": 1706
    },
    {
        "id": 508,
        "label": "Pseudo-Dionysius the Areopagite",
        "value": 18,
        "x": -3353,
        "y": 2037
    },
    {
        "id": 509,
        "label": "The Problem of Dirty Hands",
        "value": 10,
        "x": -674,
        "y": -4260
    },
    {
        "id": 510,
        "label": "Critical Disability Theory",
        "value": 13,
        "x": 2671,
        "y": -3247
    },
    {
        "id": 511,
        "label": "Disability: Definitions, Models, Experience",
        "value": 19,
        "x": 2999,
        "y": -3198
    },
    {
        "id": 512,
        "label": "Feminist Perspectives on Disability",
        "value": 32,
        "x": 2944,
        "y": -3717
    },
    {
        "id": 513,
        "label": "Disability: Health, Well-Being, and Personal Relationships",
        "value": 15,
        "x": 3573,
        "y": -3810
    },
    {
        "id": 514,
        "label": "Disability and Health Care Rationing",
        "value": 8,
        "x": 3795,
        "y": -4775
    },
    {
        "id": 515,
        "label": "Disability and Justice",
        "value": 18,
        "x": 2151,
        "y": -3950
    },
    {
        "id": 516,
        "label": "Disagreement",
        "value": 4,
        "x": 2763,
        "y": 2497
    },
    {
        "id": 517,
        "label": "Discourse Representation Theory",
        "value": 17,
        "x": -2645,
        "y": -1704
    },
    {
        "id": 518,
        "label": "Discrimination",
        "value": 20,
        "x": 2148,
        "y": -5166
    },
    {
        "id": 519,
        "label": "Concepts of Disease and Health",
        "value": 21,
        "x": 3159,
        "y": -3732
    },
    {
        "id": 520,
        "label": "Disjunction",
        "value": 15,
        "x": -2093,
        "y": 1001
    },
    {
        "id": 521,
        "label": "Dispositions",
        "value": 29,
        "x": -217,
        "y": -805
    },
    {
        "id": 522,
        "label": "The Sophists",
        "value": 11,
        "x": 2208,
        "y": 2701
    },
    {
        "id": 523,
        "label": "Distributive Justice",
        "value": 56,
        "x": 1357,
        "y": -4782
    },
    {
        "id": 524,
        "label": "Distributive Justice and Empirical Moral Psychology",
        "value": 4,
        "x": 1967,
        "y": -6730
    },
    {
        "id": 525,
        "label": "International Distributive Justice",
        "value": 28,
        "x": 921,
        "y": -5148
    },
    {
        "id": 526,
        "label": "Religious Diversity (Pluralism)",
        "value": 8,
        "x": -3038,
        "y": -2418
    },
    {
        "id": 527,
        "label": "Theological Voluntarism",
        "value": 12,
        "x": -1824,
        "y": -2222
    },
    {
        "id": 528,
        "label": "Concepts of God",
        "value": 37,
        "x": -2255,
        "y": -220
    },
    {
        "id": 529,
        "label": "Foreknowledge and Free Will",
        "value": 36,
        "x": -2823,
        "y": -293
    },
    {
        "id": 530,
        "label": "Divine Freedom",
        "value": 10,
        "x": -2976,
        "y": -1619
    },
    {
        "id": 531,
        "label": "Hiddenness of God",
        "value": 10,
        "x": -3944,
        "y": -1716
    },
    {
        "id": 532,
        "label": "Divine Illumination",
        "value": 20,
        "x": -4427,
        "y": -389
    },
    {
        "id": 533,
        "label": "Divine Providence",
        "value": 19,
        "x": -2809,
        "y": -528
    },
    {
        "id": 534,
        "label": "Divine Revelation",
        "value": 12,
        "x": -3082,
        "y": -1748
    },
    {
        "id": 535,
        "label": "Divine Simplicity",
        "value": 8,
        "x": -4169,
        "y": -970
    },
    {
        "id": 536,
        "label": "Doing vs. Allowing Harm",
        "value": 13,
        "x": -88,
        "y": -2368
    },
    {
        "id": 537,
        "label": "Marriage and Domestic Partnership",
        "value": 20,
        "x": 1860,
        "y": -3420
    },
    {
        "id": 538,
        "label": "Domination",
        "value": 7,
        "x": 3142,
        "y": -4804
    },
    {
        "id": 539,
        "label": "The Donation and Sale of Human Eggs and Sperm",
        "value": 18,
        "x": 3387,
        "y": -4544
    },
    {
        "id": 540,
        "label": "The Donation of Human Organs",
        "value": 14,
        "x": 2587,
        "y": -4444
    },
    {
        "id": 541,
        "label": "Double Consciousness",
        "value": 7,
        "x": -1660,
        "y": -4350
    },
    {
        "id": 542,
        "label": "Doctrine of Double Effect",
        "value": 15,
        "x": 389,
        "y": -1814
    },
    {
        "id": 543,
        "label": "Frederick Douglass",
        "value": 12,
        "x": -948,
        "y": -4358
    },
    {
        "id": 544,
        "label": "Dreams and Dreaming",
        "value": 14,
        "x": 887,
        "y": 1074
    },
    {
        "id": 545,
        "label": "Dualism",
        "value": 47,
        "x": -1168,
        "y": 245
    },
    {
        "id": 546,
        "label": "W.E.B. Du Bois",
        "value": 19,
        "x": -343,
        "y": -3574
    },
    {
        "id": 547,
        "label": "Jean-Baptiste Du Bos",
        "value": 6,
        "x": -2105,
        "y": -2548
    },
    {
        "id": 548,
        "label": "Pierre Duhem",
        "value": 36,
        "x": -6,
        "y": 259
    },
    {
        "id": 549,
        "label": "John Duns Scotus",
        "value": 54,
        "x": -3817,
        "y": 40
    },
    {
        "id": 550,
        "label": "Dutch Book Arguments",
        "value": 9,
        "x": 3132,
        "y": 352
    },
    {
        "id": 551,
        "label": "Dynamic Epistemic Logic",
        "value": 22,
        "x": -794,
        "y": 1892
    },
    {
        "id": 552,
        "label": "Dynamic Semantics",
        "value": 35,
        "x": -1962,
        "y": -342
    },
    {
        "id": 553,
        "label": "Analytic Philosophy in Early Modern India",
        "value": 20,
        "x": 1684,
        "y": 2010
    },
    {
        "id": 554,
        "label": "Meister Eckhart",
        "value": 17,
        "x": -3074,
        "y": 503
    },
    {
        "id": 555,
        "label": "Ecology",
        "value": 11,
        "x": 2448,
        "y": -5256
    },
    {
        "id": 556,
        "label": "Philosophy of Economics",
        "value": 44,
        "x": 1020,
        "y": -1829
    },
    {
        "id": 557,
        "label": "Ramsey and Intergenerational Welfare Economics",
        "value": 9,
        "x": 2709,
        "y": -2756
    },
    {
        "id": 558,
        "label": "Economics and Economic Justice",
        "value": 32,
        "x": 1270,
        "y": -4218
    },
    {
        "id": 559,
        "label": "Philosophy of Education",
        "value": 23,
        "x": 1092,
        "y": -2720
    },
    {
        "id": 560,
        "label": "Jonathan Edwards",
        "value": 13,
        "x": -760,
        "y": 578
    },
    {
        "id": 561,
        "label": "Egalitarianism",
        "value": 33,
        "x": 871,
        "y": -4808
    },
    {
        "id": 562,
        "label": "Egoism",
        "value": 29,
        "x": 1040,
        "y": -2190
    },
    {
        "id": 563,
        "label": "Christian von Ehrenfels",
        "value": 9,
        "x": 1470,
        "y": 2677
    },
    {
        "id": 564,
        "label": "The Hole Argument",
        "value": 21,
        "x": 1634,
        "y": 1843
    },
    {
        "id": 565,
        "label": "Einstein\u2019s Philosophy of Science",
        "value": 28,
        "x": 3399,
        "y": 703
    },
    {
        "id": 566,
        "label": "Elisabeth, Princess of Bohemia",
        "value": 11,
        "x": 914,
        "y": 2730
    },
    {
        "id": 567,
        "label": "Emergent Properties",
        "value": 42,
        "x": -316,
        "y": -875
    },
    {
        "id": 568,
        "label": "Ralph Waldo Emerson",
        "value": 24,
        "x": 742,
        "y": 575
    },
    {
        "id": 569,
        "label": "Emotion",
        "value": 54,
        "x": 1054,
        "y": -480
    },
    {
        "id": 570,
        "label": "Emotions in the Christian Tradition",
        "value": 11,
        "x": 164,
        "y": 1247
    },
    {
        "id": 571,
        "label": "Medieval Theories of the Emotions",
        "value": 11,
        "x": -1898,
        "y": 958
    },
    {
        "id": 572,
        "label": "Empathy",
        "value": 15,
        "x": 1739,
        "y": -402
    },
    {
        "id": 573,
        "label": "Empedocles",
        "value": 12,
        "x": 2144,
        "y": 2150
    },
    {
        "id": 574,
        "label": "The Psychology of Normative Cognition",
        "value": 9,
        "x": 3308,
        "y": -2248
    },
    {
        "id": 575,
        "label": "Rationalism vs. Empiricism",
        "value": 49,
        "x": 387,
        "y": -32
    },
    {
        "id": 576,
        "label": "Ancient and Medieval Empiricism",
        "value": 4,
        "x": -5387,
        "y": -17
    },
    {
        "id": 577,
        "label": "Logical Empiricism",
        "value": 30,
        "x": -618,
        "y": -1468
    },
    {
        "id": 578,
        "label": "Enlightenment",
        "value": 41,
        "x": 1112,
        "y": -1180
    },
    {
        "id": 579,
        "label": "Logical Consequence",
        "value": 37,
        "x": -2488,
        "y": 1541
    },
    {
        "id": 580,
        "label": "Information Processing and Thermodynamic Entropy",
        "value": 5,
        "x": 998,
        "y": 3533
    },
    {
        "id": 581,
        "label": "Envy",
        "value": 6,
        "x": 987,
        "y": -5765
    },
    {
        "id": 582,
        "label": "Epictetus",
        "value": 9,
        "x": 2478,
        "y": -271
    },
    {
        "id": 583,
        "label": "Epicurus",
        "value": 28,
        "x": 403,
        "y": 1497
    },
    {
        "id": 584,
        "label": "Epiphenomenalism",
        "value": 23,
        "x": -2029,
        "y": -79
    },
    {
        "id": 585,
        "label": "Episteme and Techne",
        "value": 13,
        "x": 665,
        "y": 1832
    },
    {
        "id": 586,
        "label": "Epistemic Closure",
        "value": 16,
        "x": 1308,
        "y": 17
    },
    {
        "id": 587,
        "label": "Epistemic Paradoxes",
        "value": 22,
        "x": -634,
        "y": 1749
    },
    {
        "id": 588,
        "label": "Epistemic Self-Doubt",
        "value": 7,
        "x": 1245,
        "y": 2335
    },
    {
        "id": 589,
        "label": "Epistemology",
        "value": 53,
        "x": 854,
        "y": 310
    },
    {
        "id": 590,
        "label": "Bayesian Epistemology",
        "value": 34,
        "x": 567,
        "y": -905
    },
    {
        "id": 591,
        "label": "Evolutionary Epistemology",
        "value": 11,
        "x": 2513,
        "y": -2659
    },
    {
        "id": 592,
        "label": "Feminist Epistemology and Philosophy of Science",
        "value": 33,
        "x": 2068,
        "y": -1444
    },
    {
        "id": 593,
        "label": "Epistemology in Classical Indian Philosophy",
        "value": 31,
        "x": 1035,
        "y": 1196
    },
    {
        "id": 594,
        "label": "Epistemology in Latin America",
        "value": 8,
        "x": 4718,
        "y": 583
    },
    {
        "id": 595,
        "label": "Moral Epistemology",
        "value": 28,
        "x": 1838,
        "y": -1828
    },
    {
        "id": 596,
        "label": "A Priorism in Moral Epistemology",
        "value": 32,
        "x": 1332,
        "y": -454
    },
    {
        "id": 597,
        "label": "Naturalism in Epistemology",
        "value": 32,
        "x": 1011,
        "y": -744
    },
    {
        "id": 598,
        "label": "Reliabilist Epistemology",
        "value": 22,
        "x": 2248,
        "y": 398
    },
    {
        "id": 599,
        "label": "Social Epistemology",
        "value": 36,
        "x": 1579,
        "y": -1014
    },
    {
        "id": 600,
        "label": "Feminist Social Epistemology",
        "value": 19,
        "x": 2650,
        "y": -1653
    },
    {
        "id": 601,
        "label": "Virtue Epistemology",
        "value": 22,
        "x": 1715,
        "y": -144
    },
    {
        "id": 602,
        "label": "Formal Epistemology",
        "value": 34,
        "x": 605,
        "y": -298
    },
    {
        "id": 603,
        "label": "The Epsilon Calculus",
        "value": 14,
        "x": -3447,
        "y": 1607
    },
    {
        "id": 604,
        "label": "Equality",
        "value": 37,
        "x": 1156,
        "y": -4786
    },
    {
        "id": 605,
        "label": "Equality of Educational Opportunity",
        "value": 14,
        "x": 1197,
        "y": -6020
    },
    {
        "id": 606,
        "label": "Equality of Opportunity",
        "value": 19,
        "x": 1491,
        "y": -5875
    },
    {
        "id": 607,
        "label": "The Equivalence of Mass and Energy",
        "value": 5,
        "x": 3964,
        "y": 2359
    },
    {
        "id": 608,
        "label": "Desiderius Erasmus",
        "value": 24,
        "x": -518,
        "y": 492
    },
    {
        "id": 609,
        "label": "The Ergodic Hierarchy",
        "value": 2,
        "x": -1257,
        "y": 5303
    },
    {
        "id": 610,
        "label": "John Scottus Eriugena",
        "value": 15,
        "x": -2327,
        "y": 1923
    },
    {
        "id": 611,
        "label": "Locke on Real Essence",
        "value": 4,
        "x": -2109,
        "y": -4535
    },
    {
        "id": 612,
        "label": "Eternity in Christian Thought",
        "value": 20,
        "x": -3054,
        "y": -159
    },
    {
        "id": 613,
        "label": "Business Ethics",
        "value": 25,
        "x": 1089,
        "y": -4480
    },
    {
        "id": 614,
        "label": "Environmental Ethics",
        "value": 29,
        "x": 1909,
        "y": -3257
    },
    {
        "id": 615,
        "label": "Feminist Ethics",
        "value": 37,
        "x": 2878,
        "y": -3342
    },
    {
        "id": 616,
        "label": "Internet Research Ethics",
        "value": 7,
        "x": 3029,
        "y": -5748
    },
    {
        "id": 617,
        "label": "The Natural Law Tradition in Ethics",
        "value": 31,
        "x": -845,
        "y": -2451
    },
    {
        "id": 618,
        "label": "Personal Identity and Ethics",
        "value": 28,
        "x": 1197,
        "y": -2485
    },
    {
        "id": 619,
        "label": "Search Engines and Ethics",
        "value": 11,
        "x": 3481,
        "y": -4722
    },
    {
        "id": 620,
        "label": "Social Networking and Ethics",
        "value": 16,
        "x": 2452,
        "y": -3529
    },
    {
        "id": 621,
        "label": "Thick Ethical Concepts",
        "value": 13,
        "x": 2621,
        "y": -854
    },
    {
        "id": 622,
        "label": "Virtue Ethics",
        "value": 47,
        "x": 1282,
        "y": -2094
    },
    {
        "id": 623,
        "label": "Phenomenological Approaches to Ethics and Information Technology",
        "value": 11,
        "x": 3355,
        "y": -2744
    },
    {
        "id": 624,
        "label": "Human Enhancement",
        "value": 21,
        "x": 2539,
        "y": -2904
    },
    {
        "id": 625,
        "label": "Justice, Inequality, and Health",
        "value": 24,
        "x": 1956,
        "y": -5236
    },
    {
        "id": 626,
        "label": "Justice and Access to Health Care",
        "value": 14,
        "x": 1897,
        "y": -6106
    },
    {
        "id": 627,
        "label": "Pregnancy, Birth, and Medicine",
        "value": 11,
        "x": 4042,
        "y": -4308
    },
    {
        "id": 628,
        "label": "Privacy and Medicine",
        "value": 14,
        "x": 3386,
        "y": -4199
    },
    {
        "id": 629,
        "label": "Public Health Ethics",
        "value": 27,
        "x": 1504,
        "y": -4974
    },
    {
        "id": 630,
        "label": "The Sale of Human Organs",
        "value": 15,
        "x": 2161,
        "y": -4681
    },
    {
        "id": 631,
        "label": "Ethics of Stem Cell Research",
        "value": 8,
        "x": 4261,
        "y": -2390
    },
    {
        "id": 632,
        "label": "Theory and Bioethics",
        "value": 8,
        "x": 3961,
        "y": -3948
    },
    {
        "id": 633,
        "label": "Eugenics",
        "value": 10,
        "x": 4354,
        "y": -4155
    },
    {
        "id": 634,
        "label": "Voluntary Euthanasia",
        "value": 12,
        "x": 1583,
        "y": -2436
    },
    {
        "id": 635,
        "label": "Events",
        "value": 36,
        "x": -1626,
        "y": -251
    },
    {
        "id": 636,
        "label": "Evidence",
        "value": 15,
        "x": 1873,
        "y": -408
    },
    {
        "id": 637,
        "label": "The Legal Concept of Evidence",
        "value": 5,
        "x": 1432,
        "y": -4109
    },
    {
        "id": 638,
        "label": "The Concept of Evil",
        "value": 13,
        "x": 296,
        "y": -663
    },
    {
        "id": 639,
        "label": "The Problem of Evil",
        "value": 31,
        "x": -1711,
        "y": -846
    },
    {
        "id": 640,
        "label": "Evolution",
        "value": 52,
        "x": 1918,
        "y": -3728
    },
    {
        "id": 641,
        "label": "Evolutionary Thought Before Darwin",
        "value": 28,
        "x": 2232,
        "y": -3077
    },
    {
        "id": 642,
        "label": "Morality and Evolutionary Biology",
        "value": 14,
        "x": 3229,
        "y": -3196
    },
    {
        "id": 643,
        "label": "Evolutionary Game Theory",
        "value": 21,
        "x": 1450,
        "y": -3051
    },
    {
        "id": 644,
        "label": "Evolutionary Psychology",
        "value": 24,
        "x": 1184,
        "y": -3118
    },
    {
        "id": 645,
        "label": "Existentialism",
        "value": 43,
        "x": 1656,
        "y": 659
    },
    {
        "id": 646,
        "label": "Experimental Moral Philosophy",
        "value": 19,
        "x": 3059,
        "y": -1694
    },
    {
        "id": 647,
        "label": "Experimental Philosophy",
        "value": 5,
        "x": 3281,
        "y": 1822
    },
    {
        "id": 648,
        "label": "Experiment in Physics",
        "value": 14,
        "x": 106,
        "y": -1630
    },
    {
        "id": 649,
        "label": "Explanation in Mathematics",
        "value": 13,
        "x": -512,
        "y": 2176
    },
    {
        "id": 650,
        "label": "Scientific Explanation",
        "value": 38,
        "x": 893,
        "y": -1623
    },
    {
        "id": 651,
        "label": "Exploitation",
        "value": 25,
        "x": 1689,
        "y": -5112
    },
    {
        "id": 652,
        "label": "Externalism and Self-Knowledge",
        "value": 6,
        "x": -1557,
        "y": 1505
    },
    {
        "id": 653,
        "label": "Externalism About the Mind",
        "value": 31,
        "x": -1964,
        "y": -510
    },
    {
        "id": 654,
        "label": "Intrinsic vs. Extrinsic Properties",
        "value": 27,
        "x": -784,
        "y": 146
    },
    {
        "id": 655,
        "label": "Abraham Ibn Ezra",
        "value": 11,
        "x": -2881,
        "y": 1070
    },
    {
        "id": 656,
        "label": "Facts",
        "value": 37,
        "x": -1112,
        "y": 490
    },
    {
        "id": 657,
        "label": "Faith",
        "value": 24,
        "x": -1612,
        "y": -1268
    },
    {
        "id": 658,
        "label": "Shem Tov Ibn Falaquera",
        "value": 6,
        "x": -4936,
        "y": -316
    },
    {
        "id": 659,
        "label": "Fallacies",
        "value": 5,
        "x": 1191,
        "y": 2152
    },
    {
        "id": 660,
        "label": "Frantz Fanon",
        "value": 8,
        "x": 123,
        "y": -4055
    },
    {
        "id": 661,
        "label": "Fatalism",
        "value": 22,
        "x": -2314,
        "y": 160
    },
    {
        "id": 662,
        "label": "Gustav Theodor Fechner",
        "value": 9,
        "x": -2,
        "y": 1701
    },
    {
        "id": 663,
        "label": "Federalism",
        "value": 12,
        "x": 1451,
        "y": -3947
    },
    {
        "id": 664,
        "label": "Herbert Feigl",
        "value": 9,
        "x": -494,
        "y": -2068
    },
    {
        "id": 665,
        "label": "Margaret Fell",
        "value": 7,
        "x": 840,
        "y": -2925
    },
    {
        "id": 666,
        "label": "Feminist Philosophy",
        "value": 41,
        "x": 1810,
        "y": -3917
    },
    {
        "id": 667,
        "label": "Analytic Feminism",
        "value": 36,
        "x": 2331,
        "y": -1665
    },
    {
        "id": 668,
        "label": "Continental Feminism",
        "value": 52,
        "x": 2637,
        "y": -1802
    },
    {
        "id": 669,
        "label": "Intersections Between Analytic and Continental Feminism",
        "value": 11,
        "x": 4051,
        "y": -1730
    },
    {
        "id": 670,
        "label": "Intersections Between Pragmatist and Continental Feminism",
        "value": 22,
        "x": 1349,
        "y": -1299
    },
    {
        "id": 671,
        "label": "Latin American Feminism",
        "value": 10,
        "x": 4075,
        "y": -2892
    },
    {
        "id": 672,
        "label": "Pragmatist Feminism",
        "value": 14,
        "x": 553,
        "y": -2858
    },
    {
        "id": 673,
        "label": "Psychoanalytic Feminism",
        "value": 10,
        "x": 4364,
        "y": -1830
    },
    {
        "id": 674,
        "label": "Feminist Bioethics",
        "value": 24,
        "x": 3281,
        "y": -3479
    },
    {
        "id": 675,
        "label": "Feminist Environmental Philosophy",
        "value": 12,
        "x": 3385,
        "y": -3267
    },
    {
        "id": 676,
        "label": "Feminist History of Philosophy",
        "value": 18,
        "x": 2463,
        "y": -743
    },
    {
        "id": 677,
        "label": "Liberal Feminism",
        "value": 22,
        "x": 2112,
        "y": -4114
    },
    {
        "id": 678,
        "label": "Feminist Metaphysics",
        "value": 40,
        "x": 2902,
        "y": -2339
    },
    {
        "id": 679,
        "label": "Feminist Moral Psychology",
        "value": 14,
        "x": 3082,
        "y": -2212
    },
    {
        "id": 680,
        "label": "Feminist Philosophy of Language",
        "value": 16,
        "x": 1887,
        "y": -922
    },
    {
        "id": 681,
        "label": "Feminist Philosophy of Law",
        "value": 34,
        "x": 1697,
        "y": -4252
    },
    {
        "id": 682,
        "label": "Feminist Philosophy of Religion",
        "value": 6,
        "x": 1715,
        "y": 1083
    },
    {
        "id": 683,
        "label": "Feminist Political Philosophy",
        "value": 34,
        "x": 1708,
        "y": -3767
    },
    {
        "id": 684,
        "label": "Feminist Perspectives on Autonomy",
        "value": 19,
        "x": 2220,
        "y": -2931
    },
    {
        "id": 685,
        "label": "Feminist Perspectives on Class and Work",
        "value": 21,
        "x": 3134,
        "y": -2850
    },
    {
        "id": 686,
        "label": "Feminist Perspectives on Globalization",
        "value": 13,
        "x": 1892,
        "y": -5416
    },
    {
        "id": 687,
        "label": "Feminist Perspectives on Objectification",
        "value": 15,
        "x": 3883,
        "y": -2991
    },
    {
        "id": 688,
        "label": "Feminist Perspectives on Power",
        "value": 26,
        "x": 3055,
        "y": -2490
    },
    {
        "id": 689,
        "label": "Feminist Perspectives on Rape",
        "value": 20,
        "x": 2627,
        "y": -3417
    },
    {
        "id": 690,
        "label": "Feminist Perspectives on Reproduction and the Family",
        "value": 23,
        "x": 3268,
        "y": -3977
    },
    {
        "id": 691,
        "label": "Feminist Perspectives on Science",
        "value": 31,
        "x": 2291,
        "y": -1974
    },
    {
        "id": 692,
        "label": "Feminist Perspectives on Sex and Gender",
        "value": 25,
        "x": 3275,
        "y": -2447
    },
    {
        "id": 693,
        "label": "Feminist Perspectives on Sex Markets",
        "value": 15,
        "x": 3743,
        "y": -3948
    },
    {
        "id": 694,
        "label": "Feminist Perspectives on the Body",
        "value": 15,
        "x": 3955,
        "y": -2497
    },
    {
        "id": 695,
        "label": "Feminist Perspectives on the Self",
        "value": 24,
        "x": 3564,
        "y": -2896
    },
    {
        "id": 696,
        "label": "Feminist Perspectives on Trans Issues",
        "value": 12,
        "x": 4255,
        "y": -2695
    },
    {
        "id": 697,
        "label": "Ludwig Andreas Feuerbach",
        "value": 21,
        "x": 1803,
        "y": -766
    },
    {
        "id": 698,
        "label": "Paul Feyerabend",
        "value": 39,
        "x": -78,
        "y": -777
    },
    {
        "id": 699,
        "label": "Johann Gottlieb Fichte",
        "value": 22,
        "x": 2022,
        "y": -126
    },
    {
        "id": 700,
        "label": "Marsilio Ficino",
        "value": 21,
        "x": -486,
        "y": 3234
    },
    {
        "id": 701,
        "label": "Fiction",
        "value": 11,
        "x": 1588,
        "y": 372
    },
    {
        "id": 702,
        "label": "Fictional Entities",
        "value": 13,
        "x": 522,
        "y": 1390
    },
    {
        "id": 703,
        "label": "Fictionalism",
        "value": 30,
        "x": 404,
        "y": 798
    },
    {
        "id": 704,
        "label": "Fictionalism in the Philosophy of Mathematics",
        "value": 15,
        "x": -349,
        "y": 2313
    },
    {
        "id": 705,
        "label": "Modal Fictionalism",
        "value": 12,
        "x": 245,
        "y": 1964
    },
    {
        "id": 706,
        "label": "Fideism",
        "value": 12,
        "x": -2437,
        "y": -1179
    },
    {
        "id": 707,
        "label": "Philosophy of Film",
        "value": 10,
        "x": 1804,
        "y": -1647
    },
    {
        "id": 708,
        "label": "Philosophy of Money and Finance",
        "value": 13,
        "x": 133,
        "y": -3350
    },
    {
        "id": 709,
        "label": "John Niemeyer Findlay",
        "value": 4,
        "x": 1253,
        "y": 3616
    },
    {
        "id": 710,
        "label": "Fine-Tuning",
        "value": 10,
        "x": -707,
        "y": -2741
    },
    {
        "id": 711,
        "label": "Fitch\u2019s Paradox of Knowability",
        "value": 10,
        "x": -2083,
        "y": 3385
    },
    {
        "id": 712,
        "label": "Fitness",
        "value": 29,
        "x": 2090,
        "y": -4232
    },
    {
        "id": 713,
        "label": "Fitting Attitude Theories of Value",
        "value": 10,
        "x": 2775,
        "y": -184
    },
    {
        "id": 714,
        "label": "Richard FitzRalph",
        "value": 6,
        "x": -6313,
        "y": 1602
    },
    {
        "id": 715,
        "label": "Ludwik Fleck",
        "value": 13,
        "x": 119,
        "y": -1420
    },
    {
        "id": 716,
        "label": "Folk Psychology as Mental Simulation",
        "value": 18,
        "x": -1476,
        "y": -916
    },
    {
        "id": 717,
        "label": "Folk Psychology as a Theory",
        "value": 20,
        "x": -1446,
        "y": -1962
    },
    {
        "id": 718,
        "label": "Philippa Foot",
        "value": 10,
        "x": 2012,
        "y": -32
    },
    {
        "id": 719,
        "label": "Forgiveness",
        "value": 9,
        "x": -3278,
        "y": -1962
    },
    {
        "id": 720,
        "label": "Formalism in the Philosophy of Mathematics",
        "value": 16,
        "x": -2285,
        "y": 2998
    },
    {
        "id": 721,
        "label": "Plato\u2019s Middle Period Metaphysics and Epistemology",
        "value": 20,
        "x": 687,
        "y": 2761
    },
    {
        "id": 722,
        "label": "Form vs. Matter",
        "value": 11,
        "x": -1266,
        "y": 3223
    },
    {
        "id": 723,
        "label": "Michel Foucault",
        "value": 21,
        "x": 1417,
        "y": -2221
    },
    {
        "id": 724,
        "label": "Temporal Parts",
        "value": 42,
        "x": -1021,
        "y": 1226
    },
    {
        "id": 725,
        "label": "Francis of Marchia",
        "value": 7,
        "x": -5829,
        "y": 364
    },
    {
        "id": 726,
        "label": "Freedom of Association",
        "value": 11,
        "x": 1772,
        "y": -5874
    },
    {
        "id": 727,
        "label": "Positive and Negative Liberty",
        "value": 46,
        "x": 857,
        "y": -3547
    },
    {
        "id": 728,
        "label": "Freedom of Speech",
        "value": 13,
        "x": 1490,
        "y": -4396
    },
    {
        "id": 729,
        "label": "The Free Rider Problem",
        "value": 12,
        "x": 880,
        "y": -3742
    },
    {
        "id": 730,
        "label": "Free Will",
        "value": 74,
        "x": -1634,
        "y": -1107
    },
    {
        "id": 731,
        "label": "Incompatibilist (Nondeterministic) Theories of Free Will",
        "value": 27,
        "x": -1704,
        "y": -1727
    },
    {
        "id": 732,
        "label": "Gottlob Frege",
        "value": 71,
        "x": -1691,
        "y": 652
    },
    {
        "id": 733,
        "label": "The Frege-Hilbert Controversy",
        "value": 12,
        "x": -1476,
        "y": 2980
    },
    {
        "id": 734,
        "label": "Frege\u2019s Theorem and Foundations for Arithmetic",
        "value": 26,
        "x": -2525,
        "y": 1364
    },
    {
        "id": 735,
        "label": "Friendship",
        "value": 28,
        "x": 1684,
        "y": -2834
    },
    {
        "id": 736,
        "label": "Propositional Function",
        "value": 13,
        "x": -3532,
        "y": 202
    },
    {
        "id": 737,
        "label": "Recursive Functions",
        "value": 27,
        "x": -3358,
        "y": 958
    },
    {
        "id": 738,
        "label": "Functionalism",
        "value": 51,
        "x": -1136,
        "y": -779
    },
    {
        "id": 739,
        "label": "Fundamentality",
        "value": 21,
        "x": -622,
        "y": 746
    },
    {
        "id": 740,
        "label": "Future Contingents",
        "value": 18,
        "x": -2924,
        "y": 474
    },
    {
        "id": 741,
        "label": "Medieval Theories of Future Contingents",
        "value": 24,
        "x": -4260,
        "y": 194
    },
    {
        "id": 742,
        "label": "Hans-Georg Gadamer",
        "value": 14,
        "x": 414,
        "y": -1927
    },
    {
        "id": 743,
        "label": "Galen",
        "value": 10,
        "x": -386,
        "y": 3005
    },
    {
        "id": 744,
        "label": "Galileo Galilei",
        "value": 22,
        "x": -362,
        "y": 2077
    },
    {
        "id": 745,
        "label": "Games, Full Abstraction and Full Completeness",
        "value": 7,
        "x": -4648,
        "y": 425
    },
    {
        "id": 746,
        "label": "Logic and Games",
        "value": 27,
        "x": -3030,
        "y": 1128
    },
    {
        "id": 747,
        "label": "Logics for Analyzing Games",
        "value": 24,
        "x": -842,
        "y": 330
    },
    {
        "id": 748,
        "label": "Game Theory",
        "value": 30,
        "x": -222,
        "y": -2425
    },
    {
        "id": 749,
        "label": "Epistemic Foundations of Game Theory",
        "value": 12,
        "x": 205,
        "y": 299
    },
    {
        "id": 750,
        "label": "Game Theory and Ethics",
        "value": 13,
        "x": 180,
        "y": -2903
    },
    {
        "id": 751,
        "label": "Ga\u1e45ge\u015ba",
        "value": 8,
        "x": 3493,
        "y": 2409
    },
    {
        "id": 752,
        "label": "Pierre Gassendi",
        "value": 32,
        "x": 331,
        "y": 1683
    },
    {
        "id": 753,
        "label": "Gelukpa [dge lugs pa]",
        "value": 5,
        "x": 4040,
        "y": 4969
    },
    {
        "id": 754,
        "label": "Gene",
        "value": 35,
        "x": 1966,
        "y": -3556
    },
    {
        "id": 755,
        "label": "Generalized Quantifiers",
        "value": 13,
        "x": -2862,
        "y": 1760
    },
    {
        "id": 756,
        "label": "Early Philosophical Interpretations of General Relativity",
        "value": 19,
        "x": 2666,
        "y": 960
    },
    {
        "id": 757,
        "label": "Generic Generalizations",
        "value": 8,
        "x": -27,
        "y": 515
    },
    {
        "id": 758,
        "label": "Genetic Drift",
        "value": 25,
        "x": 2210,
        "y": -3310
    },
    {
        "id": 759,
        "label": "Genetics",
        "value": 61,
        "x": 2318,
        "y": -3408
    },
    {
        "id": 760,
        "label": "Evolutionary Genetics",
        "value": 19,
        "x": 2731,
        "y": -4847
    },
    {
        "id": 761,
        "label": "The Genotype/Phenotype Distinction",
        "value": 30,
        "x": 1426,
        "y": -3429
    },
    {
        "id": 762,
        "label": "Molecular Genetics",
        "value": 20,
        "x": 2407,
        "y": -4422
    },
    {
        "id": 763,
        "label": "Population Genetics",
        "value": 20,
        "x": 2382,
        "y": -4672
    },
    {
        "id": 764,
        "label": "Genomics and Postgenomics",
        "value": 14,
        "x": 2874,
        "y": -4665
    },
    {
        "id": 765,
        "label": "Epistemology of Geometry",
        "value": 13,
        "x": 1647,
        "y": 551
    },
    {
        "id": 766,
        "label": "Finitism in Geometry",
        "value": 10,
        "x": 419,
        "y": 2689
    },
    {
        "id": 767,
        "label": "Nineteenth Century Geometry",
        "value": 14,
        "x": 1951,
        "y": 1363
    },
    {
        "id": 768,
        "label": "18th Century German Philosophy Prior to Kant",
        "value": 10,
        "x": 690,
        "y": 450
    },
    {
        "id": 769,
        "label": "Gersonides",
        "value": 11,
        "x": -4695,
        "y": 1395
    },
    {
        "id": 770,
        "label": "Foundationalist Theories of Epistemic Justification",
        "value": 32,
        "x": 505,
        "y": 405
    },
    {
        "id": 771,
        "label": "Globalization",
        "value": 21,
        "x": 477,
        "y": -5133
    },
    {
        "id": 772,
        "label": "Global Justice",
        "value": 41,
        "x": 662,
        "y": -5158
    },
    {
        "id": 773,
        "label": "God and Other Necessary Beings",
        "value": 14,
        "x": -2646,
        "y": 158
    },
    {
        "id": 774,
        "label": "Pragmatic Arguments and Belief in God",
        "value": 13,
        "x": -2343,
        "y": -1560
    },
    {
        "id": 775,
        "label": "Moral Arguments for the Existence of God",
        "value": 25,
        "x": -755,
        "y": -1326
    },
    {
        "id": 776,
        "label": "Ontological Arguments",
        "value": 32,
        "x": -1639,
        "y": 321
    },
    {
        "id": 777,
        "label": "Godfrey of Fontaines",
        "value": 11,
        "x": -5240,
        "y": -991
    },
    {
        "id": 778,
        "label": "William Godwin",
        "value": 6,
        "x": 3689,
        "y": -3410
    },
    {
        "id": 779,
        "label": "Kurt G\u00f6del",
        "value": 41,
        "x": -2542,
        "y": 2144
    },
    {
        "id": 780,
        "label": "G\u00f6del\u2019s Incompleteness Theorems",
        "value": 31,
        "x": -3500,
        "y": 1914
    },
    {
        "id": 781,
        "label": "Nelson Goodman",
        "value": 20,
        "x": -450,
        "y": -31
    },
    {
        "id": 782,
        "label": "Perfect Goodness",
        "value": 14,
        "x": -3111,
        "y": -1933
    },
    {
        "id": 783,
        "label": "Gorampa [go rams pa]",
        "value": 1,
        "x": 7210,
        "y": 3761
    },
    {
        "id": 784,
        "label": "Typelogical Grammar",
        "value": 8,
        "x": -4504,
        "y": 1113
    },
    {
        "id": 785,
        "label": "Gratitude",
        "value": 9,
        "x": 1898,
        "y": -2738
    },
    {
        "id": 786,
        "label": "Thomas Hill Green",
        "value": 17,
        "x": 6,
        "y": -2482
    },
    {
        "id": 787,
        "label": "Gregory of Rimini",
        "value": 10,
        "x": -5889,
        "y": 1391
    },
    {
        "id": 788,
        "label": "Paul Grice",
        "value": 24,
        "x": -1254,
        "y": -1666
    },
    {
        "id": 789,
        "label": "Robert Grosseteste",
        "value": 14,
        "x": -4318,
        "y": 479
    },
    {
        "id": 790,
        "label": "Hugo Grotius",
        "value": 16,
        "x": -2043,
        "y": -3395
    },
    {
        "id": 791,
        "label": "Metaphysical Grounding",
        "value": 25,
        "x": -1529,
        "y": 919
    },
    {
        "id": 792,
        "label": "Group Rights",
        "value": 17,
        "x": 440,
        "y": -5379
    },
    {
        "id": 793,
        "label": "J\u00fcrgen Habermas",
        "value": 25,
        "x": 707,
        "y": -3110
    },
    {
        "id": 794,
        "label": "Haecceitism",
        "value": 14,
        "x": -842,
        "y": 2196
    },
    {
        "id": 795,
        "label": "Medieval Theories of Haecceity",
        "value": 12,
        "x": -3365,
        "y": 1756
    },
    {
        "id": 796,
        "label": "Judah Halevi",
        "value": 26,
        "x": -2622,
        "y": -235
    },
    {
        "id": 797,
        "label": "Johann Georg Hamann",
        "value": 14,
        "x": 676,
        "y": -804
    },
    {
        "id": 798,
        "label": "Happiness",
        "value": 26,
        "x": 512,
        "y": -2042
    },
    {
        "id": 799,
        "label": "Richard Mervyn Hare",
        "value": 6,
        "x": 1500,
        "y": 2422
    },
    {
        "id": 800,
        "label": "David Hartley",
        "value": 7,
        "x": 1862,
        "y": 471
    },
    {
        "id": 801,
        "label": "Nicolai Hartmann",
        "value": 4,
        "x": 3153,
        "y": 2430
    },
    {
        "id": 802,
        "label": "Charles Hartshorne",
        "value": 19,
        "x": -2951,
        "y": -1006
    },
    {
        "id": 803,
        "label": "Friedrich Hayek",
        "value": 12,
        "x": 146,
        "y": -5027
    },
    {
        "id": 804,
        "label": "Heaven and Hell in Christian Thought",
        "value": 8,
        "x": -2357,
        "y": -2627
    },
    {
        "id": 805,
        "label": "Hedonism",
        "value": 34,
        "x": 697,
        "y": -1882
    },
    {
        "id": 806,
        "label": "Georg Wilhelm Friedrich Hegel",
        "value": 66,
        "x": 640,
        "y": -1038
    },
    {
        "id": 807,
        "label": "Hermann von Helmholtz",
        "value": 28,
        "x": 1788,
        "y": 247
    },
    {
        "id": 808,
        "label": "Carl Hempel",
        "value": 23,
        "x": -28,
        "y": -1497
    },
    {
        "id": 809,
        "label": "Michel Henry",
        "value": 8,
        "x": 1637,
        "y": 2353
    },
    {
        "id": 810,
        "label": "Henry of Ghent",
        "value": 12,
        "x": -5468,
        "y": -777
    },
    {
        "id": 811,
        "label": "Heraclitus",
        "value": 16,
        "x": 1578,
        "y": 1513
    },
    {
        "id": 812,
        "label": "Johann Friedrich Herbart",
        "value": 6,
        "x": 1020,
        "y": 3186
    },
    {
        "id": 813,
        "label": "Johann Gottfried von Herder",
        "value": 36,
        "x": 996,
        "y": -881
    },
    {
        "id": 814,
        "label": "Heritability",
        "value": 27,
        "x": 1896,
        "y": -4167
    },
    {
        "id": 815,
        "label": "Inheritance Systems",
        "value": 10,
        "x": 2799,
        "y": -5230
    },
    {
        "id": 816,
        "label": "Hermeneutics",
        "value": 35,
        "x": 1487,
        "y": -910
    },
    {
        "id": 817,
        "label": "William Heytesbury",
        "value": 17,
        "x": -4589,
        "y": 2264
    },
    {
        "id": 818,
        "label": "Hilbert\u2019s Program",
        "value": 32,
        "x": -2526,
        "y": 1975
    },
    {
        "id": 819,
        "label": "Philosophy of History",
        "value": 15,
        "x": 1699,
        "y": -2627
    },
    {
        "id": 820,
        "label": "Thomas Hobbes",
        "value": 54,
        "x": 137,
        "y": -931
    },
    {
        "id": 821,
        "label": "Hobbes\u2019s Moral and Political Philosophy",
        "value": 30,
        "x": -50,
        "y": -3050
    },
    {
        "id": 822,
        "label": "Hobbes\u2019 Philosophy of Science",
        "value": 4,
        "x": 1498,
        "y": 3268
    },
    {
        "id": 823,
        "label": "Paul-Henri Thiry (Baron) d\u2019Holbach",
        "value": 6,
        "x": -2611,
        "y": -2253
    },
    {
        "id": 824,
        "label": "Holes",
        "value": 7,
        "x": -873,
        "y": 3449
    },
    {
        "id": 825,
        "label": "Robert Holkot",
        "value": 19,
        "x": -3923,
        "y": 557
    },
    {
        "id": 826,
        "label": "Homosexuality",
        "value": 12,
        "x": 2413,
        "y": -3713
    },
    {
        "id": 827,
        "label": "Sidney Hook",
        "value": 7,
        "x": 1037,
        "y": -2014
    },
    {
        "id": 828,
        "label": "Hope",
        "value": 10,
        "x": -1258,
        "y": -6
    },
    {
        "id": 829,
        "label": "Max Horkheimer",
        "value": 14,
        "x": 787,
        "y": -2114
    },
    {
        "id": 830,
        "label": "The Human Genome Project",
        "value": 25,
        "x": 2765,
        "y": -3811
    },
    {
        "id": 831,
        "label": "Human Rights",
        "value": 36,
        "x": 612,
        "y": -4769
    },
    {
        "id": 832,
        "label": "Wilhelm von Humboldt",
        "value": 9,
        "x": 2840,
        "y": -963
    },
    {
        "id": 833,
        "label": "David Hume",
        "value": 77,
        "x": -242,
        "y": -1034
    },
    {
        "id": 834,
        "label": "Kant and Hume on Causality",
        "value": 16,
        "x": 1722,
        "y": -1118
    },
    {
        "id": 835,
        "label": "Kant and Hume on Morality",
        "value": 15,
        "x": 509,
        "y": -2727
    },
    {
        "id": 836,
        "label": "Hume\u2019s Moral Philosophy",
        "value": 15,
        "x": -58,
        "y": -2119
    },
    {
        "id": 837,
        "label": "Hume\u2019s Newtonianism and Anti-Newtonianism",
        "value": 17,
        "x": -82,
        "y": 92
    },
    {
        "id": 838,
        "label": "Hume on Free Will",
        "value": 18,
        "x": -1482,
        "y": -2163
    },
    {
        "id": 839,
        "label": "Hume on Religion",
        "value": 40,
        "x": -953,
        "y": -838
    },
    {
        "id": 840,
        "label": "Modesty and Humility",
        "value": 11,
        "x": 1218,
        "y": 1692
    },
    {
        "id": 841,
        "label": "Philosophy of Humor",
        "value": 13,
        "x": -624,
        "y": -1198
    },
    {
        "id": 842,
        "label": "Edmund Husserl",
        "value": 64,
        "x": 376,
        "y": 982
    },
    {
        "id": 843,
        "label": "Hybrid Logic",
        "value": 8,
        "x": -3278,
        "y": 2756
    },
    {
        "id": 844,
        "label": "Iamblichus",
        "value": 16,
        "x": -744,
        "y": 3096
    },
    {
        "id": 845,
        "label": "Ibn \u2018Arab\u00ee",
        "value": 7,
        "x": -5758,
        "y": -928
    },
    {
        "id": 846,
        "label": "Ibn B\u00e2jja [Avempace]",
        "value": 10,
        "x": -4288,
        "y": 2226
    },
    {
        "id": 847,
        "label": "Samuel Ibn Tibbon",
        "value": 18,
        "x": -3626,
        "y": 789
    },
    {
        "id": 848,
        "label": "Idealism",
        "value": 67,
        "x": 429,
        "y": -211
    },
    {
        "id": 849,
        "label": "Identity",
        "value": 34,
        "x": -181,
        "y": 324
    },
    {
        "id": 850,
        "label": "The Identity of Indiscernibles",
        "value": 26,
        "x": 109,
        "y": 1479
    },
    {
        "id": 851,
        "label": "Identity Over Time",
        "value": 26,
        "x": -721,
        "y": 872
    },
    {
        "id": 852,
        "label": "Personal Identity",
        "value": 39,
        "x": 529,
        "y": -645
    },
    {
        "id": 853,
        "label": "Relative Identity",
        "value": 23,
        "x": -731,
        "y": 1191
    },
    {
        "id": 854,
        "label": "Transworld Identity",
        "value": 20,
        "x": -1126,
        "y": 1778
    },
    {
        "id": 855,
        "label": "Identity Politics",
        "value": 32,
        "x": 2283,
        "y": -3633
    },
    {
        "id": 856,
        "label": "The Mind/Brain Identity Theory",
        "value": 26,
        "x": -1166,
        "y": -433
    },
    {
        "id": 857,
        "label": "Law and Ideology",
        "value": 8,
        "x": -178,
        "y": -5339
    },
    {
        "id": 858,
        "label": "Idiolects",
        "value": 21,
        "x": -2043,
        "y": -1644
    },
    {
        "id": 859,
        "label": "Mental Imagery",
        "value": 25,
        "x": -1516,
        "y": -103
    },
    {
        "id": 860,
        "label": "Imagination",
        "value": 43,
        "x": 2,
        "y": -405
    },
    {
        "id": 861,
        "label": "Imaginative Resistance",
        "value": 4,
        "x": -399,
        "y": -3093
    },
    {
        "id": 862,
        "label": "Immigration",
        "value": 8,
        "x": 1079,
        "y": -6448
    },
    {
        "id": 863,
        "label": "Philosophy of Immunology",
        "value": 24,
        "x": 1811,
        "y": -2946
    },
    {
        "id": 864,
        "label": "Immutability",
        "value": 10,
        "x": -4056,
        "y": -626
    },
    {
        "id": 865,
        "label": "Impartiality",
        "value": 27,
        "x": 366,
        "y": -3061
    },
    {
        "id": 866,
        "label": "Implicature",
        "value": 29,
        "x": -1260,
        "y": -1399
    },
    {
        "id": 867,
        "label": "Optimality-Theoretic and Game-Theoretic Approaches to Implicature",
        "value": 7,
        "x": -2748,
        "y": -2919
    },
    {
        "id": 868,
        "label": "Impossible Worlds",
        "value": 19,
        "x": -448,
        "y": 1861
    },
    {
        "id": 869,
        "label": "The Incommensurability of Scientific Theories",
        "value": 20,
        "x": 3,
        "y": -1240
    },
    {
        "id": 870,
        "label": "Incommensurable Values",
        "value": 9,
        "x": 3388,
        "y": -1922
    },
    {
        "id": 871,
        "label": "Arguments for Incompatibilism",
        "value": 33,
        "x": -1787,
        "y": -1538
    },
    {
        "id": 872,
        "label": "The Concept of Emotion in Classical Indian Philosophy",
        "value": 8,
        "x": 3324,
        "y": 1270
    },
    {
        "id": 873,
        "label": "Language and Testimony in Classical Indian Philosophy",
        "value": 14,
        "x": 3004,
        "y": 3137
    },
    {
        "id": 874,
        "label": "The Literal-Nonliteral Distinction in Classical Indian Philosophy",
        "value": 12,
        "x": 2201,
        "y": 1190
    },
    {
        "id": 875,
        "label": "Logic in Classical Indian Philosophy",
        "value": 8,
        "x": 3728,
        "y": 3369
    },
    {
        "id": 876,
        "label": "Naturalism in Classical Indian Philosophy",
        "value": 9,
        "x": 2149,
        "y": -1142
    },
    {
        "id": 877,
        "label": "Perceptual Experience and Concepts in Classical Indian Philosophy",
        "value": 15,
        "x": 1712,
        "y": 2531
    },
    {
        "id": 878,
        "label": "Methodological Individualism",
        "value": 22,
        "x": 734,
        "y": -2669
    },
    {
        "id": 879,
        "label": "The Problem of Induction",
        "value": 42,
        "x": 357,
        "y": -920
    },
    {
        "id": 880,
        "label": "Inductive Logic",
        "value": 22,
        "x": -44,
        "y": -1347
    },
    {
        "id": 881,
        "label": "Space and Time: Inertial Frames",
        "value": 13,
        "x": 3532,
        "y": 1536
    },
    {
        "id": 882,
        "label": "Infinite Regress Arguments",
        "value": 12,
        "x": -2222,
        "y": 1331
    },
    {
        "id": 883,
        "label": "Informal Logic",
        "value": 16,
        "x": -1170,
        "y": 68
    },
    {
        "id": 884,
        "label": "Information",
        "value": 30,
        "x": -1683,
        "y": 1273
    },
    {
        "id": 885,
        "label": "Logic and Information",
        "value": 11,
        "x": -1868,
        "y": 2137
    },
    {
        "id": 886,
        "label": "Quantum Entanglement and Information",
        "value": 19,
        "x": 3394,
        "y": 499
    },
    {
        "id": 887,
        "label": "Semantic Conceptions of Information",
        "value": 13,
        "x": -1422,
        "y": -229
    },
    {
        "id": 888,
        "label": "Information Technology and Moral Values",
        "value": 20,
        "x": 862,
        "y": -3109
    },
    {
        "id": 889,
        "label": "Privacy and Information Technology",
        "value": 11,
        "x": 3171,
        "y": -4269
    },
    {
        "id": 890,
        "label": "Roman Ingarden",
        "value": 18,
        "x": 151,
        "y": 1037
    },
    {
        "id": 891,
        "label": "The Distinction Between Innate and Acquired Characteristics",
        "value": 17,
        "x": -254,
        "y": -2947
    },
    {
        "id": 892,
        "label": "Innateness and Contemporary Theories of Cognition",
        "value": 17,
        "x": -1473,
        "y": -1526
    },
    {
        "id": 893,
        "label": "The Historical Controversies Surrounding Innateness",
        "value": 17,
        "x": -408,
        "y": 622
    },
    {
        "id": 894,
        "label": "Innateness and Language",
        "value": 16,
        "x": -937,
        "y": -1801
    },
    {
        "id": 895,
        "label": "Insolubles",
        "value": 26,
        "x": -4597,
        "y": 1842
    },
    {
        "id": 896,
        "label": "Instrumental Rationality",
        "value": 19,
        "x": 1745,
        "y": -1577
    },
    {
        "id": 897,
        "label": "Integrity",
        "value": 10,
        "x": 3081,
        "y": -1539
    },
    {
        "id": 898,
        "label": "Intensional Transitive Verbs",
        "value": 11,
        "x": -3107,
        "y": -527
    },
    {
        "id": 899,
        "label": "Intention",
        "value": 21,
        "x": -258,
        "y": -2263
    },
    {
        "id": 900,
        "label": "Intentionality",
        "value": 52,
        "x": -366,
        "y": 128
    },
    {
        "id": 901,
        "label": "Collective Intentionality",
        "value": 12,
        "x": 10,
        "y": -2894
    },
    {
        "id": 902,
        "label": "Intentionality in Ancient Philosophy",
        "value": 14,
        "x": 77,
        "y": 1947
    },
    {
        "id": 903,
        "label": "Phenomenal Intentionality",
        "value": 18,
        "x": -1585,
        "y": 35
    },
    {
        "id": 904,
        "label": "Reasons for Action: Internal vs. External",
        "value": 14,
        "x": 3198,
        "y": -1075
    },
    {
        "id": 905,
        "label": "Introspection",
        "value": 36,
        "x": -684,
        "y": 260
    },
    {
        "id": 906,
        "label": "Intuition",
        "value": 17,
        "x": 2312,
        "y": -230
    },
    {
        "id": 907,
        "label": "Intuitionism in Ethics",
        "value": 11,
        "x": 2798,
        "y": -1258
    },
    {
        "id": 908,
        "label": "Intuitionism in the Philosophy of Mathematics",
        "value": 31,
        "x": -1998,
        "y": 2410
    },
    {
        "id": 909,
        "label": "Intuitionistic Logic",
        "value": 47,
        "x": -2809,
        "y": 2494
    },
    {
        "id": 910,
        "label": "The Development of Intuitionistic Logic",
        "value": 26,
        "x": -3431,
        "y": 2888
    },
    {
        "id": 911,
        "label": "Intuitionistic Type Theory",
        "value": 17,
        "x": -3808,
        "y": 2906
    },
    {
        "id": 912,
        "label": "Inverted Qualia",
        "value": 21,
        "x": -2076,
        "y": -252
    },
    {
        "id": 913,
        "label": "Isaac Israeli",
        "value": 9,
        "x": -1522,
        "y": 3500
    },
    {
        "id": 914,
        "label": "Friedrich Heinrich Jacobi",
        "value": 19,
        "x": 740,
        "y": -231
    },
    {
        "id": 915,
        "label": "William James",
        "value": 43,
        "x": -592,
        "y": -742
    },
    {
        "id": 916,
        "label": "James of Viterbo",
        "value": 5,
        "x": -5747,
        "y": -1774
    },
    {
        "id": 917,
        "label": "Japanese Philosophy",
        "value": 13,
        "x": -831,
        "y": 5656
    },
    {
        "id": 918,
        "label": "The Kokugaku (Native Studies) School",
        "value": 8,
        "x": -863,
        "y": 6154
    },
    {
        "id": 919,
        "label": "K\u016bkai",
        "value": 8,
        "x": -510,
        "y": 5067
    },
    {
        "id": 920,
        "label": "The Kyoto School",
        "value": 19,
        "x": -673,
        "y": 3958
    },
    {
        "id": 921,
        "label": "Nishida Kitar\u014d",
        "value": 12,
        "x": -1188,
        "y": 4476
    },
    {
        "id": 922,
        "label": "Japanese Pure Land Philosophy",
        "value": 11,
        "x": 220,
        "y": 5426
    },
    {
        "id": 923,
        "label": "Watsuji Tetsur\u014d",
        "value": 10,
        "x": -907,
        "y": 4816
    },
    {
        "id": 924,
        "label": "Karl Jaspers",
        "value": 10,
        "x": 2220,
        "y": 856
    },
    {
        "id": 925,
        "label": "Jayar\u0101\u015bi",
        "value": 6,
        "x": 1595,
        "y": 2887
    },
    {
        "id": 926,
        "label": "Thomas Jefferson",
        "value": 10,
        "x": 1550,
        "y": -4755
    },
    {
        "id": 927,
        "label": "William Stanley Jevons",
        "value": 2,
        "x": -5242,
        "y": 5162
    },
    {
        "id": 928,
        "label": "John of Salisbury",
        "value": 13,
        "x": -3747,
        "y": 581
    },
    {
        "id": 929,
        "label": "Emily Elizabeth Constance Jones",
        "value": 8,
        "x": -3358,
        "y": 1463
    },
    {
        "id": 930,
        "label": "Justice",
        "value": 30,
        "x": 966,
        "y": -4668
    },
    {
        "id": 931,
        "label": "Justice and Bad Luck",
        "value": 17,
        "x": 715,
        "y": -5409
    },
    {
        "id": 932,
        "label": "Intergenerational Justice",
        "value": 23,
        "x": 1929,
        "y": -5017
    },
    {
        "id": 933,
        "label": "Retributive Justice",
        "value": 16,
        "x": -1174,
        "y": -3827
    },
    {
        "id": 934,
        "label": "Territorial Rights and Territorial Justice",
        "value": 12,
        "x": -475,
        "y": -5450
    },
    {
        "id": 935,
        "label": "Transitional Justice",
        "value": 13,
        "x": -1282,
        "y": -4448
    },
    {
        "id": 936,
        "label": "Justice as a Virtue",
        "value": 11,
        "x": 2190,
        "y": -5591
    },
    {
        "id": 937,
        "label": "Coherentist Theories of Epistemic Justification",
        "value": 19,
        "x": 1288,
        "y": 756
    },
    {
        "id": 938,
        "label": "Internalist vs. Externalist Conceptions of Epistemic Justification",
        "value": 26,
        "x": 1572,
        "y": 950
    },
    {
        "id": 939,
        "label": "Transmission of Justification and Warrant",
        "value": 7,
        "x": 2561,
        "y": 1226
    },
    {
        "id": 940,
        "label": "Public Justification",
        "value": 24,
        "x": 256,
        "y": -4798
    },
    {
        "id": 941,
        "label": "Kant\u2019s Transcendental Idealism",
        "value": 5,
        "x": 3905,
        "y": -3176
    },
    {
        "id": 942,
        "label": "Immanuel Kant",
        "value": 131,
        "x": 2020,
        "y": -2219
    },
    {
        "id": 943,
        "label": "Kant\u2019s Account of Reason",
        "value": 24,
        "x": 2145,
        "y": -1946
    },
    {
        "id": 944,
        "label": "Kant\u2019s Aesthetics and Teleology",
        "value": 28,
        "x": 2014,
        "y": -1091
    },
    {
        "id": 945,
        "label": "Kantian Conceptualism/Nonconceptualism",
        "value": 8,
        "x": 195,
        "y": -2200
    },
    {
        "id": 946,
        "label": "Kant\u2019s Critique of Metaphysics",
        "value": 13,
        "x": 2384,
        "y": -1080
    },
    {
        "id": 947,
        "label": "Leibniz\u2019s Influence on Kant",
        "value": 15,
        "x": 1806,
        "y": 858
    },
    {
        "id": 948,
        "label": "Kant\u2019s Moral Philosophy",
        "value": 46,
        "x": 1204,
        "y": -2924
    },
    {
        "id": 949,
        "label": "Kant\u2019s Philosophical Development",
        "value": 28,
        "x": 816,
        "y": -50
    },
    {
        "id": 950,
        "label": "Kant\u2019s Philosophy of Mathematics",
        "value": 15,
        "x": 983,
        "y": -285
    },
    {
        "id": 951,
        "label": "Kant\u2019s Philosophy of Religion",
        "value": 27,
        "x": -117,
        "y": -1138
    },
    {
        "id": 952,
        "label": "Kant\u2019s Philosophy of Science",
        "value": 14,
        "x": 2596,
        "y": -988
    },
    {
        "id": 953,
        "label": "Kant\u2019s Social and Political Philosophy",
        "value": 31,
        "x": 690,
        "y": -3585
    },
    {
        "id": 954,
        "label": "Kant\u2019s Theory of Judgment",
        "value": 23,
        "x": -337,
        "y": -291
    },
    {
        "id": 955,
        "label": "Kant\u2019s Transcendental Arguments",
        "value": 24,
        "x": 1856,
        "y": -1385
    },
    {
        "id": 956,
        "label": "Kant\u2019s View of the Mind and Consciousness of Self",
        "value": 24,
        "x": 1296,
        "y": -253
    },
    {
        "id": 957,
        "label": "Kant\u2019s Views on Space and Time",
        "value": 13,
        "x": 2921,
        "y": -65
    },
    {
        "id": 958,
        "label": "Joseph Kaspi",
        "value": 3,
        "x": -5922,
        "y": -712
    },
    {
        "id": 959,
        "label": "Johannes Kepler",
        "value": 9,
        "x": -1754,
        "y": 1754
    },
    {
        "id": 960,
        "label": "S\u00f8ren Kierkegaard",
        "value": 22,
        "x": 366,
        "y": 365
    },
    {
        "id": 961,
        "label": "Richard Kilvington",
        "value": 11,
        "x": -5491,
        "y": 1951
    },
    {
        "id": 962,
        "label": "Robert Kilwardby",
        "value": 9,
        "x": -4222,
        "y": -411
    },
    {
        "id": 963,
        "label": "The Analysis of Knowledge",
        "value": 46,
        "x": 93,
        "y": 387
    },
    {
        "id": 964,
        "label": "Knowledge by Acquaintance vs. Description",
        "value": 15,
        "x": -985,
        "y": 1069
    },
    {
        "id": 965,
        "label": "Self-Knowledge",
        "value": 47,
        "x": -482,
        "y": 107
    },
    {
        "id": 966,
        "label": "The Value of Knowledge",
        "value": 8,
        "x": 3053,
        "y": 1058
    },
    {
        "id": 967,
        "label": "Knowledge How",
        "value": 6,
        "x": -2504,
        "y": -2384
    },
    {
        "id": 968,
        "label": "The Kochen-Specker Theorem",
        "value": 12,
        "x": 4411,
        "y": 56
    },
    {
        "id": 969,
        "label": "Thomas Kuhn",
        "value": 40,
        "x": 455,
        "y": -1086
    },
    {
        "id": 970,
        "label": "Kum\u0101rila",
        "value": 15,
        "x": 2562,
        "y": 2161
    },
    {
        "id": 971,
        "label": "Jacques Lacan",
        "value": 10,
        "x": 3753,
        "y": -1472
    },
    {
        "id": 972,
        "label": "Louis de La Forge",
        "value": 13,
        "x": -226,
        "y": 3520
    },
    {
        "id": 973,
        "label": "Imre Lakatos",
        "value": 39,
        "x": -305,
        "y": 851
    },
    {
        "id": 974,
        "label": "The Lambda Calculus",
        "value": 13,
        "x": -4138,
        "y": 1940
    },
    {
        "id": 975,
        "label": "Friedrich Albert Lange",
        "value": 14,
        "x": 3327,
        "y": -558
    },
    {
        "id": 976,
        "label": "The Language of Thought Hypothesis",
        "value": 40,
        "x": -2202,
        "y": -1077
    },
    {
        "id": 977,
        "label": "Large Cardinals and Determinacy",
        "value": 12,
        "x": -3879,
        "y": 3562
    },
    {
        "id": 978,
        "label": "Latin American Philosophy",
        "value": 21,
        "x": 4383,
        "y": -1029
    },
    {
        "id": 979,
        "label": "Analytic Philosophy in Latin America",
        "value": 10,
        "x": 5298,
        "y": -192
    },
    {
        "id": 980,
        "label": "Liberalism in Latin America",
        "value": 4,
        "x": 5046,
        "y": -2247
    },
    {
        "id": 981,
        "label": "Latin American Philosophy: Metaphilosophical Foundations",
        "value": 8,
        "x": 5439,
        "y": -893
    },
    {
        "id": 982,
        "label": "Philosophy of Science in Latin America",
        "value": 8,
        "x": 5879,
        "y": -702
    },
    {
        "id": 983,
        "label": "Skepticism in Latin America",
        "value": 17,
        "x": 2001,
        "y": 451
    },
    {
        "id": 984,
        "label": "Latinx Philosophy",
        "value": 8,
        "x": 4518,
        "y": -2309
    },
    {
        "id": 985,
        "label": "Law and Language",
        "value": 13,
        "x": -2344,
        "y": -3422
    },
    {
        "id": 986,
        "label": "The Limits of Law",
        "value": 20,
        "x": -332,
        "y": -4700
    },
    {
        "id": 987,
        "label": "Natural Law Theories",
        "value": 18,
        "x": -1697,
        "y": -3529
    },
    {
        "id": 988,
        "label": "The Rule of Law",
        "value": 14,
        "x": -688,
        "y": -5293
    },
    {
        "id": 989,
        "label": "Laws of Nature",
        "value": 52,
        "x": 185,
        "y": -790
    },
    {
        "id": 990,
        "label": "Perceptual Learning",
        "value": 6,
        "x": -3796,
        "y": -1589
    },
    {
        "id": 991,
        "label": "Formal Learning Theory",
        "value": 19,
        "x": -950,
        "y": -1452
    },
    {
        "id": 992,
        "label": "Jacques Lef\u00e8vre d\u2019\u00c9taples",
        "value": 17,
        "x": -2067,
        "y": 2766
    },
    {
        "id": 993,
        "label": "The Economic Analysis of Law",
        "value": 10,
        "x": -1054,
        "y": -4850
    },
    {
        "id": 994,
        "label": "Legal Positivism",
        "value": 19,
        "x": -1945,
        "y": -4313
    },
    {
        "id": 995,
        "label": "Legal Punishment",
        "value": 15,
        "x": -1757,
        "y": -4111
    },
    {
        "id": 996,
        "label": "Interpretation and Coherence in Legal Reasoning",
        "value": 12,
        "x": -2339,
        "y": -3851
    },
    {
        "id": 997,
        "label": "Precedent and Analogy in Legal Reasoning",
        "value": 9,
        "x": -2377,
        "y": -4412
    },
    {
        "id": 998,
        "label": "Legal Rights",
        "value": 16,
        "x": 970,
        "y": -5318
    },
    {
        "id": 999,
        "label": "Political Legitimacy",
        "value": 29,
        "x": 331,
        "y": -4511
    },
    {
        "id": 1000,
        "label": "Antoine Le Grand",
        "value": 7,
        "x": 494,
        "y": 4247
    },
    {
        "id": 1001,
        "label": "Gottfried Wilhelm Leibniz",
        "value": 79,
        "x": 31,
        "y": 1196
    },
    {
        "id": 1002,
        "label": "Leibniz\u2019s Ethics",
        "value": 11,
        "x": -132,
        "y": 859
    },
    {
        "id": 1003,
        "label": "Leibniz\u2019s Exoteric Philosophy",
        "value": 7,
        "x": -806,
        "y": 2989
    },
    {
        "id": 1004,
        "label": "Leibniz\u2019s Influence on 19th Century Logic",
        "value": 8,
        "x": -2265,
        "y": 3999
    },
    {
        "id": 1005,
        "label": "Leibniz\u2019s Modal Metaphysics",
        "value": 31,
        "x": -228,
        "y": 2165
    },
    {
        "id": 1006,
        "label": "Leibniz on Causation",
        "value": 19,
        "x": -181,
        "y": 1996
    },
    {
        "id": 1007,
        "label": "Leibniz on the Problem of Evil",
        "value": 8,
        "x": 12,
        "y": 2891
    },
    {
        "id": 1008,
        "label": "Leibniz\u2019s Philosophy of Mind",
        "value": 17,
        "x": 299,
        "y": 2865
    },
    {
        "id": 1009,
        "label": "Leibniz\u2019s Philosophy of Physics",
        "value": 19,
        "x": 1009,
        "y": 1844
    },
    {
        "id": 1010,
        "label": "Yeshayahu Leibowitz",
        "value": 3,
        "x": -1524,
        "y": -4379
    },
    {
        "id": 1011,
        "label": "Stanis\u0142aw Le\u015bniewski",
        "value": 12,
        "x": -1767,
        "y": 2797
    },
    {
        "id": 1012,
        "label": "Leucippus",
        "value": 10,
        "x": 1381,
        "y": 3875
    },
    {
        "id": 1013,
        "label": "Levels of Organization in Biology",
        "value": 11,
        "x": 193,
        "y": -3075
    },
    {
        "id": 1014,
        "label": "Emmanuel Levinas",
        "value": 16,
        "x": 2194,
        "y": 710
    },
    {
        "id": 1015,
        "label": "Clarence Irving Lewis",
        "value": 20,
        "x": 139,
        "y": -264
    },
    {
        "id": 1016,
        "label": "David Lewis",
        "value": 51,
        "x": -698,
        "y": -162
    },
    {
        "id": 1017,
        "label": "David Lewis\u2019s Metaphysics",
        "value": 18,
        "x": -1048,
        "y": 110
    },
    {
        "id": 1018,
        "label": "Liar Paradox",
        "value": 27,
        "x": -2622,
        "y": 2532
    },
    {
        "id": 1019,
        "label": "Liberalism",
        "value": 92,
        "x": 477,
        "y": -3916
    },
    {
        "id": 1020,
        "label": "Philosophy of Liberation",
        "value": 9,
        "x": 4979,
        "y": -1607
    },
    {
        "id": 1021,
        "label": "Libertarianism",
        "value": 26,
        "x": 928,
        "y": -4348
    },
    {
        "id": 1022,
        "label": "Life",
        "value": 30,
        "x": 1172,
        "y": -1902
    },
    {
        "id": 1023,
        "label": "The Meaning of Life",
        "value": 10,
        "x": 3272,
        "y": -1218
    },
    {
        "id": 1024,
        "label": "Linear Logic",
        "value": 17,
        "x": -4345,
        "y": 2529
    },
    {
        "id": 1025,
        "label": "Philosophy of Linguistics",
        "value": 21,
        "x": -2670,
        "y": -1392
    },
    {
        "id": 1026,
        "label": "Justus Lipsius",
        "value": 2,
        "x": 3548,
        "y": 3581
    },
    {
        "id": 1027,
        "label": "Ramon Llull",
        "value": 8,
        "x": -4874,
        "y": 749
    },
    {
        "id": 1028,
        "label": "Location and Mereology",
        "value": 23,
        "x": -1451,
        "y": 1781
    },
    {
        "id": 1029,
        "label": "Alain LeRoy Locke",
        "value": 12,
        "x": -847,
        "y": -3596
    },
    {
        "id": 1030,
        "label": "John Locke",
        "value": 78,
        "x": -199,
        "y": -1389
    },
    {
        "id": 1031,
        "label": "Locke\u2019s Moral Philosophy",
        "value": 6,
        "x": -1197,
        "y": -4212
    },
    {
        "id": 1032,
        "label": "Locke On Freedom",
        "value": 13,
        "x": -1028,
        "y": -2458
    },
    {
        "id": 1033,
        "label": "Locke on Personal Identity",
        "value": 11,
        "x": 1465,
        "y": -1083
    },
    {
        "id": 1034,
        "label": "Locke\u2019s Philosophy of Science",
        "value": 12,
        "x": -606,
        "y": -915
    },
    {
        "id": 1035,
        "label": "Locke\u2019s Political Philosophy",
        "value": 23,
        "x": -282,
        "y": -4012
    },
    {
        "id": 1036,
        "label": "Algebraic Propositional Logic",
        "value": 18,
        "x": -3546,
        "y": 3135
    },
    {
        "id": 1037,
        "label": "Ancient Logic",
        "value": 39,
        "x": -1895,
        "y": 1618
    },
    {
        "id": 1038,
        "label": "Logic of Belief Revision",
        "value": 18,
        "x": 639,
        "y": 1020
    },
    {
        "id": 1039,
        "label": "Classical Logic",
        "value": 76,
        "x": -2573,
        "y": 1739
    },
    {
        "id": 1040,
        "label": "Combinatory Logic",
        "value": 22,
        "x": -3865,
        "y": 2335
    },
    {
        "id": 1041,
        "label": "Combining Logics",
        "value": 15,
        "x": -2707,
        "y": 1662
    },
    {
        "id": 1042,
        "label": "Connexive Logic",
        "value": 18,
        "x": -3190,
        "y": 1374
    },
    {
        "id": 1043,
        "label": "Deontic Logic",
        "value": 20,
        "x": -498,
        "y": 1637
    },
    {
        "id": 1044,
        "label": "Dependence Logic",
        "value": 8,
        "x": -4095,
        "y": 2391
    },
    {
        "id": 1045,
        "label": "Dialogical Logic",
        "value": 12,
        "x": -4389,
        "y": 1551
    },
    {
        "id": 1046,
        "label": "Epistemic Logic",
        "value": 26,
        "x": -1314,
        "y": 1466
    },
    {
        "id": 1047,
        "label": "Logics for Analyzing Power in Normal Form Games",
        "value": 8,
        "x": -248,
        "y": 2457
    },
    {
        "id": 1048,
        "label": "Free Logic",
        "value": 19,
        "x": -1905,
        "y": 1874
    },
    {
        "id": 1049,
        "label": "Fuzzy Logic",
        "value": 12,
        "x": -3128,
        "y": 2398
    },
    {
        "id": 1050,
        "label": "Independence Friendly Logic",
        "value": 21,
        "x": -3457,
        "y": 1288
    },
    {
        "id": 1051,
        "label": "Infinitary Logic",
        "value": 7,
        "x": -3266,
        "y": 3829
    },
    {
        "id": 1052,
        "label": "Intensional Logic",
        "value": 16,
        "x": -2914,
        "y": 757
    },
    {
        "id": 1053,
        "label": "Justification Logic",
        "value": 7,
        "x": -695,
        "y": 3364
    },
    {
        "id": 1054,
        "label": "Many-Valued Logic",
        "value": 23,
        "x": -2751,
        "y": 2795
    },
    {
        "id": 1055,
        "label": "The Logic of Mass Expressions",
        "value": 7,
        "x": -2392,
        "y": 3616
    },
    {
        "id": 1056,
        "label": "Modal Logic",
        "value": 69,
        "x": -2226,
        "y": 965
    },
    {
        "id": 1057,
        "label": "Non-monotonic Logic",
        "value": 16,
        "x": -1824,
        "y": -374
    },
    {
        "id": 1058,
        "label": "Paraconsistent Logic",
        "value": 40,
        "x": -2692,
        "y": 1923
    },
    {
        "id": 1059,
        "label": "Logic and Probability",
        "value": 16,
        "x": 1119,
        "y": 182
    },
    {
        "id": 1060,
        "label": "Propositional Dynamic Logic",
        "value": 9,
        "x": -3263,
        "y": -206
    },
    {
        "id": 1061,
        "label": "Provability Logic",
        "value": 29,
        "x": -3113,
        "y": 1756
    },
    {
        "id": 1062,
        "label": "Relevance Logic",
        "value": 30,
        "x": -2682,
        "y": 2318
    },
    {
        "id": 1063,
        "label": "Second-order and Higher-order Logic",
        "value": 23,
        "x": -3458,
        "y": 2251
    },
    {
        "id": 1064,
        "label": "Substructural Logics",
        "value": 19,
        "x": -3603,
        "y": 2135
    },
    {
        "id": 1065,
        "label": "Temporal Logic",
        "value": 39,
        "x": -2339,
        "y": 1141
    },
    {
        "id": 1066,
        "label": "The Emergence of First-Order Logic",
        "value": 17,
        "x": -4125,
        "y": 1634
    },
    {
        "id": 1067,
        "label": "Modern Origins of Modal Logic",
        "value": 22,
        "x": -2192,
        "y": 2548
    },
    {
        "id": 1068,
        "label": "The Development of Proof Theory",
        "value": 25,
        "x": -3665,
        "y": 2431
    },
    {
        "id": 1069,
        "label": "The Early Development of Set Theory",
        "value": 27,
        "x": -2542,
        "y": 2724
    },
    {
        "id": 1070,
        "label": "The Normative Status of Logic",
        "value": 9,
        "x": -1675,
        "y": 3427
    },
    {
        "id": 1071,
        "label": "Russell\u2019s Logical Atomism",
        "value": 28,
        "x": -2177,
        "y": -6
    },
    {
        "id": 1072,
        "label": "Wittgenstein\u2019s Logical Atomism",
        "value": 12,
        "x": -2692,
        "y": 426
    },
    {
        "id": 1073,
        "label": "Logical Constants",
        "value": 23,
        "x": -2870,
        "y": 1590
    },
    {
        "id": 1074,
        "label": "Logical Constructions",
        "value": 21,
        "x": -2463,
        "y": 479
    },
    {
        "id": 1075,
        "label": "Logical Form",
        "value": 45,
        "x": -2173,
        "y": 171
    },
    {
        "id": 1076,
        "label": "Logical Pluralism",
        "value": 38,
        "x": -2196,
        "y": 1183
    },
    {
        "id": 1077,
        "label": "Logical Truth",
        "value": 27,
        "x": -1821,
        "y": 1450
    },
    {
        "id": 1078,
        "label": "Logic and Ontology",
        "value": 19,
        "x": -2413,
        "y": 984
    },
    {
        "id": 1079,
        "label": "Logicism and Neologicism",
        "value": 26,
        "x": -1813,
        "y": 1233
    },
    {
        "id": 1080,
        "label": "Hermann Lotze",
        "value": 29,
        "x": 1004,
        "y": 281
    },
    {
        "id": 1081,
        "label": "Love",
        "value": 21,
        "x": 2689,
        "y": -2292
    },
    {
        "id": 1082,
        "label": "Loyalty",
        "value": 5,
        "x": -1156,
        "y": -5240
    },
    {
        "id": 1083,
        "label": "Moral Luck",
        "value": 19,
        "x": -1172,
        "y": -3174
    },
    {
        "id": 1084,
        "label": "Lucretius",
        "value": 14,
        "x": 1132,
        "y": 2649
    },
    {
        "id": 1085,
        "label": "Georg [Gy\u00f6rgy] Luk\u00e1cs",
        "value": 11,
        "x": 2352,
        "y": 143
    },
    {
        "id": 1086,
        "label": "Jan \u0141ukasiewicz",
        "value": 5,
        "x": -2612,
        "y": 4455
    },
    {
        "id": 1087,
        "label": "Martin Luther",
        "value": 15,
        "x": -3424,
        "y": -558
    },
    {
        "id": 1088,
        "label": "Luther\u2019s Influence on Philosophy",
        "value": 19,
        "x": 1252,
        "y": -119
    },
    {
        "id": 1089,
        "label": "Lvov-Warsaw School",
        "value": 11,
        "x": -1973,
        "y": 3849
    },
    {
        "id": 1090,
        "label": "Jean Fran\u00e7ois Lyotard",
        "value": 16,
        "x": 2265,
        "y": -27
    },
    {
        "id": 1091,
        "label": "Catharine Macaulay",
        "value": 9,
        "x": 2179,
        "y": -2739
    },
    {
        "id": 1092,
        "label": "Ernst Mach",
        "value": 26,
        "x": 1446,
        "y": 689
    },
    {
        "id": 1093,
        "label": "Niccol\u00f2 Machiavelli",
        "value": 15,
        "x": 900,
        "y": -2557
    },
    {
        "id": 1094,
        "label": "Philosophy of Macroevolution",
        "value": 16,
        "x": 2215,
        "y": -4363
    },
    {
        "id": 1095,
        "label": "Madhyamaka",
        "value": 19,
        "x": 1733,
        "y": 4199
    },
    {
        "id": 1096,
        "label": "Salomon Maimon",
        "value": 13,
        "x": 712,
        "y": 1487
    },
    {
        "id": 1097,
        "label": "Maimonides",
        "value": 26,
        "x": -3242,
        "y": 853
    },
    {
        "id": 1098,
        "label": "The Influence of Islamic Thought on Maimonides",
        "value": 11,
        "x": -4049,
        "y": 2123
    },
    {
        "id": 1099,
        "label": "Nicolas Malebranche",
        "value": 45,
        "x": 375,
        "y": 2084
    },
    {
        "id": 1100,
        "label": "Malebranche\u2019s Theory of Ideas and Vision in God",
        "value": 8,
        "x": 383,
        "y": 3728
    },
    {
        "id": 1101,
        "label": "Ernst Mally",
        "value": 13,
        "x": 346,
        "y": 2460
    },
    {
        "id": 1102,
        "label": "Mally\u2019s Deontic Logic",
        "value": 5,
        "x": -425,
        "y": 4366
    },
    {
        "id": 1103,
        "label": "The Ethics of Manipulation",
        "value": 15,
        "x": 854,
        "y": -4512
    },
    {
        "id": 1104,
        "label": "Gabriel (-Honor\u00e9) Marcel",
        "value": 10,
        "x": 958,
        "y": 1976
    },
    {
        "id": 1105,
        "label": "Marcus Aurelius",
        "value": 6,
        "x": 3902,
        "y": -577
    },
    {
        "id": 1106,
        "label": "Herbert Marcuse",
        "value": 12,
        "x": 775,
        "y": -2484
    },
    {
        "id": 1107,
        "label": "Lucrezia Marinella",
        "value": 6,
        "x": 1117,
        "y": 3831
    },
    {
        "id": 1108,
        "label": "Jacques Maritain",
        "value": 8,
        "x": -1065,
        "y": -2755
    },
    {
        "id": 1109,
        "label": "Markets",
        "value": 9,
        "x": 1581,
        "y": -5354
    },
    {
        "id": 1110,
        "label": "Marsilius of Inghen",
        "value": 8,
        "x": -5544,
        "y": 1439
    },
    {
        "id": 1111,
        "label": "Anton Marty",
        "value": 11,
        "x": 764,
        "y": 2144
    },
    {
        "id": 1112,
        "label": "Karl Marx",
        "value": 42,
        "x": 1622,
        "y": -2176
    },
    {
        "id": 1113,
        "label": "Lady Damaris Masham",
        "value": 9,
        "x": 1827,
        "y": -34
    },
    {
        "id": 1114,
        "label": "The Metaphysics of Mass Expressions",
        "value": 13,
        "x": -1494,
        "y": 2750
    },
    {
        "id": 1115,
        "label": "Material Constitution",
        "value": 28,
        "x": -1288,
        "y": 1261
    },
    {
        "id": 1116,
        "label": "Physicalism",
        "value": 55,
        "x": -952,
        "y": -313
    },
    {
        "id": 1117,
        "label": "Eliminative Materialism",
        "value": 30,
        "x": -1962,
        "y": -1183
    },
    {
        "id": 1118,
        "label": "Mathematical Style",
        "value": 15,
        "x": -1080,
        "y": 1990
    },
    {
        "id": 1119,
        "label": "Constructive Mathematics",
        "value": 27,
        "x": -2688,
        "y": 2984
    },
    {
        "id": 1120,
        "label": "Inconsistent Mathematics",
        "value": 14,
        "x": -1985,
        "y": 2937
    },
    {
        "id": 1121,
        "label": "Non-Deductive Methods in Mathematics",
        "value": 10,
        "x": -2336,
        "y": 3299
    },
    {
        "id": 1122,
        "label": "Philosophy of Mathematics",
        "value": 61,
        "x": -2187,
        "y": 1932
    },
    {
        "id": 1123,
        "label": "Indispensability Arguments in the Philosophy of Mathematics",
        "value": 19,
        "x": -308,
        "y": 1072
    },
    {
        "id": 1124,
        "label": "Naturalism in the Philosophy of Mathematics",
        "value": 38,
        "x": -1635,
        "y": 2092
    },
    {
        "id": 1125,
        "label": "Nominalism in the Philosophy of Mathematics",
        "value": 15,
        "x": -1106,
        "y": 2349
    },
    {
        "id": 1126,
        "label": "Platonism in the Philosophy of Mathematics",
        "value": 22,
        "x": -949,
        "y": 1879
    },
    {
        "id": 1127,
        "label": "Structuralism in the Philosophy of Mathematics",
        "value": 12,
        "x": -1762,
        "y": 3343
    },
    {
        "id": 1128,
        "label": "Wittgenstein\u2019s Philosophy of Mathematics",
        "value": 19,
        "x": -2314,
        "y": 1494
    },
    {
        "id": 1129,
        "label": "John M. E. McTaggart",
        "value": 12,
        "x": -2367,
        "y": -74
    },
    {
        "id": 1130,
        "label": "George Herbert Mead",
        "value": 29,
        "x": -753,
        "y": -1882
    },
    {
        "id": 1131,
        "label": "The Normativity of Meaning and Content",
        "value": 13,
        "x": -737,
        "y": -2314
    },
    {
        "id": 1132,
        "label": "Word Meaning",
        "value": 33,
        "x": -1214,
        "y": -979
    },
    {
        "id": 1133,
        "label": "Theories of Meaning",
        "value": 67,
        "x": -902,
        "y": -707
    },
    {
        "id": 1134,
        "label": "Meaning Holism",
        "value": 9,
        "x": -2333,
        "y": -1982
    },
    {
        "id": 1135,
        "label": "Treating Persons as Means",
        "value": 8,
        "x": 638,
        "y": -5681
    },
    {
        "id": 1136,
        "label": "Measurement in Science",
        "value": 19,
        "x": 1309,
        "y": -1104
    },
    {
        "id": 1137,
        "label": "Mechanisms in Science",
        "value": 31,
        "x": 510,
        "y": -2209
    },
    {
        "id": 1138,
        "label": "Philosophy of Medicine",
        "value": 12,
        "x": 3142,
        "y": -2657
    },
    {
        "id": 1139,
        "label": "Medieval Philosophy",
        "value": 100,
        "x": -4463,
        "y": 612
    },
    {
        "id": 1140,
        "label": "Literary Forms of Medieval Philosophy",
        "value": 25,
        "x": -4378,
        "y": 821
    },
    {
        "id": 1141,
        "label": "Mental Representation in Medieval Philosophy",
        "value": 17,
        "x": -3607,
        "y": -31
    },
    {
        "id": 1142,
        "label": "Medieval Theories of Modality",
        "value": 33,
        "x": -3529,
        "y": 959
    },
    {
        "id": 1143,
        "label": "Medieval Theories of Obligationes",
        "value": 11,
        "x": -5675,
        "y": 779
    },
    {
        "id": 1144,
        "label": "Medieval Theories of Practical Reason",
        "value": 17,
        "x": -2129,
        "y": -1513
    },
    {
        "id": 1145,
        "label": "Medieval Theories: Properties of Terms",
        "value": 25,
        "x": -4768,
        "y": 1031
    },
    {
        "id": 1146,
        "label": "Medieval Theories of Relations",
        "value": 21,
        "x": -3924,
        "y": 212
    },
    {
        "id": 1147,
        "label": "Medieval Theories of Singular Terms",
        "value": 6,
        "x": -5501,
        "y": 1634
    },
    {
        "id": 1148,
        "label": "Medieval Theories of the Syllogism",
        "value": 24,
        "x": -4254,
        "y": 1332
    },
    {
        "id": 1149,
        "label": "Medieval Theories of Transcendentals",
        "value": 15,
        "x": -4095,
        "y": -115
    },
    {
        "id": 1150,
        "label": "Alexius Meinong",
        "value": 42,
        "x": -275,
        "y": 1753
    },
    {
        "id": 1151,
        "label": "Memory",
        "value": 13,
        "x": 201,
        "y": 1786
    },
    {
        "id": 1152,
        "label": "Epistemological Problems of Memory",
        "value": 7,
        "x": 1889,
        "y": 2367
    },
    {
        "id": 1153,
        "label": "Moses Mendelssohn",
        "value": 14,
        "x": 442,
        "y": 493
    },
    {
        "id": 1154,
        "label": "Causal Theories of Mental Content",
        "value": 29,
        "x": -1462,
        "y": -660
    },
    {
        "id": 1155,
        "label": "Narrow Mental Content",
        "value": 25,
        "x": -2094,
        "y": -843
    },
    {
        "id": 1156,
        "label": "Nonconceptual Mental Content",
        "value": 24,
        "x": -1492,
        "y": -383
    },
    {
        "id": 1157,
        "label": "Teleological Theories of Mental Content",
        "value": 33,
        "x": -954,
        "y": -1249
    },
    {
        "id": 1158,
        "label": "Mental Disorder (Illness)",
        "value": 17,
        "x": 2408,
        "y": -2461
    },
    {
        "id": 1159,
        "label": "Mental Representation",
        "value": 60,
        "x": -1838,
        "y": -797
    },
    {
        "id": 1160,
        "label": "Mereology",
        "value": 65,
        "x": -1454,
        "y": 1380
    },
    {
        "id": 1161,
        "label": "Medieval Mereology",
        "value": 16,
        "x": -3612,
        "y": 604
    },
    {
        "id": 1162,
        "label": "Maurice Merleau-Ponty",
        "value": 29,
        "x": 1567,
        "y": 775
    },
    {
        "id": 1163,
        "label": "Marin Mersenne",
        "value": 11,
        "x": 218,
        "y": 3259
    },
    {
        "id": 1164,
        "label": "Metaethics",
        "value": 34,
        "x": 1337,
        "y": -861
    },
    {
        "id": 1165,
        "label": "Metaphor",
        "value": 21,
        "x": 100,
        "y": -1120
    },
    {
        "id": 1166,
        "label": "Metaphysics",
        "value": 46,
        "x": -507,
        "y": 340
    },
    {
        "id": 1167,
        "label": "Francisco Su\u00e1rez",
        "value": 16,
        "x": -2288,
        "y": -1265
    },
    {
        "id": 1168,
        "label": "Methodological Holism in the Social Sciences",
        "value": 6,
        "x": -1360,
        "y": -3979
    },
    {
        "id": 1169,
        "label": "Philosophy in Mexico",
        "value": 32,
        "x": 2115,
        "y": -1613
    },
    {
        "id": 1170,
        "label": "Philosophy of Microbiology",
        "value": 6,
        "x": 3278,
        "y": -4993
    },
    {
        "id": 1171,
        "label": "Harriet Taylor Mill",
        "value": 7,
        "x": 2437,
        "y": -5080
    },
    {
        "id": 1172,
        "label": "James Mill",
        "value": 9,
        "x": 21,
        "y": -4482
    },
    {
        "id": 1173,
        "label": "John Stuart Mill",
        "value": 54,
        "x": 722,
        "y": -2847
    },
    {
        "id": 1174,
        "label": "Mill\u2019s Moral and Political Philosophy",
        "value": 39,
        "x": 1075,
        "y": -3879
    },
    {
        "id": 1175,
        "label": "Modularity of Mind",
        "value": 10,
        "x": -2010,
        "y": -2308
    },
    {
        "id": 1176,
        "label": "Miracles",
        "value": 18,
        "x": -1794,
        "y": -1095
    },
    {
        "id": 1177,
        "label": "The Epistemology of Modality",
        "value": 14,
        "x": -38,
        "y": 1009
    },
    {
        "id": 1178,
        "label": "Necessary and Sufficient Conditions",
        "value": 9,
        "x": -1052,
        "y": 2184
    },
    {
        "id": 1179,
        "label": "Possible Worlds",
        "value": 48,
        "x": -904,
        "y": 955
    },
    {
        "id": 1180,
        "label": "Spinoza\u2019s Modal Metaphysics",
        "value": 14,
        "x": -729,
        "y": 2497
    },
    {
        "id": 1181,
        "label": "Varieties of Modality",
        "value": 14,
        "x": 289,
        "y": 1182
    },
    {
        "id": 1182,
        "label": "Philosophical Aspects of Multi-Modal Logic",
        "value": 33,
        "x": -1394,
        "y": 994
    },
    {
        "id": 1183,
        "label": "Models in Science",
        "value": 41,
        "x": 492,
        "y": -1686
    },
    {
        "id": 1184,
        "label": "Model Theory",
        "value": 32,
        "x": -2022,
        "y": 1735
    },
    {
        "id": 1185,
        "label": "First-order Model Theory",
        "value": 17,
        "x": -3338,
        "y": 2410
    },
    {
        "id": 1186,
        "label": "Molyneux\u2019s Problem",
        "value": 18,
        "x": -7,
        "y": -8
    },
    {
        "id": 1187,
        "label": "Monism",
        "value": 31,
        "x": -460,
        "y": 786
    },
    {
        "id": 1188,
        "label": "Neutral Monism",
        "value": 26,
        "x": -1078,
        "y": 631
    },
    {
        "id": 1189,
        "label": "Russellian Monism",
        "value": 17,
        "x": -372,
        "y": 1235
    },
    {
        "id": 1190,
        "label": "Monotheism",
        "value": 15,
        "x": -2354,
        "y": 794
    },
    {
        "id": 1191,
        "label": "Michel de Montaigne",
        "value": 14,
        "x": 1986,
        "y": 771
    },
    {
        "id": 1192,
        "label": "Baron de Montesquieu, Charles-Louis de Secondat",
        "value": 6,
        "x": 3371,
        "y": -3711
    },
    {
        "id": 1193,
        "label": "George Edward Moore",
        "value": 46,
        "x": -404,
        "y": -559
    },
    {
        "id": 1194,
        "label": "Moore\u2019s Moral Philosophy",
        "value": 23,
        "x": 775,
        "y": -1971
    },
    {
        "id": 1195,
        "label": "Moral Dilemmas",
        "value": 15,
        "x": 1972,
        "y": -1633
    },
    {
        "id": 1196,
        "label": "Moral Particularism and Moral Generalism",
        "value": 15,
        "x": 2618,
        "y": -1925
    },
    {
        "id": 1197,
        "label": "The Definition of Morality",
        "value": 12,
        "x": 1363,
        "y": -2951
    },
    {
        "id": 1198,
        "label": "Moral Motivation",
        "value": 22,
        "x": 2235,
        "y": -1386
    },
    {
        "id": 1199,
        "label": "Moral Naturalism",
        "value": 31,
        "x": 986,
        "y": -1332
    },
    {
        "id": 1200,
        "label": "Moral Non-Naturalism",
        "value": 25,
        "x": 1163,
        "y": -753
    },
    {
        "id": 1201,
        "label": "Moral Particularism",
        "value": 28,
        "x": 1548,
        "y": -1652
    },
    {
        "id": 1202,
        "label": "Moral Psychology: Empirical Approaches",
        "value": 25,
        "x": 2107,
        "y": -1765
    },
    {
        "id": 1203,
        "label": "Moral Realism",
        "value": 36,
        "x": 1700,
        "y": -1262
    },
    {
        "id": 1204,
        "label": "Moral Relativism",
        "value": 24,
        "x": 1510,
        "y": -1800
    },
    {
        "id": 1205,
        "label": "Moral Responsibility",
        "value": 38,
        "x": -1081,
        "y": -2309
    },
    {
        "id": 1206,
        "label": "The Epistemic Condition for Moral Responsibility",
        "value": 4,
        "x": -3237,
        "y": -3483
    },
    {
        "id": 1207,
        "label": "Moral Responsibility and the Principle of Alternative Possibilities",
        "value": 13,
        "x": -2368,
        "y": -2221
    },
    {
        "id": 1208,
        "label": "Moral Sentimentalism",
        "value": 16,
        "x": 2343,
        "y": -1276
    },
    {
        "id": 1209,
        "label": "Moral Skepticism",
        "value": 23,
        "x": 1606,
        "y": -694
    },
    {
        "id": 1210,
        "label": "The Grounds of Moral Status",
        "value": 18,
        "x": 1550,
        "y": -3692
    },
    {
        "id": 1211,
        "label": "Henry More",
        "value": 14,
        "x": 225,
        "y": 2465
    },
    {
        "id": 1212,
        "label": "Thomas More",
        "value": 15,
        "x": 871,
        "y": -195
    },
    {
        "id": 1213,
        "label": "Mulla Sadra",
        "value": 7,
        "x": -5642,
        "y": -1351
    },
    {
        "id": 1214,
        "label": "Multiculturalism",
        "value": 17,
        "x": 1208,
        "y": -5290
    },
    {
        "id": 1215,
        "label": "Multiple Realizability",
        "value": 23,
        "x": -1069,
        "y": -1438
    },
    {
        "id": 1216,
        "label": "The Philosophy of Music",
        "value": 26,
        "x": -772,
        "y": -770
    },
    {
        "id": 1217,
        "label": "Mysticism",
        "value": 16,
        "x": -1630,
        "y": 797
    },
    {
        "id": 1218,
        "label": "Plato\u2019s Myths",
        "value": 4,
        "x": 3408,
        "y": 2801
    },
    {
        "id": 1219,
        "label": "N\u0101g\u0101rjuna",
        "value": 17,
        "x": 2485,
        "y": 3976
    },
    {
        "id": 1220,
        "label": "Names",
        "value": 22,
        "x": -1656,
        "y": -664
    },
    {
        "id": 1221,
        "label": "Nationalism",
        "value": 24,
        "x": 419,
        "y": -4691
    },
    {
        "id": 1222,
        "label": "Paul Natorp",
        "value": 12,
        "x": 3810,
        "y": -288
    },
    {
        "id": 1223,
        "label": "Naturalism",
        "value": 40,
        "x": -262,
        "y": -1226
    },
    {
        "id": 1224,
        "label": "Naturalism in Legal Philosophy",
        "value": 13,
        "x": -1350,
        "y": -3305
    },
    {
        "id": 1225,
        "label": "Natural Kinds",
        "value": 27,
        "x": -443,
        "y": -945
    },
    {
        "id": 1226,
        "label": "Natural Philosophy in the Renaissance",
        "value": 17,
        "x": -667,
        "y": 4145
    },
    {
        "id": 1227,
        "label": "Natural Selection",
        "value": 29,
        "x": 2435,
        "y": -4205
    },
    {
        "id": 1228,
        "label": "Units and Levels of Selection",
        "value": 24,
        "x": 2607,
        "y": -4585
    },
    {
        "id": 1229,
        "label": "The Nature of Law",
        "value": 29,
        "x": -1023,
        "y": -3933
    },
    {
        "id": 1230,
        "label": "Legal Interpretivism",
        "value": 12,
        "x": -2252,
        "y": -5160
    },
    {
        "id": 1231,
        "label": "The Pure Theory of Law",
        "value": 7,
        "x": -2428,
        "y": -4790
    },
    {
        "id": 1232,
        "label": "Needs in Moral and Political Philosophy",
        "value": 11,
        "x": 1760,
        "y": -5662
    },
    {
        "id": 1233,
        "label": "Negation",
        "value": 31,
        "x": -2372,
        "y": 1291
    },
    {
        "id": 1234,
        "label": "N\u00e9gritude",
        "value": 12,
        "x": 1260,
        "y": -2796
    },
    {
        "id": 1235,
        "label": "Neo-Kantianism",
        "value": 15,
        "x": 3449,
        "y": -703
    },
    {
        "id": 1236,
        "label": "Neoplatonism",
        "value": 50,
        "x": -1956,
        "y": 2600
    },
    {
        "id": 1237,
        "label": "Otto Neurath",
        "value": 18,
        "x": 536,
        "y": -1898
    },
    {
        "id": 1238,
        "label": "Neuroethics",
        "value": 18,
        "x": 1768,
        "y": -3195
    },
    {
        "id": 1239,
        "label": "The Philosophy of Neuroscience",
        "value": 26,
        "x": -883,
        "y": -1639
    },
    {
        "id": 1240,
        "label": "Isaac Newton",
        "value": 27,
        "x": 585,
        "y": 808
    },
    {
        "id": 1241,
        "label": "Newton\u2019s Philosophiae Naturalis Principia Mathematica",
        "value": 15,
        "x": 1832,
        "y": 1183
    },
    {
        "id": 1242,
        "label": "Newton\u2019s Philosophy",
        "value": 17,
        "x": 853,
        "y": 1417
    },
    {
        "id": 1243,
        "label": "Newton\u2019s Views on Space, Time, and Motion",
        "value": 21,
        "x": 1362,
        "y": 1620
    },
    {
        "id": 1244,
        "label": "Nicholas of Autrecourt",
        "value": 8,
        "x": -5540,
        "y": 975
    },
    {
        "id": 1245,
        "label": "Friedrich Nietzsche",
        "value": 40,
        "x": 1680,
        "y": 60
    },
    {
        "id": 1246,
        "label": "Nietzsche\u2019s Life and Works",
        "value": 5,
        "x": 2974,
        "y": 2180
    },
    {
        "id": 1247,
        "label": "Nietzsche\u2019s Moral and Political Philosophy",
        "value": 12,
        "x": 2037,
        "y": -420
    },
    {
        "id": 1248,
        "label": "Nominalism in Metaphysics",
        "value": 31,
        "x": -860,
        "y": 1138
    },
    {
        "id": 1249,
        "label": "Nonexistent Objects",
        "value": 28,
        "x": -649,
        "y": 1404
    },
    {
        "id": 1250,
        "label": "The Nonidentity Problem",
        "value": 16,
        "x": 2838,
        "y": -3997
    },
    {
        "id": 1251,
        "label": "Social Norms",
        "value": 17,
        "x": 2163,
        "y": -2482
    },
    {
        "id": 1252,
        "label": "John Norris",
        "value": 15,
        "x": -409,
        "y": 974
    },
    {
        "id": 1253,
        "label": "Nothingness",
        "value": 14,
        "x": -117,
        "y": 3058
    },
    {
        "id": 1254,
        "label": "Georg Friedrich Philipp von Hardenberg [Novalis]",
        "value": 16,
        "x": 2895,
        "y": 842
    },
    {
        "id": 1255,
        "label": "Robert Nozick\u2019s Political Philosophy",
        "value": 12,
        "x": 16,
        "y": -4931
    },
    {
        "id": 1256,
        "label": "Numenius",
        "value": 11,
        "x": 940,
        "y": 2921
    },
    {
        "id": 1257,
        "label": "Michael Oakeshott",
        "value": 5,
        "x": 3018,
        "y": -3431
    },
    {
        "id": 1258,
        "label": "Object",
        "value": 55,
        "x": -1330,
        "y": 860
    },
    {
        "id": 1259,
        "label": "Scientific Objectivity",
        "value": 19,
        "x": 1151,
        "y": -2106
    },
    {
        "id": 1260,
        "label": "Special Obligations",
        "value": 19,
        "x": 1087,
        "y": -4272
    },
    {
        "id": 1261,
        "label": "Occasionalism",
        "value": 22,
        "x": -619,
        "y": 2065
    },
    {
        "id": 1262,
        "label": "William of Ockham",
        "value": 65,
        "x": -4114,
        "y": 562
    },
    {
        "id": 1263,
        "label": "Peter John Olivi",
        "value": 9,
        "x": -5206,
        "y": -299
    },
    {
        "id": 1264,
        "label": "Omnipotence",
        "value": 10,
        "x": -3606,
        "y": -602
    },
    {
        "id": 1265,
        "label": "Omnipresence",
        "value": 12,
        "x": -3544,
        "y": -226
    },
    {
        "id": 1266,
        "label": "Omniscience",
        "value": 20,
        "x": -3181,
        "y": 35
    },
    {
        "id": 1267,
        "label": "Ontological Commitment",
        "value": 33,
        "x": -1335,
        "y": 1121
    },
    {
        "id": 1268,
        "label": "Social Ontology",
        "value": 37,
        "x": -408,
        "y": -2624
    },
    {
        "id": 1269,
        "label": "History of the Ontology of Art",
        "value": 39,
        "x": 141,
        "y": -633
    },
    {
        "id": 1270,
        "label": "Operationalism",
        "value": 9,
        "x": 1439,
        "y": -2040
    },
    {
        "id": 1271,
        "label": "Ordinary Objects",
        "value": 20,
        "x": -1179,
        "y": 1551
    },
    {
        "id": 1272,
        "label": "Nicole Oresme",
        "value": 19,
        "x": -3695,
        "y": 1810
    },
    {
        "id": 1273,
        "label": "Origen",
        "value": 12,
        "x": -727,
        "y": 2321
    },
    {
        "id": 1274,
        "label": "Original Position",
        "value": 16,
        "x": 599,
        "y": -4130
    },
    {
        "id": 1275,
        "label": "Jos\u00e9 Ortega y Gasset",
        "value": 17,
        "x": 2410,
        "y": 486
    },
    {
        "id": 1276,
        "label": "Other Minds",
        "value": 17,
        "x": -576,
        "y": -548
    },
    {
        "id": 1277,
        "label": "Property and Ownership",
        "value": 40,
        "x": 710,
        "y": -3985
    },
    {
        "id": 1278,
        "label": "Pacifism",
        "value": 11,
        "x": -1031,
        "y": -3505
    },
    {
        "id": 1279,
        "label": "Pain",
        "value": 17,
        "x": -1119,
        "y": -624
    },
    {
        "id": 1280,
        "label": "Thomas Paine",
        "value": 8,
        "x": 524,
        "y": -6132
    },
    {
        "id": 1281,
        "label": "Panentheism",
        "value": 14,
        "x": -1789,
        "y": 744
    },
    {
        "id": 1282,
        "label": "Panpsychism",
        "value": 31,
        "x": -1313,
        "y": 192
    },
    {
        "id": 1283,
        "label": "Pantheism",
        "value": 50,
        "x": -648,
        "y": 440
    },
    {
        "id": 1284,
        "label": "Russell\u2019s Paradox",
        "value": 36,
        "x": -2972,
        "y": 1901
    },
    {
        "id": 1285,
        "label": "Simpson\u2019s Paradox",
        "value": 7,
        "x": 3531,
        "y": -1740
    },
    {
        "id": 1286,
        "label": "Skolem\u2019s Paradox",
        "value": 13,
        "x": -3778,
        "y": 2109
    },
    {
        "id": 1287,
        "label": "The St. Petersburg Paradox",
        "value": 7,
        "x": 2399,
        "y": 840
    },
    {
        "id": 1288,
        "label": "The Paradox of Suspense",
        "value": 4,
        "x": 3746,
        "y": 1252
    },
    {
        "id": 1289,
        "label": "Zeno\u2019s Paradoxes",
        "value": 30,
        "x": -545,
        "y": 2610
    },
    {
        "id": 1290,
        "label": "Paradoxes and Contemporary Logic",
        "value": 39,
        "x": -2845,
        "y": 2673
    },
    {
        "id": 1291,
        "label": "Parenthood and Procreation",
        "value": 23,
        "x": 2939,
        "y": -4253
    },
    {
        "id": 1292,
        "label": "Parmenides",
        "value": 22,
        "x": 962,
        "y": 2172
    },
    {
        "id": 1293,
        "label": "Blaise Pascal",
        "value": 14,
        "x": -82,
        "y": 1892
    },
    {
        "id": 1294,
        "label": "Pascal\u2019s Wager",
        "value": 11,
        "x": -804,
        "y": 441
    },
    {
        "id": 1295,
        "label": "Paternalism",
        "value": 28,
        "x": 1291,
        "y": -4371
    },
    {
        "id": 1296,
        "label": "Patriotism",
        "value": 11,
        "x": -236,
        "y": -5096
    },
    {
        "id": 1297,
        "label": "Francesco Patrizi",
        "value": 9,
        "x": -1194,
        "y": 4122
    },
    {
        "id": 1298,
        "label": "Paul of Venice",
        "value": 19,
        "x": -5110,
        "y": 893
    },
    {
        "id": 1299,
        "label": "Benjamin Peirce",
        "value": 4,
        "x": -5833,
        "y": -430
    },
    {
        "id": 1300,
        "label": "Charles Sanders Peirce",
        "value": 41,
        "x": -1997,
        "y": -707
    },
    {
        "id": 1301,
        "label": "Peirce\u2019s Deductive Logic",
        "value": 9,
        "x": -4753,
        "y": 3
    },
    {
        "id": 1302,
        "label": "Peirce\u2019s Theory of Signs",
        "value": 9,
        "x": -3874,
        "y": -1972
    },
    {
        "id": 1303,
        "label": "William Penbygull",
        "value": 10,
        "x": -6083,
        "y": 1177
    },
    {
        "id": 1304,
        "label": "The Contents of Perception",
        "value": 35,
        "x": -1532,
        "y": 596
    },
    {
        "id": 1305,
        "label": "The Disjunctive Theory of Perception",
        "value": 21,
        "x": -1267,
        "y": 376
    },
    {
        "id": 1306,
        "label": "Perceptual Experience and Perceptual Justification",
        "value": 31,
        "x": -918,
        "y": 21
    },
    {
        "id": 1307,
        "label": "The Problem of Perception",
        "value": 52,
        "x": -804,
        "y": 735
    },
    {
        "id": 1308,
        "label": "Perfectionism in Moral and Political Philosophy",
        "value": 22,
        "x": -44,
        "y": -3249
    },
    {
        "id": 1309,
        "label": "Personalism",
        "value": 21,
        "x": 727,
        "y": 119
    },
    {
        "id": 1310,
        "label": "Personal Relationship Goods",
        "value": 10,
        "x": 2526,
        "y": -5569
    },
    {
        "id": 1311,
        "label": "Peter of Spain",
        "value": 15,
        "x": -4086,
        "y": 790
    },
    {
        "id": 1312,
        "label": "Joane Petrizi",
        "value": 2,
        "x": -5566,
        "y": 3286
    },
    {
        "id": 1313,
        "label": "Phenomenology",
        "value": 61,
        "x": 966,
        "y": 903
    },
    {
        "id": 1314,
        "label": "The Phenomenology of the Munich and G\u00f6ttingen Circles",
        "value": 19,
        "x": 576,
        "y": 1185
    },
    {
        "id": 1315,
        "label": "Philip the Chancellor",
        "value": 6,
        "x": -4596,
        "y": -1005
    },
    {
        "id": 1316,
        "label": "Philodemus",
        "value": 4,
        "x": 2646,
        "y": 3530
    },
    {
        "id": 1317,
        "label": "Philolaus",
        "value": 10,
        "x": 3103,
        "y": 2225
    },
    {
        "id": 1318,
        "label": "Philo of Alexandria",
        "value": 7,
        "x": -1367,
        "y": -1730
    },
    {
        "id": 1319,
        "label": "Philo of Larissa",
        "value": 8,
        "x": 367,
        "y": -3689
    },
    {
        "id": 1320,
        "label": "Holism and Nonseparability in Physics",
        "value": 20,
        "x": 2902,
        "y": 501
    },
    {
        "id": 1321,
        "label": "Intertheory Relations in Physics",
        "value": 19,
        "x": 1116,
        "y": -176
    },
    {
        "id": 1322,
        "label": "Quantum Field Theory",
        "value": 20,
        "x": 2051,
        "y": 289
    },
    {
        "id": 1323,
        "label": "Structuralism in Physics",
        "value": 15,
        "x": -288,
        "y": -589
    },
    {
        "id": 1324,
        "label": "Symmetry and Symmetry Breaking",
        "value": 9,
        "x": 2742,
        "y": 1781
    },
    {
        "id": 1325,
        "label": "Giovanni Pico della Mirandola",
        "value": 12,
        "x": -405,
        "y": 3773
    },
    {
        "id": 1326,
        "label": "Plato",
        "value": 86,
        "x": 515,
        "y": 1017
    },
    {
        "id": 1327,
        "label": "Plato\u2019s Cratylus",
        "value": 5,
        "x": 2062,
        "y": 4909
    },
    {
        "id": 1328,
        "label": "Plato\u2019s Ethics: An Overview",
        "value": 25,
        "x": 1713,
        "y": 339
    },
    {
        "id": 1329,
        "label": "Plato\u2019s Ethics and Politics in The Republic",
        "value": 17,
        "x": 2371,
        "y": -1767
    },
    {
        "id": 1330,
        "label": "Plato on Friendship and Eros",
        "value": 7,
        "x": 3716,
        "y": -1982
    },
    {
        "id": 1331,
        "label": "Method and Metaphysics in Plato\u2019s Sophist and Statesman",
        "value": 9,
        "x": 1908,
        "y": 4464
    },
    {
        "id": 1332,
        "label": "Plato on Knowledge in the Theaetetus",
        "value": 9,
        "x": 1826,
        "y": 3608
    },
    {
        "id": 1333,
        "label": "Plato on utopia",
        "value": 4,
        "x": 4270,
        "y": -1191
    },
    {
        "id": 1334,
        "label": "Plato\u2019s Parmenides",
        "value": 11,
        "x": 533,
        "y": 3590
    },
    {
        "id": 1335,
        "label": "Plato on Rhetoric and Poetry",
        "value": 11,
        "x": 3132,
        "y": -657
    },
    {
        "id": 1336,
        "label": "Plato\u2019s Shorter Ethical Works",
        "value": 9,
        "x": 2341,
        "y": 2110
    },
    {
        "id": 1337,
        "label": "Plato\u2019s Timaeus",
        "value": 7,
        "x": 2124,
        "y": 3559
    },
    {
        "id": 1338,
        "label": "Platonism in Metaphysics",
        "value": 42,
        "x": -291,
        "y": 1578
    },
    {
        "id": 1339,
        "label": "Pleasure",
        "value": 18,
        "x": 1413,
        "y": -1563
    },
    {
        "id": 1340,
        "label": "Plural Quantification",
        "value": 18,
        "x": -2430,
        "y": 2305
    },
    {
        "id": 1341,
        "label": "Plutarch",
        "value": 12,
        "x": 1440,
        "y": 311
    },
    {
        "id": 1342,
        "label": "Henri Poincar\u00e9",
        "value": 27,
        "x": 458,
        "y": 1214
    },
    {
        "id": 1343,
        "label": "Isaac Polqar",
        "value": 7,
        "x": -4805,
        "y": 2064
    },
    {
        "id": 1344,
        "label": "Ancient Political Philosophy",
        "value": 25,
        "x": 1303,
        "y": -613
    },
    {
        "id": 1345,
        "label": "Medieval Political Philosophy",
        "value": 30,
        "x": -3362,
        "y": -940
    },
    {
        "id": 1346,
        "label": "Political Realism in International Relations",
        "value": 14,
        "x": -226,
        "y": -4841
    },
    {
        "id": 1347,
        "label": "Religion and Political Theory",
        "value": 20,
        "x": -192,
        "y": -4274
    },
    {
        "id": 1348,
        "label": "Pietro Pomponazzi",
        "value": 12,
        "x": -1722,
        "y": 3769
    },
    {
        "id": 1349,
        "label": "Karl Popper",
        "value": 42,
        "x": 805,
        "y": -1278
    },
    {
        "id": 1350,
        "label": "Porphyry",
        "value": 23,
        "x": -1031,
        "y": 3273
    },
    {
        "id": 1351,
        "label": "Giambattista della Porta",
        "value": 7,
        "x": 1638,
        "y": 3087
    },
    {
        "id": 1352,
        "label": "Port Royal Logic",
        "value": 13,
        "x": -2085,
        "y": 1484
    },
    {
        "id": 1353,
        "label": "Postmodernism",
        "value": 35,
        "x": 2014,
        "y": -632
    },
    {
        "id": 1354,
        "label": "Fran\u00e7ois Poulain de la Barre",
        "value": 8,
        "x": 1866,
        "y": 2719
    },
    {
        "id": 1355,
        "label": "Practical Reason",
        "value": 35,
        "x": 1580,
        "y": -1998
    },
    {
        "id": 1356,
        "label": "Practical Reason and the Structure of Actions",
        "value": 9,
        "x": 502,
        "y": -1544
    },
    {
        "id": 1357,
        "label": "Pragmatics",
        "value": 37,
        "x": -1292,
        "y": -1848
    },
    {
        "id": 1358,
        "label": "Pragmatism",
        "value": 41,
        "x": -715,
        "y": -1716
    },
    {
        "id": 1359,
        "label": "Petitionary Prayer",
        "value": 8,
        "x": -4149,
        "y": 311
    },
    {
        "id": 1360,
        "label": "Prediction versus Accommodation",
        "value": 11,
        "x": 2241,
        "y": -477
    },
    {
        "id": 1361,
        "label": "Preferences",
        "value": 21,
        "x": 2209,
        "y": -794
    },
    {
        "id": 1362,
        "label": "Presentism",
        "value": 16,
        "x": -1586,
        "y": 1667
    },
    {
        "id": 1363,
        "label": "Presocratic Philosophy",
        "value": 24,
        "x": 2002,
        "y": 2883
    },
    {
        "id": 1364,
        "label": "Presupposition",
        "value": 18,
        "x": -2142,
        "y": -1943
    },
    {
        "id": 1365,
        "label": "Richard Price",
        "value": 9,
        "x": -973,
        "y": 192
    },
    {
        "id": 1366,
        "label": "Harold Arthur Prichard",
        "value": 15,
        "x": 1221,
        "y": -1643
    },
    {
        "id": 1367,
        "label": "Principia Mathematica",
        "value": 37,
        "x": -2633,
        "y": 1199
    },
    {
        "id": 1368,
        "label": "The Notation in Principia Mathematica",
        "value": 12,
        "x": -3811,
        "y": 1475
    },
    {
        "id": 1369,
        "label": "Principle of Sufficient Reason",
        "value": 17,
        "x": -290,
        "y": 1389
    },
    {
        "id": 1370,
        "label": "Arthur Prior",
        "value": 24,
        "x": -2031,
        "y": 1971
    },
    {
        "id": 1371,
        "label": "Prisoner\u2019s Dilemma",
        "value": 23,
        "x": 850,
        "y": -2389
    },
    {
        "id": 1372,
        "label": "Privacy",
        "value": 22,
        "x": 1947,
        "y": -4770
    },
    {
        "id": 1373,
        "label": "Private Language",
        "value": 12,
        "x": -2581,
        "y": -505
    },
    {
        "id": 1374,
        "label": "Imprecise Probabilities",
        "value": 12,
        "x": 2703,
        "y": 208
    },
    {
        "id": 1375,
        "label": "Probability in Medieval and Renaissance Philosophy",
        "value": 7,
        "x": -3651,
        "y": -1502
    },
    {
        "id": 1376,
        "label": "Interpretations of Probability",
        "value": 64,
        "x": 550,
        "y": -111
    },
    {
        "id": 1377,
        "label": "Process Philosophy",
        "value": 16,
        "x": -1586,
        "y": -1579
    },
    {
        "id": 1378,
        "label": "Process Theism",
        "value": 11,
        "x": -3155,
        "y": -1087
    },
    {
        "id": 1379,
        "label": "Proclus",
        "value": 28,
        "x": -1663,
        "y": 3124
    },
    {
        "id": 1380,
        "label": "Progress",
        "value": 14,
        "x": 2318,
        "y": -2676
    },
    {
        "id": 1381,
        "label": "Promises",
        "value": 16,
        "x": -264,
        "y": -3791
    },
    {
        "id": 1382,
        "label": "Proof Theory",
        "value": 20,
        "x": -3942,
        "y": 2686
    },
    {
        "id": 1383,
        "label": "Natural Properties",
        "value": 8,
        "x": -2471,
        "y": -1323
    },
    {
        "id": 1384,
        "label": "Intellectual Property",
        "value": 11,
        "x": 66,
        "y": -3463
    },
    {
        "id": 1385,
        "label": "Prophecy",
        "value": 22,
        "x": -3207,
        "y": -402
    },
    {
        "id": 1386,
        "label": "Propositional Attitude Reports",
        "value": 38,
        "x": -1845,
        "y": -583
    },
    {
        "id": 1387,
        "label": "Propositions",
        "value": 43,
        "x": -1303,
        "y": 567
    },
    {
        "id": 1388,
        "label": "Singular Propositions",
        "value": 26,
        "x": -2019,
        "y": 106
    },
    {
        "id": 1389,
        "label": "Structured Propositions",
        "value": 32,
        "x": -1611,
        "y": 430
    },
    {
        "id": 1390,
        "label": "Protagoras",
        "value": 13,
        "x": 2323,
        "y": 1428
    },
    {
        "id": 1391,
        "label": "Ancient Theories of Soul",
        "value": 23,
        "x": -742,
        "y": 1524
    },
    {
        "id": 1392,
        "label": "Philosophy of Psychiatry",
        "value": 11,
        "x": 2837,
        "y": -1754
    },
    {
        "id": 1393,
        "label": "Psychologism",
        "value": 19,
        "x": 1329,
        "y": 518
    },
    {
        "id": 1394,
        "label": "Publicity",
        "value": 12,
        "x": 569,
        "y": -4414
    },
    {
        "id": 1395,
        "label": "Public Reason",
        "value": 11,
        "x": 432,
        "y": -4958
    },
    {
        "id": 1396,
        "label": "Pufendorf\u2019s Moral and Political Philosophy",
        "value": 22,
        "x": -828,
        "y": -3025
    },
    {
        "id": 1397,
        "label": "Punishment",
        "value": 29,
        "x": -612,
        "y": -3036
    },
    {
        "id": 1398,
        "label": "Pythagoras",
        "value": 22,
        "x": 1993,
        "y": 1986
    },
    {
        "id": 1399,
        "label": "Pythagoreanism",
        "value": 22,
        "x": 1444,
        "y": 2272
    },
    {
        "id": 1400,
        "label": "Qualia",
        "value": 39,
        "x": -1453,
        "y": 104
    },
    {
        "id": 1401,
        "label": "Qualia: The Knowledge Argument",
        "value": 15,
        "x": -2319,
        "y": 345
    },
    {
        "id": 1402,
        "label": "Tropes",
        "value": 40,
        "x": -1215,
        "y": 690
    },
    {
        "id": 1403,
        "label": "Quantifiers and Quantification",
        "value": 22,
        "x": -2434,
        "y": 1818
    },
    {
        "id": 1404,
        "label": "Quantum Mechanics",
        "value": 42,
        "x": 2973,
        "y": 371
    },
    {
        "id": 1405,
        "label": "Bohmian Mechanics",
        "value": 28,
        "x": 3836,
        "y": 312
    },
    {
        "id": 1406,
        "label": "Collapse Theories",
        "value": 10,
        "x": 4330,
        "y": 508
    },
    {
        "id": 1407,
        "label": "The Consistent Histories Approach to Quantum Mechanics",
        "value": 7,
        "x": 4996,
        "y": 307
    },
    {
        "id": 1408,
        "label": "Copenhagen Interpretation of Quantum Mechanics",
        "value": 14,
        "x": 4400,
        "y": 1046
    },
    {
        "id": 1409,
        "label": "Everett\u2019s Relative-State Formulation of Quantum Mechanics",
        "value": 16,
        "x": 4437,
        "y": 749
    },
    {
        "id": 1410,
        "label": "Many-Worlds Interpretation of Quantum Mechanics",
        "value": 19,
        "x": 4008,
        "y": 941
    },
    {
        "id": 1411,
        "label": "Modal Interpretations of Quantum Mechanics",
        "value": 22,
        "x": 4147,
        "y": 820
    },
    {
        "id": 1412,
        "label": "Relational Quantum Mechanics",
        "value": 17,
        "x": 4065,
        "y": 1277
    },
    {
        "id": 1413,
        "label": "The Role of Decoherence in Quantum Mechanics",
        "value": 32,
        "x": 3663,
        "y": 414
    },
    {
        "id": 1414,
        "label": "Quantum-Bayesian and Pragmatist Views of Quantum Theory",
        "value": 11,
        "x": 3023,
        "y": 107
    },
    {
        "id": 1415,
        "label": "Quantum Approaches to Consciousness",
        "value": 13,
        "x": 1349,
        "y": 942
    },
    {
        "id": 1416,
        "label": "The Einstein-Podolsky-Rosen Argument in Quantum Theory",
        "value": 30,
        "x": 4003,
        "y": 493
    },
    {
        "id": 1417,
        "label": "Identity and Individuality in Quantum Theory",
        "value": 12,
        "x": 1925,
        "y": 1762
    },
    {
        "id": 1418,
        "label": "Quantum Theory and Mathematical Rigor",
        "value": 9,
        "x": 4606,
        "y": 354
    },
    {
        "id": 1419,
        "label": "Philosophical Issues in Quantum Theory",
        "value": 45,
        "x": 3410,
        "y": 303
    },
    {
        "id": 1420,
        "label": "Quantum Computing",
        "value": 18,
        "x": 1083,
        "y": 453
    },
    {
        "id": 1421,
        "label": "Quantum Gravity",
        "value": 21,
        "x": 2422,
        "y": 1074
    },
    {
        "id": 1422,
        "label": "Quantum Logic and Probability Theory",
        "value": 15,
        "x": 4150,
        "y": 263
    },
    {
        "id": 1423,
        "label": "The Uncertainty Principle",
        "value": 11,
        "x": 4983,
        "y": 743
    },
    {
        "id": 1424,
        "label": "Questions",
        "value": 8,
        "x": -532,
        "y": 1504
    },
    {
        "id": 1425,
        "label": "Willard Van Orman Quine",
        "value": 42,
        "x": -1218,
        "y": -124
    },
    {
        "id": 1426,
        "label": "Quine\u2019s New Foundations",
        "value": 9,
        "x": -3086,
        "y": 3534
    },
    {
        "id": 1427,
        "label": "Quotation",
        "value": 6,
        "x": -3475,
        "y": -1114
    },
    {
        "id": 1428,
        "label": "Race",
        "value": 36,
        "x": 1708,
        "y": -3592
    },
    {
        "id": 1429,
        "label": "Radulphus Brito",
        "value": 10,
        "x": -5624,
        "y": -221
    },
    {
        "id": 1430,
        "label": "Frank Ramsey",
        "value": 28,
        "x": -591,
        "y": -50
    },
    {
        "id": 1431,
        "label": "Petrus Ramus",
        "value": 8,
        "x": -2767,
        "y": 54
    },
    {
        "id": 1432,
        "label": "Ayn Rand",
        "value": 12,
        "x": -422,
        "y": -2258
    },
    {
        "id": 1433,
        "label": "Historicist Theories of Scientific Rationality",
        "value": 36,
        "x": 1115,
        "y": -905
    },
    {
        "id": 1434,
        "label": "John Rawls",
        "value": 98,
        "x": 602,
        "y": -3772
    },
    {
        "id": 1435,
        "label": "Realism",
        "value": 51,
        "x": -295,
        "y": 704
    },
    {
        "id": 1436,
        "label": "Challenges to Metaphysical Realism",
        "value": 12,
        "x": -2455,
        "y": 2443
    },
    {
        "id": 1437,
        "label": "Scientific Realism",
        "value": 50,
        "x": 594,
        "y": -1202
    },
    {
        "id": 1438,
        "label": "Structural Realism",
        "value": 22,
        "x": 546,
        "y": 1533
    },
    {
        "id": 1439,
        "label": "Realism and Theory Change in Science",
        "value": 7,
        "x": 2730,
        "y": 1497
    },
    {
        "id": 1440,
        "label": "Reasons for Action: Justification, Motivation, Explanation",
        "value": 24,
        "x": 1495,
        "y": -773
    },
    {
        "id": 1441,
        "label": "Recognition",
        "value": 14,
        "x": 1849,
        "y": -4560
    },
    {
        "id": 1442,
        "label": "Reconciliation",
        "value": 5,
        "x": -2763,
        "y": -4522
    },
    {
        "id": 1443,
        "label": "Redistribution",
        "value": 10,
        "x": 190,
        "y": -5416
    },
    {
        "id": 1444,
        "label": "Scientific Reduction",
        "value": 32,
        "x": -40,
        "y": -1716
    },
    {
        "id": 1445,
        "label": "Reflective Equilibrium",
        "value": 17,
        "x": 1459,
        "y": -2834
    },
    {
        "id": 1446,
        "label": "Henricus Regius",
        "value": 37,
        "x": -517,
        "y": 1264
    },
    {
        "id": 1447,
        "label": "August Wilhelm Rehberg",
        "value": 5,
        "x": -1504,
        "y": -4792
    },
    {
        "id": 1448,
        "label": "Hans Reichenbach",
        "value": 36,
        "x": 886,
        "y": -487
    },
    {
        "id": 1449,
        "label": "Thomas Reid",
        "value": 40,
        "x": 32,
        "y": -526
    },
    {
        "id": 1450,
        "label": "Reid\u2019s Ethics",
        "value": 11,
        "x": -472,
        "y": -1098
    },
    {
        "id": 1451,
        "label": "Reid on Memory and Personal Identity",
        "value": 8,
        "x": 734,
        "y": -1143
    },
    {
        "id": 1452,
        "label": "Adolf Reinach",
        "value": 10,
        "x": 1326,
        "y": 1853
    },
    {
        "id": 1453,
        "label": "Karl Leonhard Reinhold",
        "value": 7,
        "x": 3444,
        "y": -400
    },
    {
        "id": 1454,
        "label": "Reism",
        "value": 8,
        "x": -694,
        "y": 3678
    },
    {
        "id": 1455,
        "label": "Relations",
        "value": 18,
        "x": -2465,
        "y": 93
    },
    {
        "id": 1456,
        "label": "Relativism",
        "value": 45,
        "x": 169,
        "y": -415
    },
    {
        "id": 1457,
        "label": "The Epistemology of Religion",
        "value": 19,
        "x": -2103,
        "y": -1278
    },
    {
        "id": 1458,
        "label": "Religion and Morality",
        "value": 20,
        "x": -892,
        "y": -2223
    },
    {
        "id": 1459,
        "label": "Philosophy of Religion",
        "value": 52,
        "x": -1683,
        "y": -386
    },
    {
        "id": 1460,
        "label": "Religion and Science",
        "value": 13,
        "x": -1095,
        "y": -2057
    },
    {
        "id": 1461,
        "label": "Natural Theology and Natural Religion",
        "value": 28,
        "x": -1473,
        "y": -803
    },
    {
        "id": 1462,
        "label": "Phenomenology of Religion",
        "value": 21,
        "x": -212,
        "y": 181
    },
    {
        "id": 1463,
        "label": "Religious Experience",
        "value": 18,
        "x": -1782,
        "y": -1262
    },
    {
        "id": 1464,
        "label": "Religious Language",
        "value": 6,
        "x": -2241,
        "y": 2353
    },
    {
        "id": 1465,
        "label": "Black Reparations",
        "value": 8,
        "x": 209,
        "y": -6029
    },
    {
        "id": 1466,
        "label": "Replication and Reproduction",
        "value": 24,
        "x": 2744,
        "y": -4362
    },
    {
        "id": 1467,
        "label": "Political Representation",
        "value": 9,
        "x": 793,
        "y": -4999
    },
    {
        "id": 1468,
        "label": "Scientific Representation",
        "value": 15,
        "x": -813,
        "y": -903
    },
    {
        "id": 1469,
        "label": "Reproducibility of Scientific Results",
        "value": 8,
        "x": 1001,
        "y": -3193
    },
    {
        "id": 1470,
        "label": "Republicanism",
        "value": 24,
        "x": 1639,
        "y": -4546
    },
    {
        "id": 1471,
        "label": "The Repugnant Conclusion",
        "value": 15,
        "x": 2682,
        "y": -3582
    },
    {
        "id": 1472,
        "label": "Respect",
        "value": 24,
        "x": 2114,
        "y": -3710
    },
    {
        "id": 1473,
        "label": "Collective Responsibility",
        "value": 21,
        "x": -426,
        "y": -3874
    },
    {
        "id": 1474,
        "label": "Revolution",
        "value": 10,
        "x": -509,
        "y": -2889
    },
    {
        "id": 1475,
        "label": "Richard the Sophister",
        "value": 9,
        "x": -5963,
        "y": 643
    },
    {
        "id": 1476,
        "label": "Heinrich Rickert",
        "value": 16,
        "x": 3045,
        "y": -515
    },
    {
        "id": 1477,
        "label": "Paul Ricoeur",
        "value": 12,
        "x": 1008,
        "y": -589
    },
    {
        "id": 1478,
        "label": "Rights",
        "value": 41,
        "x": 787,
        "y": -4150
    },
    {
        "id": 1479,
        "label": "Children\u2019s Rights",
        "value": 15,
        "x": 1437,
        "y": -5176
    },
    {
        "id": 1480,
        "label": "Rigid Designators",
        "value": 28,
        "x": -1897,
        "y": 50
    },
    {
        "id": 1481,
        "label": "Risk",
        "value": 18,
        "x": 585,
        "y": -3226
    },
    {
        "id": 1482,
        "label": "Richard Rorty",
        "value": 18,
        "x": -1060,
        "y": -1802
    },
    {
        "id": 1483,
        "label": "Eugen Rosenstock-Huessy",
        "value": 7,
        "x": 2813,
        "y": 1328
    },
    {
        "id": 1484,
        "label": "Franz Rosenzweig",
        "value": 14,
        "x": 2055,
        "y": 1107
    },
    {
        "id": 1485,
        "label": "Antonio Rosmini",
        "value": 7,
        "x": -1016,
        "y": -1958
    },
    {
        "id": 1486,
        "label": "William David Ross",
        "value": 9,
        "x": 2849,
        "y": -1946
    },
    {
        "id": 1487,
        "label": "Jean Jacques Rousseau",
        "value": 22,
        "x": 363,
        "y": -3533
    },
    {
        "id": 1488,
        "label": "Richard Sylvan [Routley]",
        "value": 12,
        "x": -1460,
        "y": 2058
    },
    {
        "id": 1489,
        "label": "Josiah Royce",
        "value": 28,
        "x": -406,
        "y": -765
    },
    {
        "id": 1490,
        "label": "Bertrand Russell",
        "value": 81,
        "x": -2235,
        "y": 575
    },
    {
        "id": 1491,
        "label": "Russell\u2019s Moral Philosophy",
        "value": 27,
        "x": 224,
        "y": -1047
    },
    {
        "id": 1492,
        "label": "Gilbert Ryle",
        "value": 20,
        "x": -925,
        "y": -1015
    },
    {
        "id": 1493,
        "label": "Saadya [Saadiah]",
        "value": 6,
        "x": -38,
        "y": -901
    },
    {
        "id": 1494,
        "label": "\u015a\u0101ntarak\u1e63ita",
        "value": 15,
        "x": 3001,
        "y": 3629
    },
    {
        "id": 1495,
        "label": "\u015a\u0101ntideva",
        "value": 7,
        "x": 2826,
        "y": 2910
    },
    {
        "id": 1496,
        "label": "Sakya Pa\u1e47\u1e0dita [sa skya pa\u1e47 \u1e0di ta]",
        "value": 8,
        "x": 4018,
        "y": 3805
    },
    {
        "id": 1497,
        "label": "Wesley Salmon",
        "value": 21,
        "x": 1322,
        "y": -1429
    },
    {
        "id": 1498,
        "label": "Francisco Sanches",
        "value": 14,
        "x": 661,
        "y": 250
    },
    {
        "id": 1499,
        "label": "George Santayana",
        "value": 8,
        "x": -2417,
        "y": -483
    },
    {
        "id": 1500,
        "label": "Jean-Paul Sartre",
        "value": 33,
        "x": 1233,
        "y": 1324
    },
    {
        "id": 1501,
        "label": "Max Scheler",
        "value": 18,
        "x": 1021,
        "y": 759
    },
    {
        "id": 1502,
        "label": "Friedrich Wilhelm Joseph von Schelling",
        "value": 27,
        "x": 1504,
        "y": 481
    },
    {
        "id": 1503,
        "label": "Schema",
        "value": 8,
        "x": -4189,
        "y": 1096
    },
    {
        "id": 1504,
        "label": "Friedrich Schiller",
        "value": 12,
        "x": 2946,
        "y": 1050
    },
    {
        "id": 1505,
        "label": "August Wilhelm von Schlegel",
        "value": 8,
        "x": 3156,
        "y": 1404
    },
    {
        "id": 1506,
        "label": "Friedrich Schlegel",
        "value": 18,
        "x": 2603,
        "y": 600
    },
    {
        "id": 1507,
        "label": "Friedrich Daniel Ernst Schleiermacher",
        "value": 22,
        "x": 1464,
        "y": -240
    },
    {
        "id": 1508,
        "label": "Moritz Schlick",
        "value": 19,
        "x": 1140,
        "y": -351
    },
    {
        "id": 1509,
        "label": "Carl Schmitt",
        "value": 9,
        "x": -463,
        "y": -4955
    },
    {
        "id": 1510,
        "label": "Gershom Scholem",
        "value": 7,
        "x": 1627,
        "y": 2184
    },
    {
        "id": 1511,
        "label": "Heinrich Scholz",
        "value": 8,
        "x": -2564,
        "y": -872
    },
    {
        "id": 1512,
        "label": "School of Names",
        "value": 18,
        "x": -4605,
        "y": 4149
    },
    {
        "id": 1513,
        "label": "School of Salamanca",
        "value": 8,
        "x": -3420,
        "y": -2441
    },
    {
        "id": 1514,
        "label": "Arthur Schopenhauer",
        "value": 23,
        "x": 926,
        "y": 159
    },
    {
        "id": 1515,
        "label": "Alfred Schutz",
        "value": 12,
        "x": 599,
        "y": 627
    },
    {
        "id": 1516,
        "label": "Theory and Observation in Science",
        "value": 26,
        "x": 180,
        "y": -1883
    },
    {
        "id": 1517,
        "label": "The Unity of Science",
        "value": 65,
        "x": 593,
        "y": -496
    },
    {
        "id": 1518,
        "label": "Scientific Discovery",
        "value": 18,
        "x": 1614,
        "y": -1438
    },
    {
        "id": 1519,
        "label": "The Social Dimensions of Scientific Knowledge",
        "value": 37,
        "x": 892,
        "y": -2168
    },
    {
        "id": 1520,
        "label": "Scientific Method",
        "value": 67,
        "x": 254,
        "y": -530
    },
    {
        "id": 1521,
        "label": "Scientific Progress",
        "value": 20,
        "x": 1853,
        "y": -638
    },
    {
        "id": 1522,
        "label": "Scientific Research and Big Data",
        "value": 15,
        "x": 178,
        "y": -2362
    },
    {
        "id": 1523,
        "label": "Scientific Revolutions",
        "value": 30,
        "x": 1130,
        "y": -1302
    },
    {
        "id": 1524,
        "label": "The Structure of Scientific Theories",
        "value": 34,
        "x": -153,
        "y": -1524
    },
    {
        "id": 1525,
        "label": "Underdetermination of Scientific Theory",
        "value": 18,
        "x": 376,
        "y": -1371
    },
    {
        "id": 1526,
        "label": "Madeleine de Scud\u00e9ry",
        "value": 5,
        "x": -311,
        "y": -2815
    },
    {
        "id": 1527,
        "label": "Secession",
        "value": 11,
        "x": 302,
        "y": -5745
    },
    {
        "id": 1528,
        "label": "Self-Consciousness",
        "value": 22,
        "x": -4,
        "y": 670
    },
    {
        "id": 1529,
        "label": "Phenomenological Approaches to Self-Consciousness",
        "value": 19,
        "x": 789,
        "y": 1620
    },
    {
        "id": 1530,
        "label": "Self-Reference",
        "value": 43,
        "x": -2800,
        "y": 2172
    },
    {
        "id": 1531,
        "label": "Wilfrid Sellars",
        "value": 18,
        "x": -1957,
        "y": -1396
    },
    {
        "id": 1532,
        "label": "Montague Semantics",
        "value": 27,
        "x": -2179,
        "y": 376
    },
    {
        "id": 1533,
        "label": "Proof-Theoretic Semantics",
        "value": 25,
        "x": -3417,
        "y": 2598
    },
    {
        "id": 1534,
        "label": "Two-Dimensional Semantics",
        "value": 30,
        "x": -1298,
        "y": -554
    },
    {
        "id": 1535,
        "label": "Medieval Semiotics",
        "value": 12,
        "x": -5045,
        "y": -583
    },
    {
        "id": 1536,
        "label": "Seneca",
        "value": 15,
        "x": 1594,
        "y": -284
    },
    {
        "id": 1537,
        "label": "Sense-Data",
        "value": 32,
        "x": -1093,
        "y": 354
    },
    {
        "id": 1538,
        "label": "Set Theory",
        "value": 44,
        "x": -2944,
        "y": 2352
    },
    {
        "id": 1539,
        "label": "Alternative Axiomatic Set Theories",
        "value": 22,
        "x": -3325,
        "y": 3067
    },
    {
        "id": 1540,
        "label": "Set Theory: Constructive and Intuitionistic ZF",
        "value": 24,
        "x": -3343,
        "y": 3375
    },
    {
        "id": 1541,
        "label": "Independence and Large Cardinals",
        "value": 13,
        "x": -4055,
        "y": 3079
    },
    {
        "id": 1542,
        "label": "Non-wellfounded Set Theory",
        "value": 7,
        "x": -3362,
        "y": 4345
    },
    {
        "id": 1543,
        "label": "Zermelo\u2019s Axiomatization of Set Theory",
        "value": 12,
        "x": -3792,
        "y": 3220
    },
    {
        "id": 1544,
        "label": "Sex and Sexuality",
        "value": 9,
        "x": 4302,
        "y": -3227
    },
    {
        "id": 1545,
        "label": "Sextus Empiricus",
        "value": 21,
        "x": 1154,
        "y": 849
    },
    {
        "id": 1546,
        "label": "Lord Shaftesbury [Anthony Ashley Cooper, 3rd Earl of Shaftesbury]",
        "value": 24,
        "x": 303,
        "y": -1224
    },
    {
        "id": 1547,
        "label": "Johannes Sharpe",
        "value": 12,
        "x": -6045,
        "y": 884
    },
    {
        "id": 1548,
        "label": "Mary Shepherd",
        "value": 8,
        "x": -176,
        "y": 1251
    },
    {
        "id": 1549,
        "label": "Henry Sidgwick",
        "value": 27,
        "x": 645,
        "y": -2383
    },
    {
        "id": 1550,
        "label": "Simon of Faversham",
        "value": 12,
        "x": -5461,
        "y": -445
    },
    {
        "id": 1551,
        "label": "Simplicity",
        "value": 16,
        "x": -1619,
        "y": -938
    },
    {
        "id": 1552,
        "label": "Computer Simulations in Science",
        "value": 15,
        "x": -1187,
        "y": -2486
    },
    {
        "id": 1553,
        "label": "Situations in Natural Language Semantics",
        "value": 34,
        "x": -1763,
        "y": -48
    },
    {
        "id": 1554,
        "label": "Skeptical Theism",
        "value": 6,
        "x": -3645,
        "y": -2382
    },
    {
        "id": 1555,
        "label": "Skepticism About Moral Responsibility",
        "value": 16,
        "x": -1933,
        "y": -2706
    },
    {
        "id": 1556,
        "label": "Medieval Skepticism",
        "value": 18,
        "x": -2874,
        "y": 190
    },
    {
        "id": 1557,
        "label": "Adam Smith\u2019s Moral and Political Philosophy",
        "value": 6,
        "x": -1914,
        "y": -2893
    },
    {
        "id": 1558,
        "label": "Naturalistic Approaches to Social Construction",
        "value": 15,
        "x": 1517,
        "y": -2601
    },
    {
        "id": 1559,
        "label": "Contemporary Approaches to the Social Contract",
        "value": 21,
        "x": 126,
        "y": -4287
    },
    {
        "id": 1560,
        "label": "Social Institutions",
        "value": 16,
        "x": -81,
        "y": -4093
    },
    {
        "id": 1561,
        "label": "Socialism",
        "value": 29,
        "x": 1392,
        "y": -3763
    },
    {
        "id": 1562,
        "label": "Social Minimum",
        "value": 18,
        "x": 1100,
        "y": -5539
    },
    {
        "id": 1563,
        "label": "Formal Approaches to Social Procedures",
        "value": 27,
        "x": 662,
        "y": -1738
    },
    {
        "id": 1564,
        "label": "Sociobiology",
        "value": 15,
        "x": 2942,
        "y": -4422
    },
    {
        "id": 1565,
        "label": "Socrates",
        "value": 18,
        "x": 1485,
        "y": -55
    },
    {
        "id": 1566,
        "label": "Sophie de Grouchy",
        "value": 4,
        "x": 4217,
        "y": -4640
    },
    {
        "id": 1567,
        "label": "Sophismata",
        "value": 16,
        "x": -5173,
        "y": 1539
    },
    {
        "id": 1568,
        "label": "Sorites Paradox",
        "value": 29,
        "x": -2307,
        "y": 1685
    },
    {
        "id": 1569,
        "label": "Sortals",
        "value": 18,
        "x": -786,
        "y": -37
    },
    {
        "id": 1570,
        "label": "Sounds",
        "value": 6,
        "x": -4036,
        "y": 960
    },
    {
        "id": 1571,
        "label": "Sovereignty",
        "value": 30,
        "x": -394,
        "y": -4387
    },
    {
        "id": 1572,
        "label": "Absolute and Relational Theories of Space and Motion",
        "value": 18,
        "x": 1462,
        "y": 1986
    },
    {
        "id": 1573,
        "label": "Conventionality of Simultaneity",
        "value": 9,
        "x": 3343,
        "y": 79
    },
    {
        "id": 1574,
        "label": "Singularities and Black Holes",
        "value": 20,
        "x": 1494,
        "y": 1187
    },
    {
        "id": 1575,
        "label": "Supertasks",
        "value": 11,
        "x": -1565,
        "y": 2300
    },
    {
        "id": 1576,
        "label": "Species",
        "value": 22,
        "x": 2017,
        "y": -2880
    },
    {
        "id": 1577,
        "label": "Speech Acts",
        "value": 30,
        "x": -811,
        "y": -1504
    },
    {
        "id": 1578,
        "label": "Herbert Spencer",
        "value": 19,
        "x": 2052,
        "y": -3408
    },
    {
        "id": 1579,
        "label": "Speusippus",
        "value": 16,
        "x": 542,
        "y": 2436
    },
    {
        "id": 1580,
        "label": "Baruch Spinoza",
        "value": 52,
        "x": -152,
        "y": 679
    },
    {
        "id": 1581,
        "label": "Spinoza\u2019s Physical Theory",
        "value": 11,
        "x": -287,
        "y": 2817
    },
    {
        "id": 1582,
        "label": "Spinoza\u2019s Political Philosophy",
        "value": 10,
        "x": -573,
        "y": -3421
    },
    {
        "id": 1583,
        "label": "Spinoza\u2019s Psychological Theory",
        "value": 10,
        "x": -48,
        "y": 2662
    },
    {
        "id": 1584,
        "label": "Spinoza\u2019s Theory of Attributes",
        "value": 9,
        "x": -153,
        "y": 3288
    },
    {
        "id": 1585,
        "label": "Philosophy of Sport",
        "value": 3,
        "x": -1704,
        "y": -5729
    },
    {
        "id": 1586,
        "label": "The Traditional Square of Opposition",
        "value": 19,
        "x": -3084,
        "y": 1569
    },
    {
        "id": 1587,
        "label": "\u015ar\u012bhar\u1e63a",
        "value": 11,
        "x": 1211,
        "y": 1495
    },
    {
        "id": 1588,
        "label": "States of Affairs",
        "value": 32,
        "x": -1188,
        "y": 838
    },
    {
        "id": 1589,
        "label": "Boltzmann\u2019s Work in Statistical Physics",
        "value": 8,
        "x": 1223,
        "y": 3339
    },
    {
        "id": 1590,
        "label": "Philosophy of Statistical Mechanics",
        "value": 15,
        "x": 1683,
        "y": 1645
    },
    {
        "id": 1591,
        "label": "Philosophy of Statistics",
        "value": 26,
        "x": 1235,
        "y": -956
    },
    {
        "id": 1592,
        "label": "Susan Stebbing",
        "value": 8,
        "x": -2504,
        "y": -1483
    },
    {
        "id": 1593,
        "label": "Edith Stein",
        "value": 14,
        "x": 914,
        "y": 486
    },
    {
        "id": 1594,
        "label": "Charles Leslie Stevenson",
        "value": 11,
        "x": 393,
        "y": 607
    },
    {
        "id": 1595,
        "label": "Max Stirner",
        "value": 8,
        "x": 3444,
        "y": -2143
    },
    {
        "id": 1596,
        "label": "Stoicism",
        "value": 44,
        "x": 237,
        "y": 42
    },
    {
        "id": 1597,
        "label": "Leo Strauss",
        "value": 30,
        "x": -65,
        "y": -1018
    },
    {
        "id": 1598,
        "label": "Peter Frederick Strawson",
        "value": 17,
        "x": -1123,
        "y": -1625
    },
    {
        "id": 1599,
        "label": "Carl Stumpf",
        "value": 16,
        "x": 527,
        "y": 2193
    },
    {
        "id": 1600,
        "label": "Johann Sturm",
        "value": 9,
        "x": 105,
        "y": 3702
    },
    {
        "id": 1601,
        "label": "Suhrawardi",
        "value": 10,
        "x": -5100,
        "y": -1191
    },
    {
        "id": 1602,
        "label": "Suicide",
        "value": 14,
        "x": 2516,
        "y": -2332
    },
    {
        "id": 1603,
        "label": "Supererogation",
        "value": 4,
        "x": -3600,
        "y": 232
    },
    {
        "id": 1604,
        "label": "Supervenience",
        "value": 47,
        "x": -615,
        "y": -292
    },
    {
        "id": 1605,
        "label": "Supervenience in Ethics",
        "value": 16,
        "x": 367,
        "y": -739
    },
    {
        "id": 1606,
        "label": "Syrianus",
        "value": 11,
        "x": -1576,
        "y": 4034
    },
    {
        "id": 1607,
        "label": "Philosophy of Systems and Synthetic Biology",
        "value": 15,
        "x": 2640,
        "y": -3716
    },
    {
        "id": 1608,
        "label": "Alfred Tarski",
        "value": 37,
        "x": -2170,
        "y": 1636
    },
    {
        "id": 1609,
        "label": "Tarski\u2019s Truth Definitions",
        "value": 32,
        "x": -2811,
        "y": 2000
    },
    {
        "id": 1610,
        "label": "Nicolaus Taurellus",
        "value": 6,
        "x": 1822,
        "y": 667
    },
    {
        "id": 1611,
        "label": "Philosophy of Technology",
        "value": 34,
        "x": -340,
        "y": -1792
    },
    {
        "id": 1612,
        "label": "Bernardino Telesio",
        "value": 18,
        "x": 378,
        "y": 3117
    },
    {
        "id": 1613,
        "label": "Terrorism",
        "value": 11,
        "x": -648,
        "y": -4875
    },
    {
        "id": 1614,
        "label": "Epistemological Problems of Testimony",
        "value": 26,
        "x": 231,
        "y": -1538
    },
    {
        "id": 1615,
        "label": "Philosophy of Theater",
        "value": 10,
        "x": 977,
        "y": -2354
    },
    {
        "id": 1616,
        "label": "The Theology of Aristotle",
        "value": 16,
        "x": -2975,
        "y": 2864
    },
    {
        "id": 1617,
        "label": "Theophrastus",
        "value": 6,
        "x": 1011,
        "y": 4197
    },
    {
        "id": 1618,
        "label": "Theoretical Terms in Science",
        "value": 19,
        "x": -698,
        "y": -1033
    },
    {
        "id": 1619,
        "label": "Thomas of Erfurt",
        "value": 11,
        "x": -5098,
        "y": -23
    },
    {
        "id": 1620,
        "label": "Henry David Thoreau",
        "value": 34,
        "x": 466,
        "y": -789
    },
    {
        "id": 1621,
        "label": "Thought Experiments",
        "value": 16,
        "x": 1334,
        "y": 1098
    },
    {
        "id": 1622,
        "label": "Tibetan Epistemology and Philosophy of Language",
        "value": 14,
        "x": 2446,
        "y": 3113
    },
    {
        "id": 1623,
        "label": "The Experience and Perception of Time",
        "value": 16,
        "x": -1586,
        "y": 1883
    },
    {
        "id": 1624,
        "label": "Thermodynamic Asymmetry in Time",
        "value": 19,
        "x": 1320,
        "y": 1216
    },
    {
        "id": 1625,
        "label": "Time Machines",
        "value": 9,
        "x": 1421,
        "y": 3072
    },
    {
        "id": 1626,
        "label": "Time Travel",
        "value": 15,
        "x": 106,
        "y": 2313
    },
    {
        "id": 1627,
        "label": "Time Travel and Modern Physics",
        "value": 10,
        "x": 758,
        "y": 2491
    },
    {
        "id": 1628,
        "label": "Timon of Phlius",
        "value": 12,
        "x": 3121,
        "y": 807
    },
    {
        "id": 1629,
        "label": "Toleration",
        "value": 22,
        "x": -293,
        "y": -2539
    },
    {
        "id": 1630,
        "label": "Theories of the Common Law of Torts",
        "value": 8,
        "x": -181,
        "y": -6174
    },
    {
        "id": 1631,
        "label": "Torture",
        "value": 11,
        "x": -803,
        "y": -3864
    },
    {
        "id": 1632,
        "label": "Touch",
        "value": 7,
        "x": -1044,
        "y": 2930
    },
    {
        "id": 1633,
        "label": "Transcendental Arguments",
        "value": 14,
        "x": 2137,
        "y": -979
    },
    {
        "id": 1634,
        "label": "Transcendentalism",
        "value": 9,
        "x": 1780,
        "y": -1977
    },
    {
        "id": 1635,
        "label": "Trinity",
        "value": 52,
        "x": -2432,
        "y": 694
    },
    {
        "id": 1636,
        "label": "Trust",
        "value": 18,
        "x": 1895,
        "y": -2346
    },
    {
        "id": 1637,
        "label": "Truth",
        "value": 43,
        "x": -1707,
        "y": 1032
    },
    {
        "id": 1638,
        "label": "Axiomatic Theories of Truth",
        "value": 16,
        "x": -3051,
        "y": 2695
    },
    {
        "id": 1639,
        "label": "The Coherence Theory of Truth",
        "value": 14,
        "x": -2736,
        "y": 1317
    },
    {
        "id": 1640,
        "label": "The Correspondence Theory of Truth",
        "value": 45,
        "x": -1477,
        "y": 795
    },
    {
        "id": 1641,
        "label": "The Deflationary Theory of Truth",
        "value": 25,
        "x": -1992,
        "y": 1326
    },
    {
        "id": 1642,
        "label": "The Identity Theory of Truth",
        "value": 21,
        "x": -2063,
        "y": 814
    },
    {
        "id": 1643,
        "label": "Pluralist Theories of Truth",
        "value": 17,
        "x": -1701,
        "y": 103
    },
    {
        "id": 1644,
        "label": "The Pragmatic Theory of Truth",
        "value": 11,
        "x": -2579,
        "y": 569
    },
    {
        "id": 1645,
        "label": "The Revision Theory of Truth",
        "value": 15,
        "x": -2899,
        "y": 3085
    },
    {
        "id": 1646,
        "label": "Truthlikeness",
        "value": 12,
        "x": 1928,
        "y": 925
    },
    {
        "id": 1647,
        "label": "Truthmakers",
        "value": 27,
        "x": -2026,
        "y": 579
    },
    {
        "id": 1648,
        "label": "Truth Values",
        "value": 11,
        "x": -3116,
        "y": 2566
    },
    {
        "id": 1649,
        "label": "Tsongkhapa",
        "value": 8,
        "x": 3870,
        "y": 4411
    },
    {
        "id": 1650,
        "label": "Alan Turing",
        "value": 19,
        "x": -2941,
        "y": -405
    },
    {
        "id": 1651,
        "label": "Turing Machines",
        "value": 20,
        "x": -3428,
        "y": -408
    },
    {
        "id": 1652,
        "label": "Kazimierz Twardowski",
        "value": 16,
        "x": -312,
        "y": 2684
    },
    {
        "id": 1653,
        "label": "The Theory of Two Truths in India",
        "value": 14,
        "x": 1946,
        "y": 4051
    },
    {
        "id": 1654,
        "label": "The Theory of Two Truths in Tibet",
        "value": 10,
        "x": 3003,
        "y": 4793
    },
    {
        "id": 1655,
        "label": "Types and Tokens",
        "value": 13,
        "x": -2778,
        "y": -894
    },
    {
        "id": 1656,
        "label": "Type Theory",
        "value": 36,
        "x": -3169,
        "y": 2159
    },
    {
        "id": 1657,
        "label": "Church\u2019s Type Theory",
        "value": 37,
        "x": -2683,
        "y": 1492
    },
    {
        "id": 1658,
        "label": "Umar Khayyam",
        "value": 12,
        "x": -1873,
        "y": 642
    },
    {
        "id": 1659,
        "label": "The Medieval Problem of Universals",
        "value": 29,
        "x": -3410,
        "y": 669
    },
    {
        "id": 1660,
        "label": "The History of Utilitarianism",
        "value": 16,
        "x": 908,
        "y": -2763
    },
    {
        "id": 1661,
        "label": "Vagueness",
        "value": 39,
        "x": -1578,
        "y": 1054
    },
    {
        "id": 1662,
        "label": "Hans Vaihinger",
        "value": 9,
        "x": 1793,
        "y": -994
    },
    {
        "id": 1663,
        "label": "Lorenzo Valla",
        "value": 13,
        "x": -2704,
        "y": -121
    },
    {
        "id": 1664,
        "label": "Intrinsic vs. Extrinsic Value",
        "value": 37,
        "x": 1661,
        "y": -1848
    },
    {
        "id": 1665,
        "label": "Value Pluralism",
        "value": 24,
        "x": 1737,
        "y": -2209
    },
    {
        "id": 1666,
        "label": "Value Theory",
        "value": 24,
        "x": 1928,
        "y": -1223
    },
    {
        "id": 1667,
        "label": "Vasubandhu",
        "value": 9,
        "x": 2350,
        "y": 4576
    },
    {
        "id": 1668,
        "label": "Moral Vegetarianism",
        "value": 7,
        "x": -1570,
        "y": -2912
    },
    {
        "id": 1669,
        "label": "Giambattista Vico",
        "value": 17,
        "x": 1097,
        "y": -9
    },
    {
        "id": 1670,
        "label": "Vienna Circle",
        "value": 51,
        "x": -174,
        "y": -558
    },
    {
        "id": 1671,
        "label": "Juan Luis Vives [Joannes Ludovicus Vives]",
        "value": 10,
        "x": -1909,
        "y": 2290
    },
    {
        "id": 1672,
        "label": "The Ethics and Rationality of Voting",
        "value": 9,
        "x": 2737,
        "y": -3067
    },
    {
        "id": 1673,
        "label": "Voting Methods",
        "value": 10,
        "x": 3512,
        "y": -1446
    },
    {
        "id": 1674,
        "label": "War",
        "value": 26,
        "x": -435,
        "y": -4197
    },
    {
        "id": 1675,
        "label": "James Ward",
        "value": 7,
        "x": -3116,
        "y": 974
    },
    {
        "id": 1676,
        "label": "Max Weber",
        "value": 31,
        "x": 1139,
        "y": -1515
    },
    {
        "id": 1677,
        "label": "Simone Weil",
        "value": 9,
        "x": 2160,
        "y": 555
    },
    {
        "id": 1678,
        "label": "Well-Being",
        "value": 42,
        "x": 1637,
        "y": -3039
    },
    {
        "id": 1679,
        "label": "Hermann Weyl",
        "value": 35,
        "x": 1459,
        "y": 1409
    },
    {
        "id": 1680,
        "label": "William Whewell",
        "value": 23,
        "x": 1089,
        "y": -1655
    },
    {
        "id": 1681,
        "label": "Alfred North Whitehead",
        "value": 26,
        "x": -2494,
        "y": 275
    },
    {
        "id": 1682,
        "label": "William of Auvergne",
        "value": 12,
        "x": -4212,
        "y": 53
    },
    {
        "id": 1683,
        "label": "William of Champeaux",
        "value": 6,
        "x": -5933,
        "y": 1627
    },
    {
        "id": 1684,
        "label": "William of Sherwood",
        "value": 4,
        "x": -6732,
        "y": 1046
    },
    {
        "id": 1685,
        "label": "Bernard Williams",
        "value": 16,
        "x": 1997,
        "y": -2487
    },
    {
        "id": 1686,
        "label": "Donald Cary Williams",
        "value": 7,
        "x": -1359,
        "y": -1483
    },
    {
        "id": 1687,
        "label": "John Cook Wilson",
        "value": 10,
        "x": -1461,
        "y": -1294
    },
    {
        "id": 1688,
        "label": "Wilhelm Windelband",
        "value": 15,
        "x": 2508,
        "y": -1467
    },
    {
        "id": 1689,
        "label": "Wisdom",
        "value": 11,
        "x": 1788,
        "y": 1407
    },
    {
        "id": 1690,
        "label": "Ludwig Wittgenstein",
        "value": 53,
        "x": -1076,
        "y": -146
    },
    {
        "id": 1691,
        "label": "Adam de Wodeham",
        "value": 17,
        "x": -4274,
        "y": 1750
    },
    {
        "id": 1692,
        "label": "Christian Wolff",
        "value": 26,
        "x": 817,
        "y": 858
    },
    {
        "id": 1693,
        "label": "Mary Wollstonecraft",
        "value": 9,
        "x": 4003,
        "y": -3561
    },
    {
        "id": 1694,
        "label": "World Government",
        "value": 19,
        "x": -596,
        "y": -4488
    },
    {
        "id": 1695,
        "label": "Chauncey Wright",
        "value": 10,
        "x": 1965,
        "y": -1935
    },
    {
        "id": 1696,
        "label": "Wilhelm Maximilian Wundt",
        "value": 15,
        "x": -88,
        "y": 1104
    },
    {
        "id": 1697,
        "label": "John Wyclif",
        "value": 22,
        "x": -5386,
        "y": 617
    },
    {
        "id": 1698,
        "label": "John Wyclif\u2019s Political Philosophy",
        "value": 9,
        "x": -4968,
        "y": 182
    },
    {
        "id": 1699,
        "label": "Xenocrates",
        "value": 13,
        "x": 647,
        "y": 3142
    },
    {
        "id": 1700,
        "label": "Xenophanes",
        "value": 15,
        "x": 2425,
        "y": 1938
    },
    {
        "id": 1701,
        "label": "Count Paul Yorck von Wartenburg",
        "value": 7,
        "x": -781,
        "y": -2059
    },
    {
        "id": 1702,
        "label": "Giacomo Zabarella",
        "value": 11,
        "x": -1261,
        "y": 2812
    },
    {
        "id": 1703,
        "label": "Zeno of Elea",
        "value": 17,
        "x": 513,
        "y": 3071
    },
    {
        "id": 1704,
        "label": "Zombies",
        "value": 22,
        "x": -1655,
        "y": -526
    }
]