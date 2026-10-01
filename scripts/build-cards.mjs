import fs from 'fs';

const rawCards = JSON.parse(fs.readFileSync('all-78-cards.json', 'utf8'));

const canonicalMeanings = {
  the_fool: {
    keywords: ['Beginnings', 'Innocence', 'Spontaneity', 'Free Spirit'],
    upright: 'New beginnings, innocence, spontaneous adventure, leap of faith, boundless potential.',
    reversed: 'Recklessness, risk-taking, hesitation, missed opportunities, foolish choices.',
    advice: 'Step boldly into the unknown with an open heart; trust where the path leads.'
  },
  the_magician: {
    keywords: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired Action'],
    upright: 'Manifestation, resourcefulness, inspired action, creative power, focused will.',
    reversed: 'Illusion, manipulation, untapped talent, misdirected intentions, trickery.',
    advice: 'You hold all the tools needed to manifest your desires into reality.'
  },
  the_high_priestess: {
    keywords: ['Intuition', 'Sacred Mystery', 'Subconscious', 'Higher Power'],
    upright: 'Sacred intuition, unconscious wisdom, divine mystery, spiritual illumination.',
    reversed: 'Secrets withheld, disconnection from instinct, surface-level judgments.',
    advice: 'Listen to the quiet whispers of your soul before making external moves.'
  },
  the_empress: {
    keywords: ['Femininity', 'Abundance', 'Nurturing', 'Sensuality'],
    upright: 'Sensual abundance, unconditional nurturing, fertile affection, and deep emotional security.',
    reversed: 'Creative block, emotional dependence, smothering, neglecting self-care.',
    advice: 'Nurture your creations and allow your heart to expand in natural abundance.'
  },
  the_emperor: {
    keywords: ['Authority', 'Structure', 'Control', 'Fatherhood'],
    upright: 'Steadfast devotion, dependable boundaries, order, leadership, and long-term stability.',
    reversed: 'Tyranny, rigidity, loss of control, abuse of power, excessive dominance.',
    advice: 'Establish clear boundaries and lead your life with calm, honorable discipline.'
  },
  the_hierophant: {
    keywords: ['Spiritual Wisdom', 'Tradition', 'Morality', 'Institutions'],
    upright: 'Alignment of spiritual philosophy, mutual values, formal commitment, mentorship.',
    reversed: 'Rebellion, subversiveness, personal beliefs challenged, outdated dogmas.',
    advice: 'Seek counsel from proven traditions and align with your highest moral truths.'
  },
  the_lovers: {
    keywords: ['Love', 'Harmony', 'Soul Union', 'Values Aligned'],
    upright: 'Unconditional love, soulmate bond, alignment of core values, profound sacred choices.',
    reversed: 'Disharmony, misaligned priorities, codependency, internal conflict.',
    advice: 'Choose with your heart and align your actions with what you value most.'
  },
  the_chariot: {
    keywords: ['Control', 'Willpower', 'Victory', 'Determination'],
    upright: 'Overcoming obstacles through shared focus, emotional discipline, and determined resolve.',
    reversed: 'Lack of control, aggression, obstacles derailing plans, lack of direction.',
    advice: 'Keep your eyes on the goal and harness conflicting impulses into unified drive.'
  },
  strength: {
    keywords: ['Courage', 'Persuasion', 'Influence', 'Compassion'],
    upright: 'Taming fears through gentle compassion, patience, and vulnerability rather than pride.',
    reversed: 'Self-doubt, raw emotion, vulnerability masked by aggression, inner weakness.',
    advice: 'Kindness and patient perseverance will conquer what brute force never could.'
  },
  the_hermit: {
    keywords: ['Soul-Searching', 'Introspection', 'Solitude', 'Inner Guidance'],
    upright: 'A period of thoughtful introspection to uncover what your soul truly requires.',
    reversed: 'Isolation, loneliness, anti-social withdrawal, being trapped in contemplation.',
    advice: 'Step back from outer noise to allow your inner lantern to illuminate the next step.'
  },
  wheel_of_fortune: {
    keywords: ['Good Luck', 'Karma', 'Life Cycles', 'Destiny'],
    upright: 'Karmic destiny in motion. Serendipitous encounters and unexpected positive shifts.',
    reversed: 'Bad luck, resisting change, breaking negative karmic cycles, feeling powerless.',
    advice: 'Accept the turning wheel of life with grace; every cycle brings transformation.'
  },
  justice: {
    keywords: ['Justice', 'Fairness', 'Truth', 'Cause and Effect'],
    upright: 'Equal give-and-take, mutual honesty, accountability, and karmic clarity.',
    reversed: 'Dishonesty, lack of accountability, unfair treatment, karmic retribution.',
    advice: 'Act with uncompromising fairness, for every seed sown bears inevitable fruit.'
  },
  the_hanged_man: {
    keywords: ['Pause', 'Surrender', 'New Perspective', 'Letting Go'],
    upright: 'A pause in outer progress allowing you to see your patterns from a fresh perspective.',
    reversed: 'Delays, resistance, stalling, unnecessary sacrifice, refusing to evolve.',
    advice: 'Surrender the need to rush; enlightenment comes when you pause and reflect.'
  },
  death: {
    keywords: ['Endings', 'Change', 'Transformation', 'Transition'],
    upright: 'The gentle closing of obsolete chapters, making fertile soil for revitalized rebirth.',
    reversed: 'Resistance to change, holding onto the past, stagnation, fear of letting go.',
    advice: 'Release what no longer serves you to welcome vibrant new growth.'
  },
  temperance: {
    keywords: ['Balance', 'Moderation', 'Patience', 'Purpose'],
    upright: 'Graceful blending of opposing elements into serene harmony; patient alchemy.',
    reversed: 'Imbalance, excess, extreme reactions, lack of long-term vision.',
    advice: 'Walk the middle path and balance your energies with mindful equanimity.'
  },
  the_devil: {
    keywords: ['Shadow Self', 'Attachment', 'Addiction', 'Restriction'],
    upright: 'Intense magnetism bordering on obsession; recognizing self-imposed limitations.',
    reversed: 'Releasing limiting beliefs, reclaiming freedom, overcoming addictive habits.',
    advice: 'Shine the light of awareness on your shadows; break free from illusions.'
  },
  the_tower: {
    keywords: ['Sudden Change', 'Upheaval', 'Chaos', 'Awakening'],
    upright: 'Sudden revelation of concealed truth that shatters illusions, clearing room to rebuild.',
    reversed: 'Disaster avoided, delaying inevitable breakthrough, fear of catastrophe.',
    advice: 'Let false structures fall so you can build on bedrock of authentic truth.'
  },
  the_star: {
    keywords: ['Hope', 'Faith', 'Purpose', 'Renewal'],
    upright: 'Restorative emotional healing, renewed trust, and sublime optimism. Divine blessings.',
    reversed: 'Hopelessness, despair, lack of faith, despondency, feeling overwhelmed.',
    advice: 'Trust in the universe; bright hope and restorative peace are entering your world.'
  },
  the_moon: {
    keywords: ['Illusion', 'Fear', 'Anxiety', 'Subconscious'],
    upright: 'Fluctuating emotions and ambiguities. Not all is visible under moonlight; avoid panic.',
    reversed: 'Release of fear, unveiled secrets, overcoming anxiety, seeing clearly.',
    advice: 'Do not make hasty conclusions in the fog; let daylight reveal the truth.'
  },
  the_sun: {
    keywords: ['Positivity', 'Fun', 'Warmth', 'Success'],
    upright: 'Unadulterated joy, warmth, playful vitality, celebratory success, and clarity.',
    reversed: 'Temporary clouds, delayed success, unrealistic optimism, burnout.',
    advice: 'Radiate your authenticity freely and bask in shared warmth and celebration.'
  },
  judgement: {
    keywords: ['Judgement', 'Rebirth', 'Inner Calling', 'Absolution'],
    upright: 'A higher calling, healing past wounds through mutual forgiveness, stepping into light.',
    reversed: 'Self-doubt, harsh self-criticism, ignoring life calls, repetitive mistakes.',
    advice: 'Hear the trumpet of renewal; forgive your past and rise into higher purpose.'
  },
  the_world: {
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Travel'],
    upright: 'Complete spiritual fulfillment, soul wholeness, and joyful culmination of a journey.',
    reversed: 'Lack of closure, unfinished business, delays in final realization, shortcuts.',
    advice: 'Celebrate your completion; you have mastered this cycle with honor and grace.'
  },
};

