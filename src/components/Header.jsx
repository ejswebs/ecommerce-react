import { useContext, useState } from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Badge,
} from "@material-ui/core";
import { ShoppingCart, DoubleArrow } from "@material-ui/icons";
import GlobalContext from "../context/GlobalContext";

const useStyles = makeStyles((theme) => ({
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

const Header = () => {
  const { handleCart, cartList, total } = useContext(GlobalContext);

  const { appBar, title, menuButton } = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openCartModal = () => {
    handleCart();
    handleClose();
  };

  return (
    <AppBar position="static" className={appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={menuButton}
          color="inherit"
          aria-label="menu"
        >
          <DoubleArrow />
        </IconButton>
        <Typography variant="h6" className={title}>
          El Rincon de la Frikitona
        </Typography>
        {true && (
          <>
            <Badge
              badgeContent={cartList.length}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="secondary"
            >
              <ShoppingCart />
            </Badge>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>Total: $ {total}</MenuItem>
              <MenuItem onClick={openCartModal}>Ver Carrito</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
