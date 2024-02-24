const arrayAngka = [1,2,3,4,5]; // tipe ARRAY OF NUMBER karena isi bertipe number semua (implisit)

arrayAngka.push(7) // bisa push karena tipe data yang sama (number)
// arrayAngka.push("Asda") // tidak dapat ditambahkan karena bukan tipe number seperti dekalrasi implisit diatas
// arrayAngka.push(true) // tidak dapat ditambahkan karena bukan tipe number seperti dekalrasi implisit diatas


const coba = ["Feliks", 21] // inferensi dengan tipe string atau number (selain itu tidak dapat masuk)

coba.push("Ujang") //data dilakukan karena inferensi awal terdapat number dan string pada array
coba.push(23) //data dilakukan karena inferensi awal terdapat number dan string pada array

console.log(arrayAngka)