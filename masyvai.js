// 1 Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

console.log("-----", 1, '------');

let arr = new Array(Math.floor(Math.random() * 30 + 10)).fill((Math.floor(Math.random() * 10)));

// console.log(arr.length);

console.log(arr, "ilgis ", arr.length);

console.log("-------------------");

