const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
//   panels.forEach(
//     (panel) =>
//       [...panel.classList].includes("open") && panel.classList.remove("open")
//   );
  //   console.log([...this.classList].includes('open') ? true : false);
}

function toggleActive(e) {
  e.propertyName.includes("flex") && this.classList.toggle("open-active");
}

function toggleRemove() {
  this.classList.remove("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
