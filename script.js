const { questionBank, lifeBank, storyBank } = window.GAME_CONTENT;

const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const resultScreen = document.querySelector("#resultScreen");
const startButton = document.querySelector("#startButton");
const quickStartButton = document.querySelector("#quickStartButton");
const restartButton = document.querySelector("#restartButton");
const continueButton = document.querySelector("#continueButton");
const copyShareButton = document.querySelector("#copyShareButton");
const downloadShareButton = document.querySelector("#downloadShareButton");
const nextButton = document.querySelector("#nextButton");
const menuToggle = document.querySelector("#menuToggle");
const setupPanel = document.querySelector("#setupPanel");
const soundToggle = document.querySelector("#soundToggle");
const guideToggle = document.querySelector("#guideToggle");
const guidePanel = document.querySelector("#guidePanel");
const modeButtons = [...document.querySelectorAll(".mode-button")];
const missionCards = [...document.querySelectorAll(".mission-card")];
const phaseCards = [...document.querySelectorAll(".phase-card")];
const weeklyCards = [...document.querySelectorAll(".weekly-card")];
const themeText = document.querySelector("#themeText");
const phaseText = document.querySelector("#phaseText");
const challengeBadge = document.querySelector("#challengeBadge");
const stageTrack = document.querySelector("#stageTrack");
const scoreText = document.querySelector("#scoreText");
const streakText = document.querySelector("#streakText");
const progressBar = document.querySelector("#progressBar");
const questionCount = document.querySelector("#questionCount");
const questionText = document.querySelector("#questionText");
const hintButton = document.querySelector("#hintButton");
const hintBox = document.querySelector("#hintBox");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const resultScore = document.querySelector("#resultScore");
const resultLevel = document.querySelector("#resultLevel");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");
const achievementList = document.querySelector("#achievementList");
const dailyMission = document.querySelector("#dailyMission");
const shareTitle = document.querySelector("#shareTitle");
const shareText = document.querySelector("#shareText");
const shareSeal = document.querySelector("#shareSeal");
const shareTheme = document.querySelector("#shareTheme");
const characterName = document.querySelector("#characterName");
const characterAvatar = document.querySelector("#characterAvatar");
const characterLine = document.querySelector("#characterLine");
const collectionGrid = document.querySelector("#collectionGrid");
const collectionSummary = document.querySelector("#collectionSummary");
const collectionTotal = document.querySelector("#collectionTotal");
const nextGoal = document.querySelector("#nextGoal");

