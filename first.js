let maney = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD ");


let appData = { 
budget : maney,
timeData: time,
expenses:{},
optionalExpenses : {},
income : [],
savings : false
};



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



appData.moneyPerDay = appData.budget / 30;


alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay<100){
    console.log("Это минимальный уровень достатка!");
} else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay>2000){
    console.log("Это высокий уровень достатка!");
} else{
    console.log("произошла ошибка");
}