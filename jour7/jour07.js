// var fs = require("fs");

// console.log("C'est parti pour la recherche :");

// fs.stat("input.txt", function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Et voilà ! Voyons le résultat");

//       if (stats.isFile()) { // simplification de  if (stats.isFile() === true)
//           console.log("C'est un fichier !");
//       }

//       if (stats.isDirectory()) { // simplification de  if (stats.isDirectory() === true)
//           console.log("C'est un dossier !");
//       }  
//  });

// Ex 1----------------------------------------------------- 
/*
- Créez un fichier `jour07.txt` contenant le code suivant :
- Dans le fichier `jour07.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
*/
var fs = require("fs");

console.log("C'est parti pour la recherche :");

fs.stat("textjour7.txt", function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats.toString());
    console.log("Et voilà ! Voyons le résultat");

    if (stats.isFile()) { // simplification de  if (stats.isFile() === true)
        console.log("C'est un fichier !");
    }

    if (stats.isDirectory()) { // simplification de  if (stats.isDirectory() === true)
        console.log("C'est un dossier !");
    }
});

// Ex 2 -----------------------------------------------------
/*
- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
- Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
- Affichez les valeurs de `double` dans la console.
*/

let array = [1, 2, 3, 4, 5];
let double = array.map(function(num){
    return num * 5;
});
console.log(double);

// Ex 3-----------------------------------------------------------------
/*
Créez une variable longNames contenant la valeur suivante :
Créez une variable shortNames qui appellera la méthode .map() pour contenir une version compacte de longNames :
- Affichez les valeurs de `shortNames` dans la console.
*/
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
console.log("Type de longnames:", typeof longNames[0].firstName);
console.log(longNames[0].lastName);

/* 
var object = {
    key: <valeur>
}
*/
var shortNames = longNames.map(function(element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});

console.log(shortNames);

// ex 4------------------------------------------------------------------
/*
- Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
- Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
- Affichez les valeurs de `numbers` dans la console.
*/


var array = [1, "toto", 34, "javascript", 8, -5];
var numbers = array.filter(function(element) {
    //return typeof element === "number";
    //return element > 0;
    //return isNaN(element) === false;
    return parseInt(element) === element;
})

console.log(numbers);

// ex5-----------------------------------------------------------
/*
- Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
- Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
- Affichez les valeurs de `even` dans la console.
*/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(even);

// Exo 6------------------------------------------------
/*
- Créez une variable `cakes` contenant la valeur suivante :
- À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
- Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console
*/
let cake = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    },
]
var chocolatesCake = cakes.filter(function(element) {
    return element.flavor === "chocolate";
}).map(function(element) {
    element.status = "Sold out !";
    return element;
});

console.log(chocolatesCake);

// Bonus--------------------------------------------------------
/*
Vous connaissez le jeu du **Pendu** ? Aujourd'hui on va le coder en utilisant le module npm prompt ! Petit rappel des règles :

- Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
- Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
    - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
    - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !" (x sera remplacé par le nombre de tentatives restantes)

⇒ Afficher un message en cas de victoire ou défaite

*/
var prompt = require("prompt");
var randomWords = require("random-words");

var wordLength = 5;
var mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
while (mysteryWord.length !== wordLength) {
  mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
}

var schema = {
  properties: {
    letter: {
      description: "Enter a letter",
      pattern: new RegExp(`^[a-z]{1}$`),
      required: true,
    },
  },
};

var letters = [];

function displayMisteryWord() {
  return mysteryWord
    .split("")
    .map(function (letter) {
      if (letters.indexOf(letter) === -1) {
        return "_";
      } else {
        return letter;
      }
    })
    .join(" ");
}

function numberOfMissingLetters() {
  var missingLetters = mysteryWord.split("").filter(function (letter) {
    return letters.indexOf(letter) === -1;
  });

  return missingLetters.length;
}

function guess(remainingTry) {
  console.log(`Find the mystery word: ${displayMisteryWord()}`);

  prompt.get(schema, (err, result) => {
    letters.push(result.letter);

    if (numberOfMissingLetters() === 0) {
      console.log(`Congrats, you found the mystery word: ${mysteryWord}`);
    } else {
      remainingTry--;
      if (remainingTry === 0) {
        console.log(`You loose, the mistery word was: ${mysteryWord}`);
      } else {
        console.log(`Ooops... only ${remainingTry} ${remainingTry === 1 ? "chance" : "chances"}`);
        guess(remainingTry);
      }
    }
  });
}

prompt.start();
guess(10);
