const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const eMail = document.getElementById("email");
const passWord = document.getElementById("password");
const submit = document.querySelector(".button");

const inputElement = [firstName, lastName, eMail, passWord];

form.addEventListener("submit", (e) => {
  inputElement.forEach((element) => {
    if (!element.value) {
      element.previousElementSibling.classList.add("error");
      element.nextElementSibling.classList.add("error");
    } else {
      element.previousElementSibling.classList.remove("error");
      element.nextElementSibling.classList.remove("error");
    }
  });

  e.preventDefault();
});
