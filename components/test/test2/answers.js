function answShowHide(e) {
	var answer = document.querySelector(".answer");
  if(answer.classList.contains("show-answer")) {
  	answer.classList.remove("show-answer");
  } else {
  	answer.classList.add("show-answer");
  }
}