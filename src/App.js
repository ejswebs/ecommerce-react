import { useState } from "react";

import { Box, makeStyles } from "@material-ui/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { productList } from "./mocks/productList";
import Cart from "./components/Cart";

const useStyles = makeStyles(() => ({
  appContainer: { width: "100%", height: "100%" },
  productsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    boxSizing: "border-box",
    height: "calc(100vh - 110px)",
    padding: "15px",
    overflow: "auto",
  },
}));

function App() {
  const { appContainer, productsList } = useStyles();

  const [openCart, setOpenCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  const handleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <Box className={appContainer}>
        <Header handleCart={handleCart} cartList={cartList} total={total} />
        <Box className={productsList}>
          {productList?.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              cartList={cartList}
              setCartList={setCartList}
              total={total}
              setTotal={setTotal}
            />
          ))}
        </Box>
        <Footer />
      </Box>
      <Cart
        openCart={openCart}
        handleClose={handleCart}
        cartList={cartList}
        setCartList={setCartList}
        setTotal={setTotal}
        total={total}
      ></Cart>
    </>
  );
}

export default App;
