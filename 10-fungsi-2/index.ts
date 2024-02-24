// tanpa parameter (tipe void = tidak mengembalikan apa apa)
const cetakNama = (nama: string) => {
  console.log(`Hallo nama saya ${nama}`)
}
cetakNama("Feliks")
const cetakUmur = (umur: number): void => { //secara eksplisit mendeklarasi tipe function void
  console.log(`Umur saya adalah ${umur} tahun`)
}

// dengan return
const jumlahAngka = (angka1: number, angka2a: number) => {
  return angka1 + angka2a
}
console.log(jumlahAngka(2,3))

const angkaGenap = (angka:number) : boolean => { // tipe deklarasi eksplisit (boolean)
  return angka % 2 === 0
}