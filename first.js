let maney, time;

function start (){
maney = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD ");

while(isNaN(maney)||maney == ""|| maney == null){
    maney = +prompt("Ваш бюджет на месяц?");
}

}


start();



let appData = { 
budget : maney,
timeData: time,
expenses:{},
optionalExpenses : {},
income : [],
savings : true
};


function chooseExpenses(){
    for(let i =0; i<2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
         if( (typeof(a)) === "string" && (typeof(a)) !=null  && (typeof(b))!=null && a !="" && b !="" && a.length <30 && b.length <30){
             console.log("done");
            appData.expenses[a] = b;
    
         }else{
            console.log("не верно");
            i--;
         }
    }

}
chooseExpenses();
// let i = 0;
// while(i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//      if( (typeof(a)) === "string" && (typeof(a)) !=null  && (typeof(b))!=null && a !="" && b !="" && a.length <30 && b.length <30){
//          console.log("done");
//         appData.expenses[a] = b;

//      }else{
    // console.log("не верно");
    // i--;
//      }
// i++;
// }


// let i = 0;

// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//      if( (typeof(a)) === "string" && (typeof(a)) !=null  && (typeof(b))!=null && a !="" && b !="" && a.length <30 && b.length <30){
//          console.log("done");
//         appData.expenses[a] = b;

//      }else{
//         console.log("не верно");
//         i--;
//      } i++;
// }while(i<2);


function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel(){
if (appData.moneyPerDay<100){
    console.log("Это минимальный уровень достатка!");
} else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay>2000){
    console.log("Это высокий уровень достатка!");
} else{
    console.log("произошла ошибка");
}
}
detectLevel();

function checkSavings(){
    if(appData.savings== true){
        let save =  +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.montIncome = save/100/12*percent;   
        alert("Доход в месяц с вашего дипазита " + appData.montIncome);

    }
}
checkSavings();

function chooseOptExpenses(){

for (let i = 1; i < 3, i++){
    let questionOptExpenses = prompt("Статья не обязательных расходов?");

appData.optionalExpenses[i] = questionOptExpenses;
}
}



