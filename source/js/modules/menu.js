const menu = () => {
  const button = document.querySelector(".header__burger");
  const header = document.querySelector(".header__right");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!header.classList.contains("header__right_active")) {
      header.classList.add("header__right_active");
      button.classList.add("open");
    } else {
      header.classList.remove("header__right_active");
      button.classList.remove("open");
    }
  })
}

export default menu;
