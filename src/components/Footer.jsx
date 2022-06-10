import { useState } from "react";

import { makeStyles, Box } from "@material-ui/core";
import { ShoppingCart, DoubleArrow } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    color: "#AE008C",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const { appBar, title, menuButton } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <Box className={appBar}></Box>;
};

export default Footer;
