// TYPE ALIAS
// deklarasi tipe data nama dengan type
type Nama = string 
type Umur = number
type Semester = number
type MataKuliah = string[]; // array of string

// let nama: Nama;
// let umur: Umur;
// let semester: Semester;
// let mataKuliah: MataKuliah;



// nama = "Feliks"
// umur = 21
// semester = 8
// mataKuliah = ["MTK", "BHS INDO"]

type Dosen = {
  nama: Nama;
  umur: Umur;
  jurusan: string;
}

let dosen1: Dosen;
dosen1 = {
  nama: "Ujang",
  umur: 21,
  jurusan: "Elektro"
}