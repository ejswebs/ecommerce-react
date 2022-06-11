import { Box, Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
}));

const SellForm = ({
  cartList,
  client,
  setClient,
  date,
  setDate,
  setConfirm,
}) => {
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
        disabled={!(client && date && cartList.length > 0)}
        onClick={() => setConfirm(true)}
      >
        Confirmar
      </Button>
    </Box>
  );
};

export default SellForm;
