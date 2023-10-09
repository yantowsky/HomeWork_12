// Solution for the first task
let firtsWord = prompt("Введіть перше слово:");
let secondWord = prompt("Введіть друге слово:");
let thirdWord = prompt("Введіть третьє слово:");

let allWords = [thirdWord, firtsWord, secondWord].join(" ");

console.log("Перше завдання:", allWords);

// Solution for the second task
let youNumber = +prompt ("Введіть п'ятизначне число:");
if (youNumber < 10000 || youNumber > 99999) {
    youNumber = +prompt ("Було введено не п'ятизначне число, остання спроба:");
}
else {
    let result = youNumber.toString().split('');
    console.log("Друге завдання:", result.join (' '));
}
confirm ("Як що в консолі ви бачете рішення другого завдання, ви все зробили вірно. Як що ні, в другий раз Вам пощастить. Гарного дня!")