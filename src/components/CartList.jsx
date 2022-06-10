import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Delete, Folder } from "@material-ui/icons";

<List dense={dense}>
  {generate(
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <Delete/>
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <Folder />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Single-line item"
        secondary={secondary ? "Secondary text" : null}
      />
    </ListItem>
  )}
</List>;
