import { useContext, useState } from "react";

import {
  Box,
  IconButton,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import CartList from "./CartList";
import SellForm from "./SellForm";
import GlobalContext from "../context/GlobalContext";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "0px",
    "& :focus": {
      outline: "none",
    },
  },
  modalContainer: {
    boxShadow: "0px 0px 25px 8px rgb(0 0 0 / 30%)",
    backgroundColor: "white",
    width: "60vw",
    height: "80vh",
    borderRadius: "25px",
    padding: "20px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeIcon: {
    padding: "6px",
    position: "absolute",
    right: "15px",
    top: "15px",
    zIndex: "100",
  },
  cartBox: {
    height: "75%",
    width: "80%",
    overflow: "auto",
  },
  emptyCart: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4em",
  },
  infoText: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5em",
    fontFamily: "K2D, sans-serif",
    textAlign: "center",
  },
}));

const Cart = () => {
  const { openCart, handleCart, cartList, total, confirm } =
    useContext(GlobalContext);

  const { modal, modalContainer, closeIcon, cartBox, emptyCart, infoText } =
    useStyles();

  const [client, setClient] = useState();
  const [date, setDate] = useState();

  return (
    <Modal
      className={modal}
      open={openCart}
      onClose={handleCart}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <>
        <Box className={modalContainer}>
          <IconButton onClick={handleCart} className={closeIcon}>
            <Close />
          </IconButton>
          {cartList.length > 0 ? (
            <>
              {confirm ? (
                <>
                  <Typography className={infoText}>
                    Felicidades {client}! Podes pasar el {date} a retirar los
                    siguientes productos:
                  </Typography>
                  <Box className={cartBox}>
                    <CartList />
                  </Box>
                </>
              ) : (
                <>
                  <Typography>Productos agregados:</Typography>
                  <Box className={cartBox}>
                    <CartList />
                  </Box>
                </>
              )}
              {confirm ? (
                <>
                  <Typography className={infoText}>
                    Te esperamos en Moreno 2502 - Resistencia
                  </Typography>
                  <Typography className={infoText}>
                    o comunicate al 3624 721322 para coordinar otro medio de
                    entrega
                  </Typography>
                </>
              ) : (
                <>
                  <Typography>El total a abonar es de $ {total}</Typography>
                  <SellForm
                    client={client}
                    setClient={setClient}
                    date={date}
                    setDate={setDate}
                  />
                </>
              )}
            </>
          ) : (
            <Typography className={emptyCart}>CARRITO VACIO</Typography>
          )}
        </Box>
      </>
    </Modal>
  );
};

export default Cart;
