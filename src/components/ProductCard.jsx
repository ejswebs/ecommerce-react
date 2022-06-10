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
    height: "360px",
    margin: "15px",
    boxShadow:
      " 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    position: 'relative'
  },
  media: {
    height: "200px",
  },
  descriptionBox: {
    marginTop: '5px',
    height: "65px",
    overflow: "auto",
  },
  cardFooter: {
    marginLeft: '5px',
    position: 'absolute',
    bottom: '5px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%'
  }
}));

const ProductCard = ({ product, cartList, setCartList, total, setTotal }) => {
  const { card, media, descriptionBox, cardFooter } = useStyles();


  const addToCart = () => {
    const price = parseFloat((product.price * 211.5).toFixed(2))
    setTotal(total + price)
    setCartList([...cartList, { name: product.name, price: price, cant: 1, }])
  }



  return (
    <Card className={card}>
      <CardActionArea>
        <CardMedia className={media} image={product.img} title={product.name} />
        <CardContent>
          <Typography>
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
      <CardActions className={cardFooter}>
        <Typography>
          ${(product.price * 211.5).toFixed(2)}
        </Typography>
        <Button onClick={addToCart} size="small" color="primary">
          AÑADIR
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
