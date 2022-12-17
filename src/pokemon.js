import { useDispatch, useSelector } from "react-redux";
import { apiLoadingState } from "./getPokemon-store/reducer";
import { getPokemon } from "./getPokemon-store/action";

const Pokemon = () => {
  const store = useSelector((store) => store);

  if (store.loadingState === apiLoadingState.FAILED) {
    return <>Pokemon not found.</>;
  }

  if (store.loadingState !== apiLoadingState.SUCCESS) {
    return <>Loading!!!</>;
  }

  return (
    <div>
      Name:{store.data.name}, Weight:{store.data.weight}
    </div>
  );
};

export const PokemonSearch = () => {
  const dispatch = useDispatch();
  return (
    <>
      <input onChange={(e) => dispatch(getPokemon(e.target.value))} />
    </>
  );
};
export default Pokemon;
