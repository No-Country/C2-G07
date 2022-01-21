import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPerfilUsuario } from "../../redux/actions";
import styles from './EditarPerfil.module.css'

export const EditarPerfil = () => {
  const usuario = useSelector((state) => state.usuario);
  const distpatch = useDispatch();

  const [input, setInput] = useState({
    name: usuario.usuario_name,
    imagen: usuario.usuario_imagen,
    telefono: usuario.usuario_telefono,
    facebook: usuario.usuario_facebook,
    instagram: usuario.usuario_instagram,
    paginaweb: usuario.usuario_paginaweb,
  });
  const { id } = useParams();
  useEffect(() => {
    distpatch(getPerfilUsuario(id));
  }, [distpatch, id]);
  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      try{
        let {name, imagen, telefono, facebook, instagram, paginaweb} = input;
        let body = {
            name, imagen, telefono, facebook, instagram, paginaweb
        }
        fetch("http://localhost:3001/usuario/"+id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          alert("Datos de usuarios Modificados!");
      }catch(err){console.log(err.message);}
  }

  return (
    <div className={styles.container}>
      <h1>Editar perfil</h1>
      <form onSubmit={(e) => handleSubmit(e)} align="center">
        <div className={styles.containerInput}>
          <label className={styles.label}>Nombre: </label>
          <input
            type="text"
            name="name"
            placeholder="Nombre..."
            value={input.name}
            onChange={handleInputChange}
            required={true}
            className={styles.input}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label}>Telefono: </label>
          <input
            type="text"
            name="telefono"
            placeholder="Telefono..."
            value={input.telefono}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label}>Facebook: </label>
          <input
            type="text"
            name="facebook"
            placeholder="facebook..."
            value={input.facebook}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label}>Instagram: </label>
          <input
            type="text"
            name="instagram"
            placeholder="Instagram..."
            value={input.instagram}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label}>PeginaWeb: </label>
          <input
            type="text"
            name="paginaweb"
            placeholder="Telefono..."
            value={input.paginaweb}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <input type="submit" value="Guardar" className={styles.buttonSubmit}/>
      </form>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};
