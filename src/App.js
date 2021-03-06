import { Box, makeStyles } from "@material-ui/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { productList } from "./mocks/productList";
import Cart from "./components/Cart";
import { GlobalProvider } from "./context/GlobalContext";

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

  return (
    <GlobalProvider>
      <Header />
      <Box className={appContainer}>
        <Box className={productsList}>
          {productList?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </Box>
        <Footer />
      </Box>
      <Cart />
    </GlobalProvider>
  );
}

export default App;
