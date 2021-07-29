// var test = new Date();
// console.log(test);
// var demo = Date.now();
// console.log(demo);
// var birthday = new Date("1990-06-23");
// console.log(birthday);



// var ladate = new Date();
// console.log("Nous sommes le : ");
// console.log(ladate.getDate() + "/" + (ladate.getMonth() + 1) + "/" + ladate.getFullYear());
//  function formatDate(a) {
//     let date = new Date(a);
//     return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`; 
// }
// console.log(formatDate("3320-05-20"));


// :ex1
/*
- Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
- La fonction doit renvoyer la date au format jj/mm/aaaa
- Appelez la fonction et affichez son résultat dans la console.
*/
function formatDate(stringDate) {
    var date = new Date(stringDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  
  console.log(formatDate("2020-12-11"));
  
  function calculateAge(birthday) {
    var date = new Date(birthday);
    var age = new Date(new Date() - date);
    return age.getFullYear() - 1970;
  }
  
  console.log(calculateAge("1988-11-17"));


// ex2
/*
- Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
- La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
- Appelez la fonction et affichez son résultat dans la console.
*/
var moment = require("moment");

function formatDate(stringDate) {
 var date = moment(stringDate);
 return date.format("DD/MM/YYYY");
}

console.log(formatDate("2020-12-11"));

function calculateAge(birthday) {
  var date = moment(birthday);
  return date.fromNow()
}

console.log(calculateAge("1988-11-17"));

// ex3 
/*
- À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
- La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
    - l'email doit être au bon format
    - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
    - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
- Si tout est bon, elle retourne "All good !", sinon elle retourne "error"
*/

var prompt = require("prompt");

var schema = {
  properties: {
    email: { pattern: /^\S+@\S+\.\S+$/, required: true, message:"Email non valide" },
    username: {pattern: /^[a-zA-Z-]+$/, required: true, message:"Username non valide"},
    password: {required: true, message:"Password non valide", conform: function (value) {
        if (value.search(/.{6,}/) === -1) {
            return false;
        }

        if (value.search(/[a-zA-Z]/) === -1) {
            return false;
        }

        if (value.search(/[0-9]/) === -1) {
            return false;
        }

        if (value.search(/[^a-zA-Z0-9-]/) > -1) {
            return false;
        }

        return true;
    }}
  },
};

prompt.start();
prompt.get(schema, (err, res) => {
    console.log(res);
});
