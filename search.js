document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value;
    const apiKey = 'cfceb2b';
    const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';

            if (data.Response === "True") {
                data.Search.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.className = 'movie';
                    movieElement.innerHTML = `
                        <h2>${movie.Title}</h2>
                        <p>${movie.Year}</p>
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <button onclick="viewDetails('${movie.imdbID}')">Voir les détails</button>
                    `;
                    results.appendChild(movieElement);
                });
            } else {
                results.innerHTML = '<p>Aucun film trouvé</p>';
            }
        });
});

function viewDetails(imdbID) {
    window.location.href = `details.html?imdbID=${imdbID}`;
}
