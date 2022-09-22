//As a user, I can only filter one at a time
// meer filters tegelijkertijd?? tenzij het een checkbox is.
const filmFinderMenu = document.querySelector("ul");
const filmFinderChoise = document.querySelectorAll("li");

addGlobalEventListener("click", "ul", (e) => {
  console.log("Hi hi");
});
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

if (document.getElementById("set-xmen").checked == true) {
  filterXman = movies
    .filter((movies) => movies.title.includes("xMen"))
    .map((movies) => movies);
  emptyList();
  addMoviesToDom(filterXman);
}

//callback function
// function chooseMovie() {
/* if (filmFinderChoise.classList.contains("xmen")) {
      filmFinderChoise.classList.remove(
        "avenger",
        "princess",
        "batman",
        "latestMovies"
      );
    } else {
      filmFinderChoise.classList.add("xmen");
    }
  }

  //4. to filter all new movies: from last year 2014 and newer.

  //if .filter & .map gebruiken
*/
