// Erik Erikson Storytime — Life of Leo
// Uses the user's provided script as the on-screen narrative.

const $ = (id) => document.getElementById(id);

const ui = {
  screen: $("screen"),
  trust: $("trustVal"),
  self: $("selfVal"),
  rel: $("relVal"),
  restartBtn: $("restartBtn"),
};

const state = {
  trust: 0,
  self: 0,
  rel: 0,
  step: "intro",
  identityChoice: null, // "A" | "B" | "C"
  genOutcome: null,
};

function setStats(t = state.trust, s = state.self, r = state.rel) {
  ui.trust.textContent = String(t);
  ui.self.textContent = String(s);
  ui.rel.textContent = String(r);
}

function applyDelta(d) {
  if (!d) return;
  state.trust += d.trust ?? 0;
  state.self += d.self ?? 0;
  state.rel += d.rel ?? 0;
  setStats();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ----- SCRIPT DATA -----
const script = {
  intro: {
    title: "Introduction",
    subtitle: "Read, then begin.",
    image: "images/intro.png",
    tint: "var(--gradientIntro)",
    paragraphs: [
      "In this interactive game, you will be controlling the life of “Leo” and his journey from womb to tomb. Through a series of choices, you are free to make your own decisions on how you want him to lead his life. Built upon Freud’s psychosexual stages, Erikson’s eight psychological stages of development demonstrate how childhood influences, experiences and social dynamics influence our choices and shape individuals' personality, relationships and sense of meaning in life.",
      "You will be able to make your own choices in controlling Baby Leo to Old Leo. There are 8 main life stages, each based on Erikson’s theory. In each stage, there is a conflict to face with 2-3 choices per conflict. The choices you pick affect three internal traits: trust, self-esteem, and relationships. The outcome of Leo’s life is dependent on cumulative choices, not a single decision.",
      "Trust, self esteem and relationships all start at 0 when you get birthed."
    ],
    next: "s1_c1",
  },

  // Stage 1
  s1_c1: {
    stage: { num: 1, name: "Stage 1: Trust vs Mistrust (Infancy)" },
    title: "Conflict 1: How will Leo be cared for most of his time?",
    image: "images/stage1.png",
    tint: "var(--gradient1)",
    paragraphs: [
      "Baby Leo is born on June 19, 2025. His mother and father both have demanding jobs as bankers, which leaves them with little time at home. Rich in money but poor in time, they have little time to care for their child. They care for him, but they must decide how his day-to-day care will work during his first year. To combat that issue, the parents are considering three choices: the mother can retire and raise baby Leo, a caregiver is hired to raise the child, or the parents try to balance work and family."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A- Mother retires and cares for Leo",
        outcome: "Although passionate about her job, Leo’s mother makes the ultimate decision and decides to step down from her tiring job. She ensures that Leo receives consistent attention and comfort. Her constant and responsive care makes Baby Leo feel safe and secure.",
        delta: { trust: 2, rel: 1 },
        next: "s2_c2",
      },
      {
        key: "B",
        label: "Choice B- Hire a caregiver",
        outcome: "Baby Leo’s parents are so passionate about their jobs they feel it is more beneficial for his needs to be met by someone else most of the day. However, the quality of care he receives depends on who you hire.",
        delta: null,
        next: "s1_caregiver",
      },
      {
        key: "C",
        label: "Choice C- Remain status quo (parents are absent)",
        outcome: "Baby Leo’s parents decide that he can raise himself. Often times, Baby Leo is left without comfort and food. During the day when his parents are working, he is left home alone and constantly cries, begging for attention. However, he learns that care is inconsistent and unpredictable, ultimately believing that he has no one to rely on.",
        delta: { trust: -2, rel: -1 },
        next: "s2_c2",
      },
    ],
  },

  s1_caregiver: {
    stage: { num: 1, name: "Stage 1: Trust vs Mistrust (Infancy)" },
    title: "Choice B- Hire a caregiver",
        image: "images/stage1.png",
    tint: "var(--gradient1)",
    paragraphs: [
      "Baby Leo’s parents are so passionate about their jobs they feel it is more beneficial for his needs to be met by someone else most of the day. However, the quality of care he receives depends on who you are hired."
    ],
    choices: [
      {
        key: "B1",
        label: "Choice B1- Hire a highly qualified caregiver for $100/hr",
        outcome: "Leo’s needs are consistently met by a stable and attentive caregiver. He forms a secure and strong bond with the caregiver, but his connection to his parents is lacking.",
        delta: { trust: 1 },
        next: "s2_c2",
      },
      {
        key: "B2",
        label: "Choice B2- Hire a cheaper caregiver $20/hr",
        outcome: "Baby Leo’s care is inconsistent. Some days, he responded to and comforted; other days his requests are ignored. He constantly feels anxious in strange situations and when meeting with others.",
        delta: { trust: -2 },
        next: "s2_c2",
      },
    ],
  },

  // Stage 2
  s2_c2: {
    stage: { num: 2, name: "Stage 2: Autonomy vs Shame/Doubt" },
    title: "Conflict 2: Toilet Training",
    image: "images/stage2.png",
    tint: "var(--gradient2)",
    paragraphs: [
      "How does baby Leo learn in this stage? Is he encouraged to try new things by himself or is he spoiled and constantly discouraged from independent actions? In this stage, how you help Leo bring out confidence or further the self doubt."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A: Patient Step-by-Step Training",
        outcome: "Baby Leo’s caregiver introduces potty training one step at a time. From teaching him to independently pull down his pants to sitting on the toilet, he gradually learns at his own pace. Instead of being pressured, Leo begins to feel confident and understands that his mistakes are part of learning.",
        delta: { self: 2, trust: 1 },
        next: "s3_initiative",
      },
      {
        key: "B",
        label: "Choice B: Rushed and pressured Training",
        outcome: "Baby Leo’s caregiver expects Leo to learn quickly. Every time he has accidents, he gets scolded and beaten. Instead of learning at his own pace, he is forced to “succeed” and often becomes frustrated. This results in anxiousness, and doubts in his own abilities.",
        delta: { trust: 0, self: -1 },
        next: "s3_initiative",
      },
      {
        key: "C",
        label: "Choice C: Inconsistent/Unstructured Training",
        outcome: "Baby Leo is given no guidance on how to potty train; he becomes unsure of what’s expected of him. He is often confused and uncertain, delaying his independence.",
        delta: { trust: -1, self: -2 },
        next: "s3_initiative",
      },
    ],
  },

  // Initiative vs Guilt 
  //stage 3
  s3_initiative: {
    stage: { num: 3, name: "Stage 3: Initiative vs Guilt" },
    title: "Conflict 3: Developing Originality",
    image: "images/stage3.png",
    tint: "var(--gradient3)",
    paragraphs: [
      "Leo begins preschool now and is very inquisitive. His imagination begins to flourish, and he constantly asks questions many are unable to answer. You must now make the choice on whether Leo is comfortable expressing his ideas and creativity or whether he feels humiliated for wanting to do so.",
      "At preschool, Leo openly engages in roleplaying different characters and scenarios. Although most of his actions are deemed acceptable, some practices worry  other students and caretakers. How do you encourage Leo to respond?",
    ],
    choices: [
      {
        key: "A",
        label: "Choice A: Leo is encouraged to freely express his thoughts",
        outcome:
          "He is encouraged to exercise his imagination to the fullest capacity; he shares stories, and acts out scenes with other children without fear of judgement. He learns that expressing ideas is valuable and acceptable, and is willing to take the initiative when communicating with others.",
        delta: { self: 2, rel: 2 },
        next: "s3_industry",
      },
      {
        key: "B",
        label: "Choice B: Leo is forced to suppress his creativity and act mature",
        outcome:
          "Caretakers, peers and teachers all judge his actions abnormal and bizarre. He becomes ashamed of his own imagination as many constantly tease and laugh at him for it. He suppresses his ideas and rejects his own thoughts as he associates them with guilt and embarrassment.",
        delta: { self: -2, rel: -1 },
        next: "s3_industry",
      },
      {
        key: "C",
        label: "Choice C: Leo expresses his imaginations but only in private",
        outcome:
          "Faced with constant laughter and shame, Leo worries that sharing his ideas with others would lead to humiliation. He stops sharing his opinions with others, instead opting for a more reserved approach by hiding his creativity. Leo is still creative, but limits his expression in social settings.",
        delta: { self: -1 },
        next: "s3_industry",
      },
    ],
  },

  // Industry vs Inferiority 
  s3_industry: {
    stage: { num: 4, name: "Stage 4: Industry vs Inferiority" },
    title: "Conflict 4: Developing Self-belief",
    image: "images/stage4.png",
    tint: "var(--gradient3)",
    paragraphs: [
      "As Leo progresses through his education, he can independently plan activities, ask questions, and explore whatever he pleases. Leo just completed pre-school and now attends elementary school. However, his elementary school is very competitive and has a cut-throat culture. Instead of spending time doing the things he enjoys, he constantly reviews math homework and write long essays. Dissatisfied with how his current school doesn’t suit his interests, you must decide on a solution that you believe can help develop Leo more."
    ],
    choices: [
      {
        key: "A",
        label: "Choice A: Transfer Leo to a different school that engages his curiosity",
        outcome: "Seeing how Leo is suffering in his current school, you decide to send him elsewhere so that he can foster his own ideas and independent thought. The new school encourages play and exploration in areas of the student's interest while balancing normal school curriculum. He begins to feel more confident in his abilities and learns that challenges are a part of learning and is willing to take upon more challenges.",
        delta: { trust: 1, self: 2, rel: 1 },
        next: "s4_identity",
      },
      {
        key: "B",
        label: "Choice B: Leo remains at his current school",
        outcome: "Leo is frequently discouraged as he believes everyone is smarter than him with no chance to improve. When asking questions, teachers call Leo stupid and disruptive; thus, he stops  inquiring and feels as if he is inferior to others. Throughout his school years, feelings of inadequacy grows; his self-worth decreases through constant competition with other students. He becomes more disengaged and unwilling to start activities on his own.",
        delta: { trust: -1, self: -2, rel: -1 },
        next: "s4_identity",
      },
    ],
  },

  // Identity vs Role Confusion
  s4_identity: {
    stage: { num: 5, name: "Stage 5: Identity vs Role Confusion" },
    title: "Conflict 5: How does Leo respond to his identity struggle?",
    image: "images/stage5.png",
    tint: "var(--gradient4)",
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
        onPick: () => {
          state.identityChoice = "A";
        },
      },
      {
        key: "B",
        label: "Choice B: Conform to fit in",
        outcome: "Leo decides to join the band team even though it doesn’t reflect his true interests or values. He adopts behaviors and attitudes that make him liked by the group, but inside, he feels shallow. He sacrifices his identity for short-term social acceptance.",
        delta: { self: -1, rel: 0 },
        next: "s5_intimacy",
        onPick: () => {
          state.identityChoice = "B";
        },
      },
      {
        key: "C",
        label: "Choice C: Withdraw and Isolate",
        outcome: "Leo becomes isolated. He refuses to communicate with his peers, teachers, and family. In class, he sits in the back corner, ignoring everyone and keeping to himself. Once school ends, he rushes home and locks himself in his room, disassociating from society. Because of this behavior, he avoids exploration, thus becoming estranged from others. Without the initiative to study topics that interest him, his sense of identity becomes uncertain.",
        delta: { self: -2, rel: -2, trust: -1 },
        next: "s5_intimacy",
        onPick: () => {
          state.identityChoice = "C";
        },
      },
    ],
  },

  // Intimacy vs Isolation (slider)
  s5_intimacy: {
    stage: { num: 6, name: "Stage 6: Intimacy vs Isolation" },
    title: "Conflict: Balancing work and close relationships",
    image: "images/stage6.png",
    paragraphs: [
      "As a young adult, Leo enters the workforce and begins forming romantic relationships. He only has so many hours in the day; how should he balance work with nurturing close bonds? Move the slider to choose where he puts his energy."
    ],
  },

  // Generativity vs Stagnation
  s6_generativity: {
    stage: { num: 7, name: "Stage 7: Generativity vs Stagnation" },
    title: "Conflict: Mid-life Crisis?",
        image: "images/stage7.png",

    paragraphs: [
      "Leo enters his mid-life stage with two chilren. He begins to reflect on what he has built so far. He asks himself whether he has assisted others, whether he feels emotionally connected, and if his actions support the next generation. His ability to find meaning in this stage heavily depended upon his previous choices in relationships, identity, and confidence earlier in his life. "
    ],
  },

  // Integrity vs Despair
  s7_integrity: {
    stage: { num: 8, name: "Stage 8: Integrity vs Despair" },
    title: "Final Stage: Later Life Reflection",
        image: "images/stage8.png",

    paragraphs: [],
  },
};
function renderSceneImage(node) {
  if (!node.image) return "";
  const tint = node.tint || "linear-gradient(135deg, rgba(242,164,93,.22), rgba(247,162,153,.18))";
  const altSource = node.stage?.name || node.title || "Scene image";
  const alt = `${altSource} illustration`;
  return `
    <figure class="sceneImage" style="--sceneTint:${escapeHtml(tint)};">
      <img src="${escapeHtml(node.image)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async"width="413" height="604"
        onerror="this.closest('.sceneImage')?.classList.add('is-hidden');" />
    </figure>
  `;
}

