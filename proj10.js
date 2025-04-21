let timer;
let time = 0;

window.addEventListener("DOMContentLoaded", () => {
  const pieces = document.querySelectorAll(".piece");
  const zones = document.querySelectorAll(".drop-zone");
  const resetBtn = document.getElementById("resetBtn");

  pieces.forEach(piece => {
    piece.addEventListener("dragstart", dragStart);
  });

  zones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropPiece);
  });

  resetBtn.addEventListener("click", resetGame);
  startTimer();
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function dropPiece(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const piece = document.getElementById(id);

  if (e.target.dataset.correct === id && !e.target.querySelector(".piece")) {
    e.target.textContent = "";
    e.target.appendChild(piece);
    piece.setAttribute("draggable", false);
    checkWin();
  }
}

function checkWin() {
  const zones = document.querySelectorAll(".drop-zone");
  const complete = Array.from(zones).every(zone => {
    const child = zone.querySelector(".piece");
    return child && child.id === zone.dataset.correct;
  });

  if (complete) {
    stopTimer();
    document.getElementById("successMsg").textContent =
      `You matched all flags in ${time} seconds!`;
  }
}

function startTimer() {
  time = 0;
  document.getElementById("timer").textContent = "Time: 0s";
  timer = setInterval(() => {
    time++;
    document.getElementById("timer").textContent = `Time: ${time}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetGame() {
  const container = document.getElementById("piecesContainer");
  const pieces = document.querySelectorAll(".piece");
  const zones = document.querySelectorAll(".drop-zone");

  pieces.forEach(p => {
    p.setAttribute("draggable", true);
    container.appendChild(p);
  });

  zones.forEach(z => {
    const correctId = z.dataset.correct;
    if (correctId === "kr") z.textContent = "South Korea";
    else if (correctId === "us") z.textContent = "United States";
    else if (correctId === "jp") z.textContent = "Japan";
    else if (correctId === "fr") z.textContent = "France";
    else if (correctId === "de") z.textContent = "Germany";
    else if (correctId === "cn") z.textContent = "China";
    else if (correctId === "gb") z.textContent = "United Kingdom";
  });

  document.getElementById("successMsg").textContent = "";
  stopTimer();
  startTimer();
}
