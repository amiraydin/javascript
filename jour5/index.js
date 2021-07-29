// var example = require("./external.js");
// console.log(example);

// var {sayHelloInFrench, sayHelloInEnglish} = require("./external.js");

// console.log(sayHelloInFrench());
// console.log(sayHelloInEnglish());

// let anglais = example.sayHelloInEnglish();
// let francais = example.sayHelloInFrench();
// console.log(anglais, francais);
// console.log(francais);

// 

// JOUR 05 

function calculate (num1, operatur, num2){

    switch (operatur){
        case "+":
            console.log("resultat =", num1+num2);
            break;
        case "-":
            console.log("resultat =", num1-num2);
            break;
        case "x":
            console.log("resultat =", num1*num2);
            break;
        case "/":
            console.log("resultat =", num1/num2);
            break;
        case "%":
            console.log("resultat =", num1%num2);
            break;
        default :
            console.log("operature innconu !");
            break;
    }
    
}
if(process.argv.lenght !== 5){
calculate(parseInt(process.argv[2]), process.argv[3], parseInt(process.argv[4]));
}
else {
    console.log("Error !");
}
let abc = "sos";
console.log(abc);