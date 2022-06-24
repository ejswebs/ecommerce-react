import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete, MenuBook } from "@material-ui/icons";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const CartList = () => {
  const { cartList, setCartList, setTotal, total, confirm } =
    useContext(GlobalContext);

  const deleteItem = (i) => {
    setTotal(total - cartList[i].price);
    setCartList(cartList.filter((item, j) => j !== i));
  };

  return (
    <List>
      {cartList.map((product, i) => (
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar>
              <MenuBook />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={
              "Cantidad: " +
              product.cant +
              (!confirm ? " - Subtotal $ " + product.price : "")
            }
          />
          {!confirm && (
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteItem(i)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default CartList;
