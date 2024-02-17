console.log("Необходимо с помощью цикла for вывести следующие 11 строк в консоль: 0 – это ноль1 – нечетное число2 – четное число");

let i = 0;
let str0 = "";
console.log(i, "- это ноль");
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i, "- это четное число");
    } else {
        console.log(i, "- это нечетное число");
    }
}

console.log("----------------------------------------------");

console.log("Дан массив [1, 2, 3, 4, 5, 6, 7] Сделайте из этого массива следующий [1, 2, 3, 6, 7]");

const arr1 = [1, 2, 3, 4, 5, 6, 7];
result = arr1.splice(3, 2);
console.log(arr1);

console.log("Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов");
console.log("1. Рассчитать сумму элементов этого массива");
console.log("2. Найти минимальное число");
console.log("3. Найти есть ли в этом массиве число 3");

const arr2 = [];
let indexF;
let sum = 0;
let min = 11;
for (let i = 0; i < 5; i++) {
    arr2[i] = Math.floor(Math.random() * 10);
    sum += arr2[i];
    if (arr2[i] < min) {
        min = arr2[i];
    }
}
const arr2find = arr2.find((item, index) => {
    if (item === 3) {
        indexF = index;
        return item;
    }
});

console.log("Сгенерированный массив: ", arr2);
console.log("Сумма массива равна: ", sum);
console.log("Минимальный (минимальные) элемент(ы) массива равны: ", min);
console.log("Цифра ", arr2find, " найдена индекс (место начиная с 0) в массиве равен", indexF);

console.log("----------------------------------------------");

const arrX = [];
let str = "";
for (let i = 0; i < 20; i++) {
    str = str + "x";
    arrX.push("x");
    // console.log(str);
    console.log(arrX);
}