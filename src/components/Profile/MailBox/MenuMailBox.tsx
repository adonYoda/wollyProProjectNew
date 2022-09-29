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
  changeFlag: (flag: boolean) => void;
  changeCategory: (category: string) => void;
  refetch: () => void;
}

const NestedList: React.FC<Props> = ({ changeFolder, changeFlag, changeCategory, refetch }) => {
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
      <ListItemButton
        onClick={() => changeFlag(true)}
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="New message" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          changeFlag(false)
          changeFolder("sent");
          changeCategory(categoryName.sent);
        }}
      >
        <ListItemIcon>
          <MarkEmailReadIcon />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          changeFlag(false);
          changeFolder("drafts");
          changeCategory(categoryName.drafts)
        }}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          changeFlag(false);
          changeFolder("inbox");
          handleClick();
          changeCategory(categoryName.drafts);
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
              changeFlag(false)
              changeFolder("unread");
              changeCategory(categoryName.unread);
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
              changeFlag(false)
              changeFolder("stared");
              changeCategory(categoryName.stared);
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
          changeFlag(false)
          changeFolder("trash");
          changeCategory(categoryName.deleted);
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

export default NestedList;
