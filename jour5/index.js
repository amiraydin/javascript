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
/*
## 01 - Calculator

- Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
- Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
- Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
- Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !

    ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console

*/
function calculate(num1, operatur, num2) {

    switch (operatur) {
        case "+":
            console.log("resultat =", num1 + num2);
            break;
        case "-":
            console.log("resultat =", num1 - num2);
            break;
        case "x":
            console.log("resultat =", num1 * num2);
            break;
        case "/":
            console.log("resultat =", num1 / num2);
            break;
        case "%":
            console.log("resultat =", num1 % num2);
            break;
        default:
            console.log("operature innconu !");
            break;
    }

}
if (process.argv.lenght !== 5) {
    calculate(parseInt(process.argv[2]), process.argv[3], parseInt(process.argv[4]));
}
else {
    console.log("Error !");
}
let abc = "sos";
console.log(abc);


// Bonus 
var prompt = require("prompt");
var randomWords = require('random-words');
var colors = require('colors');

var wordLength = 3;
var mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
while (mysteryWord.length !== wordLength) {
    mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
}

var schema = {
    properties: {
        word: {
            description: "Quel est le mot mystère ?",
            pattern: new RegExp(`^[a-z]{${wordLength}}$`),
            required: true,
            message: `Entrez un mot de ${wordLength} lettres`
        }
    }
}
function guess() {
    prompt.get(schema, (err, result) => {
        if (result.word === mysteryWord) {
            console.log("Oh yeah !!!!");
        } else {
            var answer = result.word.split("");
            var letters = {}
            for (var i = 0; i < wordLength; i++) {
                var letter = result.word[i];
                if (letter === mysteryWord[i]) {
                    answer[i] = letter.red;
                    letters[letter] = i + 1;
                }
            }
            for (var i = 0; i < wordLength; i++) {
                var letter = result.word[i];
                if (mysteryWord.indexOf(letter) > -1) {
                    if (letters.hasOwnProperty(letter)) {
                        if (mysteryWord.indexOf(letter, letters[letter]) > -1) {
                            answer[i] = letter.yellow;
                            letters[letter] = i + 1;
                        }
                    } else {
                        answer[i] = letter.yellow;
                        letters[letter] = i + 1;
                    }
                }
            }
            console.log(answer.join(""));
            guess();
        }
    })
}

prompt.start();

guess();


