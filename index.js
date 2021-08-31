//this detects button press-> calls makesound()
var btn = document.querySelectorAll('.drum');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function() {
    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    animate(buttonInnerHtml);
    setTimeout(function() {
      reset(buttonInnerHtml);
    }, 100);
  })
}

//this detects keyboard press->calls makesound()
document.addEventListener("keydown", function(e) {
  //.key is property of event e -> tells which key is pressed.
  makesound(e.key);
  animate(e.key);
  setTimeout(function() {
    reset(e.key);
  }, 100);
})

//plays the audio based on the value of key pressed on button press.
//in default case outputs the key value which is pressed in the consoleLog.
function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

function animate(key) {
  var buttonPressed = document.querySelector("." + key);
  buttonPressed.classList.add("pressed");
}

function reset(key) {
  var buttonPressed = document.querySelector("." + key);
  buttonPressed.classList.remove("pressed");
}