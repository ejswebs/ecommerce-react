import { Box, Button, IconButton, makeStyles, Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: (props) => (props.alignItems ? props.alignItems : "center"),
    backgroundColor: (props) =>
      props.modalBgColor ? props.modalBgColor : "rgba(0, 0, 0, 0.1)",
    padding: (props) => (props.paddingModal ? props.paddingModal : "0px"),
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
  },
  closeIcon: {
    padding: "6px",
    position: "absolute",
    right: "15px",
    top: "15px",
  },
}));

const Cart = ({ openCart, handleClose, cartList }) => {
  const { modal, modalContainer, closeIcon } = useStyles();

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
            <Close></Close>
          </IconButton>
          <Box>asdipaioshdoiasodhoiahsdoihas</Box>
        </Box>
      </>
    </Modal>
  );
};

export default Cart;
