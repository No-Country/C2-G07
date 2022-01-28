import { useState, useEffect } from "react";
import {
  getObrasArtesName,
  getObrasArtes,
  getObraArtesLikes,
} from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import React from "react";

export const SearchBar = () => {
  const [obra, setObra] = useState();
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");
  // const [tipo, setTipo] = useState("")

  useEffect(() => {
    if (obra) {
      dispatch(getObrasArtesName(obra));
    }else{
      dispatch(getObrasArtes('asc'))
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
          
          <select
            value={order}
            className={styles.select}
            onChange={handleChangeLikes}
          >
            <option value={"ASC"}>Menor Valoracion</option>
            <option value={"DESC"}>Mayor Valoracion</option>
          </select>
        </div>
        <div>
         
          <select
            value={order}
            onChange={handleChangeNombreObra}
            className={styles.select}
          >
            <option value={"ASC"}>A-Z</option>
            <option value={"DESC"}>Z-A</option>
          </select>
        </div>
        
      </div>
    </div>
  );
};
