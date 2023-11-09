var tinggi, berat, keterangan, bmi;
function hitung(){
    
    berat = parseFloat(document.getElementById("weight-input").value);
    tinggi = parseFloat(document.getElementById("height-input").value);
    tinggi /= 100;
    bmi= berat / (tinggi * tinggi);

    if (bmi > 30) {
        keterangan = "Kegemukan (Obesitas)";
    }else if ((bmi >= 25.0) & (bmi <= 29.9)) {
        keterangan = "Kelebihan berat badan";
    }else if ((bmi >= 18.5) & (bmi <= 24.9)) {
        keterangan = "Normal (ideal)";
    }else if ((bmi < 18.5)){
        keterangan = "kekurangan berat badan";
    }else {
        keterangan = "kekurangan berat badan";
    }

    document.getElementById('bmi').innerHTML = "Berat Badan Lebih : " + bmi.toFixed(1);
    document.getElementById('keterangan').innerHTML = "Keterangan :" + keterangan;

}
