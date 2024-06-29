function numberToWords(num) {
    // Definisi array untuk setiap komponen angka dalam bahasa Indonesia
    const satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
    const belasan = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
    const puluhan = ["", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
    const ribuan = ["", "seribu", "dua ribu", "tiga ribu", "empat ribu", "lima ribu", "enam ribu", "tujuh ribu", "delapan ribu", "sembilan ribu"];
  
    // Kasus khusus jika angkanya adalah 0
    if (num == 0) return "nol";
  
    // Variabel untuk menyimpan hasil konversi
    let words = "";
  
    // Kasus untuk angka kurang dari 10
    if (num < 10) {
      words = satuan[num];
    } 
    // Kasus untuk angka antara 10 dan 19 (belasan)
    else if (num < 20) {
      words = belasan[num - 10];
    } 
    // Kasus untuk angka antara 20 dan 99
    else if (num < 100) {
      // Ambil kata puluhan dan satuan
      words = puluhan[Math.floor(num / 10)] + (num % 10 === 0 ? "" : " " + satuan[num % 10]);
    } 
    // Kasus untuk angka antara 100 dan 999
    else if (num < 1000) {
      // Ambil kata ratusan dan sisa puluhan/satuan
      words = (num < 200 ? "seratus" : satuan[Math.floor(num / 100)] + " ratus") + 
              (num % 100 === 0 ? "" : " " + numberToWords(num % 100));
    } 
    // Kasus untuk angka antara 1000 dan 9999
    else if (num < 10000) {
      // Ambil kata ribuan dan sisa ratusan/puluhan/satuan
      words = (num < 2000 ? "seribu" : satuan[Math.floor(num / 1000)] + " ribu") + 
              (num % 1000 === 0 ? "" : " " + numberToWords(num % 1000));
    } 
    // Kasus untuk angka antara 10000 dan 999999
    else if (num < 1000000) {
      // Ambil kata ribuan dengan rekursi dan sisa ratusan/puluhan/satuan
      words = (numberToWords(Math.floor(num / 1000)) + " ribu") + 
              (num % 1000 === 0 ? "" : " " + numberToWords(num % 1000));
    }
  
    return words;
  }
  
  // Contoh penggunaan:
  console.log(numberToWords(28));       
  console.log(numberToWords(2024));     
  console.log(numberToWords(280802));  