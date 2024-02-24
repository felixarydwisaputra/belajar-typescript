// menggabungkan jenis type
// type Mahasiswa = {
//   nama: string
//   nim: number
// }

// type Alumni = {
//   tahunLulus: number
//   pekerjaan: string
// }

// type MahasiswaAlumni  = Mahasiswa & Alumni  // menggunakan tanda "&"" untuk menambahkan properti yang membawa sifat dari Mahasiswa

// const mahasiswa1: MahasiswaAlumni = {
//   nama: "Ujang",
//   nim: 20153440366,
//   pekerjaan: "CEO Web Store",
//   tahunLulus: 2024
// }


// dengan interfaces
interface Mahasiswa{
  nama: string
  nim: number
}

interface Alumni extends Mahasiswa{ // menggunakan tanda "extends" untuk menambahkan properti yang membawa sifat dari Mahasiswa
  pekerjaan: string
}

const mahasiswa1: Alumni = {
  nama: "Ujang",
  nim: 20153440366,
  pekerjaan: "CEO Web Store",
}


