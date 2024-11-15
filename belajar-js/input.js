const prompt = require('prompt-sync')({sigint: true});

     

const num1 = prompt('Enter a first number: ');

const num2 = prompt('Enter a second number: ');

 

console.log('first number + second number =');

console.log(Number(num1) + Number(num2));


const prompt = require('prompt-sync')({ sigint: true });
const num1 = prompt('Enter a first number: '); // Meminta pengguna untuk memasukkan angka pertama const num2 = prompt('Enter a second number: '); // Meminta pengguna untuk memasukkan angka kedua console.log('first number + second number ='); // Menampilkan teks untuk menandakan hasil penjumlahan // Menghitung penjumlahan angka pertama dan angka kedua, kemudian menampilkannya console.log(Number(num1) + Number(num2));
