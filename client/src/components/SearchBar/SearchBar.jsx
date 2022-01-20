import { useState, useEffect } from "react";
import {
  getObrasArtesName,
  getObrasArtes,
  getObraArtesLikes,
} from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [obra, setObra] = useState();
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");
  // const [tipo, setTipo] = useState("")

  useEffect(() => {
    if (obra) {
      dispatch(getObrasArtesName(obra));
    }
  }, [dispatch, obra]);

  const handleChangeLikes = (e) => {
    setOrder(e.target.value);
    dispatch(getObraArtesLikes(e.target.value))
  };
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
        <p className={styles.p}>Ordenar por</p>
        <div>
          <span>Valoracion</span>
        <select
          value={order}
          className={styles.select}
          onChange={handleChangeLikes}
        >
          <option value={"ASC"}>ASC</option>
          <option value={"DESC"}>DESC</option>
        </select>
        </div>
        <div>
          <span>Nombre</span>
        <select
          value={order}
          onChange={handleChangeNombreObra}
          className={styles.select}
        >
          <option value={"ASC"}>ASC</option>
          <option value={"DESC"}>DESC</option>
        </select>
        </div>
      </div>
    </div>
  );
};
