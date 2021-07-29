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

// Ex 1------------- 

// var fs = require("fs");

// console.log("C'est parti pour la recherche :");

// fs.stat("textjour7.txt", function(err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats.toString());
//     console.log("Et voilà ! Voyons le résultat");

//     if (stats.isFile()) { // simplification de  if (stats.isFile() === true)
//         console.log("C'est un fichier !");
//     }

//     if (stats.isDirectory()) { // simplification de  if (stats.isDirectory() === true)
//         console.log("C'est un dossier !");
//     }
// });

// Ex 2 ----------

// let array = [1, 2, 3, 4, 5];
// let double = array.map(function(num){
//     return num * 5;
// });
// console.log(double);

// Ex 3

// let longName = 






// Exo 6
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

