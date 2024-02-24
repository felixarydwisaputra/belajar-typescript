// MEMBUAT INTERFACES

// interface Titik{
//   x: number
//   y: number
// }

// interface Titik{
//   z: number
// }

// // menambahkan atribut dari interface yang sama
// const titikA: Titik = {
//   x: 10,
//   y: 7,
//   z: 10
// }

// console.log(`${titikA.x}, ${titikA.y}, ${titikA.z}`)


// interface dengan extends
interface Kendaraan{
  merk: string
  tahun: number
  pemilik: string
  warna: string
  kapasitas: number
}

interface Motor extends Kendaraan{
  helmAwal: string
}

interface Mobil extends Kendaraan{
  jumlahPintu: number
}

const motor1: Motor = {
  merk: "Vario",
  helmAwal: "KYT",
  pemilik: "Feliks",
  kapasitas: 2,
  tahun: 2010,
  warna: "Hitam"
}

const mobil1: Mobil = {
  merk: "Avanza",
  jumlahPintu: 4,
  kapasitas: 6,
  pemilik: "Ujang",
  tahun: 2013,
  warna: "Hijau"
}

console.log(motor1)
console.log(mobil1)