import { useSelector, useDispatch } from "react-redux";
import { getCategorias } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import styles from "./AgregarObraArte.module.css";

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
    usuario_id: "935a15ec-8ed6-4755-a30b-d01123f1d53d",
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
      let {
        oa_name,
        oa_resenia,
        oa_descripcion,
        oa_fechaCreacion,
        cat_id,
        usuario_id,
      } = input;

      let body = {
        oa_name,
        oa_resenia,
        oa_descripcion,
        oa_fechaCreacion,
        oa_imagen_obra: url,
        usuario_id,
        cat_id,
      };

      console.log(body);

      fetch("http://localhost:3001/obraArte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      alert("Obra de arte creada!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
      <input
        type="text"
        name="oa_name"
        placeholder="Nombre de la obra)"
        value={input.oa_name}
        onChange={handleInputChange}
        required={true}
      />
      <input
        type="text"
        name="oa_resenia"
        placeholder="Reseña (max 300 caracteres)"
        value={input.oa_resenia}
        onChange={handleInputChange}
        required={true}
      />
      <input
        type="text"
        name="oa_descripcion"
        placeholder="Descripcion..."
        value={input.oa_descripcion}
        onChange={handleInputChange}
        required={true}
      />
      <input
        type="date"
        name="oa_fechaCreacion"
        value={input.oa_fechaCreacion}
        onChange={handleInputChange}
        required={true}
      />
      <select onChange={handleInputChange} name="cat_id">
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
          <input type="text" value={url} hidden={true}/>
        </form>
        <div>{loading ? <Loader /> : <img src={image} alt="" />}</div>
      </div>
      <input type="submit" />
    </form>
  );
};
