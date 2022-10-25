const range = () => {

  const valArray = document.querySelectorAll(".val");
  const activeNum = document.querySelector(".line__active-num");
  const input = document.querySelector(".title-num__input");
  let left = 80;

  activeNum.style.left = (left * 100) / 480 + "%";

  $(function () {
    $('.line').slider({
      range: 'min',
      min: 20,
      max: 500,
      value: 80,
      slide: function (event, ui) {
        let val = ui.value;

        activeNum.textContent = val;
        activeNum.style.left = (val * 100) / 480 + "%";

        input.value = val;
      }
    });
  });

  input.addEventListener("input", (e) => {
    let inputValue = input.value;

    if (inputValue < 20) {
      left = 20;
    } else if (inputValue > 500) {
      left = 500;
    } else {
      left = inputValue;
    }

    $('.line').slider("value", inputValue);
    activeNum.style.left = (left * 100) / 480 + "%";
    activeNum.textContent = inputValue;
  });
}

export default range;
