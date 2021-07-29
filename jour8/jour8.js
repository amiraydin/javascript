

let request = require('request');

function getCountries() {
    request.get("https://restcountries.eu/rest/v1/all", function(err, res, body){
    // console.log(res.body);
    let json = res.body;
    let countriesList = JSON.parse(json);
    // console.log("obj", countriesList);
    // console.log(countriesList[0].name);
    for (let i = 0; i < countriesList.length; i++) {
        let countries = [];
        let bash = countriesList[i].name;
        // console.log(`${countriesList[i].name}`);
        // let pays = countries.push(bash);
        console.log(countries.push(bash));
    }
}); 
}
getCountries()



//  ex2
function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
        console.log(response.statusCode);
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}


// ex3
function catchPokemon(id, lang) {
    request.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, function(error, response, body) {
        console.log(response.statusCode);
        var pokemon = JSON.parse(body);
        var translatedName = pokemon.names.find(function(element) {
            return element.language.name === lang;
        })
        console.log(`Mon pokemon numéro ${pokemon.id} s'appelle: ${translatedName.name}`);
    })
}

// ex4 

var prompt = require("prompt");

prompt.start();
var schema = {
  properties: {
    action: {
      description: "do you want to draw a card or pass?",
      required: true,
    },
  },
};


var max = 21;
var min = 16;
var bankCards = Math.floor(Math.random() * (max - min) + min);
var playerCards = 0;

function play() {
    prompt.get(schema, function(error, result) {
        if (result.action === "draw") {
            var max = 10;
            var min = 1;
            playerCards += Math.floor(Math.random() * (max - min) + min);
            console.log(`Your card worth: ${playerCards}`);
            if (playerCards > 21) {
                console.log("You loose");
            } else {
                play();
            }
        } else {
            console.log(`The bank had ${bankCards}`);
            if (playerCards === 21) {
                console.log("Black Jack, you win");
            } else if (playerCards > bankCards) {
                console.log("You win");
            } else {
                console.log("You loose");
            }
        }
    })
}

play();

