import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import OutboxIcon from '@mui/icons-material/Outbox';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import DraftsIcon from '@mui/icons-material/Drafts';
import StarIcon from '@mui/icons-material/Star';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: "black",
  margin: 'px',
  height: '100%',
  padding: 0
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="New" />
        <FiberNewIcon/>
      </ListItem>
      <Divider  style={{backgroundColor: 'white'}}/>
      <ListItem button divider>
        <ListItemText primary="Sent" />
        <OutboxIcon/>
      </ListItem>
      <Divider  style={{backgroundColor: 'white'}} />
      <ListItem button>
        <ListItemText primary="Unread" />
        <MoveToInboxIcon/>
      </ListItem>
      <Divider  style={{backgroundColor: 'white'}} />
      <ListItem button>
        <ListItemText primary="Drafts" />
        <DraftsIcon/>
      </ListItem>
      <Divider  style={{backgroundColor: 'white'}} />
      <ListItem button>
        <ListItemText primary="Stared" />
        <StarIcon/>
      </ListItem>
      <Divider  style={{backgroundColor: 'white'}} />
      <ListItem button>
        <ListItemText primary="Deleted" />
        <FolderDeleteIcon/>
      </ListItem>
    </List>
  );
}