function renderIntro() {
  const intro = script.intro;
    const imageHtml = renderSceneImage(intro);
  ui.screen.innerHTML = `
      ${imageHtml}
    <div class="h1">${escapeHtml(intro.title)}</div>
    <div class="h2">${escapeHtml(intro.subtitle)}</div>
    ${intro.paragraphs
      .map((p) => `<p class="p">${escapeHtml(p)}</p>`)
      .join("")}
    <hr class="hr" />
    <button class="btn primary" id="startBtn" type="button">Start Leo's journey</button>
  `;
  $("startBtn").addEventListener("click", () => setStep(intro.next));
}

function renderChoiceNode(node) {
  const paragraphs = node.paragraphs
    .map((p) => `<p class="p">${escapeHtml(p)}</p>`)
    .join("");
  const choicesHtml = node.choices
    .map(
      (ch) => `
        <button class="btn" data-key="${ch.key}">
          <div class="h2">${escapeHtml(ch.label)}</div>
        </button>`
    )
    .join("");
  const imageHtml = renderSceneImage(node);
  ui.screen.innerHTML = `
    <div class="h1">${escapeHtml(node.stage.name)}</div>
    <div class="h2">${escapeHtml(node.title)}</div>
        ${imageHtml}
    ${paragraphs}
    <div class="choiceGrid" id="choiceGrid">${choicesHtml}</div>
  `;

  const grid = $("choiceGrid");
  grid.querySelectorAll("button").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const choice = node.choices[idx];
      if (typeof choice.onPick === "function") choice.onPick();
      const outcomeHtml = `
        <div class="outcomeBox">
          <div class="h2">Outcome</div>
          <div class="p">${escapeHtml(choice.outcome)}</div>
        </div>
        <button class="btn primary" id="continueBtn" type="button">Continue</button>
      `;
      grid.innerHTML = outcomeHtml;
      applyDelta(choice.delta);
      $("continueBtn").addEventListener("click", () => setStep(choice.next));
    });
  });
}

