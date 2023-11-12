const createMenuCard = (image, name, ingredients) => {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-card");
  const itemName = document.createElement("h1");
  itemName.textContent = name;

  menuCard.appendChild(itemName);

  const icon = document.createElement("img");
  icon.src = image;
  icon.alt = `Icon of ${name}`;

  menuCard.appendChild(icon);

  const ingreds = document.createElement("p");
  ingreds.textContent = ingredients;
  menuCard.appendChild(ingreds);
  return menuCard;
};

const createMenu = () => {
  const main = document.createElement("div");
  main.classList.add("main");

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");
  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/colorato.png",
      "Coloroato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/carne.png",
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/salsiccia.png",
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/gamberi.png",
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/pepe.png",
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/disgustoso.png",
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/pomodoro.png",
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );

  menuGrid.appendChild(
    createMenuCard(
      "img/pizzas/crema.png",
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );

  main.appendChild(menuGrid);
  return main;
};

function loadMenu() {
  const content = document.getElementById("content");
  content.appendChild(createMenu());
}

export default loadMenu;
