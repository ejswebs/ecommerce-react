import React, { useState } from "react";

import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: "345px",
    height: "360px",
    margin: "15px",
    boxShadow:
      " 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    position: "relative",
  },
  media: {
    height: "200px",
  },
  descriptionBox: {
    marginTop: "5px",
    height: "65px",
    overflow: "auto",
  },
  cardFooter: {
    marginLeft: "5px",
    position: "absolute",
    bottom: "5px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    "& .MuiButton-root": {
      minWidth: "10%",
    },
  },
  cantInput: {
    width: "15%",
    textAlign: "center",
  },
}));

const ProductCard = ({ product, cartList, setCartList, total, setTotal }) => {
  const { card, media, descriptionBox, cardFooter, cantInput } = useStyles();
  const [cant, setCant] = useState(0);

  const addToCart = () => {
    if (cant > 0) {
      const price = parseFloat((product.price * 211.5).toFixed(2) * cant);
      setTotal(total + price);
      setCartList([
        ...cartList,
        { name: product.name, price: price, cant: cant },
      ]);
    }
  };

  return (
    <Card className={card}>
      <CardActionArea>
        <CardMedia className={media} image={product.img} title={product.name} />
        <CardContent>
          <Typography>{product.name}</Typography>
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
      <CardActions className={cardFooter}>
        <Typography>${(product.price * 211.5).toFixed(2)}</Typography>
        <Button onClick={() => setCant(cant - 1)} disabled={cant === 0}>
          -
        </Button>
        <TextField
          className={cantInput}
          onChange={(e) => setCant(e.target.value > 0 ? e.target.value : 0)}
          value={cant}
        />
        <Button onClick={() => setCant(cant + 1)}>+</Button>
        <Button onClick={addToCart} size="small" color="primary">
          AÑADIR
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
