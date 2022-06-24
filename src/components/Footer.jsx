import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "#AE008C",
  },
}));

const Footer = () => {
  const { appBar } = useStyles();

  return <Box className={appBar}></Box>;
};

export default Footer;
