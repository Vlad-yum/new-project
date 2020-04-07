let maney = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD ");


let appData = {
 
budget : maney,
timeData: time,
expenses:{},
optionalExpenses : {},
income : [],
savings : false
};

let q = prompt("Введите обязательную статью расходов в этом месяце");
let q1 = prompt("Во сколько обойдется?");
let w = prompt("Введите обязательную статью расходов в этом месяце");
let w1 = prompt("Во сколько обойдется?");



appData.expenses.q = q1;
appData.expenses.w = w1;

alert(appData.budget / 30);