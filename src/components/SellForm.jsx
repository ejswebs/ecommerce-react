import { Box, Button, Link, makeStyles, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "flex-end",
  },
}));

const SellForm = ({
  paidRef,
  setPaidRef,
  client,
  setClient,
  date,
  setDate,
}) => {
  const { cartList, setConfirm } = useContext(GlobalContext);

  const { formContainer } = useStyles();

  const [paid, setPaid] = useState(false);


  return (
    <>
      <Box className={formContainer}>
        <Button
          disabled={paid && cartList?.length > 0}
          onClick={() => setPaid(true)}
          href="https://mpago.la/1MkAuAY"
          target="_blank"
        >
          Pagar con Mercado Pago
        </Button>
      </Box>
      {paid && (
        <Box className={formContainer}>
          <TextField
            label="Nombre"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <TextField
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Referencia de Pago"
            type="number"
            value={paidRef}
            onChange={(e) => setPaidRef(e.target.value)}
          />
          <Button
            disabled={!(client && date && paidRef && cartList?.length > 0)}
            onClick={() => setConfirm(true)}
          >
            Confirmar
          </Button>
        </Box>
      )}
    </>
  );
};

export default SellForm;
