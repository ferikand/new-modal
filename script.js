const openModal = document.getElementById("open-modal");

const closeModal = document.getElementById("close-modal");

const modal = document.getElementById("modal");

const overlay = document.getElementById("overlay");

modal.classList.add("invisible");

openModal.addEventListener("click", function () {
  modal.classList.remove("invisible");
});

closeModal.addEventListener("click", function () {
  modal.classList.add("invisible");
});
