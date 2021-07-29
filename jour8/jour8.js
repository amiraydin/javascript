

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


