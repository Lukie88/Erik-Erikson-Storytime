// ---- Data model ----
const stages = [
  {
    id: 1,
    name: "Trust vs Mistrust",
    ageRange: "0–1 year",
    scene: "Baby Leo is born on June 19, 2015. His parents both work long hours as bankers. They must decide how to care for him.",
    choices: [
      {
        text: "The mother retires and cares for Leo full-time.",
        outcome: "Leo's needs are met consistently. He learns that people will come when he cries, building a sense of trust.",
        effects: { trust: 2, self: 0, rel: 1 }
      },
      {
        text: "They hire a warm, stable caregiver.",
        outcome: "Leo forms a secure bond with the caregiver, but feels a little distant from his parents. He mostly learns that others can be trusted.",
        effects: { trust: 1, self: 0, rel: 0 }
      },
      {
        text: "They keep working and leave Leo alone for long hours.",
        outcome: "Leo is often hungry and cries without comfort. He starts to feel the world is unpredictable and people cannot be relied on.",
        effects: { trust: -2, self: 0, rel: -1 }
      }
    ]
  }
  // TODO: add stages 2–8 later
];

// ---- Game state ----
let currentStageIndex = 0;
let stats = {
  trust: 0,
  self: 0,
  rel: 0
};

// ---- DOM references ----
const stageTitleEl = document.getElementById("stage-title");
const stageAgeEl = document.getElementById("stage-age");
const sceneTextEl = document.getElementById("scene-text");
const choicesEl = document.getElementById("choices");
const outcomeSectionEl = document.getElementById("outcome");
const outcomeTextEl = document.getElementById("outcome-text");
const nextBtnEl = document.getElementById("next-btn");
const summarySectionEl = document.getElementById("summary");
const summaryTextEl = document.getElementById("summary-text");
const trustEl = document.getElementById("stat-trust");
const selfEl = document.getElementById("stat-self");
const relEl = document.getElementById("stat-rel");

// ---- Rendering functions ----
function updateStatsDisplay() {
  trustEl.textContent = stats.trust;
  selfEl.textContent = stats.self;
  relEl.textContent = stats.rel;
}

function renderStage() {
  // if we've passed the last stage, show summary
  if (currentStageIndex >= stages.length) {
    showSummary();
    return;
  }

  const stage = stages[currentStageIndex];

  stageTitleEl.textContent = `Stage ${stage.id}: ${stage.name}`;
  stageAgeEl.textContent = stage.ageRange;
  sceneTextEl.textContent = stage.scene;

  // clear old choices
  choicesEl.innerHTML = "";
  outcomeSectionEl.classList.add("hidden");

  stage.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.addEventListener("click", () => handleChoice(choice));
    choicesEl.appendChild(btn);
  });

  updateStatsDisplay();
}

function handleChoice(choice) {
  // update stats
  stats.trust += choice.effects.trust;
  stats.self += choice.effects.self;
  stats.rel += choice.effects.rel;
  updateStatsDisplay();

  // show outcome
  outcomeTextEl.textContent = choice.outcome;
  outcomeSectionEl.classList.remove("hidden");

  // disable further choices for this stage
  Array.from(choicesEl.children).forEach(btn => (btn.disabled = true));
}

function showSummary() {
  document.getElementById("game").classList.add("hidden");
  summarySectionEl.classList.remove("hidden");

  // simple thresholds; tweak later
  const score = stats.trust + stats.self + stats.rel;
  let summary;

  if (score >= 6) {
    summary =
      "Leo looks back on a life where he generally trusted others, felt capable, and built close relationships. He feels mostly satisfied and at peace.";
  } else if (score >= 0) {
    summary =
      "Leo's life had both strengths and struggles. He can see moments of courage and connection, but also some regrets about missed chances.";
  } else {
    summary =
      "Leo often felt unsure about himself and distant from others. In old age he wishes things had been different, and reflects on how early experiences shaped his path.";
  }

  summaryTextEl.textContent = summary;
}

// go to next stage when Next button clicked
nextBtnEl.addEventListener("click", () => {
  currentStageIndex++;
  renderStage();
});

// start game on load
document.addEventListener("DOMContentLoaded", renderStage);

