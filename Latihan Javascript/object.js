//Object Angkot

function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangnaik = function(namapenumpang) {
        this.penumpang.push(namapenumpang);
        return penumpang;

    }
    this.penumpangturun = function(namapenumpang, ongkos) {
        if (penumpang.length == 0) {
            var a = console.log("Belum Ada Penumpang");
            return penumpang;
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                penumpang.shift(namapenumpang);
                this.kas += ongkos;
                return penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Arifin', ['Mlati', 'Sleman'], [], 0);
var angkot2 = new Angkot('Arifin', ['Mlati', 'Moyudan'], [], 0);