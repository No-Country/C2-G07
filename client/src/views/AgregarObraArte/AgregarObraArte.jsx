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
        <div className={styles.containerBlocks}>
          <div className={styles.containerInputs}>
            <label htmlFor="oa_name">Nombre de la obra</label>
            <input
              type="text"
              name="oa_name"
              placeholder="Ingrese nombre"
              value={input.oa_name}
              onChange={handleInputChange}
              required={true}
              className={styles.input}
            />
          </div>
          <div className={styles.containerInputs}>
            <label htmlFor="oa_resenia">Reseña</label>
            <input
              type="text"
              name="oa_resenia"
              placeholder="Máx. 300 caracteres"
              value={input.oa_resenia}
              onChange={handleInputChange}
              required={true}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.containerBlocks}>
          <div className={styles.containerInputs}>
            <label htmlFor="oa_descripcion">Descripción</label>
            <input
              type="text"
              name="oa_descripcion"
              placeholder="Ingrese descripción"
              value={input.oa_descripcion}
              onChange={handleInputChange}
              required={true}
              className={styles.input}
            />
          </div>
          <div className={styles.containerFecha}>
            <label htmlFor="oa_fechaCreacion">Fecha de creación</label>
            <input
              type="date"
              name="oa_fechaCreacion"
              value={input.oa_fechaCreacion}
              onChange={handleInputChange}
              required={true}
              className={styles.inputDate}
            />
          </div>
        </div>
        <div className={styles.containerBlocks}>
            <div className={styles.containerInputs}>
              <label htmlFor="cat_id">Elija una categoría</label>
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
            </div>
            <div className={styles.containerInputs}>
              <div className={styles.containerInputFile}>
                <div className={styles.inputFile}>
                  <input
                    type="file"
                    name="file"
                    placeholder="Carga una imagen"
                    value={input.file}
                    required={true}
                    onChange={uploadImage}
                  />
                </div>  
              </div>
                {/* <form action="" method="post"> */}
                <input type="text" value={url} hidden={true} />
                {/* </form> */}
            </div>
        </div>
          <div className={styles.containerImage}>{loading ? <Loader /> : <img src={image} alt="" height={250} />}</div>
        <input type="submit" className={styles.buttonSubmit} />
      </form>
    </div>
  );
};
