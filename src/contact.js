const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const p1 = createParagraph("📞 0121 481 1844");

  const p2 = createParagraph("🏠 154 HIGHLAND PL BROOKLYN NY");

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");

  const img = document.createElement("img");
  img.src = "img/map.png";
  img.alt = "Map of restaurant in Brooklyn";
  img.classList.add("map-img");

  mapContainer.appendChild(img);

  contact.appendChild(p1);
  contact.appendChild(p2);
  contact.appendChild(mapContainer);

  return contact;
};

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default createContact;
