
const INTRO = {
  title: "Welcome",
  body: [
    "In this interactive game, you will be controlling the life of “Leo” and his journey from womb to tomb. Through a series of choices, you are free to decide how he leads his life.",
    "Built upon Freud’s psychosexual stages, Erikson’s eight psychosocial stages of development show how childhood influences, experiences, and social dynamics shape personality, relationships, and a sense of meaning. Each stage builds on the previous one, and unresolved conflicts can affect later development.",
    "There are 8 main life stages. In each stage, you will face conflicts with 2–3 choices. Your choices affect three internal traits: Trust, Self‑Esteem, and Relationships. The outcome of Leo’s life depends on cumulative choices, not a single decision.",
    "All three traits start at 0."
  ],
};

const STAGES = [
  {
    id: 1,
    name: "Trust vs Mistrust",
    ageRange: "Infancy (0–1)",
    intro: "Baby Leo is born on June 19, 2025. His mother and father both have demanding jobs as bankers, which leaves them with little time at home. Rich in money but poor in time, they struggle to care for him consistently. They care for Leo, but must decide how day‑to‑day care will work during his first year.",
    conflicts: [
      {
        id: "1-1",
        prompt: "How will Leo be cared for most of the time?",
        choices: [
          {
            label: "Mother retires and cares for Leo",
            outcome:
              "Although passionate about her job, Leo’s mother decides to step down. Leo receives consistent attention and comfort. Responsive care helps him feel safe and secure.",
            effects: { trust: 2, self: 0, rel: 1 },
            next: "end"
          },
          {
            label: "Hire a caregiver",
            outcome:
              "Leo’s parents decide that someone else will meet his needs most of the day. The quality of care depends on who is hired.",
            effects: { trust: 0, self: 0, rel: 0 },
            next: "1-2"
          },
          {
            label: "Remain status quo (parents are mostly absent)",
            outcome:
              "Leo is often left without comfort when he needs it. Over time, he learns that care can feel inconsistent and unpredictable, and he becomes wary of relying on others.",
            effects: { trust: -2, self: 0, rel: -1 },
            next: "end"
          }
        ],
      },
      {
        id: "1-2",
        prompt: "What kind of caregiver do you hire?",
        choices: [
          {
            label: "Highly qualified caregiver ($100/hr)",
            outcome:
              "Leo’s needs are met by a stable, attentive caregiver. He forms a strong bond with the caregiver, but his connection to his parents is weaker.",
            effects: { trust: 1, self: 0, rel: 0 },
            next: "end"
          },
          {
            label: "Cheaper caregiver ($20/hr)",
            outcome:
              "Care becomes inconsistent. Some days Leo is comforted; other days his needs are missed. He becomes more anxious in unfamiliar situations.",
            effects: { trust: -1, self: 0, rel: -1 },
            next: "end"
          }
        ],
      }
    ],
    summary:
      "Leo’s first year shapes whether he expects the world to be reliable and supportive, or unpredictable and uncertain.",
  },

  {
    id: 2,
    name: "Autonomy vs Shame and Doubt",
    ageRange: "Toddlerhood (1–3)",
    intro:
      "As a toddler, Leo learns through trial and error. He wants to explore, make small choices, and try tasks on his own. How adults respond—especially when he makes mistakes—shapes whether he feels capable or begins to doubt himself.",
    conflicts: [
      {
        id: "2-1",
        prompt: "How does Leo learn day‑to‑day independence (clothes, toys, basic routines)?",
        choices: [
          {
            label: "Encouraged with patience and guidance",
            outcome:
              "Leo is allowed to try tasks safely. Adults guide him calmly when he struggles instead of taking over immediately. Leo feels proud of his efforts.",
            effects: { trust: 1, self: 2, rel: 0 },
            next: "2-2"
          },
          {
            label: "Overcontrolled and pressured",
            outcome:
              "Adults often step in because it’s faster or cleaner. Leo is corrected quickly and rarely gets to try tasks on his own. He becomes hesitant and unsure.",
            effects: { trust: 0, self: -1, rel: 0 },
            next: "2-2"
          },
          {
            label: "Little guidance or support",
            outcome:
              "Leo is often left to figure things out without reassurance or structure. He becomes frustrated and avoids trying new tasks.",
            effects: { trust: -1, self: -2, rel: 0 },
            next: "2-2"
          }
        ]
      },
      {
        id: "2-2",
        prompt: "Conflict: Toilet training — how is it handled?",
        choices: [
          {
            label: "Patient, step‑by‑step training",
            outcome:
              "Potty training is introduced gradually. Accidents are handled calmly. Leo learns at his own pace and feels confident that mistakes are part of learning.",
            effects: { trust: 1, self: 2, rel: 0 },
            next: "end"
          },
          {
            label: "Rushed and pressure‑focused training",
            outcome:
              "Adults expect Leo to learn quickly and respond harshly to accidents. Potty training becomes stressful, and Leo begins to doubt his abilities.",
            effects: { trust: 0, self: -1, rel: 0 },
            next: "end"
          },
          {
            label: "Inconsistent / unstructured training",
            outcome:
              "There is little routine or guidance. Leo becomes unsure what is expected and feels confused, delaying his independence.",
            effects: { trust: -1, self: -2, rel: 0 },
            next: "end"
          }
        ]
      }
    ],
    summary:
      "During toddlerhood, Leo learns whether trying new things leads to confidence—or to shame and self‑doubt.",
  },

  {
    id: 3,
    name: "Initiative vs Guilt",
    ageRange: "Early Childhood (3–6)",
    intro:
      "Leo is now old enough to plan activities, ask questions, and explore through play. In preschool, he initiates games and wonders how things work. How adults respond to his curiosity shapes whether he feels confident taking action or guilty for wanting to try new things.",
    conflicts: [
      {
        id: "3-1",
        prompt: "When Leo asks questions and tries new ideas at preschool, how do adults respond?",
        choices: [
          {
            label: "Encourage curiosity and exploration",
            outcome:
              "Adults engage with Leo’s questions and support learning through play. Leo becomes more willing to start activities and take on small challenges.",
            effects: { trust: 0, self: 2, rel: 1 },
            next: "end"
          },
          {
            label: "Mixed responses (some supportive, some dismissive)",
            outcome:
              "Leo sometimes feels encouraged, but sometimes feels like his curiosity is unwelcome. He continues exploring, but with hesitation.",
            effects: { trust: 0, self: 1, rel: 0 },
            next: "end"
          },
          {
            label: "Discourage questions and initiative",
            outcome:
              "Leo is frequently told to stop asking questions. He starts to associate initiative with guilt and becomes quieter and less willing to start activities.",
            effects: { trust: 0, self: -2, rel: -1 },
            next: "end"
          }
        ]
      }
    ],
    summary:
      "In early childhood, Leo learns whether initiative leads to confidence—or guilt.",
  },

  {
    id: 4,
    name: "Industry vs Inferiority",
    ageRange: "School Age (6–12)",
    intro:
      "Leo completes preschool and enters elementary school. His school is highly competitive and comparison‑driven. Instead of focusing on what he enjoys, he feels constant pressure to perform. How this environment is handled shapes whether Leo develops competence or feels inferior.",
    conflicts: [
      {
        id: "4-1",
        prompt: "What happens as Leo struggles in a cut‑throat school environment?",
        choices: [
          {
            label: "Transfer to a school that supports curiosity and growth",
            outcome:
              "Leo moves to an environment that encourages exploration while balancing academics. He learns that challenges are part of learning and becomes more confident in his abilities.",
            effects: { trust: 1, self: 2, rel: 1 },
            next: "end"
          },
          {
            label: "Stay at the current school",
            outcome:
              "Leo feels like everyone is smarter and that he can’t improve. When he asks questions, he is dismissed, so he stops trying. He begins to feel inferior.",
            effects: { trust: -1, self: -2, rel: -1 },
            next: "end"
          }
        ]
      }
    ],
    summary:
      "School age experiences shape whether Leo feels capable and hardworking—or inferior and discouraged.",
  },

  {
    id: 5,
    name: "Identity vs Role Confusion",
    ageRange: "Adolescence (12–18)",
    intro:
      "Leo enters adolescence and begins questioning who he is, where he belongs, and what values matter to him. Although intelligent, he lacks direction and motivation. He has switched schools, had conflicts with peers, and moved between groups without finding a stable sense of belonging.",
    conflicts: [
      {
        id: "5-1",
        prompt: "How does Leo respond to his identity struggle?",
        choices: [
          {
            label: "Actively explore interests and roles (clubs, teams, activities)",
            outcome:
              "Leo joins activities like band, robotics, sports, or art and reflects on what genuinely interests him. He begins to understand his strengths and values and becomes more confident expressing himself.",
            effects: { trust: 0, self: 2, rel: 1 },
            next: "end"
          },
          {
            label: "Conform to fit in",
            outcome:
              "Leo chooses roles mainly to gain acceptance, even if they don’t match his interests. He gains short‑term approval but feels conflicted and unsure of who he is.",
            effects: { trust: 0, self: -1, rel: 0 },
            next: "end"
          },
          {
            label: "Withdraw and isolate",
            outcome:
              "Leo avoids groups and keeps to himself. Without exploration, his sense of identity stays unclear and he becomes more isolated.",
            effects: { trust: 0, self: -2, rel: -1 },
            next: "end"
          }
        ]
      }
    ],
    summary:
      "Adolescence is where Leo either actively shapes identity—or becomes stuck in confusion.",
  },

  {
    id: 6,
    name: "Intimacy vs Isolation",
    ageRange: "Young Adulthood (18–40)",
    intro:
      "Leo enters young adulthood and forms deeper connections outside of his family. He meets friends and considers long‑term relationships, while also facing pressure to focus on career and independence. How he balances work and relationships shapes intimacy—or isolation.",
    conflicts: [
      {
        id: "6-1",
        type: "slider",
        prompt: "Move the slider: How much does Leo prioritize Work vs Relationships?",
        slider: { min: 0, max: 100, start: 50, leftLabel: "Work", rightLabel: "Relationships" },
        outcomes: [
          {
            range: [0, 34],
            title: "Work‑dominated life",
            outcome:
              "Leo devotes most of his time to career. He becomes professionally successful, but emotionally strained. Over time, friendships fade and family connections weaken.",
            effects: { trust: 0, self: 1, rel: -2 }
          },
          {
            range: [35, 65],
            title: "Balanced life",
            outcome:
              "Leo maintains a stable career while making time for friends and close connections. He builds lasting relationships without losing independence.",
            effects: { trust: 0, self: 1, rel: 2 }
          },
          {
            range: [66, 100],
            title: "Relationship‑dominated life",
            outcome:
              "Leo prioritizes family and friends above career. He feels emotionally connected, but his career path and financial independence feel less stable.",
            effects: { trust: 0, self: -1, rel: 2 }
          }
        ],
        next: "end"
      }
    ],
    summary:
      "Young adulthood tests whether Leo can build close relationships—or becomes isolated.",
  },

  {
    id: 7,
    name: "Generativity vs Stagnation",
    ageRange: "Midlife (40–65)",
    intro:
      "Leo enters midlife and reflects on whether his life feels meaningful. He asks whether he has contributed to others, supported the next generation, and built something lasting. His earlier identity and relationships make this easier—or harder.",
    conflicts: [
      {
        id: "7-1",
        prompt: "How does Leo respond to questions of purpose and meaning?",
        choices: [
          {
            label: "Generativity: contribute and mentor",
            outcome:
              "Leo invests time in family, mentors younger people, and uses his skills to help others. He feels a strong sense of purpose and believes his actions shape the future.",
            effects: { trust: 0, self: 1, rel: 2 },
            next: "end"
          },
          {
            label: "Distraction and status‑seeking",
            outcome:
              "Leo chases excitement and external validation. The bursts feel good briefly, but don’t create lasting fulfillment, and his sense of meaning stays uncertain.",
            effects: { trust: 0, self: -1, rel: -1 },
            next: "end"
          },
          {
            label: "Stagnation: withdraw from growth",
            outcome:
              "Leo avoids new responsibilities and becomes emotionally distant. Without contribution or purpose, he feels stuck and disconnected.",
            effects: { trust: 0, self: -1, rel: -2 },
            next: "end"
          }
        ]
      }
    ],
    summary:
      "Midlife is where Leo either contributes beyond himself—or feels stuck in stagnation.",
  },

  {
    id: 8,
    name: "Integrity vs Despair",
    ageRange: "Late Adulthood (65+)",
    intro:
      "Leo reaches the last years of his life. He cannot change the past, but he can reflect on it—cherishing his experiences or lamenting missed opportunities. He asks: Was my life meaningful? Can I accept my life, including its flaws?",
    conflicts: [
      {
        id: "8-1",
        type: "evaluation",
        prompt: "Let’s find out how Leo views his life.",
        next: "end"
      }
    ],
    summary:
      "In late adulthood, Leo either accepts life with peace—or becomes overwhelmed by regret.",
  }
];

