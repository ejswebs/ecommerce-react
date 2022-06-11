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

const CartList = ({ cartList, setCartList, setTotal, total }) => {
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
              "Cantidad: " + product.cant + " - Subtotal $ " + product.price
            }
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteItem(i)}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default CartList;