const storageKey = "trilhaDaPalavraSNProgress";
const legacyStorageKey = "caminhoDaPalavraProgress";
const modeLabels = { bible: "Missões Bíblicas", life: "E se fosse com você?", story: "História com decisões" };
const collectibleMissions = ["Jesus", "Davi", "Ester", "Daniel", "José do Egito", "Ana", "Moisés", "Paulo"];
const medalRank = { Novo: 0, Bronze: 1, Prata: 2, Ouro: 3 };
const phaseRules = {
  coragem: { label: "Fase Coragem", missions: ["Davi", "Ester"], mode: "bible" },
  perdao: { label: "Fase Perdão", missions: ["Jesus", "José do Egito"], mode: "life" },
  sabedoria: { label: "Fase Sabedoria", missions: ["Daniel", "Moisés"], mode: "story" },
  recomeco: { label: "Fase Recomeço", missions: ["Paulo", "Ana"], mode: "life" }
};
const characterVisuals = {
  Jesus: { initial: "J", tag: "amor" },
  Davi: { initial: "D", tag: "coragem" },
  Ester: { initial: "E", tag: "decisão" },
  Daniel: { initial: "D", tag: "fidelidade" },
  "José do Egito": { initial: "J", tag: "perdão" },
  Ana: { initial: "A", tag: "oração" },
  Moisés: { initial: "M", tag: "liderança" },
  Paulo: { initial: "P", tag: "recomeço" },
  "Minha Escolha": { initial: "F", tag: "missão" }
};
const weeklyChallenges = {
  respeito: {
    label: "Desafio Respeito",
    phase: "sabedoria",
    mission: "Pratique uma atitude de respeito nas palavras, no celular ou em uma conversa difícil."
  },
  coragem: {
    label: "Desafio Coragem",
    phase: "coragem",
    mission: "Faça o certo em uma situação pequena, mesmo se ninguém estiver elogiando."
  },
  perdao: {
    label: "Desafio Perdão",
    phase: "perdao",
    mission: "Dê um passo de paz: ore, peça perdão ou escolha não alimentar mágoa."
  },
  celular: {
    label: "Desafio Celular",
    phase: "sabedoria",
    mission: "Use o celular com sabedoria: não repasse algo que humilha, confunde ou machuca alguém."
  },
  amizade: {
    label: "Desafio Amizade",
    phase: "coragem",
    mission: "Inclua alguém, chame para participar ou escolha uma palavra que fortaleça uma amizade."
  },
  familia: {
    label: "Desafio Família",
    phase: "sabedoria",
    mission: "Sirva sua família em uma tarefa simples sem esperar que alguém peça."
  },
  verdade: {
    label: "Desafio Verdade",
    phase: "coragem",
    mission: "Fale a verdade com respeito em uma situação pequena, sem culpar outra pessoa."
  },
  gratidao: {
    label: "Desafio Gratidão",
    phase: "recomeco",
    mission: "Agradeça a Deus e a uma pessoa por algo específico que você recebeu."
  },
  oracao: {
    label: "Desafio Oração",
    phase: "recomeco",
    mission: "Separe alguns minutos para conversar com Deus sobre algo que está no seu coração."
  },
  responsabilidade: {
    label: "Desafio Responsabilidade",
    phase: "sabedoria",
    mission: "Cumpra um combinado hoje antes de brincar, jogar ou usar o celular."
  },
  lideranca: {
    label: "Desafio Liderança",
    phase: "sabedoria",
    mission: "Ajude a organizar uma tarefa ouvindo as pessoas antes de decidir."
  },
  esperanca: {
    label: "Desafio Esperança",
    phase: "recomeco",
    mission: "Tente novamente algo que você quase abandonou e peça ajuda se precisar."
  },
  servico: {
    label: "Desafio Serviço",
    phase: "perdao",
    mission: "Ajude alguém hoje sem buscar aplauso, recompensa ou vantagem."
  },
  pressao: {
    label: "Desafio Pressão",
    phase: "sabedoria",
    mission: "Escolha não seguir uma atitude errada do grupo, mesmo que pareça mais fácil."
  },
  recomeco: {
    label: "Desafio Recomeço",
    phase: "recomeco",
    mission: "Reconheça uma atitude que precisa mudar e dê um passo prático hoje."
  },
  proposito: {
    label: "Desafio Propósito",
    phase: "perdao",
    mission: "Não desista de fazer o bem em uma situação difícil desta semana."
  }
};

let roundQuestions = [];
let currentQuestion = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let answered = false;
let hintUsed = false;
let lastMission = "";
let selectedMode = "bible";
let selectedMission = "all";
let selectedPhase = "";
let selectedWeekly = "respeito";
let soundEnabled = false;
let audioContext;
let progress = loadProgress();
let currentShareCardText = "";
let currentShareMission = "";
let currentShareMedal = "Bronze";

function on(element, event, handler) {
  if (element) element.addEventListener(event, handler);
}

