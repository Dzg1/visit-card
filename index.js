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
const randomy1 = Math.floor(Math.random() * 330 + 220) + "px";
const randomx1 = Math.floor(Math.random() * 270 + 30) + "px";
const randomy2 = Math.floor(Math.random() * 330 + 220) + "px";
const randomx2 = Math.floor(Math.random() * 270 + 30) + "px";
const randomy3 = Math.floor(Math.random() * 330 + 220) + "px";
const randomx3 = Math.floor(Math.random() * 270 + 30) + "px";
const randomy4 = Math.floor(Math.random() * 330 + 220) + "px";
const randomx4 = Math.floor(Math.random() * 270 + 30) + "px";
const randomy5 = Math.floor(Math.random() * 330 + 220) + "px";
const randomx5 = Math.floor(Math.random() * 270 + 30) + "px";
(() => {
  iconrso1.style.top = Math.floor(Math.random() * 330 + 220) + "px";
  iconrso1.style.left = Math.floor(Math.random() * 270 + 30) + "px";
  iconrso2.style.top = Math.floor(Math.random() * 330 + 220) + "px";
  iconrso2.style.left = Math.floor(Math.random() * 270 + 30) + "px";
  iconrso3.style.top = Math.floor(Math.random() * 330 + 220) + "px";
  iconrso3.style.left = Math.floor(Math.random() * 270 + 30) + "px";
  iconrso4.style.top = Math.floor(Math.random() * 330 + 220) + "px";
  iconrso4.style.left = Math.floor(Math.random() * 270 + 30) + "px";
  iconrso5.style.top = Math.floor(Math.random() * 330 + 220) + "px";
  iconrso5.style.left = Math.floor(Math.random() * 270 + 30) + "px";
})();

reseaux.addEventListener("mouseover", () => {});

iconrso1.addEventListener("mouseover", () => {});

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
});
logorso1.addEventListener("mouseout", () => {
  spanrso1.style.opacity = "0";
  spanh2.style.opacity = "1";
});

logorso2.addEventListener("mouseover", () => {
  spanrso2.style.opacity = "1";
  spanh2.style.opacity = "0";
});
logorso2.addEventListener("mouseout", () => {
  spanrso2.style.opacity = "0";
  spanh2.style.opacity = "1";
});

logorso3.addEventListener("mouseover", () => {
  spanrso3.style.opacity = "1";
  spanh2.style.opacity = "0";
});
logorso3.addEventListener("mouseout", () => {
  spanrso3.style.opacity = "0";
  spanh2.style.opacity = "1";
});

logorso4.addEventListener("mouseover", () => {
  spanrso4.style.opacity = "1";
  spanh2.style.opacity = "0";
});
logorso4.addEventListener("mouseout", () => {
  spanrso4.style.opacity = "0";
  spanh2.style.opacity = "1";
});
logorso5.addEventListener("mouseover", () => {
  spanrso5.style.opacity = "1";
  spanh2.style.opacity = "0";
});
logorso5.addEventListener("mouseout", () => {
  spanrso5.style.opacity = "0";
  spanh2.style.opacity = "1";
});
