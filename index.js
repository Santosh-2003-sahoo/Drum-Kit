`use strict`;
window.onload = function () {
  var audio = new Audio("sounds/entry.mp3");
  audio.play();
};

let numdrumlength = document.querySelectorAll(".drum").length;

for (let i = 0; i < numdrumlength; i++) {
  ["click", "mouseover"].forEach((event) => {
    document.querySelectorAll(`.drum`)[i].addEventListener(event, function () {
      let buttonInnerHTML = this.innerHTML;
      var audio = new Audio(`./sounds/${buttonInnerHTML}.mp3`);
      audio.play();
      animation(buttonInnerHTML);
    });
  });
}

function animation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
