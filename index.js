const langue = document.getElementById("menu");
const langues = document.getElementById("main");
const logorso = document.getElementsByClassName("iconrso");
const spanrso = document.getElementsByClassName("spanrso");

langue.addEventListener("mouseover", () => {
  langues.style.display = "grid";
});
langues.addEventListener("mouseover", () => {
  langues.style.display = "grid";
});
langue.addEventListener("mouseout", () => {
  langues.style.display = "none";
});
langues.addEventListener("mouseout", () => {
  langues.style.display = "none";
});

logorso.addEventListener("mouseover", () => {
  spanrso.style.opacity = "1";
});
logorso.addEventListener("mouseout", () => {
  spanrso.style.opacity = "0";
});
