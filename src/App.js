import React from "react";
import "normalize.css";
import "../src/App.css";
import GridPokemons from "components/organisms/GridPokemons";

import { ReactComponent as Logo } from "./assets/images/pokemon-23.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {},
    };
  }

  render() {
    const { pokemons } = this.state;
    return (
      <>
        <div className="header__image">
          <Logo  />
        </div>
        <GridPokemons pokemons={pokemons} />
      </>
    );
  }
}

export default App;