function renderIntimacySlider() {
  const node = script.s5_intimacy;
    const imageHtml = renderSceneImage(node);
  ui.screen.innerHTML = `
    <div class="h1">${escapeHtml(node.stage.name)}</div>
    <div class="h2">${escapeHtml(node.title)}</div>
        ${imageHtml}
    ${node.paragraphs.map((p) => `<p class="p">${escapeHtml(p)}</p>`).join("")}
    <div class="sliderWrap">
      <div class="sliderLabels"><span>All Work</span><span>Balance</span><span>All Relationships</span></div>
      <input type="range" id="lifeSlider" min="0" max="100" step="1" value="50" aria-label="Work versus relationships" />
    </div>
    <button class="btn primary" id="sliderBtn" type="button" style="margin-top:12px;">Lock choice</button>
  `;
$("sliderBtn").addEventListener("click", () => {
  const val = Number($("lifeSlider").value);
  let outcomeText = "";
  let delta;

  if (val < 40) {
    outcomeText =
      "Leo devotes most of his time to his career; with a 12-hour workday, he leaves little free time for friendships and family. Although he is professionally successful, he is emotionally strained. Overtime, his relationships fall apart, friends and family distant and his connections weaken.";
    delta = { self: 2, rel: -1 };
  } else if (val < 70) {
    // Choice C: Work-Life Balance
    outcomeText =
      "Leo divides his time evenly between career and relationships. He works an 8-hour day, dedicating effort to his career; the other 16 hours are for friends and family. He advances the corporate ladder at a moderate pace, but balances personal bonds without sacrificing ambition.";
    delta = { self: 1, rel: 1 };
  } else {
    outcomeText =
      "Leo decides that a genuine connection is the most important thing to him. He prioritizes spending time with family and friends, but does the bare minimum at work. He feels emotionally connected, but his financial freedom, independence, and long-term career path is insecure.";
    delta = { rel: 2, trust: 1, self: -1 };
  }

  ui.screen.innerHTML += `
    <div class="outcomeBox" style="margin-top:12px;">
      <div class="h2">Outcome</div>
      <div class="p">${escapeHtml(outcomeText)}</div>
    </div>
    <button class="btn primary" id="continueAfterSlider" type="button" style="margin-top:12px;">Continue</button>
  `;

  applyDelta(delta);
  $("sliderBtn").disabled = true;
  $("lifeSlider").disabled = true;

  $("continueAfterSlider").addEventListener("click", () =>
    setStep("s6_generativity")
  );
});

}

