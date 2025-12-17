// Erik Erikson Storytime — Life of Leo
// Uses the user's provided script as the on-screen narrative.

const $ = (id) => document.getElementById(id);

const ui = {
  screen: $("screen"),
  trust: $("trustVal"),
  self: $("selfVal"),
  rel: $("relVal"),
  stageList: $("stageList"),
  sideHint: $("sideHint"),
  progressText: $("progressText"),
  progressPct: $("progressPct"),
  progressFill: $("progressFill"),
  restartBtn: $("restartBtn"),
};

const state = {
  trust: 0,
  self: 0,
  rel: 0,
  step: "intro",
  stageIndex: -1,
  // for midlife crisis chance
  identityChoice: null, // "A" | "B" | "C"
};

function setStats(t=state.trust, s=state.self, r=state.rel){
  ui.trust.textContent = String(t);
  ui.self.textContent = String(s);
  ui.rel.textContent = String(r);
}

function applyDelta(d){
  if(!d) return;
  state.trust += (d.trust ?? 0);
  state.self  += (d.self  ?? 0);
  state.rel   += (d.rel   ?? 0);
  setStats();
}

function fmtDelta(val){
  if(val === 0 || val == null) return "0";
  return val > 0 ? `+${val}` : `${val}`;
}

function renderBadges(delta){
  const items = [];
  if(!delta) return "";
  const map = [
    ["Trust", delta.trust ?? 0],
    ["Self Esteem", delta.self ?? 0],
    ["Relationships", delta.rel ?? 0],
  ];
  for(const [name, v] of map){
    if(v === 0) continue;
    items.push(
      `<span class="badge"><span class="delta ${v>0?"good":"bad"}">${name} ${fmtDelta(v)}</span></span>`
    );
  }
  return items.length ? `<div class="badges">${items.join("")}</div>` : "";
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// ----- YOUR SCRIPT AS DATA -----
const script = {
  intro: {
    title: "Introduction",
    subtitle: "Read, then begin.",
    paragraphs: [
      "In this interactive game, you will be controlling the life of “Leo” and his journey from womb to tomb. Through a series of choices, you are free to make your own decisions on how you want him to lead his life. B",
      "Built upon Freud’s psychosexual stages, Erikson’s eight psychological stages of development demonstrate how childhood influences, experiences and social dynamics influence our choices and shape individuals' personality, relationships and sense of meaning in life. Each stage builds upon the previous one, and unresolved conflicts can affect future development.",
      "In this game, you will be able to make your own choices in controlling Baby Leo. There are 8 main life stages, each based on Erikson’s theory. In each stage, there are a couple conflicts to face with 2-3 choices per conflict. The choices you pick affect three internal traits: trust, self-esteem, and relationships. The outcome of Leo’s life is dependent on cumulative choices, not a single decision.",
      "Trust, self esteem and relationships all start at 0 when you get birthed."
    ],
    next: "s1_c1"
  },

  // Stage 1
  s1_c1: {
    stage: { num: 1, name: "Stage 1: Trust vs Mistrust (Infancy)" },
    title: "Conflict 1: How will Leo be cared for most of his time?",
    paragraphs: [
      "Baby Leo is born on June 19, 2025. His mother and father both have demanding jobs as bankers, which leaves them with little time at home. Rich in money but poor in time, they have little time to care for their child. They care for him, but they must decide how his day-to-day care will work during his first year. To combat that issue, the parents are considering three choices: the mother can retire and raise baby Leo, a caregiver is hired to raise the child, or the parents try to balance work and family."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A- Mother retires and cares for Leo",
        outcome: "Although passionate about her job, Leo’s mother makes the ultimate decision and decides to step down from her tiring job. She ensures that Leo receives consistent attention and comfort. Her constant and responsive care makes Baby Leo feel safe and secure.",
        delta: { trust: 2, rel: 1 },
        next: "s2_c2"
      },
      {
        key: "B",
        label: "Choice B- Hire a caregiver",
        outcome: "Baby Leo’s parents are so passionate about their jobs they feel it is more beneficial for his needs to be met by someone else most of the day. However, the quality of care he receives depends on who you are hired.",
        delta: null,
        next: "s1_caregiver"
      },
      {
        key: "C",
        label: "Choice C- Remain status quo (parents are absent)",
        outcome: "Baby Leo’s parents decide that he can raise himself. Often times, Baby Leo is left without comfort and food. During the day when his parents are working, he is left home alone and constantly cries, begging for attention. However, he learns that care is inconsistent and unpredictable, ultimately believing that he has no one to rely on.",
        delta: null,
        next: "s2_c2"
      }
    ]
  },

  s1_caregiver: {
    stage: { num: 1, name: "Stage 1: Trust vs Mistrust (Infancy)" },
    title: "Choice B- Hire a caregiver",
    paragraphs: [
      "Baby Leo’s parents are so passionate about their jobs they feel it is more beneficial for his needs to be met by someone else most of the day. However, the quality of care he receives depends on who you are hired."
    ],
    choices: [
      {
        key: "B1",
        label: "Choice B1- Hire a highly qualified caregiver for $100/hr",
        outcome: "Leo’s needs are consistently met by a stable and attentive caregiver. He forms a secure and strong bond with the caregiver, but his connection to his parents is lacking.",
        delta: { trust: 1 },
        next: "s2_c2"
      },
      {
        key: "B2",
        label: "Choice B2- Hire a cheaper caregiver $20/hr",
        outcome: "Baby Leo’s care is inconsistent. Some days, he responded to and comforted; other days his requests are ignored. He constantly feels anxious in strange situations and when meeting with others.",
        delta: null,
        next: "s2_c2"
      }
    ]
  },

  // Stage 2
  s2_c2: {
    stage: { num: 2, name: "Stage 2: Autonomy vs Shame/Doubt" },
    title: "Conflict 2: Toilet Training",
    paragraphs: [
      "How does baby Leo learn in this stage? Is he encouraged to try new things by himself or is he spoiled and constantly discouraged from independent actions? In this stage, how you help Leo learn determines whether he has confidence or whether he doubts himself."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A: Patient Step-by-Step Training",
        outcome: "Baby Leo’s caregiver introduces potty training one step at a time. From teaching him to independently pull down his pants to sitting on the toilet, he gradually learns at his own pace. Instead of being pressured, Leo begins to feel confident and understands that his mistakes are part of learning.",
        delta: { self: 2, trust: 1 },
        next: "s3_industry"
      },
      {
        key: "B",
        label: "Choice B: Rushed and pressured Training",
        // safety tweak: keep meaning, avoid explicit violence wording
        outcome: "Baby Leo’s caregiver expects Leo to learn quickly. Every time he has accidents, he gets scolded and harshly punished. Instead of learning at his own pace, he is forced to “succeed” and often becomes frustrated. This results in anxiousness, and he doubts his own abilities.",
        delta: { trust: 0, self: -1 },
        next: "s3_industry"
      },
      {
        key: "C",
        label: "Choice C: Inconsistent/Unstructured Training",
        outcome: "Baby Leo is given no guidance on how to potty train; he becomes unsure of what’s expected of him. He is often confused and uncertain, delaying his independence.",
        delta: { trust: -1, self: -2 },
        next: "s3_industry"
      }
    ]
  },

  // Industry vs Inferiority (as written)
  s3_industry: {
    stage: { num: 3, name: "Industry vs Inferiority" },
    title: "Conflict 3:",
    paragraphs: [
      "As Leo progresses through his education, he can independently plan activities, ask questions, and explore whatever he pleases. Leo just completed pre-school and now attends elementary school. However, his elementary school is very competitive and has a cut-throat culture. Instead of spending time doing things he enjoys such as reading and sports, he constantly must review math homework and write long essays. Dissatisfied with how his current school doesn’t suit his interests and how no adults respond to his initiatives, you must decide on a solution that you believe can help develop Leo more."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A: Transfer Leo to a different school that engages his curiosity",
        outcome: "Seeing how Leo is suffering in his current school, you decide to send him elsewhere so that he can foster his own ideas and independent thought. This school encourages play and exploration in areas of the student's interest while balancing normal school curriculum. He begins to feel more confident in his abilities and learns that challenges are a part of learning and is willing to take upon more challenges.",
        delta: { trust: 1, self: 2, rel: 1 },
        next: "s4_identity"
      },
      {
        key: "B",
        label: "Choice B: Leo remains at his current school",
        outcome: "Leo is frequently discouraged as he believes everyone is smarter than him with no chance to improve. When asking questions, teachers call him stupid and disruptive; thus, he stops asking questions and feels as if he is inferior to others. Thus, he associates initiative, and inquisitiveness with guilt. He becomes more disengaged and is unwilling to start activities on his own.",
        delta: { trust: -1, self: -2, rel: -1 },
        next: "s4_identity"
      }
    ]
  },

  // Identity vs Role Confusion
  s4_identity: {
    stage: { num: 4, name: "Identity vs Role Confusion" },
    title: "Conflict: How does Leo respond to his identity struggle?",
    paragraphs: [
      "Leo is now an adolescent, during this life changing period, he embarks on his journey of self-discovery. He begins questioning who he is, what he is a part of, and what values matter to him. Although he is intelligent, he lacks direction and motivation. He frequently changes schools, gets into conflicts with peers, and moves between different social groups without determining a strong sense of belonging."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A: Actively explores interests and roles",
        outcome: "Leo decides to join different clubs and activities such as bands, robotics, and sports. He experiments with different choices and reflects on what interests him. Through his exploration, he begins to understand his own strengths and values. Becoming more confident in his strengths, he develops intrinsic motivation and becomes more confident in expressing himself.",
        delta: { self: 3, rel: 1 },
        next: "s5_intimacy",
        onPick: () => { state.identityChoice = "A"; }
      },
      {
        key: "B",
        label: "Choice B: Conform to fit in",
        outcome: "Leo decides to join the band team even though it doesn’t reflect his true interests or values. He adopts behaviors and attitudes that make him liked by the group, but inside, he feels shallow. He sacrifices his identity for short-term social acceptance.",
        delta: { self: -1, rel: 0 },
        next: "s5_intimacy",
        onPick: () => { state.identityChoice = "B"; }
      },
      {
        key: "C",
        label: "Choice C: Withdraw and Isolate",
        outcome: "Leo becomes isolated. He refuses to communicate with his peers, teachers, and family. In class, he sits in the back corner, ignoring everyone and keeping to himself. Once school ends, he rushes home and locks himself in his room, disassociating himself with society. Because of this behavior, he avoids exploration, thus becoming estranged from others. Without proper inquiry in topics that interest him, his sense of identity is uncertain.",
        d

