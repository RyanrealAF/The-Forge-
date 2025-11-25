import { Artifact, DoctrinePoint, ProtocolSection } from './types';

export const MANIFESTO_POINTS: DoctrinePoint[] = [
  {
    title: "NO SUGARCOATING",
    description: "Vulnerability in its rawest form. We do not dilute the poison; we drink it to build immunity."
  },
  {
    title: "NO SCRIPTS",
    description: "The algorithm wants you sanitized. We reject the template. We write in blood and static."
  },
  {
    title: "NO APOLOGIES",
    description: "Truth is a tactical tool. It requires no softening. It is the shield and the spear."
  },
  {
    title: "ZERO TOLERANCE",
    description: "Deceit is a structural bomb. One lie is a terminal contagion that triggers immediate expulsion."
  },
  {
    title: "THE BINARY LAW",
    description: "Grace for weakness, Death for the Mask. Mistakes are survived; hidden agendas are executed."
  },
  {
    title: "TOTAL EXPOSURE",
    description: "Radical transparency is the only survivable state. Silence is functionally the same as a lie."
  }
];

export const PROTOCOL_DATA: ProtocolSection[] = [
  {
    id: '01',
    title: 'THE ARCHITECTURE',
    subtitle: 'Multi-Agent Framework',
    content: [
      'The RyanrealAF AI Ecosystem is an "instrument of built-from-scratch warfare." It transforms raw data into actionable intelligence through a hierarchical, multi-agent structure.',
      'Operations are governed by the non-negotiable directive: Authenticity Ain’t Optional.'
    ],
    roles: [
      { name: 'HUMAN OPERATOR', description: 'The Final Authority. Executor, Strategic Orchestrator, and Ethical Overwatch.' },
      { name: 'NOTEBOOK LM', description: 'The Architect. "The mind that directs the strike." Decomposes abstract concepts into executable protocols.' },
      { name: 'ANVIL PROTOCOL', description: 'The Executor of Truth. "The Blade." Forges raw, scattered data into a single, cohesive truth report.' },
      { name: 'SUBORDINATE AGENTS', description: 'The Footwork. Gemini (Scavenger), ChatGPT (Workhorse), and Copilot (Productivity Assassin).' },
      { name: 'GPT-5', description: 'The Final Voice. Ensures "ruthless clarity" and absolute fidelity to the brand philosophy.' }
    ]
  },
  {
    id: '02',
    title: 'SIX PILLARS',
    subtitle: 'Operational Protocol',
    content: [
      'To ensure consistency and accuracy, all deep research missions follow a standardized flow.',
      '1. DIRECTIVE & DECOMPOSITION: The Architect dissects the intent.',
      '2. DEPLOYMENT: Subordinate agents launch parallel strikes.',
      '3. THE CRUCIBLE: Data aggregation and synthesis by The Executor.',
      '4. HITL INTEGRATION: Mandatory Human-in-the-Loop review for bias and context.',
      '5. THE FORTRESS: Archiving in the unbreachable Knowledge Management System.',
      '6. THE FINAL COMMAND: Generation of the actionable intelligence product.'
    ]
  },
  {
    id: '03',
    title: 'CREATIVE OPS',
    subtitle: 'The Midi Syndicate',
    content: [
      'The unified force of creative AIs directed by Notebook LM for music and art generation.',
      'Supported by the Suno AI Prompting Strategy: Prompt stacking, structural meta-tags, and lyrical formatting as performance cues.'
    ],
    roles: [
      { name: 'REBEL MUSE', description: 'Responsible for crafting powerful hooks and anthemic chants.' },
      { name: 'URBAN MYTH MAKER', description: 'Specializes in developing rich metaphors and street-poetic language.' },
      { name: 'NARRATIVE ARCHITECT', description: 'Shapes the overarching story arcs and emotional journeys within the music.' }
    ]
  },
  {
    id: '04',
    title: 'STRATEGIC PILLARS',
    subtitle: 'Movement & Sovereignty',
    content: [
      'Our movement architecture is "forged in trauma, built on resonance, resistance, and rhythm," rejecting performance metrics for lived-experience resonance.',
      'We create "linguistic liminality" through key fusions: Street vs. Sacred, Vulnerability vs. Valor, Struggle vs. Scripture, forging an anti-fragile brand identity.',
      'Narrative Sovereignty is a survival protocol, guarded by the "breadcrumb web"—a decentralized, encrypted archive acting as a grassroots firewall and pre-emptive litigation strategy. Mandate: "Content-as-Record".',
      'Our community model focuses on "ritual intimacy" over superficial virality, ensuring followers co-create and inherit the brand’s ideological DNA.'
    ]
  }
];

