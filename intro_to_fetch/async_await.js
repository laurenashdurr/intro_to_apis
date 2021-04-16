const baseURL = "https://ghibliapi.herokuapp.com"


const getFilms = async () => {
  let res = await fetch(baseURL + "/films");

  let json = await res.json();

  let myArr = json.map((film) => {
     return {
        title: film.title,
        rt_score: Number(film.rt_score) || 0, 
      };
    })
    myArr.sort((cur, prev) => prev.rt_score - cur.rt_score); 

    displayResults(myArr); 
};

getFilms();


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
