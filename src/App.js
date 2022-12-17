import { Provider } from "react-redux";
import Pokemon, { PokemonSearch } from "./pokemon";
import store from "./getPokemon-store/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PokemonSearch />
        <Pokemon />
      </Provider>
    </div>
  );
};
export default App;
