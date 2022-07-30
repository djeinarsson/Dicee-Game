var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.ceil(randomNumber1);

var randomimagesrc1 = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimagesrc1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.ceil(randomNumber2);

var randomimagesrc2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

if (randomNumber1 > randomNumber2)
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
else if (randomNumber1 < randomNumber2)
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
else if (randomNumber1 === randomNumber2)
  document.querySelector("h1").innerHTML = "Draw!";
