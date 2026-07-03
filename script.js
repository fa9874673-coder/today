// 这个文件只负责页面互动，不会收集信息，也不会请求任何设备权限。

// 日志文案：以后想改扫描过程，只需要修改这个数组。
const scanLogs = [
  "正在校准今日心情频率……",
  "正在捕捉微弱可爱信号……",
  "正在分析快乐电量……",
  "正在计算奶茶补给优先级……",
  "正在生成专属状态报告……"
];

// 幸运关键词：以后想增加或删除关键词，直接改这里。
const luckyKeywords = [
  "奶茶",
  "微笑",
  "晴天",
  "发呆片刻",
  "轻松充电",
  "小零食",
  "早睡",
  "好运",
  "慢慢来",
  "保持可爱",
  "开心一点"
];

// 最终结论：以后想换成自己的梗，直接改这里。
const finalMessages = [
  "系统结论：今日状态良好，建议奖励一杯奶茶。",
  "系统结论：检测到可爱能量偏高，请继续保持。",
  "系统结论：快乐电量略低，建议补充小零食。",
  "系统结论：今日适合被温柔对待。",
  "系统结论：好运正在靠近，请注意接收。",
  "系统结论：建议今日少烦恼一点，多开心一点。",
  "系统结论：发呆概率合理，允许短暂放空。",
  "系统结论：今日信号稳定，适合慢慢变开心。"
];

// 获取页面元素，集中放在这里方便初学者理解。
const scanButton = document.getElementById("scanButton");
const buttonText = document.getElementById("buttonText");
const logList = document.getElementById("logList");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const resultPanel = document.getElementById("resultPanel");

// 生成 0 到 100 的随机整数。
function getRandomScore() {
  return Math.floor(Math.random() * 101);
}

// 从数组里随机取一项。
function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

// 等待指定时间，用来制造终端一行一行出现的感觉。
function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

// 重置界面，准备开始新一轮检测。
function resetScanner() {
  logList.innerHTML = "";
  resultPanel.hidden = true;
  resultPanel.innerHTML = "";
  progressBar.style.width = "0%";
  progressText.textContent = "0%";
}

// 在终端区域添加一行日志。
function addLog(text) {
  const line = document.createElement("p");
  line.className = "log-line";
  line.textContent = text;
  logList.appendChild(line);
}

// 更新进度条和百分比文字。
function updateProgress(percent) {
  progressBar.style.width = percent + "%";
  progressText.textContent = percent + "%";
}

// 生成并显示最终报告。
function showReport() {
  const report = {
    energyScore: getRandomScore(),
    cuteEnergy: getRandomScore(),
    feedNeed: getRandomScore(),
    daydreamRate: getRandomScore(),
    happyBattery: getRandomScore(),
    luckDensity: getRandomScore(),
    keyword: pickRandom(luckyKeywords),
    message: pickRandom(finalMessages)
  };

  resultPanel.innerHTML = `
    <h2 class="result-title">专属状态报告已生成</h2>
    <div class="result-grid">
      <div class="result-item">
        <p class="result-label">今日元气值</p>
        <p class="result-value">${report.energyScore}</p>
      </div>
      <div class="result-item">
        <p class="result-label">可爱能量</p>
        <p class="result-value">${report.cuteEnergy}</p>
      </div>
      <div class="result-item">
        <p class="result-label">被投喂需求</p>
        <p class="result-value">${report.feedNeed}</p>
      </div>
      <div class="result-item">
        <p class="result-label">发呆概率</p>
        <p class="result-value">${report.daydreamRate}</p>
      </div>
      <div class="result-item">
        <p class="result-label">快乐电量</p>
        <p class="result-value">${report.happyBattery}</p>
      </div>
      <div class="result-item">
        <p class="result-label">好运浓度</p>
        <p class="result-value">${report.luckDensity}</p>
      </div>
      <div class="result-item">
        <p class="result-label">今日幸运关键词</p>
        <p class="result-value keyword">${report.keyword}</p>
      </div>
    </div>
    <p class="final-message">${report.message}</p>
  `;

  resultPanel.hidden = false;
}

// 主流程：点击按钮后，依次显示日志、推进进度、生成报告。
async function startScan() {
  scanButton.disabled = true;
  scanButton.classList.add("is-running");
  buttonText.textContent = "检测中";

  resetScanner();

  for (let i = 0; i < scanLogs.length; i++) {
    addLog(scanLogs[i]);

    const percent = Math.round(((i + 1) / scanLogs.length) * 100);
    updateProgress(percent);

    await wait(620);
  }

  addLog("检测完成。报告输出中……");
  await wait(350);

  showReport();

  scanButton.disabled = false;
  scanButton.classList.remove("is-running");
  buttonText.textContent = "重新检测";
}

// 给按钮绑定点击事件。
scanButton.addEventListener("click", startScan);
