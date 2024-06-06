const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const expandBtn = document.querySelectorAll(".expand-btn");

const myFunction = (item, index) => {
  item.addEventListener("click", () => {
    expandBtn[index].classList.toggle("expanded");

    if (answers[index].style.maxHeight) {
      answers[index].style.maxHeight = null;
    } else {
      answers[index].style.maxHeight = answers[index].scrollHeight + "px";
    }
  });
};

questions.forEach((item, index) => myFunction(item, index));
expandBtn.forEach((item, index) => myFunction(item, index));
