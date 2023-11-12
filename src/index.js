import createHome from "./home";
import createContact from "./contact";
import createMenu from "./menu";
console.log("Hello World!");

const content = document.getElementById("content");

const main = document.createElement("div");
main.classList.add("main");

content.appendChild(main);

main.appendChild(createHome());

const showContactPage = () => {
  main.textContent = "";
  main.appendChild(createContact());
};

const showMenuPage = () => {
  main.textContent = "";
  main.appendChild(createMenu());
};

const showHomePage = () => {
  main.textContent = "";
  main.appendChild(createHome());
};

const contactBtn = document.getElementById("btn-contact");
contactBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(contactBtn);
  showContactPage();
});

const menuBtn = document.getElementById("btn-menu");
menuBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(menuBtn);
  showMenuPage();
});

const homeBtn = document.getElementById("btn-home");
homeBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(homeBtn);
  showHomePage();
});

function setActiveButton(button) {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}
