mixer.style.display = 'none';
function winner() {
  document.getElementById("demo").style.visibility = "visible";
  var castigator = Math.floor(Math.random() * 10);
  if(castigator > 5) {
    confetti({
      particleCount: 500,
      spread: 120,
      origin: {
        y: 0.6
    }
  });
  mixer.style.display = 'block';
  document.getElementById("demo").innerHTML = "The treasure is yours";
  } else {
        document.getElementById("demo").innerHTML = "Bad luck. Do you want to try again?"
    }
}

function reset() {
  mixer.style.display = 'none';
  document.getElementById("demo").style.visibility = "hidden";
}
