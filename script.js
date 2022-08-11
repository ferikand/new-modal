const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function toggle() {
  modal.classList.toggle("invisible");
}

openModal.addEventListener("click", function () {
  toggle();
});

closeModal.addEventListener("click", function () {
  toggle();
});
