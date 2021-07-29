
// ex 1 -----------------
// var cat = {
//     name : "Garfield",
//     age : 3,
//     isCute : true
// }
// console.log(cat);
// console.log(cat.age);
// if (cat.isCute)//s'il est vrai on pouvais mettre == true aussi{
//     console.log("is so cute !");
// }
// ex 2 ------------------
// var cat = {
//     name : "Garfield",
//     age : 3,
//     isCute : true
// }
// let cat2 = {
//     name : "jojo",
//     age : 6,
//     isCute : false,
// }
// var cats =[cat, cat2];
// console.log(cats[0].age,"\n",cats[1].isCute);
// ex 3 -----------------
// function chekItEven(num){
//     if (num % 2 == 0){
//         console.log("even"); 
//     }else 
//     console.log("odd");
// }
// chekItEven(5); 
// chekItEven(6); 

// ex 4 ---------------
// function compare(num1, num2){
//     if (num1 > num2){
        // console.log(`${num1} is bigger`);
//     }else if (num2 > num1){
//         console.log(num2, "is bigger");
//     }else {
//         console.log("both are the same")
//     }
// }
// compare(13, 9);

// ex 5 --------------
// function addUpp (num){
//     let add = 0;
//     for (let i=1; i<=num; i++){
//         add += i;
//     }
//     return add;
// }
// console.log(addUpp(12));

// ex 6 ----------------
// function format(num){ //
//     let hours = Math.floor(num/3600);
//     let restOfHour = num % 3600;
//     let minute = Math.floor(restOfHour / 60);
//     let secound = restOfHour % 60;
//     console.log(`${hours} : ${minute} : ${secound}`);
// }
// format(3700);

// Bonus 1 
// function generatePassword (num){
//     let max = 122;
//     let min = 48;
//     let password = "";
    
//     if (num>=6 && num<=15){
//         for(let i=0; i<num; i++){
//             let randomIndex = Math.floor(Math.random() * (max-min+1)+min);
//             while(randomIndex >= 58 && randomIndex <= 64){
//                 randomIndex = Math.floor(Math.random() * (max-min+1)+min);
//             }
//             let letter = String.fromCharCode(randomIndex);
//             password += letter;
//         }
//         console.log(password);
//     }else {
//         console.log("error !");
//     }
// }
// generatePassword(10);

// B 2 

// function launchDice(numberOfDice) {
//     var min = 1;
//     var max = 6;
//     var sum = 0;
//     for (var i = 0; i < numberOfDice; i++) {
//         var dice = Math.floor(Math.random() * (max - min + 1) + min);
//         sum += dice;
//     }
//     return sum;
// }

// var joueur1 = launchDice(5);
// var joueur2 = launchDice(5);
// if (joueur1 > joueur2) {
//     console.log("Joueur 1 a gagné")
// } else if (joueur1 < joueur2) {
//     console.log("Joueur 2 a gagné")
// } else {
//     console.log("Egalité");
// }
