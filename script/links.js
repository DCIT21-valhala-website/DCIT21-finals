const links = document.getElementsByClassName("header-links");

if (links) {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
      links[i].classList.add("active");
    });
    links[i].addEventListener("mouseout", () => {
      links[i].classList.remove("active");
    });
  }
}
