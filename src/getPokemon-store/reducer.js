import { GET_POKEMON, GET_POKEMON_SUCCESS, GET_POKEMON_FAILED } from "./action";

export const apiLoadingState = {
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED"
};

const initialState = { loadingState: apiLoadingState.NOT_STARTED };

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, loadingState: apiLoadingState.STARTED };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        loadingState: apiLoadingState.SUCCESS,
        data: action.payload
      };

    case GET_POKEMON_FAILED:
      return {
        ...state,
        loadingState: apiLoadingState.FAILED,
        error: action.payload
      };
    default:
      return state;
  }
};
export default pokemonReducer;
