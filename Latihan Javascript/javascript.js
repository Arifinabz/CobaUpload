var ulang = true;


while (ulang) {

    //menangkap pilihan user
    var p = prompt("Silahkan Pilihan Anda : Gajah , Semut, Orang");

    //menangkap pilihan komputer
    var komp = Math.random();

    if (komp <= 0.34) {
        komp = "Gajah";
    } else if (komp >= 0.34 && komp <= 0.67) {
        komp = "Orang";
    } else {
        komp = "Semut";
    }


    var hasil = "";
    if (p == komp) {
        hasil = "Seri";
    } else if (p == "Gajah") {
        hasil = (komp == "Orang") ? 'Menang' : 'Kalah';
    } else if (p == "Semut") {
        hasil = (komp == "Orang") ? 'Kalah' : 'Menang';
    } else if (p == "Orang") {
        hasil = (komp == "Semut") ? 'Menang' : 'Kalah';
    } else {
        Hasil = "Pilihan Anda Salah"
    }

    alert("Pilihan Komputer Adalah " + komp + " Pilihan Anda Adalah  " + p + " Anda " + hasil);
    ulang = confirm("Apakah Ingin Bermain Lagi ? y/t ");
}
alert("Terima Kasih...");