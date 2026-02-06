let current = 0;
let answers = Array(questions.length).fill(null);
let time = 30 * 60;
let submitted = false;

function renderQuestion() {
  const q = questions[current];
  let html = `<h3>Câu ${q.id}</h3>`;

  // ===== HIỂN THỊ ĐOẠN VĂN NẾU CÓ =====
  if (q.passage) {
    html += `
      <div class="passage" style="
        white-space: pre-line;
        padding: 12px;
        background: #f5f7fa;
        border-left: 4px solid #2c7be5;
        margin-bottom: 12px;
        line-height: 1.6;
      ">
        ${q.passage}
      </div>
    `;
  }

  // ===== CÂU HỎI =====
  html += `<p>${q.question}</p>`;

  // ===== ĐÁP ÁN =====
  q.options.forEach((opt, i) => {
    const checked = answers[current] === i ? "checked" : "";
    html += `
      <label>
        <input type="radio" name="option" ${checked}
        onclick="selectAnswer(${i})">
        ${opt}
      </label><br>
    `;
  });

  // ===== LỜI GIẢI =====
  if (submitted) {
    html += `
      <p class="explain" style="color:#0a7d27">
        <b>Lời giải:</b> ${q.explanation}
      </p>
    `;
  }

  document.getElementById("question-box").innerHTML = html;
}

function selectAnswer(i) {
  answers[current] = i;
  renderQuestionList();
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function renderQuestionList() {
  let html = "";
  answers.forEach((a, i) => {
    let cls = a !== null ? "done" : "";
    html += `<button class="${cls}" onclick="goTo(${i})">${i + 1}</button>`;
  });
  document.getElementById("question-list").innerHTML = html;
}

function goTo(i) {
  current = i;
  renderQuestion();
}

function submitTest() {
  submitted = true;
  let score = 0;
  answers.forEach((a, i) => {
    if (a === questions[i].correct) score++;
  });
  document.getElementById("result").innerHTML =
    `✅ Số câu đúng: ${score}/${questions.length}`;
  document.getElementById("result").classList.remove("hidden");
  renderQuestion();
}

setInterval(() => {
  if (time > 0 && !submitted) {
    time--;
    document.getElementById("timer").innerText =
      "Thời gian: " +
      Math.floor(time / 60) + ":" +
      (time % 60).toString().padStart(2, "0");
  }
}, 1000);

renderQuestion();
renderQuestionList();
