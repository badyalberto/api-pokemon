import { Component } from "react";
import CardPokemon from "components/molecules/CardPokemon";
import { GridPokemonStyle } from "./style";

class GridPokemon extends Component {
  render() {
    // const { pokemons } = this.props;
    return (
      <GridPokemonStyle>
        <CardPokemon />
      </GridPokemonStyle>
    );
  }
}

export default GridPokemon;
