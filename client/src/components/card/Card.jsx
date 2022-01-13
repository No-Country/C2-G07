import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import ShareIcon from "@mui/icons-material/Share";

export const Cards = ({
  name,
  reseña,
  fecha,
  imagen,
  likes,
  nameAutor,
  idUsuario,
  id
}) => {

  console.log(nameAutor)
  var date = new Date(fecha);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formatted_date;
  };

  console.log(formatDate(date));
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
        {reseña}{" "}
        <Link to={"/obraArte/"+id} className={styles.link}>
          Ver mas...
        </Link>
      </p>
      <CardActions disableSpacing className={styles.containerIcons}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={styles.like} />
          <p>{likes}</p>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
          <p>Compartir</p>
        </IconButton>
      </CardActions>
    </li>
  );
};