function loadProgress() {
  try {
    return (
      JSON.parse(localStorage.getItem(storageKey)) ||
      JSON.parse(localStorage.getItem(legacyStorageKey)) || { missions: {}, achievements: [] }
    );
  } catch {
    return { missions: {}, achievements: [] };
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getBank() {
  if (selectedMode === "life") return lifeBank;
  if (selectedMode === "story") return storyBank;
  return questionBank;
}

function normalizeMission(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

function getMissionProgress(mission) {
  return progress.missions[mission] || { bestScore: 0, bestStreak: 0, medal: "Novo" };
}

function isBetterMedal(next, current) {
  return (medalRank[next] || 0) > (medalRank[current] || 0);
}

function playTone(type) {
  if (!soundEnabled) return;
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) return;
  if (!audioContext) audioContext = new AudioEngine();
  const tones = {
    start: [420, 0.08],
    correct: [720, 0.12],
    wrong: [190, 0.12],
    finish: [880, 0.18]
  };
  const [frequency, duration] = tones[type] || tones.start;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function setScreen(screen) {
  startScreen.classList.toggle("hidden", screen !== "start");
  gameScreen.classList.toggle("hidden", screen !== "game");
  resultScreen.classList.toggle("hidden", screen !== "result");
  document.body.dataset.screen = screen;
}

function isMobileView() {
  return window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
}

function moveToActiveQuestion() {
  if (!isMobileView()) return;
  const target = questionText || gameScreen;
  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function moveToNextAction() {
  if (!isMobileView()) return;
  setTimeout(() => {
    nextButton.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 80);
}

function setMode(mode) {
  selectedMode = mode;
  selectedPhase = "";
  selectedWeekly = "";
  modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
  phaseCards.forEach((card) => card.classList.remove("active"));
  weeklyCards.forEach((card) => card.classList.remove("active"));
}

function setMission(mission) {
  selectedMission = mission;
  selectedPhase = "";
  selectedWeekly = "";
  document.body.dataset.mission = normalizeMission(mission);
  phaseCards.forEach((card) => card.classList.remove("active"));
  weeklyCards.forEach((card) => card.classList.remove("active"));
  updateMissionCards();
}

function setPhase(phase, keepWeekly = false) {
  const rule = phaseRules[phase];
  if (!rule) return;
  selectedPhase = phase;
  selectedMission = "all";
  selectedMode = rule.mode;
  if (!keepWeekly) selectedWeekly = "";
  document.body.dataset.mission = normalizeMission(rule.missions[0]);
  modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === selectedMode));
  phaseCards.forEach((card) => card.classList.toggle("active", card.dataset.phase === phase));
  if (!keepWeekly) weeklyCards.forEach((card) => card.classList.remove("active"));
  updateMissionCards();
}

function setWeeklyChallenge(challenge) {
  const selected = weeklyChallenges[challenge];
  if (!selected) return;
  selectedWeekly = challenge;
  weeklyCards.forEach((card) => card.classList.toggle("active", card.dataset.weekly === challenge));
  setPhase(selected.phase, true);
}

function updateMissionCards() {
  missionCards.forEach((card) => {
    const mission = card.dataset.mission;
    card.classList.toggle("active", mission === selectedMission && !selectedPhase);
    const status = card.querySelector(".mission-status");
    const saved = getMissionProgress(mission);
    if (status) status.textContent = saved.medal;
  });
  renderCollection();
}

function prepareRound() {
  const bank = getBank();
  let filtered = bank;

  if (selectedPhase) {
    const rule = phaseRules[selectedPhase];
    filtered = bank.filter((item) => rule.missions.includes(item.character || item.theme));
  } else if (selectedMission !== "all") {
    filtered = bank.filter((item) => item.theme === selectedMission || item.character === selectedMission);
  }

  const source = filtered.length ? filtered : bank;
  roundQuestions = shuffle(source).slice(0, Math.min(6, source.length));
}

function startGame() {
  prepareRound();
  currentQuestion = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  lastMission = "";
  playTone("start");
  setScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const item = roundQuestions[currentQuestion];
  answered = false;
  hintUsed = false;
  const character = item.character || item.theme;

  phaseText.textContent = selectedWeekly ? weeklyChallenges[selectedWeekly].label : selectedPhase ? phaseRules[selectedPhase].label : "Missão";
  if (challengeBadge) {
    challengeBadge.textContent = selectedWeekly ? weeklyChallenges[selectedWeekly].label : selectedPhase ? phaseRules[selectedPhase].label : "Trilha completa";
  }
  renderStageTrack();
  themeText.textContent =
    selectedMission === "all" ? `${modeLabels[selectedMode]} - ${character}` : `${selectedMission} - ${modeLabels[selectedMode]}`;
  questionCount.textContent = `Pergunta ${currentQuestion + 1} de ${roundQuestions.length}`;
  questionText.textContent = item.question;
  progressBar.style.width = `${((currentQuestion + 1) / roundQuestions.length) * 100}%`;
  scoreText.textContent = score;
  streakText.textContent = streak;
  hintBox.classList.add("hidden");
  hintBox.textContent = "";
  hintButton.disabled = false;
  hintButton.textContent = "Preciso de uma dica";
  feedback.classList.add("hidden");
  nextButton.classList.add("hidden");
  answers.innerHTML = "";
  document.body.dataset.mission = normalizeMission(character);
  renderCharacterScene(item);

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
    button.addEventListener("click", () => chooseAnswer(index));
    answers.appendChild(button);
  });

  moveToActiveQuestion();
}

function renderStageTrack() {
  if (!stageTrack) return;
  stageTrack.innerHTML = "";
  roundQuestions.forEach((_, index) => {
    const item = document.createElement("span");
    item.className = "stage-dot";
    if (index < currentQuestion) item.classList.add("done");
    if (index === currentQuestion) item.classList.add("current");
    item.textContent = index + 1;
    stageTrack.appendChild(item);
  });
}

function renderCharacterScene(item) {
  const character = item.character || item.theme;
  const visual = characterVisuals[character] || { initial: character.charAt(0), tag: "valor" };
  characterName.textContent = character;
  characterAvatar.innerHTML = `<span>${visual.initial}</span><small>${visual.tag}</small>`;
  characterLine.textContent = getCharacterLine(character);
}

function getCharacterLine(character) {
  const lines = {
    Jesus: "Escolha uma atitude que mostre amor em ação.",
    Davi: "Coragem é fazer o certo mesmo quando dá medo.",
    Ester: "Uma decisão corajosa pode proteger outras pessoas.",
    Daniel: "Fidelidade também aparece quando existe pressão.",
    "José do Egito": "Perdão e propósito podem transformar uma história difícil.",
    Ana: "Não desista da esperança; fale com Deus com sinceridade.",
    Moisés: "Liderar também é ouvir, servir e pedir ajuda.",
    Paulo: "Recomeçar é possível quando a atitude muda.",
    "Minha Escolha": "Agora a jornada vira uma decisão sua."
  };
  return lines[character] || "Pense na escolha que combina com a missão.";
}

function showHint() {
  if (answered || hintUsed) return;
  const item = roundQuestions[currentQuestion];
  hintUsed = true;
  hintBox.textContent = item.hint || `Pense no exemplo de ${item.character || item.theme} e na atitude que combina com essa história.`;
  hintBox.classList.remove("hidden");
  hintButton.disabled = true;
  hintButton.textContent = "Dica usada";
}

function chooseAnswer(index) {
  if (answered) return;

  const item = roundQuestions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-button")];
  const isCorrect = index === item.correct;
  answered = true;

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.correct) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    const basePoints = hintUsed ? 7 : 10;
    score += basePoints + Math.min(streak - 1, 3) * 2;
    feedback.innerHTML = `<strong>Boa resposta!</strong><span>${hintUsed ? "Você acertou com dica e ganhou menos pontos." : "Você acertou sem dica."} ${item.explanation}</span><em>Missão: ${item.mission}</em>`;
    playTone("correct");
  } else {
    streak = 0;
    feedback.innerHTML = `<strong>Boa tentativa.</strong><span>Você está perto. ${item.explanation}</span><em>Missão: ${item.mission}</em>`;
    playTone("wrong");
  }

  lastMission = item.mission;
  scoreText.textContent = score;
  streakText.textContent = streak;
  feedback.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  moveToNextAction();
}

