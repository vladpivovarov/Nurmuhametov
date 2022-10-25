const video = () => {


  const options = {
    fluid: true,
    responsive: true
  };

  const modal = document.querySelector(".modal-video");
  const close = modal.querySelector(".close");
  const modalInner = modal.querySelector(".modal-video__inner");
  const btn = document.querySelector(".video-link");

  const player = videojs('my-video', options, function onPlayerReady() {

    const video = this;

    // При клике на одну из кнопок отображаем модальное окно
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("modal-video_active");
      video.play();
    });

    modal.addEventListener("click", (event) => {
      const clickedElementsTree = event.composedPath();

      if (clickedElementsTree.includes(modalInner)) {
        return;
      } else {
        modal.classList.remove("modal-video_active");
        video.pause();
      }
    })

    close.addEventListener("click", (e) => {
      e.preventDefault();

      if (modal.classList.contains("modal-video_active")) {
        modal.classList.remove("modal-video_active");
      }

      video.pause();
    })
  });



}

export default video;
