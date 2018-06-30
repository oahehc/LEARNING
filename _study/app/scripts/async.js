async function getMovieRanking(keyword) {
    const imdbUrl = `http://www.omdbapi.com/?t=${keyword}&y=&plot=short&r=json`;
    try {
        const response = await fetch(imdbUrl);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
};
getMovieRanking('iron');
