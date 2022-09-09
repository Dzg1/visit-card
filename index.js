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
/*******
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
***********/
/*****RESEAUX******/
/*
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

/******like********/
const oui = document.getElementById("oui");
const labeloui = document.getElementById("labeloui");
const non = document.getElementById("non");
const merci = document.getElementById("merci");

oui.addEventListener("click", () => {
  merci.style.transform = "translateY(-150px) rotate(3deg)";
  labeloui.style.background = "rgb(0, 128, 128)";
  labeloui.style.boxShadow =
    "inset 5px 5px 10px rgb(0, 84, 84), inset -5px -5px 10px rgb(0, 172, 172), 5px 5px 10px rgb(0, 84, 84),-5px -5px 10px rgb(0, 172, 172)";
});

non.addEventListener("click", () => {
  merci.style.transform = "translateY(0px) rotate(3deg)";
  labeloui.style.background = "linear-gradient(145deg, #008989, #007373)";
  labeloui.style.boxShadow =
    "5px 5px 10px rgb(0, 108, 108), -5px -5px 10px rgb(0, 148, 148)";
});

function toggleMEnu() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
  });
}
toggleMEnu();

const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

const areg1 = document.querySelector(".areg1");
const main = document.querySelector("#main");
areg1.addEventListener("click", () => {
  main.classList.toggle("toggle");
});
main.addEventListener("mouseleave", () => {
  main.classList.remove("toggle");
});
const dmm = document.querySelector(".dmm");
const areg2 = document.querySelector(".areg2");
areg2.addEventListener("click", () => {
  dmm.classList.toggle("toggle2");
});

dmm.addEventListener("mouseleave", () => {
  dmm.classList.remove("toggle2");
});
let tbc = document.querySelector(".telBubbleCard");
let mbc = document.querySelector(".mailBubbleCard");
let tel = document.querySelector(".tel");

tel.addEventListener("click", () => {
  navigator.clipboard.writeText("0764013766");
  tbc.classList.toggle("copied");
});
let mail = document.querySelector(".mail");
mail.addEventListener("click", () => {
  navigator.clipboard.writeText("dzg.contact2022@gmail.com");
  mbc.classList.toggle("copied");
});
let dmbtn = document.querySelector(".dmbtn");
let dmi = document.querySelector(".dmi");
let varFond = "--fond";
let varFond2 = "--fond2";
let ecriture = "--ecriture";
// dmbtn.addEventListener("click", () => {
//   dmi.classList.toggle("dmActived");
//   document.documentElement.style.setProperty(varFond, "#262626");
//   document.documentElement.style.setProperty(varFond2, "#262626");
//   document.documentElement.style.setProperty(varFond2, "#f1f1f1");
// });
let dmClickedFond = false;
let dmClickedFond2 = false;
let dmImg = false;
let darkMode = false;
let dmEcriture = false;
let c1ToC1Dark = false;
let C1DarkToC1 = false;
let c2ToC2Dark = false;
let C2DarkToC2 = false;
let c3ToC3Dark = false;
let C3DarkToC3 = false;
let c1Clicked = false;
let c2Clicked = false;
let c3Clicked = false;
let c1NoClicked = false;
let c2NoClicked = false;
let c3NoClicked = false;
let c1ClickedDark = false;
let c1noClickedDark = false;
let c2ClickedDark = false;
let c2noClickedDark = false;
let c3ClickedDark = false;
let c3noClickedDark = false;

let imgTitle = document.querySelector("#imglogotitle");
let c1 = document.querySelector("#c1");
let c1Dark = document.querySelector(".c1Dark");
let c2 = document.querySelector("#c2");
let c2Dark = document.querySelector(".c2Dark");
let c3 = document.querySelector("#c3");
let c3Dark = document.querySelector(".c3Dark");
let c1click = document.querySelector(".c1clicked");

