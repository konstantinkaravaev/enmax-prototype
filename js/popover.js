const btn = document.querySelector(".service-details__form-additional-info");
const content = document.querySelector(".popover__content");
const wrapper = document.querySelector(".popover__wrapper");

btn.addEventListener("click", showPopup);
content.addEventListener("click", removePopup);

function showPopup() {
  content.classList.add("show");
  wrapper.classList.add("show");

  if (content.classList.contains("show")) {
    console.log("hi");
    window.addEventListener("touchstart", removePopup);
  }
}

function removePopup() {
  content.classList.remove("show");
  wrapper.classList.remove("show");

  // window.removeEventListener("click", removePopup);
}
