import { useState, useEffect } from "react";
import { getObrasArtesName, getObrasArtes } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";

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
  }, [dispatch, obra]);

  function handleChangeNombreObra(e) {
    setOrder(e.target.value);
    dispatch(getObrasArtes(e.target.value));
  }
  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Busqueda por nombre..."
          value={obra}
          onChange={(e) => setObra(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.containerSelect}>
        <p className={styles.p}>Ordenar por </p>
        <select value={order} className={styles.select}>
          <option value={"nombre"} selected="selected">Nombre</option>
          <option value={"likes"} selected="selected">Valoracion</option>
        </select>
        <select value={order} onChange={handleChangeNombreObra} className={styles.select}>
          <option value={"ASC"}>ASC</option>
          <option value={"DESC"}>DESC</option>
        </select>
      </div>
    </div>
  );
};
