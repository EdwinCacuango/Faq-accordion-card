const btnQuestion = document.getElementsByClassName("btn-question");
const answers = document.getElementsByClassName("answer");

// console.log(answers);

for (let i = 0; i < btnQuestion.length; i++) {
  btnQuestion[i].addEventListener("click", function() {

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


