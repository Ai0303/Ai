const fetch = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
console.log(fetch);
class Pokemonager {
  /**
   * @param {number} n The number of pokemon whose names should be returned
   * @returns {Promise<string[]>} a Promise that resolves to an array of all the names of the first n Pokemon from the Pokemon API.
   */
  findNames(n) {
    // Your code here.
  }

  /**
   * @param {number} weight The maximum weight (exclusive) of pokemon that should be considered
   * @returns {Promise<object[]>} a Promise that resolves to an array of all the Pokemon (**of the first 10 pokemon**) that are under a particular weight.
   * @description We don't want to make too many unnecessary calls to the Pokemon API
   */
  findUnderWeight(weight) {
    // Your code here.
  }
}

window.Pokemonager = Pokemonager;
