console.clear();
/*
NUMBERS

normalus:
- sveikieji
- desimtainiai

mistiniai/mitiniai:
- Infinity/-Infinity
- NaN (not-a-number)

MATEMATINIAI VEIKSMAI
aritmetiniai operatoriai:
    +, -, /, *, ** (laipsnis), % (liekana)
priskirimo operatoriai:
    =, +=, -=, /=, *=, **=, %=

KINTAMŲJŲ INICIAVIMO BUDAI:
- const (default) 
- let (jei kinta reiksme)
- var (nenaudoti, nebent zinai ka darai)
*/

// sveikasis
console.log(12551);
console.log(-12551);
console.log(0);
console.log(-0);

// desimtainis
console.log(3.1415);
console.log(-3.1415);

// begalybes
console.log(Infinity);
console.log(-Infinity);

// NaN
console.log(NaN);

// VEIKSMAI
console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 * 5);

console.log(2 ** 2, '=', 2 * 2);
console.log(2 ** 3, '=', 2 * 2 * 2);
console.log(2 ** 4, '=', 2 * 2 * 2 * 2);

const a = 7;
console.log(a);

const PI = 3.14;
console.log(PI);

console.log('--------------');
// pazymiai: 10, 2, 8, 4, 6.

let suma = 0;
console.log(suma);

suma = suma + 10;
console.log(suma);

suma = suma + 2;
console.log(suma);

suma = suma + 8;
console.log(suma);

suma = suma + 4;
console.log(suma);

suma = suma + 6;
console.log(suma);

console.log('--------------');

let suma2 = 0;
console.log(suma2);

suma2 += 10;
console.log(suma2);

suma2 += 2;
console.log(suma2);

suma2 += 8;
console.log(suma2);

suma2 += 4;
console.log(suma2);

suma2 += 6;
console.log(suma2);

console.log('--------------');

let suma3 = 0;
console.log(suma3);

suma3 += 10;
console.log(suma3);

suma3 *= 5;
console.log(suma3);

suma3 -= 1;
console.log(suma3);

suma3 /= 7;
console.log(suma3);

suma3 **= 3;
console.log(suma3, 7 * 7 * 7);

console.log('--------------');

const skaicius = 81;
const daliklis = 10;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

console.log(17 / 3);
console.log(17 % 3);

console.log(0 % 3);
console.log(1 % 3);
console.log(2 % 3);
console.log(3 % 3);
console.log(4 % 3);
console.log(5 % 3);
console.log(6 % 3);

let liek = 144;

liek %= 100;
console.log(liek);

liek %= 15;
console.log(liek);

liek %= 5;
console.log(liek);

console.clear();

let i = 0;
console.log(i);

i = i + 1;
console.log(i);

i += 1;
console.log(i);

i++;
console.log(i);

++i;
console.log(i);

let m = 0;
console.log(m);

m = m - 1;
console.log(m);

m -= 1;
console.log(m);

m--;
console.log(m);

--m;
console.log(m);

console.clear();

let n = 0;

console.log(n);
console.log(++n);
console.log(++n);
console.log(++n);
console.log(++n);
