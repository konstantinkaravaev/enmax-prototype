const refs = {
  formCheckLeft: document.querySelector(".form-check.left"),
  formCheckRight: document.querySelector(".form-check.right"),

  inputOne: document.getElementById("flexRadioDefault1"),
  inputTwo: document.getElementById("flexRadioDefault2"),
};

refs.formCheckLeft.addEventListener("click", onChangeColorLeft);
refs.formCheckRight.addEventListener("click", onChangeColorRight);

function onChangeColorLeft(event) {
  removeActiveClass();
  event.currentTarget.classList.add("active");
  refs.inputOne.checked = true;
}

function onChangeColorRight(event) {
  removeActiveClass();
  event.currentTarget.classList.add("active");
  refs.inputTwo.checked = true;
}

function removeActiveClass() {
  const currentActiveClass = document.querySelector(".form-check.active");

  if (currentActiveClass) {
    currentActiveClass.classList.remove("active");
  }
}