const suitThemes = {
  wands: {
    element: 'Fire',
    realm: 'Creativity, passion, enterprise, ambition, and willpower',
    descriptors: {
      ace: 'Pure potential for inspired creation, breakthrough enthusiasm, and raw creative power.',
      two: 'Future planning, making bold executive decisions, leaving comfort zones.',
      three: 'Expansion, long-range foresight, ships coming into port, overseas horizons.',
      four: 'Celebration, homecoming, harmonious sanctuary, weddings, joyful gatherings.',
      five: 'Spirited competition, conflicting viewpoints, ego friction, creative clashes.',
      six: 'Public acclaim, triumphant victory, recognition, self-confidence validated.',
      seven: 'Defending principles, holding high ground under challenge, grit and defiance.',
      eight: 'Rapid momentum, swift messages, sudden alignment of events, travelling fast.',
      nine: 'Resilience near finish line, weary but resolute guardian, standing test of time.',
      ten: 'Heavy burdens, burnout from overcommitting, carrying responsibilities alone.',
      page: 'Energetic messenger, enthusiastic discovery, curiosity, creative spark.',
      knight: 'Impulsive adventurer, dashing charm, relentless drive, daring momentum.',
      queen: 'Charismatic leader, radiant confidence, warm magnetism, fiery devotion.',
      king: 'Visionary master, inspiring entrepreneur, leader who commands respect.'
    }
  },
  cups: {
    element: 'Water',
    realm: 'Emotions, romance, spiritual intuition, empathy, and relationships',
    descriptors: {
      ace: 'Overflowing unconditional love, emotional awakening, spiritual gift of compassion.',
      two: 'Soulmate attraction, mutual vulnerability, harmonious partnership, deep reciprocity.',
      three: 'Celebratory sisterhood/brotherhood, joyful toast, friendship, community cheer.',
      four: 'Emotional apathy, contemplation, missing subtle gifts, discontent with routine.',
      five: 'Grief over spilled cups, mourning loss, recognizing two full cups still remain.',
      six: 'Nostalgic sweetness, childhood memories, innocent generosity, joyful reunion.',
      seven: 'Dazzling choices, wishful daydreams, fantasy vs reality, needing discernment.',
      eight: 'Walking away from empty fulfillment, sacred departure, seeking higher meaning.',
      nine: 'The wish card, deep emotional contentment, sensory indulgence, satisfied heart.',
      ten: 'Enduring family bliss, emotional rainbow, soulmate household, peaceful fulfillment.',
      page: 'Intuitive dreamer, sweet emotional message, imaginative empathy, gentle youth.',
      knight: 'Romantic poet, chivalrous courtship, following the heart on noble quest.',
      queen: 'Compassionate empath, intuitive healer, serene emotional depth, psychic grace.',
      king: 'Master of calm seas, emotional wisdom, compassionate counsel, diplomatic peace.'
    }
  },
  swords: {
    element: 'Air',
    realm: 'Intellect, truth, mental clarity, communication, and overcoming conflict',
    descriptors: {
      ace: 'Breakthrough clarity, razor-sharp truth, triumphant insight, cutting illusions.',
      two: 'Stalemate, blocked emotions, difficult crossroads, needing objective decision.',
      three: 'Heartbreak, sorrowful revelation, healing from emotional wound, painful truth.',
      four: 'Restorative sanctuary, mental convalescence, quiet retreat before battle.',
      five: 'Hollow victory, winning at high cost, bruised egos, walk away from pettiness.',
      six: 'Calmer waters, journey across transition, leaving troubled shores behind.',
      seven: 'Tactical cunning, strategic retreat, discretion, operating independently.',
      eight: 'Self-imposed mental imprisonment, blindfolded worry, liberating oneself.',
      nine: 'Nocturnal anxiety, rumination, nightmares created by worry, dawn approaches.',
      ten: 'The final conclusion, betrayal ending, bottoming out, new dawn inevitable.',
      page: 'Curious truth-seeker, vigilant observer, sharp mental agility, quick intellect.',
      knight: 'Direct crusader, fearless assertion, swift intellect, cutting to chase.',
      queen: 'Discerning intellect, unbiased clarity, perceptive truth-teller, wise boundaries.',
      king: 'Master strategist, intellectual authority, impartial justice, commanding logic.'
    }
  },
  pentacles: {
    element: 'Earth',
    realm: 'Finances, physical manifestation, career, craft, and grounded stability',
    descriptors: {
      ace: 'Golden seed of abundance, tangible opportunity, financial foundation, wealth.',
      two: 'Balancing responsibilities, adaptability in cashflow, juggling change gracefully.',
      three: 'Master craftsmanship, collaborative mastery, skilled teamwork, architectural skill.',
      four: 'Financial security, holding wealth tightly, guarding boundaries, risk aversion.',
      five: 'Temporary hardship, feeling left out in cold, finding spiritual sanctuary.',
      six: 'Generosity, charitable reciprocity, equitable sharing of gifts, fair rewards.',
      seven: 'Patient harvest, assessing returns on long labor, trusting growth in due time.',
      eight: 'Dedicated apprenticeship, repetitive diligence, perfecting fine details of craft.',
      nine: 'Refined self-sufficiency, luxurious private estate, enjoying fruits of success.',
      ten: 'Generational wealth, lasting legacy, family estate, enduring financial security.',
      page: 'Pragmatic apprentice, ambitious student of wealth, grounded new study.',
      knight: 'Methodical worker, tireless devotion, unshakeable reliability, steady gains.',
      queen: 'Grounded homemaker, bountiful provider, earthly abundance, practical care.',
      king: 'Financial titan, empire builder, master of commerce, generous enterprise.'
    }
  }
};

