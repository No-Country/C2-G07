import { useState, useEffect } from "react";
import { getObrasArtesName, getObrasArtes } from "../../redux/actions/index";
import { useDispatch } from "react-redux";


export const SearchBar = () => {
  const [obra, setObra] = useState();
  const dispatch = useDispatch();
 const [order, setOrder] = useState("asc");

  useEffect(() => {
    if (obra) {
      dispatch(getObrasArtesName(obra));
    }

    if (obra === "") {
      dispatch(getObrasArtes("asc"));
    }
  }, [dispatch, obra])

  function handleChangeNombreObra(e){
    setOrder(e.target.value);
    dispatch(getObrasArtes(e.target.value));
  };
  return (
    <span>
      <input
        type="text"
        placeholder="Busqueda por nombre..."
        value={obra}
        onChange={(e) => setObra(e.target.value)}
      />
      <select value={order} onChange={handleChangeNombreObra}>
            <option value={"ASC"}>ASC</option>
            <option value={"DESC"}>DESC</option>
        </select>
    </span>
  );
};
