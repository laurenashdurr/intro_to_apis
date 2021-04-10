// console.log("Hello World")
// let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

// fetch(url)  // The fetch is available to us in the browser 
//             // And we supply at lesat a url and it will kick off 
//             // a "GET" request to that url 
//     .then(res => res.json())    // .then() can be chained on a fetch to allow us
//                                 // to take the response and do something with it

//     .then(json => { // In this case, I have used the json data to display in the console
//         console.log(json)
//         console.log(json.title) // These logs are unique to the json that we got back
//         console.log(json.locations) // and only work on this objects structure 
//         console.log(json.director)
//     })


/* 
BASIC fetch usage:

fetch (<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)  
*/

const baseURL = "https://ghibliapi.herokuapp.com"

fetch(baseURL + "/films") // Reaches out to the internet to get data
    .then(res => res.json()) // Returns only the json data 
    .then(json => {

        let myArr = json.map(film => { // Make a new array, reducing the items 
            return {
                title: film.title,
                rt_score: Number(film.rt_score) || 0// can also do "+" and can add "|| 0"
            }})
        .sort((cur, prev) => prev.rt_score - cur.rt_score) // sort them by rating 
        
        // console.log(myArr)
        displayResults(myArr) // passes off the Sorted Array to be displayed 
    })

// Display Results 
function displayResults(films) {
    console.log(films)
    // Grabs the ul element from the index.htm
    let filmList = document.getElementById("film-list") 
    // Goes through the films that are passed into the function
    films.map(film => {
        // for each film, I make a new li tag
        let filmLi = document.createElement("li")
        // Assignment of the film title and rt_score to the inner text
        filmLi.innerText = `${film.title} ${film.rt_score}`
        // Adds the newly made li tag with text to the ul tag
        filmList.appendChild(filmLi)
    })
}

    
    
    // Try to use the json [] to create a new array of "film" obj that only have
    // a title and the rt_rating
    /* 
    [
        {title: "Something", rt_score: 83},
        {title: "Something", rt_score: 83},
        {title: "Something", rt_score: 83},
        {title: "Something", rt_score: 83},
    ]
    */
   
   
   // console.log(json.map((film) => (
   //     {title: film.title,
   //     rt_score: film.rt_score})
   // ))
   

