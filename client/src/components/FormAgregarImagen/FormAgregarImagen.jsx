import React, { useState } from "react";
import styles from "./FormAgregarImagen.module.css";

import { Loader } from "../Loader/Loader";
const FormAgregarImagen = () => {
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

  console.log(url.toString);

  return (
    <div>
      <input
        type="file"
        name="file"
        placeholder="Carga una imagen"
        onChange={uploadImage}
      />

      <form action="" method="post">
        <input type="text" value={url} />
      </form>
      <div>{loading ? <Loader /> : <img src={image} alt="" />}</div>
    </div>
  );
};

export { FormAgregarImagen };
