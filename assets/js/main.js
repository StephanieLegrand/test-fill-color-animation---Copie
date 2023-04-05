const resetButton = document.querySelector(".resetAnimation");
const maskedImage = document.querySelector(".drawImage");

resetButton.addEventListener("click",() =>{
  maskedImage.classList.remove("maskAnimation");
  setTimeout(() => maskedImage.classList.add("maskAnimation"), 100);
});
