import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addDigimonsThunk(input));
    setInput("");
  };

  return (
    <div className="search">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Procure seu Digimon"
      ></input>
      <button onClick={() => handleSearch()}>Pesquisar</button>
    </div>
  );
};

export default Search;
