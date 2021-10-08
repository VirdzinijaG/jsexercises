// 1 console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;


console.log("-----", 1, '------');

for (let i = 0; i < 5; i++) {
    console.log("Labas");
}

console.log("-------------------");

// 2 console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);


console.log("-----", 2, '------');

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("-------------------");

// 3 console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

console.log("-----", 3, '------');

for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}

console.log("-------------------");

// 4 console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

console.log("-----", 4, '------');

let a = 53;
for (let i = 49; i <= a; i++) {
    console.log(i);
}

console.log("-------------------");

//  5 console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

console.log("-----", 5, '------');

for (let i = 4; i >= 0; i--) {
    console.log(i);
}

console.log("-------------------");

// 6 console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

console.log("-----", 6, '------');

for (let i = 0; i <= 8; i = i + 2) {
    console.log(i);
}

console.log("-------------------");

// 7 console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

console.log("-----", 7, '------');

for (let i = 0; i < 5; i++) {
    console.log(Math.random() * 10 + 1);
}

console.log("-------------------");

// 8 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

console.log("-----", 8, '------');

let random = 0;
while (random !== 5) {
    random = Math.floor(Math.random() * 10 + 1);
    console.log(random);
}

console.log("-------------------");

// 9 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

console.log("-----", 9, '------');

let random1 = 0;
let sum = 0;
while (sum <= 100) {
    random1 = Math.floor(Math.random() * 10 + 1);
    sum += random1;
    console.log(random1);
}

console.log("Suma: ", sum);

console.log("-------------------");

// 10 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

console.log("-----", 10, '------');

let random2 = 0;
let ciklai = 0;
while ((random2 !== 5) && (random2 !== 7)) {
    ciklai++;
    random2 = Math.floor(Math.random() * 10 + 1);
    console.log(random2);
}
console.log('Buvo ciklu: ', ciklai);

console.log("-------------------");

// 11 console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

console.log("-----", 11, '------');

let ran = 0;
let suma = 0;
let cik = 0;

while ((suma <= 20) || (cik < 11)) {
    cik++;
    ran = Math.floor(Math.random() * 10 + 1);
    suma += ran;
    console.log(ran);
}

console.log('Buvo ciklu: ', cik, 'suma: ', suma);

console.log("-------------------");


// 12 console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

console.log("-----", 12, '------');

let r = 0;
let nelyginiai = 0;
while (nelyginiai < 3) {
    r = Math.trunc(Math.random() * 10 + 1);
    if (r % 2 !== 0) {
        nelyginiai++
    }
    console.log(r);
}

console.log("-------------------");

// 13 console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

console.log("-----", 13, '------');

let r1 = 0;
let r2 = 1;
while (r1 !== r2) {
    r1 = Math.floor(Math.random() * 10 + 1);
    r2 = Math.floor(Math.random() * 10 + 1);
    console.log(r1, ' ', r2);
}

console.log("-------------------");

// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;


