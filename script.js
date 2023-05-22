// program tebak angka
alert("Tebak angka antara 1 - 10\nKesempatan : 3");

// menggenerate bilangan random antara 1 - 10
let angkaRandom = Math.floor(Math.random() * 10 + 1);

// ada 3 kesempatan
let kesempatan = 3;
while (kesempatan > 0) {
  // user input
  let angkaUser = prompt("Masukan angka");

  let hasil;
  // jika benar
  if (angkaUser == angkaRandom) {
    alert("Kamu Benar\nAngka yang dicari adalah : " + angkaRandom);
    break;
  }
  // jika salah
  else if (angkaUser < angkaRandom) {
    hasil = "Terlalu Rendah";
  } else if (angkaUser > angkaRandom) {
    hasil = "Terlalu Tinggi";
  } else {
    hasil = "Masukan salah";
  }

  // kesempatan berkurang 1 setiap salah
  kesempatan--;

  // jika kesempatan 0 outputnya beda
  if (kesempatan == 0) {
    alert(hasil + "\nKesempatan kamu habis, Kamu kalah");
    alert("Angka yang benar : " + angkaRandom);
  } else {
    alert(hasil + "\nKesempatan : " + kesempatan);
  }
}

alert("Terimakasih sudah bermain");
