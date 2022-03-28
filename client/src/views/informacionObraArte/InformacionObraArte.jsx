import { useParams } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getInformacionObraArte } from "../../redux/actions";
import styles from "./InformacionObraArte.module.css";
import { ButtonPrimaryLink } from "../../components/ButtonPrimaryLink/ButoonPrimaryLink";

export const InformacionObraArte = () => {
  const obra = useSelector((state) => state.obraArte);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getInformacionObraArte(id));
  }, [dispatch, id]);

  var date = new Date(obra.oa_fechaCreacion);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formatted_date;
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <Link to="/galeria" className={styles.link}>
          <ButtonPrimaryLink name={"Volver"} />
        </Link>
      </div>
      <h1>{obra.oa_name}</h1>
      <div className={styles.containerImagen}>
        <img src={obra.oa_imagen_obra} alt="obra" className={styles.imagen} />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.titles}>Autor:</p>
        <p className={styles.description}>
          <Link to={"/usuario/" + obra.usuario_id} className={styles.link}>
            {obra?.usuario?.usuario_name}
          </Link>
        </p>
        <p className={styles.titles}>Fecha de creacion: </p>
        <p className={styles.description}>{formatDate(date)}</p>
        <p className={styles.titles}>Descripción:</p>
        <p className={styles.description}>{obra.oa_descripcion}</p>
        <p className={styles.titles}>Categoria:</p>
        <p className={styles.description}>{obra?.category?.cat_descripcion}</p>
      </div>
    </div>
  );
};
