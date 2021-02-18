const buttonAlert = document.querySelector("#mybutton");
const buttonBackground = document.querySelector("#mysecondbutton");
const giveAlert = () => alert("Button clicked");
const changeBackground = () => buttonBackground.parentElement.classList.toggle("red-background");

buttonAlert.addEventListener("click", giveAlert);
buttonBackground.addEventListener("click", changeBackground);