function nextQuestion() {
  currentQuestion += 1;
  if (currentQuestion >= roundQuestions.length) {
    finishGame();
    return;
  }
  renderQuestion();
}

function finishGame() {
  const maxScore = roundQuestions.length * 16;
  const percent = Math.round((score / maxScore) * 100);
  const medal = percent >= 85 ? "Ouro" : percent >= 60 ? "Prata" : "Bronze";
  const level = percent >= 85 ? "Mestre da Trilha" : percent >= 60 ? "Explorador Bíblico" : "Aprendiz em Jornada";
  const key = selectedPhase ? phaseRules[selectedPhase].label : selectedMission === "all" ? "Trilha completa" : selectedMission;
  const old = getMissionProgress(key);
  progress.missions[key] = {
    bestScore: Math.max(old.bestScore, score),
    bestStreak: Math.max(old.bestStreak, bestStreak),
    medal: isBetterMedal(medal, old.medal) ? medal : old.medal
  };

  if (selectedMission !== "all" && !selectedPhase) updateMainMissionProgress(selectedMission, medal);
  if (selectedMission === "all" || selectedPhase) updateCollectionFromRound(medal);

  saveProgress();
  updateMissionCards();
  playTone("finish");
  setScreen("result");

  resultScore.textContent = `${score} pontos`;
  resultLevel.textContent = level;
  resultTitle.textContent = medal === "Ouro" ? "Conquista desbloqueada" : "Desafio concluído";
  resultMessage.textContent =
    percent >= 85
      ? "Excelente! Você conectou as histórias bíblicas com escolhas reais e ganhou uma recompensa especial."
      : percent >= 60
        ? "Muito bom! Você avançou na trilha e já tem atitudes para praticar."
        : "Boa jornada! Revise as dicas e tente outra rodada para fortalecer o aprendizado.";
  const currentWeeklyChallenge = weeklyChallenges[selectedWeekly];
  const practicalMission = currentWeeklyChallenge ? currentWeeklyChallenge.mission : lastMission || "Escolha uma atitude aprendida no jogo para praticar hoje.";
  currentShareMission = practicalMission;
  currentShareMedal = medal;
  dailyMission.innerHTML = `<strong>Missão da semana</strong><span>${practicalMission}</span>`;
  currentShareCardText = buildShareCardText(medal, practicalMission);
  if (shareTitle) shareTitle.textContent = currentWeeklyChallenge ? currentWeeklyChallenge.label : "Missão da semana";
  if (shareSeal) shareSeal.textContent = `Selo ${medal}`;
  if (shareTheme) shareTheme.textContent = currentWeeklyChallenge ? currentWeeklyChallenge.label : modeLabels[selectedMode];
  if (shareText) shareText.textContent = currentShareCardText;
  renderAchievements(medal, percent);
}

