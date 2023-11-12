import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";
console.log("Hello World!");

const content = document.getElementById("content");

loadHome();

const showContactPage = () => {
  content.innerHTML = "";
  loadContact();
};

const showMenuPage = () => {
  content.innerHTML = "";
  loadMenu();
};

const showHomePage = () => {
  content.innerHTML = "";
  loadHome();
};

const contactBtn = document.getElementById("btn-contact");
contactBtn.addEventListener("click", showContactPage);

const menuBtn = document.getElementById("btn-menu");
menuBtn.addEventListener("click", showMenuPage);

const homeBtn = document.getElementById("btn-home");
homeBtn.addEventListener("click", showHomePage);
