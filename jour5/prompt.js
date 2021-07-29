var prompt = require("prompt");

prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

prompt.get(["username", "email"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}

  console.log("Données reçues :");
  console.log("=> Username : " + res.username); // affiche le résultat pour la propriété "username"
  console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
});