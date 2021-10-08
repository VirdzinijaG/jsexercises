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

for (let i in arr) {
    if (arr[i] <= 2) {
        arr[i] = 0;
    }
}

console.log(arr);

console.log("-------------------");

// 5 