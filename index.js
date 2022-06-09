const langue = document.getElementById("menu");
const langues = document.getElementById("main");
const logorso1 = document.getElementById("iconrso1");
const spanrso1 = document.getElementById("spanrso1");
const logorso2 = document.getElementById("iconrso2");
const spanrso2 = document.getElementById("spanrso2");
const logorso3 = document.getElementById("iconrso3");
const spanrso3 = document.getElementById("spanrso3");
const logorso4 = document.getElementById("iconrso4");
const spanrso4 = document.getElementById("spanrso4");
const logorso5 = document.getElementById("iconrso5");
const spanrso5 = document.getElementById("spanrso5");
const spanh2 = document.getElementById("spanh2");
const animation = document.getElementById("shooted");
const logorso = document.getElementById("logorso");
const card1 = document.getElementById("c1");
const card2 = document.getElementById("c2");
const card3 = document.getElementById("c3");

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

/*****RESEAUX******/

logorso1.addEventListener("mouseover", () => {
  spanrso1.style.opacity = "1";
  spanh2.style.opacity = "0";
  reseauxtitle.style.color = "black";
});
logorso1.addEventListener("mouseout", () => {
  spanrso1.style.opacity = "0";
  spanh2.style.opacity = "1";
  reseauxtitle.style.color = "rgb(31, 224, 124)";
});

logorso2.addEventListener("mouseover", () => {
  spanrso2.style.opacity = "1";
  spanh2.style.opacity = "0";
  reseauxtitle.style.color = "rgb(114,137,218)";
});
logorso2.addEventListener("mouseout", () => {
  spanrso2.style.opacity = "0";
  spanh2.style.opacity = "1";
  reseauxtitle.style.color = "rgb(31, 224, 124)";
});

logorso3.addEventListener("mouseover", () => {
  spanrso3.style.opacity = "1";
  spanh2.style.opacity = "0";
  reseauxtitle.style.color = "rgb(14,118,168)";
});
logorso3.addEventListener("mouseout", () => {
  spanrso3.style.opacity = "0";
  spanh2.style.opacity = "1";
  reseauxtitle.style.color = "rgb(31, 224, 124)";
});

logorso4.addEventListener("mouseover", () => {
  spanrso4.style.opacity = "1";
  reseauxtitle.style.opacity = "0";
  reseauxtitle.style.color = "yellow";
});
logorso4.addEventListener("mouseout", () => {
  spanrso4.style.opacity = "0";
  reseauxtitle.style.opacity = "1";
  reseauxtitle.style.color = "rgb(31, 224, 124)";
});
logorso5.addEventListener("mouseover", () => {
  spanrso5.style.opacity = "1";
  spanh2.style.opacity = "0";
  reseauxtitle.style.color = "rgb(29,161,242)";
});
logorso5.addEventListener("mouseout", () => {
  spanrso5.style.opacity = "0";
  spanh2.style.opacity = "1";
  reseauxtitle.style.color = "rgb(31, 224, 124)";
});

/************card***************/

let c1Clicked = false;
let c2Clicked = false;
let c3Clicked = false;

card1.addEventListener("click", () => {
  c1Clicked = !c1Clicked;
  c1Clicked
    ? card1.classList.add("c1clicked")
    : card1.classList.remove("c1clicked");
  console.log(c1Clicked);
});

card2.addEventListener("click", () => {
  c2Clicked = !c2Clicked;
  c2Clicked
    ? card2.classList.add("c2clicked")
    : card2.classList.remove("c2clicked");
  console.log(c2Clicked);
});

card3.addEventListener("click", () => {
  c3Clicked = !c3Clicked;
  c3Clicked
    ? card3.classList.add("c3clicked")
    : card3.classList.remove("c3clicked");
  console.log(c3Clicked);
});

/******like********/
const oui = document.getElementById("labeloui");
const non = document.getElementById("labelnon");

function check() {
  oui.checked = true;
}
function uncheck() {
  non.checked = false;
}
console.log(check);
console.log(uncheck);
