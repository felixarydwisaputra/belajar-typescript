// tanpa parameter (tipe void = tidak mengembalikan apa apa)
var cetakNama = function (nama) {
    console.log("Hallo nama saya ".concat(nama));
};
cetakNama("Feliks");
// dengan return
var jumlahAngka = function (angka1, angka2a) {
    return angka1 + angka2a;
};
console.log(jumlahAngka(2, 3));