// ---------- Game State ----------
const state = {
  trust: 0,
  self: 0,
  rel: 0,
  stageIndex: -1, // -1 = intro
  conflictId: null,
  pendingOutcome: null,
  history: [],
};

const el = {
  screen: document.getElementById("screen"),
  trustVal: document.getElementById("trustVal"),
  selfVal: document.getElementById("selfVal"),
  relVal: document.getElementById("relVal"),
  progressText: document.getElementById("progressText"),
  restartBtn: document.getElementById("restartBtn"),
};

function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function updateStatsUI(){
  el.trustVal.textContent = String(state.trust);
  el.selfVal.textContent  = String(state.self);
  el.relVal.textContent   = String(state.rel);
}

function fmtDelta(n){
  if (!n) return "0";
  return (n > 0 ? `+${n}` : `${n}`);
}

function deltasToBadges(effects){
  const parts = [];
  if (!effects) return parts;
  const map = [
    ["Trust", effects.trust ?? 0],
    ["Self‑Esteem", effects.self ?? 0],
    ["Relationships", effects.rel ?? 0],
  ];
  for (const [name, val] of map){
    if (val === 0) continue;
    parts.push({ name, val });
  }
  return parts;
}

function applyEffects(effects){
  if (!effects) return;
  state.trust += effects.trust ?? 0;
  state.self  += effects.self  ?? 0;
  state.rel   += effects.rel   ?? 0;
  updateStatsUI();
}

