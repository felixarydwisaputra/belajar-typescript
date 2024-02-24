interface Titik{
  readonly x: number // readonly digunakan agar properti tidak dapat diubah setelah dideklarasi dengan tanda "=" (x = 21)
  y: number
  z?:number // value yang optional (boleh diisi dan tidak) diakhiri dengan tanda "?"
}

const titikA: Titik = {x: 12, y: 10} // 2 dimensi
const titikB: Titik = {x: 12, y: 10, z: 19} // 3 dimensi

// titikA.x = 21 // tidak dapat diubah karena terdapat "readonly"


// SIGNATURE
// interface Mahasiswa{
//   [key: string]: string | number; // properti apapun dengan value string atau number [key: string] => apapun keyny yg penting string
// }

// const data1: Mahasiswa = { // data ini boleh diisi bebas oleh value apapun selagi bertipe string, karena pada interface tidak men spesifikasi value
//   nama: "Ujang",
//   nim: 2013344055
// }

interface Mahasiswa{
  [key: string]: string | number; // properti apapun dengan value string atau number [key: string] => apapun keyny yg penting string
  semester: number
}

const data1: Mahasiswa = { // berbeda dengan ini, harus ada properti semester karena pada interface ada deklarasi spesifij semester
  nama: "Ujang",
  nim: 2013344055,
  semester: 12
}