import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "flex-end",
  },
}));

const SellForm = ({ client, setClient, date, setDate }) => {
  const { cartList, setConfirm } = useContext(GlobalContext);

  const { formContainer } = useStyles();

  return (
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
      <Button
        disabled={!(client && date && cartList?.length > 0)}
        onClick={() => setConfirm(true)}
      >
        Confirmar
      </Button>
    </Box>
  );
};

export default SellForm;
