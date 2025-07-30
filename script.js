// script.js

function changeTitle() {
  const title = document.getElementById("main-title");
  if (title.innerText === "Evoke") {
    title.innerText = "Memory, Reimagined";
  } else {
    title.innerText = "Evoke";
  }
}
