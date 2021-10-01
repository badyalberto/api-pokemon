import { Component } from "react";

import FetchPokemons from "utils/FetchPokemons";
import { CardPokemonStyle } from "./style";

const MAIN_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20";

class CardPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    await this.fetchPokemons(MAIN_URL);
  };

  fetchPokemons = async () => {
    try {
      const pokemons = await FetchPokemons(MAIN_URL);

      console.log(pokemons);

      this.setState({
        pokemons: pokemons,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isLoading, pokemons } = this.state;

    return (
      <>
        {!isLoading &&
          pokemons &&
          pokemons.map((p, index) => (
            <CardPokemonStyle key={index}>
              <h1>{p.name}</h1>
              <img src={p && p.sprites.other.dream_world.front_default} alt="hola" />
            </CardPokemonStyle>
          ))}
        {isLoading && <p>is loading...</p>}
      </>
    );
  }
}

export default CardPokemon;