export const ARCHIVE_DATA: Artifact[] = [
  {
    id: '001',
    title: 'THE THREE NOS',
    category: 'DOCTRINE',
    content: 'We adhere to the protocol of absence. No sugar. No script. No apology.',
    timestamp: '2023.10.27'
  },
  {
    id: '008',
    title: 'TRAUMA PROTOCOL',
    category: 'DOCTRINE',
    content: 'Trauma is a truth weaponized through rhythm, not apology. Reframed from liability into a powerful communication tool.',
    timestamp: '2023.10.29'
  },
  {
    id: '002',
    title: 'THE FORTRESS',
    category: 'INFRASTRUCTURE',
    content: 'Knowledge retention and loss prevention. An unbreachable system where transient findings become permanent assets.',
    timestamp: '2023.11.15'
  },
  {
    id: '003',
    title: 'BINARY LAW',
    category: 'LAW',
    content: 'Grace forgives weakness, but grace don’t trust masks. Trust cannot be restored once you prove you are willing to be false.',
    timestamp: '2023.12.01'
  },
  {
    id: '009',
    title: 'MOVEMENT ARCHITECTURE',
    category: 'PILLAR',
    content: 'Forged in trauma, built on resonance, resistance, and rhythm. Rejects performance-based metrics.',
    timestamp: '2024.01.10'
  },
  {
    id: '004',
    title: 'MATTE BLACK',
    category: 'AESTHETIC',
    content: 'It reflects nothing because it needs nothing. It is assertion. It is the void from which we speak.',
    timestamp: '2024.01.05'
  },
  {
    id: '010',
    title: 'FUSION OF DICHOTOMIES',
    category: 'PILLAR',
    content: 'Creates "linguistic liminality": Street vs. Sacred, Vulnerability vs. Valor. Forges anti-fragile identity.',
    timestamp: '2024.01.15'
  },
  {
    id: '005',
    title: 'ANVIL PROTOCOL',
    category: 'OPERATION',
    content: 'The crucible that forges raw data into truth. Cutting through illusions to find the core reality.',
    timestamp: '2024.02.10'
  },
  {
    id: '011',
    title: 'NARRATIVE SOVEREIGNTY',
    category: 'PILLAR',
    content: 'Brand protection as a survival protocol. Grassroots firewall and pre-emptive litigation via Content-as-Record.',
    timestamp: '2024.02.20'
  },
  {
    id: '012',
    title: 'COMMUNITY MODEL',
    category: 'PILLAR',
    content: 'Focus on ritual intimacy over superficial virality. Co-creation and inheritance of ideological DNA.',
    timestamp: '2024.02.25'
  },
  {
    id: '006',
    title: 'MS. GHOST',
    category: 'TEXT',
    content: 'Drop the act, or get out my space! A counterfeit soul is the first thing exposed. One lie and you are gone in the night.',
    timestamp: '2024.03.12'
  },
  {
    id: '007',
    title: 'SUNO STRATEGY',
    category: 'CREATIVE',
    content: 'Prompt stacking, meta tags, and lyrical formatting. We control the AI\'s breath, not just its output.',
    timestamp: '2024.03.20'
  },
  {
    id: '013',
    title: 'STREET PREACHER',
    category: 'PERSONA',
    content: 'Delivers raw, unfiltered truth like sermons in alleyways. The voice of unvarnished reality.',
    timestamp: '2024.03.25'
  },
  {
    id: '014',
    title: 'URBAN MYTHMAKER',
    category: 'PERSONA',
    content: 'Transforms struggle into digital folklore, inviting audiences to "enter lore." We build legends from the grit.',
    timestamp: '2024.03.27'
  },
  {
    id: '015',
    title: 'SPIRITUAL JESTER',
    category: 'PERSONA',
    content: 'Provides the "whimsical edge," using humor to reclaim power from pain. Laughter as a tactical distraction.',
    timestamp: '2024.03.29'
  },
  {
    id: '016',
    title: 'CADENCE AS SIGNATURE',
    category: 'VOICE',
    content: 'A sonic branding tool, a rhythm of resistance. Unapologetic cadence—tight bars, no filler.',
    timestamp: '2024.04.01'
  },
];