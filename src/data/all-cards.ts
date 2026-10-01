export interface TarotCardSummary {
  id: string;
  label: string;
  arcana: "major-arcana" | "wands" | "cups" | "swords" | "pentacles";
  faceType: "video" | "static";
  faceSrc: string;
  keywords: string[];
  upright: string;
  reversed: string;
  advice: string;
}

export const ALL_78_TAROT_CARDS: TarotCardSummary[] = [
  {
    "id": "the_fool",
    "label": "The Fool",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghJob9wFpyC7boEq3zw9ZenN2u0AxBsfRdgPSX",
    "keywords": [
      "Beginnings",
      "Innocence",
      "Spontaneity",
      "Free Spirit"
    ],
    "upright": "New beginnings, innocence, spontaneous adventure, leap of faith, boundless potential.",
    "reversed": "Recklessness, risk-taking, hesitation, missed opportunities, foolish choices.",
    "advice": "Step boldly into the unknown with an open heart; trust where the path leads."
  },
  {
    "id": "the_magician",
    "label": "The Magician",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghTVV4iOazPv3MhuUceXW8RZmzwEObNp4q0tkC",
    "keywords": [
      "Manifestation",
      "Resourcefulness",
      "Power",
      "Inspired Action"
    ],
    "upright": "Manifestation, resourcefulness, inspired action, creative power, focused will.",
    "reversed": "Illusion, manipulation, untapped talent, misdirected intentions, trickery.",
    "advice": "You hold all the tools needed to manifest your desires into reality."
  },
  {
    "id": "the_high_priestess",
    "label": "The High Priestess",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7Vghn5orpDNvOmzc0GRbUh2uC5ZTp69gJDX17oHj",
    "keywords": [
      "Intuition",
      "Sacred Mystery",
      "Subconscious",
      "Higher Power"
    ],
    "upright": "Sacred intuition, unconscious wisdom, divine mystery, spiritual illumination.",
    "reversed": "Secrets withheld, disconnection from instinct, surface-level judgments.",
    "advice": "Listen to the quiet whispers of your soul before making external moves."
  },
  {
    "id": "the_empress",
    "label": "The Empress",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghgAEkockQL1nlQpfojWOxIXrR0C2w3ButGsPh",
    "keywords": [
      "Femininity",
      "Abundance",
      "Nurturing",
      "Sensuality"
    ],
    "upright": "Sensual abundance, unconditional nurturing, fertile affection, and deep emotional security.",
    "reversed": "Creative block, emotional dependence, smothering, neglecting self-care.",
    "advice": "Nurture your creations and allow your heart to expand in natural abundance."
  },
  {
    "id": "the_emperor",
    "label": "The Emperor",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7Vghizc5BsjHjyN3wtA1zhRZLkBicn6VPeM0D8sd",
    "keywords": [
      "Authority",
      "Structure",
      "Control",
      "Fatherhood"
    ],
    "upright": "Steadfast devotion, dependable boundaries, order, leadership, and long-term stability.",
    "reversed": "Tyranny, rigidity, loss of control, abuse of power, excessive dominance.",
    "advice": "Establish clear boundaries and lead your life with calm, honorable discipline."
  },
  {
    "id": "the_hierophant",
    "label": "The Hierophant",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghtwYAMprp48FhQzm0SkMjU37GvlcHsgdqfOu5",
    "keywords": [
      "Spiritual Wisdom",
      "Tradition",
      "Morality",
      "Institutions"
    ],
    "upright": "Alignment of spiritual philosophy, mutual values, formal commitment, mentorship.",
    "reversed": "Rebellion, subversiveness, personal beliefs challenged, outdated dogmas.",
    "advice": "Seek counsel from proven traditions and align with your highest moral truths."
  },
  {
    "id": "the_lovers",
    "label": "The Lovers",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghSN91jwqlQGxTchqL6FVPbDniARgaZ9YdkXJB",
    "keywords": [
      "Love",
      "Harmony",
      "Soul Union",
      "Values Aligned"
    ],
    "upright": "Unconditional love, soulmate bond, alignment of core values, profound sacred choices.",
    "reversed": "Disharmony, misaligned priorities, codependency, internal conflict.",
    "advice": "Choose with your heart and align your actions with what you value most."
  },
  {
    "id": "the_chariot",
    "label": "The Chariot",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghRypQvhRBOBtTJH23GaWyDnUNVilZgR0Xv71E",
    "keywords": [
      "Control",
      "Willpower",
      "Victory",
      "Determination"
    ],
    "upright": "Overcoming obstacles through shared focus, emotional discipline, and determined resolve.",
    "reversed": "Lack of control, aggression, obstacles derailing plans, lack of direction.",
    "advice": "Keep your eyes on the goal and harness conflicting impulses into unified drive."
  },
  {
    "id": "strength",
    "label": "Strength",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghtRpiYOarp48FhQzm0SkMjU37GvlcHsgdqfOu",
    "keywords": [
      "Courage",
      "Persuasion",
      "Influence",
      "Compassion"
    ],
    "upright": "Taming fears through gentle compassion, patience, and vulnerability rather than pride.",
    "reversed": "Self-doubt, raw emotion, vulnerability masked by aggression, inner weakness.",
    "advice": "Kindness and patient perseverance will conquer what brute force never could."
  },
  {
    "id": "the_hermit",
    "label": "The Hermit",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7Vgh2Tm7Thi7VghHd0XQbGKvEnu9sZLayUD6OiC5",
    "keywords": [
      "Soul-Searching",
      "Introspection",
      "Solitude",
      "Inner Guidance"
    ],
    "upright": "A period of thoughtful introspection to uncover what your soul truly requires.",
    "reversed": "Isolation, loneliness, anti-social withdrawal, being trapped in contemplation.",
    "advice": "Step back from outer noise to allow your inner lantern to illuminate the next step."
  },
  {
    "id": "wheel_of_fortune",
    "label": "Wheel of Fortune",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghXzkUhRhDsqU7WOar3RnP8FoM2wJ954TjQmLg",
    "keywords": [
      "Good Luck",
      "Karma",
      "Life Cycles",
      "Destiny"
    ],
    "upright": "Karmic destiny in motion. Serendipitous encounters and unexpected positive shifts.",
    "reversed": "Bad luck, resisting change, breaking negative karmic cycles, feeling powerless.",
    "advice": "Accept the turning wheel of life with grace; every cycle brings transformation."
  },
  {
    "id": "justice",
    "label": "Justice",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghdDfzFHZGK4Cs61rJnmyZlFkWSzaITXethfMU",
    "keywords": [
      "Justice",
      "Fairness",
      "Truth",
      "Cause and Effect"
    ],
    "upright": "Equal give-and-take, mutual honesty, accountability, and karmic clarity.",
    "reversed": "Dishonesty, lack of accountability, unfair treatment, karmic retribution.",
    "advice": "Act with uncompromising fairness, for every seed sown bears inevitable fruit."
  },
  {
    "id": "the_hanged_man",
    "label": "The Hanged Man",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghtJCt4rp48FhQzm0SkMjU37GvlcHsgdqfOu5J",
    "keywords": [
      "Pause",
      "Surrender",
      "New Perspective",
      "Letting Go"
    ],
    "upright": "A pause in outer progress allowing you to see your patterns from a fresh perspective.",
    "reversed": "Delays, resistance, stalling, unnecessary sacrifice, refusing to evolve.",
    "advice": "Surrender the need to rush; enlightenment comes when you pause and reflect."
  },
  {
    "id": "death",
    "label": "Death",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghCWfVpju0GfBhetw51Hmz4vskcL6rVdqJjOiK",
    "keywords": [
      "Endings",
      "Change",
      "Transformation",
      "Transition"
    ],
    "upright": "The gentle closing of obsolete chapters, making fertile soil for revitalized rebirth.",
    "reversed": "Resistance to change, holding onto the past, stagnation, fear of letting go.",
    "advice": "Release what no longer serves you to welcome vibrant new growth."
  },
  {
    "id": "temperance",
    "label": "Temperance",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7Vgh3yGBPK7I4VNrDg7pJwuyXAxLHifSTWanY0oC",
    "keywords": [
      "Balance",
      "Moderation",
      "Patience",
      "Purpose"
    ],
    "upright": "Graceful blending of opposing elements into serene harmony; patient alchemy.",
    "reversed": "Imbalance, excess, extreme reactions, lack of long-term vision.",
    "advice": "Walk the middle path and balance your energies with mindful equanimity."
  },
  {
    "id": "the_devil",
    "label": "The Devil",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghuAsxeMXIR28rDgLBwh5pYPmTUzc3Zl6y1ibt",
    "keywords": [
      "Shadow Self",
      "Attachment",
      "Addiction",
      "Restriction"
    ],
    "upright": "Intense magnetism bordering on obsession; recognizing self-imposed limitations.",
    "reversed": "Releasing limiting beliefs, reclaiming freedom, overcoming addictive habits.",
    "advice": "Shine the light of awareness on your shadows; break free from illusions."
  },
  {
    "id": "the_tower",
    "label": "The Tower",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghLVv1qrgX3MQBsmANo74dlyvk8JG69KPtEZCu",
    "keywords": [
      "Sudden Change",
      "Upheaval",
      "Chaos",
      "Awakening"
    ],
    "upright": "Sudden revelation of concealed truth that shatters illusions, clearing room to rebuild.",
    "reversed": "Disaster avoided, delaying inevitable breakthrough, fear of catastrophe.",
    "advice": "Let false structures fall so you can build on bedrock of authentic truth."
  },
  {
    "id": "the_star",
    "label": "The Star",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghB3iFA7kC6EDxYK0pNbJVdv5HemO7nM3jPWaL",
    "keywords": [
      "Hope",
      "Faith",
      "Purpose",
      "Renewal"
    ],
    "upright": "Restorative emotional healing, renewed trust, and sublime optimism. Divine blessings.",
    "reversed": "Hopelessness, despair, lack of faith, despondency, feeling overwhelmed.",
    "advice": "Trust in the universe; bright hope and restorative peace are entering your world."
  },
  {
    "id": "the_moon",
    "label": "The Moon",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghHZW5aoBAMfb8rcjFGgY1yWemRaIhTqioOtpK",
    "keywords": [
      "Illusion",
      "Fear",
      "Anxiety",
      "Subconscious"
    ],
    "upright": "Fluctuating emotions and ambiguities. Not all is visible under moonlight; avoid panic.",
    "reversed": "Release of fear, unveiled secrets, overcoming anxiety, seeing clearly.",
    "advice": "Do not make hasty conclusions in the fog; let daylight reveal the truth."
  },
  {
    "id": "the_sun",
    "label": "The Sun",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghkNFevqyW1pVwqSNmgZFyjPxdtbnuE3coUXia",
    "keywords": [
      "Positivity",
      "Fun",
      "Warmth",
      "Success"
    ],
    "upright": "Unadulterated joy, warmth, playful vitality, celebratory success, and clarity.",
    "reversed": "Temporary clouds, delayed success, unrealistic optimism, burnout.",
    "advice": "Radiate your authenticity freely and bask in shared warmth and celebration."
  },
  {
    "id": "judgement",
    "label": "Judgement",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghouRFTOI0cNsVf3Udpy1PRHOLZxEnkFqGB5DM",
    "keywords": [
      "Judgement",
      "Rebirth",
      "Inner Calling",
      "Absolution"
    ],
    "upright": "A higher calling, healing past wounds through mutual forgiveness, stepping into light.",
    "reversed": "Self-doubt, harsh self-criticism, ignoring life calls, repetitive mistakes.",
    "advice": "Hear the trumpet of renewal; forgive your past and rise into higher purpose."
  },
  {
    "id": "the_world",
    "label": "The World",
    "arcana": "major-arcana",
    "faceType": "video",
    "faceSrc": "https://ffy6hhiqoe.ufs.sh/f/2elTD8Ci7VghD8IExgTlSneT1BJpV86OzHwtdI37WvsxgXjc",
    "keywords": [
      "Completion",
      "Integration",
      "Accomplishment",
      "Travel"
    ],
    "upright": "Complete spiritual fulfillment, soul wholeness, and joyful culmination of a journey.",
    "reversed": "Lack of closure, unfinished business, delays in final realization, shortcuts.",
    "advice": "Celebrate your completion; you have mastered this cycle with honor and grace."
  },
  {
    "id": "ace_of_wands",
    "label": "Ace of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/64.0 - Ace of Wands.webp",
    "keywords": [
      "Ace",
      "Wands",
      "Fire"
    ],
    "upright": "Pure potential for inspired creation, breakthrough enthusiasm, and raw creative power. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "two_of_wands",
    "label": "Two of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/65.0 - Two of Wands.webp",
    "keywords": [
      "Two",
      "Wands",
      "Fire"
    ],
    "upright": "Future planning, making bold executive decisions, leaving comfort zones. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "three_of_wands",
    "label": "Three of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/66.0 - Three of Wands.webp",
    "keywords": [
      "Three",
      "Wands",
      "Fire"
    ],
    "upright": "Expansion, long-range foresight, ships coming into port, overseas horizons. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "four_of_wands",
    "label": "Four of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/67.0 - Four of Wands.webp",
    "keywords": [
      "Four",
      "Wands",
      "Fire"
    ],
    "upright": "Celebration, homecoming, harmonious sanctuary, weddings, joyful gatherings. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "five_of_wands",
    "label": "Five of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/68.0 - Five of Wands.webp",
    "keywords": [
      "Five",
      "Wands",
      "Fire"
    ],
    "upright": "Spirited competition, conflicting viewpoints, ego friction, creative clashes. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "six_of_wands",
    "label": "Six of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/69.0 - Six of Wands.webp",
    "keywords": [
      "Six",
      "Wands",
      "Fire"
    ],
    "upright": "Public acclaim, triumphant victory, recognition, self-confidence validated. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "seven_of_wands",
    "label": "Seven of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/70.0 - Seven of Wands.webp",
    "keywords": [
      "Seven",
      "Wands",
      "Fire"
    ],
    "upright": "Defending principles, holding high ground under challenge, grit and defiance. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "eight_of_wands",
    "label": "Eight of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/71.0 - Eight of Wands.webp",
    "keywords": [
      "Eight",
      "Wands",
      "Fire"
    ],
    "upright": "Rapid momentum, swift messages, sudden alignment of events, travelling fast. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "nine_of_wands",
    "label": "Nine of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/72.0 - Nine of Wands.webp",
    "keywords": [
      "Nine",
      "Wands",
      "Fire"
    ],
    "upright": "Resilience near finish line, weary but resolute guardian, standing test of time. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "ten_of_wands",
    "label": "Ten of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/73.0 - Ten of Wands.webp",
    "keywords": [
      "Ten",
      "Wands",
      "Fire"
    ],
    "upright": "Heavy burdens, burnout from overcommitting, carrying responsibilities alone. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "page_of_wands",
    "label": "Page of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/74.0 - Page of Wands.webp",
    "keywords": [
      "Page",
      "Wands",
      "Fire"
    ],
    "upright": "Energetic messenger, enthusiastic discovery, curiosity, creative spark. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "knight_of_wands",
    "label": "Knight of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/75.0 - Knight of Wands.webp",
    "keywords": [
      "Knight",
      "Wands",
      "Fire"
    ],
    "upright": "Impulsive adventurer, dashing charm, relentless drive, daring momentum. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "queen_of_wands",
    "label": "Queen of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/76.0 - Queen of Wands.webp",
    "keywords": [
      "Queen",
      "Wands",
      "Fire"
    ],
    "upright": "Charismatic leader, radiant confidence, warm magnetism, fiery devotion. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "king_of_wands",
    "label": "King of Wands",
    "arcana": "wands",
    "faceType": "static",
    "faceSrc": "/faces/wands/77.0 - King of Wands.webp",
    "keywords": [
      "King",
      "Wands",
      "Fire"
    ],
    "upright": "Visionary master, inspiring entrepreneur, leader who commands respect. Harness the power of fire to realize goals.",
    "reversed": "Blockages or excesses in fire energy; pause to rebalance wands.",
    "advice": "Anchor your focus in Creativity, passion, enterprise, ambition, and willpower to move forward decisively."
  },
  {
    "id": "ace_of_cups",
    "label": "Ace of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/22.0 - Ace of Cups.webp",
    "keywords": [
      "Ace",
      "Cups",
      "Water"
    ],
    "upright": "Overflowing unconditional love, emotional awakening, spiritual gift of compassion. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "two_of_cups",
    "label": "Two of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/23.0 - Two of Cups.webp",
    "keywords": [
      "Two",
      "Cups",
      "Water"
    ],
    "upright": "Soulmate attraction, mutual vulnerability, harmonious partnership, deep reciprocity. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "three_of_cups",
    "label": "Three of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/24.0 - Three of Cups.webp",
    "keywords": [
      "Three",
      "Cups",
      "Water"
    ],
    "upright": "Celebratory sisterhood/brotherhood, joyful toast, friendship, community cheer. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "four_of_cups",
    "label": "Four of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/25.0 - Four of Cups.webp",
    "keywords": [
      "Four",
      "Cups",
      "Water"
    ],
    "upright": "Emotional apathy, contemplation, missing subtle gifts, discontent with routine. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "five_of_cups",
    "label": "Five of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/26.0 - Five of Cups.webp",
    "keywords": [
      "Five",
      "Cups",
      "Water"
    ],
    "upright": "Grief over spilled cups, mourning loss, recognizing two full cups still remain. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "six_of_cups",
    "label": "Six of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/27.0 - Six of Cups.webp",
    "keywords": [
      "Six",
      "Cups",
      "Water"
    ],
    "upright": "Nostalgic sweetness, childhood memories, innocent generosity, joyful reunion. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "seven_of_cups",
    "label": "Seven of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/28.0 - Seven of Cups.webp",
    "keywords": [
      "Seven",
      "Cups",
      "Water"
    ],
    "upright": "Dazzling choices, wishful daydreams, fantasy vs reality, needing discernment. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "eight_of_cups",
    "label": "Eight of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/29.0 - Eight of Cups.webp",
    "keywords": [
      "Eight",
      "Cups",
      "Water"
    ],
    "upright": "Walking away from empty fulfillment, sacred departure, seeking higher meaning. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "nine_of_cups",
    "label": "Nine of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/30.0 - Nine of Cups.webp",
    "keywords": [
      "Nine",
      "Cups",
      "Water"
    ],
    "upright": "The wish card, deep emotional contentment, sensory indulgence, satisfied heart. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "ten_of_cups",
    "label": "Ten of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/31.0 - Ten of Cups.webp",
    "keywords": [
      "Ten",
      "Cups",
      "Water"
    ],
    "upright": "Enduring family bliss, emotional rainbow, soulmate household, peaceful fulfillment. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "page_of_cups",
    "label": "Page of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/32.0 - Page of Cups.webp",
    "keywords": [
      "Page",
      "Cups",
      "Water"
    ],
    "upright": "Intuitive dreamer, sweet emotional message, imaginative empathy, gentle youth. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "knight_of_cups",
    "label": "Knight of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/33.0 - Knight of Cups.webp",
    "keywords": [
      "Knight",
      "Cups",
      "Water"
    ],
    "upright": "Romantic poet, chivalrous courtship, following the heart on noble quest. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "queen_of_cups",
    "label": "Queen of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/34.0 - Queen of Cups.webp",
    "keywords": [
      "Queen",
      "Cups",
      "Water"
    ],
    "upright": "Compassionate empath, intuitive healer, serene emotional depth, psychic grace. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "king_of_cups",
    "label": "King of Cups",
    "arcana": "cups",
    "faceType": "static",
    "faceSrc": "/faces/cups/35.0 - King of Cups.webp",
    "keywords": [
      "King",
      "Cups",
      "Water"
    ],
    "upright": "Master of calm seas, emotional wisdom, compassionate counsel, diplomatic peace. Harness the power of water to realize goals.",
    "reversed": "Blockages or excesses in water energy; pause to rebalance cups.",
    "advice": "Anchor your focus in Emotions, romance, spiritual intuition, empathy, and relationships to move forward decisively."
  },
  {
    "id": "ace_of_swords",
    "label": "Ace of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/50.0 - Ace of Swords.webp",
    "keywords": [
      "Ace",
      "Swords",
      "Air"
    ],
    "upright": "Breakthrough clarity, razor-sharp truth, triumphant insight, cutting illusions. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "two_of_swords",
    "label": "Two of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/51.0 - Two of Swords.webp",
    "keywords": [
      "Two",
      "Swords",
      "Air"
    ],
    "upright": "Stalemate, blocked emotions, difficult crossroads, needing objective decision. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "three_of_swords",
    "label": "Three of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/52.0 - Three of Swords.webp",
    "keywords": [
      "Three",
      "Swords",
      "Air"
    ],
    "upright": "Heartbreak, sorrowful revelation, healing from emotional wound, painful truth. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "four_of_swords",
    "label": "Four of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/53.0 - Four of Swords.webp",
    "keywords": [
      "Four",
      "Swords",
      "Air"
    ],
    "upright": "Restorative sanctuary, mental convalescence, quiet retreat before battle. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "five_of_swords",
    "label": "Five of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/54.0 - Five of Swords.webp",
    "keywords": [
      "Five",
      "Swords",
      "Air"
    ],
    "upright": "Hollow victory, winning at high cost, bruised egos, walk away from pettiness. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "six_of_swords",
    "label": "Six of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/55.0 - Six of Swords.webp",
    "keywords": [
      "Six",
      "Swords",
      "Air"
    ],
    "upright": "Calmer waters, journey across transition, leaving troubled shores behind. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "seven_of_swords",
    "label": "Seven of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/56.0 - Seven of Swords.webp",
    "keywords": [
      "Seven",
      "Swords",
      "Air"
    ],
    "upright": "Tactical cunning, strategic retreat, discretion, operating independently. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "eight_of_swords",
    "label": "Eight of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/57.0 - Eight of Swords.webp",
    "keywords": [
      "Eight",
      "Swords",
      "Air"
    ],
    "upright": "Self-imposed mental imprisonment, blindfolded worry, liberating oneself. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "nine_of_swords",
    "label": "Nine of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/58.0 - Nine of Swords.webp",
    "keywords": [
      "Nine",
      "Swords",
      "Air"
    ],
    "upright": "Nocturnal anxiety, rumination, nightmares created by worry, dawn approaches. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "ten_of_swords",
    "label": "Ten of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/59.0 - Ten of Swords.webp",
    "keywords": [
      "Ten",
      "Swords",
      "Air"
    ],
    "upright": "The final conclusion, betrayal ending, bottoming out, new dawn inevitable. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "page_of_swords",
    "label": "Page of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/60.0 - Page of Swords.webp",
    "keywords": [
      "Page",
      "Swords",
      "Air"
    ],
    "upright": "Curious truth-seeker, vigilant observer, sharp mental agility, quick intellect. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "knight_of_swords",
    "label": "Knight of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/61.0 - Knight of Swords.webp",
    "keywords": [
      "Knight",
      "Swords",
      "Air"
    ],
    "upright": "Direct crusader, fearless assertion, swift intellect, cutting to chase. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "queen_of_swords",
    "label": "Queen of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/62.0 - Queen of Swords.webp",
    "keywords": [
      "Queen",
      "Swords",
      "Air"
    ],
    "upright": "Discerning intellect, unbiased clarity, perceptive truth-teller, wise boundaries. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "king_of_swords",
    "label": "King of Swords",
    "arcana": "swords",
    "faceType": "static",
    "faceSrc": "/faces/swords/63.0 - King of Swords.webp",
    "keywords": [
      "King",
      "Swords",
      "Air"
    ],
    "upright": "Master strategist, intellectual authority, impartial justice, commanding logic. Harness the power of air to realize goals.",
    "reversed": "Blockages or excesses in air energy; pause to rebalance swords.",
    "advice": "Anchor your focus in Intellect, truth, mental clarity, communication, and overcoming conflict to move forward decisively."
  },
  {
    "id": "ace_of_pentacles",
    "label": "Ace of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/36.0 - Ace of Pentacles.webp",
    "keywords": [
      "Ace",
      "Pentacles",
      "Earth"
    ],
    "upright": "Golden seed of abundance, tangible opportunity, financial foundation, wealth. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "two_of_pentacles",
    "label": "Two of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/37.0 - Two of Pentacles.webp",
    "keywords": [
      "Two",
      "Pentacles",
      "Earth"
    ],
    "upright": "Balancing responsibilities, adaptability in cashflow, juggling change gracefully. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "three_of_pentacles",
    "label": "Three of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/38.0 - Three of Pentacles.webp",
    "keywords": [
      "Three",
      "Pentacles",
      "Earth"
    ],
    "upright": "Master craftsmanship, collaborative mastery, skilled teamwork, architectural skill. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "four_of_pentacles",
    "label": "Four of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/39.0 - Four of Pentacles.webp",
    "keywords": [
      "Four",
      "Pentacles",
      "Earth"
    ],
    "upright": "Financial security, holding wealth tightly, guarding boundaries, risk aversion. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "five_of_pentacles",
    "label": "Five of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/40.0 - Five of Pentacles.webp",
    "keywords": [
      "Five",
      "Pentacles",
      "Earth"
    ],
    "upright": "Temporary hardship, feeling left out in cold, finding spiritual sanctuary. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "six_of_pentacles",
    "label": "Six of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/41.0 - Six of Pentacles.webp",
    "keywords": [
      "Six",
      "Pentacles",
      "Earth"
    ],
    "upright": "Generosity, charitable reciprocity, equitable sharing of gifts, fair rewards. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "seven_of_pentacles",
    "label": "Seven of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/42.0 - Seven of Pentacles.webp",
    "keywords": [
      "Seven",
      "Pentacles",
      "Earth"
    ],
    "upright": "Patient harvest, assessing returns on long labor, trusting growth in due time. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "eight_of_pentacles",
    "label": "Eight of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/43.0 - Eight of Pentacles.webp",
    "keywords": [
      "Eight",
      "Pentacles",
      "Earth"
    ],
    "upright": "Dedicated apprenticeship, repetitive diligence, perfecting fine details of craft. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "nine_of_pentacles",
    "label": "Nine of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/44.0 - Nine of Pentacles.webp",
    "keywords": [
      "Nine",
      "Pentacles",
      "Earth"
    ],
    "upright": "Refined self-sufficiency, luxurious private estate, enjoying fruits of success. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "ten_of_pentacles",
    "label": "Ten of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/45.0 - Ten of Pentacles.webp",
    "keywords": [
      "Ten",
      "Pentacles",
      "Earth"
    ],
    "upright": "Generational wealth, lasting legacy, family estate, enduring financial security. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "page_of_pentacles",
    "label": "Page of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/46.0 - Page of Pentacles.webp",
    "keywords": [
      "Page",
      "Pentacles",
      "Earth"
    ],
    "upright": "Pragmatic apprentice, ambitious student of wealth, grounded new study. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "knight_of_pentacles",
    "label": "Knight of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/47.0 - Knight of Pentacles.webp",
    "keywords": [
      "Knight",
      "Pentacles",
      "Earth"
    ],
    "upright": "Methodical worker, tireless devotion, unshakeable reliability, steady gains. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "queen_of_pentacles",
    "label": "Queen of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/48.0 - Queen of Pentacles.webp",
    "keywords": [
      "Queen",
      "Pentacles",
      "Earth"
    ],
    "upright": "Grounded homemaker, bountiful provider, earthly abundance, practical care. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  },
  {
    "id": "king_of_pentacles",
    "label": "King of Pentacles",
    "arcana": "pentacles",
    "faceType": "static",
    "faceSrc": "/faces/pentacles/49.0 - King of Pentacles.webp",
    "keywords": [
      "King",
      "Pentacles",
      "Earth"
    ],
    "upright": "Financial titan, empire builder, master of commerce, generous enterprise. Harness the power of earth to realize goals.",
    "reversed": "Blockages or excesses in earth energy; pause to rebalance pentacles.",
    "advice": "Anchor your focus in Finances, physical manifestation, career, craft, and grounded stability to move forward decisively."
  }
];
