document.getElementById("tombol_form").addEventListener("click", tampilkan);
document.getElementById("tombol_reverse").addEventListener("click", show);
document.getElementById("tombol_reset").addEventListener("click", reset);

function tampilkan() {
  var nilaiCelcius = document.getElementById("inputfield").value;
  var formula = " * (9/5) + 32 = ";

  //Hasil Celcius ke Fahnrenheit
  document.getElementById("hasil").innerHTML = nilaiCelcius * (9 / 5) + 32;
  var hasil = (document.getElementById("hasil").innerHTML = nilaiCelcius * (9 / 5) + 32);

  //Cara Kalkulasi
  document.getElementById("kalkulasi").innerHTML = nilaiCelcius + formula + hasil;
  var kalkulasi = (document.getElementById("kalkulasi").innerHTML = nilaiCelcius + formula + hasil);
}

function show() {
  var nilaiCelcius = document.getElementById("inputfield").value;
  var formula = " * 5/9 = ";

  //Hasil Fahnrenheit ke Celcius
  document.getElementById("hasil").innerHTML = ((nilaiCelcius - 32) * 5) / 9;
  var hasil2 = (document.getElementById("hasil").innerHTML = ((nilaiCelcius - 32) * 5) / 9);

  //Cara Kalkulasi
  document.getElementById("kalkulasi").innerHTML = nilaiCelcius + " - 32" + formula + hasil2;
  var kalkulasi2 = (document.getElementById("kalkulasi").innerHTML = nilaiCelcius + " - 32" + formula + hasil2);
}

function reset() {
  document.getElementById("inputfield").value = "";
  document.getElementById("hasil").value = "";
  document.getElementById("kalkulasi").value = "";
}
