import { useState, useEffect } from "react";
import { getObrasArtesName, getObrasArtes } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
export const SearchBar = () => {
  const [obra, setObra] = useState();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (obra) {
      dispatch(getObrasArtesName(obra));
    }

    if (obra === "") {
      dispatch(getObrasArtes("asc"));
    }
  }, [dispatch, obra]);
  return (
    <span>
      <input
        type="text"
        placeholder="Busqueda por nombre..."
        value={obra}
        onChange={(e) => setObra(e.target.value)}
      />
    </span>
  );
};
