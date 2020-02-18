export default {
  fetchMyBeers() {
    const beers = localStorage.getItem("my-beers") || "[]";

    return JSON.parse(beers);
  },
  addToMyBeers(beer) {
    const oldBeers = localStorage.getItem("my-beers") || "[]";

    const parsedData = JSON.parse(oldBeers);

    const updatedBeers = [...parsedData, beer];

    localStorage.setItem("my-beers", JSON.stringify(updatedBeers));

    return updatedBeers;
  },
  removeFromMyBeers(beer) {
    const oldBeers = localStorage.getItem("my-beers") || "[]";

    const parsedData = JSON.parse(oldBeers);

    const updatedBeers = parsedData.filter(item => item.id !== beer.id);

    localStorage.setItem("my-beers", JSON.stringify(updatedBeers));

    return updatedBeers;
  }
};
