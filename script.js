const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const expandBtn = document.querySelectorAll(".expand-btn");

const myFunction = (item, index) => {
  item.addEventListener("click", () => {
    expandBtn[index].classList.toggle("expanded");
    answers[index].classList.toggle("hidden");
  });
};

questions.forEach((item, index) => myFunction(item, index));
expandBtn.forEach((item, index) => myFunction(item, index));
