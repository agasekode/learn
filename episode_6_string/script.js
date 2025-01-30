let dataString = "Ini Data String";
console.log(dataString);

// 1. Escaping String
let data1 = 'Si Ucup berkata "Apa kabar dunia!"';
console.log(data1);
let data2 = "Kata Otong \" Kabar Baik!\"";
console.log(data2);
let data3 = "Kemudian Ucup berjalan-jalan ke tepi pantai, \n Keren!";
console.log(data3);

// 2. Literal String
let namaDepan = "Ijichi";
let namaBelakang = "Nijika";
let umur = 17;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // Maka umur nya akan termasuk string
console.log(namaLengkap);

// lebih elegan agar tidak error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur} tahun!`;
console.log(biodata)