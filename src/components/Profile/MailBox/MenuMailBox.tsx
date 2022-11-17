import * as React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { categoryName } from "../../../utils/constants";

interface Props {
  changeFolder: (args: string) => void;
  changeCategory: (category: string) => void;
  resetPage: (number: number) => void;
}

const MenuMailBox: React.FC<Props> = ({ changeFolder, changeCategory, resetPage }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={() => changeCategory(categoryName.newMessage)}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="New message" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          changeFolder("sent");
          changeCategory(categoryName.sent);
          resetPage(0)
        }}
      >
        <ListItemIcon>
          <MarkEmailReadIcon />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          changeCategory(categoryName.drafts);
        }}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          changeFolder("inbox");
          handleClick();
          changeCategory(categoryName.inbox);
          resetPage(0)
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              changeFolder("unread");
              changeCategory(categoryName.unread);
              resetPage(0)
            }}
          >
            <ListItemIcon>
              <MarkEmailUnreadIcon />
            </ListItemIcon>
            <ListItemText primary="Unread" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              changeFolder("stared");
              changeCategory(categoryName.stared);
              resetPage(0)
            }}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        onClick={() => {
          changeFolder("trash");
          changeCategory(categoryName.deleted);
          resetPage(0)
        }}
      >
        <ListItemIcon>
          <DeleteOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Deleted" />
      </ListItemButton>
    </List>
  );
};

export default MenuMailBox;
