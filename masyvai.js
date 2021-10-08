// 1 Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

console.log("-----", 1, '------');

function randomValues(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


let arr = new Array(randomValues(10, 30)).fill(null).map(() => (randomValues(0, 10)));


// console.log(arr.length);

console.log(arr, "Masyvo ilgis ", arr.length);

console.log("-------------------");

// 2 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

console.log("-----", 2, '------');

let sum = arr.reduce((a, b) => a + b, 0)
console.log("Masyvo suma: ", sum);

console.log("-------------------");


// 3 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

console.log("-----", 3, '------');

let sum1 = 0;
for (let i in arr) {
    // console.log(arr[i]);
    if (arr[i] > 2) {
        sum1 += arr[i];
    }
}

console.log("Suma: ", sum1);

console.log("-------------------");

// 4 Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

console.log("-----", 4, '------');

for (let i in arr) {
    if (arr[i] <= 2) {
        arr[i] = 0;
    }
}

console.log(arr);

console.log("-------------------");

// 5 Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

console.log("-----", 5, '------');

var max = Math.max(...arr);
console.log("Didziausia reiksme masyve: ", max);

let kiek = 0;

for (let i in arr) {
    if (arr[i] === max) {
        kiek += [i].length
    }
}

console.log(kiek);

console.log("-------------------");

// 6 Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

console.log("-----", 6, '------');

console.log(arr);
for (let i in arr) {
    if (arr[i] === 0) {
        arr[i] = arr.indexOf(arr[i]);
    }
}

console.log(arr);

console.log("-------------------");

// 7 Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

console.log("-----", 7, '------');

console.log(arr, "Masyvo ilgis ", arr.length);

for (let i = arr.length; i < 30; i++) {
    arr.push(randomValues(0, 10));
}

console.log(arr, "Masyvo ilgis ", arr.length);

console.log("-------------------");