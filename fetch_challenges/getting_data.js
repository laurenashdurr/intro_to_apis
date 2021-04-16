// Group Challenge 
// TIME: 15 mins

let baseURL = "https://pokeapi.co/api/v2"
let query = "/pokemon?offset=0&limit=151"


// Step 1: Write a fetch request to the pokemon endpoint 
// Step 2: Take the Response and transform it into just the json data. 
//         Take the json data and console.log it 
// Step 3: Take the json data and make a new array with it that only contains each
//         pokemon's name ["ditto","mew"] console.log that array
// Step 4: Sort the Pokemon alphabetically
//         console.log the sorted pokemon array

fetch (baseURL + query)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let pokemonNameArr = json.results.map(pokemon => pokemon.name)
        pokemonNameArr.sort()
        console.log(pokemonNameArr)
        })

     
