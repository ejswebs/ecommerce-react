import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { Delete, MenuBook } from "@material-ui/icons";

const CartList = ({ cartList }) => {
  return (

    <List >
      {cartList.map((product, i) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MenuBook />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={'$ ' + (product.price)}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>)
      )
      }
    </List>
  )
}

export default CartList