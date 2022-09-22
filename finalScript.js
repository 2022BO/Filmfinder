console.log(movies);

movies.forEach((element) => {
  const newLi = document.createElement("li");
  const newA = document.createElement("a");
  const newImg = document.createElement("img");
  const movieList = document.getElementById("movielist");
  movieList.appendChild(newLi);
  newLi.appendChild(newA);
  newA.href = "https://www.imdb.com/title/" + element.imdbID;
  newA.appendChild(newImg);
  newImg.src = element.poster;
});

/*const movies = items.filter((items) => {
  return items.title === "X-Men";
});
console.log(movies);*/
