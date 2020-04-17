//Manipulasi Array

var penumpang = [];


function tambahpenumpang(namapenumpang, penumpang) {
    if (penumpang.length == 0 & namapenumpang != cari) {
        penumpang.push(namapenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            var cari = penumpang.find(function(a) {
                return a = penumpang[i];
            });
            if (namapenumpang == cari || penumpang[i] == namapenumpang) {
                console.log("Nama Sudah Ada");
                return penumpang;
            } else if (penumpang[i] == undefined) {
                penumpang[i] = namapenumpang;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namapenumpang);
                return penumpang;


            }
        }
    }
}

function hapuspenumpang(namapenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("Angkot Masih Kosong");
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            var cari = penumpang.find(function(a) {
                return a = penumpang[i];
            });
            if (namapenumpang == cari) {
                var c = penumpang.indexOf(namapenumpang);
                penumpang[c] = undefined;
                return penumpang;
            } else if (i = penumpang.length - 1) {
                console.log("Tidak Ada Nama Penumpang");
                return penumpang;
            }
        }
    }
}