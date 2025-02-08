let angkaAcak = document.getElementById("angkaAcak");
let buttonAcak = document.getElementById("buttonAcak");

let min = 0;
let max = 100;

buttonAcak.onclick = function() {
    randomNum = Math.floor(Math.random(min) * max);
    angkaAcak.textContent = `${randomNum}`;
}