function stageByIndex(idx){ return STAGES[idx]; }

function findConflict(stage, conflictId){
  return stage.conflicts.find(c => c.id === conflictId) ?? null;
}

function setProgressText(){
  if (state.stageIndex < 0){
    el.progressText.textContent = `Intro • Stages: ${STAGES.length}`;
    return;
  }
  const st = stageByIndex(state.stageIndex);
  el.progressText.textContent = `Stage ${st.id}/8 • ${st.name} • ${st.ageRange}`;
}

// ---------- Rendering ----------
function renderIntro(){
  state.stageIndex = -1;
  state.conflictId = null;
  state.pendingOutcome = null;
  setProgressText();
  updateStatsUI();

  el.screen.innerHTML = `
    <div class="h1">${INTRO.title}</div>
    <div class="h2">Read this once, then start.</div>
    ${INTRO.body.map(p => `<p class="p">${escapeHtml(p)}</p>`).join("")}
    <div class="hr"></div>
    <div class="choices">
      <button class="primary" id="startBtn">Start Leo’s Life</button>
    </div>
  `;
  document.getElementById("startBtn").addEventListener("click", () => {
    state.stageIndex = 0;
    state.conflictId = STAGES[0].conflicts[0].id;
    renderStage();
  });
}

function renderStage(){
  setProgressText();
  updateStatsUI();

  const st = stageByIndex(state.stageIndex);

  // If stage 8 evaluation: show ending immediately based on totals.
  if (st.id === 8 && state.conflictId === "end"){
    renderEnding();
    return;
  }

  // If we're at the end marker, show summary and continue.
  if (state.conflictId === "end"){
    renderStageSummary(st);
    return;
  }

  const conflict = findConflict(st, state.conflictId) ?? st.conflicts[0];

  // If we have a pending outcome (after choosing), show it with Continue.
  if (state.pendingOutcome){
    const { title, text, effects, next } = state.pendingOutcome;
    const badges = deltasToBadges(effects);
    el.screen.innerHTML = `
      <div class="h1">Stage ${st.id}: ${escapeHtml(st.name)}</div>
      <div class="h2">${escapeHtml(st.ageRange)}</div>

      <div class="outcomeBox">
        ${title ? `<div class="badgeRow"><span class="badge">${escapeHtml(title)}</span></div>` : ""}
        <p class="p">${escapeHtml(text)}</p>

        ${badges.length ? `
          <div class="badgeRow">
            ${badges.map(b => {
              const cls = b.val > 0 ? "good" : "bad";
              return `<span class="badge"><span class="delta ${cls}">${escapeHtml(b.name)} ${fmtDelta(b.val)}</span></span>`;
            }).join("")}
          </div>
        ` : `<div class="badgeRow"><span class="badge">No stat change</span></div>`}
      </div>

      <div class="choices">
        <button class="primary" id="continueBtn">Continue</button>
      </div>
    `;
    document.getElementById("continueBtn").addEventListener("click", () => {
      state.pendingOutcome = null;
      state.conflictId = next ?? "end";
      renderStage();
    });
    return;
  }

  // Evaluation conflict for stage 8
  if (conflict.type === "evaluation"){
    el.screen.innerHTML = `
      <div class="h1">Stage ${st.id}: ${escapeHtml(st.name)}</div>
      <div class="h2">${escapeHtml(st.ageRange)}</div>
      <p class="p">${escapeHtml(st.intro)}</p>
      <div class="hr"></div>
      <div class="h2">${escapeHtml(conflict.prompt)}</div>
      <div class="choices">
        <button class="primary" id="evalBtn">Reveal Leo’s Ending</button>
      </div>
    `;
    document.getElementById("evalBtn").addEventListener("click", () => {
      state.conflictId = "end";
      renderStage();
    });
    return;
  }

  // Slider conflict
  if (conflict.type === "slider"){
    renderSliderConflict(st, conflict);
    return;
  }

  // Regular multiple-choice conflict
  el.screen.innerHTML = `
    <div class="h1">Stage ${st.id}: ${escapeHtml(st.name)}</div>
    <div class="h2">${escapeHtml(st.ageRange)}</div>
    <p class="p">${escapeHtml(st.intro)}</p>

    <div class="hr"></div>
    <div class="h2">${escapeHtml(conflict.prompt)}</div>

    <div class="choices" id="choiceList"></div>
  `;

  const choiceList = document.getElementById("choiceList");
  for (const choice of conflict.choices){
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      // Apply effects now
      applyEffects(choice.effects);

      // record
      state.history.push({
        stage: st.id,
        conflict: conflict.id,
        choice: choice.label,
        effects: choice.effects
      });

      // show outcome screen
      state.pendingOutcome = {
        title: null,
        text: choice.outcome,
        effects: choice.effects,
        next: choice.next
      };
      renderStage();
    });
    choiceList.appendChild(btn);
  }
}

