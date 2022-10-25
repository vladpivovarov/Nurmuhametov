const heroForm = () => {

  const form = document.querySelector(".hero__form");

  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("sendmailhero.php", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        let result = await response.json();
        form.reset();
        form.classList.remove("_sending");
        form.classList.add("_ok");

        setTimeout(function () {
          form.classList.remove("_ok");
        }, 3000);
      } else {
        form.classList.add("_no");
        form.classList.remove("_sending");

        setTimeout(function () {
          form.classList.remove("_no");
        }, 3000);
      }
    } else {
      console.log("Заполните поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      // Проверка поля email, chekbox(согласия на обработку данных) и текстовых полей
      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  // Функция теста Email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
}

export default heroForm;
