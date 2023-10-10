//task 1

// let date = new Date();
// console.log(date);

//task 3

// const today = new Date();
// const cmas = new Date(today.getFullYear(), 11,25);
// if(today.getMonth() == 11 && today.getDate() > 25){
//    cmas.setFullYear(cmas.getFullYear() + 1);
// }

// const one_day = 1000*60*60*24;
// const diff = Math.ceil((cmas.getTime() - today.getTime()) / (one_day));   



// console.log(`${diff} days left before next Christmas!`);

//task 4

// for(year = 2014; year <= 2050; year++){
//    const date = new Date(year + ' 01 , 01 ');
//    if(date.getDay() === 0 ){
//       document.write(`<br>${date}</br>`);
//    }
// }

//task 5 

//! birinci usul deneme

// for(year = 1582; year <= 1752; year++){
//    if(year % 4 == 0){
//        if(year % 100){
//          if(year % 400){
//             console.log("Leap year");
//          }
//          else{
//             console.log("Not a leap year");
//          }
//       }
//       else{
//          console.log("Leap year")
//       }
//    }else{
//       console.log("Not a leap year");
//    }
//    console.log(year);
// }

//! ikinci usul funksiya

// function leap__year(year){
//    if(year % 100 === 0){
//       return (year % 100 === 0 && year % 400 === 0);
//    }
//    if(year % 4 == 0){
//       return true;
//    }
//    return false;
// }
// console.log(leap__year(2012));

// let leapYear = new Date(1900, 1).getFullYear();

// if(leapYear % 4 == 0 && leapYear % 100 != 0){
//    console.log("Leap year");
// }
// else if(leapYear % 100 == 0 && leapYear % 400 == 0){
//    console.log("Leap year");
// }
// else{
//    console.log("Is not leap year");
// }

