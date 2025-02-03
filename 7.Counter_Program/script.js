// Fungsi untuk menghitung 
let count = 0;

// Fungsi untuk menambahkan angka
document.getElementById("increaseButton").onclick = function() {
    count++;
    document.getElementById("labelContent").textContent = count;
}

// Fungsi untuk menurunkan Angka
document.getElementById("decreaseButton").onclick = function() {
    count--;
    document.getElementById("labelContent").textContent = count;
}

// Fungsi untuk reset penghitung
document.getElementById("resetButton").onclick = function() {
    count = 0;
    document.getElementById("labelContent").textContent = count;
}