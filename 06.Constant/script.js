// const = adalah variabel yang tidak dapat diubah

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submitRadius").onclick = function() {
    radius = document.getElementById("inputRadius").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("myH4").textContent = circumference;    
}   