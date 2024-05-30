window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const imdbID = params.get('imdbID');
    const apiKey = 'cfceb2b';
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById('movieDetails');
            if (data.Response === "True") {
                movieDetails.innerHTML = `
                    <h1>${data.Title}</h1>
                    <p><strong>Année:</strong> ${data.Year}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Réalisateur:</strong> ${data.Director}</p>
                    <p><strong>Acteurs:</strong> ${data.Actors}</p>
                    <p><strong>Intrigue:</strong> ${data.Plot}</p>
                    <img src="${data.Poster}" alt="${data.Title}">
                `;
            } else {
                movieDetails.innerHTML = '<p>Détails non trouvés</p>';
            }
        });
};
