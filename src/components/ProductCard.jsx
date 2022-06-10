import React from "react";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import productsList from "../mocks/productList.jsx";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "345px",
    maxHeight: "360x",
    margin: "15px",
    boxShadow:
      " 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  media: {
    height: "200px",
  },
  descriptionBox: {
    height: "50px",
    overflow: "auto",
  },
}));

const ProductCard = ({ product }) => {
  const { card, media, descriptionBox } = useStyles();

  return (
    <Card className={card}>
      <CardActionArea>
        <CardMedia className={media} image={product.img} title={product.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography
            className={descriptionBox}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          AÑADIR
        </Button>
        <Button size="small" color="primary">
          ${product.price * 211.5}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
