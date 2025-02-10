// If Statment : Kalau kondisinya true, maka sebuah kode akan di eksekusi
//               Kalau gak, lakukan yang lain

const myLangganan = document.getElementById("myLangganan");
const gopayBtn = document.getElementById("gopayBtn");
const danaBtn = document.getElementById("danaBtn");
const transferBtn = document.getElementById("transferBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subPembayaran = document.getElementById("subPembayaran");
const hasilPembayaran = document.getElementById("hasilPembayaran");

mySubmit.onclick = function() {
    if(myLangganan.checked) {
        // console.log("Kamu telah berlangganan!")
        subPembayaran.textContent = "Kamu telah berlangganan!";
    }
    else {
        // console.log("Kamu belum berlangganan!")
        subPembayaran.textContent = "Kamu belum berlangganan!";
    }
    }

    if(gopayBtn.checked) {
        // console.log("Kamu membayar dengan Gopay!")
        hasilPembayaran.textContent = "Kamu membayar dengan Gopay!";
    }
    else if(danaBtn.checked) {
        // console.log("Kamu membayar dengan Dana!")
        hasilPembayaran.textContent = "Kamu membayar dengan Dana!";
    }
    else if(transferBtn.checked) {
        // console.log("Kamu membayar dengan Transfer Bank!")
        hasilPembayaran.textContent = "Kamu membayar dengan Transfer Bank!";
    }
    else if(paypalBtn.checked) {
        // console.log("Kamu membayar dengan paypal!")
        hasilPembayaran.textContent = "Kamu membayar dengan Paypal!";
    }
    else {
        // console.log("Silahkan pilih metode pmebayaran!")
        hasilPembayaran.textContent = "Silahkan pilih metode pmebayaran";
    }