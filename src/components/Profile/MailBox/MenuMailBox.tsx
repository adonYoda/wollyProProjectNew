import * as React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { IMessageQuery, IState, IUserProfile } from '../../../types';
import { useSelector } from 'react-redux';

interface Props{
    changeArgs: (args:string) => void
}


const NestedList: React.FC<Props> = ({changeArgs}) =>{
  const [open, setOpen] = React.useState(true);

  const handleClick =() => {
    setOpen(!open);
    changeArgs("sent")
  };

  

  return (
    <List
      sx={{ width: '100%',  bgcolor: '' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick ={() => {
           //TODO
        } }>
            <ListItemIcon>
              < MarkEmailUnreadIcon/>
            </ListItemIcon>
            <ListItemText primary="Unread" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          
        </List>
      </Collapse>
      <ListItemButton>
            <ListItemIcon>
              < DeleteOutlineIcon/>
            </ListItemIcon>
            <ListItemText primary="Deleted" />
          </ListItemButton>
    </List>
  );
}


export default NestedList;