import { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import CartList from "./CartList";
import SellForm from "./SellForm";

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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5em",
  },
}));

const Cart = ({
  openCart,
  handleClose,
  cartList,
  setCartList,
  setTotal,
  total,
}) => {
  const { modal, modalContainer, closeIcon, cartBox, emptyCart, infoText } =
    useStyles();

  const [confirm, setConfirm] = useState(false);
  const [client, setClient] = useState();
  const [date, setDate] = useState();

  return (
    <Modal
      className={modal}
      open={openCart}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <>
        <Box className={modalContainer}>
          <IconButton onClick={handleClose} className={closeIcon}>
            <Close />
          </IconButton>
          {cartList.length > 0 ? (
            <>
              {confirm ? (
                <Typography className={infoText}>
                  Felicidades {client}! Podes pasar el {date} a retirar los
                  siguientes productos:
                </Typography>
              ) : (
                <Typography>Productos agregados:</Typography>
              )}
              <Box className={cartBox}>
                <CartList
                  cartList={cartList}
                  setCartList={setCartList}
                  total={total}
                  setTotal={setTotal}
                />
              </Box>
              {confirm ? (
                <Box />
              ) : (
                <>
                  <Typography>El total a abonar es de $ {total}</Typography>
                  <SellForm
                    client={client}
                    setClient={setClient}
                    cartList={cartList}
                    date={date}
                    setDate={setDate}
                    confirm={confirm}
                    setConfirm={setConfirm}
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
