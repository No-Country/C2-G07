import { useSelector, useDispatch } from "react-redux";
import { getCategorias } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import styles from "./AgregarObraArte.module.css";
import crearObraArte from '../../utils/obraArteUtil'
import React from "react";

export const AgregarObraArte = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "conectArte");

    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/conectart/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    console.log(file.url);

    setImage(file.secure_url);
    setUrl(file.secure_url);
    setLoading(false);
  };

  const [input, setInput] = useState({
    oa_name: "",
    oa_resenia: "",
    oa_descripcion: "",
    oa_fechaCreacion: "",
    cat_id: 0,
    usuario_id: "e3c93f4a-b456-4e90-9baa-87a0a4ae9666",
  });
  const dispatch = useDispatch();
  let categorias = useSelector((state) => state.categorias);

  useEffect(() => {
    dispatch(getCategorias());
  }, [dispatch]);

  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      crearObraArte({input}, url)
      setInput({
        oa_name: "",
        oa_resenia: "",
        oa_descripcion: "",
        oa_fechaCreacion: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Publicar una nueva obra de arte</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.containerForm}>
        <input
          type="text"
          name="oa_name"
          placeholder="Nombre de la obra)"
          value={input.oa_name}
          onChange={handleInputChange}
          required={true}
          className={styles.input}
        />
        <input
          type="text"
          name="oa_resenia"
          placeholder="Reseña (max 300 caracteres)"
          value={input.oa_resenia}
          onChange={handleInputChange}
          required={true}
          className={styles.input}
        />
        <input
          type="text"
          name="oa_descripcion"
          placeholder="Descripcion..."
          value={input.oa_descripcion}
          onChange={handleInputChange}
          required={true}
          className={styles.input}
        />
        <div className={styles.containerFecha}>
          <p >Fecha creación: </p>
          <input
            type="date"
            name="oa_fechaCreacion"
            value={input.oa_fechaCreacion}
            onChange={handleInputChange}
            required={true}
            className={styles.inputDate}
          />
        </div>
        <select
          onChange={handleInputChange}
          name="cat_id"
          className={styles.input}
        >
          {categorias.map((cat) => (
            <option value={cat.cat_id} selected="selected">
              {cat.cat_descripcion}
            </option>
          ))}
        </select>
        <div>
          <input
            type="file"
            name="file"
            placeholder="Carga una imagen"
            value={input.file}
            onChange={uploadImage}
          />

          <form action="" method="post">
            <input type="text" value={url} hidden={true} />
          </form>
          <div>{loading ? <Loader /> : <img src={image} alt="" height={250} />}</div>
        </div>
        <input type="submit" className={styles.buttonSubmit} />
      </form>
    </div>
  );
};
