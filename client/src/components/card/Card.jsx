import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import ShareIcon from "@mui/icons-material/Share";
import { useState, React } from "react";

export const Cards = ({
  name,
  resenia,
  imagen,
  likes,
  nameAutor,
  idUsuario,
  id,
}) => {
  const [like, setLike] = useState(likes);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (count % 2 === 0) {
      setLike(like + 1);
      setCount(count + 1);
      const likes = like + 1;
      const body = { likes };
      fetch("http://localhost:3001/obraArteLike/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else {
      setLike(like - 1);
      setCount(count - 1);
      const likes = like - 1;
      const body = { likes };
      fetch("http://localhost:3001/obraArteLike/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }
  };

  return (
    <li className={styles.container}>
      <div className={styles.containerImg}>
        <img src={imagen} alt="obra de arte" className={styles.imagen} />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{name}</p>
        <Link to={`/usuario/${idUsuario}`} className={styles.link}>
          <p className={styles.p}>Por {nameAutor}</p>
        </Link>
      </div>
      <p>
        {resenia}{" "}
        <Link to={"/obraArte/" + id} className={styles.link}>
          <p className={styles.p}>Ver mas... </p>
        </Link>
      </p>
      <CardActions disableSpacing className={styles.containerIcons}>
        <IconButton aria-label="add to favorites">
          {count % 2 === 0 ? (
            <FavoriteIcon
              className={styles.like}
              onClick={() => handleLike()}
            />
          ) : (
            <FavoriteIcon
              className={styles.like2}
              onClick={() => handleLike()}
            />
          )}
          <p>{like}</p>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
          <p>Compartir</p>
        </IconButton>
      </CardActions>
    </li>
  );
};
