
const movieContainer = document.getElementById("movie-container");

const renderCards = (data) => {
     data.forEach((movie) => {
         const card = document.createElement("div");
         card.classList.add("movie-card");

         const titleLink = document.createElement("a");
         titleLink.classList.add("card-title");
         titleLink.innerHTML = movie.title;
         titleLink.href = "#";

         const poster = document.createElement("img");
         poster.classList.add("card-image");
         poster.src = movie.poster;

         const year = document.createElement("p");
         year.classList.add("card-text");
         year.innerHTML = movie.year;

         const genre = document.createElement("p");
         genre.classList.add("card-text");
         genre.innerHTML = movie.genre ? `Genre: ${movie.genre.join(", ")}` : "Genre: N/A";
 
        const rate = document.createElement("p");
        rate.classList.add("card-text");
        rate.innerHTML = `rate: ${movie.rate}`;

        const director = document.createElement("p");
        director.classList.add("card-text");
        director.innerHTML = `Director: ${movie.director}`;

         const verAhoraButton = document.createElement("button");
         verAhoraButton.classList.add("ver-ahora-button");
         verAhoraButton.innerHTML = "Ver ahora";

        card.appendChild(poster);
        card.appendChild(titleLink);
        card.appendChild(year);
        card.appendChild(genre);
        card.appendChild(rate);
        card.appendChild(director);
        card.appendChild(verAhoraButton);

         movieContainer.appendChild(card);
     });
 };


 module.exports = renderCards;