function ensureGenerativityOutcome() {
  if (state.genOutcome) return state.genOutcome;
  let chance = 0;
  if (state.identityChoice === "B") chance = 0.5;
  if (state.identityChoice === "C") chance = 1;
  const crisis = Math.random() < chance;
  if (crisis) {
    const delta = { self: -3 };
    state.genOutcome = {
      crisis: true,
      delta,
      text:
        "A mid-life crisis hits Leo hard. He experiences this because of a buildup of emotional turmoil and countless hours of self-reflection. He finally realizes that his previous actions no longer define him and now sets out to rediscover his confidence and true self.",
    };
  } else {
    const delta = { trust: 1, self: 1, rel: 2 };
    state.genOutcome = {
      crisis: false,
      delta,
      text:
        "Wow, you have chosen good choices! Leo finds meaning in all sections of his life. He is investing time in family, mentoring younger people and flourishing in the workplace. He feels a strong sense of purpose and believes that his actions shape the future of his children and of the world.",
    };
  }
  return state.genOutcome;
}

function renderGenerativity() {
  const node = script.s6_generativity;
  const outcome = ensureGenerativityOutcome();
    const imageHtml = renderSceneImage(node);
  ui.screen.innerHTML = `
    <div class="h1">${escapeHtml(node.stage.name)}</div>
    <div class="h2">${escapeHtml(node.title)}</div>
        ${imageHtml}
    ${node.paragraphs.map((p) => `<p class="p">${escapeHtml(p)}</p>`).join("")}
    <button class="btn primary" id="revealOutcome" type="button" style="margin-top:12px;">See Leo's reflection</button>
    <div id="genOutcomeSpot"></div>
  `;
  $("revealOutcome").addEventListener("click", () => {
    const spot = $("genOutcomeSpot");
    spot.innerHTML = `
      <div class="outcomeBox" style="margin-top:12px;">
        <div class="h2">Outcome</div>
        <div class="p">${escapeHtml(outcome.text)}</div>
      </div>
      <button class="btn primary" id="toIntegrity" type="button" style="margin-top:12px;">Continue to later life</button>
    `;
    applyDelta(outcome.delta);
    $("revealOutcome").disabled = true;
    $("toIntegrity").addEventListener("click", () => setStep("s7_integrity"));
  });
}

