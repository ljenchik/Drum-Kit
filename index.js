// document.querySelector("button").addEventListener("click", () => alert("Clicked!"));

//document.querySelector("button").addEventListener("click", function () {alert("Clicked!")});

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("Clicked!")
// }

// document.querySelector("button.w").addEventListener("click", () => alert("Clicked!"));
// document.querySelector("button.a").addEventListener("click", () => alert("Clicked!"));
// document.querySelector("button.s").addEventListener("click", () => alert("Clicked!"));
// document.querySelector("button.d").addEventListener("click", () => alert("Clicked!"));
// document.querySelector("button.j").addEventListener("click", () => alert("Clicked!"));
// document.querySelector("button.k").addEventListener("click", () => alert("Clicked!"));
// document.querySelector("button.l").addEventListener("click", () => alert("Clicked!"));

// document.querySelector(".set").addEventListener("click", () => alert("Clicked!"));

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    hit(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  let key = event.key;
  hit(key);
  buttonAnimation(key);
});

function hit(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