function renderSliderConflict(stage, conflict){
  const s = conflict.slider;
  el.screen.innerHTML = `
    <div class="h1">Stage ${stage.id}: ${escapeHtml(stage.name)}</div>
    <div class="h2">${escapeHtml(stage.ageRange)}</div>
    <p class="p">${escapeHtml(stage.intro)}</p>

    <div class="hr"></div>
    <div class="h2">${escapeHtml(conflict.prompt)}</div>

    <div class="sliderWrap">
      <div class="sliderLabels">
        <span>${escapeHtml(s.leftLabel)}</span>
        <span>${escapeHtml(s.rightLabel)}</span>
      </div>
      <input id="slider" type="range" min="${s.min}" max="${s.max}" value="${s.start}" />
      <div class="badgeRow">
        <span class="badge">Value: <span id="sliderVal">${s.start}</span></span>
      </div>
    </div>

    <div class="choices">
      <button class="primary" id="confirmSlider">Confirm</button>
    </div>
  `;

  const slider = document.getElementById("slider");
  const sliderVal = document.getElementById("sliderVal");
  slider.addEventListener("input", () => sliderVal.textContent = slider.value);

  document.getElementById("confirmSlider").addEventListener("click", () => {
    const v = Number(slider.value);
    const outcome = conflict.outcomes.find(o => v >= o.range[0] && v <= o.range[1]) ?? conflict.outcomes[1];

    applyEffects(outcome.effects);

    state.history.push({
      stage: stage.id,
      conflict: conflict.id,
      choice: `${outcome.title} (slider=${v})`,
      effects: outcome.effects
    });

    state.pendingOutcome = {
      title: outcome.title,
      text: outcome.outcome,
      effects: outcome.effects,
      next: conflict.next ?? "end"
    };
    renderStage();
  });
}