function renderEnding() {
  const node = script.s7_integrity;
    const imageHtml = renderSceneImage(node);
  const total = state.trust + state.self + state.rel;
  let verdict = "mixed";
  let verdictLabel = "Mixed Feelings";
  let text =
    "Leo reflects mixed feelings. He sees moments of great contentment alongside many regrets. He often wonders how his life would improve if only he made different decisions true to himself. Some relationships and accomplishments provide him with value, while others fill him with disappointment. While not fully at peace, he comes to accept the result of his life. ";
  if (total >= 6) {
    verdict = "integrity";
    verdictLabel = "Integrity";
    text =
      "Leo exhibits great joy in his accomplishments and in the relationships he has built. He understands his life is full of successes and failures but accepts them as a part of human life. He feels his life was full of purpose, helping the needed while improving upon himself. He spends the rest of his days offering insight and wisdom to his grandchildren, knowing he can now rest in peace. ";
  } else if (total <= -3) {
    verdict = "despair";
    verdictLabel = "Despair";
    text =
      "Looking back, Leo’s life was insignificant. His life was marked by poor relationships and few accomplishments. He often despairs over missed opportunities and his cowardness in not taking risks. He is disconnected with friends, family and society, living alone in isolation, where loneliness and regret overshadow any hope for rejuvenation. Without a sense of fulfillment, he tosses and turns each night, ultimately coming to the painful conviction that his life futile endeavor full of unrealized potential. ";
  }

  ui.screen.innerHTML = `
    <div class="h1">${escapeHtml(node.stage.name)}</div>
    <div class="h2">${escapeHtml(node.title)}</div>
        ${imageHtml}
    <div class="endingLabel ${escapeHtml(verdict)}">${escapeHtml(verdictLabel)}</div>
    <p class="p">${escapeHtml(text)}</p>
    <div class="outcomeBox">
      <div class="h2">Final scorecard (${escapeHtml(verdictLabel)})</div>
      <div class="p">Trust: ${state.trust}, Self-Esteem: ${state.self}, Relationships: ${state.rel}</div>
    </div>
    <button class="btn ghost" id="playAgain" type="button" style="margin-top:12px;">Play again</button>
  `;
  $("playAgain").addEventListener("click", () => restart());
}

function renderStep() {
  switch (state.step) {
    case "intro":
      renderIntro();
      break;
    case "s1_c1":
      renderChoiceNode(script.s1_c1);
      break;
    case "s1_caregiver":
      renderChoiceNode(script.s1_caregiver);
      break;
    case "s2_c2":
      renderChoiceNode(script.s2_c2);
      break;
    case "s3_initiative":
      renderChoiceNode(script.s3_initiative);
      break;
    case "s3_industry":
      renderChoiceNode(script.s3_industry);
      break;
    case "s4_identity":
      renderChoiceNode(script.s4_identity);
      break;
    case "s5_intimacy":
      renderIntimacySlider();
      break;
    case "s6_generativity":
      renderGenerativity();
      break;
    case "s7_integrity":
      renderEnding();
      break;
    default:
      renderIntro();
  }
}

function setStep(stepId) {
  state.step = stepId;
  renderStep();
}

function restart() {
  state.trust = 0;
  state.self = 0;
  state.rel = 0;
  state.identityChoice = null;
  state.genOutcome = null;
  setStats(0, 0, 0);
  setStep("intro");
}

ui.restartBtn.addEventListener("click", () => restart());
setStats();
renderStep();
