const links = document.getElementsByClassName("header-links");
const dropdown = document.getElementById("dropdown-content");
const linksContainer = document.getElementsByClassName("links");

const featuresH1 = document.createElement("h1");
const featuresH1Text = document.createTextNode("Featured");
featuresH1.appendChild(featuresH1Text);

// * Add event listener to links
if (links) {
  // * Makes the other links grey when hovering over one
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
      for (let j = 0; j < links.length; j++) {
        if (j !== i) {
          links[j].style.color = "#acacac";
        }
      }
    });
    links[i].addEventListener("mouseout", () => {
      for (let j = 0; j < links.length; j++) {
        if (j !== i) {
          links[j].style.color = "#000";
        }
      }
    });
  }
}

// * Add event listener to dropdown
if (linksContainer) {
  // * Makes the dropdown stays open when hovering over it
  dropdown.addEventListener("mouseover", () => {
    dropdown.style.height = "20rem";
    dropdown.style.transition = "all 100ms ease";
  });
  dropdown.addEventListener("mouseout", () => {
    dropdown.style.transition = "none";
    dropdown.style.transform = "translateY(0)";
    dropdown.style.height = "0";
  });

  // * Makes the dropdown appear when hovering over the "New and Featured" link
  linksContainer[0].addEventListener("mouseover", () => {
    dropdown.style.height = "20rem";
    dropdown.style.transition = "all 100ms ease";

    // * Add content to dropdown
    
  });
  linksContainer[0].addEventListener("mouseout", () => {
    dropdown.style.transition = "none";
    dropdown.style.transform = "translateY(0)";
    dropdown.style.height = "0";
  });

  // * Makes the dropdown appear when hovering over the "Men" link
  linksContainer[1].addEventListener("mouseover", () => {
    dropdown.style.height = "20rem";
    dropdown.style.transition = "all 100ms ease";
  });
  linksContainer[1].addEventListener("mouseout", () => {
    dropdown.style.transition = "none";
    dropdown.style.transform = "translateY(0)";
    dropdown.style.height = "0";
  });

  // * Makes the dropdown appear when hovering over the "Women" link
  linksContainer[2].addEventListener("mouseover", () => {
    dropdown.style.height = "20rem";
    dropdown.style.transition = "all 100ms ease";
  });
  linksContainer[2].addEventListener("mouseout", () => {
    dropdown.style.transition = "none";
    dropdown.style.transform = "translateY(0)";
    dropdown.style.height = "0";
  });

  // * Makes the dropdown appear when hovering over the "Kids" link
  linksContainer[3].addEventListener("mouseover", () => {
    dropdown.style.height = "20rem";
    dropdown.style.transition = "all 100ms ease";
  });
  linksContainer[3].addEventListener("mouseout", () => {
    dropdown.style.transition = "none";
    dropdown.style.transform = "translateY(0)";
    dropdown.style.height = "0";
  });

  // * Makes the dropdown appear when hovering over the "Sale" link
  linksContainer[4].addEventListener("mouseover", () => {
    dropdown.style.height = "20rem";
    dropdown.style.transition = "all 100ms ease";
  });
  linksContainer[4].addEventListener("mouseout", () => {
    dropdown.style.transition = "none";
    dropdown.style.transform = "translateY(0)";
    dropdown.style.height = "0";
  });
}