// ============================================================
// data.js — All Wuthering Waves characters + MBTI questions
// ============================================================

// --- MBTI TEST QUESTIONS (50 questions) ---
const mbtiQuestions = [
  // E vs I (Extraversion vs Introversion)
  { id: 1,  text: "At a gathering, you naturally gravitate toward meeting new people rather than staying close to those you already know.", axis: "EI", direction: "E" },
  { id: 2,  text: "You feel energized after spending a few hours alone with your thoughts.", axis: "EI", direction: "I" },
  { id: 3,  text: "You enjoy being the center of attention in social situations.", axis: "EI", direction: "E" },
  { id: 4,  text: "After a long day of social interactions, you need quiet time to recharge.", axis: "EI", direction: "I" },
  { id: 5,  text: "You find it easy to strike up conversations with strangers.", axis: "EI", direction: "E" },
  { id: 6,  text: "You prefer small, intimate gatherings over large parties.", axis: "EI", direction: "I" },
  { id: 7,  text: "You think out loud and enjoy talking through ideas with others.", axis: "EI", direction: "E" },
  { id: 8,  text: "You often reflect deeply before sharing your thoughts or opinions.", axis: "EI", direction: "I" },
  { id: 9,  text: "You feel comfortable in fast-paced, socially active environments.", axis: "EI", direction: "E" },
  { id: 10, text: "You find large social events draining even when you enjoy them.", axis: "EI", direction: "I" },

  // S vs N (Sensing vs iNtuition)
  { id: 11, text: "You prefer working with concrete facts and details rather than abstract theories.", axis: "SN", direction: "S" },
  { id: 12, text: "You often find yourself thinking about future possibilities and what could be.", axis: "SN", direction: "N" },
  { id: 13, text: "You trust experience and practical know-how over theoretical ideas.", axis: "SN", direction: "S" },
  { id: 14, text: "You enjoy exploring abstract concepts and underlying patterns in things.", axis: "SN", direction: "N" },
  { id: 15, text: "When solving a problem, you focus on the specific, step-by-step approach.", axis: "SN", direction: "S" },
  { id: 16, text: "You frequently see connections between seemingly unrelated things.", axis: "SN", direction: "N" },
  { id: 17, text: "You prefer instructions that are clear, precise, and detailed.", axis: "SN", direction: "S" },
  { id: 18, text: "You enjoy brainstorming and exploring ideas even without clear direction.", axis: "SN", direction: "N" },
  { id: 19, text: "You pay close attention to details in your environment and daily life.", axis: "SN", direction: "S" },
  { id: 20, text: "You are more interested in the big picture than in the specifics.", axis: "SN", direction: "N" },

  // T vs F (Thinking vs Feeling)
  { id: 21, text: "When making decisions, you prioritize logic and objective analysis over emotions.", axis: "TF", direction: "T" },
  { id: 22, text: "You consider how your decisions will affect others' feelings first.", axis: "TF", direction: "F" },
  { id: 23, text: "You believe truth is more important than tact in most situations.", axis: "TF", direction: "T" },
  { id: 24, text: "You are highly empathetic and easily sense others' emotional states.", axis: "TF", direction: "F" },
  { id: 25, text: "You remain composed and analytical in tense situations.", axis: "TF", direction: "T" },
  { id: 26, text: "You often put others' needs before your own in conflicts.", axis: "TF", direction: "F" },
  { id: 27, text: "You tend to question things rather than accepting them based on emotions alone.", axis: "TF", direction: "T" },
  { id: 28, text: "You place high value on harmony and dislike conflict.", axis: "TF", direction: "F" },
  { id: 29, text: "You prefer fair and consistent rules over making exceptions for individuals.", axis: "TF", direction: "T" },
  { id: 30, text: "You find personal meaning and emotional resonance in your work important.", axis: "TF", direction: "F" },

  // J vs P (Judging vs Perceiving)
  { id: 31, text: "You prefer to have a clear plan and stick to it rather than improvise.", axis: "JP", direction: "J" },
  { id: 32, text: "You like to keep your options open and adapt as situations change.", axis: "JP", direction: "P" },
  { id: 33, text: "You feel uncomfortable when things are left undecided or unresolved.", axis: "JP", direction: "J" },
  { id: 34, text: "You enjoy the freedom of spontaneous decisions and last-minute changes.", axis: "JP", direction: "P" },
  { id: 35, text: "You prefer to complete tasks well before deadlines to avoid stress.", axis: "JP", direction: "J" },
  { id: 36, text: "You often start new projects before finishing the ones you've already started.", axis: "JP", direction: "P" },
  { id: 37, text: "You like your living or working space to be organized and tidy.", axis: "JP", direction: "J" },
  { id: 38, text: "You tend to be flexible and curious, enjoying exploration without fixed goals.", axis: "JP", direction: "P" },
  { id: 39, text: "You feel satisfied after making decisions and moving forward with a clear plan.", axis: "JP", direction: "J" },
  { id: 40, text: "You see routines as restrictive and prefer variety in your daily life.", axis: "JP", direction: "P" },

  // Mixed deeper questions
  { id: 41, text: "You find it easy to empathize with people whose views differ greatly from yours.", axis: "TF", direction: "F" },
  { id: 42, text: "You prefer to analyze a problem thoroughly before starting to act on it.", axis: "SN", direction: "N" },
  { id: 43, text: "You actively seek out social interactions to boost your mood.", axis: "EI", direction: "E" },
  { id: 44, text: "You are drawn to artistic or philosophical questions about life's meaning.", axis: "SN", direction: "N" },
  { id: 45, text: "You get bored easily if you don't have multiple projects going on at once.", axis: "JP", direction: "P" },
  { id: 46, text: "You prefer objective criteria when evaluating success or failure.", axis: "TF", direction: "T" },
  { id: 47, text: "Solitude gives you a sense of peace and lets you think more clearly.", axis: "EI", direction: "I" },
  { id: 48, text: "You trust your gut feelings and intuitions as much as logic.", axis: "SN", direction: "N" },
  { id: 49, text: "You find comfort in predictable routines and established structures.", axis: "JP", direction: "J" },
  { id: 50, text: "You genuinely enjoy helping others with their personal problems.", axis: "TF", direction: "F" },
];

