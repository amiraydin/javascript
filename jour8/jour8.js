
// exo1
/*
À l'aide de l'url suivante : "[https://restcountries.eu/rest/v1/all](https://restcountries.eu/rest/v1/all)" :

- Créez un array vide `countriesNames`
- Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
- Afficher les noms des pays récupérés dans la console, séparés par un tiret
*/
function getCountries() {
    request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
        console.log(response.statusCode);
        var countries = JSON.parse(body);
	/*
	var countriesNames = []; (deuxieme façon de faire)
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            countriesNames.push(country.name);
        }
        console.log(countriesNames.join("-"));
        */
       var pays = countries.map(function(element) {
           return element.name;
       })
       console.log(pays.join("-"));
    });

}

//  ex2
/*
À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

- Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console
*/
function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
        console.log(response.statusCode);
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}

// ex3
/*
À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

- Créez une fonction asynchrone `catchPokemon` qui recevra un nombre en paramètre (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id. Elle affichera ensuite dans la console :

```jsx
id: xxx // remplacer xxx par l'id du pokemon
name: "xxx" // remplacer xxx par le nom du pokémon
```
*/
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

// Bonus Black Jack
/*
Vous connaissez le Black Jack ? Aujourd'hui, on va le coder ! Petit rappel des règles :

- Le joueur démarre avec un score de 0
- La banque démarre avec un score aléatoire entre 16 et 21, qui restera caché jusqu'à la fin de la partie
- À chaque tour, on propose au joueur de tirer une carte et il peut :
    - Tirer une carte de valeur aléatoire entre 1 et 10 : cette valeur est ajoutée à son score. Si son score est supérieur à 21, la partie se termine automatiquement, sinon on passe au tour suivant (option "draw")
    - Passer son tour uniquement si son score est supérieur à 16 ce qui met fin à la partie (option "pass")
- À la fin de la partie, on annonce le score du joueur et de la banque ainsi que le résultat :
    - Le score du joueur est 21 ⇒ il fait un "Black Jack" et gagne
    - Le score du joueur est supérieur au score de la banque ⇒ il gagne
    - Le score est inférieur ou égal au score de la banque ⇒ il perd
    - Le score du joueur est supérieur à 21 ⇒ il perd
*/
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

