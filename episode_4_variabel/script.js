// Ini merupakan Komen
// Javascript merupakann bahasa pemograman yang membaca nya secara baris per baris dari atas kode hingga akhir kode

// Ini merupakan variabel var (Yang sudah tidak digunakan di zaman sekarang)

// 1. variabel dengan var
// var namaDepan = "Ucup";
// Tampilkan data
// console.log(namaDepan);

// Kekurangan dari variabel var
// var namaBelakang = "Ganteng";
// {
//     var namaBelakang = "Ganteng";
//     console.log(namaBelakang);
// }
// console.log(namaBelakang);

// Jika var yang diluar scoop di hilangkan maka var yang ada di dalam scoop dianggap var global

// 2. variabel dengan let

let namaDepan = "Gotoh";

console.log(namaDepan);

let namaBelakang = "Futari";
{
    let namaBelakang = "Hitori";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// outpunya
/*
Gotoh
Hitori
Futari
*/

// 3. variabel dengan const

// Const merupakan variabel yang tidak akan bisa di ubah nilai variabelnya

const UserName = "Kessoku";
console.log(UserName);