const inputs = document.querySelectorAll(".input__field");
const toggle = document.querySelectorAll(".toggle");
const main = document.querySelector(".main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");

    // Atualizar o slider ao alternar o modo
    const index = main.classList.contains("sign-up-mode") ? 2 : 1; // 2 para sign-up, 1 para sign-in
    updateSlider(index);
  });
});

function moveSlider() {
  let index = this.dataset.value;
  updateSlider(index);
}

function updateSlider(index) {
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  bullets.forEach((bull) => bull.classList.remove("active"));
  const activeBullet = document.querySelector(`.bullets span[data-value="${index}"]`);
  if (activeBullet) activeBullet.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
