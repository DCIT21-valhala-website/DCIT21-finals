const links = document.getElementsByClassName("header-links");
const dropdown = document.getElementsByClassName("dropdown-content");
const linksContainer = document.getElementsByClassName("links");

if (links) {
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

if (linksContainer) {
  for (let i = 0; i < linksContainer.length; i++) {
    linksContainer[i].addEventListener("mouseover", () => {
      dropdown[0].classList.add("dropdown-content-hover");
    });
    linksContainer[i].addEventListener("mouseout", () => {
      dropdown[0].classList.remove("dropdown-content-hover");
    });
  }
}