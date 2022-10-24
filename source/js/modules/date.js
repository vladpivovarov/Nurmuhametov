const date = () => {

  const dataElem = document.querySelector(".year");
  const time = new Date();
  const year = time.getFullYear();

  dataElem.textContent = year;
}

export default date;
