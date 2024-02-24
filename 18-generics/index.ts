// membuat generics
// contoh 1
const cetakData = <tipe>(id: tipe) => { // membuat tipe yang dinamis dengan menambahkan <tipe> dan memanggil pada id: tipe (id memiliki tipe data dari "tipe")
  console.log(id)
}

cetakData<number>(212) // mendeklarasi tipe data yang akan dikirimkan adalah "number"



// contoh 2
interface Mahasiswa{
  nama: string
  nim: number
}


interface MataKuliah{
  kode: string
  nama: string
  semester: number
  sks: number
}

interface GetResponse<T extends object>{ // membuat value data yang dynamic dengan menambahkan <T> sebagai parameter, dan extends object untuk membatasi agar value yang diberikan hanya dapat berupa objek
  statusCode: number
  message: string
  data: T
}

// getResponse dengan params T akan di extends dengan properti interfaces Mahasiswa 
type MahasiswaResponse = GetResponse<Mahasiswa>; 
// getResponse dengan params T akan di extends dengan properti interfaces MataKuliah 
type MataKuliahResponse = GetResponse<MataKuliah>;

const mahasiswa1: MahasiswaResponse = {
  statusCode: 200,
  message: "Berhasil mengambil data",
  data: {
    nama: "Ujang",
    nim: 2015344036
  }
}

const mataKuliah1: MataKuliahResponse = {
  statusCode: 200,
  message: "Berhasil",
  data: {
    kode: "MK101",
    nama: "Bahasa Indonesia",
    semester: 2,
    sks: 20
  }
}
