const FetchPokemons = async (url) => {
  console.log(url);

  const pokemons = await fetch(url);
  const jsonPokemons = await pokemons.json();

  let arrayPokemons = await Promise.all(
    jsonPokemons.results.map(async (pokemon) => {
      let pokemonResponse = await fetch(pokemon.url);
      return pokemonResponse.json();
    })
  );

  return arrayPokemons;
};

export default FetchPokemons;
