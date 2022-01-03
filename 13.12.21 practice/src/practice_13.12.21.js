// Написать функцию, выводящую в консоль числа от 1 до n (где n — это целое число), которая функция принимает в качестве параметра, с такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
function f1(n) {
    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
            console.log('threeFive');
        } else if (i % 3 === 0) {
            console.log('three');
        } else if (i % 5 === 0) {
            console.log('five');
        } else {
            console.log(i);
        }
    }
}

console.log(f1(15));

// Нужно выйти из цикла, изменив только две отмеченные строки. Результат в консоли сейчас останавливается на 19 19. Должен на 15 14.
function outOfCircle() {
    for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                break;
            }
            console.log(i, j);
        }
    }
}
console.log(outOfCircle());


// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
function compareStrings(str1, str2) {
    str1.toLowerCase().replace(/[^a-zA-Z]/g, '');
    str2.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let arr1 = str1.split('').sort().join('');
    let arr2 = str2.split('').sort().join('');
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1 === arr2) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(compareStrings('DSksdjf', 'smdfjid'));
