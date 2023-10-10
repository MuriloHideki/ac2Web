var title = "CVV - Form";

function start() {
  document.getElementById("brand").innerText = title;
  document.getElementById("card2").style.display = "none";
  document.getElementById("card3").style.display = "none";

  //TESTE
  document.getElementById("card1").style.display = "none";
  document.getElementById("card2").style.display = "none";
  document.getElementById("card3").style.display = "flex";
}

function nextForm1() {
  document.getElementById("card2").style.display = "flex";
  document.getElementById("card1").style.display = "none";
}

function nextForm2() {
  document.getElementById("card3").style.display = "flex";
  document.getElementById("card2").style.display = "none";
}

function previousForm2() {
  document.getElementById("card1").style.display = "flex";
  document.getElementById("card2").style.display = "none";
}

function previousForm3() {
  document.getElementById("card2").style.display = "flex";
  document.getElementById("card3").style.display = "none";
}
