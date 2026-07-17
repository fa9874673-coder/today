// SIGNAL SCANNER 2.0
// 纯前端互动：不请求权限、不联网、不保存或上传任何信息。

const signalMessages = {
  mood: "已接收：心情频率慢慢稳定。",
  energy: "已接收：快乐电量正在回升。",
  luck: "已接收：一点点好运靠近。",
  rest: "已确认：休息许可通过。",
  treat: "已确认：小奖励合理。",
  calm: "已过滤：无关烦恼先放一放。"
};

const resultPool = [
  {
    title: "适合慢慢恢复",
    keywords: "小奖励 / 放空 / 好运",
    advice: "把今天剩下的时间过得轻一点。"
  },
  {
    title: "轻度充电中",
    keywords: "热饮 / 早睡 / 晴天",
    advice: "不用一次想完所有事，先照顾好这一小段。"
  },
  {
    title: "信号稳定偏亮",
    keywords: "微笑 / 慢慢来 / 补给",
    advice: "今天适合给自己留一点松弛的空间。"
  },
  {
    title: "好运等待接收",
    keywords: "小惊喜 / 轻松 / 明天",
    advice: "如果遇到一点好事，可以认真接住。"
  }
];

const nodes = Array.from(document.querySelectorAll(".signal-node"));
const activeLine = document.getElementById("activeLine");
const receiverStatus = document.getElementById("receiverStatus");
const signalHint = document.getElementById("signalHint");
const constellationWrap = document.querySelector(".constellation-wrap");
const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultKeywords = document.getElementById("resultKeywords");
const resultAdvice = document.getElementById("resultAdvice");
const decodeButton = document.getElementById("decodeButton");
const resetButton = document.getElementById("resetButton");
const decodedSignal = document.getElementById("decodedSignal");
const signalAnnouncement = document.getElementById("signalAnnouncement");

const activatedSignals = [];
let resultShown = false;
let decodeRun = 0;
let decodeInProgress = false;
let hintTimer = 0;
let resultTimer = 0;
let announcementFrame = 0;

function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function updateLine() {
  const points = activatedSignals.map(function (node) {
    return node.dataset.x + "," + node.dataset.y;
  });

  activeLine.setAttribute("points", points.join(" "));
}

function setNodeCoordinates() {
  nodes.forEach(function (node) {
    const styles = getComputedStyle(node);
    node.dataset.x = styles.getPropertyValue("--x").trim();
    node.dataset.y = styles.getPropertyValue("--y").trim();
  });

  updateLine();
}

function updateHint(message) {
  window.clearTimeout(hintTimer);
  signalHint.classList.remove("is-visible");

  hintTimer = window.setTimeout(function () {
    hintTimer = 0;
    signalHint.textContent = message;
    signalHint.classList.add("is-visible");
  }, 80);
}

function announce(message) {
  window.cancelAnimationFrame(announcementFrame);
  signalAnnouncement.textContent = "";

  announcementFrame = window.requestAnimationFrame(function () {
    announcementFrame = 0;
    signalAnnouncement.textContent = message;
  });
}

function updateProgressStatus(extraText) {
  const count = activatedSignals.length;
  const suffix = extraText ? "，" + extraText : "";
  receiverStatus.textContent = "已点亮 " + count + " / " + nodes.length + suffix;
}

function showResultCard() {
  const result = pickRandom(resultPool);

  resultTitle.textContent = result.title;
  resultKeywords.textContent = result.keywords;
  resultAdvice.textContent = result.advice;
  resultCard.hidden = false;
  constellationWrap.classList.add("has-result");
  resultShown = true;
  updateProgressStatus("信号已连接。");
  updateHint("今日信号完整。");
  announce("今日信号完整：" + result.title + "。" + result.advice);
}

function activateSignal(node) {
  if (node.classList.contains("is-active")) {
    return;
  }

  node.classList.add("is-active");
  node.setAttribute("aria-pressed", "true");
  activatedSignals.push(node);
  updateLine();

  const id = node.dataset.id;

  updateProgressStatus();
  updateHint(signalMessages[id]);

  if (activatedSignals.length === nodes.length && !resultShown && !resultTimer) {
    resultTimer = window.setTimeout(function () {
      resultTimer = 0;

      if (activatedSignals.length === nodes.length && !resultShown) {
        showResultCard();
      }
    }, 520);
  }
}

async function revealDecodedSignal() {
  if (decodeInProgress || decodeButton.getAttribute("aria-disabled") === "true") {
    return;
  }

  const text = "今天也要开心一点。";
  const currentRun = decodeRun;

  decodeInProgress = true;
  decodeButton.setAttribute("aria-disabled", "true");
  decodeButton.textContent = "接收中";
  decodedSignal.hidden = false;
  decodedSignal.textContent = "";

  for (let i = 0; i < text.length; i++) {
    if (currentRun !== decodeRun) {
      return;
    }

    decodedSignal.textContent += text[i];
    await wait(90);
  }

  if (currentRun !== decodeRun) {
    return;
  }

  decodeInProgress = false;
  decodeButton.textContent = "信号已接收";
  announce("最后一段信号已接收：" + text);
}

function resetSignals() {
  decodeRun++;
  decodeInProgress = false;
  window.clearTimeout(hintTimer);
  window.clearTimeout(resultTimer);
  window.cancelAnimationFrame(announcementFrame);
  hintTimer = 0;
  resultTimer = 0;
  announcementFrame = 0;
  activatedSignals.length = 0;
  resultShown = false;
  signalAnnouncement.textContent = "";

  nodes.forEach(function (node) {
    node.classList.remove("is-active");
    node.setAttribute("aria-pressed", "false");
  });

  resultCard.hidden = true;
  constellationWrap.classList.remove("has-result");
  decodedSignal.hidden = true;
  decodedSignal.textContent = "";
  decodeButton.setAttribute("aria-disabled", "false");
  decodeButton.textContent = "接收最后一段信号";

  updateLine();
  updateProgressStatus("等待接收。");
  updateHint("点亮任意一颗信号。");
  nodes[0].focus();
}

function prepareConstellation() {
  nodes.forEach(function (node) {
    node.addEventListener("click", function () {
      activateSignal(node);
    });
  });

  setNodeCoordinates();
}

decodeButton.addEventListener("click", revealDecodedSignal);
resetButton.addEventListener("click", resetSignals);
window.addEventListener("resize", setNodeCoordinates);
updateProgressStatus("等待接收。");
prepareConstellation();
