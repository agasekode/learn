// If Statment : Kalau kondisinya true, maka sebuah kode akan di eksekusi
//               Kalau gak, lakukan yang lain

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const hasilElemen = document.getElementById("hasilElemen");

let umur;

mySubmit.onclick = function() {
    umur = Number(myText.value)

    if (umur >= 100) {
        // console.log("Terlalu tua!");
        hasilElemen.textContent = `Terlalu TUA!`;
    }
    else if (umur == 0) {
        // console.log("Gak Boleh!");
        hasilElemen.textContent = `Gak Boleh!`;
    }
    else if (umur < 0) {
        // console.log("Gak Boleh!");
        hasilElemen.textContent = `Gak Boleh di bawah nol!`;
    }
    else if (umur >= 18) {
        // console.log("Kamu sudah cukup umur!");
        hasilElemen.textContent = `Kamu sudah cukup umur`;
    }
    else {
        // console.log("Kamu harus berumur 18+ untuk mendaftar!");\
        hasilElemen.textContent = `Kamu harus berumur 18+ untuk mendaftar!`;
    }
};


