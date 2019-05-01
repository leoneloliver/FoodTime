const modal = document.getElementById('myModal');
const btn = document.getElementsByClassName("open-modal");
const openModal = function() {
  modal.style.display = "block";
}
Array.from(btn).forEach(function(element) {
  element.addEventListener("click", openModal);
});
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}