var tinggi, berat, keterangan, bmi;
function hitung(){
    
    berat = parseFloat(document.getElementById("weight-input").value);
    tinggi = parseFloat(document.getElementById("height-input").value);
    tinggi /= 100;
    bmi= berat / (tinggi * tinggi);

    if (bmi > 27) {
        keterangan = "Gemuk, kelebihan berat badan cuy";
    }else if ((bmi >= 25.1) & (bmi <= 27)) {
        keterangan = "Gemul, kelebihan berat badan tinggi rendah cuy";
    }else if ((bmi >= 18.5) & (bmi <= 25)) {
        keterangan = "Normal";
    }else if ((bmi >= 17) & (bmi<=18.4)){
        keterangan = "Kurus, kekurangan berat badan cuy";
    }else {
        keterangan = "Kurus, kekurangan berat badan cuy";
    }

    document.getElementById('bmi').innerHTML = "Hasil Perhitungan BMI : " + bmi.toFixed(1);
    document.getElementById('keterangan').innerHTML = "Keterangan :" + keterangan;

}
