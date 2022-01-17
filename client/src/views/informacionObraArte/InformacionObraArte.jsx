import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getInformacionObraArte } from "../../redux/actions";
import styles from "./InformacionObraArte.module.css";
import React from "react";

export const InformacionObraArte = () => {
  const obra = useSelector((state) => state.obraArte);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getInformacionObraArte(id));
  }, [dispatch, id]);

 
  console.log( obra)

  var date = new Date(obra.oa_fechaCreacion);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formatted_date;
  };
  return (
    <div>
      <div className={styles.containerHeader}>
        <h1>{obra.oa_name}</h1>
        <Link to={`/usuario/${obra.usuario_id}`}>
          <h2 className={styles.nombreUsuario}>Ir al perfil del usuario</h2>
        </Link>
        <h3>Creado el dia {formatDate(date)}</h3>
      </div>
      <div className={styles.containerImagenDescripcion}>
        <div className={styles.containerImagen}>
          <img src={obra.oa_imagen_obra} alt="obra" className={styles.imagen} />
        </div>
        <div className={styles.containerImagen}>
          <p>Descripcion</p> <p>{obra.oa_descripcion}</p>
          <p>Categoria: {obra.category.cat_descripcion}</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
