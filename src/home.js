const createHome = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  const home = document.createElement("div");
  home.classList.add("home");

  const p1 = createParagraph("The ancestoral home of Garlic Bread*");

  const p2 = createParagraph("*in Brooklyn");
  p2.classList.add("small");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = "img/chef.png";
  img.alt = "Image of a chef";
  img.classList.add("chef-img");

  imgContainer.appendChild(img);

  const p3 = createParagraph("Order online or visit us!");

  home.appendChild(p1);
  home.appendChild(p2);
  home.appendChild(imgContainer);
  home.appendChild(p3);

  main.appendChild(home);
  return main;
};

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const content = document.getElementById("content");
  content.appendChild(createHome());
}

export default loadHome;
