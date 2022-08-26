const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbarLinks");
const close = document.querySelector(".close");

if (bar) {
  bar.addEventListener("click", () => {
    console.log("hi");
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