function renderStageSummary(stage){
  const isLast = stage.id === 8;
  el.screen.innerHTML = `
    <div class="h1">Stage ${stage.id} Complete</div>
    <div class="h2">${escapeHtml(stage.name)} • ${escapeHtml(stage.ageRange)}</div>
    <p class="p">${escapeHtml(stage.summary)}</p>
    <div class="hr"></div>
    <div class="choices">
      <button class="primary" id="nextStageBtn">${isLast ? "View Ending" : "Next Stage"}</button>
    </div>
  `;

  document.getElementById("nextStageBtn").addEventListener("click", () => {
    if (isLast){
      renderEnding();
      return;
    }
    state.stageIndex = clamp(state.stageIndex + 1, 0, STAGES.length - 1);
    state.conflictId = STAGES[state.stageIndex].conflicts[0].id;
    renderStage();
  });
}

function renderEnding(){
  setProgressText();
  updateStatsUI();

  const total = state.trust + state.self + state.rel;

  let endingTitle, endingText;

  if (total >= 6){
    endingTitle = "Ending 1: Integrity";
    endingText =
      "Leo reflects on life with a sense of peace. He recognizes both successes and failures, but accepts them as part of a meaningful journey. He values the relationships he built and the ways he contributed to others, and shares insight and wisdom with the next generation.";
  } else if (total >= -5){
    endingTitle = "Ending 2: Mixed Reflection";
    endingText =
      "Leo looks back with mixed feelings—moments of contentment alongside regrets. He wonders how life might have changed with different choices, yet he still sees meaning in parts of his journey. While not fully at peace, he learns to accept his life as it is.";
  } else {
    endingTitle = "Ending 3: Despair";
    endingText =
      "Leo struggles to find meaning in much of his past. He focuses on missed opportunities and feels disconnected from others. Loneliness and regret weigh heavily, and he views his life as a painful reminder of unrealized potential.";
  }

  el.screen.innerHTML = `
    <div class="h1">${escapeHtml(endingTitle)}</div>
    <div class="h2">Final Score: ${total} (Trust ${state.trust}, Self‑Esteem ${state.self}, Relationships ${state.rel})</div>
    <p class="p">${escapeHtml(endingText)}</p>

    <div class="hr"></div>
    <div class="badgeRow">
      <span class="badge">Tip: Your ending depends on cumulative choices across stages.</span>
    </div>

    <div class="choices">
      <button class="primary" id="playAgainBtn">Play Again</button>
    </div>
  `;
  document.getElementById("playAgainBtn").addEventListener("click", resetGame);
}

function resetGame(){
  state.trust = 0;
  state.self = 0;
  state.rel = 0;
  state.stageIndex = -1;
  state.conflictId = null;
  state.pendingOutcome = null;
  state.history = [];
  updateStatsUI();
  renderIntro();
}

// Small helper to avoid HTML injection if you paste text with quotes.
function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// ---------- boot ----------
el.restartBtn.addEventListener("click", resetGame);
resetGame();