// --- MBTI PERSONALITY DESCRIPTIONS ---
const mbtiDescriptions = {
  INTJ: {
    title: "The Architect",
    tagline: "Imaginative and strategic thinkers with a plan for everything.",
    description: "INTJs are rare, confident, and highly analytical. They are master strategists who build elaborate plans and pursue them with quiet determination. Driven by logic and a vision of how things should be, they are often misunderstood as cold — but beneath that exterior lies an intense inner world full of ideas and convictions.",
    strengths: ["Strategic thinking", "Independence", "Determination", "High standards", "Creative problem-solving"],
    weaknesses: ["Can seem arrogant", "Dismissive of emotions", "Overly critical", "Perfectionist tendencies"],
    famous: ["Elon Musk", "Christopher Nolan", "Friedrich Nietzsche"],
    color: "#7b5ea7"
  },
  INTP: {
    title: "The Logician",
    tagline: "Innovative inventors with an unquenchable thirst for knowledge.",
    description: "INTPs are philosophical, introspective, and intellectually voracious. They are driven by a need to understand how everything works and love finding elegant solutions to complex problems. Often lost in thought, they live in a rich inner world and bring groundbreaking insights when they emerge.",
    strengths: ["Analytical", "Open-minded", "Creative", "Objective", "Deep thinker"],
    weaknesses: ["Prone to overthinking", "Can be insensitive", "Struggles with deadlines", "Avoids commitment"],
    famous: ["Albert Einstein", "Charles Darwin", "Bill Gates"],
    color: "#4a90c4"
  },
  ENTJ: {
    title: "The Commander",
    tagline: "Bold, imaginative leaders who always find a way — or make one.",
    description: "ENTJs are natural-born leaders who thrive on challenges and inefficiency. Charismatic and confident, they possess remarkable drive and willpower. They see obstacles as opportunities and have an uncanny ability to rally others toward a shared vision with infectious energy.",
    strengths: ["Leadership", "Confidence", "Strategic planning", "Charisma", "Decisiveness"],
    weaknesses: ["Can be domineering", "Impatient", "Stubborn", "Emotionally detached"],
    famous: ["Steve Jobs", "Margaret Thatcher", "Gordon Ramsay"],
    color: "#c44a4a"
  },
  ENTP: {
    title: "The Debater",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    description: "ENTPs are quick, clever, and endlessly curious. They thrive on debate, enjoy playing devil's advocate, and love turning ideas upside down just to see what falls out. Their enthusiasm for intellectual sparring can be exhilarating or exhausting depending on who's on the other end.",
    strengths: ["Quick thinking", "Charismatic", "Knowledgeable", "Innovative", "Witty"],
    weaknesses: ["Argumentative", "Easily bored", "Unfocused", "Insensitive at times"],
    famous: ["Thomas Edison", "Mark Twain", "Celine Dion"],
    color: "#e8943a"
  },
  INFJ: {
    title: "The Advocate",
    tagline: "Quiet and mystical visionaries, yet among the most inspiring people.",
    description: "INFJs are the rarest personality type — idealistic, principled, and deeply compassionate. They live with a clear sense of purpose and direction, guided by a profound inner vision for what the world could be. Despite their gentle exterior, they are powerful advocates for meaningful change.",
    strengths: ["Deep empathy", "Insightful", "Principled", "Creative", "Determined"],
    weaknesses: ["Prone to burnout", "Perfectionist", "Overly private", "Can be inflexible"],
    famous: ["Martin Luther King Jr.", "Nelson Mandela", "Lady Gaga"],
    color: "#6b7fd7"
  },
  INFP: {
    title: "The Mediator",
    tagline: "Poetic, kind, and altruistic people, always eager to help a good cause.",
    description: "INFPs are dreamers with deep convictions. They live by their values, feel emotions intensely, and are endlessly creative. While they may seem reserved, they hold passionate inner lives and a genuine desire to make the world more aligned with their vision of what's beautiful and meaningful.",
    strengths: ["Empathetic", "Idealistic", "Creative", "Loyal", "Open-minded"],
    weaknesses: ["Overly idealistic", "Self-critical", "Avoids conflict", "Impractical at times"],
    famous: ["J.R.R. Tolkien", "William Shakespeare", "Princess Diana"],
    color: "#5aab8f"
  },
  ENFJ: {
    title: "The Protagonist",
    tagline: "Charismatic and inspiring leaders who can mesmerize their listeners.",
    description: "ENFJs are natural leaders with a gift for seeing potential in everyone. Warm, passionate, and perceptive, they excel at bringing out the best in people. They are driven by a deep need to contribute positively to others' lives and radiate an emotional intelligence that draws people naturally to them.",
    strengths: ["Charismatic", "Empathetic", "Reliable", "Inspiring", "Natural leader"],
    weaknesses: ["Overly idealistic", "Struggles to say no", "Can be manipulative unintentionally", "Sensitive to criticism"],
    famous: ["Barack Obama", "Oprah Winfrey", "Jennifer Lawrence"],
    color: "#e8724a"
  },
  ENFP: {
    title: "The Campaigner",
    tagline: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile.",
    description: "ENFPs are enthusiastic, energetic, and imaginative. They see life as filled with possibilities and approach every situation with excitement and curiosity. Deeply empathetic, they connect easily with others and inspire those around them with their infectious optimism and creativity.",
    strengths: ["Enthusiastic", "Empathetic", "Creative", "Sociable", "Independent"],
    weaknesses: ["Easily distracted", "Overthinks", "Struggles with deadlines", "Can be too emotional"],
    famous: ["Robin Williams", "Walt Disney", "Keanu Reeves"],
    color: "#f0c040"
  },
  ISTJ: {
    title: "The Logistician",
    tagline: "Practical and fact-minded individuals whose reliability cannot be doubted.",
    description: "ISTJs are thorough, dependable, and remarkably dedicated. They are the backbone of any organization — steadfast, detail-oriented, and committed to fulfilling their duties with integrity. They don't seek recognition; they simply do what needs to be done, with precision and quiet resolve.",
    strengths: ["Reliable", "Detail-oriented", "Honest", "Strong-willed", "Responsible"],
    weaknesses: ["Stubborn", "Insensitive", "Judgmental", "Resistant to change"],
    famous:["Queen Elizabeth II", "Warren Buffett", "George Washington"],
    color: "#4a7a8a"
  },
  ISFJ: {
    title: "The Defender",
    tagline: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    description: "ISFJs are deeply caring and devoted individuals who find purpose in protecting and nurturing those they love. Though quiet and humble, they possess a fierce inner strength and an extraordinary capacity for generosity. They are the pillars of family and community.",
    strengths: ["Supportive", "Reliable", "Patient", "Loyal", "Observant"],
    weaknesses: ["Overly humble", "Takes on too much", "Dislikes change", "Struggles with criticism"],
    famous: ["Mother Teresa", "Kate Middleton", "Rosa Parks"],
    color: "#7a9a5a"
  },
  ESTJ: {
    title: "The Executive",
    tagline: "Excellent administrators, unsurpassed at managing things and people.",
    description: "ESTJs are organized, straightforward, and fiercely committed to their values. They are pillars of any community — civic-minded, hardworking, and devoted to upholding traditions and standards. With clear expectations and disciplined execution, they make things happen.",
    strengths: ["Organized", "Leadership", "Strong willpower", "Loyal", "Patient"],
    weaknesses: ["Inflexible", "Uncomfortable with new ideas", "Judgmental", "Bossy"],
    famous: ["Judge Judy", "Frank Sinatra", "Dr. Phil"],
    color: "#8a5a3a"
  },
  ESFJ: {
    title: "The Consul",
    tagline: "Extraordinarily caring, social, and popular people, always eager to help.",
    description: "ESFJs are warm, outgoing, and deeply attentive to the needs of those around them. They find great fulfillment in belonging and in helping others. They bring people together and cultivate a sense of community, often sacrificing their own comfort to maintain harmony.",
    strengths: ["Caring", "Loyal", "Supportive", "Social", "Practical"],
    weaknesses: ["Needs approval", "Avoids conflict too much", "Inflexible", "Overly sensitive"],
    famous: ["Taylor Swift", "Bill Clinton", "Jennifer Garner"],
    color: "#d4826a"
  },
  ISTP: {
    title: "The Virtuoso",
    tagline: "Bold and practical experimenters, masters of all kinds of tools.",
    description: "ISTPs are calm, observant, and endlessly practical. They have a natural gift for understanding how things work — mechanical, physical, or social — and apply that knowledge with elegant efficiency. They thrive in hands-on environments and are unmatched in crisis situations.",
    strengths: ["Adaptable", "Optimistic", "Creative with tools", "Direct", "Independent"],
    weaknesses: ["Easily bored", "Risky behavior", "Private to a fault", "Insensitive"],
    famous: ["Clint Eastwood", "Michael Jordan", "Scarlett Johansson"],
    color: "#607060"
  },
  ISFP: {
    title: "The Adventurer",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    description: "ISFPs live in a world of sensory beauty and personal freedom. They are gentle, caring, and fiercely loyal to their own values. Creative by nature, they often express themselves through art, music, or nature — living in the present moment with quiet but deep passion.",
    strengths: ["Artistic", "Curious", "Sympathetic", "Passionate", "Imaginative"],
    weaknesses: ["Fiercely independent to a fault", "Unpredictable", "Struggles with conflict", "Self-critical"],
    famous: ["Frédéric Chopin", "Marilyn Monroe", "Lana Del Rey"],
    color: "#a07090"
  },
  ESTP: {
    title: "The Entrepreneur",
    tagline: "Smart, energetic, and very perceptive people who truly enjoy living on the edge.",
    description: "ESTPs are action-oriented, energetic, and perpetually engaged with the world. They have sharp instincts, natural charm, and a gift for reading people and situations. They dive headfirst into life and find creative solutions on the fly, thriving where others freeze.",
    strengths: ["Bold", "Perceptive", "Direct", "Sociable", "Original"],
    weaknesses: ["Impatient", "Risk-prone", "Unstructured", "Insensitive"],
    famous: ["Donald Trump", "Ernest Hemingway", "Madonna"],
    color: "#c4803a"
  },
  ESFP: {
    title: "The Entertainer",
    tagline: "Spontaneous, energetic, and enthusiastic people — life is never boring around them.",
    description: "ESFPs live fully and passionately in the moment. They are natural entertainers who love people, excitement, and life's pleasures. Emotionally generous and endlessly enthusiastic, they bring light wherever they go and have an extraordinary ability to connect with anyone.",
    strengths: ["Bold", "Original", "Practical", "Observant", "People-oriented"],
    weaknesses: ["Easily bored", "Poor long-term planning", "Too focused on fun", "Sensitive to criticism"],
    famous: ["Elvis Presley", "Adele", "Jamie Oliver"],
    color: "#e8b040"
  }
};