dmbtn.addEventListener("click", () => {
  darkMode = !darkMode;
  darkMode;
  dmi.classList.toggle("dmActived");
  dmClickedFond = !dmClickedFond;
  dmClickedFond
    ? document.documentElement.style.setProperty(varFond, "#262626")
    : document.documentElement.style.setProperty(varFond, "#f1f1f1");
  dmClickedFond2 = !dmClickedFond2;
  dmClickedFond2
    ? document.documentElement.style.setProperty(varFond2, "#262626")
    : document.documentElement.style.setProperty(varFond2, "#dcdcdc");
  dmImg = !dmImg;
  dmImg
    ? (imgTitle.src = "./objet/darkDzg.gif")
    : (imgTitle.src = "./objet/dzg.gif");
  dmEcriture = !dmEcriture;
  dmEcriture
    ? document.documentElement.style.setProperty(ecriture, "white")
    : document.documentElement.style.setProperty(ecriture, "black");
  c1ToC1Dark = !c1ToC1Dark;
  c1ToC1Dark ? card1.classList.add("c1Dark") : card1.classList.remove("c1Dark");
  C1DarkToC1 = !C1DarkToC1;
  C1DarkToC1
    ? card1.classList.remove("c1noclicked")
    : card1.classList.add("c1noclicked");
  card1.classList.remove("c1clicked");
  card1.classList.remove("c1clickedDark");

  c2ToC2Dark = !c2ToC2Dark;
  c2ToC2Dark ? card2.classList.add("c2Dark") : card2.classList.remove("c2Dark");
  C2DarkToC2 = !C2DarkToC2;
  C2DarkToC2
    ? card2.classList.remove("c2noclicked")
    : card2.classList.add("c2noclicked");
  card2.classList.remove("c2clicked");
  card2.classList.remove("c2clickedDark");

  c3ToC3Dark = !c3ToC3Dark;
  c3ToC3Dark ? card3.classList.add("c1Dark") : card3.classList.remove("c3Dark");
  C3DarkToC3 = !C3DarkToC3;
  C3DarkToC3
    ? card3.classList.remove("c3noclicked")
    : card3.classList.add("c3noclicked");
  card3.classList.remove("c3clicked");
  card3.classList.remove("c3clickedDark");
});

card1.addEventListener("click", () => {
  if (darkMode == false) {
    c1Clicked = !c1Clicked;
    c1Clicked
      ? card1.classList.add("c1clicked")
      : card1.classList.remove("c1clicked");
    c1NoClicked = !c1NoClicked;
    c1NoClicked
      ? card1.classList.remove("c1noclicked")
      : card1.classList.add("c1noclicked");
  } else {
    c1ClickedDark = !c1ClickedDark;
    c1ClickedDark
      ? card1.classList.remove("c1clickedDark")
      : card1.classList.add("c1clickedDark");
    c1noClickedDark = !c1noClickedDark;
    c1noClickedDark
      ? card1.classList.add("c1Dark")
      : card1.classList.remove("c1Dark");
  }
});
card2.addEventListener("click", () => {
  if (darkMode == false) {
    c2Clicked = !c2Clicked;
    c2Clicked
      ? card2.classList.add("c2clicked")
      : card2.classList.remove("c2clicked");
    c2NoClicked = !c2NoClicked;
    c2NoClicked
      ? card2.classList.remove("c2noclicked")
      : card2.classList.add("c2noclicked");
  } else {
    c2ClickedDark = !c2ClickedDark;
    c2ClickedDark
      ? card2.classList.remove("c2clickedDark")
      : card2.classList.add("c2clickedDark");
    c2noClickedDark = !c2noClickedDark;
    c2noClickedDark
      ? card2.classList.add("c2Dark")
      : card2.classList.remove("c2Dark");
  }
});
card3.addEventListener("click", () => {
  if (darkMode == false) {
    c3Clicked = !c3Clicked;
    c3Clicked
      ? card3.classList.add("c3clicked")
      : card3.classList.remove("c3clicked");
    c3NoClicked = !c3NoClicked;
    c3NoClicked
      ? card3.classList.remove("c3noclicked")
      : card3.classList.add("c3noclicked");
  } else {
    c3ClickedDark = !c3ClickedDark;
    c3ClickedDark
      ? card3.classList.remove("c3clickedDark")
      : card3.classList.add("c3clickedDark");
    c3noClickedDark = !c3noClickedDark;
    c3noClickedDark
      ? card3.classList.add("c3Dark")
      : card3.classList.remove("c3Dark");
  }
});