function buildShareCardText(medal, practicalMission) {
  return `Completei um desafio bíblico prático na Trilha da Palavra SN.\nSelo: ${medal}\nMissão da semana: ${practicalMission}`;
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((item, index) => {
    const output = index === maxLines - 1 && lines.length > maxLines ? `${item}...` : item;
    context.fillText(output, x, y + index * lineHeight);
  });
}

function downloadShareCard() {
  const canvas = document.createElement("canvas");
  const width = 1080;
  const height = 1080;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const currentWeeklyChallenge = weeklyChallenges[selectedWeekly];
  const theme = currentWeeklyChallenge ? currentWeeklyChallenge.label : "Missão da semana";

  context.fillStyle = "#fffaf0";
  context.fillRect(0, 0, width, height);
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#2f8f6b");
  gradient.addColorStop(0.48, "#4f9ed4");
  gradient.addColorStop(1, "#7f6ed6");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, 220);

  context.fillStyle = "rgba(244, 183, 63, 0.22)";
  context.beginPath();
  context.arc(900, 165, 150, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(230, 109, 84, 0.18)";
  context.beginPath();
  context.arc(150, 950, 180, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#ffffff";
  context.font = "900 44px Arial";
  context.fillText("TRILHA DA PALAVRA SN", 80, 92);
  context.font = "800 28px Arial";
  context.fillText("Desafio bíblico prático da semana", 80, 142);

  context.fillStyle = "#233044";
  context.font = "900 64px Arial";
  wrapCanvasText(context, theme, 80, 320, 900, 72, 2);

  context.fillStyle = "#2f8f6b";
  context.font = "900 34px Arial";
  context.fillText(`Selo ${currentShareMedal}`, 80, 468);

  context.fillStyle = "#233044";
  context.font = "900 36px Arial";
  context.fillText("Missão da semana", 80, 570);
  context.fillStyle = "#657086";
  context.font = "700 34px Arial";
  wrapCanvasText(context, currentShareMission || "Pratique uma atitude aprendida no desafio.", 80, 630, 900, 48, 5);

  context.fillStyle = "#f4b73f";
  context.fillRect(80, 910, 920, 6);
  context.fillStyle = "#233044";
  context.font = "800 28px Arial";
  context.fillText("Família • Igreja • Escola bíblica", 80, 980);

  const link = document.createElement("a");
  link.download = `trilha-da-palavra-sn-${normalizeMission(theme)}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function updateMainMissionProgress(mission, medal) {
  const saved = getMissionProgress(mission);
  progress.missions[mission] = {
    bestScore: Math.max(saved.bestScore, score),
    bestStreak: Math.max(saved.bestStreak, bestStreak),
    medal: isBetterMedal(medal, saved.medal) ? medal : saved.medal
  };
}

function updateCollectionFromRound(medal) {
  const playedCharacters = new Set(roundQuestions.map((item) => item.character || item.theme).filter((item) => collectibleMissions.includes(item)));
  playedCharacters.forEach((mission) => updateMainMissionProgress(mission, medal));
}

function renderAchievements(medal, percent) {
  const reward = percent >= 85 ? "Selo Mestre" : percent >= 60 ? "Selo Explorador" : "Selo Aprendiz";
  const items = [
    { title: medal, description: "Medalha conquistada nesta rodada." },
    { title: `${bestStreak} acertos em sequência`, description: "Combo máximo da missão." },
    { title: reward, description: "Recompensa visual adicionada à jornada." },
    { title: weeklyChallenges[selectedWeekly] ? weeklyChallenges[selectedWeekly].label : modeLabels[selectedMode], description: "Tema para viver fora da tela." }
  ];

  achievementList.innerHTML = items
    .map((item) => `<div class="achievement"><strong>${item.title}</strong><span>${item.description}</span></div>`)
    .join("");
}

function renderCollection() {
  if (!collectionGrid) return;
  const completed = collectibleMissions.filter((mission) => getMissionProgress(mission).medal !== "Novo");
  const next = collectibleMissions.find((mission) => getMissionProgress(mission).medal === "Novo");

  collectionTotal.textContent = `${completed.length}/${collectibleMissions.length}`;
  collectionSummary.textContent = completed.length
    ? `Você já desbloqueou ${completed.length} de ${collectibleMissions.length} personagens. Continue para fechar a coleção.`
    : "Complete missões para desbloquear medalhas por personagem.";
  nextGoal.textContent = next ? `Próximo alvo: conquiste uma medalha na missão de ${next}.` : "Coleção completa: tente transformar suas medalhas em Ouro.";
  collectionGrid.innerHTML = "";

  collectibleMissions.forEach((mission) => {
    const saved = getMissionProgress(mission);
    const item = document.createElement("button");
    item.className = `collection-item ${saved.medal.toLowerCase()}`;
    item.type = "button";
    item.innerHTML = `<strong>${mission}</strong><span>${saved.medal}</span><small>${saved.bestScore || 0} pontos</small>`;
    item.addEventListener("click", () => setMission(mission));
    collectionGrid.appendChild(item);
  });
}

missionCards.forEach((card) => on(card, "click", () => setMission(card.dataset.mission)));
modeButtons.forEach((button) => on(button, "click", () => setMode(button.dataset.mode)));
phaseCards.forEach((card) => on(card, "click", () => setPhase(card.dataset.phase)));
weeklyCards.forEach((card) => on(card, "click", () => setWeeklyChallenge(card.dataset.weekly)));
on(startButton, "click", startGame);
on(quickStartButton, "click", startGame);
on(restartButton, "click", startGame);
on(continueButton, "click", () => setScreen("start"));
on(nextButton, "click", nextQuestion);
on(hintButton, "click", showHint);
on(menuToggle, "click", () => {
  const open = setupPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
on(guideToggle, "click", () => {
  const open = guidePanel.classList.toggle("hidden");
  guideToggle.setAttribute("aria-expanded", String(open));
});
on(soundToggle, "click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundToggle.title = soundEnabled ? "Desativar sons" : "Ativar sons";
  if (soundEnabled) playTone("start");
});
on(copyShareButton, "click", async () => {
  const text = currentShareCardText || "Completei um desafio bíblico prático na Trilha da Palavra SN.";
  try {
    await navigator.clipboard.writeText(text);
    copyShareButton.textContent = "Cartão copiado";
  } catch {
    copyShareButton.textContent = "Texto pronto no cartão";
  }
});
on(downloadShareButton, "click", downloadShareCard);

setMode(selectedMode);
setWeeklyChallenge(selectedWeekly);
updateMissionCards();
renderCollection();
