// TIPE IMPLISIT
// 1. tanpa parameter
const hello = () => {
  console.log("hello world")
}

// 2. tipe any
const panggilOrang = (nama) => {  //tipe parameter any (bebas)
  console.log(`Hallo ${nama}`)
} 

panggilOrang("Ujang")

// 3. tipe data sama dengan nilai default
const umur = (umur = 20) => { // tipe data number secara implisit
  console.log(`Umur saya ${umur} tahun`)
}

umur(23)

// TIPE EKSPLISIT
// menghitung luas segiempat
const hitungLuas = (l: number, p: number) => { // menetukan tipe data secara eksplisit
  console.log(`Luas segiempat adalah ${l * p}`)
} 

hitungLuas(2,4)

// ANONYMOUS FUNCTION
const rakBuah = ["apel", "jeruk", "semangka"]

rakBuah.forEach((buah) => { // tipe data buah otomatis string karena variabke dari rakBuah bertipe string of array
  console.log(buah)
})

