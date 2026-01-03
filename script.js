let clickCount = 0;
let keyCount = 0;
let hoverCount = 0;
let startTime = Date.now();

const clickEl = document.getElementById("clickCount");
const keyEl = document.getElementById("keyCount");
const hoverEl = document.getElementById("hoverCount");
const timeEl = document.getElementById("timeSpent");
const logEl = document.getElementById("activityLog");

function logActivity(message) {
  const li = document.createElement("li");
  li.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  logEl.prepend(li);
}

document.getElementById("actionBtn").addEventListener("click", () => {
  clickCount++;
  clickEl.textContent = clickCount;
  logActivity("Button clicked");
});

document.getElementById("textInput").addEventListener("keydown", () => {
  keyCount++;
  keyEl.textContent = keyCount;
  logActivity("Keystroke detected");
});

document.getElementById("fakeLink").addEventListener("mouseover", () => {
  hoverCount++;
  hoverEl.textContent = hoverCount;
  logActivity("Hovered over link");
});

setInterval(() => {
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  timeEl.textContent = `${seconds}s`;
}, 1000);