const cardsOutput = rawCards.map(c => {
  const isVideo = typeof c.face === 'string' && c.face.startsWith('http');
  const faceSrc = isVideo ? c.face : (c.face.src || '');

  if (canonicalMeanings[c.id]) {
    const m = canonicalMeanings[c.id];
    return {
      id: c.id,
      label: c.label,
      arcana: c.arcana,
      faceType: isVideo ? 'video' : 'static',
      faceSrc,
      keywords: m.keywords,
      upright: m.upright,
      reversed: m.reversed,
      advice: m.advice
    };
  }

  // Handle Minor Arcana
  const parts = c.id.split('_of_');
  const rank = parts[0];
  const suit = parts[1] || c.arcana.replace('-arcana', '');
  const suitData = suitThemes[suit] || suitThemes.wands;
  const desc = suitData.descriptors[rank] || `Energetic manifestation of ${c.label} in the physical world.`;

  return {
    id: c.id,
    label: c.label,
    arcana: c.arcana,
    faceType: 'static',
    faceSrc,
    keywords: [c.label.split(' ')[0], suit.charAt(0).toUpperCase() + suit.slice(1), suitData.element],
    upright: `${desc} Harness the power of ${suitData.element.toLowerCase()} to realize goals.`,
    reversed: `Blockages or excesses in ${suitData.element.toLowerCase()} energy; pause to rebalance ${suit}.`,
    advice: `Anchor your focus in ${suitData.realm} to move forward decisively.`
  };
});

const fileContent = `export interface TarotCardSummary {
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

export const ALL_78_TAROT_CARDS: TarotCardSummary[] = ${JSON.stringify(cardsOutput, null, 2)};
`;

fs.writeFileSync('src/data/all-cards.ts', fileContent, 'utf8');
console.log('Successfully written src/data/all-cards.ts with', cardsOutput.length, 'cards');
