export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAILED = "GET_POKEMON_FAILED";

export function getPokemon(pokemonName) {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMON });

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      const data = await response.json();
      dispatch({ type: GET_POKEMON_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_POKEMON_FAILED, payload: error });
    }
  };
}
