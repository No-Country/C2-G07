import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Cards } from "../../components/card/Card";
import { getPerfilUsuario, getObrasArtesUsuario } from "../../redux/actions";
import { ButtonPrimaryLink } from "../../components/ButtonPrimaryLink/ButoonPrimaryLink";
import styles from "./PerfilUsuario.module.css";

export const PerfilUsuario = () => {
  const usuario = useSelector((state) => state.usuario);
  const obrasArtes = useSelector((state) => state.obrasUsuario);
  const distpatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    distpatch(getPerfilUsuario(id));
  }, [distpatch, id]);

  useEffect(() => {
    distpatch(getObrasArtesUsuario(id));
  }, [id, distpatch]);

  return (
    <div>
      <span className={styles.containerInfo}>
        <h2>{usuario.usuario_name}</h2>

        <div>
          <img src={usuario.usuario_imagen} alt="usuario" width={200} />
          <ButtonPrimaryLink name={"Enviar Mensaje"} />
        </div>
        <h4>Contacto</h4>
        <p>Email: {usuario.usuario_email}</p>
        <p>Redes Sociales: </p>
        <p>Telefono: +5438889999999 </p>
        {/* <button>Enviar Mensaje</button> */}
      </span>
      <span>
        <h2>OBRAS REALIZADAS</h2>
        <ul className={styles.gridObrasArte}>
          {obrasArtes.length > 0
            ? obrasArtes.map((oa, index) => (
                <Cards
                  key={index}
                  id={oa.oa_id}
                  name={oa.oa_name}
                  reseña={oa.oa_reseña}
                  fecha={oa.oa_fechaCreacion}
                  likes={oa.oa_likes}
                  imagen={oa.oa_imagen_obra}
                  nameAutor={oa.usuario.usuario_name}
                  idUsuario={oa.usuario.usuario_id}
                />
              ))
            : null}
        </ul>
      </span>
    </div>
  );
};
