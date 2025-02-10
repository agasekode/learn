// Cara menerima  input user

// Cara Mudah: Menggunakan window.prompt
// Cara Professional: HTML Textbox

// let userName;

// userName = window.prompt("Apa username mu?");

// console.log(userName);
let username

document.getElementById("inputSubmit").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("greetings").textContent = `Welcome ${username}!`;
}