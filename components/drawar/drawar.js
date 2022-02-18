const menuBtn = document.querySelector(".drawar-menu-btn");
const drawar = document.querySelector(".drawar-container");
const closeBtn = document.querySelector(".drawar-close");
document.onclick = (e) => {
  const classList = e.target.classList;
  console.log(classList);
  if (
    !classList.contains("drawar-container") &&
    !classList.contains("fa-bars")
  ) {
    drawar.classList.add("drawer-trans-off");
    drawar.classList.remove("drawer-trans-on");
  }
};

menuBtn.addEventListener("click", () => {
  drawar.classList.add("drawer-trans-on");
  drawar.classList.remove("drawer-trans-off");
});

closeBtn.addEventListener("click", () => {
  drawar.classList.add("drawer-trans-off");
  drawar.classList.remove("drawer-trans-on");
});