// --- WUTHERING WAVES CHARACTER DATABASE ---
const wuwaCharacters = [
  // === VERSION 1.0 ===
  {
    name: "Rover (Aero)",
    mbti: "INFP",
    element: "Aero",
    weapon: "Sword",
    rarity: 5,
    role: "DPS / Support",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/others/splash-art/Rover-Sword.png",
    lore: "The protagonist of Wuthering Waves. Waking with no memories, the Rover wanders Solaris-3 driven by a quiet but burning need to rediscover themselves. Their gentle curiosity and deep empathy draw allies to them naturally.",
    whyMatch: "Like the Mediator, Rover holds deep values beneath a quiet exterior. They feel the resonance of the world profoundly, driven by meaning and a hope to restore what has been broken.",
    funFacts: ["Can resonate with multiple elements", "Their memories return gradually through the journey", "Universally described as compassionate by every NPC who meets them"]
  },
  {
    name: "Rover (Havoc)",
    mbti: "INFJ",
    element: "Havoc",
    weapon: "Sword",
    rarity: 5,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/others/splash-art/Rover-Sword.png",
    lore: "The Havoc-resonant form of the Rover carries a heavier burden — wielding destructive power with a clear moral purpose. They see through deception and act with quiet, decisive resolve.",
    whyMatch: "The INFJ walks with a deep inner vision and a sense of purpose that others rarely understand. Rover (Havoc) embodies this — a quiet visionary who channels chaos into meaning.",
    funFacts: ["Havoc form unlocked through a special story quest", "Their havoc resonance reflects internal emotional power", "Often seen staring into the distance, reflecting deeply"]
  },
  {
    name: "Yangyang",
    mbti: "ENFP",
    element: "Aero",
    weapon: "Sword",
    rarity: 4,
    role: "Support",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/yangyang/splash-art.png",
    lore: "A spirited Resonator from the Union, Yangyang is bubbly, optimistic, and endlessly enthusiastic. She greets every new encounter with wide-eyed curiosity and infectious energy, often dragging others into her adventures.",
    whyMatch: "The Campaigner's hallmarks — enthusiasm, empathy, and a love of people — define Yangyang completely. She sees possibility everywhere and brings joy to every situation.",
    funFacts: ["One of the first characters players meet", "Her hairpins are iconic among the fanbase", "Known for her cheerful battle cries"]
  },
  {
    name: "Baizhi",
    mbti: "ISFJ",
    element: "Glacio",
    weapon: "Rectifier",
    rarity: 4,
    role: "Healer",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/baizhi/splash-art.png",
    lore: "A devoted healer and researcher from Jinzhou. Baizhi is quiet, methodical, and deeply protective of those under her care. She views healing not just as a skill but as a calling.",
    whyMatch: "ISFJs are the protectors of the MBTI world — reliable, caring, and utterly devoted. Baizhi channels this archetype perfectly, offering quiet strength and unwavering support.",
    funFacts: ["Her companion YOU'TAN is a beloved fan-favorite", "She studies the biological effects of Tacet Discord", "Despite her soft demeanor, she is fiercely dedicated to her work"]
  },
  {
    name: "Chixia",
    mbti: "ESFP",
    element: "Fusion",
    weapon: "Pistols",
    rarity: 4,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/chixia/splash-art.png",
    lore: "A hot-headed and spirited Resonator who fights with pure passion and an explosive personality. Chixia dives into battle with unrestrained enthusiasm and a wide grin.",
    whyMatch: "ESFPs are entertainers who live fully in the moment — bold, expressive, and people-loving. Chixia embodies this energy: she's always ready to act first, think later, and bring the fun.",
    funFacts: ["Known for her exuberant personality among Union members", "Her dual pistols match her rapid, energetic fighting style", "Often teased for being impulsive but always comes through"]
  },
  {
    name: "Danjin",
    mbti: "ISTP",
    element: "Havoc",
    weapon: "Sword",
    rarity: 4,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/danjin/splash-art.png",
    lore: "A sharp-tongued mercenary with exceptional sword skills, Danjin fights with ruthless efficiency. She doesn't waste words or effort — every movement is precise and purposeful.",
    whyMatch: "ISTPs are the Virtuosos — calm, pragmatic, and masters of their craft. Danjin's efficient, tool-based mastery of the blade and cool detachment under fire is quintessentially Virtuoso.",
    funFacts: ["Uses her own health as a combat resource", "Her dry wit is a fan favorite", "Said to have once completed a mission without being seen once"]
  },
  {
    name: "Lingyang",
    mbti: "ISFP",
    element: "Glacio",
    weapon: "Gauntlets",
    rarity: 5,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/lingyang/splash-art.png",
    lore: "A prodigious young martial artist raised by lions, Lingyang is wild at heart but gentle by nature. He moves with the grace of wind and the power of snow.",
    whyMatch: "ISFPs are quiet adventurers — free-spirited, artistic in movement, and deeply in tune with the natural world. Lingyang lives this fully, finding beauty and truth in the art of combat.",
    funFacts: ["He was raised by snow lions in the wilderness", "His gauntlet style mimics animal movements", "Despite his upbringing, he is thoughtful and kind"]
  },
  {
    name: "Mortefi",
    mbti: "INTJ",
    element: "Fusion",
    weapon: "Pistols",
    rarity: 4,
    role: "Support",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/mortefi/splash-art.png",
    lore: "A composed and calculating researcher who studies Resonance phenomena with methodical precision. Mortefi speaks little, plans meticulously, and executes flawlessly.",
    whyMatch: "The Architect in living form — Mortefi's coldly strategic mind, self-sufficiency, and disdain for inefficiency are INTJ hallmarks. He's always three steps ahead.",
    funFacts: ["His research notes are reportedly incomprehensible to most people", "Despite appearing cold, he has a dry sense of humor", "Deeply respected in academic circles for his insights"]
  },
  {
    name: "Taoqi",
    mbti: "ESTJ",
    element: "Havoc",
    weapon: "Broadblade",
    rarity: 4,
    role: "Support",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/taoqi/splash-art.png",
    lore: "A stoic and duty-bound guardian, Taoqi fulfills her role as protector with unwavering commitment. She upholds the rules and defends those under her charge without complaint.",
    whyMatch: "ESTJs are executives who value order, duty, and protecting the community. Taoqi's structured mindset, clear sense of obligation, and protective nature are textbook Executive.",
    funFacts: ["She uses her shield as a platform for teammates", "Known for her expressionless face that hides deep loyalty", "Has never once abandoned a post she was assigned to"]
  },
  {
    name: "Aalto",
    mbti: "ENTP",
    element: "Aero",
    weapon: "Pistol",
    rarity: 4,
    role: "Support DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/aalto/splash-art.png",
    lore: "A roguish freelancer with a love of chaos and a silver tongue, Aalto makes a game of bending every situation to his advantage with wit and misdirection.",
    whyMatch: "The Debater archetype fits Aalto perfectly — clever, mischievous, and always probing for angles others miss. He thrives in ambiguity and finds every problem a delightful puzzle.",
    funFacts: ["Creates decoys in combat to confuse enemies", "His origins and true allegiances are deliberately murky", "Known for talking his way out of seemingly impossible situations"]
  },
  {
    name: "Verina",
    mbti: "ENFJ",
    element: "Spectro",
    weapon: "Rectifier",
    rarity: 5,
    role: "Healer / Support",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/verina/splash-art.png",
    lore: "A gentle and deeply intuitive healer who sees potential in everyone she meets. Verina believes wholeheartedly in the healing of both body and spirit, and leads through compassion.",
    whyMatch: "ENFJs are Protagonists — natural leaders who inspire through empathy and vision. Verina embodies this perfectly, drawing others toward healing and hope with quiet but powerful warmth.",
    funFacts: ["Her resonance is linked to plant life and renewal", "She tends to notice emotional distress before others do", "Considered a near-legendary healer across Solaris-3"]
  },
  {
    name: "Calcharo",
    mbti: "ENTJ",
    element: "Electro",
    weapon: "Broadblade",
    rarity: 5,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/calcharo/splash-art.png",
    lore: "A high-ranking officer of Jinzhou's military with an iron will and absolute command presence. Calcharo leads not by consensus but by unwavering authority and tactical brilliance.",
    whyMatch: "ENTJs are Commanders — powerful, decisive, and unflinching in their pursuit of victory. Calcharo is strategy and will made flesh, demanding excellence and delivering results.",
    funFacts: ["One of the most feared commanders in Jinzhou's military history", "His resonance amplifies his combat capabilities to near-superhuman levels", "Rarely expresses emotion but inspires fierce loyalty in his troops"]
  },
  {
    name: "Jiyan",
    mbti: "ISTJ",
    element: "Aero",
    weapon: "Spear",
    rarity: 5,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/jiyan/splash-art.png",
    lore: "The Commander of Jinzhou's Void Thunder Legion. Jiyan is a man of profound duty and steadfast loyalty, honoring his commitments with absolute resolve and leading through example.",
    whyMatch: "The Logistician's core traits — reliability, duty, and unwavering dedication to responsibility — are Jiyan in a nutshell. He is the bedrock others stand on.",
    funFacts: ["Holds the rank of Commander with nearly universal respect", "His spear technique is said to be unmatchable in all of Jinzhou", "He personally volunteers for the most dangerous missions"]
  },
  {
    name: "Encore",
    mbti: "ENFP",
    element: "Fusion",
    weapon: "Rectifier",
    rarity: 5,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/encore/splash-art.png",
    lore: "A cheerful and imaginative girl who fights alongside her beloved sheep companion Wooly. Encore's bubbly spirit and fierce passion light up every room — and battlefield — she enters.",
    whyMatch: "ENFPs are Campaigners — enthusiastic, creative, imaginative, and deeply warm. Encore's boundless energy, love of her companion, and childlike wonder match this personality perfectly.",
    funFacts: ["Her sheep Wooly is arguably more famous than she is", "She hums during battles when she's particularly happy", "Despite her gentle appearance, her fire power is immense"]
  },
  {
    name: "Jianxin",
    mbti: "INTP",
    element: "Aero",
    weapon: "Gauntlets",
    rarity: 5,
    role: "Support",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/jianxin/splash-art.png",
    lore: "A contemplative martial monk who views combat as a philosophical practice. Jianxin's stillness in battle speaks to a deep understanding of energy, space, and the nature of force.",
    whyMatch: "INTPs are philosophical thinkers who see systems where others see chaos. Jianxin's meditative precision and abstract understanding of combat physics is pure Logician.",
    funFacts: ["Can generate barriers that convert damage into energy", "She rarely speaks, but her words carry tremendous weight", "Has reportedly meditated for 30 days straight without breaking focus"]
  },
  {
    name: "Yinlin",
    mbti: "INTJ",
    element: "Electro",
    weapon: "Rectifier",
    rarity: 5,
    role: "DPS",
    version: "1.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/yinlin/splash-art.png",
    lore: "A high-level agent of the Falcon Division with a penetrating gaze and a tactical mind that sees through deception instantly. Yinlin operates in shadows, leaving no trace.",
    whyMatch: "INTJs are Architects who operate in the shadows of their own grand designs. Yinlin's cold strategic genius, self-reliance, and ability to see ten moves ahead embody the INTJ perfectly.",
    funFacts: ["Her resonance ability is linked to detection and judgment", "She is notoriously difficult to read emotionally", "Rumored to have solved a decades-old intelligence mystery overnight"]
  },

  // === VERSION 1.1 ===
  {
    name: "Jinhsi",
    mbti: "INFJ",
    element: "Spectro",
    weapon: "Broadblade",
    rarity: 5,
    role: "DPS",
    version: "1.1",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/jinhsi/splash-art.png",
    lore: "The solemn and visionary Magistrate of Jinzhou. Jinhsi carries the weight of her city's future with quiet, almost ethereal grace — guided by a profound sense of destiny.",
    whyMatch: "INFJs are rare visionaries who walk with purpose. Jinhsi's quiet intensity, her connection to something larger than herself, and her unwavering dedication to a greater good are quintessentially INFJ.",
    funFacts: ["She channels the resonance of ancient beings", "Her story arc is one of the most emotionally resonant in 1.x", "Known to commune with spirits others cannot perceive"]
  },
  {
    name: "Changli",
    mbti: "ESTP",
    element: "Fusion",
    weapon: "Sword",
    rarity: 5,
    role: "DPS",
    version: "1.1",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/changli/splash-art.png",
    lore: "A flamboyant and formidable Resonator who moves through combat like a firestorm. Changli lives for the thrill of battle and the heat of the moment, her every action dramatic and decisive.",
    whyMatch: "ESTPs are Entrepreneurs who live on the edge — bold, perceptive, and gloriously in-the-moment. Changli's high-energy style, read-and-react combat, and theatrical flair define the type.",
    funFacts: ["Her inferno combos are among the most complex in the game", "She has a flair for dramatic entrances in her story scenes", "Known to challenge rivals just for the fun of the fight"]
  },

  // === VERSION 1.2 ===
  {
    name: "Shorekeeper",
    mbti: "INFJ",
    element: "Spectro",
    weapon: "Rectifier",
    rarity: 5,
    role: "Healer / Support",
    version: "1.2",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/shorekeeper/splash-art.png",
    lore: "A mysterious keeper of the deep beyond, whose memories stretch across eons. Shorekeeper exists at the boundary between the living world and what lies beneath it, guiding souls with compassion.",
    whyMatch: "The deepest INFJ archetype: a soul with ancient wisdom, a profound inner vision, and a gentle power that moves through time and meaning rather than force.",
    funFacts: ["Her lore spans multiple time periods simultaneously", "Her healing involves restoration of the soul, not just the body", "One of the game's most mysterious and beloved characters"]
  },
  {
    name: "Xiangli Yao",
    mbti: "ENTJ",
    element: "Electro",
    weapon: "Gauntlets",
    rarity: 5,
    role: "DPS",
    version: "1.2",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/xiangli-yao/splash-art.png",
    lore: "A powerful and driven researcher-warrior who combines scientific rigor with overwhelming force. Xiangli Yao pursues truth and power with equal intensity.",
    whyMatch: "ENTJs combine intellectual mastery with dominant will — Xiangli Yao's scientifically precise, high-intensity combat style and leadership presence embody the Commander.",
    funFacts: ["His research is both combat-tested and peer-reviewed", "He was promoted three ranks in a single year", "Colleagues describe him as 'terrifying and brilliant in equal measure'"]
  },

  // === VERSION 1.3 ===
  {
    name: "Zhezhi",
    mbti: "ISFP",
    element: "Glacio",
    weapon: "Rectifier",
    rarity: 5,
    role: "Support",
    version: "1.3",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/zhezhi/splash-art.png",
    lore: "A gifted artist who brings her paintings to life as Resonators. Zhezhi sees the world as a canvas of endless beauty, and her magic flows from a place of pure creative feeling.",
    whyMatch: "ISFPs are the Adventurers — artists who feel deeply and express freely. Zhezhi's art-based resonance, gentle soul, and intense personal connection to beauty are the ISFP archetype made real.",
    funFacts: ["She can summon creatures from her own illustrations", "Every painting she creates is a unique resonance construct", "Her atelier is said to be the most beautiful room in the city"]
  },
  {
    name: "Jiyan (Variant)",
    mbti: "ISTJ",
    element: "Aero",
    weapon: "Spear",
    rarity: 5,
    role: "DPS",
    version: "1.3",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/jiyan/splash-art.png",
    lore: "See Jiyan (1.0). Returning in an alternate story context with new depths revealed.",
    whyMatch: "Jiyan's ISTJ nature deepens — a man defined by unwavering loyalty to his institution and his people, even when that path demands sacrifice.",
    funFacts: ["His alternate story path reveals a more vulnerable side", "He continues to serve even after suffering major losses", "Colleagues secretly look up to him as a moral compass"]
  },

  // === VERSION 1.4 ===
  {
    name: "Roccia",
    mbti: "ESFJ",
    element: "Havoc",
    weapon: "Gauntlets",
    rarity: 5,
    role: "Support",
    version: "1.4",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/roccia/splash-art.png",
    lore: "An exuberant and theatrical performer from Rinascita who transforms every battle into a stage. Roccia leads with heart and spectacle, drawing energy from those around her.",
    whyMatch: "ESFJs are Consuls — warm, loyal, social, and deeply invested in the happiness of those around them. Roccia's joyful theatrics and her need to uplift everyone she fights beside define the type.",
    funFacts: ["She performs her skills like stage acts with crowd interaction", "Deeply beloved by the people of Rinascita", "Her laughter in battle has been described as 'genuinely contagious'"]
  },
  {
    name: "Lumi",
    mbti: "ESFP",
    element: "Fusion",
    weapon: "Sword",
    rarity: 4,
    role: "Support",
    version: "1.4",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/lumi/splash-art.png",
    lore: "A cheerful artisan from Rinascita with a bright, spontaneous personality and an infectious love of life. Lumi brings fun and warmth to every interaction.",
    whyMatch: "ESFPs are Entertainers — bold, joyful, and magnetically warm. Lumi embodies this: she lives for the moment, for human connection, and for the sheer pleasure of being alive.",
    funFacts: ["She builds her own weapons in her spare time", "Never seems to be in a bad mood for long", "Her battle theme has been compared to a celebration party"]
  },

  // === VERSION 2.0 ===
  {
    name: "Camellya",
    mbti: "INFP",
    element: "Havoc",
    weapon: "Sword",
    rarity: 5,
    role: "DPS",
    version: "2.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/camellya/splash-art.png",
    lore: "A hauntingly beautiful figure tied to the nature of Havoc itself. Camellya moves through the world like a dreamer who has lost her way but never her sense of wonder.",
    whyMatch: "INFPs are Mediators — dreamers with deep emotional wells and a personal relationship with beauty and loss. Camellya's ethereal, introspective nature and deep inner world are INFP at its purest.",
    funFacts: ["Her moveset includes petal-based visual poetry", "Her backstory is one of the most emotionally complex in the game", "She references childhood memories in combat quotes"]
  },
  {
    name: "Carlotta",
    mbti: "ENTJ",
    element: "Glacio",
    weapon: "Pistol",
    rarity: 5,
    role: "DPS",
    version: "2.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/carlotta/splash-art.png",
    lore: "A refined and commanding leader of the Frostgate family in Rinascita. Carlotta combines aristocratic authority with clinical precision, leading with decisive elegance.",
    whyMatch: "ENTJ: The Commander with class. Carlotta's authoritative presence, strategic mind, and unshakeable drive for excellence mirror the ENTJ archetype dressed in Rinascita's finest.",
    funFacts: ["She manages a political dynasty while fighting on the front lines", "Her ice-based attacks are architecturally precise", "Known for delivering difficult truths with elegant composure"]
  },
  {
    name: "Phoebe",
    mbti: "ENFJ",
    element: "Spectro",
    weapon: "Rectifier",
    rarity: 5,
    role: "Support DPS",
    version: "2.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/phoebe/splash-art.png",
    lore: "A luminous resonator with the gift of inspiring those around her through sound and light. Phoebe views her power as a responsibility to guide others toward hope.",
    whyMatch: "ENFJs — the Protagonists — lead through emotional intelligence and vision. Phoebe's inspirational energy, empathy, and belief in collective healing embody this type radiantly.",
    funFacts: ["Her resonance literally amplifies others' abilities", "She has a natural gift for identifying people's hidden strengths", "Her story arc deals with finding purpose beyond talent"]
  },

  // === VERSION 2.1 ===
  {
    name: "Brant",
    mbti: "ESFP",
    element: "Fusion",
    weapon: "Broadblade",
    rarity: 5,
    role: "DPS",
    version: "2.1",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/brant/splash-art.png",
    lore: "A passionate and boisterous fighter who loves the heat of combat and the camaraderie of his fellow Resonators. Brant fights with his whole heart, loud and proud.",
    whyMatch: "ESFP: The Entertainer who loves being in the center of action. Brant's loud energy, his love of people, and his 'feel it first, think later' approach to life is pure Entertainer.",
    funFacts: ["Notoriously the loudest member of any team he joins", "His battle cry is reportedly audible from 300 meters", "Despite his volume, he's surprisingly perceptive about others' feelings"]
  },
  {
    name: "Zani",
    mbti: "ENFP",
    element: "Electro",
    weapon: "Rectifier",
    rarity: 5,
    role: "Support",
    version: "2.1",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/zani/splash-art.png",
    lore: "An energetic innovator who experiments freely with her resonance abilities and sparks ideas in everyone around her. Zani approaches every problem with a burst of creative enthusiasm.",
    whyMatch: "ENFPs thrive in possibility space — creative, warm, and endlessly curious. Zani's inventive spirit, her empathy, and her love of sparking new ideas in others are hallmark ENFP.",
    funFacts: ["She keeps a notebook of 'wild ideas' that actually work", "Her laugh is used as ambient sound in her domain", "She once solved an engineering problem by accident while daydreaming"]
  },

  // === VERSION 2.2 ===
  {
    name: "Cantarella",
    mbti: "INFJ",
    element: "Havoc",
    weapon: "Sword",
    rarity: 5,
    role: "DPS",
    version: "2.2",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/cantarella/splash-art.png",
    lore: "A poised and enigmatic figure who moves through chaos with an air of knowing inevitability. Cantarella sees outcomes before they happen, acting on a quiet inner certainty.",
    whyMatch: "INFJs are rare mystic-visionaries. Cantarella's serene precision, her sense of prophetic purpose, and her quiet intensity in the face of chaos are the INFJ archetype embodied.",
    funFacts: ["Her ability seems to bend probability itself", "Other characters find her unsettling due to how calm she always is", "She has never been wrong about a prediction in recorded lore"]
  },
  {
    name: "Phoebe (Reprise)",
    mbti: "ENFJ",
    element: "Spectro",
    weapon: "Rectifier",
    rarity: 5,
    role: "Support",
    version: "2.2",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/phoebe/splash-art.png",
    lore: "Returning in a new context, Phoebe continues her journey of guiding others toward healing and light.",
    whyMatch: "The ENFJ's journey deepens — finding how to lead when your own foundation is tested.",
    funFacts: ["Her second story arc explores emotional vulnerability", "She learns to receive care as well as give it", "Her resonance grows measurably stronger through connection"]
  },

  // === VERSION 2.3 ===
  {
    name: "Layla",
    mbti: "ISFJ",
    element: "Glacio",
    weapon: "Sword",
    rarity: 4,
    role: "Support",
    version: "2.3",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/layla/splash-art.png",
    lore: "A quiet and devoted companion who watches over others from the shadows, sacrificing her own comfort to ensure those she cares about remain safe.",
    whyMatch: "ISFJs are Defenders — deeply caring, quietly strong, and endlessly devoted. Layla's protective nature and humble dedication to others are the Defender made manifest.",
    funFacts: ["Her shield mechanics reflect her personality perfectly", "She blushes when thanked for her help", "Has been documented putting others' needs before her own even in dangerous situations"]
  },
  {
    name: "Rixia",
    mbti: "ISTP",
    element: "Havoc",
    weapon: "Sword",
    rarity: 5,
    role: "DPS",
    version: "2.3",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/rixia/splash-art.png",
    lore: "A shadow operative with razor-sharp instincts and a cold, efficient approach to every mission. Rixia leaves no trace and wastes no motion.",
    whyMatch: "ISTP: The Virtuoso is best with tools and best under pressure. Rixia's calm efficiency, mechanical precision, and independent problem-solving are ISTPs in peak form.",
    funFacts: ["Her shadow abilities leave no physical trace in combat", "She has completed missions her handlers thought were impossible", "Reportedly built her own blade from scratch during a mission"]
  },

  // === VERSION 3.0 ===
  {
    name: "Rover (Aero - Rinascita)",
    mbti: "INFP",
    element: "Aero",
    weapon: "Sword",
    rarity: 5,
    role: "DPS",
    version: "3.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/others/splash-art/Rover-Sword.png",
    lore: "As the Rover enters the world of Rinascita, new memories surface and new bonds form. Their identity continues to evolve, shaped by every person and place they encounter.",
    whyMatch: "The INFP's journey is never complete — always growing, always seeking meaning. Rover's ongoing quest for identity and connection perfectly mirrors the Mediator's inner life.",
    funFacts: ["Rinascita storyline adds significant new lore for the Rover", "Their resonance form continues to evolve", "NPCs in Rinascita describe them as 'someone searching for themselves'"]
  },
  {
    name: "Cartethyia",
    mbti: "INTP",
    element: "Aero",
    weapon: "Gauntlets",
    rarity: 5,
    role: "DPS",
    version: "3.0",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/cartethyia/splash-art.png",
    lore: "An ancient and brilliant being who views the world with detached intellectual fascination. Cartethyia analyzes everything — including human emotion — as a complex system to be understood.",
    whyMatch: "INTPs are Logicians who live in their own abstract worlds. Cartethyia's vast knowledge, her cool analytical lens on reality, and her occasional bewilderment at human irrationality are pure INTP.",
    funFacts: ["Her memory spans millennia of observed history", "She has been known to pause in battle to analyze an interesting phenomenon", "Her battle commentary sounds like academic narration"]
  },

  // === VERSION 3.1 ===
  {
    name: "Lupa",
    mbti: "ESTP",
    element: "Fusion",
    weapon: "Broadblade",
    rarity: 5,
    role: "DPS",
    version: "3.1",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/lupa/splash-art.png",
    lore: "A fierce warrior-leader who commands through raw power and magnetic force of will. Lupa charges headfirst into every challenge and drags victory along with her.",
    whyMatch: "ESTPs are bold, action-first entrepreneurs. Lupa's explosive combat instincts, her natural dominance, and her read-and-react leadership style embody the Entrepreneur archetype.",
    funFacts: ["Said to have challenged a Tacet Discord just for the practice", "Her battle strategy is described as 'controlled aggression'", "Fiercely protective of those she considers part of her pack"]
  },

  // === VERSION 3.2 ===
  {
    name: "Phrolova",
    mbti: "INTJ",
    element: "Glacio",
    weapon: "Rectifier",
    rarity: 5,
    role: "Support DPS",
    version: "3.2",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/phrolova/splash-art.png",
    lore: "A methodical and enigmatic commander who executes long-range plans with invisible precision. Phrolova has played chess with fate for years and always seems to be winning.",
    whyMatch: "INTJ: The Architect who builds victories in their mind before they happen on the battlefield. Phrolova's hidden depth, strategic brilliance, and cold precision are unmistakably INTJ.",
    funFacts: ["She reportedly prepared for her current mission three years in advance", "Colleagues rarely understand her plans until they've already succeeded", "Known to give cryptic hints that only make sense in retrospect"]
  },
  {
    name: "Brant (Variant)",
    mbti: "ESFP",
    element: "Fusion",
    weapon: "Broadblade",
    rarity: 5,
    role: "DPS",
    version: "3.2",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/brant/splash-art.png",
    lore: "See Brant (2.1). Returning with evolved combat abilities and a deeper story context.",
    whyMatch: "Brant's ESFP nature is fully explored — his love for people, his need for action, and his surprising emotional depth revealed.",
    funFacts: ["His bond with his team deepens significantly in this arc", "New abilities show a more refined combat style", "His story reveals why he fights so loudly: to keep fear quiet"]
  },

  // === VERSION 3.3 ===
  {
    name: "Phoebe (Enlightened)",
    mbti: "ENFJ",
    element: "Spectro",
    weapon: "Rectifier",
    rarity: 5,
    role: "Support",
    version: "3.3",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/phoebe/splash-art.png",
    lore: "In her most evolved form, Phoebe has found true balance between her gift to inspire others and her own inner truth. She leads now not just with warmth but with wisdom.",
    whyMatch: "The fully realized ENFJ — a leader who has learned that true inspiration comes from genuine self-knowledge, not performance. Phoebe at her greatest.",
    funFacts: ["This form represents her canonical 'awakening' moment", "Her resonance power has grown to affect large areas", "Characters across the story remark that something fundamental about her has shifted"]
  },
  {
    name: "Cartethyia (Ascended)",
    mbti: "INTP",
    element: "Aero",
    weapon: "Gauntlets",
    rarity: 5,
    role: "DPS",
    version: "3.3",
    image: "https://cdn.wanderer.moe/wuthering-waves/characters/cartethyia/splash-art.png",
    lore: "In her ascended state, Cartethyia has integrated eons of knowledge into a unified understanding that transcends her former detachment. She acts now with insight and purpose.",
    whyMatch: "The INTP's highest potential: where abstract understanding becomes applied wisdom. Cartethyia ascended represents the Logician who finally decided to act on what they know.",
    funFacts: ["Her awakening is described as 'the universe talking to itself'", "She begins forming genuine emotional bonds in this arc", "Her combat now feels like it operates on a different dimensional level"]
  }
];

// --- MBTI COMPATIBILITY MAP (character to MBTI) ---
// For matching: we find the character whose MBTI matches the user's result.
// If multiple match, we pick the highest rarity or most iconic.
const mbtiPrimaryCharacter = {
  INTJ: "Yinlin",
  INTP: "Cartethyia",
  ENTJ: "Carlotta",
  ENTP: "Aalto",
  INFJ: "Jinhsi",
  INFP: "Camellya",
  ENFJ: "Phoebe",
  ENFP: "Encore",
  ISTJ: "Jiyan",
  ISFJ: "Baizhi",
  ESTJ: "Taoqi",
  ESFJ: "Roccia",
  ISTP: "Danjin",
  ISFP: "Zhezhi",
  ESTP: "Changli",
  ESFP: "Chixia"
};
