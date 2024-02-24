let nilai: number | string;

nilai = 300

const cekData = (nilai: string | number) => {
  if(typeof nilai == 'string'){
    console.log(nilai.length)
  } else{
    console.log(nilai.toString().length)
  }
} 

cekData(nilai)

