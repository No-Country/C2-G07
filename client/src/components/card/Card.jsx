import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";


export const Cards = ({
  name,
  descripcion,
  fecha,
  imagen,
  likes,
  imagenUsuario,
  nameAutor,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var date = new Date(fecha);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formatted_date;
  };

  console.log(formatDate(date));
  return (
    <li className="">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={imagenUsuario} alt="usuario" width="50" />
            </Avatar>
          }
          title={name + " creado por " + nameAutor + " el"}
          subheader={formatDate(date)}
        />
        <CardMedia
          component="img"
          height="194"
          image={imagen}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <p>{likes}</p>
          </IconButton>
        </CardActions>
      </Card>
    </li>
  );
};
