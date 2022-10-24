const scroll = () => {

  const navBar = document.querySelector(".nav");
  const links = navBar.querySelectorAll(".nav__link");
  const header = document.querySelector(".header__right");
  const button = document.querySelector(".header__burger");

  // Реализация плавного скролла по id
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const linkHref = link.getAttribute("href");
      const section = document.querySelector(linkHref);
      if (linkHref.indexOf('#') > -1) {
        event.preventDefault();
      }

      if (section) {
        // Скролл с помощью библиотеки (кроссбарузерно)
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });

        if (header.classList.contains("header__right_active")) {
          header.classList.remove("header__right_active");
          button.classList.remove("open");
        }

        // Обычный скролл
        // section.scrollIntoView({
        //   block: "start",
        //   behavior: "smooth"
        // })
      }
    })
  })

}

export default scroll;
