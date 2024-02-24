var nilai;
nilai = 300;
var cekData = function (nilai) {
    if (typeof nilai == 'string') {
        console.log(nilai.length);
    }
    else {
        console.log(nilai.toString().length);
    }
};
cekData(nilai);
