import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const handleCart = () => {
    setOpenCart(!openCart);
    if (confirm) {
      setConfirm(false);
      setCartList([]);
      setTotal(0);
    }
  };

  const data = {
    openCart,
    cartList,
    setCartList,
    total,
    setTotal,
    handleCart,
    confirm,
    setConfirm,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalContext;
